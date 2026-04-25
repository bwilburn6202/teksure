import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  HeartHandshake,
  MessageCircle,
  Phone,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';

const pricingJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is TekSure really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every guide, every tool, and our TekBrain AI assistant are completely free to use. No account is required and there are no paywalls on any educational content.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the $15 deposit work when booking a technician?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You pay a $15 deposit to confirm your technician booking. The deposit is applied to the total cost of your session, so it is not an extra fee — it is simply your first payment toward the work.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get help on TekSure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Start by searching our free guides or asking TekBrain a plain-English question. If you still need help, book a real human technician with a $15 deposit.',
        },
      },
    ],
  },
];

const Pricing = () => (
  <div className="min-h-screen bg-[#FAF8F4] dark:bg-background flex flex-col">
    <SEOHead
      title="TekSure Pricing — Free Tech Help"
      description="All guides and tools on TekSure are free. Book a real technician starting with just a $15 deposit."
      path="/pricing"
      jsonLd={pricingJsonLd}
    />
    <Navbar />

    <main id="main-content" className="flex-1">
      {/* ── Header ───────────────────────────────────────────── */}
      <section className="border-b border-amber-100 dark:border-border">
        <div className="container max-w-4xl mx-auto py-12 md:py-16 px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-muted/40 border border-amber-200/70 dark:border-border px-4 py-2 text-sm font-semibold text-foreground/80 shadow-sm mb-6">
            <Sparkles className="h-4 w-4 text-[#E87A2B]" aria-hidden="true" />
            Honest, friendly pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
            Free tech help for everyone.
            <br className="hidden sm:block" />
            <span className="text-[#2A5FCC]">Real humans when you need them.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Every guide, tool, and AI assistant on TekSure is free. If a guide
            isn&rsquo;t enough, book a real technician for a flat $15 deposit
            that goes toward your session.
          </p>
        </div>
      </section>

      {/* ── Two pricing cards ───────────────────────────────── */}
      <section className="container max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Free Access */}
          <div className="rounded-3xl border-2 border-amber-200 dark:border-border bg-white dark:bg-card p-8 md:p-10 shadow-sm flex flex-col">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-[#B35A00] dark:text-amber-300 mb-5">
              <HeartHandshake className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Free Access</h2>
            <p className="text-base text-foreground/70 mb-6 leading-relaxed">
              Everything you need to learn, fix, and feel confident with your
              technology — no account required.
            </p>
            <div className="mb-6">
              <p className="text-5xl md:text-6xl font-bold tracking-tight">$0</p>
              <p className="text-base text-foreground/60 mt-1">Free forever. No credit card.</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                'All step-by-step guides',
                'All free tools and calculators',
                'TekBrain AI assistant',
                'Learning paths and quizzes',
                'Scam alerts and safety center',
                'Plain English — no jargon',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base">
                  <Check
                    className="h-5 w-5 text-[#1E6A3D] dark:text-emerald-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full h-14 text-base font-bold rounded-xl border-2 border-[#2A5FCC] text-[#2A5FCC] hover:bg-[#F0F5FF] dark:hover:bg-white/10"
            >
              <Link to="/guides">
                <BookOpen className="mr-2 h-5 w-5" aria-hidden="true" />
                Browse Free Guides
              </Link>
            </Button>
          </div>

          {/* Book a Technician */}
          <div className="rounded-3xl border-2 border-[#2A5FCC] bg-white dark:bg-card p-8 md:p-10 shadow-lg shadow-[#2A5FCC]/10 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-[#2A5FCC] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 shadow-md">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              When you need a hand
            </div>
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[#E6F0FF] dark:bg-[#2A5FCC]/20 text-[#2A5FCC] mb-5">
              <Wrench className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Book a Technician</h2>
            <p className="text-base text-foreground/70 mb-6 leading-relaxed">
              When a guide isn&rsquo;t enough, a real human walks you through it
              — patiently, in plain English.
            </p>
            <div className="mb-6">
              <p className="text-5xl md:text-6xl font-bold tracking-tight text-[#2A5FCC]">$15</p>
              <p className="text-base text-foreground/60 mt-1">
                Deposit applied to your session total. Final cost depends on the
                service.
              </p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                'A real, friendly American technician',
                'Remote help over the phone or screen share',
                'On-site visits available in many areas',
                'Plain-English step-by-step support',
                'Deposit goes toward your final bill',
                'Cancel any time before your appointment',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base">
                  <Check
                    className="h-5 w-5 text-[#2A5FCC] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className="w-full h-14 text-base font-bold rounded-xl bg-[#2A5FCC] text-white hover:bg-[#234FB0] shadow-md hover:shadow-lg"
            >
              <Link to="/get-help">
                <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
                Book a Technician
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────── */}
      <section className="bg-white dark:bg-muted/20 border-y border-amber-100 dark:border-border">
        <div className="container max-w-5xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-3">
            How TekSure works
          </h2>
          <p className="text-lg text-foreground/70 text-center max-w-2xl mx-auto mb-12">
            Three simple steps. Most folks find their answer in the first one.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '1',
                title: 'Find a guide',
                body: 'Search 2,900+ free guides written in plain English. Step-by-step screenshots, no jargon.',
                icon: BookOpen,
              },
              {
                num: '2',
                title: 'Use a free tool',
                body: 'Try our free tools or ask TekBrain — our friendly AI assistant — a follow-up question.',
                icon: MessageCircle,
              },
              {
                num: '3',
                title: 'Book a tech if you still need help',
                body: 'Reserve your spot with a $15 deposit. A real person walks you through it.',
                icon: Phone,
              },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="rounded-2xl border border-amber-200 dark:border-border bg-[#FAF8F4] dark:bg-card p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#2A5FCC] text-white text-xl font-bold mb-4">
                    {step.num}
                  </div>
                  <Icon
                    className="h-6 w-6 text-[#2A5FCC] mx-auto mb-3"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────── */}
      <section className="bg-[#FAF8F4] dark:bg-background">
        <div className="container max-w-3xl mx-auto px-4 py-12 md:py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to feel confident with your tech?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Start free. Book a human if you ever get stuck.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="h-14 text-base font-bold rounded-xl bg-[#2A5FCC] text-white hover:bg-[#234FB0] gap-2 px-7"
            >
              <Link to="/get-help">
                Book a Technician
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 text-base font-bold rounded-xl border-2 border-[#2A5FCC] text-[#2A5FCC] hover:bg-[#F0F5FF] dark:hover:bg-white/10 px-7"
            >
              <Link to="/guides">Browse Free Guides</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Pricing;
