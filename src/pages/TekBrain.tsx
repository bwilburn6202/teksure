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
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Brain,
  Send,
  Loader2,
  Sparkles,
  BookOpen,
  RefreshCw,
  AlertCircle,
  User,
  Mic,
  MicOff,
  Volume2,
  Square,
  Settings2,
  Headphones,
} from 'lucide-react';

// ── Types matching the edge function contract ───────────────────────────────
interface SourceChunk {
  id: string;
  source_type?: 'guide' | 'private_doc';
  guide_id?: string;
  guide_title: string;
  source_url?: string;
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

// ── Voice mode ──────────────────────────────────────────────────────────────
// Voice-first mode is additive: users can still type. The mic uses the Web
// Speech API's SpeechRecognition (browser-side, no server calls), and the
// speaker uses SpeechSynthesis. Preferences are saved to localStorage so the
// user doesn't have to reconfigure voices every visit.

type SpeechRate = 'slow' | 'normal' | 'fast';

interface VoicePrefs {
  /** Auto-speak every TekBrain answer aloud as soon as it finishes streaming. */
  alwaysOn: boolean;
  /** voiceURI of the chosen SpeechSynthesisVoice, or null to use system default. */
  voiceURI: string | null;
  /** Reading speed — maps to a SpeechSynthesis `rate` number at speak time. */
  rate: SpeechRate;
}

const VOICE_PREFS_KEY = 'teksure.tekbrain.voice-prefs.v1';
const DEFAULT_VOICE_PREFS: VoicePrefs = {
  alwaysOn: false,
  voiceURI: null,
  rate: 'normal',
};
const RATE_VALUES: Record<SpeechRate, number> = {
  slow: 0.8,
  normal: 1.0,
  fast: 1.3,
};
/** Stop auto-submitting after this many ms of silence during voice input. */
const VOICE_AUTO_SUBMIT_SILENCE_MS = 1600;

/**
 * The Web Speech API ships SpeechRecognition under two names: the standard
 * `SpeechRecognition` (Edge, recent Firefox) and the webkit-prefixed version
 * (Chrome, Safari). We prefer the standard and fall back to the prefixed one.
 * Returns the constructor, or null if the browser has neither.
 */
function getSpeechRecognitionCtor():
  | (new () => SpeechRecognitionInstance)
  | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as {
    SpeechRecognition?: new () => SpeechRecognitionInstance;
    webkitSpeechRecognition?: new () => SpeechRecognitionInstance;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

/**
 * Minimal structural type for the SpeechRecognition instance — TypeScript's
 * DOM lib doesn't ship the vendor-prefixed variant and we don't want to pull
 * in extra @types packages just for this.
 */
interface SpeechRecognitionInstance {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: SpeechRecognitionResultEvent) => void) | null;
  onend: (() => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onstart: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
}
interface SpeechRecognitionResultEvent {
  resultIndex: number;
  results: {
    length: number;
    [index: number]: {
      isFinal: boolean;
      length: number;
      [index: number]: { transcript: string };
    };
  };
}

/** Load voice prefs from localStorage, falling back to defaults on any error. */
function loadVoicePrefs(): VoicePrefs {
  if (typeof window === 'undefined') return DEFAULT_VOICE_PREFS;
  try {
    const raw = window.localStorage.getItem(VOICE_PREFS_KEY);
    if (!raw) return DEFAULT_VOICE_PREFS;
    const parsed = JSON.parse(raw) as Partial<VoicePrefs>;
    return {
      alwaysOn: Boolean(parsed.alwaysOn),
      voiceURI: typeof parsed.voiceURI === 'string' ? parsed.voiceURI : null,
      rate:
        parsed.rate === 'slow' || parsed.rate === 'fast' ? parsed.rate : 'normal',
    };
  } catch {
    return DEFAULT_VOICE_PREFS;
  }
}

function saveVoicePrefs(prefs: VoicePrefs): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(VOICE_PREFS_KEY, JSON.stringify(prefs));
  } catch {
    /* localStorage unavailable (private mode, quota) — ignore */
  }
}

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

  // ── Voice state ──────────────────────────────────────────────────────────
  // `isListening` drives the pulse animation + "Stop" label. `interim` is the
  // in-progress transcript shown beneath the textarea while the user speaks.
  // Final transcripts get appended to `input` so the user can edit them before
  // submit, unless the silence timer fires first.
  const [voicePrefs, setVoicePrefs] = useState<VoicePrefs>(DEFAULT_VOICE_PREFS);
  const [isListening, setIsListening] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState('');
  const [voiceError, setVoiceError] = useState<string | null>(null);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  // Tracks which assistant message is currently being spoken so the right
  // bubble shows the "Stop" state and aria-pressed flips.
  const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null);

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  // Silence timer — cleared on every new speech result; when it fires, we
  // auto-submit what's in the input. Senior-friendly: they don't have to hunt
  // for a Send button.
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Mirrors the latest voicePrefs/input/sending into refs so event handlers
  // (keyboard shortcuts, recognition callbacks) always see current values
  // without forcing re-registration on every render.
  const voicePrefsRef = useRef(voicePrefs);
  const inputRef = useRef(input);
  const sendingRef = useRef(sending);
  const isListeningRef = useRef(isListening);
  const speakingMessageIdRef = useRef(speakingMessageId);
  useEffect(() => { voicePrefsRef.current = voicePrefs; }, [voicePrefs]);
  useEffect(() => { inputRef.current = input; }, [input]);
  useEffect(() => { sendingRef.current = sending; }, [sending]);
  useEffect(() => { isListeningRef.current = isListening; }, [isListening]);
  useEffect(() => { speakingMessageIdRef.current = speakingMessageId; }, [speakingMessageId]);

  // Feature-detect once per mount — these don't change over a session.
  const speechRecognitionSupported = useRef<boolean>(
    typeof window !== 'undefined' && getSpeechRecognitionCtor() !== null,
  ).current;
  const speechSynthesisSupported = useRef<boolean>(
    typeof window !== 'undefined' && 'speechSynthesis' in window,
  ).current;

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

  // ── Voice mode: load prefs + available system voices ─────────────────────

  // Load saved voice prefs once on mount.
  useEffect(() => {
    setVoicePrefs(loadVoicePrefs());
  }, []);

  // Populate the voice picker. `getVoices()` is often empty on first call in
  // Chrome — the browser fires `voiceschanged` once voices finish loading,
  // so we subscribe to it and prime the list on mount.
  useEffect(() => {
    if (!speechSynthesisSupported) return;
    const refresh = () => {
      const voices = window.speechSynthesis.getVoices();
      // Prefer English voices at the top of the list — that's what almost
      // every TekSure user wants, and it makes the dropdown usable.
      const sorted = [...voices].sort((a, b) => {
        const aEn = a.lang.toLowerCase().startsWith('en') ? 0 : 1;
        const bEn = b.lang.toLowerCase().startsWith('en') ? 0 : 1;
        if (aEn !== bEn) return aEn - bEn;
        return a.name.localeCompare(b.name);
      });
      setAvailableVoices(sorted);
    };
    refresh();
    window.speechSynthesis.addEventListener('voiceschanged', refresh);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', refresh);
    };
  }, [speechSynthesisSupported]);

  // Stop any in-flight speech when the page unmounts.
  useEffect(() => {
    return () => {
      if (speechSynthesisSupported) {
        try { window.speechSynthesis.cancel(); } catch { /* noop */ }
      }
      if (silenceTimerRef.current) {
        clearTimeout(silenceTimerRef.current);
        silenceTimerRef.current = null;
      }
      recognitionRef.current?.abort();
    };
  }, [speechSynthesisSupported]);

  // ── Voice mode: persistence ──────────────────────────────────────────────

  const updateVoicePrefs = useCallback((patch: Partial<VoicePrefs>) => {
    setVoicePrefs((prev) => {
      const next = { ...prev, ...patch };
      saveVoicePrefs(next);
      return next;
    });
  }, []);

  // ── Voice mode: speech synthesis (reading answers aloud) ─────────────────

  /** Stop any currently-speaking utterance. Safe to call at any time. */
  const stopSpeaking = useCallback(() => {
    if (!speechSynthesisSupported) return;
    try { window.speechSynthesis.cancel(); } catch { /* noop */ }
    setSpeakingMessageId(null);
  }, [speechSynthesisSupported]);

  /** Speak `text` aloud using the user's saved voice + rate preferences. */
  const speakMessage = useCallback(
    (messageId: string, text: string) => {
      if (!speechSynthesisSupported) {
        setVoiceError(
          'Reading answers aloud isn\u2019t supported in this browser. Try Chrome, Edge, or Safari.',
        );
        return;
      }
      const clean = text.trim();
      if (!clean) return;

      // If the same message is already being spoken, toggle off — this makes
      // the speaker button a natural play/stop control.
      if (speakingMessageIdRef.current === messageId) {
        stopSpeaking();
        return;
      }

      // Always cancel any previous utterance first, otherwise Chrome queues
      // them and users end up hearing two answers in a row.
      try { window.speechSynthesis.cancel(); } catch { /* noop */ }

      const utter = new SpeechSynthesisUtterance(clean);
      utter.rate = RATE_VALUES[voicePrefsRef.current.rate];
      const chosenURI = voicePrefsRef.current.voiceURI;
      if (chosenURI) {
        const match = window.speechSynthesis
          .getVoices()
          .find((v) => v.voiceURI === chosenURI);
        if (match) utter.voice = match;
      }
      utter.onstart = () => setSpeakingMessageId(messageId);
      utter.onend = () => {
        // Only clear if we're still the active speaker — otherwise a newer
        // utterance would clobber our state.
        setSpeakingMessageId((curr) => (curr === messageId ? null : curr));
      };
      utter.onerror = () => {
        setSpeakingMessageId((curr) => (curr === messageId ? null : curr));
      };

      setSpeakingMessageId(messageId);
      try {
        window.speechSynthesis.speak(utter);
      } catch {
        setVoiceError('Couldn\u2019t start reading. Please try again.');
        setSpeakingMessageId(null);
      }
    },
    [speechSynthesisSupported, stopSpeaking],
  );

  // Auto-speak freshly-completed assistant answers when "Always use voice
  // mode" is on. We watch every message update and fire once, when a message
  // flips from streaming → done.
  const lastAutoSpokenRef = useRef<string | null>(null);
  useEffect(() => {
    if (!voicePrefs.alwaysOn || !speechSynthesisSupported) return;
    const latest = messages[messages.length - 1];
    if (!latest) return;
    if (latest.role !== 'assistant') return;
    if (latest.streaming) return;
    if (latest.errored) return;
    if (!latest.content.trim()) return;
    if (lastAutoSpokenRef.current === latest.id) return;
    lastAutoSpokenRef.current = latest.id;
    speakMessage(latest.id, latest.content);
  }, [messages, voicePrefs.alwaysOn, speechSynthesisSupported, speakMessage]);

  // ── Voice mode: speech recognition (spoken input) ────────────────────────

  /** Hard-stop the recognizer and clear interim/silence state. */
  const stopListening = useCallback(() => {
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }
    try { recognitionRef.current?.stop(); } catch { /* noop */ }
    setIsListening(false);
    setInterimTranscript('');
  }, []);

  /**
   * Start the browser's speech recognizer. Appends final transcripts to the
   * input field so the user can edit before sending, and arms a silence timer
   * that auto-submits so users don't have to reach for the Send button.
   */
  const startListening = useCallback(() => {
    if (sendingRef.current) return;
    if (!speechRecognitionSupported) {
      setVoiceError(
        'Voice input isn\u2019t supported in this browser. Try Chrome, Edge, or Safari.',
      );
      return;
    }
    // Stop any speaking assistant answer — listening and talking at once
    // makes for feedback loops and confuses the recognizer on laptop mics.
    if (speakingMessageIdRef.current) stopSpeaking();

    const Ctor = getSpeechRecognitionCtor();
    if (!Ctor) {
      setVoiceError(
        'Voice input isn\u2019t supported in this browser. Try Chrome, Edge, or Safari.',
      );
      return;
    }
    setVoiceError(null);

    const recognition = new Ctor();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang =
      (typeof navigator !== 'undefined' && navigator.language) || 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      // Every `result` can include multiple alternatives; we always take the
      // first. Results with isFinal=true are committed to the input; interim
      // ones drive the live "you said..." preview.
      let interim = '';
      let finalText = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const transcript = result[0]?.transcript ?? '';
        if (result.isFinal) {
          finalText += transcript;
        } else {
          interim += transcript;
        }
      }
      if (finalText) {
        setInput((prev) => {
          const joiner = prev && !/\s$/.test(prev) ? ' ' : '';
          return (prev + joiner + finalText.trim()).trimStart();
        });
      }
      setInterimTranscript(interim);

      // Reset the silence timer on every result (interim OR final). When the
      // user pauses for VOICE_AUTO_SUBMIT_SILENCE_MS, we auto-submit.
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = setTimeout(() => {
        const current = inputRef.current.trim();
        if (!current) return;
        // Stop the recognizer first so onend doesn't race us, then submit.
        try { recognitionRef.current?.stop(); } catch { /* noop */ }
        setIsListening(false);
        setInterimTranscript('');
        void sendMessage(current);
      }, VOICE_AUTO_SUBMIT_SILENCE_MS);
    };

    recognition.onerror = (event) => {
      // Translate raw browser error codes into plain language.
      const code = event.error;
      let friendly: string;
      if (code === 'not-allowed' || code === 'service-not-allowed') {
        friendly =
          'Microphone blocked. Click the lock icon in your browser\u2019s address bar and allow microphone access, then try again.';
      } else if (code === 'no-speech') {
        friendly = 'I didn\u2019t hear anything. Try again and speak a little louder.';
      } else if (code === 'audio-capture') {
        friendly =
          'No microphone found. Make sure one is plugged in and allowed for this site.';
      } else if (code === 'network') {
        friendly = 'Voice input needs an internet connection. Please check your network.';
      } else if (code === 'aborted') {
        friendly = '';
      } else {
        friendly = 'Voice input had a problem. Please try again.';
      }
      if (friendly) setVoiceError(friendly);
      setIsListening(false);
      setInterimTranscript('');
      if (silenceTimerRef.current) {
        clearTimeout(silenceTimerRef.current);
        silenceTimerRef.current = null;
      }
    };

    recognition.onend = () => {
      setIsListening(false);
      setInterimTranscript('');
      if (silenceTimerRef.current) {
        clearTimeout(silenceTimerRef.current);
        silenceTimerRef.current = null;
      }
    };

    recognitionRef.current = recognition;
    try {
      recognition.start();
    } catch {
      // Usually "already started" — ignore.
    }
  }, [speechRecognitionSupported, sendMessage, stopSpeaking]);

  /** Toggle mic on/off. Used by both the button and the Space shortcut. */
  const toggleListening = useCallback(() => {
    if (isListeningRef.current) stopListening();
    else startListening();
  }, [startListening, stopListening]);

  // ── Voice mode: global keyboard shortcuts ────────────────────────────────
  // Space toggles the mic (unless focus is in a form field so typing isn't
  // hijacked), and Escape cancels any active listening or speaking.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        let handled = false;
        if (isListeningRef.current) {
          stopListening();
          handled = true;
        }
        if (speakingMessageIdRef.current) {
          stopSpeaking();
          handled = true;
        }
        if (handled) e.preventDefault();
        return;
      }
      if (e.key === ' ' || e.code === 'Space') {
        // Don't steal Space from form fields — that would break typing.
        const target = e.target as HTMLElement | null;
        const tag = target?.tagName;
        const isEditable =
          tag === 'INPUT' ||
          tag === 'TEXTAREA' ||
          tag === 'SELECT' ||
          (target?.isContentEditable ?? false);
        if (isEditable) return;
        // Also avoid interfering when modifiers are held.
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        e.preventDefault();
        toggleListening();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [toggleListening, stopListening, stopSpeaking]);

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
    // Also kill any in-flight voice I/O so clearing actually feels like a reset.
    stopListening();
    stopSpeaking();
    setMessages([]);
    setConversationId(null);
    setError(null);
    setVoiceError(null);
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
          <div className="container max-w-3xl relative">
            <div className="absolute top-0 right-0">
              <BookmarkButton
                type="tool"
                slug="tekbrain"
                title="TekBrain — Your Personal Tech Helper"
                url="/tekbrain"
              />
            </div>
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
          {/* Header row — always visible so Voice settings can be tweaked
              before the first message. Clear button only appears once there's
              a conversation to clear. */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            {hasMessages ? (
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <Sparkles className="h-4 w-4 mr-1.5" aria-hidden="true" />
                {conversationId ? 'Conversation active' : 'New conversation'}
              </Badge>
            ) : (
              <span className="text-sm text-slate-500 dark:text-slate-400">
                Type or speak your question below.
              </span>
            )}
            <div className="flex items-center gap-2">
              <VoiceSettings
                prefs={voicePrefs}
                onChange={updateVoicePrefs}
                voices={availableVoices}
                speechRecognitionSupported={speechRecognitionSupported}
                speechSynthesisSupported={speechSynthesisSupported}
              />
              {hasMessages && (
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
              )}
            </div>
          </div>

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
                      <AssistantBubble
                        msg={msg}
                        speakingMessageId={speakingMessageId}
                        onSpeak={speakMessage}
                        onStopSpeak={stopSpeaking}
                        speechSynthesisSupported={speechSynthesisSupported}
                      />
                    ) : (
                      <UserBubble msg={msg} />
                    )}
                  </li>
                ))}
                <div ref={scrollAnchorRef} aria-hidden="true" />
              </ul>
            )}
          </div>

          {/* ── Error banners ────────────────────────────────────────── */}
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
          {voiceError && (
            <div
              role="alert"
              className="mb-4 flex items-start gap-3 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-4"
            >
              <AlertCircle className="h-5 w-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-base md:text-lg text-amber-900 dark:text-amber-200 leading-snug">
                  {voiceError}
                </p>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setVoiceError(null)}
                className="text-amber-900 dark:text-amber-200 -mt-1"
              >
                Dismiss
              </Button>
            </div>
          )}

          {/* ── Input row ────────────────────────────────────────────── */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <label htmlFor="tekbrain-input" className="sr-only">
              Your tech question
            </label>
            <div className="relative">
              <Textarea
                id="tekbrain-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  isListening
                    ? 'Listening\u2026 speak your question'
                    : 'Type your tech question, or tap the microphone to speak\u2026'
                }
                rows={3}
                disabled={sending}
                className={`text-lg md:text-xl p-4 md:p-5 rounded-xl min-h-[88px] leading-relaxed border-2 focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors ${
                  isListening
                    ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-950/20'
                    : ''
                }`}
                aria-describedby="tekbrain-input-hint"
              />
              {/* Live interim transcript — previews what the recognizer is
                  hearing before it commits a final result to the input. */}
              {isListening && interimTranscript && (
                <div
                  className="absolute bottom-2 left-4 right-4 text-base md:text-lg italic text-slate-500 dark:text-slate-400 pointer-events-none truncate"
                  aria-live="polite"
                >
                  &ldquo;{interimTranscript}&rdquo;
                </div>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <p
                id="tekbrain-input-hint"
                className="text-sm md:text-base text-slate-500 dark:text-slate-400"
              >
                {isListening
                  ? 'Listening\u2026 I\u2019ll send when you pause. Press Escape to cancel.'
                  : 'Press Enter to send, Shift + Enter for a new line, or Space to start speaking.'}
              </p>
              <div className="flex items-center gap-3">
                {/* Microphone — senior-friendly target: 64px, clear label,
                    pulse ring when active so it's obvious something is happening. */}
                <Button
                  type="button"
                  size="lg"
                  variant={isListening ? 'default' : 'outline'}
                  onClick={toggleListening}
                  disabled={sending || !speechRecognitionSupported}
                  aria-pressed={isListening}
                  aria-label={
                    isListening
                      ? 'Stop listening'
                      : speechRecognitionSupported
                      ? 'Start voice input'
                      : 'Voice input not supported in this browser'
                  }
                  title={
                    speechRecognitionSupported
                      ? isListening
                        ? 'Stop listening (Escape)'
                        : 'Speak your question (Space)'
                      : 'Voice input not supported — try Chrome, Edge, or Safari'
                  }
                  className={`relative text-lg md:text-xl px-6 py-6 min-h-[64px] min-w-[64px] font-semibold ${
                    isListening
                      ? 'bg-rose-600 hover:bg-rose-700 text-white border-rose-600'
                      : 'border-2 border-amber-600 text-amber-700 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-950/30'
                  }`}
                >
                  {isListening ? (
                    <>
                      {/* Pulsing ring to signal "hot mic" at a glance. */}
                      <span
                        className="absolute inset-0 rounded-md bg-rose-400 opacity-60 animate-ping"
                        aria-hidden="true"
                      />
                      <Square className="relative h-5 w-5 mr-2 fill-current" aria-hidden="true" />
                      <span className="relative">Stop</span>
                    </>
                  ) : (
                    <>
                      {speechRecognitionSupported ? (
                        <Mic className="h-6 w-6 mr-2" aria-hidden="true" />
                      ) : (
                        <MicOff className="h-6 w-6 mr-2" aria-hidden="true" />
                      )}
                      Speak
                    </>
                  )}
                </Button>

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

interface AssistantBubbleProps {
  msg: ChatMessage;
  speakingMessageId: string | null;
  onSpeak: (id: string, text: string) => void;
  onStopSpeak: () => void;
  speechSynthesisSupported: boolean;
}

function AssistantBubble({
  msg,
  speakingMessageId,
  onSpeak,
  onStopSpeak,
  speechSynthesisSupported,
}: AssistantBubbleProps) {
  const showCursor = msg.streaming && msg.content.length > 0;
  const showTyping = msg.streaming && msg.content.length === 0;
  const isSpeaking = speakingMessageId === msg.id;
  // Don't offer a speaker button for errors or while streaming — you can only
  // read a finished, successful answer aloud.
  const canSpeak =
    speechSynthesisSupported &&
    !msg.streaming &&
    !msg.errored &&
    msg.content.trim().length > 0;

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
              : isSpeaking
              ? 'border-amber-400 dark:border-amber-600 ring-2 ring-amber-300 dark:ring-amber-700/60'
              : 'border-slate-200 dark:border-slate-700'
          }
        >
          <CardContent className="px-5 py-4">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                  TekBrain
                </span>
                {msg.streaming && (
                  <Badge variant="outline" className="text-xs">
                    <Loader2 className="h-3 w-3 mr-1 animate-spin" aria-hidden="true" />
                    Typing...
                  </Badge>
                )}
                {isSpeaking && (
                  <Badge variant="outline" className="text-xs border-amber-400 text-amber-700 dark:text-amber-400">
                    <Volume2 className="h-3 w-3 mr-1 animate-pulse" aria-hidden="true" />
                    Reading aloud
                  </Badge>
                )}
              </div>
              {canSpeak && (
                <Button
                  type="button"
                  variant={isSpeaking ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() =>
                    isSpeaking ? onStopSpeak() : onSpeak(msg.id, msg.content)
                  }
                  aria-pressed={isSpeaking}
                  aria-label={
                    isSpeaking ? 'Stop reading this answer' : 'Read this answer aloud'
                  }
                  title={
                    isSpeaking ? 'Stop reading (Escape)' : 'Read this answer aloud'
                  }
                  className={`min-h-[40px] px-3 ${
                    isSpeaking
                      ? 'bg-amber-600 hover:bg-amber-700 text-white'
                      : 'text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30'
                  }`}
                >
                  {isSpeaking ? (
                    <>
                      <Square className="h-4 w-4 mr-1.5 fill-current" aria-hidden="true" />
                      <span className="text-sm">Stop</span>
                    </>
                  ) : (
                    <>
                      <Headphones className="h-4 w-4 mr-1.5" aria-hidden="true" />
                      <span className="text-sm">Listen</span>
                    </>
                  )}
                </Button>
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

// ─────────────────────────────────────────────────────────────────────────────
// VoiceSettings popover — lives in the header row so it's discoverable without
// cluttering the input. Exposes the three knobs users actually care about:
// which system voice, reading speed, and an "always read aloud" toggle.
// ─────────────────────────────────────────────────────────────────────────────
interface VoiceSettingsProps {
  prefs: VoicePrefs;
  onChange: (patch: Partial<VoicePrefs>) => void;
  voices: SpeechSynthesisVoice[];
  speechRecognitionSupported: boolean;
  speechSynthesisSupported: boolean;
}

function VoiceSettings({
  prefs,
  onChange,
  voices,
  speechRecognitionSupported,
  speechSynthesisSupported,
}: VoiceSettingsProps) {
  const anyVoiceFeature = speechRecognitionSupported || speechSynthesisSupported;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="text-base min-h-[44px]"
          aria-label="Voice settings"
          title="Voice settings"
        >
          <Settings2 className="h-4 w-4 mr-2" aria-hidden="true" />
          Voice
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-5" align="end">
        <div className="space-y-5">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Voice settings
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Speak your question or have answers read aloud.
            </p>
          </div>

          {!anyVoiceFeature && (
            <p className="text-sm text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 rounded-lg p-3">
              Your browser doesn&rsquo;t support voice features. Try Chrome, Edge, or Safari.
            </p>
          )}

          {/* Always use voice mode */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <Label
                htmlFor="voice-always-on"
                className="text-base font-medium text-slate-800 dark:text-slate-100"
              >
                Always read answers aloud
              </Label>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                TekBrain will speak every answer automatically.
              </p>
            </div>
            <Switch
              id="voice-always-on"
              checked={prefs.alwaysOn}
              onCheckedChange={(checked) => onChange({ alwaysOn: checked })}
              disabled={!speechSynthesisSupported}
              aria-label="Always read answers aloud"
            />
          </div>

          {/* Voice picker */}
          <div className="space-y-2">
            <Label
              htmlFor="voice-picker"
              className="text-base font-medium text-slate-800 dark:text-slate-100"
            >
              Voice
            </Label>
            <Select
              value={prefs.voiceURI ?? '__default__'}
              onValueChange={(value) =>
                onChange({ voiceURI: value === '__default__' ? null : value })
              }
              disabled={!speechSynthesisSupported || voices.length === 0}
            >
              <SelectTrigger id="voice-picker" className="text-base min-h-[44px]">
                <SelectValue placeholder="System default" />
              </SelectTrigger>
              <SelectContent className="max-h-72">
                <SelectItem value="__default__">System default</SelectItem>
                {voices.map((v) => (
                  <SelectItem key={v.voiceURI} value={v.voiceURI}>
                    {v.name} {v.lang ? `(${v.lang})` : ''}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Reading speed */}
          <div className="space-y-2">
            <Label
              htmlFor="voice-rate"
              className="text-base font-medium text-slate-800 dark:text-slate-100"
            >
              Reading speed
            </Label>
            <Select
              value={prefs.rate}
              onValueChange={(value) =>
                onChange({ rate: value as SpeechRate })
              }
              disabled={!speechSynthesisSupported}
            >
              <SelectTrigger id="voice-rate" className="text-base min-h-[44px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="slow">Slow</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="fast">Fast</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            <p className="mb-1"><strong>Keyboard shortcuts:</strong></p>
            <p>Press <kbd className="px-1.5 py-0.5 rounded border bg-slate-100 dark:bg-slate-800">Space</kbd> to start or stop speaking.</p>
            <p>Press <kbd className="px-1.5 py-0.5 rounded border bg-slate-100 dark:bg-slate-800">Esc</kbd> to cancel listening or reading.</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function SourcesList({ sources }: { sources: SourceChunk[] }) {
  // Collapse duplicate source targets so we show each source once even if two
  // chunks from that same source were retrieved.
  const seen = new Set<string>();
  const unique = sources.filter((s) => {
    const key = s.source_type === 'private_doc'
      ? `private:${s.source_url ?? s.guide_title}`
      : `guide:${s.guide_id ?? s.guide_title}`;
    if (seen.has(key)) return false;
    seen.add(key);
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
            {s.source_type === 'private_doc' ? (
              s.source_url ? (
                <a
                  href={s.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline hover:text-amber-700 dark:hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
                >
                  {s.guide_title}
                </a>
              ) : (
                <span className="font-medium">{s.guide_title}</span>
              )
            ) : s.guide_id ? (
              <a
                href={`/guides/${s.guide_id}`}
                className="underline hover:no-underline hover:text-amber-700 dark:hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
              >
                {s.guide_title}
              </a>
            ) : (
              <span className="font-medium">{s.guide_title}</span>
            )}
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
