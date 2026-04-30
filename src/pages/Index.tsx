/**
 * TekSure homepage — TekBrain chat, full viewport, no page scroll.
 * Layout mirrors the dark-theme design but in light colors.
 */

import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUp, BookOpen, ExternalLink, Monitor, Smartphone, Laptop, Settings2, ChevronDown, Trash2 } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { SEOHead } from '@/components/SEOHead';
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
  DEFAULT_PROMPTS,
  DEVICE_PROMPTS,
} from '@/lib/tekbrain-kb';
import { guides } from '@/data/guides';

/* ── Session ─────────────────────────────────────────────────── */

const SESSION_KEY = 'teksure_brain_home_session';

function loadSession(): Message[] {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(sessionStorage.getItem(SESSION_KEY) ?? '[]') as Message[]; }
  catch { return []; }
}
function saveSession(msgs: Message[]) {
  try { sessionStorage.setItem(SESSION_KEY, JSON.stringify(msgs.slice(-40))); } catch { /* noop */ }
}
function clearSession() {
  try { sessionStorage.removeItem(SESSION_KEY); } catch { /* noop */ }
}

/* ── Device options ──────────────────────────────────────────── */

const DEVICE_OPTIONS: { value: DeviceType; label: string; icon: React.ReactNode }[] = [
  { value: 'windows', label: 'Windows PC', icon: <Monitor className="h-4 w-4" /> },
  { value: 'mac',     label: 'Mac',        icon: <Laptop className="h-4 w-4" /> },
  { value: 'iphone',  label: 'iPhone',     icon: <Smartphone className="h-4 w-4" /> },
  { value: 'android', label: 'Android',    icon: <Smartphone className="h-4 w-4" /> },
];

/* ── Quick chips ─────────────────────────────────────────────── */

const HOME_CHIPS = [
  { label: 'Get real human help', to: '/get-help' },
  { label: 'Find the right guide', to: '/find-a-guide' },
  { label: 'Browse tools', to: '/tools' },
  { label: 'WiFi not working', prompt: 'My WiFi stopped working' },
  { label: 'Reset a password', prompt: 'How do I reset a forgotten password?' },
  { label: 'Computer is slow', prompt: 'My computer is running slow' },
];

/* ── Component ─────────────────────────────────────────────── */

const Index = () => {
  const navigate = useNavigate();
  const [device, setDevice] = useState<DeviceType>(loadDevice);
  const [messages, setMessages] = useState<Message[]>(() => loadSession());
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [showDevicePicker, setShowDevicePicker] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const enrichedRef = useRef<string>('');
  const devicePickerRef = useRef<HTMLDivElement>(null);
  const memory = useAgentMemory();

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, typing]);
  useEffect(() => { saveSession(messages); }, [messages]);
  useEffect(() => { setTimeout(() => inputRef.current?.focus(), 100); }, []);

  /* Close device picker on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (devicePickerRef.current && !devicePickerRef.current.contains(e.target as Node))
        setShowDevicePicker(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const observeDevice = useCallback((d: DeviceType) => {
    if (!d) return;
    memory.remember('device', 'primary_device', { device: d, label: deviceLabel(d), detectedAt: new Date().toISOString() }, 8).catch(() => {});
  }, [memory]);

  const recallContext = useCallback(async (query: string): Promise<string> => {
    try {
      const mems = await memory.recall(query, { tiers: ['semantic', 'procedural', 'episodic'], limit: 3, minImportance: 4 });
      if (!mems.length) return '';
      return mems.map(m => {
        if (m.category === 'device') return `User device: ${(m.value as Record<string,string>).label}`;
        if (m.category === 'solution') return `Previously helped: ${(m.value as Record<string,string>).topic}`;
        return `Known: ${m.key}`;
      }).join('. ') + '.';
    } catch { return ''; }
  }, [memory]);

  function handleSetDevice(d: DeviceType) {
    setDevice(d); saveDevice(d); setShowDevicePicker(false); observeDevice(d);
    if (messages.length > 0)
      setMessages(prev => [...prev, { role: 'bot', content: `Got it. I will tailor answers for ${d ? deviceLabel(d) : 'all devices'} from now on.` }]);
  }

  function handleClear() { clearSession(); setMessages([]); setTimeout(() => inputRef.current?.focus(), 50); }

  const send = useCallback((overrideText?: string) => {
    const text = (overrideText ?? input).trim();
    if (!text) return;

    const detected = !device ? detectDeviceFromText(text) : null;
    if (detected) { setDevice(detected); saveDevice(detected); observeDevice(detected); }
    const activeDevice = detected ?? device;

    setMessages(prev => {
      const history = prev.filter(m => m.role === 'user').slice(-5).map(m => m.content);
      const base = isContinuation(text) && history.length > 1 ? `${history.slice(0,-1).join(' ')} ${text}` : text;
      enrichedRef.current = buildContextualQuery(base, '/');
      return [...prev, { role: 'user', content: text }];
    });
    setInput(''); setTyping(true);

    const delay = isContinuation(text) ? 600 : 900 + Math.random() * 700;

    function deliver(ctx?: string) {
      setTyping(false);
      const enriched = enrichedRef.current || text;
      const answer = getResponse(enriched, activeDevice);
      const related = findRelatedGuides(enriched);
      let finalAnswer = answer;
      if (detected) finalAnswer = `(I noticed you are on ${deviceLabel(detected)}. I will remember that.)\n\n${answer}`;
      else if (ctx?.includes('Previously helped')) finalAnswer = `(Welcome back! I remember helping you before.)\n\n${answer}`;
      setMessages(prev => [...prev, { role: 'bot', content: finalAnswer, relatedGuides: related.length ? related : undefined }]);
    }

    recallContext(text).then(ctx => setTimeout(() => deliver(ctx), delay)).catch(() => setTimeout(() => deliver(), delay));
  }, [input, device, observeDevice, recallContext]);

  const hasMessages = messages.length > 0;
  const conversationCount = messages.filter(m => m.role === 'user').length;
  const quickPrompts = device ? DEVICE_PROMPTS[device].slice(0, 4) : DEFAULT_PROMPTS;

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background">
      <SEOHead
        title="TekSure — Free Tech Help for Beginners & Seniors"
        description="TekSure is an American tech support company offering free step-by-step guides, quick fixes, and real human support for seniors and beginners. No jargon, just answers."
        path="/"
        jsonLd={[
          { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://teksure.com/#organization', name: 'TekSure', url: 'https://teksure.com', logo: 'https://teksure.com/og-image.png', description: 'American tech support — free guides for seniors and beginners.', contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'hello@teksure.com', availableLanguage: 'English' } },
          { '@context': 'https://schema.org', '@type': 'WebSite', '@id': 'https://teksure.com/#website', url: 'https://teksure.com', name: 'TekSure', publisher: { '@id': 'https://teksure.com/#organization' }, potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://teksure.com/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' } },
        ]}
      />

      <Navbar />

      {/* ── Main ── */}
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 flex flex-col items-center justify-center px-4 pb-4 min-h-0 outline-none"
      >
        <div className="w-full max-w-2xl flex flex-col min-h-0" style={{ maxHeight: 'calc(100vh - 72px)' }}>

          {/* Logo — large when no messages, compact when chatting */}
          <div className={`text-center shrink-0 transition-all duration-300 ${hasMessages ? 'mb-3' : 'mb-8'}`}>
            <img
              src="/teksure-logo.svg"
              alt="TekSure"
              className={`mx-auto transition-all duration-300 ${hasMessages ? 'h-7' : 'h-14'}`}
            />
            {!hasMessages && (
              <p className="mt-3 text-muted-foreground text-lg">
                Tech help that speaks your language.
              </p>
            )}
          </div>

          {/* Messages — scrollable, only rendered when chatting */}
          {hasMessages && (
            <div
              role="log"
              aria-live="polite"
              aria-label="TekBrain conversation"
              className="flex-1 overflow-y-auto min-h-0 mb-3 space-y-3 pr-1"
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className="rounded-2xl px-4 py-3 max-w-[88%] whitespace-pre-line leading-relaxed text-[15px]"
                    style={{
                      backgroundColor: msg.role === 'user' ? 'hsl(172 50% 40%)' : 'hsl(0 0% 100%)',
                      color: msg.role === 'user' ? 'white' : 'hsl(220 50% 10%)',
                      borderBottomRightRadius: msg.role === 'user' ? 4 : undefined,
                      borderBottomLeftRadius: msg.role === 'bot' ? 4 : undefined,
                      boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                      border: msg.role === 'bot' ? '1px solid hsl(220 13% 91%)' : undefined,
                    }}
                  >
                    {msg.content}
                  </div>

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
                            <span className="flex-1 font-medium leading-tight group-hover:text-primary transition-colors line-clamp-1">{g.title}</span>
                            <ExternalLink className="h-3 w-3 text-muted-foreground shrink-0" aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {typing && (
                <div className="flex justify-start" role="status" aria-label="TekBrain is thinking">
                  <div
                    className="flex gap-1.5 items-center rounded-2xl px-4 py-3 border border-border"
                    style={{ backgroundColor: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
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
          )}

          {/* Input box — styled like the dark theme's search box */}
          <div className="shrink-0">
            <div className="relative rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
              {/* Device picker — top-right inside box */}
              <div className="absolute top-3 right-3 z-10" ref={devicePickerRef}>
                <button
                  onClick={() => setShowDevicePicker(v => !v)}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-border/60 text-xs text-muted-foreground hover:text-foreground hover:border-border bg-background transition-colors"
                  aria-label={device ? `Device: ${deviceLabel(device)}` : 'Select your device'}
                  aria-expanded={showDevicePicker}
                >
                  {device === 'windows' && <Monitor className="h-3 w-3" aria-hidden="true" />}
                  {device === 'mac'     && <Laptop   className="h-3 w-3" aria-hidden="true" />}
                  {(device === 'iphone' || device === 'android') && <Smartphone className="h-3 w-3" aria-hidden="true" />}
                  {!device && <Settings2 className="h-3 w-3" aria-hidden="true" />}
                  <span className="hidden sm:inline">{device ? deviceLabel(device) : 'My device'}</span>
                  <ChevronDown className="h-2.5 w-2.5 opacity-50" aria-hidden="true" />
                </button>

                {showDevicePicker && (
                  <div
                    role="listbox"
                    aria-label="Select your device"
                    className="absolute right-0 top-full mt-1 rounded-xl border border-border bg-white shadow-xl z-20"
                    style={{ minWidth: 160 }}
                  >
                    <p className="px-3 pt-2 pb-1 text-xs font-semibold text-muted-foreground">Your device</p>
                    {DEVICE_OPTIONS.map(opt => (
                      <button
                        key={opt.value}
                        role="option"
                        aria-selected={device === opt.value}
                        onClick={() => handleSetDevice(opt.value)}
                        className={`flex w-full items-center gap-2.5 px-3 py-2 text-sm hover:bg-muted/40 transition-colors ${device === opt.value ? 'text-primary font-semibold' : 'text-foreground'}`}
                      >
                        <span aria-hidden="true">{opt.icon}</span>
                        {opt.label}
                      </button>
                    ))}
                    {device && (
                      <>
                        <div className="mx-3 my-1 border-t border-border" />
                        <button
                          role="option"
                          aria-selected={false}
                          onClick={() => handleSetDevice(null)}
                          className="flex w-full items-center gap-2.5 px-3 py-2 pb-2 text-sm text-muted-foreground hover:bg-muted/40 transition-colors"
                        >
                          Clear selection
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>

              <label htmlFor="tekbrain-input" className="sr-only">Ask TekBrain your tech question</label>
              <textarea
                id="tekbrain-input"
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
                }}
                placeholder={device ? `Ask about your ${deviceLabel(device)}...` : 'What do you need help with?'}
                rows={2}
                className="w-full resize-none bg-transparent px-5 pt-5 pb-14 text-base rounded-2xl focus:outline-none placeholder:text-muted-foreground/50 leading-relaxed"
                style={{ maxHeight: 140, overflowY: 'auto' }}
              />

              {/* Bottom row inside input */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                {conversationCount > 0 ? (
                  <button
                    onClick={handleClear}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Clear conversation"
                  >
                    <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Clear</span>
                  </button>
                ) : (
                  <span />
                )}
                <button
                  onClick={() => send()}
                  disabled={!input.trim() || typing}
                  aria-label="Send message"
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-foreground text-background hover:opacity-90 transition-opacity disabled:opacity-30"
                >
                  <ArrowUp className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Chips — always shown below input */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 shrink-0">
            {(hasMessages ? quickPrompts.map(p => ({ label: p, prompt: p })) : HOME_CHIPS).map(chip => (
              <button
                key={chip.label}
                onClick={() => 'to' in chip && chip.to ? navigate(chip.to) : send('prompt' in chip ? chip.prompt : chip.label)}
                className="inline-flex items-center px-4 py-2 min-h-[40px] rounded-full border border-border bg-card text-sm text-foreground hover:border-primary/40 hover:bg-muted/40 transition-colors"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Stats */}
          <p className="text-center text-sm text-muted-foreground mt-4 shrink-0">
            <strong className="text-foreground font-semibold">{guides.length.toLocaleString()}+</strong> free guides &middot; Real humans &middot; Plain English
          </p>

        </div>
      </main>
    </div>
  );
};

export default Index;
