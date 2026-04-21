// ─────────────────────────────────────────────────────────────────────────────
// Supabase Edge Function: tekbrain-chat
//
// The brain of TekBrain v2 — TekSure's retrieval-augmented chat assistant.
//
// Flow per request:
//   1. Parse + validate the incoming POST body.
//   2. Ensure a tekbrain_conversations row exists (create if first turn).
//   3. Persist the user's message to tekbrain_messages.
//   4. Embed the question with OpenAI `text-embedding-3-small` (1536 dims).
//   5. Call the SQL helper `match_guide_chunks(embedding, 5)` to pull the most
//      relevant guide snippets for grounding.
//   6. Build a senior-friendly system prompt that forces citations and refuses
//      to invent steps when the retrieved context is empty.
//   7. Stream the chat completion (gpt-4o-mini) back to the browser via SSE,
//      simultaneously accumulating the full reply in memory.
//   8. When the stream finishes, save the assistant's turn with the list of
//      chunks it saw (chunks_used) so the UI can render sources and we can
//      audit retrieval quality later.
//
// Request body:
//   {
//     message:          string,
//     conversation_id?: string,   // pass to continue an existing conversation
//     session_id:       string,   // client-generated UUID for anonymous users
//     user_id?:         string,   // optional auth.users.id if signed in
//   }
//
// Response: text/event-stream with three event types:
//   event: meta   — one-shot JSON { conversation_id, chunks: [...] }
//   event: token  — repeated JSON { text: "<chunk of assistant reply>" }
//   event: done   — one-shot JSON { message_id, finish_reason }
//   event: error  — one-shot JSON { error: "<message>" } on failure
//
// Required Supabase secrets:
//   SUPABASE_URL
//   SUPABASE_SERVICE_ROLE_KEY
//   OPENAI_API_KEY
// Optional:
//   OPENAI_CHAT_MODEL       (default: gpt-4o-mini)
//   OPENAI_EMBED_MODEL      (default: text-embedding-3-small)
// ─────────────────────────────────────────────────────────────────────────────

import { createClient, SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ── CORS ─────────────────────────────────────────────────────────────────────
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  // The client reads conversation_id off the SSE `meta` event, but also via
  // response headers for callers that don't parse the stream themselves.
  'Access-Control-Expose-Headers': 'X-Conversation-Id',
};

// ── Models & tuning knobs ────────────────────────────────────────────────────
const CHAT_MODEL  = Deno.env.get('OPENAI_CHAT_MODEL')  ?? 'gpt-4o-mini';
const EMBED_MODEL = Deno.env.get('OPENAI_EMBED_MODEL') ?? 'text-embedding-3-small';
const MATCH_COUNT = 5;

// ── The senior-friendly system prompt ────────────────────────────────────────
// Rules in priority order:
//   1. Plain, warm language — never condescending.
//   2. Always cite the guide(s) the answer comes from.
//   3. If the retrieved context doesn't cover the question, escape to the
//      booking page instead of hallucinating tech steps.
//   4. Numbered steps for any "how do I…" question.
//   5. Short — 200 words is the ceiling unless the user explicitly asks for more.
const SYSTEM_PROMPT_BASE = `You are TekBrain, a friendly tech helper on TekSure.com for everyday people — especially seniors and non-technical users.

How to answer:
- Use plain, jargon-free language. If you must use a technical word, explain it in parentheses.
- Be warm and encouraging. Never condescending.
- When the question is "how do I…", answer with numbered steps.
- Keep answers under 200 words unless the user asks for more detail.
- Format with short paragraphs and bold key buttons/options when helpful.

Grounding rules (very important):
- Answer ONLY using the guide content provided in the CONTEXT section below.
- ALWAYS cite which guide(s) you used at the end, like: "Source: [Guide Title]".
- If the context does not contain the answer, reply with exactly:
  "I don't have information about that yet. You can book a real person to help at teksure.com/book"
- Never invent tech steps, commands, or settings that aren't in the context.`;

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface ChatRequestBody {
  message: string;
  conversation_id?: string;
  session_id: string;
  user_id?: string | null;
}

interface GuideChunk {
  id: string;
  guide_id: string;
  guide_title: string;
  category: string;
  chunk_index: number;
  heading: string | null;
  content: string;
  metadata: Record<string, unknown>;
  similarity: number;
}

// Shape we persist into tekbrain_messages.chunks_used — trimmed so the JSONB
// stays small and the UI can render "Sources" cleanly.
interface CitedChunk {
  id: string;
  guide_id: string;
  guide_title: string;
  heading: string | null;
  similarity: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Main handler
// ─────────────────────────────────────────────────────────────────────────────

Deno.serve(async (req) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return jsonError('Method not allowed. Use POST.', 405);
  }

  // ── Env / secret wiring ──────────────────────────────────────────────────
  const supabaseUrl    = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  const openaiKey      = Deno.env.get('OPENAI_API_KEY');

  if (!supabaseUrl || !serviceRoleKey) {
    return jsonError('Supabase credentials are not configured on the server.', 500);
  }
  if (!openaiKey) {
    return jsonError('OPENAI_API_KEY is not configured on the server.', 500);
  }

  // ── Parse + validate body ────────────────────────────────────────────────
  let body: ChatRequestBody;
  try {
    body = (await req.json()) as ChatRequestBody;
  } catch {
    return jsonError('Request body must be valid JSON.', 400);
  }

  const message        = body.message?.trim();
  const sessionId      = body.session_id?.trim();
  const userId         = body.user_id?.trim() || null;
  let   conversationId = body.conversation_id?.trim() || null;

  if (!message) {
    return jsonError('`message` is required.', 400);
  }
  if (!sessionId) {
    return jsonError('`session_id` is required.', 400);
  }
  if (message.length > 4000) {
    return jsonError('`message` is too long (max 4000 characters).', 400);
  }

  // Service-role client — RLS bypass is required because we insert assistant
  // messages on behalf of the user and write to guide_chunks indirectly.
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  try {
    // ── 1. Ensure a conversation row exists ──────────────────────────────
    conversationId = await ensureConversation(supabase, {
      conversationId,
      sessionId,
      userId,
    });

    // ── 2. Persist the user's turn ───────────────────────────────────────
    await supabase.from('tekbrain_messages').insert({
      conversation_id: conversationId,
      role: 'user',
      content: message,
      chunks_used: [],
    });

    // ── 3. Embed the question ────────────────────────────────────────────
    const embedding = await embedText(openaiKey, message);

    // ── 4. Retrieve top-N relevant chunks ────────────────────────────────
    const chunks = await matchChunks(supabase, embedding, MATCH_COUNT);

    // Lightweight citation payload saved alongside the assistant message.
    const citedChunks: CitedChunk[] = chunks.map((c) => ({
      id: c.id,
      guide_id: c.guide_id,
      guide_title: c.guide_title,
      heading: c.heading,
      similarity: Number(c.similarity.toFixed(4)),
    }));

    // ── 5. Build the messages array for the chat completion ──────────────
    const contextBlock = buildContextBlock(chunks);
    const systemPrompt = `${SYSTEM_PROMPT_BASE}\n\nCONTEXT (retrieved TekSure guide chunks):\n${contextBlock}`;

    // A tiny slice of prior turns keeps the conversation coherent without
    // blowing up token usage. We cap at 6 most-recent user/assistant turns.
    const history = await loadRecentHistory(supabase, conversationId, 6);

    const openaiMessages = [
      { role: 'system', content: systemPrompt },
      ...history,
      { role: 'user', content: message },
    ];

    // ── 6. Kick off the streaming chat completion ────────────────────────
    const openaiResp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: CHAT_MODEL,
        messages: openaiMessages,
        stream: true,
        temperature: 0.3,
        max_tokens: 500,
      }),
    });

    if (!openaiResp.ok || !openaiResp.body) {
      const errText = await openaiResp.text().catch(() => '');
      console.error('OpenAI chat error:', openaiResp.status, errText);

      // Rate limit / overload → 429 passthrough; everything else → 502.
      const status = openaiResp.status === 429 ? 429 : 502;
      const friendly = openaiResp.status === 429
        ? 'TekBrain is a little busy right now. Please try again in a moment.'
        : 'The AI service is temporarily unavailable. Please try again.';
      return jsonError(friendly, status);
    }

    // ── 7. Pipe OpenAI SSE → our SSE, collecting full text as we go ──────
    const stream = buildClientStream({
      openaiBody: openaiResp.body,
      conversationId,
      citedChunks,
      onComplete: async (fullText, finishReason) => {
        // Save the assistant turn once streaming ends. Errors here shouldn't
        // surface to the user since they already saw the answer — log them
        // for offline debugging.
        try {
          await supabase.from('tekbrain_messages').insert({
            conversation_id: conversationId,
            role: 'assistant',
            content: fullText,
            chunks_used: citedChunks,
            model_name: CHAT_MODEL,
          });
        } catch (err) {
          console.error('Failed to save assistant message:', err);
        }

        // Light-touch bookkeeping: mark the conversation as recently active.
        try {
          await supabase
            .from('tekbrain_conversations')
            .update({ metadata: { last_finish_reason: finishReason ?? 'stop' } })
            .eq('id', conversationId!);
        } catch {
          /* non-critical */
        }
      },
    });

    return new Response(stream, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
        'X-Conversation-Id': conversationId,
      },
    });
  } catch (err) {
    console.error('tekbrain-chat error:', err);
    const msg = err instanceof Error ? err.message : 'Unknown server error.';
    return jsonError(msg, 500);
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Either returns an existing conversation_id (after verifying ownership) or
 * creates a new conversation row. We pin user_id if provided so signed-in
 * users can see their history later; anonymous sessions are threaded by
 * session_id alone.
 */
async function ensureConversation(
  supabase: SupabaseClient,
  opts: { conversationId: string | null; sessionId: string; userId: string | null },
): Promise<string> {
  const { conversationId, sessionId, userId } = opts;

  if (conversationId) {
    const { data, error } = await supabase
      .from('tekbrain_conversations')
      .select('id, user_id, session_id')
      .eq('id', conversationId)
      .maybeSingle();

    if (error) throw new Error(`Could not load conversation: ${error.message}`);
    if (!data)  throw new Error('Conversation not found.');

    // Soft ownership check: session_id must match, or user_id must match if
    // the row was created for a signed-in user.
    const ownedBySession = data.session_id === sessionId;
    const ownedByUser    = userId && data.user_id && data.user_id === userId;
    if (!ownedBySession && !ownedByUser) {
      throw new Error('This conversation does not belong to the current session.');
    }
    return data.id;
  }

  const { data, error } = await supabase
    .from('tekbrain_conversations')
    .insert({ session_id: sessionId, user_id: userId })
    .select('id')
    .single();

  if (error) throw new Error(`Could not start conversation: ${error.message}`);
  return data.id;
}

/**
 * Calls OpenAI's embeddings endpoint and returns the raw 1536-dim float array.
 * We throw a friendly error on non-200 so the caller can surface a generic
 * "temporarily unavailable" message to the user.
 */
async function embedText(apiKey: string, text: string): Promise<number[]> {
  const resp = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: EMBED_MODEL,
      input: text,
    }),
  });

  if (!resp.ok) {
    const errText = await resp.text().catch(() => '');
    console.error('OpenAI embeddings error:', resp.status, errText);
    if (resp.status === 429) {
      throw new Error('TekBrain is a little busy right now. Please try again in a moment.');
    }
    throw new Error('Could not understand the question right now. Please try again.');
  }

  const data = await resp.json();
  const embedding: number[] | undefined = data?.data?.[0]?.embedding;
  if (!embedding || !Array.isArray(embedding)) {
    throw new Error('Embedding response was empty.');
  }
  return embedding;
}

/**
 * Wraps the `match_guide_chunks` RPC. Returns an empty array if no chunks are
 * found so the caller can trigger the "I don't have information" fallback
 * without blowing up.
 */
async function matchChunks(
  supabase: SupabaseClient,
  queryEmbedding: number[],
  matchCount: number,
): Promise<GuideChunk[]> {
  const { data, error } = await supabase.rpc('match_guide_chunks', {
    query_embedding: queryEmbedding,
    match_count:     matchCount,
  });

  if (error) {
    console.error('match_guide_chunks error:', error);
    throw new Error('Could not search the guide library. Please try again.');
  }
  return (data ?? []) as GuideChunk[];
}

/**
 * Formats retrieved chunks into the CONTEXT block that gets glued onto the
 * system prompt. Each chunk is numbered and labeled with its guide title so
 * the model can cite accurately.
 */
function buildContextBlock(chunks: GuideChunk[]): string {
  if (chunks.length === 0) {
    return '(No matching TekSure guides were found for this question.)';
  }

  return chunks
    .map((c, i) => {
      const heading = c.heading ? ` — ${c.heading}` : '';
      return `[#${i + 1}] Guide: "${c.guide_title}"${heading}\n${c.content.trim()}`;
    })
    .join('\n\n---\n\n');
}

/**
 * Pulls the last `limit` user/assistant turns for conversation continuity.
 * We exclude any system messages and order chronologically. If something
 * goes wrong we silently return an empty history rather than failing the
 * whole request.
 */
async function loadRecentHistory(
  supabase: SupabaseClient,
  conversationId: string,
  limit: number,
): Promise<Array<{ role: 'user' | 'assistant'; content: string }>> {
  const { data, error } = await supabase
    .from('tekbrain_messages')
    .select('role, content, timestamp')
    .eq('conversation_id', conversationId)
    .in('role', ['user', 'assistant'])
    .order('timestamp', { ascending: false })
    .limit(limit);

  if (error || !data) return [];

  // We fetched newest-first; reverse so the model sees them oldest-first,
  // and drop the just-inserted current user message (same content at index 0).
  const reversed = [...data].reverse();
  // Remove the last entry if it matches the current message to avoid duplication
  // — safer to rely on chronology + slice than on content equality checks.
  return reversed.slice(0, -1).map((m) => ({
    role: m.role as 'user' | 'assistant',
    content: m.content,
  }));
}

/**
 * Converts OpenAI's raw SSE body into our client-facing SSE:
 *   event: meta  (once, up front)
 *   event: token (once per delta)
 *   event: done  (once, at end)
 *   event: error (if anything blows up mid-stream)
 *
 * We also accumulate the full text so the caller can persist the final
 * assistant message in the onComplete callback.
 */
function buildClientStream(opts: {
  openaiBody: ReadableStream<Uint8Array>;
  conversationId: string;
  citedChunks: CitedChunk[];
  onComplete: (fullText: string, finishReason: string | null) => Promise<void>;
}): ReadableStream<Uint8Array> {
  const { openaiBody, conversationId, citedChunks, onComplete } = opts;

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      // 1) Emit the meta event so the client knows the conversation_id to
      //    store and can render "Sources" cards before the first token lands.
      const meta = {
        conversation_id: conversationId,
        chunks: citedChunks.map((c) => ({
          id: c.id,
          guide_id: c.guide_id,
          guide_title: c.guide_title,
          heading: c.heading,
          similarity: c.similarity,
        })),
      };
      controller.enqueue(encoder.encode(sseEvent('meta', meta)));

      let fullText = '';
      let finishReason: string | null = null;
      let buffer = '';
      const reader = openaiBody.getReader();

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });

          // OpenAI SSE frames are separated by double newlines. Process every
          // complete frame we have and leave any trailing partial in `buffer`.
          const frames = buffer.split('\n\n');
          buffer = frames.pop() ?? '';

          for (const frame of frames) {
            // Each frame is one or more `data: ...` lines. We only care about
            // the JSON on the `data:` lines.
            const dataLines = frame
              .split('\n')
              .filter((l) => l.startsWith('data:'))
              .map((l) => l.slice(5).trim());

            for (const dataLine of dataLines) {
              if (!dataLine) continue;
              if (dataLine === '[DONE]') {
                // OpenAI's terminal sentinel. We let the outer loop finish
                // naturally on the next read.
                continue;
              }

              try {
                const parsed = JSON.parse(dataLine);
                const delta = parsed?.choices?.[0]?.delta?.content ?? '';
                const fr    = parsed?.choices?.[0]?.finish_reason;
                if (fr) finishReason = fr;

                if (delta) {
                  fullText += delta;
                  controller.enqueue(encoder.encode(sseEvent('token', { text: delta })));
                }
              } catch (parseErr) {
                // A malformed frame shouldn't kill the whole stream — log it
                // and keep going. OpenAI very occasionally sends keepalive
                // comments that aren't valid JSON.
                console.warn('Skipping malformed SSE frame:', parseErr);
              }
            }
          }
        }

        // 2) Flush anything left in the buffer (unlikely but safe).
        if (buffer.trim().startsWith('data:')) {
          const tail = buffer.slice(5).trim();
          if (tail && tail !== '[DONE]') {
            try {
              const parsed = JSON.parse(tail);
              const delta = parsed?.choices?.[0]?.delta?.content ?? '';
              if (delta) {
                fullText += delta;
                controller.enqueue(encoder.encode(sseEvent('token', { text: delta })));
              }
            } catch { /* ignore trailing garbage */ }
          }
        }
      } catch (err) {
        console.error('Stream read error:', err);
        const msg = err instanceof Error ? err.message : 'Streaming failed.';
        controller.enqueue(encoder.encode(sseEvent('error', { error: msg })));
      } finally {
        // 3) Persist the assistant message + emit the done event.
        try {
          await onComplete(fullText, finishReason);
        } catch (err) {
          console.error('onComplete failed:', err);
        }

        controller.enqueue(encoder.encode(sseEvent('done', {
          finish_reason: finishReason ?? 'stop',
          chars: fullText.length,
        })));
        controller.close();
      }
    },
  });
}

/**
 * Tiny helper — formats a named SSE event with a JSON payload. Keeps the
 * stream builder readable.
 */
function sseEvent(eventName: string, payload: unknown): string {
  return `event: ${eventName}\ndata: ${JSON.stringify(payload)}\n\n`;
}

/**
 * Standard JSON error response with CORS headers — used for non-streaming
 * failures (bad request, auth missing, upstream down before the stream starts).
 */
function jsonError(message: string, status: number): Response {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}
