import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Bot, X, Send, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { guides, type Guide } from '@/data/guides';

interface Message {
  role: 'user' | 'bot';
  content: string;
  relatedGuides?: Guide[];
}

// ── Knowledge base ─────────────────────────────────────────────────
const responses: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['wifi', 'wi-fi', 'internet', 'connected', 'no internet', 'network', 'router', 'broadband'],
    answer:
      "Here's how to fix most WiFi problems:\n\n1. Unplug your WiFi router from the wall.\n2. Wait 30 seconds.\n3. Plug it back in and wait 2 minutes.\n4. Try connecting again.\n\nIf it still doesn't work, move closer to the router and check that the WiFi name and password are correct.",
  },
  {
    keywords: ['slow', 'computer slow', 'laptop slow', 'takes forever', 'freezing', 'frozen', 'sluggish'],
    answer:
      "To speed up a slow computer:\n\n1. Close any programs you're not using.\n2. Restart the computer (Start → Power → Restart).\n3. Make sure you have at least 10% storage free.\n4. Check for updates (Settings → Windows Update).\n\nA restart fixes most slowness!",
  },
  {
    keywords: ['password', 'forgot password', 'reset password', 'login', 'locked out', "can't log in", 'sign in'],
    answer:
      'To reset a forgotten password:\n\n1. Go to the login page.\n2. Click "Forgot Password" (usually below the password box).\n3. Enter your email address.\n4. Check your email for a reset link.\n5. Click the link and create a new password.\n\nTip: Write your new password down somewhere safe!',
  },
  {
    keywords: ['email', 'gmail', 'outlook', 'send email', 'check email', 'inbox', 'mail'],
    answer:
      "To check or send email:\n\n1. Open your browser and go to gmail.com or outlook.com.\n2. Sign in with your email and password.\n3. Your inbox shows your new messages.\n4. To send: click \"Compose\" or \"New\", type the person's email, write your message, and click Send.",
  },
  {
    keywords: ['print', 'printer', 'printing', "won't print", 'paper jam', 'not printing'],
    answer:
      "To fix printing problems:\n\n1. Make sure the printer is turned on.\n2. Check it has paper and the tray is pushed in.\n3. On Windows: Settings → Bluetooth & devices → Printers.\n4. Make sure your printer is set as default.\n5. Try printing a test page.\n\nFor paper jams, gently pull the stuck paper straight out.",
  },
  {
    keywords: ['battery', 'phone battery', 'charging', 'dies fast', 'drain', 'charge', 'power'],
    answer:
      "To make your battery last longer:\n\n1. Turn down screen brightness.\n2. Turn off WiFi and Bluetooth when not in use.\n3. Close apps running in the background.\n4. Turn on Battery Saver mode (Settings → Battery).\n5. Avoid letting it drop below 20% regularly.",
  },
  {
    keywords: ['virus', 'scam', 'hacked', 'malware', 'popup', 'pop-up', 'warning', 'suspicious', 'phishing'],
    answer:
      "⚠️ Stay safe:\n\n1. NEVER click pop-ups saying \"Your computer has a virus\" — those are scams!\n2. NEVER give your password to anyone who calls you.\n3. Don't click links in unexpected emails.\n4. If worried, close your browser and restart the computer.\n5. Windows Defender (free, built-in) handles most threats automatically.",
  },
  {
    keywords: ['screenshot', 'screen shot', 'capture screen', 'print screen', 'snip', 'snipping'],
    answer:
      "To take a screenshot:\n\n📱 Phone: Press Power + Volume Down at the same time.\n\n💻 Windows: Press Windows + Shift + S for a cropped screenshot, or PrtSc for the full screen.\n\n🍎 Mac: Press Command + Shift + 3 (whole screen) or Command + Shift + 4 (select area).",
  },
  {
    keywords: ['copy', 'paste', 'copy paste', 'cut', 'clipboard', 'select all'],
    answer:
      "How to Copy and Paste:\n\n1. Select the text by clicking and dragging over it.\n2. Copy: press Ctrl+C (Windows) or Command+C (Mac).\n3. Click where you want to paste.\n4. Paste: press Ctrl+V (Windows) or Command+V (Mac).\n\nTip: Press Ctrl+A to select everything first.",
  },
  {
    keywords: ['update', 'updates', 'windows update', 'software update', 'upgrade', 'outdated'],
    answer:
      "To check for updates:\n\n💻 Windows: Start → Settings → Windows Update → Check for updates.\n\n🍎 Mac: Apple menu → System Settings → General → Software Update.\n\n📱 iPhone: Settings → General → Software Update.\n\nUpdates are important — they fix security holes and bugs!",
  },
  {
    keywords: ['backup', 'back up', 'save files', 'lose data', 'lost files', 'recovery'],
    answer:
      "To back up your important files:\n\n1. Windows: use File History (Settings → System → Storage → Advanced storage settings → Backup options) or plug in an external hard drive.\n2. Mac: use Time Machine with an external drive.\n3. Cloud backup: turn on OneDrive (Windows) or iCloud (Mac/iPhone) to automatically save your files online.\n\nAim for at least one backup — ideally two!",
  },
  {
    keywords: ['bluetooth', 'pair', 'headphones', 'speaker', 'connect device', 'airpods'],
    answer:
      "To connect a Bluetooth device:\n\n1. Make sure the device (headphones, speaker, etc.) is in pairing mode — usually hold the power button for a few seconds until you see a flashing light.\n2. On your phone/computer, go to Settings → Bluetooth → turn it ON.\n3. Your device should appear in the list — tap it to connect.\n\nIf it doesn't appear, try turning Bluetooth off and back on.",
  },
  {
    keywords: ['storage', 'disk full', 'no space', 'running out of space', 'delete files', 'free up'],
    answer:
      "To free up storage space:\n\n1. Empty the Recycle Bin (right-click it on your desktop → Empty).\n2. Delete programmes you don't use (Settings → Apps).\n3. Move photos to an external drive or cloud storage.\n4. On Windows, run Storage Sense (Settings → System → Storage → Storage Sense).\n\nTip: Photos and videos take up the most space — consider Google Photos (free 15GB).",
  },
  {
    keywords: ['zoom', 'video call', 'facetime', 'teams', 'video chat', 'camera', 'microphone'],
    answer:
      "For video calls:\n\n1. Make sure your camera and microphone are plugged in (or enabled on a laptop).\n2. Check the app has permission to use them: Settings → Privacy → Camera/Microphone.\n3. Test your audio/video inside the app before the call (most have a Test button).\n4. Good lighting matters — face a window if possible.\n5. If your sound is muted, look for a microphone icon in the call and click it.",
  },
];

// ── Context hints by page route ─────────────────────────────────────
const PAGE_CONTEXT: Record<string, string> = {
  '/guides': 'guides',
  '/tools': 'tools',
  '/safety/scam-alerts': 'scams and security',
  '/quick-fixes': 'quick fixes',
  '/get-help': 'getting tech help',
  '/book': 'booking a technician',
  '/glossary': 'tech terms',
  '/tips': 'tech tips',
  '/forum': 'the community forum',
};

function getPageContext(pathname: string): string | null {
  // exact match
  if (PAGE_CONTEXT[pathname]) return PAGE_CONTEXT[pathname];
  // guide detail
  if (pathname.startsWith('/guides/')) return 'this guide';
  // tools
  if (pathname.startsWith('/tools/')) return 'this tool';
  return null;
}

// ── Find related guides by keyword match ───────────────────────────
function findRelatedGuides(query: string, limit = 3): Guide[] {
  const words = query.toLowerCase().split(/\W+/).filter(w => w.length > 2);
  const scored = guides.map(g => {
    const haystack = `${g.title} ${g.excerpt} ${g.tags.join(' ')}`.toLowerCase();
    const score = words.reduce((acc, w) => acc + (haystack.includes(w) ? 1 : 0), 0);
    return { guide: g, score };
  });
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(s => s.guide);
}

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const entry of responses) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.answer;
    }
  }
  return "I'm not sure about that one, but I'm always learning! 🤔\n\nYou might find the answer in our step-by-step guides, or you can book a real technician for hands-on help.";
}

// ── Component ──────────────────────────────────────────────────────
export function TekBot() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Build context-aware welcome message
  useEffect(() => {
    const ctx = getPageContext(location.pathname);
    const welcome = ctx
      ? `Hi! I'm TekBot 🤖\n\nI can see you're on ${ctx}. Ask me anything about it, or any other tech question!`
      : "Hi! I'm TekBot, your friendly tech helper 🤖\n\nAsk me anything about your computer, phone, WiFi, or any tech question!";
    setMessages([{ role: 'bot', content: welcome }]);
  }, [location.pathname]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      const answer = getResponse(text);
      const related = findRelatedGuides(text);
      setMessages((prev) => [
        ...prev,
        { role: 'bot', content: answer, relatedGuides: related.length ? related : undefined },
      ]);
    }, 900 + Math.random() * 700);
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105"
            style={{ backgroundColor: 'hsl(172 50% 40%)', minHeight: 48, fontSize: 16 }}
          >
            <Bot className="h-5 w-5" />
            <span>TekBot</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col overflow-hidden rounded-2xl shadow-2xl border border-border"
            style={{ width: 390, height: 540, maxWidth: 'calc(100vw - 2rem)', maxHeight: 'calc(100vh - 2rem)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: 'hsl(220 70% 20%)' }}>
              <div className="flex items-center gap-2 text-white">
                <Bot className="h-5 w-5" />
                <div>
                  <span className="font-bold block" style={{ fontSize: 15 }}>TekBot</span>
                  <span className="text-white/60" style={{ fontSize: 11 }}>Your friendly tech helper</span>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="text-white hover:bg-white/10 h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ backgroundColor: 'hsl(210 25% 97%)' }}>
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

                  {/* Related guides panel */}
                  {msg.role === 'bot' && msg.relatedGuides && msg.relatedGuides.length > 0 && (
                    <div className="mt-2 max-w-[88%] w-full">
                      <p className="text-xs text-muted-foreground font-medium mb-1.5 flex items-center gap-1">
                        <BookOpen className="h-3 w-3" /> Related guides
                      </p>
                      <div className="space-y-1">
                        {msg.relatedGuides.map((g) => (
                          <a
                            key={g.slug}
                            href={`/guides/${g.slug}`}
                            className="flex items-center gap-2 rounded-lg px-3 py-2 bg-white border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-sm group"
                          >
                            <span>{g.thumbnailEmoji}</span>
                            <span className="flex-1 font-medium leading-tight group-hover:text-primary transition-colors line-clamp-1">
                              {g.title}
                            </span>
                            <ExternalLink className="h-3 w-3 text-muted-foreground shrink-0" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1.5 items-center rounded-2xl px-4 py-3" style={{ backgroundColor: 'hsl(0 0% 100%)', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
                    <span className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick prompts (only shown when only welcome message) */}
            {messages.length === 1 && (
              <div className="px-3 pb-2 flex flex-wrap gap-1.5" style={{ backgroundColor: 'hsl(210 25% 97%)' }}>
                {['My WiFi is slow', 'Reset a password', 'Computer is frozen', 'Got a scam pop-up'].map((p) => (
                  <button
                    key={p}
                    onClick={() => { setInput(p); }}
                    className="text-xs px-2.5 py-1 rounded-full bg-white border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-border bg-white px-3 py-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Type your question..."
                className="flex-1 rounded-lg border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-secondary"
                style={{ fontSize: 15, minHeight: 44 }}
              />
              <Button
                onClick={send}
                disabled={!input.trim() || typing}
                size="icon"
                className="h-11 w-11 rounded-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
