import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, X, Send, Bot, User, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { guides } from '@/data/guides';

/* ── Types ─────────────────────────────────────────────────── */
interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  text: string;
  relatedGuides?: { slug: string; title: string; thumbnailEmoji: string }[];
}

/* ── Mini knowledge-base (top 30 most-asked questions) ─────── */
const MINI_KB: { keywords: string[]; answer: string }[] = [
  { keywords: ['password', 'forgot password', 'reset password', 'login'], answer: "If you've forgotten a password, look for a 'Forgot password?' link on the login page. It'll send a reset link to your email.\n\nFor stronger passwords in future, consider a password manager — we have a guide that walks you through setting one up!" },
  { keywords: ['wifi', 'internet', 'connection', 'not connecting', 'offline', 'broadband'], answer: "For most WiFi problems, try the classic fix: turn your router off, wait 30 seconds, then turn it back on.\n\nStill not working? Our WiFi Troubleshooter walks you through each possible cause step by step." },
  { keywords: ['slow', 'running slow', 'sluggish', 'freezing', 'frozen', 'hang'], answer: "A slow device is usually caused by one of three things: too many apps open, low storage space, or needing a restart.\n\nTry restarting your device first — that alone fixes most slow-down issues. Our Device Health tool can check what's really going on." },
  { keywords: ['scam', 'fraud', 'phishing', 'suspicious', 'fake email', 'dodgy'], answer: "If something feels off, trust your instincts! Never click links in unexpected emails or texts.\n\nSigns of a scam: urgency ('act NOW!'), threats, requests for payment by gift card, or anything asking for your passwords. You can report a scam through our Scam Report tool." },
  { keywords: ['update', 'software update', 'windows update', 'ios update'], answer: "Updates are really important — they fix security holes and bugs. They're safe to install!\n\nOn iPhone: Settings → General → Software Update. On Windows: Start → Settings → Windows Update. Our Software Update guide has step-by-step photos." },
  { keywords: ['storage', 'full', 'space', 'no space', 'memory full', 'not enough'], answer: "When your device says it's full, the quickest fix is to delete photos you've backed up elsewhere, and clear your app cache.\n\nOur Storage Cleanup Wizard has a step-by-step checklist that frees up space in about 10 minutes." },
  { keywords: ['backup', 'back up', 'photos', 'save photos', 'lost photos'], answer: "The safest way to back up is the 3-2-1 rule: 3 copies, on 2 different types of storage, with 1 copy offsite (like cloud storage).\n\nOur Data Backup Wizard will build you a personalized backup plan in about 5 minutes." },
  { keywords: ['email', 'gmail', 'outlook', 'inbox', 'spam', 'junk'], answer: "Email problems are really common! Whether it's a full inbox, spam overload, or trouble sending — our Email Inbox Declutter guide covers it all with simple steps." },
  { keywords: ['virus', 'malware', 'hacked', 'hack', 'ransomware', 'infected'], answer: "If you think your device is infected, disconnect from the internet straight away. Don't enter any passwords.\n\nRun a security scan with Windows Defender (Windows) or Malwarebytes (free). Our Cybersecurity Scorecard can check how protected you currently are." },
  { keywords: ['printer', 'print', 'not printing', 'printer offline'], answer: "Printer problems are almost always solved by: (1) turning both the printer AND computer off and back on, (2) checking the USB or WiFi connection, (3) deleting stuck print jobs from the print queue.\n\nOur Interactive Troubleshooter has a full printer diagnosis section." },
  { keywords: ['phone', 'iphone', 'android', 'mobile', 'smartphone', 'screen'], answer: "What's going on with your phone? I can help with setup, apps, battery, storage, or connecting to WiFi.\n\nOur Device Hub has guides for iPhone, Android, and tablets — pick your device for tailored help." },
  { keywords: ['app', 'download', 'install', 'play store', 'app store'], answer: "Downloading apps is safe as long as you use the official App Store (iPhone/iPad) or Google Play Store (Android).\n\nNot sure which app to use? Our App Recommender asks you 4 quick questions and suggests the best options for your needs." },
  { keywords: ['two factor', '2fa', 'authenticator', 'two-factor', 'verification code'], answer: "Two-factor authentication is one of the best things you can do for security — it means even if someone steals your password, they still can't get in.\n\nOur 2FA Setup Wizard walks you through turning it on for Google, Apple, Facebook, and your bank." },
  { keywords: ['vpn', 'privacy', 'safe browsing', 'private'], answer: "A VPN hides your internet activity and is especially useful on public WiFi (like in cafés or libraries).\n\nOur VPN Setup Guide explains what a VPN is, whether you need one, and how to set up a free option in under 10 minutes." },
  { keywords: ['bluetooth', 'headphones', 'speaker', 'keyboard', 'not pairing', 'pairing'], answer: "For Bluetooth problems, start by turning Bluetooth off and on again, then 'forget' the device and re-pair it from scratch.\n\nOur Bluetooth Troubleshooter guides you through each step with yes/no questions." },
  { keywords: ['book', 'appointment', 'technician', 'help', 'engineer', 'visit'], answer: "Great — we'd love to help you in person! Our technicians are friendly, patient, and explain everything in plain English.\n\nYou can book a remote or in-home appointment on our booking page." },
  { keywords: ['cost', 'price', 'how much', 'subscription', 'free', 'pay'], answer: "TekSure has a free tier with access to all guides and tools. Our Premium subscription ($7.99/month) adds AI Tutor, priority booking, and ad-free reading.\n\nCheck our Pricing page for a full comparison." },
  { keywords: ['dark mode', 'night mode', 'brightness'], answer: "You can turn on dark mode from your device settings — or right here on TekSure using the moon icon in the top navigation bar! We also have a Senior Mode (larger text + high contrast) via the toolbar." },
  { keywords: ['certificate', 'achievement', 'badge', 'progress'], answer: "Yes! TekSure awards digital certificates as you complete guides. Once you've finished 5 guides, your first certificate unlocks.\n\nVisit the Certificate page to print yours or see how close you are." },
  { keywords: ['video call', 'zoom', 'facetime', 'teams', 'video chat', 'video calling'], answer: "Video calling is a brilliant way to stay in touch. The most popular apps are Zoom, FaceTime (Apple), and WhatsApp video.\n\nOur Video Calling Mastery guide covers all three — with step-by-step instructions and what to do if your camera or microphone doesn't work." },
];

function findAnswer(input: string): { answer: string; guides: typeof guides } {
  const lower = input.toLowerCase();
  let answer = '';

  for (const entry of MINI_KB) {
    if (entry.keywords.some(kw => lower.includes(kw))) {
      answer = entry.answer;
      break;
    }
  }
  if (!answer) {
    answer =
      "That's a great question! I'm still learning, but our full guides library almost certainly has the answer 📚\n\nTry using the search bar (⌘K), or browse by category in the Guides section. For tricky problems, you can book a real technician who'll walk you through it.";
  }

  // Guide matching
  const words = lower.split(/\W+/).filter(w => w.length > 3);
  const scored = guides.map(g => {
    const haystack = `${g.title} ${g.excerpt} ${g.tags?.join(' ')} ${g.category ?? ''}`.toLowerCase();
    const score = words.reduce((acc, w) => acc + (haystack.includes(w) ? 1 : 0), 0);
    return { g, score };
  });
  const related = scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map(s => s.g);

  return { answer, guides: related };
}

/* ── Quick-start prompts ───────────────────────────────────── */
const QUICK_PROMPTS = [
  'My WiFi isn\'t working',
  'Device is running slow',
  'How do I stay safe online?',
  'I think I got a scam email',
  'How do I back up my photos?',
];

/* ── Component ─────────────────────────────────────────────── */
export function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'bot',
      text: "Hi there! 👋 I'm TekBot, your friendly tech helper.\n\nAsk me anything — from WiFi problems to staying safe online. What can I help you with today?",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 150);
    } else {
      // Return focus to toggle button when chat closes
      toggleButtonRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setTyping(true);

    setTimeout(() => {
      const { answer, guides: related } = findAnswer(text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: answer,
        relatedGuides: related.map(g => ({
          slug: g.slug,
          title: g.title,
          thumbnailEmoji: g.thumbnailEmoji,
        })),
      };
      setMessages(prev => [...prev, botMsg]);
      setTyping(false);
      if (!open) setUnread(n => n + 1);
    }, 800 + Math.random() * 600);
  };

  return (
    /* Hidden on mobile — TekBot covers this functionality on small screens */
    <div className="hidden sm:contents">
      {/* Chat Panel */}
      <>
        {open && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="floatchat-heading"
            className="fixed bottom-[88px] right-[68px] z-50 w-[340px] sm:w-[380px] rounded-2xl shadow-2xl border border-border bg-background flex flex-col overflow-hidden"
            style={{ maxHeight: '540px' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-secondary text-secondary-foreground">
              <div className="h-9 w-9 rounded-full bg-secondary-foreground/20 flex items-center justify-center" aria-hidden="true">
                <Bot className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p id="floatchat-heading" className="font-semibold text-sm">TekBot</p>
                <p className="text-xs opacity-80 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 inline-block" aria-hidden="true" />
                  Online — here to help
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="h-11 w-11 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                aria-label="Close TekBot chat"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Messages */}
            <div
              role="log"
              aria-live="polite"
              aria-relevant="additions text"
              aria-label="Chat messages"
              className="flex-1 overflow-y-auto p-4 space-y-3"
              style={{ minHeight: 0 }}
            >
              {messages.map(msg => (
                <div key={msg.id} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div
                    className={`h-7 w-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs ${
                      msg.role === 'bot' ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-primary-foreground'
                    }`}
                    aria-hidden="true"
                  >
                    {msg.role === 'bot' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </div>
                  <div className={`max-w-[80%] ${msg.role === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                    <div className={`rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-tr-sm'
                        : 'bg-muted rounded-tl-sm'
                    }`}>
                      {msg.text}
                    </div>
                    {msg.relatedGuides && msg.relatedGuides.length > 0 && (
                      <div className="space-y-1 w-full">
                        <p className="text-xs text-muted-foreground px-1">Related guides:</p>
                        {msg.relatedGuides.map(g => (
                          <Link
                            key={g.slug}
                            to={`/guides/${g.slug}`}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 bg-background border border-border rounded-lg px-2.5 py-1.5 text-xs hover:border-secondary transition-colors group"
                            aria-label={`Read guide: ${g.title}`}
                          >
                            <span aria-hidden="true">{g.thumbnailEmoji}</span>
                            <span className="flex-1 font-medium">{g.title}</span>
                            <ChevronRight className="h-3 w-3 text-muted-foreground group-hover:text-secondary transition-colors" aria-hidden="true" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex gap-2" role="status" aria-label="TekBot is typing">
                  <div className="h-7 w-7 rounded-full bg-secondary text-secondary-foreground flex-shrink-0 flex items-center justify-center" aria-hidden="true">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-sm px-3 py-2" aria-hidden="true">
                    <span className="flex gap-1 items-center h-4">
                      {[0, 1, 2].map(i => (
                        <span
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </span>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick prompts (shown only if just welcome message) */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {QUICK_PROMPTS.map(p => (
                  <button
                    key={p}
                    onClick={() => sendMessage(p)}
                    className="text-sm bg-muted hover:bg-secondary hover:text-secondary-foreground border border-border rounded-full px-3 py-1.5 transition-colors"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-border bg-background/80 backdrop-blur-sm">
              <div className="flex gap-2">
                <label htmlFor="floatchat-input" className="sr-only">Type your message to TekBot</label>
                <input
                  id="floatchat-input"
                  ref={inputRef}
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(inputValue); } }}
                  placeholder="Type a question…"
                  className="flex-1 text-sm bg-muted border border-border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-secondary/50 placeholder:text-muted-foreground/60"
                />
                <Button
                  size="icon"
                  className="rounded-xl h-11 w-11 flex-shrink-0"
                  onClick={() => sendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
              <div className="flex items-center justify-between mt-2 px-0.5">
                <p className="text-[10px] text-muted-foreground">AI answers — may not always be perfect</p>
                <Link
                  to="/book"
                  onClick={() => setOpen(false)}
                  className="text-[10px] text-secondary font-medium hover:underline"
                >
                  Book a real technician →
                </Link>
              </div>
            </div>
          </div>
        )}
      </>

      {/* Bubble Toggle Button */}
      <button
        ref={toggleButtonRef}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={open ? 'Close TekBot chat' : 'Open TekBot chat'}
        className="fixed bottom-5 right-[72px] z-50 h-14 w-14 rounded-full shadow-xl flex items-center justify-center bg-secondary text-secondary-foreground hover:scale-110 transition-transform"
      >
        <>
          {open ? (
            <span key="x">
              <X className="h-6 w-6" aria-hidden="true" />
            </span>
          ) : (
            <span key="chat">
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </span>
          )}
        </>
        {unread > 0 && !open && (
          <span
            className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center"
            aria-label={`${unread} unread message${unread === 1 ? '' : 's'}`}
          >
            <span aria-hidden="true">{unread}</span>
          </span>
        )}
      </button>

      {/* Pulse ring to draw attention on first load */}
      {messages.length === 1 && !open && (
        <span className="fixed bottom-5 right-[72px] z-40 h-14 w-14 rounded-full bg-secondary/30 animate-ping pointer-events-none" aria-hidden="true" />
      )}
    </div>
  );
}
