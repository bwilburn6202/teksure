// ─────────────────────────────────────────────────────────────────────────────
// TekBrain landing page — a warm, welcoming intro that explains what
// TekBrain is *before* we drop first-time visitors into a chat interface.
//
// Route contract:
//   - This page lives at  /tekbrain
//   - The actual chat UI lives at  /tekbrain/chat
//   - Clicking a starter prompt navigates to /tekbrain/chat?q=<encoded prompt>
//     and the chat page auto-sends that prompt on mount.
//
// Design goals:
//   - Senior-friendly: large text, high contrast, large tap targets (≥56px CTAs).
//   - Warm palette: cream base, amber accents, navy CTA — matches the homepage.
//   - Plain-language sections: what it does, how it works, what it's good at,
//     and — just as important — what it isn't.
// ─────────────────────────────────────────────────────────────────────────────
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Brain,
  ArrowRight,
  MessageCircle,
  BookOpen,
  Sparkles,
  Check,
  X,
  Lock,
  ShieldCheck,
  HeartHandshake,
  Wand2,
} from 'lucide-react';

// ── Example starter prompts ──────────────────────────────────────────────────
// Clicking one of these navigates straight into the chat with the question
// pre-loaded, so the user doesn't have to type to get started.
const EXAMPLE_QUESTIONS: { q: string; tag: string }[] = [
  { q: 'How do I know if an email is a scam?',               tag: 'Safety' },
  { q: 'My phone is running out of storage',                 tag: 'Phone' },
  { q: 'I forgot my password',                               tag: 'Accounts' },
  { q: 'How do I set up my new smart TV?',                   tag: 'Setup' },
  { q: 'My grandchild called asking for money — is it real?', tag: 'Scams' },
  { q: 'How do I video call my family?',                     tag: 'Connecting' },
];

export default function TekBrainLanding() {
  const navigate = useNavigate();

  // Starting the chat with no pre-filled prompt — user lands on the empty state.
  const startChat = () => navigate('/tekbrain/chat');

  // Starting the chat with a specific example question — the chat page reads
  // `?q=` off the URL on mount and auto-sends it.
  const startWithExample = (question: string) =>
    navigate(`/tekbrain/chat?q=${encodeURIComponent(question)}`);

  return (
    <>
      <SEOHead
        title="Meet TekBrain — Your AI Tech Helper | TekSure"
        description="Ask any tech question in plain English and get step-by-step help, pulled from TekSure's library of 3,000+ senior-friendly guides. Free, no signup required."
        path="/tekbrain"
      />
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-[#E1D4F0]/50 via-[#FAF8F4] to-white">
        {/* ── 1. Hero ───────────────────────────────────────────────────────── */}
        <section
          aria-labelledby="tekbrain-hero-heading"
          className="relative overflow-hidden"
        >
          {/* Soft radial glow — mirrors the homepage hero's warm top-light, shifted to violet. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-32 h-[480px] bg-[radial-gradient(1000px_480px_at_50%_0%,#E1D4F0_0%,rgba(225,212,240,0)_65%)]"
          />

          <div className="relative container max-w-4xl px-4 py-16 md:py-24 text-center">
            {/* Brand chip so the page feels like part of the TekSure family. */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white border border-violet-200 shadow-lg shadow-violet-200/30 mb-8">
              <Brain className="h-10 w-10 text-violet-600" aria-hidden="true" />
            </div>

            <h1
              id="tekbrain-hero-heading"
              className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 text-balance leading-[1.08]"
            >
              Meet <span className="text-[#2A5FCC]">TekBrain</span> — Your AI Tech Helper
            </h1>

            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed max-w-2xl mx-auto mb-10">
              Ask any tech question, get answers in plain English.
            </p>

            {/* Primary CTA — bigger than the body text, with generous padding. */}
            <div className="flex justify-center mb-8">
              <Button
                size="lg"
                onClick={startChat}
                className="text-lg md:text-xl px-10 py-7 min-h-[64px] bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-2xl shadow-lg shadow-amber-600/30 hover:shadow-xl hover:shadow-amber-600/40 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="h-6 w-6 mr-3" aria-hidden="true" />
                Start Chatting
                <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
              </Button>
            </div>

            {/* Trust note — row of pill-badges on desktop, stacked on mobile. */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base md:text-lg text-slate-600 font-medium">
              <span className="inline-flex items-center gap-2">
                <Check className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                Free
              </span>
              <span className="hidden md:inline text-slate-300" aria-hidden="true">
                ·
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                No signup
              </span>
              <span className="hidden md:inline text-slate-300" aria-hidden="true">
                ·
              </span>
              <span className="inline-flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-amber-600" aria-hidden="true" />
                Powered by 3,000+ expert guides
              </span>
            </div>
          </div>
        </section>

        {/* ── 2. How it works — 3-step explainer ───────────────────────────── */}
        <section
          aria-labelledby="tekbrain-how-heading"
          className="container max-w-6xl px-4 py-16 md:py-20"
        >
          <div className="text-center mb-12">
            <h2
              id="tekbrain-how-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3"
            >
              How it works
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              Three simple steps. No tech jargon required.
            </p>
          </div>

          <ol className="grid gap-6 md:grid-cols-3">
            {/* Step 1 — plain-words input */}
            <li>
              <Card className="h-full border-2 border-amber-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-7 md:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-bold text-lg"
                    >
                      1
                    </span>
                    <span className="text-sm font-semibold tracking-wide uppercase text-amber-700">
                      Step 1
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                    Type your question in plain words
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-5">
                    No special terms, no perfect spelling. Just ask like you would a friend.
                  </p>
                  {/* Visual example — a faux chat input */}
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <p className="text-base md:text-lg text-slate-700 italic">
                      “My WiFi keeps dropping”
                    </p>
                  </div>
                </CardContent>
              </Card>
            </li>

            {/* Step 2 — finds the right guide */}
            <li>
              <Card className="h-full border-2 border-amber-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-7 md:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-bold text-lg"
                    >
                      2
                    </span>
                    <span className="text-sm font-semibold tracking-wide uppercase text-amber-700">
                      Step 2
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                    TekBrain finds the right guide for you
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-5">
                    It searches 3,000+ TekSure guides and picks the ones that actually match your question.
                  </p>
                  {/* Visual example — stacked guide cards */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 rounded-lg border border-amber-200 bg-amber-50/70 px-3 py-2.5">
                      <BookOpen className="h-4 w-4 text-amber-700 shrink-0" aria-hidden="true" />
                      <span className="text-sm md:text-base font-medium text-slate-800 truncate">
                        Fix slow or dropping WiFi
                      </span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
                      <BookOpen className="h-4 w-4 text-slate-500 shrink-0" aria-hidden="true" />
                      <span className="text-sm md:text-base text-slate-700 truncate">
                        Restart your router safely
                      </span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
                      <BookOpen className="h-4 w-4 text-slate-500 shrink-0" aria-hidden="true" />
                      <span className="text-sm md:text-base text-slate-700 truncate">
                        Check your internet speed
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </li>

            {/* Step 3 — step-by-step chat with follow-ups */}
            <li>
              <Card className="h-full border-2 border-amber-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-7 md:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-bold text-lg"
                    >
                      3
                    </span>
                    <span className="text-sm font-semibold tracking-wide uppercase text-amber-700">
                      Step 3
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                    Get step-by-step help, or ask follow-ups
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-5">
                    Read the answer at your own pace. Stuck? Just ask another question — it remembers the conversation.
                  </p>
                  {/* Visual example — tiny chat bubbles */}
                  <div className="space-y-2">
                    <div className="flex justify-end">
                      <div className="rounded-2xl rounded-tr-sm bg-amber-600 text-white px-3.5 py-2 text-sm md:text-base max-w-[85%]">
                        Will this reset my settings?
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="rounded-2xl rounded-tl-sm bg-slate-100 text-slate-800 px-3.5 py-2 text-sm md:text-base max-w-[85%]">
                        No — your WiFi name and password will stay the same.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </li>
          </ol>
        </section>

        {/* ── 3. Example questions — clickable cards that start the chat ───── */}
        <section
          aria-labelledby="tekbrain-examples-heading"
          className="bg-[#FAF8F4] border-y border-amber-100"
        >
          <div className="container max-w-5xl px-4 py-16 md:py-20">
            <div className="text-center mb-10">
              <h2
                id="tekbrain-examples-heading"
                className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3"
              >
                Not sure where to start?
              </h2>
              <p className="text-lg md:text-xl text-slate-600">
                Tap one of these questions to jump right in.
              </p>
            </div>

            <ul
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              role="list"
            >
              {EXAMPLE_QUESTIONS.map(({ q, tag }) => (
                <li key={q}>
                  <button
                    type="button"
                    onClick={() => startWithExample(q)}
                    className="group w-full text-left h-full p-5 md:p-6 rounded-2xl border-2 border-amber-200 bg-white hover:border-amber-500 hover:bg-amber-50/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-500/40 focus-visible:border-amber-500 transition-all min-h-[120px] shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    aria-label={`Ask TekBrain: ${q}`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wide text-amber-700 bg-amber-100 rounded-full px-2.5 py-1">
                        {tag}
                      </span>
                      <ArrowRight
                        className="h-5 w-5 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-lg md:text-xl font-semibold text-slate-800 leading-snug">
                      {q}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 4. What TekBrain is good at vs. what it isn't ────────────────── */}
        <section
          aria-labelledby="tekbrain-strengths-heading"
          className="container max-w-5xl px-4 py-16 md:py-20"
        >
          <div className="text-center mb-12">
            <h2
              id="tekbrain-strengths-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3"
            >
              What TekBrain can (and can’t) do
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              A quick, honest look at what you’ll get.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Good at */}
            <Card className="border-2 border-emerald-200 bg-emerald-50/40">
              <CardContent className="p-7 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    aria-hidden="true"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-emerald-600 text-white"
                  >
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-emerald-900">
                    Good at
                  </h3>
                </div>
                <ul className="space-y-3" role="list">
                  {[
                    'Finding the right guide for your problem',
                    'Troubleshooting step by step',
                    'Explaining tech jargon in plain English',
                    'Walking you through setup and how-to’s',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        className="h-5 w-5 text-emerald-600 mt-1 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-base md:text-lg text-slate-800 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Not good at */}
            <Card className="border-2 border-slate-200 bg-slate-50/60">
              <CardContent className="p-7 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    aria-hidden="true"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-slate-500 text-white"
                  >
                    <X className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    Not good at
                  </h3>
                </div>
                <ul className="space-y-3" role="list">
                  {[
                    'Medical or legal advice — please ask a professional',
                    'Remembering you between sessions',
                    'Doing things for you (it guides, you do)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X
                        className="h-5 w-5 text-slate-500 mt-1 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-base md:text-lg text-slate-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm md:text-base text-slate-500 mt-5 pt-5 border-t border-slate-200 leading-relaxed">
                  Need hands-on help? You can always{' '}
                  <a
                    href="/get-help"
                    className="font-semibold text-[#2A5FCC] underline hover:no-underline"
                  >
                    book a real person
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── 5. Privacy section ────────────────────────────────────────────── */}
        <section
          aria-labelledby="tekbrain-privacy-heading"
          className="bg-[#FAF8F4] border-y border-amber-100"
        >
          <div className="container max-w-3xl px-4 py-16 md:py-20">
            <Card className="border-2 border-[#2A5FCC]/20 bg-white shadow-md">
              <CardContent className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div
                    aria-hidden="true"
                    className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2A5FCC] text-white self-center md:self-start"
                  >
                    <Lock className="h-8 w-8" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2
                      id="tekbrain-privacy-heading"
                      className="text-2xl md:text-3xl font-bold text-slate-900 mb-3"
                    >
                      Your questions stay private
                    </h2>
                    <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                      We take privacy seriously — especially for anything you’d ask a tech helper.
                    </p>
                    <ul className="space-y-2" role="list">
                      {[
                        { icon: ShieldCheck, label: 'We don’t sell your data' },
                        { icon: HeartHandshake, label: 'We don’t train AI on your chats' },
                        { icon: Wand2,         label: 'No sign-up needed to get started' },
                      ].map(({ icon: Icon, label }) => (
                        <li
                          key={label}
                          className="flex items-center gap-3 justify-center md:justify-start"
                        >
                          <Icon
                            className="h-5 w-5 text-[#2A5FCC] shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-base md:text-lg text-slate-800 font-medium">
                            {label}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm md:text-base text-slate-500 mt-5 leading-relaxed">
                      Read the full{' '}
                      <a
                        href="/privacy"
                        className="text-[#2A5FCC] font-semibold underline hover:no-underline"
                      >
                        privacy policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── 6. Final CTA ─────────────────────────────────────────────────── */}
        <section
          aria-labelledby="tekbrain-final-cta-heading"
          className="container max-w-3xl px-4 py-20 md:py-24 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-amber-200 px-4 py-2 text-sm font-semibold text-amber-800 mb-6 shadow-sm">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Ready when you are
          </div>
          <h2
            id="tekbrain-final-cta-heading"
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5 text-balance leading-tight"
          >
            Ask TekBrain your first question.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed">
            No account. No credit card. Just plain-English answers, whenever you need them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={startChat}
              className="text-lg md:text-xl px-10 py-7 min-h-[64px] bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-2xl shadow-lg shadow-amber-600/30 hover:shadow-xl hover:shadow-amber-600/40 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-6 w-6 mr-3" aria-hidden="true" />
              Start Chatting
              <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/guides')}
              className="text-lg md:text-xl px-8 py-7 min-h-[64px] border-2 border-[#2A5FCC] text-[#2A5FCC] hover:bg-[#2A5FCC]/5 hover:border-[#2A5FCC] font-semibold rounded-2xl"
            >
              <BookOpen className="h-5 w-5 mr-2" aria-hidden="true" />
              Browse guides instead
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
