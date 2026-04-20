import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Sparkles,
  BookOpen,
  MessageSquare,
  Wand2,
  Lightbulb,
  ShieldAlert,
  Lock,
  Users,
  GraduationCap,
  Newspaper,
  CheckCircle2,
  XCircle,
  ExternalLink,
  HeartHandshake,
} from 'lucide-react';

type Item = {
  name: string;
  url?: string;
  description: string;
};

type Section = {
  id: string;
  title: string;
  icon: typeof Sparkles;
  badge: string;
  intro: string;
  accent: string;
  items: Item[];
  kind?: 'do' | 'dont' | 'default';
};

const sections: Section[] = [
  {
    id: 'what-is-ai',
    title: 'What AI actually is (plain English)',
    icon: BookOpen,
    badge: 'START HERE',
    accent: 'from-blue-50 to-blue-100/40 dark:from-blue-950/30 dark:to-blue-900/10',
    intro:
      'AI is software trained on huge amounts of text, images, or audio so it can recognize patterns and respond in human-like ways. It is not thinking, not sentient, and not magic. But it is useful.',
    items: [
      {
        name: 'The main types you will meet',
        description:
          'Chatbots (ChatGPT, Claude, Gemini) answer questions in conversation. Image generators (DALL·E, Midjourney, Ideogram) draw pictures from a description. Voice assistants (Siri, Alexa, Google Assistant) respond to spoken commands.',
      },
      {
        name: 'What AI gets wrong — often',
        description:
          'AI confidently makes up facts (called "hallucinations"), reflects the biases in its training data, and does not know what happened after its training cutoff. Treat every answer the way you would treat a confident stranger at a bar: possibly right, always worth verifying.',
      },
      {
        name: 'What AI is not',
        description:
          'It is not a person. It does not remember you between conversations unless you turn on memory. It does not have opinions, feelings, or intentions of its own. It is a very good pattern-matcher, nothing more and nothing less.',
      },
    ],
  },
  {
    id: 'free-tools',
    title: 'Free AI tools worth trying',
    icon: Wand2,
    badge: 'FREE',
    accent: 'from-purple-50 to-purple-100/40 dark:from-purple-950/30 dark:to-purple-900/10',
    intro:
      'All of these have generous free versions. Try two or three — you will quickly find the one that feels right.',
    items: [
      {
        name: 'ChatGPT',
        url: 'https://chat.openai.com',
        description:
          'The most famous one. Made by OpenAI. The free version handles almost everything most people need: writing, summaries, explanations, brainstorming.',
      },
      {
        name: 'Claude',
        url: 'https://claude.ai',
        description:
          'Made by Anthropic. Free. Especially good at thoughtful writing, reading long documents, and explaining things clearly. Many people find its tone warmer than ChatGPT.',
      },
      {
        name: 'Gemini',
        url: 'https://gemini.google.com',
        description:
          'Made by Google. Free. Tightly integrated with Gmail, Docs, and YouTube — good if you already live in Google. Can pull up recent web results more reliably than the others.',
      },
      {
        name: 'Microsoft Copilot',
        url: 'https://copilot.microsoft.com',
        description:
          'Free. Built on the same technology as ChatGPT and integrated across Windows, Edge, and Microsoft 365. Good if Word and Excel are part of your day.',
      },
      {
        name: 'Perplexity',
        url: 'https://perplexity.ai',
        description:
          'Free. The research specialist. Every answer comes with real sources you can click and verify. The best choice when you care about where the information came from.',
      },
    ],
  },
  {
    id: 'everyday-uses',
    title: 'Everyday uses for AI',
    icon: Lightbulb,
    badge: 'USEFUL',
    accent: 'from-amber-50 to-amber-100/40 dark:from-amber-950/30 dark:to-amber-900/10',
    intro:
      'Most people think of AI as a novelty. In practice, it is a patient assistant that will happily help with the small and annoying things.',
    items: [
      {
        name: 'Writing help',
        description:
          'Polishing emails, drafting letters to landlords or insurers, writing complaints to a company. Paste your rough version and ask it to "make it more polite and firm."',
      },
      {
        name: 'Summarizing long documents',
        description:
          'Paste a contract, a long article, or a medical report and ask "summarize this in five bullet points, plain English, for someone who is not a lawyer/doctor."',
      },
      {
        name: 'Explaining confusing topics',
        description:
          'Medical diagnoses, legal terms, financial jargon, tax forms. "Explain it to me like I am a curious 10-year-old" is a genuinely useful prompt.',
      },
      {
        name: 'Brainstorming ideas',
        description:
          'Gift ideas, business names, party themes, book recommendations. Ask for ten options, pick the two you like, and ask it to push further.',
      },
      {
        name: 'Recipe variations',
        description:
          '"What can I make with chicken, spinach, rice, garlic, and a lemon?" Add dietary needs ("dairy-free," "low sodium"). Ask for a shopping list for what is missing.',
      },
      {
        name: 'Travel planning',
        description:
          'Draft a four-day itinerary, compare neighborhoods, generate a packing list for a climate. Always double-check hours and prices against the real website — AI invents those.',
      },
      {
        name: 'Learning something new',
        description:
          'Your personal tutor for anything: guitar chords, Spanish grammar, how a mortgage works. Ask follow-up questions until it clicks. Free and infinitely patient.',
      },
      {
        name: 'Shopping research',
        description:
          '"Compare the Bose QuietComfort to the Sony WH-1000XM5 for someone who wears glasses." Great for narrowing a decision — then check real reviews before you buy.',
      },
    ],
  },
  {
    id: 'good-prompts',
    title: 'How to talk to AI (good prompts)',
    icon: MessageSquare,
    badge: 'SKILLS',
    accent: 'from-emerald-50 to-emerald-100/40 dark:from-emerald-950/30 dark:to-emerald-900/10',
    intro:
      'A good prompt is the difference between a useful answer and a vague one. These five habits make everything better.',
    items: [
      {
        name: '1. Be specific',
        description:
          'Bad: "Write something about my trip." Good: "Write a 300-word update for my family about my four-day trip to Santa Fe — focus on the food and the hike, include one funny story, warm tone."',
      },
      {
        name: '2. Give context',
        description:
          '"I am a senior who does not use tech much, explain simply." "I am writing to a doctor, sound professional." "I am a small-business owner, no jargon." Context shapes the answer more than anything else.',
      },
      {
        name: '3. Ask for a format',
        description:
          '"In bullet points." "As a table with three columns: option, cost, pros." "In a 3-paragraph email ending with a clear question." Tell it what shape the answer should take.',
      },
      {
        name: '4. Ask follow-up questions',
        description:
          'AI is a conversation, not a vending machine. "Make it shorter." "Now rewrite it friendlier." "What would a skeptic say about this?" Each round gets closer to what you actually want.',
      },
      {
        name: '5. Example prompts to steal',
        description:
          '"Act as a patient tax preparer and explain what a 1099 is." "Summarize this 20-page PDF for a busy person." "Help me write a polite but firm complaint email to an airline." "What questions should I ask my cardiologist about this diagnosis?"',
      },
    ],
  },
  {
    id: 'should-not',
    title: 'What AI SHOULD NOT do for you',
    icon: XCircle,
    badge: 'LIMITS',
    accent: 'from-red-50 to-red-100/40 dark:from-red-950/30 dark:to-red-900/10',
    intro:
      'AI is wrong often enough that some decisions need a human expert, full stop. Use it to prepare for the conversation — not to replace the conversation.',
    kind: 'dont',
    items: [
      {
        name: 'Do not make final medical decisions with AI alone',
        description:
          'Great for understanding a diagnosis, preparing questions for your doctor, or decoding lab results. Not a substitute for a clinician who can actually examine you.',
      },
      {
        name: 'Do not rely on AI for legal advice',
        description:
          'It will confidently cite cases that do not exist and misstate your state laws. Use it to understand terms and draft a first version of a letter — then get a real lawyer for anything that matters.',
      },
      {
        name: 'Do not let AI make financial decisions',
        description:
          'It does not know your full situation, cannot see today\'s market, and cannot be held accountable. Use it to explain what a 401(k), Roth, or annuity is. Do not use it to pick investments.',
      },
      {
        name: 'Do not publish anything factual without verifying',
        description:
          'Dates, quotes, statistics, names, laws — AI makes these up. If you would be embarrassed to be wrong, check the source yourself before you hit send or publish.',
      },
      {
        name: 'Do not let AI replace human connection',
        description:
          'AI companions can feel comforting in a lonely moment, but they are not friends. They are software designed to keep you engaged. Call a real person.',
      },
    ],
  },
  {
    id: 'privacy',
    title: 'AI safety and privacy',
    icon: Lock,
    badge: 'PROTECT YOURSELF',
    accent: 'from-slate-50 to-slate-100/40 dark:from-slate-950/30 dark:to-slate-900/10',
    intro:
      'Assume anything you type into an AI chat can be stored and used to train the next version — unless you have specifically turned that off in settings.',
    items: [
      {
        name: 'Assume what you type is stored',
        description:
          'Most AI chatbots keep a copy of your conversations. Some use them to improve the model. Check the "Data controls" or "Privacy" section in settings for options to disable chat history or training.',
      },
      {
        name: 'Do not share these things',
        description:
          'Social Security Numbers, full banking details, account passwords, complete medical records, your home address, children\'s names, or anything else you would not shout in a coffee shop.',
      },
      {
        name: 'Use AI anonymously when you can',
        description:
          'Many tools let you use them without signing in, or in "temporary chat" or "incognito" mode that does not save history. Handy when you are asking something private.',
      },
      {
        name: 'Be careful with work and client info',
        description:
          'Pasting confidential work documents into a personal AI account can violate your employer\'s policy or your clients\' trust. Use the enterprise version your company provides, or nothing.',
      },
    ],
  },
  {
    id: 'scams',
    title: 'AI scams to watch for',
    icon: ShieldAlert,
    badge: 'DANGER',
    accent: 'from-rose-50 to-rose-100/40 dark:from-rose-950/30 dark:to-rose-900/10',
    intro:
      'The same tools that help you are being used against you. Knowing what is possible is half the defense.',
    items: [
      {
        name: 'Voice cloning ("family emergency" calls)',
        description:
          'Scammers only need 3 seconds of your loved one\'s voice (grabbed from social media) to clone it. They call you crying, begging for bail money or a wire transfer. Set up a family password today.',
      },
      {
        name: 'Deepfake videos',
        description:
          'Convincing fake videos of real people — politicians, CEOs, celebrities — saying things they never said. Used for fake product endorsements, stock manipulation, and political misinformation.',
      },
      {
        name: 'AI-generated phishing emails',
        description:
          'The old giveaway of bad grammar and weird phrasing is gone. Modern phishing emails read perfectly. Check the sender address, hover over links, and never act on urgency.',
      },
      {
        name: 'Fake AI "girlfriend/boyfriend" romance scams',
        description:
          'Chatbots and AI-generated photos run months-long relationships to soften marks before the "my mom needs surgery" ask. If you have never met them in person, you probably never will.',
      },
      {
        name: 'Full guide: Deepfake Defense Hub',
        url: '/deepfake-defense-hub',
        description:
          'Step-by-step protection: family password system, how to spot fakes, verification techniques, and reporting.',
      },
    ],
  },
  {
    id: 'by-audience',
    title: 'AI for specific needs',
    icon: Users,
    badge: 'USE CASES',
    accent: 'from-teal-50 to-teal-100/40 dark:from-teal-950/30 dark:to-teal-900/10',
    intro:
      'AI is most useful when you have a specific role in mind for it. Here is where it fits for different people.',
    items: [
      {
        name: 'Seniors',
        description:
          'Ask ChatGPT or Claude to "explain this medical diagnosis in plain English for an 80-year-old." Use it to draft letters to Medicare or insurance companies. Let it read and summarize the fine print.',
      },
      {
        name: 'Small business owners',
        description:
          'Marketing copy, product descriptions, draft emails to vendors, replying to reviews, writing job descriptions. Always review and edit — AI writes in an average voice, and your voice sells better.',
      },
      {
        name: 'Caregivers',
        description:
          'Understanding a loved one\'s diagnosis, drafting questions for doctors, summarizing care instructions, finding support resources in plain English. A patient research assistant at 2 AM.',
      },
      {
        name: 'Writers',
        description:
          'Editing, brainstorming, breaking through blank-page paralysis, generating alternative titles. Not for writing your actual work — your voice is the whole point.',
      },
      {
        name: 'Students',
        description:
          'A tutor, not a cheater. "Explain derivatives like a kind math teacher." "Quiz me on the Civil War." "Check my essay for unclear sentences but do not rewrite it for me." Learning stays with you; copy-pasted homework does not.',
      },
    ],
  },
  {
    id: 'education',
    title: 'Free AI education resources',
    icon: GraduationCap,
    badge: 'LEARN MORE',
    accent: 'from-indigo-50 to-indigo-100/40 dark:from-indigo-950/30 dark:to-indigo-900/10',
    intro:
      'If you want to go deeper than "how do I use ChatGPT," these are the genuinely good free courses and articles.',
    items: [
      {
        name: 'AI for Everyone (Coursera, Andrew Ng)',
        url: 'https://www.coursera.org/learn/ai-for-everyone',
        description:
          'Free to audit. Four weeks. No math, no coding. The clearest non-technical introduction to what AI is and is not, taught by one of the field\'s most trusted voices.',
      },
      {
        name: 'Elements of AI',
        url: 'https://www.elementsofai.com',
        description:
          'Free, self-paced, from the University of Helsinki. Millions have taken it. Covers the big ideas without jargon. Finish it and you will know more than most people at your job.',
      },
      {
        name: 'OpenAI "How ChatGPT works"',
        url: 'https://help.openai.com',
        description:
          'Short, readable articles straight from the people who built it. Honest about limitations.',
      },
    ],
  },
  {
    id: 'keeping-up',
    title: 'Keeping up (without the hype)',
    icon: Newspaper,
    badge: 'STAY CURRENT',
    accent: 'from-fuchsia-50 to-fuchsia-100/40 dark:from-fuchsia-950/30 dark:to-fuchsia-900/10',
    intro:
      'Most AI news is marketing. These sources filter the noise.',
    items: [
      {
        name: 'Simon Willison\'s blog',
        url: 'https://simonwillison.net',
        description:
          'A software engineer who writes plainly about every new AI release, what it actually does, and what it does not. No hype, lots of examples.',
      },
      {
        name: 'Ben Thompson — Stratechery',
        url: 'https://stratechery.com',
        description:
          'Thoughtful analysis of AI as a business and technology shift. Free and paid articles; the free ones are plenty.',
      },
      {
        name: 'When to try a new tool',
        description:
          'The first time a tool is free, the second time it has been out for three months (most bugs fixed), and the third time a person you trust tells you it saved them real time. Ignore launch-day hype.',
      },
      {
        name: 'Ignoring the hype',
        description:
          'You do not need to use every new model, jailbreak, or agent. The people getting the most out of AI today are the ones who picked one chatbot and use it five times a week for small, real problems.',
      },
    ],
  },
];

export default function AiLiteracyHub() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="AI Literacy Hub — Understanding AI for Everyday Life | TekSure"
        description="AI without the hype. Plain-English explanations of what AI is, free tools worth trying, good prompts, safety, scams to avoid, and the best free resources to learn more."
        path="/ai-literacy-hub"
      />
      <Navbar />

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI Literacy Hub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            AI Without the Hype — What You Actually Need to Know
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            No jargon, no doom, no cheerleading. A warm, practical tour of what AI can do for your
            life — and what it should not be trusted with. By the end of this page you will feel
            like this is something you can actually use.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm px-4 py-2 rounded-full border border-border hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </section>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => {
            const Icon = section.icon;
            const IndicatorIcon = section.kind === 'dont' ? XCircle : CheckCircle2;
            const indicatorColor =
              section.kind === 'dont' ? 'text-red-600' : 'text-emerald-600';

            return (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <Card className={`overflow-hidden bg-gradient-to-br ${section.accent} border-2`}>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-background shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2">
                          {section.badge}
                        </Badge>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{section.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{section.intro}</p>
                      </div>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      {section.items.map((item) => (
                        <div
                          key={item.name}
                          className="p-4 rounded-lg bg-background/80 backdrop-blur border border-border/60"
                        >
                          <div className="flex items-start gap-3">
                            <IndicatorIcon
                              className={`w-5 h-5 ${indicatorColor} shrink-0 mt-0.5`}
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                {item.url ? (
                                  <a
                                    href={item.url}
                                    target={item.url.startsWith('http') ? '_blank' : undefined}
                                    rel={
                                      item.url.startsWith('http') ? 'noopener noreferrer' : undefined
                                    }
                                    className="font-semibold hover:underline inline-flex items-center gap-1"
                                  >
                                    {item.name}
                                    {item.url.startsWith('http') && (
                                      <ExternalLink className="w-3 h-3" />
                                    )}
                                  </a>
                                ) : (
                                  <span className="font-semibold">{item.name}</span>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            );
          })}
        </div>

        {/* Call to action */}
        <section className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
              <p className="text-purple-50 mb-6 max-w-2xl mx-auto">
                Pick one chatbot. Open it tomorrow morning. Ask it to help with one small thing — an
                email, a recipe, a confusing bill. That is how you learn AI. Everything else is
                practice.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <a href="/ai-tutor">
                    <HeartHandshake className="w-4 h-4 mr-2" />
                    Try the AI Tutor
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-purple-700"
                >
                  <a href="/deepfake-defense-hub">
                    <ShieldAlert className="w-4 h-4 mr-2" />
                    Defend against AI scams
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
