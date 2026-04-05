import { useState, useRef, useEffect, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Bot, Send, User, RotateCcw, BookOpen, Lightbulb, ChevronRight, Sparkles } from 'lucide-react';
import { getResponse } from '@/lib/tekbot';

type Level = 'beginner' | 'intermediate' | 'confident';
type Message = { role: 'ai' | 'user'; text: string };

type TopicCategory = 'Getting Started' | 'Staying Safe' | 'Communication' | 'Everyday Tasks';

interface LessonTopic {
  emoji: string;
  label: string;
  description: string;
  category: TopicCategory;
  prompt: string;
  introMessage: string;
  suggestedFor: Level[];
}

const levelConfig: Record<Level, { label: string; emoji: string; desc: string; systemHint: string }> = {
  beginner: {
    label: 'Beginner',
    emoji: '🌱',
    desc: 'New to tech — very gentle language, no jargon',
    systemHint: 'The user is a complete beginner. Use extremely simple language, avoid all jargon, use analogies to everyday objects, and explain every term.',
  },
  intermediate: {
    label: 'Intermediate',
    emoji: '⭐',
    desc: 'Some experience — plain English with a bit more depth',
    systemHint: 'The user has some tech experience. Use plain English. You can use some common terms like "Wi-Fi" and "app" without explanation, but avoid deep technical language.',
  },
  confident: {
    label: 'Confident',
    emoji: '🚀',
    desc: 'Fairly comfortable — straightforward answers',
    systemHint: 'The user is fairly tech-confident. Give direct, efficient answers. Some technical language is fine.',
  },
};

const categoryEmojis: Record<TopicCategory, string> = {
  'Getting Started': '🟢',
  'Staying Safe': '🛡️',
  'Communication': '💬',
  'Everyday Tasks': '📋',
};

const allCategories: TopicCategory[] = ['Getting Started', 'Staying Safe', 'Communication', 'Everyday Tasks'];

const lessonTopics: LessonTopic[] = [
  // Getting Started
  {
    emoji: '📱',
    label: 'Using Your Device',
    description: 'Learn the basics of phones, tablets, and computers — from turning them on to finding your way around.',
    category: 'Getting Started',
    prompt: 'Teach me the basics of using my device — phone, tablet, or computer. Cover things like turning it on, navigating the home screen, opening apps, and adjusting settings.',
    introMessage: "Great choice! Let's start with the fundamentals of using your device. I'll walk you through the essentials step by step.",
    suggestedFor: ['beginner'],
  },
  {
    emoji: '📶',
    label: 'Connecting to Wi-Fi',
    description: 'Understand what Wi-Fi is, how to connect, and what to do when it stops working.',
    category: 'Getting Started',
    prompt: 'Explain Wi-Fi to me — what it is, how to connect my device to it, what a strong signal looks like, and how to fix it when it stops working.',
    introMessage: "Wi-Fi is how your device connects to the internet without wires. Let's go through connecting and troubleshooting together.",
    suggestedFor: ['beginner'],
  },
  {
    emoji: '📧',
    label: 'Using Email',
    description: 'How to send, receive, and organize emails — plus how to spot suspicious messages.',
    category: 'Getting Started',
    prompt: 'Walk me through how email works — how to send a message, read incoming mail, add attachments, keep my inbox organized, and spot scam emails.',
    introMessage: "Email is one of the most important tools for staying in touch. Let's cover everything from sending your first message to keeping your inbox tidy.",
    suggestedFor: ['beginner', 'intermediate'],
  },
  {
    emoji: '🌐',
    label: 'Browsing the Internet Safely',
    description: 'Learn how to search the web, visit websites, and stay safe while browsing.',
    category: 'Getting Started',
    prompt: 'Teach me how to browse the internet — how to search for things, visit websites, use bookmarks, and recognize safe versus unsafe websites.',
    introMessage: "The internet has a world of information waiting for you. Let's make sure you know how to find what you need and stay safe doing it.",
    suggestedFor: ['beginner'],
  },

  // Staying Safe
  {
    emoji: '🎣',
    label: 'Spotting Scams and Phishing',
    description: 'Recognize fake emails, phone calls, and websites designed to steal your information.',
    category: 'Staying Safe',
    prompt: 'Teach me how to spot scams and phishing attempts — fake emails, suspicious phone calls, fraudulent websites, and what to do if I think I have been targeted.',
    introMessage: "Scams are getting more convincing every day, but there are clear warning signs. Let's learn what to look for so you can protect yourself.",
    suggestedFor: ['beginner', 'intermediate', 'confident'],
  },
  {
    emoji: '🔐',
    label: 'Creating Strong Passwords',
    description: 'Build passwords that protect your accounts and learn about password managers.',
    category: 'Staying Safe',
    prompt: 'Help me understand how to create strong passwords, why reusing passwords is risky, and how password managers work to keep things secure and organized.',
    introMessage: "Strong passwords are your first line of defense online. I'll show you how to make them memorable and secure.",
    suggestedFor: ['beginner', 'intermediate'],
  },
  {
    emoji: '🔒',
    label: 'Privacy Settings on Your Phone',
    description: 'Control what your phone shares and who can see your information.',
    category: 'Staying Safe',
    prompt: 'Walk me through the privacy settings on my phone — how to control app permissions, location sharing, and what data my phone collects about me.',
    introMessage: "Your phone has many privacy settings that put you in control. Let's go through the most important ones together.",
    suggestedFor: ['intermediate', 'confident'],
  },
  {
    emoji: '🛒',
    label: 'Safe Online Shopping',
    description: 'Shop with confidence — know what to check before entering payment details.',
    category: 'Staying Safe',
    prompt: 'Teach me how to shop online safely — how to spot fake websites, what to look for before paying, how to use secure payment methods, and what to do if something goes wrong.',
    introMessage: "Online shopping is convenient, but it pays to know a few safety checks first. Let's make sure you shop with confidence.",
    suggestedFor: ['beginner', 'intermediate'],
  },

  // Communication
  {
    emoji: '📹',
    label: 'Video Calling (Zoom, FaceTime)',
    description: 'Set up and join video calls to stay connected with family and friends.',
    category: 'Communication',
    prompt: 'Help me learn about video calling — how to set up and use Zoom and FaceTime, join a call, troubleshoot camera and microphone issues, and look my best on screen.',
    introMessage: "Video calling is a wonderful way to see loved ones face to face, even from a distance. Let's get you comfortable with it.",
    suggestedFor: ['beginner', 'intermediate'],
  },
  {
    emoji: '💬',
    label: 'Text Messaging and Group Chats',
    description: 'Send texts, photos, and stay in touch through group conversations.',
    category: 'Communication',
    prompt: 'Teach me about text messaging — how to send texts and photos, create and manage group chats, use emojis, and understand the difference between SMS and messaging apps.',
    introMessage: "Texting is one of the quickest ways to stay in touch. Let's cover everything from sending your first message to managing group chats.",
    suggestedFor: ['beginner'],
  },
  {
    emoji: '👥',
    label: 'Social Media Basics',
    description: 'Understand Facebook, Instagram, and other platforms — and how to use them safely.',
    category: 'Communication',
    prompt: 'Give me an introduction to social media — what Facebook, Instagram, and other platforms are for, how to set up a profile, share posts, and manage privacy settings.',
    introMessage: "Social media helps you stay connected with friends and family. Let's walk through the basics and keep your account safe.",
    suggestedFor: ['beginner', 'intermediate'],
  },

  // Everyday Tasks
  {
    emoji: '🏦',
    label: 'Online Banking Basics',
    description: 'Check balances, pay bills, and bank safely from your device.',
    category: 'Everyday Tasks',
    prompt: 'Teach me about online banking — how to check my balance, pay bills, transfer money, and stay safe while using my bank app or website.',
    introMessage: "Online banking saves time and gives you 24/7 access to your accounts. Let's make sure you feel comfortable and secure using it.",
    suggestedFor: ['intermediate', 'confident'],
  },
  {
    emoji: '🏥',
    label: 'Telehealth and Patient Portals',
    description: 'Access your health records, schedule appointments, and talk to your doctor online.',
    category: 'Everyday Tasks',
    prompt: 'Help me understand telehealth and patient portals — how to schedule appointments online, join a video visit with my doctor, view test results, and manage prescriptions through a portal.',
    introMessage: "Many doctor visits can now happen from the comfort of your home. Let's go through how telehealth and patient portals work.",
    suggestedFor: ['intermediate', 'confident'],
  },
  {
    emoji: '🎬',
    label: 'Streaming Music and Movies',
    description: 'Watch shows and listen to music using services like Netflix, YouTube, and Spotify.',
    category: 'Everyday Tasks',
    prompt: 'Teach me about streaming — how to watch movies and TV shows on Netflix and YouTube, listen to music on Spotify, and manage subscriptions so I do not pay for things I do not use.',
    introMessage: "Streaming gives you access to thousands of movies, shows, and songs. Let's explore how to find and enjoy what you love.",
    suggestedFor: ['beginner', 'intermediate'],
  },
];

export default function AiTutor() {
  const [level, setLevel] = useState<Level | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [lessonCount, setLessonCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState<TopicCategory | 'All' | 'Suggested'>('Suggested');
  const [selectedTopic, setSelectedTopic] = useState<LessonTopic | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const filteredTopics = useMemo(() => {
    if (activeCategory === 'All') return lessonTopics;
    if (activeCategory === 'Suggested') {
      return level ? lessonTopics.filter(t => t.suggestedFor.includes(level)) : lessonTopics;
    }
    return lessonTopics.filter(t => t.category === activeCategory);
  }, [activeCategory, level]);

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
      setMessages(m => [
        ...m,
        { role: 'ai', text: "Sorry, I'm having trouble connecting right now. Please try again in a moment." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function startTopic(topic: LessonTopic) {
    if (!level) return;
    setSelectedTopic(topic);
    // Show the intro message from the tutor first, then send the prompt
    setMessages([{ role: 'ai', text: topic.introMessage }]);
    // Small delay so the intro message renders before the user prompt appears
    setTimeout(() => send(topic.prompt), 150);
  }

  function resetChat() {
    setMessages([]);
    setLessonCount(0);
    setSelectedTopic(null);
    setActiveCategory('Suggested');
  }

  // ── Level Selection Screen ──────────────────────────────────
  if (!level) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 container max-w-2xl py-14 text-center">
          <div className="text-5xl mb-4">🎓</div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-primary">
            AI Personal Tech Tutor
          </h1>
          <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
            Your patient, always-available tutor who adapts to your level.
            <br className="hidden sm:block" />
            Ask anything — no question is too basic.
          </p>
          <h2 className="text-lg font-semibold mb-4">First, what is your experience level?</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {(Object.entries(levelConfig) as [Level, (typeof levelConfig)['beginner']][]).map(
              ([key, cfg]) => (
                <button
                  key={key}
                  onClick={() => setLevel(key)}
                  className="rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-md p-6 text-left transition-all"
                >
                  <div className="text-3xl mb-2">{cfg.emoji}</div>
                  <p className="font-bold text-base mb-1 text-primary">{cfg.label}</p>
                  <p className="text-sm text-muted-foreground">{cfg.desc}</p>
                </button>
              )
            )}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ── Main Tutor Interface ────────────────────────────────────
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 container max-w-4xl py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-primary">AI Tech Tutor</h1>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {levelConfig[level].emoji} {levelConfig[level].label}
                </Badge>
                {lessonCount > 0 && (
                  <span className="text-xs text-muted-foreground">
                    {lessonCount} exchange{lessonCount !== 1 ? 's' : ''} this session
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {messages.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={resetChat}
                className="gap-1.5 text-muted-foreground"
              >
                <RotateCcw className="h-3.5 w-3.5" /> New topic
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setLevel(null);
                resetChat();
              }}
              className="gap-1.5 text-muted-foreground"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Change level
            </Button>
          </div>
        </div>

        {/* Topic Browser — shown when no conversation is active */}
        {messages.length === 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="h-5 w-5 text-primary" />
              <p className="font-semibold text-base">
                Pick a topic to start a lesson, or type your own question below
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-5">
              <button
                onClick={() => setActiveCategory('Suggested')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === 'Suggested'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" /> Suggested for you
              </button>
              <button
                onClick={() => setActiveCategory('All')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === 'All'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                All Topics
              </button>
              {allCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {categoryEmojis[cat]} {cat}
                </button>
              ))}
            </div>

            {/* Topic Cards */}
            <div className="grid sm:grid-cols-2 gap-3">
              {filteredTopics.map(topic => (
                <button
                  key={topic.label}
                  onClick={() => startTopic(topic)}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card hover:border-primary hover:shadow-sm p-4 text-left transition-all group"
                >
                  <span className="text-2xl mt-0.5 shrink-0">{topic.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                        {topic.label}
                      </span>
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0 shrink-0">
                        {topic.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {topic.description}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                </button>
              ))}
            </div>

            {activeCategory === 'Suggested' && filteredTopics.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                No specific suggestions for your level — try browsing "All Topics" to explore everything available.
              </p>
            )}
          </div>
        )}

        {/* Active Topic Badge */}
        {selectedTopic && messages.length > 0 && (
          <div className="flex items-center gap-2 mb-4 px-1">
            <span className="text-lg">{selectedTopic.emoji}</span>
            <span className="text-sm font-medium text-muted-foreground">
              Lesson: {selectedTopic.label}
            </span>
            <Badge variant="secondary" className="text-[10px]">
              {selectedTopic.category}
            </Badge>
          </div>
        )}

        {/* Chat Area */}
        <div className="space-y-4 mb-4 min-h-[200px]">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'ai' && (
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
              )}
              <div
                className={`rounded-2xl px-4 py-3 max-w-[85%] text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-sm'
                    : 'bg-muted rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                  <User className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3">
                <div className="flex gap-1">
                  {[0, 1, 2].map(i => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Input Area */}
        <Card className="sticky bottom-4 rounded-2xl border border-border bg-card shadow-lg">
          <CardContent className="p-3">
            <div className="flex gap-2">
              <Textarea
                placeholder="Type your question here — no question is too basic…"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                rows={2}
                className="resize-none flex-1 border-0 focus-visible:ring-0 p-1 text-sm"
              />
              <Button
                onClick={() => send()}
                disabled={!input.trim() || loading}
                className="self-end rounded-xl"
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <BookOpen className="h-3 w-3 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">
                Ask follow-up questions — your tutor remembers the conversation.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
