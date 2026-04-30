import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ChevronRight, ExternalLink, AlertTriangle, type LucideIcon } from 'lucide-react';

type Use = 'understand' | 'compare' | 'safe';

interface Tool {
  name: string;
  cost: string;
  bestFor: string;
  signup: string[];
  link: string;
  notes?: string[];
}

const TOOLS: Tool[] = [
  {
    name: 'ChatGPT (free version)',
    cost: 'Free',
    bestFor: 'General questions, plain-English explanations, drafting letters, recipe help, language help.',
    signup: [
      'Go to chatgpt.com.',
      'Click "Sign up" → use email or Google account.',
      'Type any question into the box at the bottom. Press enter.',
    ],
    link: 'https://chatgpt.com',
    notes: [
      'The free version is plenty for most uses. Paid is $20/mo and adds image generation and faster responses.',
      'Made by OpenAI — the original of the modern AI chatbots.',
    ],
  },
  {
    name: 'Google Gemini',
    cost: 'Free',
    bestFor: 'Anyone using Google services (Gmail, Calendar, Docs). Connects to your Google account if you let it.',
    signup: [
      'Go to gemini.google.com (or tap "Gemini" in your Google app).',
      'Sign in with the Google account you already have.',
      'Type or speak.',
    ],
    link: 'https://gemini.google.com',
    notes: [
      'Built into Pixel phones and Android.',
      'Connects to your Gmail and Calendar (with permission) to answer questions like "what is on my calendar tomorrow?".',
    ],
  },
  {
    name: 'Microsoft Copilot',
    cost: 'Free',
    bestFor: 'Anyone using Windows, Microsoft 365, or Edge browser. Comes built into Windows 11.',
    signup: [
      'On Windows 11: press Win + C or click the Copilot icon in the taskbar.',
      'On the web: copilot.microsoft.com.',
      'Sign in with a Microsoft account.',
    ],
    link: 'https://copilot.microsoft.com',
    notes: [
      'Free version uses GPT-4 — the same model ChatGPT Plus uses.',
      'Built into Word, Excel, and Outlook for Microsoft 365 subscribers.',
    ],
  },
  {
    name: 'Claude',
    cost: 'Free',
    bestFor: 'Long writing tasks, careful research questions, walking through complex topics in plain English.',
    signup: [
      'Go to claude.ai.',
      'Sign up with email.',
      'Start chatting.',
    ],
    link: 'https://claude.ai',
    notes: [
      'Made by Anthropic.',
      'Strong at long, careful answers and at admitting when it does not know something.',
    ],
  },
];

const STARTER_PROMPTS = [
  {
    use: 'Plain-English explanation',
    examples: [
      '"Explain Medicare Part D to me like I am 65 and have never heard of it."',
      '"What is two-factor authentication, in plain English?"',
      '"My doctor said I have something called atrial fibrillation. What is it?"',
    ],
  },
  {
    use: 'Drafting letters and emails',
    examples: [
      '"Write a polite letter to my homeowners association asking them to fix a streetlight."',
      '"Help me write a thank-you note to my niece for the birthday gift."',
      '"Draft an email asking my doctor for a prescription refill."',
    ],
  },
  {
    use: 'Recipes and cooking',
    examples: [
      '"I have chicken, broccoli, rice, and soy sauce. What can I make?"',
      '"Convert 350°F to Celsius and explain why my cake recipe says both."',
      '"What is a good substitute for buttermilk?"',
    ],
  },
  {
    use: 'Practical help',
    examples: [
      '"I need to call my bank about a charge I do not recognise. What should I say?"',
      '"How do I get a passport renewed if I have moved since the last one?"',
      '"Read this email I got and tell me if it sounds like a scam: [paste it]."',
    ],
  },
];

export default function AiChatbotGuide() {
  const [tab, setTab] = useState<Use>('understand');

  return (
    <>
      <SEOHead
        title="AI Chatbot Beginner's Guide"
        description="ChatGPT, Gemini, Copilot, Claude — what each one is, what to ask, what to watch out for. Plain-English starter for older adults trying AI for the first time."
        path="/tools/ai-chatbot-guide"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-purple-50 via-background to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-purple-500/10 rounded-full">
                <Sparkles className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">AI Chatbot Beginner&apos;s Guide</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              ChatGPT, Gemini, Copilot, Claude — what each one is, when to use it, what not to trust it for.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'AI Chatbot Guide' }]} />

          <div className="flex flex-wrap gap-2 mb-6">
            {([
              { id: 'understand' as Use, label: 'What is it?' },
              { id: 'compare' as Use,    label: 'The four free ones' },
              { id: 'safe' as Use,       label: 'How to use safely' },
            ]).map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  tab === t.id ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-border hover:border-primary/50 hover:bg-primary/5'
                }`}>
                {t.label}
              </button>
            ))}
          </div>

          {tab === 'understand' && (
            <>
              <Card className="border-border mb-6">
                <CardContent className="p-5 space-y-4">
                  <div>
                    <p className="font-semibold mb-1">What is an AI chatbot, in one paragraph?</p>
                    <p className="text-sm text-muted-foreground">
                      You type a question; a computer program writes back in conversational English. Underneath, it has read large amounts of text and learned to predict good answers. It is not a person, not a search engine, and not always right — but it is fast, patient, and never tired of explaining the same thing twice.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Why might I want to try one?</p>
                    <ul className="space-y-1.5 text-sm">
                      <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Plain-English explanations</strong> of confusing things — Medicare, computer errors, medication names.</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Drafting letters</strong> you do not want to write from scratch.</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Practice conversations</strong> — what to say to the cable company\'s retention line, how to ask a question of your doctor.</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Recipes, ideas, vacation planning, language help</strong> — the assistant for the small daily questions.</span></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Good first prompts to try</p>
              <div className="space-y-3 mb-6">
                {STARTER_PROMPTS.map(p => (
                  <Card key={p.use} className="border-border">
                    <CardContent className="p-5">
                      <Badge variant="outline" className="mb-2">{p.use}</Badge>
                      <ul className="space-y-1.5">
                        {p.examples.map((e, i) => (
                          <li key={i} className="text-sm font-mono p-2 rounded bg-muted/40 border border-border">{e}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          {tab === 'compare' && (
            <div className="space-y-3 mb-6">
              {TOOLS.map(t => (
                <Card key={t.name} className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                      <p className="font-semibold text-base">{t.name}</p>
                      <Badge variant="outline">{t.cost}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {t.bestFor}</p>

                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">How to start</p>
                    <ol className="space-y-1.5 mb-3">
                      {t.signup.map((s, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span className="text-primary font-semibold shrink-0">{i + 1}.</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ol>

                    {t.notes && (
                      <ul className="space-y-1 mt-3 pt-3 border-t border-border">
                        {t.notes.map((n, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex gap-2"><span className="text-primary">•</span><span>{n}</span></li>
                        ))}
                      </ul>
                    )}

                    <a href={t.link} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline">
                      Visit <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {tab === 'safe' && (
            <>
              <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
                <CardContent className="p-5 flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">Five rules for using AI chatbots safely</p>
                    <ol className="space-y-2 mt-2">
                      <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold shrink-0">1.</span><span>Never share Social Security numbers, passwords, or credit-card numbers. Treat the chat like a postcard, not a bank vault.</span></li>
                      <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold shrink-0">2.</span><span>Do not trust medical, legal, or financial answers without checking with a real professional. AI gets specifics wrong sometimes — confidently.</span></li>
                      <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold shrink-0">3.</span><span>Verify any URL the AI gives you before clicking. AI sometimes invents URLs that go nowhere or worse.</span></li>
                      <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold shrink-0">4.</span><span>If anyone calls or emails claiming to be from "ChatGPT support" or "Gemini security" — it is a scam. None of these companies call you.</span></li>
                      <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold shrink-0">5.</span><span>Free is fine. Do not pay for a "premium AI experience" until you have used the free version for a couple of weeks.</span></li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-muted/30">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold mb-2">A useful habit: ask the AI to cite</p>
                  <p className="text-xs text-muted-foreground">
                    When asking factual questions, end with: "and cite your sources." The AI will give you links — and you can click through to the real source. Saves you from confidently wrong answers.
                  </p>
                </CardContent>
              </Card>
            </>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/ai-image-spotter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">AI Image Spotter</p>
                <p className="text-xs text-muted-foreground mt-0.5">Tell AI photos from real ones.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Paste any suspicious text.</p>
              </Link>
              <Link to="/tools/dictation-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Dictation Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Talk to AI instead of typing.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: AI chatbots are at their best when you are SPECIFIC. "Help me write a letter" is okay; "Help me write a friendly letter to my HOA asking them to repaint a faded crosswalk" is much better.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
