/**
 * TekBot — floating AI chat assistant for TekSure (non-homepage pages).
 *
 * Features:
 *  - Device memory (localStorage) — remembers user's device across sessions
 *  - Device picker UI in chat header
 *  - Device-specific answers (Windows / Mac / iPhone / Android)
 *  - Auto-detects device from message text
 *  - 21-topic knowledge base (via shared lib)
 *  - Conversation context awareness (continuation phrases)
 *  - Guide matching with category boost
 *  - Quick prompts that adapt to detected device
 *  - Session memory (sessionStorage) — conversation persists across page navigation
 *  - Context-aware system prompt injection — current page / guide slug boosts KB matching
 *  - Related guides sidebar — top guides for the current page shown alongside chat
 *  - Clear chat button — lets users reset session memory
 *  - Hidden on the homepage (which has its own full-page TekBrain interface)
 */

import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Bot, X, Send, BookOpen, ExternalLink,
  Laptop, Smartphone, Apple, Monitor, Settings2, ChevronDown,
  Trash2, MessageSquare, Brain,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getGuideThumbnailSmall } from '@/lib/guideThumbnails';
import { useAgentMemory } from '@/hooks/useAgentMemory';
import {
  type DeviceType,
  type Message,
  KB,
  loadDevice,
  saveDevice,
  deviceLabel,
  detectDeviceFromText,
  getResponse,
  findRelatedGuides,
  buildContextualQuery,
  isContinuation,
  getPageContext,
  getPagePrompts,
} from '@/lib/tekbrain-kb';

/* ── Session memory (local to floating widget) ─────────────── */

const SESSION_KEY = 'teksure_tekbot_session';

function loadSession(): Message[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Message[];
  } catch {
    return [];
  }
}

function saveSession(msgs: Message[]) {
  try {
    const trimmed = msgs.slice(-40);
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(trimmed));
  } catch {
    // sessionStorage may be unavailable in private-browsing edge cases
  }
}

function clearSession() {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // noop
  }
}

/* ── Device picker options (with JSX icons) ─────────────────── */

const DEVICE_OPTIONS: { value: DeviceType; label: string; icon: React.ReactNode }[] = [
  { value: 'windows', label: 'Windows PC', icon: <Monitor className="h-4 w-4" /> },
  { value: 'mac', label: 'Mac', icon: <Apple className="h-4 w-4" /> },
  { value: 'iphone', label: 'iPhone', icon: <Smartphone className="h-4 w-4" /> },
  { value: 'android', label: 'Android', icon: <Smartphone className="h-4 w-4 text-teksure-success" /> },
];

/* ── Component ─────────────────────────────────────────────── */

export function TekBot() {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  const [open, setOpen] = useState(false);
  const [device, setDevice] = useState<DeviceType>(loadDevice);
  const [messages, setMessages] = useState<Message[]>(() => loadSession());
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [showDevicePicker, setShowDevicePicker] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 640);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const enrichedRef = useRef<string>('');
  const devicePickerTriggerRef = useRef<HTMLButtonElement>(null);

  /* ── Agent Memory ─────────────────────────────────────────── */
  const memory = useAgentMemory();

  const observeDevice = useCallback((d: DeviceType) => {
    if (!d) return;
    memory.remember('device', 'primary_device', {
      device: d,
      label: deviceLabel(d),
      detectedAt: new Date().toISOString(),
    }, 8).catch(() => {});
  }, [memory]);

  const observeTopic = useCallback((userText: string, matchedCategory: string | undefined) => {
    memory.observe({
      category: 'topic_interest',
      key: matchedCategory ?? 'general',
      value: {
        query: userText.slice(0, 200),
        category: matchedCategory ?? 'unknown',
        page: location.pathname,
      },
      importance: matchedCategory ? 6 : 3,
      tier: 'working',
    }).catch(() => {});
  }, [memory, location.pathname]);

  const observeSolution = useCallback((topic: string, category: string | undefined, hadGuides: boolean) => {
    if (!category) return;
    memory.observe({
      category: 'solution',
      key: `solution_${category}`,
      value: {
        topic,
        category,
        hadRelatedGuides: hadGuides,
        resolvedAt: new Date().toISOString(),
      },
      importance: 7,
      tier: 'procedural',
    }).catch(() => {});
  }, [memory]);

  const recallContext = useCallback(async (query: string): Promise<string> => {
    try {
      const memories = await memory.recall(query, {
        tiers: ['semantic', 'procedural', 'episodic'],
        limit: 3,
        minImportance: 4,
      });
      if (memories.length === 0) return '';

      const hints = memories.map(m => {
        if (m.category === 'device') return `User's device: ${(m.value as Record<string, string>).label ?? (m.value as Record<string, string>).device}`;
        if (m.category === 'solution') return `Previously helped with: ${(m.value as Record<string, string>).topic}`;
        if (m.category === 'topic_interest') return `Interested in: ${(m.value as Record<string, string>).category}`;
        return `Known: ${m.key}`;
      });
      return hints.join('. ') + '.';
    } catch {
      return '';
    }
  }, [memory]);

  /* Focus input when chat opens; return focus to open button when it closes */
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 150);
    } else {
      openButtonRef.current?.focus();
    }
  }, [open]);

  /* Persist messages to sessionStorage whenever they change */
  useEffect(() => {
    saveSession(messages);
  }, [messages]);

  /* Track mobile breakpoint */
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  /* Build welcome message for the current page — only shown when session is empty */
  const welcomeMessage = useMemo(() => {
    const ctx = getPageContext(location.pathname);
    const deviceHint = device ? ` I see you're using a ${deviceLabel(device)}.` : '';
    return ctx
      ? `Hi! I'm TekBot.${deviceHint}\n\nI can see you're browsing ${ctx}. Ask me anything about it, or any other tech question!`
      : `Hi! I'm TekBot, your friendly tech helper.${deviceHint}\n\nAsk me anything about your ${device ? deviceLabel(device) : 'computer or phone'}, WiFi, passwords, or any tech question!`;
  }, [location.pathname, device]);

  /* If session is empty (first open or after clear), inject a fresh welcome */
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: 'bot', content: welcomeMessage }]);
    }
  }, [welcomeMessage]); // eslint-disable-line react-hooks/exhaustive-deps

  /* When user navigates to a new page, add a brief context update message */
  const prevPathRef = useRef(location.pathname);
  useEffect(() => {
    const prev = prevPathRef.current;
    prevPathRef.current = location.pathname;
    if (prev === location.pathname) return;
    if (messages.length <= 1) return;
    const ctx = getPageContext(location.pathname);
    if (ctx) {
      setMessages(prev => [
        ...prev,
        { role: 'bot', content: `I can see you've moved to ${ctx}. Feel free to keep asking questions!` },
      ]);
    }
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  function handleSetDevice(d: DeviceType) {
    setDevice(d);
    saveDevice(d);
    setShowDevicePicker(false);
    observeDevice(d);
    const label = d ? deviceLabel(d) : 'all devices';
    setMessages(prev => [
      ...prev,
      { role: 'bot', content: `Got it. I will tailor my answers for ${label} from now on.` },
    ]);
  }

  function handleClearChat() {
    clearSession();
    const ctx = getPageContext(location.pathname);
    const deviceHint = device ? ` I see you're using a ${deviceLabel(device)}.` : '';
    const welcome = ctx
      ? `Hi! I'm TekBot.${deviceHint}\n\nI can see you're browsing ${ctx}. Ask me anything about it, or any other tech question!`
      : `Hi! I'm TekBot, your friendly tech helper.${deviceHint}\n\nAsk me anything about your ${device ? deviceLabel(device) : 'computer or phone'}, WiFi, passwords, or any tech question!`;
    setMessages([{ role: 'bot', content: welcome }]);
  }

  const send = (overrideText?: string) => {
    const text = (overrideText ?? input).trim();
    if (!text) return;

    const detected = !device ? detectDeviceFromText(text) : null;
    if (detected) {
      setDevice(detected);
      saveDevice(detected);
      observeDevice(detected);
    }
    const activeDevice = detected ?? device;

    setMessages(prev => {
      const history = prev.filter(m => m.role === 'user').slice(-5).map(m => m.content);
      const baseQuery = isContinuation(text) && history.length > 1
        ? `${history.slice(0, -1).join(' ')} ${text}`
        : text;
      const enrichedQuery = buildContextualQuery(baseQuery, location.pathname);
      enrichedRef.current = enrichedQuery;
      return [...prev, { role: 'user', content: text }];
    });
    setInput('');
    setTyping(true);

    const delay = isContinuation(text) ? 600 : 900 + Math.random() * 700;

    function deliver(memoryContext?: string) {
      setTyping(false);
      const enriched = enrichedRef.current || text;
      const answer = getResponse(enriched, activeDevice);
      const related = findRelatedGuides(enriched);

      if (memoryContext !== undefined) {
        const matchedEntry = KB.find(entry =>
          entry.keywords.some(kw => enriched.toLowerCase().includes(kw))
        );
        observeTopic(text, matchedEntry?.category);
        if (matchedEntry) {
          observeSolution(text, matchedEntry.category, related.length > 0);
        }
      }

      let finalAnswer = answer;
      if (detected) {
        finalAnswer = `(I noticed you are on ${deviceLabel(detected)}. I will remember that.)\n\n${answer}`;
      } else if (memoryContext?.includes('Previously helped')) {
        finalAnswer = `(Welcome back! I remember helping you before.)\n\n${answer}`;
      }

      setMessages(prev => [
        ...prev,
        { role: 'bot', content: finalAnswer, relatedGuides: related.length ? related : undefined },
      ]);
    }

    recallContext(text)
      .then(memoryContext => { setTimeout(() => deliver(memoryContext), delay); })
      .catch(() => { setTimeout(() => deliver(), delay); });
  };

  const quickPrompts = getPagePrompts(location.pathname, device);

  const pageRelatedGuides = useMemo(() => {
    const contextQuery = buildContextualQuery('', location.pathname).trim();
    if (!contextQuery) return [];
    return findRelatedGuides(contextQuery, 4);
  }, [location.pathname]);

  const conversationCount = messages.filter(m => m.role === 'user').length;

  // Do not render the floating widget on the homepage — TekBrain IS the homepage
  if (isHomepage) return null;

  return (
    <>
      {/* Floating button */}
      <>
        {!open && (
          <button
            ref={openButtonRef}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105"
            style={{ backgroundColor: 'hsl(172 50% 40%)', minHeight: 48, fontSize: 16 }}
            aria-label="Open TekBot chat assistant"
            aria-haspopup="dialog"
          >
            <Bot className="h-5 w-5" aria-hidden="true" />
            <span>TekBot</span>
            {conversationCount > 0 && (
              <span
                className="ml-0.5 flex items-center gap-1 rounded-full bg-white/20 px-1.5 py-0.5 text-xs font-normal"
                aria-label={`${conversationCount} messages in current session`}
              >
                <MessageSquare className="h-3 w-3" aria-hidden="true" />
                {conversationCount}
              </span>
            )}
          </button>
        )}
      </>

      {/* Chat panel */}
      <>
        {open && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="tekbot-heading"
            className={`fixed z-50 flex overflow-hidden rounded-2xl shadow-2xl border border-border ${
              isMobile
                ? 'inset-x-2 bottom-2 top-16'
                : 'bottom-6 right-6'
            }`}
            style={isMobile ? {
              maxHeight: 'calc(100dvh - 5rem)',
            } : {
              width: pageRelatedGuides.length > 0 ? 620 : 390,
              height: 580,
              maxWidth: 'calc(100vw - 3rem)',
              maxHeight: 'calc(100vh - 3rem)',
            }}
          >
            {/* Related guides sidebar */}
            {pageRelatedGuides.length > 0 && (
              <div
                className="hidden sm:flex flex-col border-r border-border overflow-y-auto"
                style={{ width: 220, minWidth: 220, backgroundColor: 'hsl(220 30% 12%)' }}
              >
                <div className="px-4 pt-4 pb-2">
                  <p className="text-white/90 font-semibold" style={{ fontSize: 13 }}>Guides for this page</p>
                  <p className="text-white/75 mt-0.5" style={{ fontSize: 11 }}>Step-by-step help</p>
                </div>
                <div className="flex flex-col gap-2 px-3 pb-4">
                  {pageRelatedGuides.map(g => (
                    <a
                      key={g.slug}
                      href={`/guides/${g.slug}`}
                      aria-label={`Read guide: ${g.title}${g.readTime ? ` (${g.readTime})` : ''}`}
                      className="flex flex-col rounded-xl px-3 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <img src={getGuideThumbnailSmall(g)} alt="" className="w-5 h-5 rounded object-cover shrink-0" loading="lazy" />
                        <ExternalLink className="h-3 w-3 text-white/65 group-hover:text-white/90 transition-colors ml-auto shrink-0" aria-hidden="true" />
                      </div>
                      <span className="text-white/80 font-medium leading-tight group-hover:text-white transition-colors line-clamp-2" style={{ fontSize: 12 }}>
                        {g.title}
                      </span>
                      {g.readTime && (
                        <span className="text-white/65 mt-1" style={{ fontSize: 10 }} aria-hidden="true">{g.readTime}</span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Main chat column */}
            <div className="flex flex-col flex-1 overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: 'hsl(220 70% 20%)' }}>
              <div className="flex items-center gap-2 text-white">
                <Bot className="h-5 w-5" aria-hidden="true" />
                <div>
                  <span id="tekbot-heading" className="font-bold block" style={{ fontSize: 15 }}>TekBot</span>
                  <span className="text-white/80 flex items-center gap-1" style={{ fontSize: 11 }}>
                    {memory.stats && memory.stats.total > 0 && (
                      <span className="inline-flex items-center gap-0.5" title={`${memory.stats.total} memories stored`}>
                        <Brain className="h-3 w-3 text-teksure-success" aria-hidden="true" />
                        <span className="text-teksure-success">{memory.stats.total}</span>
                        <span className="mx-0.5 text-white/40">·</span>
                      </span>
                    )}
                    {conversationCount > 0
                      ? `${conversationCount} message${conversationCount === 1 ? '' : 's'} this session`
                      : 'Your friendly tech helper'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {/* Clear chat button */}
                {conversationCount > 0 && (
                  <button
                    onClick={handleClearChat}
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-all"
                    style={{ fontSize: 12, minHeight: 44 }}
                    aria-label="Clear conversation history"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                    <span className="hidden sm:inline">Clear</span>
                  </button>
                )}

                {/* Device picker */}
                <div className="relative">
                  <button
                    ref={devicePickerTriggerRef}
                    onClick={() => setShowDevicePicker(v => !v)}
                    onKeyDown={(e) => { if (e.key === 'Escape') { setShowDevicePicker(false); } }}
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-all"
                    style={{ fontSize: 12, minHeight: 44 }}
                    aria-label={device ? `Device: ${deviceLabel(device)} — change device` : 'Select your device type'}
                    aria-expanded={showDevicePicker}
                    aria-haspopup="listbox"
                    aria-controls="tekbot-device-listbox"
                  >
                    {device ? (
                      <>
                        {device === 'windows' && <Monitor className="h-3.5 w-3.5" aria-hidden="true" />}
                        {device === 'mac' && <Laptop className="h-3.5 w-3.5" aria-hidden="true" />}
                        {(device === 'iphone' || device === 'android') && <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />}
                        <span>{deviceLabel(device)}</span>
                      </>
                    ) : (
                      <>
                        <Settings2 className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>My device</span>
                      </>
                    )}
                    <ChevronDown className="h-3 w-3 opacity-60" aria-hidden="true" />
                  </button>

                  {showDevicePicker && (
                    <div
                      id="tekbot-device-listbox"
                      role="listbox"
                      aria-label="Select your device type"
                      className="absolute right-0 top-8 z-10 rounded-xl border border-border bg-white shadow-xl"
                      style={{ minWidth: 160 }}
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                          setShowDevicePicker(false);
                          devicePickerTriggerRef.current?.focus();
                        }
                      }}
                    >
                      <p className="px-3 pt-2 pb-1 text-xs font-semibold text-muted-foreground" aria-hidden="true">Your device</p>
                      {DEVICE_OPTIONS.map(opt => (
                        <button
                          key={opt.value}
                          role="option"
                          aria-selected={device === opt.value}
                          onClick={() => handleSetDevice(opt.value)}
                          className={`flex w-full items-center gap-2.5 px-3 py-2 text-sm hover:bg-muted/40 transition-colors ${device === opt.value ? 'text-secondary font-semibold' : 'text-foreground'}`}
                        >
                          <span aria-hidden="true">{opt.icon}</span>
                          {opt.label}
                        </button>
                      ))}
                      {device && (
                        <>
                          <div className="mx-3 my-1 border-t border-border" aria-hidden="true" />
                          <button
                            role="option"
                            aria-selected={false}
                            onClick={() => handleSetDevice(null)}
                            className="flex w-full items-center gap-2.5 px-3 py-2 pb-2 text-sm text-muted-foreground hover:bg-muted/40 transition-colors"
                          >
                            Clear device selection
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>

                <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="text-white hover:bg-white/10 h-11 w-11" aria-label="Close TekBot">
                  <X className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div
              role="log"
              aria-live="polite"
              aria-relevant="additions"
              aria-label="Chat messages"
              className="flex-1 overflow-y-auto p-4 space-y-3"
              style={{ backgroundColor: 'hsl(210 25% 97%)' }}
              onClick={() => setShowDevicePicker(false)}
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className="rounded-2xl px-4 py-3 max-w-[88%] whitespace-pre-line leading-relaxed"
                    style={{
                      fontSize: 15,
                      backgroundColor: msg.role === 'user' ? 'hsl(172 50% 40%)' : 'hsl(0 0% 100%)',
                      color: msg.role === 'user' ? 'white' : 'hsl(220 50% 10%)',
                      borderBottomRightRadius: msg.role === 'user' ? 4 : undefined,
                      borderBottomLeftRadius: msg.role === 'bot' ? 4 : undefined,
                      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                    }}
                  >
                    {msg.content}
                  </div>

                  {/* Related guides */}
                  {msg.role === 'bot' && msg.relatedGuides && msg.relatedGuides.length > 0 && (
                    <div className="mt-2 max-w-[88%] w-full">
                      <p className="text-xs text-muted-foreground font-medium mb-1.5 flex items-center gap-1">
                        <BookOpen className="h-3 w-3" aria-hidden="true" /> Related guides
                      </p>
                      <div className="space-y-1">
                        {msg.relatedGuides.map(g => (
                          <a
                            key={g.slug}
                            href={`/guides/${g.slug}`}
                            aria-label={`Read guide: ${g.title}`}
                            className="flex items-center gap-2 rounded-lg px-3 py-2 bg-white border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-sm group"
                          >
                            <img src={getGuideThumbnailSmall(g)} alt="" className="w-5 h-5 rounded object-cover shrink-0" loading="lazy" />
                            <span className="flex-1 font-medium leading-tight group-hover:text-primary transition-colors line-clamp-1">
                              {g.title}
                            </span>
                            <ExternalLink className="h-3 w-3 text-muted-foreground shrink-0" aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {typing && (
                <div className="flex justify-start" role="status" aria-label="TekBot is typing">
                  <div
                    className="flex gap-1.5 items-center rounded-2xl px-4 py-3"
                    style={{ backgroundColor: 'hsl(0 0% 100%)', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
                    aria-hidden="true"
                  >
                    <span className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick prompts (shown when only the welcome message exists) */}
            {messages.length === 1 && (
              <div className="px-3 pb-2 flex flex-wrap gap-1.5" style={{ backgroundColor: 'hsl(210 25% 97%)' }}>
                {quickPrompts.map(p => (
                  <button
                    key={p}
                    onClick={() => send(p)}
                    className="text-sm px-3 py-2 rounded-full bg-white border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                    style={{ minHeight: 44 }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-border bg-white px-3 py-3">
              <label htmlFor="tekbot-input" className="sr-only">Type your question for TekBot</label>
              <input
                id="tekbot-input"
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder={device ? `Ask about your ${deviceLabel(device)}...` : 'Type your question...'}
                className="flex-1 rounded-lg border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-secondary"
                style={{ fontSize: 15, minHeight: 44 }}
              />
              <Button
                onClick={() => send()}
                disabled={!input.trim() || typing}
                size="icon"
                className="h-11 w-11 rounded-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            </div>{/* end main chat column */}
          </div>
        )}
      </>
    </>
  );
}
