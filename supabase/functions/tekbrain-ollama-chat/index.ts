// Supabase Edge Function: tekbrain-ollama-chat
//
// Complete local AI chat using Ollama for embeddings + generation.
// Zero API costs, completely free and offline.
//
// Required Supabase secrets (set via: npx supabase secrets set KEY=value):
//   OLLAMA_BASE_URL (default: http://localhost:11434)
//   OLLAMA_EMBED_MODEL (default: nomic-embed-text)
//   OLLAMA_CHAT_MODEL (default: neural-chat)
//   SUPABASE_URL
//   SUPABASE_SERVICE_ROLE_KEY
//
// Models to try:
//   - nomic-embed-text (137M, fast embeddings)
//   - mxbai-embed-large (334M, better embeddings)
//   - neural-chat (4.1B, fast responses)
//   - mistral (7.3B, better quality)
//   - orca-mini (3.3B, good balance)

import { createClient, SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// ── Configuration ────────────────────────────────────────────────────
const OLLAMA_BASE = Deno.env.get('OLLAMA_BASE_URL') ?? 'http://localhost:11434';
const EMBED_MODEL = Deno.env.get('OLLAMA_EMBED_MODEL') ?? 'nomic-embed-text';
const CHAT_MODEL = Deno.env.get('OLLAMA_CHAT_MODEL') ?? 'neural-chat';
const MATCH_COUNT = 5;

const SYSTEM_PROMPT = `You are TekBrain, a friendly tech helper on TekSure.com for everyday people — especially seniors and non-technical users.

How to answer:
- Use plain, jargon-free language. If you must use a technical word, explain it in parentheses.
- Be warm and encouraging. Never condescending.
- When the question is "how do I…", answer with numbered steps.
- Keep answers under 200 words unless the user asks for more detail.
- Format with short paragraphs and bold key buttons/options when helpful.

Grounding rules (very important):
- Answer ONLY using the guide content provided in the CONTEXT section below.
- If the context does not contain the answer, reply with exactly:
  "I don't have information about that yet. You can book a real person to help at teksure.com/book"
- Never invent tech steps, commands, or settings that aren't in the context.`;

// ── Types ────────────────────────────────────────────────────────────
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
  similarity: number;
}

interface CitedChunk {
  id: string;
  source_type: 'guide';
  guide_id: string;
  guide_title: string;
  heading: string | null;
  similarity: number;
}

// ── Main Handler ─────────────────────────────────────────────────────
Deno.serve(async (req) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return jsonError('Method not allowed. Use POST.', 405);
  }

  // ── Environment Setup ────────────────────────────────────────────
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

  if (!supabaseUrl || !serviceRoleKey) {
    return jsonError('Supabase credentials are not configured.', 500);
  }

  // ── Parse Request ───────────────────────────────────────────────
  let body: ChatRequestBody;
  try {
    body = (await req.json()) as ChatRequestBody;
  } catch {
    return jsonError('Request body must be valid JSON.', 400);
  }

  const message = body.message?.trim();
  const sessionId = body.session_id?.trim();
  const userId = body.user_id?.trim() || null;
  let conversationId = body.conversation_id?.trim() || null;

  if (!message) {
    return jsonError('`message` is required.', 400);
  }
  if (!sessionId) {
    return jsonError('`session_id` is required.', 400);
  }
  if (message.length > 4000) {
    return jsonError('`message` is too long (max 4000 characters).', 400);
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  try {
    // ── 1. Ensure conversation exists ────────────────────────────
    conversationId = await ensureConversation(supabase, {
      conversationId,
      sessionId,
      userId,
    });

    // ── 2. Save user message ────────────────────────────────────
    await supabase.from('tekbrain_messages').insert({
      conversation_id: conversationId,
      role: 'user',
      content: message,
      chunks_used: [],
    });

    // ── 3. Embed the question with Ollama ────────────────────────
    let embedding: number[];
    try {
      embedding = await embedWithOllama(message);
    } catch (err) {
      console.error('Embedding failed:', err);
      return jsonError(
        'Ollama is not running. Please start Ollama and try again: ollama serve',
        503
      );
    }

    if (!embedding || embedding.length === 0) {
      return jsonError('Failed to generate embedding.', 502);
    }

    // ── 4. Find matching guides ─────────────────────────────────
    const chunks = await matchChunks(supabase, embedding, MATCH_COUNT);
    const citedChunks: CitedChunk[] = chunks.map((c) => ({
      id: c.id,
      source_type: 'guide',
      guide_id: c.guide_id,
      guide_title: c.guide_title,
      heading: c.heading,
      similarity: c.similarity,
    }));

    // ── 5. Load recent conversation history ─────────────────────
    const history = await loadRecentHistory(supabase, conversationId, 4);

    // ── 6. Build context block ──────────────────────────────────
    const contextBlock = buildContextBlock(chunks);
    const systemPrompt = `${SYSTEM_PROMPT}\n\nCONTEXT (retrieved TekSure guide chunks):\n${contextBlock}`;

    // ── 7. Build messages for Ollama ────────────────────────────
    const messages = [
      { role: 'system', content: systemPrompt },
      ...history,
      { role: 'user', content: message },
    ];

    // ── 8. Stream response from Ollama ──────────────────────────
    const stream = await buildOllamaStream({
      model: CHAT_MODEL,
      messages,
      conversationId,
      citedChunks,
      supabase,
      onComplete: async (fullText) => {
        // Save assistant message
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
    console.error('tekbrain-ollama-chat error:', err);
    const msg = err instanceof Error ? err.message : 'Unknown server error.';
    return jsonError(msg, 500);
  }
});

// ── Helpers ──────────────────────────────────────────────────────────

/**
 * Create or load a conversation, checking ownership.
 */
async function ensureConversation(
  supabase: SupabaseClient,
  opts: { conversationId: string | null; sessionId: string; userId: string | null }
): Promise<string> {
  const { conversationId, sessionId, userId } = opts;

  if (conversationId) {
    const { data, error } = await supabase
      .from('tekbrain_conversations')
      .select('id, user_id, session_id')
      .eq('id', conversationId)
      .maybeSingle();

    if (error) throw new Error(`Could not load conversation: ${error.message}`);
    if (!data) throw new Error('Conversation not found.');

    const ownedBySession = data.session_id === sessionId;
    const ownedByUser = userId && data.user_id && data.user_id === userId;
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
 * Embed text using Ollama's embedding API.
 */
async function embedWithOllama(text: string): Promise<number[]> {
  const resp = await fetch(`${OLLAMA_BASE}/api/embed`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal: AbortSignal.timeout(30_000),
    body: JSON.stringify({
      model: EMBED_MODEL,
      input: text,
    }),
  });

  if (!resp.ok) {
    const errText = await resp.text();
    throw new Error(`Ollama embedding failed: ${resp.status} ${errText}`);
  }

  const data = await resp.json();
  const embeddings = data.embeddings;

  if (!embeddings || !Array.isArray(embeddings) || embeddings.length === 0) {
    throw new Error('No embeddings returned from Ollama');
  }

  return embeddings[0];
}

/**
 * Call the match_guide_chunks RPC to find relevant guides.
 */
async function matchChunks(
  supabase: SupabaseClient,
  queryEmbedding: number[],
  matchCount: number
): Promise<GuideChunk[]> {
  const { data, error } = await supabase.rpc('match_guide_chunks', {
    query_embedding: queryEmbedding,
    match_count: matchCount,
  });

  if (error) {
    console.error('match_guide_chunks error:', error);
    throw new Error('Could not search the guide library.');
  }

  return (data ?? []) as GuideChunk[];
}

/**
 * Load recent conversation history (last N turns).
 */
async function loadRecentHistory(
  supabase: SupabaseClient,
  conversationId: string,
  limit: number
): Promise<Array<{ role: 'user' | 'assistant'; content: string }>> {
  const { data, error } = await supabase
    .from('tekbrain_messages')
    .select('role, content, timestamp')
    .eq('conversation_id', conversationId)
    .in('role', ['user', 'assistant'])
    .order('timestamp', { ascending: false })
    .limit(limit);

  if (error || !data) return [];

  const reversed = [...data].reverse();
  return reversed.slice(0, -1).map((m) => ({
    role: m.role as 'user' | 'assistant',
    content: m.content,
  }));
}

/**
 * Build the CONTEXT block from guide chunks.
 */
function buildContextBlock(chunks: GuideChunk[]): string {
  if (chunks.length === 0) {
    return '(No matching TekSure guides found for this question.)';
  }

  return chunks
    .map((c, i) => {
      const heading = c.heading ? ` — ${c.heading}` : '';
      return `[#${i + 1}] Guide: "${c.guide_title}"${heading}\n${c.content.trim()}`;
    })
    .join('\n\n---\n\n');
}

/**
 * Stream response from Ollama as SSE.
 */
async function buildOllamaStream(opts: {
  model: string;
  messages: Array<{ role: string; content: string }>;
  conversationId: string;
  citedChunks: CitedChunk[];
  supabase: SupabaseClient;
  onComplete: (fullText: string) => Promise<void>;
}): Promise<ReadableStream<Uint8Array>> {
  const { model, messages, conversationId, citedChunks, supabase, onComplete } = opts;
  const encoder = new TextEncoder();

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        // Send meta event with conversation ID and sources
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

        // Call Ollama chat API
        const resp = await fetch(`${OLLAMA_BASE}/api/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: AbortSignal.timeout(120_000), // 2 minute timeout for long responses
          body: JSON.stringify({
            model,
            messages,
            stream: true,
            temperature: 0.3, // Lower = more consistent/factual
          }),
        });

        if (!resp.ok) {
          const errText = await resp.text();
          console.error('Ollama chat error:', resp.status, errText);
          throw new Error(`Ollama returned ${resp.status}: ${errText}`);
        }

        if (!resp.body) {
          throw new Error('No response body from Ollama');
        }

        // Stream Ollama responses
        let fullText = '';
        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });

          // Ollama sends one JSON object per line
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? ''; // Keep incomplete line in buffer

          for (const line of lines) {
            if (!line.trim()) continue;

            try {
              const json = JSON.parse(line);
              const response = json.message?.content ?? '';

              if (response) {
                fullText += response;
                controller.enqueue(
                  encoder.encode(sseEvent('token', { text: response }))
                );
              }

              // Check if this is the final message
              if (json.done) {
                await onComplete(fullText);
                controller.enqueue(
                  encoder.encode(
                    sseEvent('done', {
                      finish_reason: 'stop',
                      chars: fullText.length,
                    })
                  )
                );
                controller.close();
                return;
              }
            } catch (parseErr) {
              console.warn('Skipping malformed Ollama line:', parseErr);
            }
          }
        }

        // Handle any remaining buffered content
        if (buffer.trim()) {
          try {
            const json = JSON.parse(buffer);
            const response = json.message?.content ?? '';
            if (response) {
              fullText += response;
              controller.enqueue(
                encoder.encode(sseEvent('token', { text: response }))
              );
            }
          } catch {
            /* ignore */
          }
        }

        // Fallback completion
        await onComplete(fullText);
        controller.enqueue(
          encoder.encode(
            sseEvent('done', { finish_reason: 'stop', chars: fullText.length })
          )
        );
        controller.close();
      } catch (err) {
        console.error('Stream error:', err);
        const msg = err instanceof Error ? err.message : 'Streaming failed';
        controller.enqueue(encoder.encode(sseEvent('error', { error: msg })));
        controller.close();
      }
    },
  });
}

/**
 * Format SSE event.
 */
function sseEvent(eventName: string, payload: unknown): string {
  return `event: ${eventName}\ndata: ${JSON.stringify(payload)}\n\n`;
}

/**
 * JSON error response.
 */
function jsonError(message: string, status: number): Response {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}
