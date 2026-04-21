// ─────────────────────────────────────────────────────────────────────────────
// TekBrain page — full chat UI that talks to the `tekbrain-chat` edge function.
//
// The edge function streams Server-Sent Events over a plain POST, so we read
// the response body with a ReadableStreamDefaultReader + TextDecoder and pick
// apart the SSE frames ourselves. The event protocol:
//
//   event: meta   { conversation_id, chunks: [...] }   // once, before tokens
//   event: token  { text: "<delta>" }                  // repeated as it streams
//   event: done   { finish_reason, chars }             // once, at the end
//   event: error  { error: "<message>" }               // on failure
//
// Design goals:
// - Senior-friendly: large text, high contrast, big tap targets, plain language.
// - Live streaming: the latest assistant turn renders token-by-token.
// - Sources: the meta event's chunks render as a "Sources" list under the turn.
// - Anonymous-first: we only generate a session_id on mount. The edge function
//   creates and returns a conversation_id, which we store for follow-ups.
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect, useRef, useCallback, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Brain,
  Send,
  Loader2,
  Sparkles,
  BookOpen,
  RefreshCw,
  AlertCircle,
  User,
} from 'lucide-react';

// ── Types matching the edge function contract ───────────────────────────────
interface SourceChunk {
  id: string;
  guide_id: string;
  guide_title: string;
  heading: string | null;
  similarity: number;
}

interface ChatMessage {
  id: string;                 // stable UI key, NOT the DB row id
  role: 'user' | 'assistant';
  content: string;
  sources?: SourceChunk[];    // only populated for assistant turns
  streaming?: boolean;        // true while tokens are still arriving
  errored?: boolean;          // true if the stream died mid-flight
}

// Senior-friendly starter prompts — the four most common first-time questions.
const STARTER_PROMPTS = [
  'How do I set up WiFi?',
  'How do I spot a scam email?',
  'What\u2019s the best password manager?',
  'How do I video call my family?',
];

// Pulled from the same env vars client.ts uses, so there's only one source of
// truth for the project URL and publishable key.
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

// ── Helpers ─────────────────────────────────────────────────────────────────

/** Generate a short unique id for message UI keys (not cryptographically strict). */
function uid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export default function TekBrainPage() {
  // ── Session state ────────────────────────────────────────────────────────
  // session_id is created once per page load and passed on every POST so the
  // edge function can scope anonymous conversations. conversation_id is
  // returned by the first meta event and reused on follow-ups.
  const [sessionId, setSessionId] = useState<string>('');
  const [conversationId, setConversationId] = useState<string | null>(null);

  // ── Chat state ───────────────────────────────────────────────────────────
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-scroll anchor — we nudge this into view whenever tokens land.
  const scrollAnchorRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  // Abort handle so "Clear conversation" (or unmount) kills any in-flight fetch.
  const abortRef = useRef<AbortController | null>(null);

  // The landing page at /tekbrain links here with a `?q=<question>` param when
  // the user clicks an example question. We auto-send it once, then clear the
  // param from the URL so a refresh doesn't resubmit.
  const [searchParams, setSearchParams] = useSearchParams();
  const autoSentRef = useRef(false);

  // ── Lifecycle ────────────────────────────────────────────────────────────

  useEffect(() => {
    // Generate the session id exactly once on mount. Falling back to a
    // timestamp+random keeps things working in very old browsers.
    setSessionId(uid());
    return () => {
      // If the user navigates away mid-stream, stop the fetch.
      abortRef.current?.abort();
    };
  }, []);

  // Keep the latest tokens in view. We only auto-scroll when the user is
  // already near the bottom so we don't yank the page if they're reading older
  // turns.
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const nearBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight < 160;
    if (nearBottom) {
      scrollAnchorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages]);

  // ── Core: send a message and consume the SSE stream ──────────────────────

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || sending) return;
      if (!sessionId) return; // should never happen — useEffect sets it on mount
      if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        setError(
          'TekBrain is missing its configuration. Please refresh the page or contact support.',
        );
        return;
      }

      setError(null);

      // Optimistically add the user's message plus a placeholder for the
      // streaming assistant reply. We'll mutate the assistant entry in place as
      // tokens arrive.
      const userMsg: ChatMessage = { id: uid(), role: 'user', content: trimmed };
      const assistantId = uid();
      const assistantMsg: ChatMessage = {
        id: assistantId,
        role: 'assistant',
        content: '',
        streaming: true,
      };
      setMessages((prev) => [...prev, userMsg, assistantMsg]);
      setInput('');
      setSending(true);

      // Abort any previous in-flight request (shouldn't happen because the
      // send button is disabled while `sending`, but belt-and-suspenders).
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const response = await fetch(
          `${SUPABASE_URL}/functions/v1/tekbrain-chat`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
              'Content-Type': 'application/json',
              apikey: SUPABASE_ANON_KEY,
            },
            body: JSON.stringify({
              message: trimmed,
              session_id: sessionId,
              conversation_id: conversationId,
            }),
            signal: controller.signal,
          },
        );

        // Non-stream failures come back as JSON { error }. We surface the
        // message verbatim since the edge function already phrases them
        // senior-friendly.
        if (!response.ok || !response.body) {
          let friendly = 'TekBrain had a problem answering. Please try again.';
          try {
            const errJson = (await response.json()) as { error?: string };
            if (errJson?.error) friendly = errJson.error;
          } catch {
            /* non-JSON body — use default */
          }
          throw new Error(friendly);
        }

        // ── Parse SSE stream frame-by-frame ────────────────────────────
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        let sawDone = false;
        let sawError: string | null = null;

        // Read loop — frames are separated by `\n\n`, each frame contains
        // `event: <name>` and `data: <json>` lines.
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          let boundary = buffer.indexOf('\n\n');
          while (boundary !== -1) {
            const rawFrame = buffer.slice(0, boundary);
            buffer = buffer.slice(boundary + 2);
            boundary = buffer.indexOf('\n\n');

            const frame = parseSseFrame(rawFrame);
            if (!frame) continue;

            if (frame.event === 'meta') {
              const meta = frame.data as {
                conversation_id?: string;
                chunks?: SourceChunk[];
              };
              if (meta.conversation_id) {
                setConversationId(meta.conversation_id);
              }
              if (meta.chunks && meta.chunks.length > 0) {
                const sources = meta.chunks;
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantId ? { ...m, sources } : m,
                  ),
                );
              }
            } else if (frame.event === 'token') {
              const { text: delta } = frame.data as { text?: string };
              if (delta) {
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantId
                      ? { ...m, content: m.content + delta }
                      : m,
                  ),
                );
              }
            } else if (frame.event === 'done') {
              sawDone = true;
            } else if (frame.event === 'error') {
              const { error: errMsg } = frame.data as { error?: string };
              sawError = errMsg || 'TekBrain had a problem answering.';
            }
          }
        }

        // If the server signalled an error mid-stream, promote it now.
        if (sawError) throw new Error(sawError);

        // Mark the assistant turn as no longer streaming. If we never saw a
        // `done` and there's no content, we treat it as a failure.
        setMessages((prev) =>
          prev.map((m) => {
            if (m.id !== assistantId) return m;
            if (!sawDone && !m.content) {
              return {
                ...m,
                streaming: false,
                errored: true,
                content:
                  'TekBrain didn\u2019t finish answering. Please try again.',
              };
            }
            return { ...m, streaming: false };
          }),
        );
      } catch (err) {
        const msg =
          err instanceof Error && err.name !== 'AbortError'
            ? err.message
            : 'TekBrain had a problem answering. Please try again.';

        // Only surface the error if it wasn't a user-initiated abort.
        if (!(err instanceof Error && err.name === 'AbortError')) {
          setError(msg);
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? { ...m, content: msg, streaming: false, errored: true }
                : m,
            ),
          );
        } else {
          // Aborted — quietly remove the dangling assistant placeholder.
          setMessages((prev) => prev.filter((m) => m.id !== assistantId));
        }
      } finally {
        setSending(false);
        abortRef.current = null;
      }
    },
    [sessionId, conversationId, sending],
  );

  // Auto-send the `?q=` prompt when the user arrives from the landing page.
  // Guarded by `autoSentRef` so it only fires once even if React re-runs the
  // effect. Waits for `sessionId` (set on mount) because sendMessage bails out
  // without it. Declared *after* sendMessage so we don't hit TDZ / lint issues.
  useEffect(() => {
    if (autoSentRef.current) return;
    if (!sessionId) return;
    const q = searchParams.get('q');
    if (!q) return;
    autoSentRef.current = true;
    // Strip the param so reloading doesn't re-submit the same question.
    const next = new URLSearchParams(searchParams);
    next.delete('q');
    setSearchParams(next, { replace: true });
    void sendMessage(q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  // ── Event handlers ───────────────────────────────────────────────────────

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;
    void sendMessage(input);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    // Enter sends, Shift+Enter inserts a newline — standard chat UX.
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!sending && input.trim()) void sendMessage(input);
    }
  }

  function handleStarter(prompt: string) {
    if (sending) return;
    void sendMessage(prompt);
  }

  function clearConversation() {
    abortRef.current?.abort();
    abortRef.current = null;
    setMessages([]);
    setConversationId(null);
    setError(null);
    setInput('');
  }

  const hasMessages = messages.length > 0;

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <>
      <SEOHead
        title="TekBrain — Your Personal Tech Helper | TekSure"
        description="Ask TekBrain any tech question and get a plain-English answer pulled from TekSure's library of senior-friendly guides. Free, no sign-up needed."
        path="/tekbrain"
      />
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="border-b border-border/60 py-10 md:py-14 text-center px-4">
          <div className="container max-w-3xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/40 mb-5">
              <Brain className="h-8 w-8 text-amber-600 dark:text-amber-400" aria-hidden="true" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              Ask TekBrain anything.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Your personal tech helper.
            </p>
          </div>
        </section>

        {/* ── Chat area ──────────────────────────────────────────────── */}
        <section className="container max-w-3xl px-4 py-8 md:py-10">
          {/* Header row with Clear button */}
          {hasMessages && (
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <Sparkles className="h-4 w-4 mr-1.5" aria-hidden="true" />
                {conversationId ? 'Conversation active' : 'New conversation'}
              </Badge>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={clearConversation}
                disabled={sending}
                className="text-base min-h-[44px]"
              >
                <RefreshCw className="h-4 w-4 mr-2" aria-hidden="true" />
                Clear conversation
              </Button>
            </div>
          )}

          {/* Scrollable message list — tall enough to feel like a chat,
              but not so tall that the input scrolls off small screens. */}
          <div
            ref={scrollContainerRef}
            className="rounded-2xl border border-border bg-white dark:bg-slate-900/60 shadow-sm overflow-y-auto p-4 md:p-6 mb-4"
            style={{ minHeight: '360px', maxHeight: '60vh' }}
            aria-label="TekBrain conversation"
            aria-live="polite"
            aria-atomic="false"
          >
            {!hasMessages ? (
              // Empty state — starter prompts front and center.
              <div className="py-6">
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 mb-5 text-center">
                  Not sure what to ask? Try one of these:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {STARTER_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => handleStarter(prompt)}
                      disabled={sending}
                      className="text-left p-4 md:p-5 rounded-xl border-2 border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/20 hover:border-amber-400 dark:hover:border-amber-700 hover:bg-amber-100/60 dark:hover:bg-amber-900/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors min-h-[64px] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <span className="text-lg md:text-xl font-medium text-slate-800 dark:text-slate-100">
                        {prompt}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="text-base text-slate-500 dark:text-slate-400 text-center mt-6">
                  Or type your own question in the box below.
                </p>
              </div>
            ) : (
              <ul className="space-y-6" role="list">
                {messages.map((msg) => (
                  <li
                    key={msg.id}
                    className={
                      msg.role === 'user'
                        ? 'flex justify-end'
                        : 'flex justify-start'
                    }
                  >
                    {msg.role === 'assistant' ? (
                      <AssistantBubble msg={msg} />
                    ) : (
                      <UserBubble msg={msg} />
                    )}
                  </li>
                ))}
                <div ref={scrollAnchorRef} aria-hidden="true" />
              </ul>
            )}
          </div>

          {/* ── Error banner ─────────────────────────────────────────── */}
          {error && (
            <div
              role="alert"
              className="mb-4 flex items-start gap-3 rounded-xl border border-rose-300 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/30 p-4"
            >
              <AlertCircle className="h-5 w-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-base md:text-lg text-rose-900 dark:text-rose-200 leading-snug">
                {error}
              </p>
            </div>
          )}

          {/* ── Input row ────────────────────────────────────────────── */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <label htmlFor="tekbrain-input" className="sr-only">
              Your tech question
            </label>
            <Textarea
              id="tekbrain-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your tech question..."
              rows={3}
              disabled={sending}
              className="text-lg md:text-xl p-4 md:p-5 rounded-xl min-h-[88px] leading-relaxed border-2 focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-describedby="tekbrain-input-hint"
            />
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <p
                id="tekbrain-input-hint"
                className="text-sm md:text-base text-slate-500 dark:text-slate-400"
              >
                Press Enter to send. Shift + Enter for a new line.
              </p>
              <Button
                type="submit"
                size="lg"
                disabled={sending || !input.trim()}
                className="text-lg md:text-xl px-8 py-6 min-h-[56px] bg-amber-600 hover:bg-amber-700 text-white font-semibold"
              >
                {sending ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" aria-hidden="true" />
                    Thinking...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" aria-hidden="true" />
                    Send question
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* ── Reassurance footer ───────────────────────────────────── */}
          <p className="text-base text-slate-500 dark:text-slate-400 text-center mt-8 max-w-xl mx-auto leading-relaxed">
            TekBrain answers using TekSure&rsquo;s library of senior-friendly
            guides. If it can&rsquo;t find an answer, it&rsquo;ll tell you
            &mdash; and you can always{' '}
            <a
              href="/book"
              className="text-amber-700 dark:text-amber-400 font-semibold underline hover:no-underline"
            >
              book a real person
            </a>{' '}
            for help.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components — kept in the same file per project convention so the page is
// a single, self-contained artifact.
// ─────────────────────────────────────────────────────────────────────────────

function UserBubble({ msg }: { msg: ChatMessage }) {
  return (
    <div className="flex items-start gap-3 max-w-[85%] md:max-w-[75%]">
      <div className="flex-1 rounded-2xl rounded-tr-md bg-amber-600 text-white px-5 py-3 shadow-sm">
        <p className="text-lg md:text-xl leading-relaxed whitespace-pre-wrap break-words">
          {msg.content}
        </p>
      </div>
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/60 flex items-center justify-center"
        aria-hidden="true"
      >
        <User className="h-5 w-5 text-amber-700 dark:text-amber-300" />
      </div>
    </div>
  );
}

function AssistantBubble({ msg }: { msg: ChatMessage }) {
  const showCursor = msg.streaming && msg.content.length > 0;
  const showTyping = msg.streaming && msg.content.length === 0;

  return (
    <div className="flex items-start gap-3 max-w-[90%] md:max-w-[85%]">
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/60 flex items-center justify-center"
        aria-hidden="true"
      >
        <Brain className="h-5 w-5 text-amber-700 dark:text-amber-300" />
      </div>
      <div className="flex-1 space-y-3">
        <Card
          className={
            msg.errored
              ? 'border-rose-300 dark:border-rose-800'
              : 'border-slate-200 dark:border-slate-700'
          }
        >
          <CardContent className="px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                TekBrain
              </span>
              {msg.streaming && (
                <Badge variant="outline" className="text-xs">
                  <Loader2 className="h-3 w-3 mr-1 animate-spin" aria-hidden="true" />
                  Typing...
                </Badge>
              )}
            </div>

            {showTyping ? (
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 italic">
                Looking through the guides&hellip;
              </p>
            ) : (
              <p className="text-lg md:text-xl leading-relaxed text-slate-800 dark:text-slate-100 whitespace-pre-wrap break-words">
                {msg.content}
                {showCursor && (
                  <span
                    className="inline-block w-[2px] h-[1.1em] align-[-0.15em] ml-0.5 bg-amber-600 dark:bg-amber-400 animate-pulse"
                    aria-hidden="true"
                  />
                )}
              </p>
            )}
          </CardContent>
        </Card>

        {msg.sources && msg.sources.length > 0 && (
          <SourcesList sources={msg.sources} />
        )}
      </div>
    </div>
  );
}

function SourcesList({ sources }: { sources: SourceChunk[] }) {
  // Collapse duplicate guide_ids so we show each guide once even if two
  // chunks from the same guide were retrieved.
  const seen = new Set<string>();
  const unique = sources.filter((s) => {
    if (seen.has(s.guide_id)) return false;
    seen.add(s.guide_id);
    return true;
  });

  return (
    <div className="rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/20 px-4 py-3">
      <div className="flex items-center gap-2 mb-2">
        <BookOpen className="h-4 w-4 text-amber-700 dark:text-amber-400" aria-hidden="true" />
        <span className="text-sm md:text-base font-semibold text-amber-800 dark:text-amber-300">
          Sources ({unique.length})
        </span>
      </div>
      <ul className="space-y-1.5">
        {unique.map((s) => (
          <li key={s.id} className="text-base md:text-lg text-slate-700 dark:text-slate-200">
            <a
              href={`/guides/${s.guide_id}`}
              className="underline hover:no-underline hover:text-amber-700 dark:hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
            >
              {s.guide_title}
            </a>
            {s.heading ? (
              <span className="text-slate-500 dark:text-slate-400"> &mdash; {s.heading}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SSE frame parser — handles the `event:` + `data:` line format used by both
// the edge function and OpenAI.
// ─────────────────────────────────────────────────────────────────────────────
function parseSseFrame(rawFrame: string): { event: string; data: unknown } | null {
  // Skip totally empty frames (e.g. keepalive newlines) and comment frames.
  const trimmed = rawFrame.trim();
  if (!trimmed || trimmed.startsWith(':')) return null;

  let event = 'message';
  const dataLines: string[] = [];

  for (const line of rawFrame.split('\n')) {
    if (line.startsWith('event:')) {
      event = line.slice(6).trim();
    } else if (line.startsWith('data:')) {
      dataLines.push(line.slice(5).trim());
    }
    // `id:` and `retry:` lines are legal SSE but we don't need them here.
  }

  if (dataLines.length === 0) return null;

  const payload = dataLines.join('\n');
  try {
    return { event, data: JSON.parse(payload) };
  } catch {
    // The edge function always sends JSON, so a parse failure is a bug —
    // return null and let the caller skip this frame.
    return null;
  }
}
