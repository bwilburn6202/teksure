import { useState, useRef, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Bot, Send, User, RotateCcw, BookOpen, Lightbulb, ChevronRight } from 'lucide-react';
import { getResponse } from '@/lib/tekbrain';

type Level = 'beginner' | 'intermediate' | 'confident';
type Message = { role: 'ai' | 'user'; text: string; };

const levelConfig: Record<Level, { label: string; emoji: string; desc: string; systemHint: string }> = {
  beginner:     { label: 'Beginner',     emoji: '🌱', desc: 'New to tech — very simple language, no jargon', systemHint: 'The user is a complete beginner. Use extremely simple language, avoid all jargon, use analogies to everyday objects, and explain every term.' },
  intermediate: { label: 'Intermediate', emoji: '⭐', desc: 'Some experience — plain English with a bit more depth', systemHint: 'The user has some tech experience. Use plain English. You can use some common terms like "Wi-Fi" and "app" without explanation, but avoid deep technical language.' },
  confident:    { label: 'Confident',    emoji: '🚀', desc: 'Fairly comfortable — straightforward answers', systemHint: 'The user is fairly tech-confident. Give direct, efficient answers. Some technical language is fine.' },
};

const lessonTopics: { emoji: string; label: string; prompt: string }[] = [
  { emoji: '🔐', label: 'Passwords & Security', prompt: 'Teach me about keeping my accounts safe — passwords, two-factor authentication, and what to watch out for.' },
  { emoji: '📸', label: 'Photos & Memories', prompt: 'Help me understand how to organize my photos, back them up, and share them with family.' },
  { emoji: '📧', label: 'Email Basics', prompt: 'Walk me through how email works, how to spot a scam email, and how to keep my inbox organized.' },
  { emoji: '📶', label: 'Wi-Fi & Internet', prompt: 'Explain Wi-Fi to me — how to connect, what a strong signal looks like, and how to stay safe on public Wi-Fi.' },
  { emoji: '📱', label: 'Getting More from my Phone', prompt: 'What are some really useful things I might not know my phone can do? Keep it practical and simple.' },
  { emoji: '🛒', label: 'Online Shopping Safely', prompt: 'Teach me how to shop online safely — what to look for, how to pay securely, and how to spot fake websites.' },
];

export default function AiTutor() {
  const [level, setLevel] = useState<Level | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [lessonCount, setLessonCount] = useState(0);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  async function send(text?: string) {
    const q = text ?? input.trim();
    if (!q || !level) return;
    setInput('');
    const hint = levelConfig[level].systemHint;
    const userMsg: Message = { role: 'user', text: q };
    setMessages(m => [...m, userMsg]);
    setLoading(true);
    try {
      const contextual = `[Tutor context: ${hint}. Previous exchanges: ${lessonCount}. Be encouraging, patient, and thorough.]\n\n${q}`;
      const reply = await getResponse(contextual);
      setMessages(m => [...m, { role: 'ai', text: reply }]);
      setLessonCount(c => c + 1);
    } catch {
      setMessages(m => [...m, { role: 'ai', text: "Sorry, I'm having trouble connecting right now. Please try again in a moment." }]);
    } finally {
      setLoading(false);
    }
  }

  function startTopic(prompt: string) {
    if (!level) return;
    send(prompt);
  }

  if (!level) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 container max-w-2xl py-14 text-center">
          <div className="text-5xl mb-4">🎓</div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-primary">AI Personal Tech Tutor</h1>
          <p className="text-muted-foreground mb-10">Your patient, always-available tutor who adapts to your level. Ask anything — no question is too basic.</p>
          <h2 className="text-lg font-semibold mb-4">First, what's your experience level?</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {(Object.entries(levelConfig) as [Level, typeof levelConfig.beginner][]).map(([key, cfg]) => (
              <button key={key} onClick={() => setLevel(key)}
                className="rounded-2xl border border-border bg-card hover:border-primary/50 p-6 text-left transition-colors">
                <div className="text-3xl mb-2">{cfg.emoji}</div>
                <p className="font-bold text-base mb-1 text-primary">{cfg.label}</p>
                <p className="text-xs text-muted-foreground">{cfg.desc}</p>
              </button>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="AI Tutor — Learn Tech at Your Own Pace | TekSure"
        description="Learn technology at your own pace with a friendly AI tutor that adapts to your skill level. Ask anything and get clear, plain-English answers."
        path="/ai-tutor"
      />
      <Navbar />
      <main className="flex-1 container max-w-3xl py-8">
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold text-primary">AI Tech Tutor</h1>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">{levelConfig[level].emoji} {levelConfig[level].label}</Badge>
                {lessonCount > 0 && <span className="text-xs text-muted-foreground">{lessonCount} exchange{lessonCount !== 1 ? 's' : ''} today</span>}
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={() => { setLevel(null); setMessages([]); setLessonCount(0); }} className="gap-1.5 text-muted-foreground">
            <RotateCcw className="h-3.5 w-3.5" /> Change level
          </Button>
        </div>

        {/* Lesson starters */}
        {messages.length === 0 && (
          <div className="mb-6">
            <p className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2"><Lightbulb className="h-4 w-4" /> Pick a topic to start a lesson, or type your own question below</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {lessonTopics.map(t => (
                <button key={t.label} onClick={() => startTopic(t.prompt)}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/5 p-3 text-left transition-all group">
                  <span className="text-xl">{t.emoji}</span>
                  <span className="text-sm font-medium flex-1">{t.label}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat */}
        <div className="space-y-4 mb-4 min-h-[200px]">
          <>
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div className={`rounded-2xl px-4 py-3 max-w-[85%] text-sm leading-relaxed ${msg.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-sm' : 'bg-muted rounded-bl-sm'}`}>
                  {msg.text}
                </div>
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
          </>
          {loading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0"><Bot className="h-4 w-4 text-primary" /></div>
              <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3">
                <div className="flex gap-1">{[0,1,2].map(i => <div key={i} className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: `${i*0.15}s` }} />)}</div>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Input */}
        <Card className="sticky bottom-4 rounded-2xl border border-border bg-card">
          <CardContent className="p-3">
            <div className="flex gap-2">
              <Textarea
                placeholder="Type your question here — no question is too simple…"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
                rows={2}
                className="resize-none flex-1 border-0 focus-visible:ring-0 p-1 text-sm"
              />
              <Button onClick={() => send()} disabled={!input.trim() || loading} className="self-end rounded-xl" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <BookOpen className="h-3 w-3 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">Ask follow-up questions — your tutor remembers the conversation.</p>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
