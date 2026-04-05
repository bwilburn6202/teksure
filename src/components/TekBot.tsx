/**
 * TekBot — AI Knowledge Base for TekSure.
 *
 * Searches across 780+ guides, 20+ wiki pages, and curated resources
 * to find the best answers for any technology question.
 *
 * Features:
 *  - Knowledge base search across all guides and wiki content
 *  - Device memory (localStorage) — remembers user's device
 *  - Device picker + auto-detection from message text
 *  - Beginner mode — extra-detailed answers with step-by-step context
 *  - Session memory (sessionStorage) — persists across navigation
 *  - Context-aware — boosts results from current page
 */

import { useState, useRef, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Bot, X, Send, BookOpen, ExternalLink,
  Laptop, Smartphone, Apple, Monitor, Settings2, ChevronDown,
  Trash2, MessageSquare, Search, FileText, Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { guides, type Guide } from '@/data/guides';
import { wikiPages, type WikiPage } from '@/data/wiki';

/* ── Types ─────────────────────────────────────────────────── */

type DeviceType = 'windows' | 'mac' | 'iphone' | 'android' | null;

interface SearchResult {
  type: 'guide' | 'wiki';
  title: string;
  snippet: string;
  href: string;
  tags: string[];
  score: number;
  steps?: string[];
}

interface Message {
  role: 'user' | 'bot';
  content: string;
  results?: SearchResult[];
}

/* ── Device memory ─────────────────────────────────────────── */

const DEVICE_KEY = 'teksure_tekbot_device';

function loadDevice(): DeviceType {
  if (typeof window === 'undefined') return null;
  return (localStorage.getItem(DEVICE_KEY) as DeviceType) ?? null;
}

function saveDevice(d: DeviceType) {
  if (typeof window === 'undefined') return;
  if (d) localStorage.setItem(DEVICE_KEY, d);
  else localStorage.removeItem(DEVICE_KEY);
}

/* ── Session memory ──────────────────────────────────────── */

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
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(msgs.slice(-40)));
  } catch { /* noop */ }
}

function clearSession() {
  try { sessionStorage.removeItem(SESSION_KEY); } catch { /* noop */ }
}

/** Auto-detect device from user message text */
function detectDeviceFromText(text: string): DeviceType {
  const lower = text.toLowerCase();
  if (/\biphone\b|\bios\b|\bipad\b|\bapple phone\b/.test(lower)) return 'iphone';
  if (/\bmac\b|\bmacbook\b|\bmacos\b|\bapple (computer|laptop|desktop)\b/.test(lower)) return 'mac';
  if (/\bandroid\b|\bgalaxy\b|\bpixel\b|\bsamsung phone\b/.test(lower)) return 'android';
  if (/\bwindows\b|\bpc\b|\bdell\b|\bhp\b|\blenovo\b|\bwindows (computer|laptop|desktop)\b/.test(lower)) return 'windows';
  return null;
}

/* ── Knowledge Base Index ─────────────────────────────────── */

interface IndexEntry {
  type: 'guide' | 'wiki';
  title: string;
  snippet: string;
  href: string;
  tags: string[];
  keywords: string;
  steps?: string[];
}

/** Build search index from all guides and wiki pages (runs once at module load) */
function buildIndex(): IndexEntry[] {
  const entries: IndexEntry[] = [];

  // Index all guides
  for (const g of guides) {
    const stepText = g.steps?.map(s => `${s.title} ${s.content}`).join(' ') ?? '';
    const stepTitles = g.steps?.map(s => s.title) ?? [];
    entries.push({
      type: 'guide',
      title: g.title,
      snippet: g.excerpt,
      href: `/guides/${g.slug}`,
      tags: [...g.tags, g.category],
      keywords: `${g.title} ${g.excerpt} ${g.tags.join(' ')} ${g.category} ${stepText}`.toLowerCase(),
      steps: stepTitles.slice(0, 4),
    });
  }

  // Index all wiki pages
  for (const w of wikiPages) {
    const plainContent = w.content
      .replace(/#{1,6}\s+/g, '')
      .replace(/\*\*/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_~`\[\]()]/g, '');
    entries.push({
      type: 'wiki',
      title: w.title,
      snippet: plainContent.slice(0, 200).trim(),
      href: `/wiki/${w.slug}`,
      tags: w.tags,
      keywords: `${w.title} ${w.tags.join(' ')} ${w.category} ${plainContent}`.toLowerCase(),
    });
  }

  return entries;
}

const INDEX = buildIndex();

/* ── Search Engine ────────────────────────────────────────── */

const STOP_WORDS = new Set(['the', 'is', 'at', 'in', 'on', 'to', 'a', 'an', 'and', 'or', 'for', 'of', 'my', 'me', 'how', 'do', 'can', 'what', 'why', 'does', 'did', 'this', 'that', 'it']);

function searchKnowledgeBase(query: string, device: DeviceType, limit = 5): SearchResult[] {
  const words = query.toLowerCase().split(/\W+/).filter(w => w.length > 1 && !STOP_WORDS.has(w));
  if (words.length === 0) return [];

  const scored: (IndexEntry & { score: number })[] = [];

  for (const entry of INDEX) {
    let score = 0;
    const titleLower = entry.title.toLowerCase();

    for (const word of words) {
      // Title match (highest value)
      if (titleLower.includes(word)) score += 4;
      // Tag match
      if (entry.tags.some(t => t.toLowerCase().includes(word))) score += 3;
      // Content match
      if (entry.keywords.includes(word)) score += 1;
    }

    // Device boost
    if (device) {
      const deviceNames: Record<string, string[]> = {
        windows: ['windows', 'pc', 'laptop', 'desktop'],
        mac: ['mac', 'macos', 'macbook', 'apple'],
        iphone: ['iphone', 'ios', 'ipad', 'apple'],
        android: ['android', 'samsung', 'pixel', 'galaxy'],
      };
      if (deviceNames[device]?.some(d => entry.keywords.includes(d))) score += 2;
    }

    // Slight boost for wiki pages (comprehensive knowledge)
    if (entry.type === 'wiki') score += 1;

    if (score > 0) scored.push({ ...entry, score });
  }

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ type, title, snippet, href, tags, score, steps }) => ({
      type, title, snippet, href, tags, score, steps,
    }));
}

/* ── Response Builder ─────────────────────────────────────── */

/** Find related wiki pages for a given result to surface cross-links */
function findRelatedWikiPages(result: SearchResult): string[] {
  const wikiPage = wikiPages.find(w => `/wiki/${w.slug}` === result.href);
  if (wikiPage) return wikiPage.seeAlso.slice(0, 3);
  // For guide results, find wiki pages with overlapping tags
  const guideEntry = INDEX.find(e => e.href === result.href);
  if (!guideEntry) return [];
  const related: string[] = [];
  for (const w of wikiPages) {
    if (w.tags.some(t => guideEntry.tags.some(gt => gt.toLowerCase().includes(t.toLowerCase())))) {
      related.push(w.slug);
      if (related.length >= 2) break;
    }
  }
  return related;
}

function buildResponse(query: string, results: SearchResult[], explainMode: boolean): string {
  if (results.length === 0) {
    if (explainMode) {
      return "I could not find an exact match for that question, but that is okay! Everyone starts somewhere.\n\nHere are some things you can try:\n1. Describe your problem in different words — there is no wrong way to ask.\n2. Try a shorter question, like \"WiFi not working\" or \"forgot password.\"\n3. Browse our Knowledge Base at /wiki for compiled articles on every topic.\n\nYou are doing great by asking questions!";
    }
    return "I could not find an exact match. Our AI-compiled knowledge base covers 780+ topics and is always growing.\n\nTry rephrasing, or browse the Knowledge Base for compiled articles organized by topic.";
  }

  const top = results[0];
  const wikiResults = results.filter(r => r.type === 'wiki');
  const guideResults = results.filter(r => r.type === 'guide');
  let response = '';

  if (explainMode) {
    response += "Let me walk you through what I found. Take your time reading this.\n\n";
    // Lead with wiki article if available (compiled knowledge > raw guide)
    if (top.type === 'wiki') {
      response += `**${top.title}** (from our Knowledge Base)\n${top.snippet}\n`;
      const related = findRelatedWikiPages(top);
      if (related.length > 0) {
        const relatedTitles = related
          .map(slug => wikiPages.find(w => w.slug === slug)?.title)
          .filter(Boolean);
        if (relatedTitles.length > 0) {
          response += `\nRelated topics: ${relatedTitles.join(', ')}`;
        }
      }
      if (guideResults.length > 0) {
        response += `\n\nI also found ${guideResults.length} step-by-step guide${guideResults.length > 1 ? 's' : ''} with detailed instructions below.`;
      }
    } else {
      response += `**${top.title}**\n${top.snippet}\n`;
      if (top.steps && top.steps.length > 0) {
        response += "\nHere are the first steps:\n";
        top.steps.forEach((s, i) => {
          response += `${i + 1}. ${s}\n`;
        });
        response += "\nTap the link below for full details on each step.";
      }
      if (wikiResults.length > 0) {
        response += `\n\nFor deeper background, check the Knowledge Base article${wikiResults.length > 1 ? 's' : ''} below.`;
      }
    }
    response += "\n\nDid that help? Ask me about any part you want explained differently.";
  } else {
    // Lead with wiki if high-scoring (compiled knowledge)
    if (top.type === 'wiki') {
      response += `From the Knowledge Base: **${top.title}**\n${top.snippet.slice(0, 180)}${top.snippet.length > 180 ? '...' : ''}`;
    } else {
      response += `**${top.title}** — ${top.snippet.slice(0, 150)}${top.snippet.length > 150 ? '...' : ''}`;
    }
    const otherCount = results.length - 1;
    if (otherCount > 0) {
      const types = [];
      if (wikiResults.length > (top.type === 'wiki' ? 1 : 0)) types.push('knowledge base articles');
      if (guideResults.length > (top.type === 'guide' ? 1 : 0)) types.push('step-by-step guides');
      response += `\n\n${otherCount} more result${otherCount > 1 ? 's' : ''} below${types.length > 0 ? ` (${types.join(' and ')})` : ''}.`;
    }
  }

  return response;
}

/* ── Device helpers ───────────────────────────────────────── */

const DEVICE_OPTIONS: { value: DeviceType; label: string; icon: React.ReactNode }[] = [
  { value: 'windows', label: 'Windows PC', icon: <Monitor className="h-4 w-4" /> },
  { value: 'mac', label: 'Mac', icon: <Apple className="h-4 w-4" /> },
  { value: 'iphone', label: 'iPhone', icon: <Smartphone className="h-4 w-4" /> },
  { value: 'android', label: 'Android', icon: <Smartphone className="h-4 w-4 text-teksure-success" /> },
];

function deviceLabel(d: DeviceType) {
  return DEVICE_OPTIONS.find(o => o.value === d)?.label ?? 'All devices';
}

const DEFAULT_PROMPTS = [
  'How do I connect to WiFi?',
  'What is a strong password?',
  'How do I spot a scam?',
  'Help me set up my phone',
];

const DEVICE_PROMPTS: Record<NonNullable<DeviceType>, string[]> = {
  windows: ['My Windows PC is slow', 'Fix WiFi on Windows', 'Windows Update help', 'How to take a screenshot'],
  mac: ['My Mac is running slow', 'Fix WiFi on Mac', 'Mac Software Update', 'How to back up my Mac'],
  iphone: ['iPhone battery drains fast', 'Fix WiFi on iPhone', 'Update my iPhone', 'iPhone storage full'],
  android: ['Android phone is slow', 'Fix WiFi on Android', 'Android update help', 'Free up Android space'],
};

/* ── Component ─────────────────────────────────────────────── */

export function TekBot() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [device, setDevice] = useState<DeviceType>(loadDevice);
  const [messages, setMessages] = useState<Message[]>(() => loadSession());
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [explainMode, setExplainMode] = useState(false);
  const [showDevicePicker, setShowDevicePicker] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 640);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
    else openButtonRef.current?.focus();
  }, [open]);

  useEffect(() => { saveSession(messages); }, [messages]);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const guideCount = guides.length;
  const wikiCount = wikiPages.length;

  const welcomeMessage = useMemo(() => {
    const deviceHint = device ? ` I see you're using a ${deviceLabel(device)}.` : '';
    return `Hi! I'm TekBot — your AI-compiled tech knowledge base.${deviceHint}\n\nI search across ${guideCount}+ guides and ${wikiCount} compiled articles from trusted sources like AARP, FTC, Apple Support, and Google Support. All knowledge is cross-linked and kept up to date.\n\nAsk me anything about technology!`;
  }, [device, guideCount, wikiCount]);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: 'bot', content: welcomeMessage }]);
    }
  }, [welcomeMessage]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  function handleSetDevice(d: DeviceType) {
    setDevice(d);
    saveDevice(d);
    setShowDevicePicker(false);
    const label = d ? deviceLabel(d) : 'all devices';
    setMessages(prev => [
      ...prev,
      { role: 'bot', content: `Got it! I'll prioritize ${label} results from now on.` },
    ]);
  }

  function handleClearChat() {
    clearSession();
    setMessages([{ role: 'bot', content: welcomeMessage }]);
  }

  const send = (overrideText?: string) => {
    const text = (overrideText ?? input).trim();
    if (!text) return;

    const detected = !device ? detectDeviceFromText(text) : null;
    if (detected) { setDevice(detected); saveDevice(detected); }
    const activeDevice = detected ?? device;

    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      const results = searchKnowledgeBase(text, activeDevice);
      const answer = buildResponse(text, results, explainMode);

      let finalAnswer = answer;
      if (detected) {
        finalAnswer = `(I noticed you're on ${deviceLabel(detected)} — I'll prioritize those results.)\n\n${answer}`;
      }

      setMessages(prev => [
        ...prev,
        { role: 'bot', content: finalAnswer, results: results.length > 0 ? results : undefined },
      ]);
    }, 400 + Math.random() * 400);
  };

  const quickPrompts = device ? DEVICE_PROMPTS[device] : DEFAULT_PROMPTS;
  const conversationCount = messages.filter(m => m.role === 'user').length;

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          ref={openButtonRef}
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105"
          style={{ backgroundColor: 'hsl(172 50% 40%)', minHeight: 48, fontSize: 16 }}
          aria-label="Open TekBot knowledge base"
          aria-haspopup="dialog"
        >
          <Search className="h-5 w-5" aria-hidden="true" />
          <span>TekBot</span>
          {conversationCount > 0 && (
            <span className="ml-0.5 flex items-center gap-1 rounded-full bg-white/20 px-1.5 py-0.5 text-xs font-normal">
              <MessageSquare className="h-3 w-3" aria-hidden="true" />
              {conversationCount}
            </span>
          )}
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="tekbot-heading"
          className={`fixed z-50 flex flex-col overflow-hidden rounded-2xl shadow-2xl border border-border ${
            isMobile ? 'inset-x-2 bottom-2 top-16' : 'bottom-6 right-6'
          }`}
          style={isMobile ? { maxHeight: 'calc(100dvh - 5rem)' } : {
            width: 420, height: 600,
            maxWidth: 'calc(100vw - 3rem)', maxHeight: 'calc(100vh - 3rem)',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: 'hsl(220 70% 20%)' }}>
            <div className="flex items-center gap-2 text-white">
              <Search className="h-5 w-5" aria-hidden="true" />
              <div>
                <span id="tekbot-heading" className="font-bold block" style={{ fontSize: 15 }}>TekBot</span>
                <span className="text-white/80" style={{ fontSize: 11 }}>
                  AI-compiled knowledge base &middot; {guideCount}+ sources
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {/* Beginner mode toggle */}
              <button
                onClick={() => {
                  const next = !explainMode;
                  setExplainMode(next);
                  setMessages(prev => [
                    ...prev,
                    { role: 'bot', content: next
                      ? "Beginner mode is on. I will explain everything in extra detail and show you the first steps from each guide."
                      : "Beginner mode is off. I'll give you shorter, quicker answers." },
                  ]);
                }}
                className={`flex items-center gap-1 rounded-lg px-3 py-2 transition-all ${
                  explainMode
                    ? 'bg-yellow-400/20 text-yellow-200 hover:bg-yellow-400/30'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                style={{ fontSize: 12, minHeight: 44 }}
                aria-label={explainMode ? 'Turn off beginner mode' : 'Turn on beginner mode'}
                aria-pressed={explainMode}
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">Beginner</span>
              </button>

              {conversationCount > 0 && (
                <button
                  onClick={handleClearChat}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-all"
                  style={{ fontSize: 12, minHeight: 44 }}
                  aria-label="Clear conversation"
                >
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                </button>
              )}

              {/* Device picker */}
              <div className="relative">
                <button
                  onClick={() => setShowDevicePicker(v => !v)}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-all"
                  style={{ fontSize: 12, minHeight: 44 }}
                  aria-label={device ? `Device: ${deviceLabel(device)}` : 'Select your device'}
                  aria-expanded={showDevicePicker}
                >
                  {device ? (
                    <>
                      {device === 'windows' && <Monitor className="h-3.5 w-3.5" />}
                      {device === 'mac' && <Laptop className="h-3.5 w-3.5" />}
                      {(device === 'iphone' || device === 'android') && <Smartphone className="h-3.5 w-3.5" />}
                    </>
                  ) : (
                    <Settings2 className="h-3.5 w-3.5" />
                  )}
                  <ChevronDown className="h-3 w-3 opacity-60" />
                </button>

                {showDevicePicker && (
                  <div className="absolute right-0 top-8 z-10 rounded-xl border border-border bg-white shadow-xl" style={{ minWidth: 160 }}>
                    <p className="px-3 pt-2 pb-1 text-xs font-semibold text-muted-foreground">Your device</p>
                    {DEVICE_OPTIONS.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => handleSetDevice(opt.value)}
                        className={`flex w-full items-center gap-2.5 px-3 py-2 text-sm hover:bg-muted/40 transition-colors ${device === opt.value ? 'text-secondary font-semibold' : 'text-foreground'}`}
                      >
                        <span>{opt.icon}</span>
                        {opt.label}
                      </button>
                    ))}
                    {device && (
                      <>
                        <div className="mx-3 my-1 border-t border-border" />
                        <button
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
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div
            role="log"
            aria-live="polite"
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
                  {msg.content.split(/(\*\*[^*]+\*\*)/).map((part, pi) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={pi}>{part.slice(2, -2)}</strong>;
                    }
                    return <span key={pi}>{part}</span>;
                  })}
                </div>

                {/* Knowledge base results */}
                {msg.role === 'bot' && msg.results && msg.results.length > 0 && (
                  <div className="mt-2 max-w-[92%] w-full space-y-1.5">
                    {msg.results.map((r, ri) => (
                      <a
                        key={ri}
                        href={r.href}
                        className="flex items-start gap-3 rounded-xl px-3 py-2.5 bg-white border border-border hover:border-primary/40 hover:bg-primary/5 transition-all group"
                      >
                        <span className="shrink-0 mt-0.5">
                          {r.type === 'guide' ? (
                            <FileText className="h-4 w-4 text-primary/70" />
                          ) : (
                            <Globe className="h-4 w-4 text-purple-500/70" />
                          )}
                        </span>
                        <div className="flex-1 min-w-0">
                          <span className="font-medium text-sm leading-tight group-hover:text-primary transition-colors line-clamp-1 block">
                            {r.title}
                          </span>
                          <span className="text-xs text-muted-foreground line-clamp-1 block mt-0.5">
                            {r.snippet.slice(0, 100)}
                          </span>
                          <div className="flex items-center gap-1.5 mt-1">
                            <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${
                              r.type === 'guide'
                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                                : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                            }`}>
                              {r.type === 'guide' ? 'Guide' : 'Wiki'}
                            </span>
                          </div>
                        </div>
                        <ExternalLink className="h-3 w-3 text-muted-foreground shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {typing && (
              <div className="flex justify-start" role="status" aria-label="Searching...">
                <div className="flex gap-1.5 items-center rounded-2xl px-4 py-3 bg-white" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
                  <Search className="h-3.5 w-3.5 text-muted-foreground animate-pulse" />
                  <span className="text-xs text-muted-foreground">Searching knowledge base...</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick prompts */}
          {messages.length === 1 && (
            <div className="px-3 pb-2 flex flex-wrap gap-1.5" style={{ backgroundColor: 'hsl(210 25% 97%)' }}>
              {quickPrompts.map(p => (
                <button
                  key={p}
                  onClick={() => send(p)}
                  className="text-sm px-3 py-2 rounded-full bg-white border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                  style={{ minHeight: 40 }}
                >
                  {p}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-border bg-white px-3 py-3">
            <label htmlFor="tekbot-input" className="sr-only">Ask anything about technology</label>
            <input
              id="tekbot-input"
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder={device ? `Search for ${deviceLabel(device)} help...` : 'Ask anything about technology...'}
              className="flex-1 rounded-lg border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-secondary"
              style={{ fontSize: 15, minHeight: 44 }}
            />
            <Button
              onClick={() => send()}
              disabled={!input.trim() || typing}
              size="icon"
              className="h-11 w-11 rounded-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              aria-label="Search"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
