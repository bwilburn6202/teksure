import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

const responses: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['wifi', 'wi-fi', 'internet', 'connected', 'no internet', 'network'],
    answer:
      "Here's how to fix most WiFi problems:\n\n1. Unplug your WiFi router from the wall.\n2. Wait 30 seconds.\n3. Plug it back in.\n4. Wait 2 minutes for the lights to come on.\n5. Try connecting again.\n\nIf it still doesn't work, move closer to the router and try again.",
  },
  {
    keywords: ['slow', 'computer slow', 'laptop slow', 'takes forever', 'freezing', 'frozen'],
    answer:
      "To speed up a slow computer:\n\n1. Close any programs you're not using — look at the bottom of the screen and right-click to close.\n2. Restart the computer (click Start → Power → Restart).\n3. Make sure you have at least 10% of storage free.\n4. Check for updates (Settings → Update & Security).\n\nA restart fixes most slowness!",
  },
  {
    keywords: ['password', 'forgot password', 'reset password', 'login', 'locked out', 'can\'t log in'],
    answer:
      'To reset a password:\n\n1. Go to the login page of the website or app.\n2. Click "Forgot Password" (usually below the password box).\n3. Enter your email address.\n4. Check your email for a reset link.\n5. Click the link and create a new password.\n\nTip: Write your new password down in a safe place!',
  },
  {
    keywords: ['email', 'gmail', 'outlook', 'send email', 'check email', 'inbox'],
    answer:
      "To check or send email:\n\n1. Open your web browser (Chrome, Edge, or Safari).\n2. Go to gmail.com or outlook.com.\n3. Sign in with your email and password.\n4. Your inbox will show your new messages.\n5. To send: click \"Compose\" or \"New\", type the person's email, your message, and click Send.\n\nTip: Look for the pencil or \"+\" icon to write a new email.",
  },
  {
    keywords: ['print', 'printer', 'printing', 'won\'t print', 'paper jam'],
    answer:
      "To fix printing problems:\n\n1. Make sure the printer is turned on (look for a light).\n2. Check that it has paper and the paper tray is pushed in.\n3. On your computer, go to Settings → Printers.\n4. Make sure your printer is set as the default.\n5. Try printing a test page.\n\nIf there's a paper jam, gently pull the stuck paper out and try again.",
  },
  {
    keywords: ['battery', 'phone battery', 'charging', 'dies fast', 'drain', 'charge'],
    answer:
      "To make your phone battery last longer:\n\n1. Turn down screen brightness — swipe down from the top and use the brightness slider.\n2. Turn off WiFi and Bluetooth when you're not using them.\n3. Close apps you're not using.\n4. Turn on Battery Saver mode (Settings → Battery).\n5. Avoid using your phone while it charges.\n\nTip: Don't let your battery go below 20% too often.",
  },
  {
    keywords: ['virus', 'scam', 'hacked', 'malware', 'popup', 'pop-up', 'warning', 'suspicious', 'phishing'],
    answer:
      "⚠️ Stay safe from scams:\n\n1. NEVER click pop-ups that say \"Your computer has a virus\" — those are fake!\n2. NEVER give your password to someone who calls you.\n3. Don't click links in emails from people you don't know.\n4. If something seems wrong, close the browser and restart your computer.\n5. Use Windows Defender (it's free and already on your PC).\n\nWhen in doubt, ask a trusted friend or family member first.",
  },
  {
    keywords: ['screenshot', 'screen shot', 'capture screen', 'print screen', 'snip'],
    answer:
      "To take a screenshot:\n\n📱 On a Phone:\n1. Press the Power button + Volume Down at the same time.\n2. The screenshot saves to your Photos.\n\n💻 On a Computer:\n1. Press the \"PrtSc\" or \"Print Screen\" key on your keyboard.\n2. Open Paint or Word and press Ctrl+V to paste.\n3. Save the file.\n\nOn Mac: Press Command + Shift + 3.",
  },
  {
    keywords: ['copy', 'paste', 'copy paste', 'cut', 'clipboard', 'select all'],
    answer:
      "How to Copy and Paste:\n\n1. Select the text: Click and drag your mouse over the words.\n2. Copy: Press Ctrl+C (or Command+C on Mac).\n3. Click where you want to put the text.\n4. Paste: Press Ctrl+V (or Command+V on Mac).\n\nTip: To select ALL text, press Ctrl+A first, then copy.",
  },
];

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const entry of responses) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.answer;
    }
  }
  return "I'm not sure about that one, but I bet our guides can help!\n\nCheck out our step-by-step guides at the Guides page for lots of helpful articles. You can also book a real technician through our pricing page if you'd like hands-on help.";
}

export function TekBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content:
        "Hi! I'm TekBot, your friendly tech helper. 🤖\n\nAsk me anything about your computer, phone, WiFi, or any tech question!",
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

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
      setMessages((prev) => [...prev, { role: 'bot', content: getResponse(text) }]);
    }, 1000 + Math.random() * 800);
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
            style={{ width: 380, height: 500, maxWidth: 'calc(100vw - 2rem)', maxHeight: 'calc(100vh - 2rem)' }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ backgroundColor: 'hsl(220 70% 20%)' }}
            >
              <div className="flex items-center gap-2 text-white">
                <Bot className="h-5 w-5" />
                <span className="font-bold" style={{ fontSize: 16 }}>
                  TekBot — Your Tech Helper
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                className="text-white hover:bg-white/10 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ backgroundColor: 'hsl(210 25% 97%)' }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className="rounded-2xl px-4 py-3 max-w-[85%] whitespace-pre-line leading-relaxed"
                    style={{
                      fontSize: 16,
                      backgroundColor:
                        msg.role === 'user' ? 'hsl(172 50% 40%)' : 'hsl(0 0% 100%)',
                      color: msg.role === 'user' ? 'white' : 'hsl(220 50% 10%)',
                      borderBottomRightRadius: msg.role === 'user' ? 4 : undefined,
                      borderBottomLeftRadius: msg.role === 'bot' ? 4 : undefined,
                      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div
                    className="flex gap-1.5 items-center rounded-2xl px-4 py-3"
                    style={{ backgroundColor: 'hsl(0 0% 100%)', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
                  >
                    <span className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-border bg-white px-3 py-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Type your question..."
                className="flex-1 rounded-lg border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-secondary"
                style={{ fontSize: 16, minHeight: 44 }}
              />
              <Button
                onClick={send}
                disabled={!input.trim()}
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
