import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Newspaper,
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BookOpen,
  ExternalLink,
  Printer,
  Bot,
  Share2,
  Eye,
  Scale,
  Heart,
  Flag,
  ArrowUpRight,
  Users,
  MessageSquare,
  Sparkles,
  Search,
  FileSearch,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/* ── 10-step checklist ──────────────────────────────────── */
interface ChecklistItem {
  title: string;
  detail: string;
}

const CHECKLIST: ChecklistItem[] = [
  {
    title: "Who's the publisher?",
    detail:
      "Look at the URL and visit the About page. A trusted outlet lists a street address, named editors, and contact info. Anonymous or brand-new sites deserve extra caution.",
  },
  {
    title: 'Does the URL look real?',
    detail:
      'Scammers copy famous names with a twist — "cnn.com.co", "nytimes-news.biz", or extra letters. Read the address slowly, one character at a time.',
  },
  {
    title: "What's the date on the story?",
    detail:
      'Old stories get recirculated as if they are happening today. Check the date in the headline and inside the article.',
  },
  {
    title: 'Is there an author byline?',
    detail:
      'Real journalism names the reporter. Look the author up — a good reporter has a track record you can find.',
  },
  {
    title: 'Are there sources and links in the article?',
    detail:
      'Credible stories link out to official documents, studies, or other news outlets. "Experts say" with no names is a warning sign.',
  },
  {
    title: 'Do other outlets report this?',
    detail:
      'Copy the headline into Google. If only one obscure site is covering a big story, be skeptical. Real news gets picked up by several outlets.',
  },
  {
    title: 'Is the tone emotional or neutral?',
    detail:
      'News reports the facts. Propaganda uses rage, fear, or excitement to make you share before you think. If your blood pressure jumps, slow down.',
  },
  {
    title: 'Does the URL match the story?',
    detail:
      'Some fake stories live on sites that admit they are satire or entertainment — look at the end of the domain name and the About page.',
  },
  {
    title: 'Check images with a reverse search',
    detail:
      'Right-click the photo and use Google Lens or TinEye. If the same image appears in stories from five years ago, it has been recycled.',
  },
  {
    title: "Check the author's track record",
    detail:
      'Search the author by name. A real reporter has a LinkedIn, a work history, and other articles. A ghost byline is a red flag.',
  },
];

/* ── Red flags ─────────────────────────────────────────── */
const RED_FLAGS: string[] = [
  'ALL CAPS HEADLINES designed to shout at you.',
  'Excessive exclamation points or ??? in titles.',
  '"Doctors hate this" or "You won\'t believe what happens next" clickbait.',
  'No named source — only "Experts say", "Studies show", or "Sources close to".',
  'The story only cites itself or another suspicious site.',
  'Older stories relabeled with new dates to make them feel fresh.',
  'Deepfake images or out-of-context photos pulled from unrelated events.',
  'Emotional manipulation over information — rage, fear, or outrage first.',
  'Urgency pressure to "share before it gets taken down".',
  'A political party name or loaded phrase baked right into the URL.',
];

/* ── Check before you share ────────────────────────────── */
const SHARE_STEPS: string[] = [
  'Read the whole article — not just the headline.',
  'Check the date on the story.',
  'Search the claim on Snopes, PolitiFact, FactCheck.org, Reuters, or AP.',
  "If you still are not sure — do not share it.",
];

/* ── Fact-check resources ──────────────────────────────── */
interface ResourceLink {
  label: string;
  url: string;
  note?: string;
}

const FACT_CHECK_RESOURCES: ResourceLink[] = [
  { label: 'Snopes', url: 'https://www.snopes.com', note: 'General rumor and hoax verification.' },
  { label: 'PolitiFact', url: 'https://www.politifact.com', note: 'Political claims with a Truth-O-Meter rating.' },
  { label: 'FactCheck.org', url: 'https://www.factcheck.org', note: 'Nonpartisan site from the Annenberg Public Policy Center.' },
  { label: 'Reuters Fact Check', url: 'https://www.reuters.com/fact-check/', note: 'Reuters newsroom verification.' },
  { label: 'AP Fact Check', url: 'https://apnews.com/hub/ap-fact-check', note: 'Associated Press fact-check hub.' },
  { label: 'USA Today Fact Check', url: 'https://www.usatoday.com/news/factcheck/', note: 'USA Today verification team.' },
  { label: 'Lead Stories', url: 'https://leadstories.com', note: 'Focuses on viral hoaxes and social-media claims.' },
  { label: 'TinEye', url: 'https://tineye.com', note: 'Reverse image search to trace photo origins.' },
  { label: 'Google Reverse Image Search', url: 'https://images.google.com', note: 'Click the camera icon to upload a photo.' },
  { label: 'InVID Verification', url: 'https://www.invid-project.eu/tools-and-services/invid-verification-plugin/', note: 'Browser add-on for checking videos.' },
  { label: 'Media Bias / Fact Check', url: 'https://mediabiasfactcheck.com', note: 'Ratings for news outlets by bias and reliability.' },
];

/* ── AI-generated content tips ─────────────────────────── */
const AI_TIPS: string[] = [
  'Look at hands, teeth, and eyes — AI still gets these wrong (extra fingers, warped teeth, uneven pupils).',
  'Listen for monotone delivery or wrong rhythm in voice clips — real people pause, sigh, and stumble.',
  'Check the source site — grammar errors, no About page, and auto-generated filler are giveaways.',
  'Zoom in on text in the image (signs, labels) — AI often produces garbled letters.',
  'Look for mismatched jewelry, lopsided glasses, or backgrounds that melt into each other.',
];

const AI_DETECTION_TOOLS: ResourceLink[] = [
  { label: 'WasItAI', url: 'https://wasitai.com', note: 'Quick AI image check.' },
  { label: 'Hive Moderation AI Detector', url: 'https://hivemoderation.com/ai-generated-content-detection', note: 'Image and video detection.' },
  { label: 'GPTZero', url: 'https://gptzero.me', note: 'AI text detection.' },
];

/* ── Story-type tips ───────────────────────────────────── */
interface StoryTypeTip {
  type: string;
  description: string;
  sources: ResourceLink[];
}

const STORY_TYPE_TIPS: StoryTypeTip[] = [
  {
    type: 'Medical claims',
    description:
      'A cure, a warning, or a "study shows" post. Go straight to the medical sources — not a random blog or Facebook screenshot.',
    sources: [
      { label: 'ClinicalTrials.gov', url: 'https://clinicaltrials.gov' },
      { label: 'CDC.gov', url: 'https://www.cdc.gov' },
      { label: 'NIH.gov', url: 'https://www.nih.gov' },
    ],
  },
  {
    type: 'Financial scares',
    description:
      'Posts about "your bank is collapsing" or "the IRS is coming" are designed to panic you. Check the primary sources and call your own bank.',
    sources: [
      { label: 'SEC.gov', url: 'https://www.sec.gov' },
      { label: 'FTC.gov', url: 'https://www.ftc.gov' },
      { label: 'Consumer Financial Protection Bureau', url: 'https://www.consumerfinance.gov' },
    ],
  },
  {
    type: 'Political claims',
    description:
      'Headlines about new laws or bills. Read the actual bill text — Congress.gov publishes every bill. A partisan site might describe it very differently than the text reads.',
    sources: [
      { label: 'Congress.gov', url: 'https://www.congress.gov' },
      { label: 'GovTrack', url: 'https://www.govtrack.us' },
    ],
  },
  {
    type: 'Celebrity rumors',
    description:
      'Death hoaxes and "breaking" celebrity news spread wildly. Check industry outlets, not a single tabloid or screenshot.',
    sources: [
      { label: 'Variety', url: 'https://variety.com' },
      { label: 'Deadline', url: 'https://deadline.com' },
      { label: 'AP News', url: 'https://apnews.com' },
    ],
  },
  {
    type: 'Weather / disaster',
    description:
      'Storm warnings and disaster images get recycled. Trust the National Weather Service and your local emergency office over a dramatic social post.',
    sources: [
      { label: 'National Weather Service', url: 'https://www.weather.gov' },
      { label: 'Ready.gov', url: 'https://www.ready.gov' },
    ],
  },
];

/* ── Family-sharing advice ─────────────────────────────── */
const FAMILY_ADVICE: string[] = [
  'Do not shame them publicly or in the family group chat.',
  'Reach out privately with a short, warm message and one fact-check link.',
  'Frame it from care — "I wanted to share this because I was worried it might not be real."',
  'Ask them to check before sharing next time, rather than arguing about this one post.',
  'If they dig in, let it go. The relationship matters more than winning a single post.',
];

/* ── Senior scam-adjacent tips ─────────────────────────── */
const SENIOR_TIPS: string[] = [
  'Scammers wrap fake news around "free money", "Medicare changes", and "government aid" to harvest your info.',
  "If a post tells you to click urgently, treat it as suspicious by default.",
  'If a post asks you to install something to "see the truth", never click it.',
  "If a post says you have won a prize — you have not.",
  'If your gut says "this feels off", trust your gut and walk away.',
];

/* ── FAQ ───────────────────────────────────────────────── */
interface FaqItem {
  q: string;
  a: string;
}

const FAQ: FaqItem[] = [
  {
    q: 'But this was on Fox, CNN, or MSNBC — is it not real news?',
    a: 'Major outlets follow editorial standards, so their news reporting is generally reliable. That said, every outlet has a lean, and opinion shows are not the same as news reporting. Check how the same story is covered on at least two outlets that tend to lean different ways before forming a firm opinion.',
  },
  {
    q: "What's the difference between opinion and news?",
    a: 'News reports what happened, who, when, and where, with sources. Opinion is a person\'s take on why it matters or what should happen next. Look for labels like "Opinion", "Editorial", "Analysis", or "Commentary" at the top of an article — that tells you it is not straight news.',
  },
  {
    q: 'Are fact-checkers biased?',
    a: 'Fact-checkers are people, and no one is perfectly neutral. Using two or three different fact-checkers together — Snopes, PolitiFact, and Reuters, for example — gives you a fuller picture than leaning on only one.',
  },
  {
    q: 'Can I trust social media for news?',
    a: 'Social media is good for discovering stories, but poor for verifying them. Treat Facebook, TikTok, and X posts as leads — then go to the original source (the news outlet, the study, or the official account) before you share.',
  },
  {
    q: 'What about "alternative" or independent media?',
    a: 'Some independent outlets do strong reporting. Others skip the editorial checks a larger newsroom would have. Look at the About page, check the author\'s background, and see whether their claims are confirmed elsewhere before treating it as fact.',
  },
];

/* ── Related TekSure tools ─────────────────────────────── */
const RELATED_TOOLS: { label: string; desc: string; to: string }[] = [
  { label: 'Is This Real?', desc: 'Verify suspicious emails, deals, texts, and photos before you act.', to: '/tools/is-this-real' },
  { label: 'Scam Practice Simulator', desc: 'Practice spotting real scams in a safe, no-risk environment.', to: '/tools/scam-simulator' },
  { label: 'Deepfake Defense Hub', desc: 'Defend yourself from deepfake audio and video.', to: '/deepfake-defense-hub' },
  { label: 'Digital Footprint Scanner', desc: 'See what the internet knows about you — and shrink it.', to: '/tools/digital-footprint-scanner' },
  { label: 'Safety Guides', desc: 'Browse our plain-language safety guides.', to: '/guides?category=safety' },
];

/* ── Main component ────────────────────────────────────── */
export default function FakeNewsChecker() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  const doneCount = useMemo(
    () => CHECKLIST.filter((_, i) => checked[i]).length,
    [checked],
  );

  function toggle(i: number) {
    setChecked(prev => ({ ...prev, [i]: !prev[i] }));
  }

  function resetChecklist() {
    setChecked({});
  }

  function handlePrint() {
    window.print();
  }

  return (
    <>
      <SEOHead
        title="Fake News Checker — Spot Hoaxes, Propaganda, and AI Fakes | TekSure"
        description="A senior-friendly walkthrough for checking whether a news story, meme, or social post is real. 10-step checklist, fact-check resources, AI detection tips, and a printable pocket guide."
        path="/tools/fake-news-checker"
      />
      <Navbar />
      <main id="main-content" className="container py-12 min-h-[80vh] max-w-3xl mx-auto">
        {/* ── Hero ── */}
        <section
          className="relative text-center mb-10 rounded-3xl p-8 sm:p-10 border-2 border-emerald-200 dark:border-emerald-900 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950/40 dark:via-green-950/30 dark:to-teal-950/40"
        >
          <div className="absolute right-4 top-4 print:hidden">
            <BookmarkButton
              type="tool"
              slug="fake-news-checker"
              title="Fake News Checker"
              url="/tools/fake-news-checker"
            />
          </div>
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-200 mb-5">
            <div className="relative">
              <Newspaper className="h-12 w-12" aria-hidden="true" />
              <ShieldCheck className="h-6 w-6 absolute -bottom-1 -right-1 text-emerald-700 dark:text-emerald-200" aria-hidden="true" />
            </div>
          </div>
          <Badge className="mb-4 bg-emerald-600 hover:bg-emerald-600 text-white">New</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 text-emerald-900 dark:text-emerald-100">
            Is This News Real?
          </h1>
          <p className="text-lg sm:text-xl text-emerald-900/90 dark:text-emerald-100/90 max-w-xl mx-auto leading-relaxed">
            Don't share until you check. Here's how to tell real news from propaganda, hoaxes, and AI fakes.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6 print:hidden">
            <Button
              size="lg"
              onClick={handlePrint}
              className="gap-2 min-h-14 text-base bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              <Printer className="h-5 w-5" aria-hidden="true" />
              Print the pocket guide
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={resetChecklist}
              className="gap-2 min-h-14 text-base border-emerald-300 text-emerald-800 dark:text-emerald-200 dark:border-emerald-700"
            >
              <Eye className="h-5 w-5" aria-hidden="true" />
              Reset checklist
            </Button>
          </div>
        </section>

        {/* ── 10-step checklist ── */}
        <Card className="mb-8 border-2">
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <CheckCircle2 className="h-7 w-7 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                Your 10-step fake news checklist
              </h2>
              <span
                className="text-base font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-full px-3 py-1"
                aria-live="polite"
              >
                {doneCount} of {CHECKLIST.length} done
              </span>
            </div>
            <p className="text-base text-muted-foreground mb-5 leading-relaxed">
              Tick each one off as you go. You don't have to finish every step, but the more you can answer, the more confident you can be.
            </p>
            <ol className="space-y-3">
              {CHECKLIST.map((item, i) => {
                const isChecked = !!checked[i];
                const id = `fnc-step-${i}`;
                return (
                  <li key={i}>
                    <label
                      htmlFor={id}
                      className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors min-h-14 ${
                        isChecked
                          ? 'bg-emerald-50 border-emerald-300 dark:bg-emerald-950/30 dark:border-emerald-800'
                          : 'bg-background border-border hover:bg-muted/40'
                      }`}
                    >
                      <Checkbox
                        id={id}
                        checked={isChecked}
                        onCheckedChange={() => toggle(i)}
                        className="mt-1 h-5 w-5"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full bg-emerald-600 text-white font-bold text-sm">
                            {i + 1}
                          </span>
                          <span className={`text-base sm:text-lg font-semibold ${isChecked ? 'text-emerald-900 dark:text-emerald-100' : 'text-foreground'}`}>
                            {item.title}
                          </span>
                        </div>
                        <p
                          className={`text-base leading-relaxed ${
                            isChecked ? 'text-emerald-900/90 dark:text-emerald-100/90' : 'text-muted-foreground'
                          }`}
                        >
                          {item.detail}
                        </p>
                      </div>
                    </label>
                  </li>
                );
              })}
            </ol>
          </CardContent>
        </Card>

        {/* ── Bias vs. falsehood card ── */}
        <Card className="mb-8 border-2 border-sky-300 bg-sky-50/70 dark:bg-sky-950/30 dark:border-sky-800">
          <CardContent className="p-5 sm:p-6">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-sky-900 dark:text-sky-200">
              <Scale className="h-7 w-7" aria-hidden="true" />
              Biased is not the same as fake
            </h2>
            <p className="text-base text-sky-900/90 dark:text-sky-100/90 leading-relaxed mb-4">
              Every outlet has a lean — a point of view on what stories matter and how to tell them. That's different from making things up. A reliable-but-slanted source can still have the facts right. A "neutral" source can still get a story wrong. Your job is to read critically, not pick a team.
            </p>
            <div className="rounded-xl bg-white/70 dark:bg-background border border-sky-200 dark:border-sky-800 p-4 mb-4">
              <p className="text-sm font-semibold text-sky-900 dark:text-sky-200 mb-2 uppercase tracking-wide">A rough reliability ladder</p>
              <ol className="space-y-2 text-base text-sky-900 dark:text-sky-100">
                <li className="flex items-start gap-2">
                  <span className="shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-600 text-white font-bold text-xs">1</span>
                  <span><strong>Least biased:</strong> AP, Reuters, BBC, NPR news desk.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-500 text-white font-bold text-xs">2</span>
                  <span><strong>Left-leaning or right-leaning but reliable:</strong> The New York Times, The Wall Street Journal, The Washington Post, The Hill.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-amber-500 text-white font-bold text-xs">3</span>
                  <span><strong>Opinion-heavy or mixed reliability:</strong> cable talk shows, partisan websites, some podcast networks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-orange-500 text-white font-bold text-xs">4</span>
                  <span><strong>Questionable:</strong> sites flagged for frequent errors, conspiracy content, or cherry-picked framing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-600 text-white font-bold text-xs">5</span>
                  <span><strong>Outright fake:</strong> sites that fabricate quotes, steal identities, or invent events entirely.</span>
                </li>
              </ol>
            </div>
            <p className="text-base text-sky-900/90 dark:text-sky-100/90 leading-relaxed">
              Before you form an opinion on a big story, read it in at least two outlets that lean different ways — plus one of the least-biased newswires at the top.
            </p>
            <div className="mt-4">
              <a
                href="https://mediabiasfactcheck.com"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-base font-semibold text-sky-700 dark:text-sky-300 hover:underline"
              >
                Look up an outlet at Media Bias / Fact Check
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* ── Red flags ── */}
        <Card className="mb-8 border-2 border-red-300 bg-red-50 dark:bg-red-950/30 dark:border-red-800">
          <CardContent className="p-5 sm:p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-red-900 dark:text-red-200">
              <ShieldAlert className="h-7 w-7" aria-hidden="true" />
              10 red flags of fake news
            </h2>
            <ul className="space-y-3">
              {RED_FLAGS.map((flag, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-base text-red-900 dark:text-red-100 leading-relaxed">{flag}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* ── Check before you share ── */}
        <Card className="mb-8 border-2 border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800">
          <CardContent className="p-5 sm:p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-amber-900 dark:text-amber-200">
              <Share2 className="h-7 w-7" aria-hidden="true" />
              Check before you share — 4 quick steps
            </h2>
            <ol className="space-y-3">
              {SHARE_STEPS.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-amber-600 text-white font-bold text-base">
                    {i + 1}
                  </span>
                  <span className="text-base sm:text-lg text-amber-900 dark:text-amber-100 leading-relaxed pt-1">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* ── Fact-check resources ── */}
        <Card className="mb-8 border-2">
          <CardContent className="p-5 sm:p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="h-7 w-7 text-primary" aria-hidden="true" />
              Fact-check resources
            </h2>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              Open any of these in a new tab. Search the headline, a key quote, or a photo — the major fact-checkers cover most viral claims within hours.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {FACT_CHECK_RESOURCES.map((r, i) => (
                <li key={i}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-start gap-3 rounded-xl border-2 border-border bg-background hover:border-primary hover:bg-muted/40 transition-colors p-4 min-h-[4.5rem]"
                  >
                    <ExternalLink className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-semibold text-foreground">{r.label}</p>
                      {r.note && <p className="text-sm text-muted-foreground mt-0.5 leading-snug">{r.note}</p>}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* ── AI-generated content ── */}
        <Card className="mb-8 border-2 border-fuchsia-300 bg-fuchsia-50 dark:bg-fuchsia-950/30 dark:border-fuchsia-800">
          <CardContent className="p-5 sm:p-6">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-fuchsia-900 dark:text-fuchsia-200">
              <Bot className="h-7 w-7" aria-hidden="true" />
              AI-generated content — what to watch for
            </h2>
            <p className="text-base text-fuchsia-900/90 dark:text-fuchsia-100/90 mb-4 leading-relaxed">
              AI-made images, voice clones, and fake articles look more real every month. These are the tells that still catch most fakes today.
            </p>
            <ul className="space-y-3 mb-5">
              {AI_TIPS.map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400 shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-base text-fuchsia-900 dark:text-fuchsia-100 leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-fuchsia-900 dark:text-fuchsia-200 mb-2 uppercase tracking-wide">Tools that can help</p>
            <ul className="grid gap-2 sm:grid-cols-3 mb-4">
              {AI_DETECTION_TOOLS.map((t, i) => (
                <li key={i}>
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block rounded-xl border-2 border-fuchsia-200 dark:border-fuchsia-800 bg-background hover:border-fuchsia-400 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/40 transition-colors p-3 min-h-14"
                  >
                    <p className="text-base font-semibold text-fuchsia-900 dark:text-fuchsia-100 inline-flex items-center gap-1.5">
                      {t.label} <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </p>
                    {t.note && <p className="text-xs text-fuchsia-900/80 dark:text-fuchsia-100/80 mt-0.5">{t.note}</p>}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/tools/is-this-real"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-fuchsia-300 dark:border-fuchsia-700 bg-white dark:bg-background px-4 py-3 text-base font-semibold text-fuchsia-900 dark:text-fuchsia-100 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-950/40 min-h-14"
              >
                <Eye className="h-5 w-5" aria-hidden="true" />
                Open Is This Real?
              </Link>
              <Link
                to="/deepfake-defense-hub"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-fuchsia-300 dark:border-fuchsia-700 bg-white dark:bg-background px-4 py-3 text-base font-semibold text-fuchsia-900 dark:text-fuchsia-100 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-950/40 min-h-14"
              >
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                Deepfake Defense Hub
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* ── Story-type tips ── */}
        <Card className="mb-8 border-2">
          <CardContent className="p-5 sm:p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FileSearch className="h-7 w-7 text-primary" aria-hidden="true" />
              Tips by story type
            </h2>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              Different kinds of stories call for different primary sources. When you're stuck, go directly to the place the claim should live.
            </p>
            <div className="space-y-4">
              {STORY_TYPE_TIPS.map((t, i) => (
                <div key={i} className="rounded-xl border-2 border-border p-4">
                  <p className="text-lg font-bold text-foreground mb-1">{t.type}</p>
                  <p className="text-base text-muted-foreground leading-relaxed mb-3">{t.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {t.sources.map((s, j) => (
                      <a
                        key={j}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-sm font-semibold px-3 py-1.5"
                      >
                        {s.label}
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── Family sharing card ── */}
        <Card className="mb-8 border-2 border-rose-300 bg-rose-50 dark:bg-rose-950/30 dark:border-rose-800">
          <CardContent className="p-5 sm:p-6">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-rose-900 dark:text-rose-200">
              <Heart className="h-7 w-7" aria-hidden="true" />
              My family member keeps sharing fake news — what do I do?
            </h2>
            <p className="text-base text-rose-900/90 dark:text-rose-100/90 mb-4 leading-relaxed">
              You are not alone. Here's how to nudge someone you love toward better sources without setting off a fight.
            </p>
            <ul className="space-y-3">
              {FAMILY_ADVICE.map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-rose-600 dark:text-rose-400 shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-base text-rose-900 dark:text-rose-100 leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
            <p className="text-base text-rose-900/90 dark:text-rose-100/90 mt-4 leading-relaxed italic">
              Sometimes you agree to disagree. The relationship matters more than winning a single post.
            </p>
          </CardContent>
        </Card>

        {/* ── Senior safety tips ── */}
        <Alert className="mb-8 border-2 border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800">
          <ShieldAlert className="h-6 w-6 text-amber-700 dark:text-amber-400" aria-hidden="true" />
          <AlertTitle className="text-lg font-bold text-amber-900 dark:text-amber-200">
            Heads up — scammers disguise scams as news
          </AlertTitle>
          <AlertDescription className="text-base text-amber-900/90 dark:text-amber-100/90 leading-relaxed">
            <ul className="space-y-2 mt-2">
              {SENIOR_TIPS.map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Flag className="h-5 w-5 text-amber-700 dark:text-amber-400 shrink-0 mt-1" aria-hidden="true" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 mt-4">
              <Link
                to="/tools/is-this-real"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-amber-300 dark:border-amber-700 bg-white dark:bg-background px-4 py-3 text-base font-semibold text-amber-900 dark:text-amber-100 hover:bg-amber-100 dark:hover:bg-amber-950/40 min-h-14"
              >
                <Eye className="h-5 w-5" aria-hidden="true" />
                Is This Real?
              </Link>
              <Link
                to="/tools/scam-simulator"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-amber-300 dark:border-amber-700 bg-white dark:bg-background px-4 py-3 text-base font-semibold text-amber-900 dark:text-amber-100 hover:bg-amber-100 dark:hover:bg-amber-950/40 min-h-14"
              >
                <ShieldAlert className="h-5 w-5" aria-hidden="true" />
                Scam Simulator
              </Link>
            </div>
          </AlertDescription>
        </Alert>

        {/* ── FAQ ── */}
        <Card className="mb-8">
          <CardContent className="p-5 sm:p-6">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <MessageSquare className="h-7 w-7 text-primary" aria-hidden="true" />
              Questions people ask us
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {FAQ.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base sm:text-lg font-semibold min-h-14">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* ── Related tools ── */}
        <Card className="mb-8 border-2 border-emerald-300 bg-emerald-50/60 dark:bg-emerald-950/20 dark:border-emerald-800">
          <CardContent className="p-5 sm:p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-emerald-900 dark:text-emerald-200">
              <ArrowUpRight className="h-7 w-7" aria-hidden="true" />
              Related TekSure tools
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {RELATED_TOOLS.map((r, i) => (
                <Link
                  key={i}
                  to={r.to}
                  className="block rounded-xl border-2 border-border bg-background hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors p-4 min-h-[4.5rem]"
                >
                  <p className="font-semibold text-base mb-1 text-foreground">{r.label}</p>
                  <p className="text-sm text-muted-foreground leading-snug">{r.desc}</p>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── Golden rule ── */}
        <Alert className="mb-8 border-2 border-emerald-300 bg-emerald-50 dark:bg-emerald-950/30 dark:border-emerald-800">
          <AlertTriangle className="h-6 w-6 text-emerald-700 dark:text-emerald-300" aria-hidden="true" />
          <AlertTitle className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
            The golden rule
          </AlertTitle>
          <AlertDescription className="text-base text-emerald-900/90 dark:text-emerald-100/90 leading-relaxed">
            No tool — ours or anyone else's — can promise 100% certainty. If something feels off, listen to that. It's always OK to wait, ask a friend, or quietly pass on a post rather than share it. Real stories survive a few minutes of checking.
          </AlertDescription>
        </Alert>

        {/* ── Printable pocket guide (only visible when printing) ── */}
        <section
          aria-label="Printable pocket guide"
          className="hidden print:block print:mt-0"
        >
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-1">TekSure Fake News Pocket Guide</h2>
            <p className="text-sm text-muted-foreground">teksure.com/tools/fake-news-checker</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-base font-bold mb-2">10-step checklist</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                {CHECKLIST.map((item, i) => (
                  <li key={i}>
                    <span className="font-semibold">{item.title}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <p className="text-base font-bold mb-2">Red flags</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {RED_FLAGS.slice(0, 6).map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <p className="text-base font-bold mt-3 mb-2">Check before you share</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                {SHARE_STEPS.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
              <p className="text-base font-bold mt-3 mb-2">Fact-check sites</p>
              <p className="text-sm leading-snug">
                snopes.com · politifact.com · factcheck.org · reuters.com/fact-check · apnews.com · mediabiasfactcheck.com
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Print styles — keep the cheat sheet to a single letter page */}
      <style>{`
        @media print {
          @page { size: letter; margin: 0.5in; }
          nav, footer, button { display: none !important; }
          main { padding: 0 !important; max-width: none !important; }
          /* Hide most long sections, show only the pocket guide */
          main > section:not([aria-label="Printable pocket guide"]),
          main > .mb-8 { display: none !important; }
          main > section[aria-label="Printable pocket guide"] { display: block !important; }
        }
      `}</style>
    </>
  );
}
