/**
 * TekBot — AI-Powered Tech Support Assistant
 *
 * Upgraded version (Session 6 — March 25, 2026):
 * - Sends messages to the tekbot-ai Supabase Edge Function (Claude AI)
 * - Falls back gracefully to local keyword matching if AI is unavailable
 * - **Research Mode (NEW):** Detects "what are people saying about X?" queries
 *   and pulls live community data from Reddit + HN via fetch-tech-trends Edge Function
 * - Suggests related guides from the TekSure guide library
 * - Remembers conversation context within a session
 * - Links directly to relevant guide pages
 *
 * Usage: Drop <TekBot /> anywhere in the app (renders as fixed chat bubble).
 *
 * ⚠️  To enable AI responses, deploy the tekbot-ai Edge Function and add:
 *     ANTHROPIC_API_KEY secret in Supabase Dashboard → Edge Functions → Secrets
 */

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  ChevronRight,
  RefreshCw,
  Sparkles,
  ExternalLink,
  TrendingUp,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

// ── Guide index for keyword matching ─────────────────────────────────────────
// Keep this in sync with src/data/guides.ts
const GUIDE_INDEX = [
  // ── Connectivity ──────────────────────────────────────────────────────────
  { id: "how-to-connect-to-wifi", title: "How to Connect to WiFi", keywords: ["wifi", "wi-fi", "internet", "connect", "network", "wireless", "router", "no internet", "not connecting"] },
  { id: "troubleshoot-slow-internet", title: "Fix Slow Internet at Home", keywords: ["slow internet", "buffering", "lag", "speed", "broadband", "router reset", "modem"] },
  { id: "change-wifi-password", title: "How to Change Your WiFi Password", keywords: ["change wifi", "router password", "wifi password", "network password", "router settings"] },
  { id: "public-wifi-safety", title: "Staying Safe on Public WiFi", keywords: ["public wifi", "coffee shop", "hotel wifi", "airport wifi", "vpn", "unsafe wifi"] },
  // ── Photos & Files ────────────────────────────────────────────────────────
  { id: "backup-your-photos", title: "How to Back Up Your Photos", keywords: ["backup", "photos", "pictures", "icloud", "google photos", "cloud", "photo storage", "lose photos"] },
  { id: "share-photos-family", title: "How to Share Photos with Family", keywords: ["share photos", "send pictures", "photo album", "family sharing", "airdrop", "send photos"] },
  { id: "take-a-screenshot", title: "How to Take a Screenshot", keywords: ["screenshot", "screen capture", "capture screen", "print screen", "snip"] },
  { id: "free-up-storage", title: "How to Free Up Storage Space", keywords: ["storage", "space", "full", "memory", "delete", "files", "no space left", "low storage"] },
  // ── Security ──────────────────────────────────────────────────────────────
  { id: "avoid-scams-online", title: "How to Spot and Avoid Scams", keywords: ["scam", "phishing", "fraud", "suspicious", "spam", "fake email", "text scam", "robocall"] },
  { id: "strong-passwords", title: "Creating Strong Passwords", keywords: ["password", "secure", "account", "login", "sign in", "hack", "hacked", "password manager"] },
  { id: "two-factor-authentication", title: "Setting Up Two-Factor Authentication", keywords: ["two factor", "2fa", "two-step", "verification code", "authenticator", "secure account", "extra security"] },
  { id: "block-spam-calls", title: "How to Block Spam & Robocalls", keywords: ["spam calls", "robocall", "block calls", "unwanted calls", "nuisance calls", "silent calls"] },
  { id: "antivirus-basics", title: "Protecting Your Device from Viruses", keywords: ["virus", "malware", "antivirus", "ransomware", "infected", "hacked device", "security software"] },
  // ── Device Basics ─────────────────────────────────────────────────────────
  { id: "restart-your-device", title: "How to Restart Your Device", keywords: ["restart", "reboot", "frozen", "slow", "unresponsive", "crash", "stuck", "force restart", "turn off"] },
  { id: "update-your-software", title: "How to Update Your Software", keywords: ["update", "software", "ios", "android", "windows", "mac", "upgrade", "new version"] },
  { id: "install-apps", title: "How to Install Apps Safely", keywords: ["app", "install", "download", "play store", "app store", "application"] },
  { id: "set-up-new-phone", title: "Setting Up a New Phone", keywords: ["new phone", "set up", "transfer data", "switch phone", "new device", "first time", "factory new"] },
  { id: "bluetooth-setup", title: "Setting Up Bluetooth", keywords: ["bluetooth", "headphones", "speaker", "pair", "wireless", "earbuds", "airpods"] },
  { id: "video-calling", title: "How to Make a Video Call", keywords: ["video call", "facetime", "zoom", "skype", "meet", "call", "video chat"] },
  { id: "use-voice-assistant", title: "Using Voice Assistants (Siri & Google)", keywords: ["siri", "google assistant", "hey google", "voice assistant", "hands free", "voice command", "alexa"] },
  // ── Email & Accounts ──────────────────────────────────────────────────────
  { id: "set-up-email", title: "Setting Up Email on Your Phone", keywords: ["email", "gmail", "outlook", "yahoo mail", "set up email", "add email account", "email not working"] },
  { id: "reset-forgotten-password", title: "How to Reset a Forgotten Password", keywords: ["forgot password", "reset password", "can't log in", "locked out", "account recovery", "password reset"] },
  // ── Practical Tasks ───────────────────────────────────────────────────────
  { id: "how-to-print", title: "How to Print from Your Phone or Computer", keywords: ["print", "printer", "wireless print", "airprint", "print document", "pdf print"] },
  { id: "contactless-payments", title: "Using Contactless & Mobile Payments", keywords: ["contactless", "apple pay", "google pay", "tap to pay", "mobile payment", "nfc payment", "pay with phone"] },
  { id: "clear-browser-history", title: "How to Clear Browser History & Cache", keywords: ["clear history", "cache", "cookies", "browser history", "delete history", "chrome", "safari", "firefox"] },
];

// ── Local fallback quick-answers ──────────────────────────────────────────────
const QUICK_ANSWERS: Record<string, string> = {
  wifi: "To connect to WiFi: Go to your Settings app → tap Wi-Fi → choose your network → enter your password. Make sure you're close to your router!",
  password: "A strong password uses at least 12 characters with a mix of letters, numbers, and symbols. Avoid using names or birthdays. A password manager can help you keep track!",
  update: "To update your device: on iPhone go to Settings → General → Software Update. On Android go to Settings → System → System Update. On Windows, go to Settings → Windows Update.",
  slow: "If your device is running slowly, try restarting it first — this fixes many issues. Also check for updates, close apps you're not using, and make sure you have storage space available.",
  scam: "If you get an unexpected call, email, or text asking for personal info or payment — it's likely a scam. Real companies won't ask for passwords or gift cards. When in doubt, hang up and call the company directly.",
  backup: "To back up your photos: on iPhone enable iCloud Photos (Settings → your name → iCloud → Photos). On Android, turn on Google Photos backup. This keeps your memories safe even if your phone breaks.",
  storage: "To free up space: delete apps you don't use, clear your browsing history, back up and delete old photos, and restart your device. Check Settings → Storage to see what's taking the most space.",
  bluetooth: "To connect Bluetooth: put your device (headphones, speaker) in pairing mode, then go to Settings → Bluetooth on your phone or tablet → tap the device name to connect.",
  email: "For email help: make sure you have the right email address and password. Check your spam folder if you're not receiving emails. Gmail, Yahoo, and Outlook are the most common email services.",
  virus: "To protect against viruses: keep your software updated, don't click on suspicious links, only download apps from official stores, and don't open email attachments from unknown senders.",
  screenshot: "On iPhone (Face ID): press the side button + volume up together. On older iPhones: press Home + Power. On Android: hold volume down + power. On Windows: press Windows + PrtScr (saved to Pictures folder).",
  print: "To print wirelessly: make sure your printer is on the same WiFi. On iPhone, tap Share → Print. On Android, tap the three dots → Print. On a computer press Ctrl+P (Windows) or Cmd+P (Mac).",
  "two factor": "Two-factor authentication adds extra security. After your password, you'll get a code by text or app to confirm it's you. Turn it on in each app's Security or Privacy settings.",
  "2fa": "Two-factor authentication (2FA) means you need both your password AND a code sent to your phone. It's one of the best ways to keep accounts safe. Turn it on in your account's Security settings.",
  "spam calls": "To block spam calls: on iPhone go to Settings → Phone → Silence Unknown Callers. On Android go to Phone app → three dots → Settings → Blocked Numbers. You can also block individual numbers from your recent calls.",
  siri: "To use Siri, say 'Hey Siri' or press and hold the side button on iPhone. You can ask Siri to make calls, send messages, set reminders, or answer questions. Enable it in Settings → Siri & Search.",
  "forgot password": "To reset a forgotten password: go to the login screen and tap 'Forgot Password'. Enter your email address and check your inbox for a reset link. If you're completely locked out, book a session with a TekSure technician!",
  contactless: "To pay with your phone: on iPhone double-click the side button for Apple Pay. On Android open Google Pay. Hold your phone near the payment terminal — it's actually safer than using a physical card!",
  cache: "To clear your browser cache: in Safari go to Settings → Safari → Clear History. In Chrome tap the three dots → History → Clear Browsing Data. This fixes many website loading problems.",
  "apple pay": "To set up Apple Pay: go to Settings → Wallet & Apple Pay → Add Card. Scan your card. Then double-press the side button to pay at shops — no need to take your card out!",
  "google pay": "To set up Google Pay on Android: open the Google Wallet app (or download it from the Play Store) and add your debit or credit card. Then hold your phone near any contactless payment terminal to pay.",
};

// ── Research mode — intent detection ─────────────────────────────────────────
//
// These patterns catch natural-language questions like:
//   "what are people saying about iPhone battery?"
//   "what's trending with Windows 11?"
//   "is anyone else having issues with Gmail?"
//   "what do people think about AI assistants?"
//   "are there problems with the new iOS update?"

const RESEARCH_PATTERNS: RegExp[] = [
  /what (?:are|is) (?:people|everyone|others|users|folks) (?:saying|talking|discussing|asking) (?:about|regarding) (.+)/i,
  /what(?:'s| is) (?:trending|popular|happening|going on) (?:with|about|around) (.+)/i,
  /(?:are|is) (?:anyone|people|others|users) (?:having|experiencing|seeing|getting) (?:issues?|problems?|trouble) (?:with|on|using) (.+)/i,
  /what do (?:people|others|users|folks) (?:think|say) (?:about|of) (.+)/i,
  /(?:any|are there) (?:common |current )?(?:issues?|problems?|complaints?|discussions?) (?:with|about|around|on) (.+)/i,
  /(?:what's|what is) (?:the )?community (?:saying|talking about|discussing) (?:about |on )?(.+)/i,
  /research (?:the topic of |what people say about |community discussion on )?(.+)/i,
  /(?:what are|are there) (?:discussions?|threads?|posts?) (?:about|on) (.+)/i,
  /(?:tell me|show me) what(?:'s| is) happening with (.+)/i,
];

/**
 * Checks if a message is a research-intent query.
 * Returns the extracted topic string, or null if it's not a research query.
 */
function detectResearchQuery(text: string): string | null {
  for (const pattern of RESEARCH_PATTERNS) {
    const match = text.match(pattern);
    if (match && match[1]) {
      // Clean up the extracted topic
      const topic = match[1]
        .replace(/[?.!,]+$/, "")   // strip trailing punctuation
        .replace(/\b(the|a|an|my|your|our|this|that)\b/gi, "")
        .replace(/\s+/g, " ")
        .trim();
      if (topic.length >= 2 && topic.length <= 80) return topic;
    }
  }
  return null;
}

// ── Types ─────────────────────────────────────────────────────────────────────

interface ResearchResult {
  title: string;
  source: string;
  url: string;
  score: number;
}

interface Message {
  role: "user" | "bot";
  content: string;
  relatedGuides?: { id: string; title: string }[];
  aiPowered?: boolean;
  researchResults?: ResearchResult[];
  researchTopic?: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function findRelatedGuides(text: string): { id: string; title: string }[] {
  const lower = text.toLowerCase();
  const matches: { id: string; title: string; score: number }[] = [];
  for (const guide of GUIDE_INDEX) {
    const score = guide.keywords.filter((kw) => lower.includes(kw)).length;
    if (score > 0) matches.push({ id: guide.id, title: guide.title, score });
  }
  return matches
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ id, title }) => ({ id, title }));
}

function localFallbackResponse(text: string): string {
  const lower = text.toLowerCase();
  if (/^(hi|hello|hey|good morning|good afternoon|good evening)/.test(lower)) {
    return "Hello! I'm TekBot, your friendly tech helper. What can I help you with today? You can ask me about your phone, computer, internet, passwords — anything tech related!";
  }
  if (/thank/.test(lower)) {
    return "You're very welcome! Don't hesitate to ask if you need anything else. Happy to help!";
  }
  for (const [keyword, answer] of Object.entries(QUICK_ANSWERS)) {
    if (lower.includes(keyword)) return answer;
  }
  if (/book|appointment|technician|visit|schedule/.test(lower)) {
    return "I can help you schedule a technician appointment! Visit our booking page and choose a service that fits your needs — we have remote, phone, in-home, and drop-off options available.";
  }
  return "That's a great question! I'd suggest checking our Guides section — we have step-by-step instructions for many common tech tasks. If you need more help, you can also book a session with one of our friendly technicians.";
}

// ── Supabase Edge Function URL helpers ────────────────────────────────────────

function getEdgeFunctionUrl(): string {
  const supabaseUrl = (supabase as any).supabaseUrl as string;
  return `${supabaseUrl}/functions/v1/tekbot-ai`;
}

function getTrendsUrl(topic: string): string {
  const supabaseUrl = (supabase as any).supabaseUrl as string;
  return `${supabaseUrl}/functions/v1/fetch-tech-trends?topic=${encodeURIComponent(topic)}`;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function TekBot() {
  const [open, setOpen] = useState(false);
  const [aiEnabled, setAiEnabled] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Hi there! I'm TekBot 👋 I'm here to help with any tech questions. You can also ask me things like \"what are people saying about iPhone battery life?\" and I'll check the community for you!",
      relatedGuides: [],
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Build history for the AI (last 10 exchanges)
  const buildHistory = () =>
    messages
      .filter((m) => m.role !== "bot" || messages.indexOf(m) > 0)
      .map((m) => ({
        role: m.role === "bot" ? ("assistant" as const) : ("user" as const),
        content: m.content,
      }))
      .slice(-10);

  // ── Research mode: fetch live community data for a topic ─────────────────
  const fetchResearchResults = async (topic: string): Promise<ResearchResult[]> => {
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const token = sessionData.session?.access_token;
      const res = await fetch(getTrendsUrl(topic), {
        headers: token
          ? { Authorization: `Bearer ${token}` }
          : { apikey: (supabase as any).supabaseKey as string },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      return (json.results ?? []).slice(0, 5) as ResearchResult[];
    } catch {
      return [];
    }
  };

  // ── Main send handler ─────────────────────────────────────────────────────
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setTyping(true);

    // ── Check for research intent first ─────────────────────────────────────
    const researchTopic = detectResearchQuery(userMessage);

    if (researchTopic) {
      const results = await fetchResearchResults(researchTopic);
      if (results.length > 0) {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            content: `Here's what the community is currently saying about "${researchTopic}":`,
            researchResults: results,
            researchTopic,
            aiPowered: false,
          },
        ]);
        setTyping(false);
        return;
      }
      // If the fetch returned nothing, fall through to the normal AI path
    }

    // ── Normal AI or fallback path ───────────────────────────────────────────
    const guides = findRelatedGuides(userMessage);

    if (aiEnabled) {
      try {
        const { data: sessionData } = await supabase.auth.getSession();
        const authHeader = sessionData.session
          ? { Authorization: `Bearer ${sessionData.session.access_token}` }
          : {};

        const response = await fetch(getEdgeFunctionUrl(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: (supabase as any).supabaseKey as string,
            ...authHeader,
          },
          body: JSON.stringify({
            message: userMessage,
            history: buildHistory(),
          }),
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        const reply = data.reply || localFallbackResponse(userMessage);

        setMessages((prev) => [
          ...prev,
          { role: "bot", content: reply, relatedGuides: guides, aiPowered: true },
        ]);
      } catch (err) {
        console.warn("TekBot AI unavailable, using local fallback:", err);
        setAiEnabled(false);
        const fallback = localFallbackResponse(userMessage);
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: fallback, relatedGuides: guides, aiPowered: false },
        ]);
      }
    } else {
      await new Promise((r) => setTimeout(r, 600));
      const fallback = localFallbackResponse(userMessage);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: fallback, relatedGuides: guides, aiPowered: false },
      ]);
    }

    setTyping(false);
  };

  const handleReset = () => {
    setMessages([
      {
        role: "bot",
        content: "Hi there! I'm TekBot 👋 I'm here to help with any tech questions. You can also ask me things like \"what are people saying about iPhone battery life?\" and I'll check the community for you!",
        relatedGuides: [],
      },
    ]);
    setAiEnabled(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Chat Bubble Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
        aria-label="Open TekBot"
      >
        {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden max-h-[580px]">
          {/* Header */}
          <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-sm flex items-center gap-1.5">
                  TekBot
                  {aiEnabled && (
                    <span className="text-xs bg-white/20 rounded-full px-2 py-0.5 flex items-center gap-0.5">
                      <Sparkles className="h-2.5 w-2.5" />
                      AI
                    </span>
                  )}
                </p>
                <p className="text-xs text-blue-100">Your friendly tech helper</p>
              </div>
            </div>
            <button
              onClick={handleReset}
              title="Start over"
              className="text-blue-200 hover:text-white p-1"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-sm"
                      : "bg-white text-gray-700 border border-gray-200 rounded-bl-sm shadow-sm"
                  }`}
                >
                  {/* Message text */}
                  {msg.content.split("\n").map((line, li) => (
                    <span key={li}>
                      {line}
                      {li < msg.content.split("\n").length - 1 && <br />}
                    </span>
                  ))}

                  {/* ── Research Results (community data) ─────────────────── */}
                  {msg.researchResults && msg.researchResults.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {msg.researchResults.map((result, ri) => (
                        <a
                          key={ri}
                          href={result.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-2 p-2 rounded-lg bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors group"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-gray-700 leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors">
                              {result.title}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">{result.source}</p>
                          </div>
                          <ExternalLink className="h-3 w-3 text-gray-300 group-hover:text-blue-500 shrink-0 mt-0.5 transition-colors" />
                        </a>
                      ))}
                      <div className="flex items-center gap-1 pt-1">
                        <TrendingUp className="h-3 w-3 text-gray-300" />
                        <p className="text-xs text-gray-300">
                          Live from Reddit & Hacker News
                        </p>
                      </div>
                    </div>
                  )}

                  {/* AI badge */}
                  {msg.role === "bot" && msg.aiPowered && !msg.researchResults && (
                    <p className="text-xs text-gray-300 mt-2 flex items-center gap-1">
                      <Sparkles className="h-2.5 w-2.5" /> AI-powered
                    </p>
                  )}

                  {/* Related Guides */}
                  {msg.relatedGuides && msg.relatedGuides.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-400 font-medium mb-2">📖 Related Guides:</p>
                      <div className="space-y-1">
                        {msg.relatedGuides.map((guide) => (
                          <Link
                            key={guide.id}
                            to={`/guides/${guide.id}`}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 hover:underline"
                          >
                            <ChevronRight className="h-3 w-3 flex-shrink-0" />
                            {guide.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions (first message only) */}
          {messages.length === 1 && (
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-400 mb-2">Common questions:</p>
              <div className="flex flex-wrap gap-1">
                {[
                  "How do I connect to WiFi?",
                  "How do I update my phone?",
                  "What are people saying about phone scams?",
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => setInput(q)}
                    className="text-xs bg-blue-50 text-blue-600 border border-blue-100 rounded-full px-3 py-1 hover:bg-blue-100 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              disabled={typing}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || typing}
              className="w-9 h-9 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 text-white rounded-full flex items-center justify-center transition-colors flex-shrink-0"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
