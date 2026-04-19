/**
 * brain-query
 *
 * RAG-style answer for the TekSure Brain UI.
 *
 * Pipeline:
 *   1. Accept { question } from the client.
 *   2. Retrieve up to 5 top-ranked entries from `knowledge_documents` via
 *      the `search_knowledge_documents` RPC (Postgres full-text search).
 *   3. Build a prompt from title + summary + markdown snippet + source URL.
 *   4. Try Ollama first (when OLLAMA_BASE_URL is reachable).
 *   5. Fall back to Claude Haiku if Ollama is unavailable or errors.
 *   6. Return { answer, sources[], model_used }.
 *
 * Backward compat: if the request body includes a `context` string, that
 * string is passed to the LLM verbatim (pre-Phase-2 clients keep working).
 *
 * Auth: anon JWT is fine for the public Brain UI. The RPC runs with
 * SECURITY INVOKER but this edge function uses the service_role key
 * internally to bypass RLS on knowledge_documents.
 */

import { serve }        from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ─── Config ───────────────────────────────────────────────────────────────────

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SUPABASE_URL       = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SVC_KEY   = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const ANTHROPIC_API_KEY  = Deno.env.get('ANTHROPIC_API_KEY');
const OLLAMA_BASE_URL    = Deno.env.get('OLLAMA_BASE_URL');
const OLLAMA_MODEL       = Deno.env.get('OLLAMA_MODEL') ?? 'llama3.2:1b';

const CLAUDE_MODEL = 'claude-haiku-4-5-20251001';

/** Top-K documents to retrieve from the KB */
const TOP_K = 5;

/** Max characters per document included in the prompt (keeps token cost low) */
const MAX_DOC_CHARS = 1500;

// ─── Types ───────────────────────────────────────────────────────────────────

interface KnowledgeHit {
  id:         string;
  title:      string;
  source_url: string;
  summary:    string;
  markdown:   string;
  keywords:   string[];
  rank:       number;
}

interface BrainResponse {
  answer:       string;
  sources:      Array<{ title: string; url: string; summary: string }>;
  model_used:   'ollama' | 'claude' | 'none';
  kb_hits:      number;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

function buildPrompt(question: string, context: string): string {
  return `You are TekSure, a warm, plain-English tech helper for US seniors and non-technical adults.

Rules:
- Answer the question in 2–4 short sentences.
- Use ONLY information from the SOURCES below. If the sources do not contain the answer, say "I don't have a verified answer for that yet — try browsing our guides." and stop.
- Every sentence ≤ 15 words.
- Never use "simply", "just", "obviously", "Pro Tip", or similar belittling language.
- Speak directly to the reader as "you".
- If you reference a step, mention the source title in plain text.

SOURCES
${context}

QUESTION: ${question}

ANSWER:`;
}

function buildContext(hits: KnowledgeHit[]): string {
  if (hits.length === 0) return 'No sources available.';
  return hits.map((h, i) => {
    const snippet = h.markdown.length > MAX_DOC_CHARS
      ? h.markdown.slice(0, MAX_DOC_CHARS) + '…'
      : h.markdown;
    return `[${i + 1}] ${h.title}\nSource: ${h.source_url}\nSummary: ${h.summary}\n\n${snippet}`;
  }).join('\n\n---\n\n');
}

// ─── LLM callers ──────────────────────────────────────────────────────────────

async function callOllama(prompt: string): Promise<string | null> {
  if (!OLLAMA_BASE_URL) return null;
  try {
    const res = await fetch(`${OLLAMA_BASE_URL}/api/generate`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      signal:  AbortSignal.timeout(30_000),
      body:    JSON.stringify({ model: OLLAMA_MODEL, prompt, stream: false }),
    });
    if (!res.ok) {
      console.warn(`[brain-query] Ollama returned ${res.status}`);
      return null;
    }
    const data = await res.json();
    const answer: string = data.response ?? '';
    return answer.trim() || null;
  } catch (err) {
    console.warn('[brain-query] Ollama call failed:', err);
    return null;
  }
}

async function callClaude(prompt: string): Promise<string | null> {
  if (!ANTHROPIC_API_KEY) return null;
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key':         ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type':      'application/json',
      },
      body: JSON.stringify({
        model:      CLAUDE_MODEL,
        max_tokens: 500,
        messages:   [{ role: 'user', content: prompt }],
      }),
      signal: AbortSignal.timeout(30_000),
    });
    if (!res.ok) {
      console.warn(`[brain-query] Claude returned ${res.status}: ${await res.text()}`);
      return null;
    }
    const data = await res.json();
    const answer: string = data.content?.[0]?.text ?? '';
    return answer.trim() || null;
  } catch (err) {
    console.warn('[brain-query] Claude call failed:', err);
    return null;
  }
}

// ─── Handler ─────────────────────────────────────────────────────────────────

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS_HEADERS });

  try {
    const body = await req.json().catch(() => ({}));
    const question: string = body?.question?.trim();
    const clientContext: string | undefined = body?.context;

    if (!question) {
      return json({ error: 'No question provided' }, 400);
    }

    // ── 1. Retrieve from knowledge base (unless client provided explicit context) ──
    let hits: KnowledgeHit[] = [];
    if (!clientContext) {
      const supabase = createClient(SUPABASE_URL, SUPABASE_SVC_KEY);
      const { data, error } = await supabase.rpc('search_knowledge_documents', {
        q: question,
        k: TOP_K,
      });
      if (error) {
        console.warn('[brain-query] KB search failed:', error.message);
      } else {
        hits = (data ?? []) as KnowledgeHit[];
      }
    }

    const context = clientContext ?? buildContext(hits);
    const prompt  = buildPrompt(question, context);

    // ── 2. Try Ollama, then Claude ──────────────────────────────────────────
    let answer: string | null = null;
    let modelUsed: BrainResponse['model_used'] = 'none';

    answer = await callOllama(prompt);
    if (answer) modelUsed = 'ollama';

    if (!answer) {
      answer = await callClaude(prompt);
      if (answer) modelUsed = 'claude';
    }

    if (!answer) {
      return json({
        answer:     "I can't reach the AI service right now. Please try again soon.",
        sources:    [],
        model_used: 'none',
        kb_hits:    hits.length,
      } satisfies BrainResponse);
    }

    // ── 3. Pack sources for the UI ──────────────────────────────────────────
    const sources = hits.map(h => ({
      title:   h.title,
      url:     h.source_url,
      summary: h.summary,
    }));

    return json({
      answer,
      sources,
      model_used: modelUsed,
      kb_hits:    hits.length,
    } satisfies BrainResponse);

  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[brain-query] fatal:', message);
    return json({ error: message }, 500);
  }
});
