import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, CheckCircle2, ExternalLink, Phone, UserX, Lock, ChevronRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// ─── Quick Checklist ────────────────────────────────────────────────────────

const WARNING_SIGNS = [
  {
    id: 'initiated',
    label: 'Did they contact YOU first (call, text, or email)?',
  },
  {
    id: 'payment',
    label: 'Are they asking for gift cards, wire transfer, or cryptocurrency?',
  },
  {
    id: 'urgency',
    label: 'Do they say you must act RIGHT NOW or something bad will happen?',
  },
  {
    id: 'impersonation',
    label: 'Are they claiming to be from the IRS, Social Security, Microsoft, or your bank?',
  },
  {
    id: 'gut',
    label: 'Does something just feel... wrong?',
  },
];

// ─── Scam Types ─────────────────────────────────────────────────────────────

const SCAM_TYPES = [
  {
    emoji: '',
    name: 'IRS / Social Security Impersonation',
    description:
      'Callers claim you owe back taxes or that your Social Security number has been "suspended" due to suspicious activity. They may threaten arrest to pressure you into acting immediately.',
    spotIt:
      'The IRS and Social Security Administration will never call you out of the blue, threaten you with arrest, or demand immediate payment. They always send official letters first.',
    color: 'border-red-200 bg-red-50/50 dark:bg-red-950/20 dark:border-red-800/40',
    badgeColor: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  },
  {
    emoji: '',
    name: 'Tech Support Scam',
    description:
      'A frightening pop-up or phone call claims your computer is infected with a virus. They want you to call a number or let them "fix" your computer remotely — for a fee.',
    spotIt:
      'Microsoft, Apple, and Google never contact you about viruses. Legitimate security alerts never include a phone number to call. Close the window and do not call.',
    color: 'border-orange-200 bg-orange-50/50 dark:bg-orange-950/20 dark:border-orange-800/40',
    badgeColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  },
  {
    emoji: '',
    name: 'Romance Scam',
    description:
      'Someone you meet online quickly develops a strong connection with you — but they can never meet in person or video call. Eventually, a financial crisis leads to a request for money.',
    spotIt:
      'If an online partner has never been able to meet you, video call, or involves any request for money — stop all contact. Reverse-image search their profile photo.',
    color: 'border-pink-200 bg-pink-50/50 dark:bg-pink-950/20 dark:border-pink-800/40',
    badgeColor: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
  },
  {
    emoji: '',
    name: 'Gift Card Scam',
    description:
      'Any legitimate business, government agency, or person asking you to pay with gift cards is running a scam — no exceptions. Scammers love gift cards because the money is nearly impossible to trace or recover.',
    spotIt:
      'Hang up or stop responding the moment anyone asks you to buy gift cards as payment. No real business or government office accepts gift cards as payment.',
    color: 'border-amber-200 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-800/40',
    badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  },
  {
    emoji: '',
    name: 'Grandparent Scam',
    description:
      'A caller pretends to be your grandchild (or a lawyer or police officer "helping" them), says they\'re in serious trouble — arrested, in a hospital, or stranded — and begs you not to tell other family members.',
    spotIt:
      'Hang up immediately and call your grandchild directly on their real phone number. Verify with another family member before sending any money.',
    color: 'border-yellow-200 bg-yellow-50/50 dark:bg-yellow-950/20 dark:border-yellow-800/40',
    badgeColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  },
  {
    emoji: '',
    name: 'Lottery / Prize Scam',
    description:
      'You receive exciting news — you\'ve won a prize, lottery, or sweepstakes you never entered! But to claim your winnings, you\'ll need to pay a "processing fee" or "taxes" upfront first.',
    spotIt:
      'You cannot win a contest you never entered. Legitimate prizes never require upfront fees. Any request for money before receiving your "winnings" is always a scam.',
    color: 'border-lime-200 bg-lime-50/50 dark:bg-lime-950/20 dark:border-lime-800/40',
    badgeColor: 'bg-lime-100 text-lime-700 dark:bg-lime-900/40 dark:text-lime-300',
  },
  {
    emoji: '',
    name: 'Online Shopping Scam',
    description:
      'Fake websites advertise products at unbelievably low prices and never deliver. Sellers on marketplace sites may send an overpayment check and ask you to wire back the difference.',
    spotIt:
      'If the price looks too good to be true, it is. Search the store name plus "scam" or "reviews" before buying. Never wire money or send gift cards to a seller.',
    color: 'border-teal-200 bg-teal-50/50 dark:bg-teal-950/20 dark:border-teal-800/40',
    badgeColor: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  },
  {
    emoji: '',
    name: 'Phishing Text / Email',
    description:
      'A message that appears to come from your bank, Amazon, USPS, or another trusted company asks you to click a link and confirm your account details. The link goes to a fake website.',
    spotIt:
      'Never click links in unexpected texts or emails. Go directly to the company\'s website by typing their address yourself, or call the number on the back of your card.',
    color: 'border-blue-200 bg-blue-50/50 dark:bg-blue-950/20 dark:border-blue-800/40',
    badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  },
];

// ─── Report Options ──────────────────────────────────────────────────────────

const REPORT_OPTIONS = [
  {
    icon: Shield,
    name: 'FTC — ReportFraud.ftc.gov',
    description: 'The main place to report scams in America. Your report helps the FTC catch and stop scammers.',
    url: 'https://reportfraud.ftc.gov',
    phone: '1-877-382-4357',
    color: 'border-blue-200 dark:border-blue-800/40',
    iconColor: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
  },
  {
    icon: Phone,
    name: 'AARP Fraud Watch Network',
    description: 'Free helpline staffed by trained fraud specialists. They understand what seniors face and offer compassionate, practical advice.',
    url: 'https://www.aarp.org/money/scams-fraud/helpline/',
    phone: '1-877-908-3360',
    color: 'border-red-200 dark:border-red-800/40',
    iconColor: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-50 dark:bg-red-950/30',
  },
  {
    icon: AlertTriangle,
    name: 'Internet Crime Complaint Center',
    description: 'The FBI\'s dedicated center for reporting online scams, cybercrime, and internet fraud.',
    url: 'https://www.ic3.gov',
    phone: null,
    color: 'border-amber-200 dark:border-amber-800/40',
    iconColor: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
  },
  {
    icon: UserX,
    name: 'Your State Attorney General',
    description: 'For local consumer protection complaints. Every state has resources to help residents fight fraud.',
    url: 'https://www.usa.gov/state-attorney-general',
    phone: null,
    color: 'border-green-200 dark:border-green-800/40',
    iconColor: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-50 dark:bg-green-950/30',
  },
];

// ─── Recovery Steps ──────────────────────────────────────────────────────────

const RECOVERY_STEPS = [
  {
    title: "Don't panic — you are not alone",
    detail:
      "Scammers stole over $10 billion from Americans in 2023, and it can happen to even the most careful people. These criminals are professionals who do this full-time. Being tricked does not mean you did something stupid — it means you ran into a skilled manipulator. What matters now is what you do next.",
  },
  {
    title: 'Stop all contact with the scammer immediately',
    detail:
      'Block their phone number, email address, and any social media accounts. Do not respond to follow-up messages — scammers often circle back pretending to be a "recovery specialist" who can get your money back. That is another scam.',
  },
  {
    title: 'If you sent money — contact your bank or card issuer within 24 hours',
    detail:
      'Call the number on the back of your debit or credit card and explain that you were scammed. Credit card transactions may be disputed and reversed. Bank wire transfers and Zelle payments are harder to recover, but acting within 24 hours gives you the best chance. Your bank\'s fraud team has handled this before.',
  },
  {
    title: 'If you paid with gift cards — call the card issuer right now',
    detail:
      'There is a chance the money has not been spent yet. Call the gift card issuer immediately:\n• Google Play: 1-855-466-4438\n• Amazon: 1-888-280-4331\n• Apple iTunes: 1-800-275-2273\n• Target: 1-800-440-0680\n• Walmart: 1-888-537-5503\nHave the card numbers and receipts ready.',
  },
  {
    title: 'If you shared personal information — protect your credit',
    detail:
      'If you gave out your Social Security number, date of birth, or bank account details, act quickly. Place a free fraud alert at one of the three credit bureaus (Equifax, Experian, or TransUnion) — they are required to notify the others. Consider placing a credit freeze, which is free and prevents anyone from opening new accounts in your name.',
  },
  {
    title: 'Report what happened',
    detail:
      'Report to the FTC at ReportFraud.ftc.gov (or call 1-877-382-4357) and file a report with your local police department. The police report number is important if you need to dispute charges or deal with your bank. Your report helps law enforcement identify and stop scammers who target others.',
  },
  {
    title: 'Talk to someone — you should not handle this alone',
    detail:
      'Call the AARP Fraud Watch Helpline at 1-877-908-3360. It is free, confidential, and staffed by people who understand exactly what you are going through. Many people who are scammed feel embarrassed, but sharing what happened is one of the most important things you can do — for yourself and to help protect others.',
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function ScamDefenseCenter() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const anyChecked = checkedItems.size > 0;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Scam Defense Center — Protect Yourself from Tech Scams | TekSure"
        description="Real FTC statistics, a quick scam checklist, the top 8 scams targeting seniors right now, reporting links, and a step-by-step recovery guide. Everything you need to stay safe."
        path="/scam-defense"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How can I tell if a phone call is a scam?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Key warning signs: they called you first, they are asking for gift cards or wire transfers, they are threatening immediate consequences, or they claim to be from the IRS or Social Security. Hang up and call the agency directly using a number from their official website.',
              },
            },
            {
              '@type': 'Question',
              name: 'What do I do if I already sent money to a scammer?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Act immediately. Contact your bank within 24 hours to dispute the transaction. If you used gift cards, call the gift card company right away. Report the scam to the FTC at ReportFraud.ftc.gov and call AARP\'s free fraud helpline at 1-877-908-3360.',
              },
            },
            {
              '@type': 'Question',
              name: 'Where should I report a scam?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Report to the FTC at ReportFraud.ftc.gov or call 1-877-382-4357. You can also report to the AARP Fraud Watch Network at 1-877-908-3360, the FBI\'s Internet Crime Complaint Center at ic3.gov, and your local police.',
              },
            },
          ],
        }}
      />
      <Navbar />

      {/* ── 1. Hero ────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Scam Defense Center
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Scammers stole over{' '}
            <strong className="text-white">$10 billion from Americans in 2023</strong>. Seniors are
            the #1 target. Here&apos;s everything you need to stay safe.
          </p>
          <p className="mt-3 text-sm text-white/70">Source: FTC Consumer Sentinel Network Data Book 2023</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-red-600 hover:bg-white/90 font-semibold min-h-[44px]"
            >
              <a href="#checklist">Check for Warning Signs</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/60 text-white hover:bg-white/10 min-h-[44px]"
            >
              <a href="#got-scammed">I Already Got Scammed</a>
            </Button>
          </div>
        </div>
      </section>

      <main className="container max-w-4xl mx-auto px-4 py-12 space-y-16">

        {/* ── 2. Quick Checklist ────────────────────────────────────────────── */}
        <section id="checklist" className="scroll-mt-20">
          <Card className="border-2 border-red-200 dark:border-red-800/50 overflow-hidden">
            <CardHeader className="bg-red-50 dark:bg-red-950/30 border-b border-red-200 dark:border-red-800/50 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-lg shrink-0">
                  <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <CardTitle className="text-xl text-red-900 dark:text-red-100">
                    Is This a Scam? Check These 5 Warning Signs
                  </CardTitle>
                  <p className="text-sm text-red-700/80 dark:text-red-300/80 mt-1">
                    Check every box that applies to your situation right now.
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-5">
              <ul className="space-y-3">
                {WARNING_SIGNS.map((sign) => {
                  const checked = checkedItems.has(sign.id);
                  return (
                    <li key={sign.id}>
                      <button
                        type="button"
                        onClick={() => toggleItem(sign.id)}
                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl border-2 text-left transition-all min-h-[52px] ${
                          checked
                            ? 'border-red-400 bg-red-50 dark:bg-red-950/40 dark:border-red-600'
                            : 'border-border hover:border-red-300 hover:bg-red-50/30 dark:hover:bg-red-950/20'
                        }`}
                        aria-pressed={checked}
                      >
                        <span
                          className={`flex items-center justify-center w-6 h-6 rounded border-2 shrink-0 transition-colors ${
                            checked
                              ? 'bg-red-500 border-red-500 text-white'
                              : 'border-muted-foreground/40'
                          }`}
                          aria-hidden="true"
                        >
                          {checked && (
                            <svg
                              viewBox="0 0 12 10"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-3.5 h-3"
                            >
                              <polyline points="1.5,5 4.5,8.5 10.5,1.5" />
                            </svg>
                          )}
                        </span>
                        <span
                          className={`text-base font-medium leading-snug ${
                            checked ? 'text-red-800 dark:text-red-200' : 'text-foreground'
                          }`}
                        >
                          {sign.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Result message */}
              <div
                className={`mt-5 rounded-xl px-5 py-4 border-2 transition-all ${
                  anyChecked
                    ? 'border-red-400 bg-red-50 dark:bg-red-950/40 dark:border-red-600'
                    : 'border-border bg-muted/30'
                }`}
              >
                {anyChecked ? (
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-red-800 dark:text-red-200 text-base">
                        Stop — this may be a scam.
                      </p>
                      <p className="text-red-700/80 dark:text-red-300/80 mt-1 leading-relaxed">
                        If you checked any of these boxes, do not send money or give out personal
                        information. Hang up or stop responding right now. Call a trusted family
                        member or friend first, and look up the agency or company&apos;s phone number
                        yourself.
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm text-center">
                    Check the boxes above that apply to your situation.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── 3. Top Scams Right Now ────────────────────────────────────────── */}
        <section id="scam-types">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Top Scams Right Now</h2>
            <p className="text-muted-foreground mt-2">
              These are the scams that cost Americans the most money and are most commonly used
              against people 60 and older.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {SCAM_TYPES.map((scam) => (
              <Card
                key={scam.name}
                className={`border-2 ${scam.color} hover:shadow-md transition-shadow`}
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl shrink-0" role="img" aria-label={scam.name}>
                      {scam.emoji}
                    </span>
                    <div>
                      <h3 className="font-bold text-base leading-tight">{scam.name}</h3>
                      <Badge
                        className={`mt-1.5 text-xs font-semibold border-0 ${scam.badgeColor}`}
                      >
                        Warning
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {scam.description}
                  </p>
                  <div className="rounded-lg bg-background/80 border border-border/60 px-3 py-2.5">
                    <p className="text-xs font-bold text-foreground/70 uppercase tracking-wide mb-1">
                      How to spot it
                    </p>
                    <p className="text-sm leading-relaxed">{scam.spotIt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-5 border-amber-200 dark:border-amber-800/40 bg-amber-50/50 dark:bg-amber-950/20">
            <CardContent className="py-4 px-5 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">
                <strong>Looking for the latest scam alerts?</strong> Our{' '}
                <Link
                  to="/safety/scam-alerts"
                  className="text-primary font-medium hover:underline"
                >
                  Scam Alerts page
                </Link>{' '}
                is updated regularly with new threats reported by the FTC and AARP — including AI
                voice clone scams, fake traffic ticket texts, and more.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* ── 4. Report a Scam ─────────────────────────────────────────────── */}
        <section id="report">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Report a Scam</h2>
            <p className="text-muted-foreground mt-2">
              Reporting a scam — even if you lost no money — helps law enforcement catch criminals
              and warns other people. It only takes a few minutes.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {REPORT_OPTIONS.map((option) => (
              <Card
                key={option.name}
                className={`border-2 ${option.color} hover:shadow-md transition-shadow`}
              >
                <CardContent className="p-5">
                  <div className={`inline-flex p-2 rounded-lg ${option.bgColor} mb-3`}>
                    <option.icon className={`h-5 w-5 ${option.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-base mb-1">{option.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {option.description}
                  </p>
                  {option.phone && (
                    <p className="text-sm font-semibold mb-3">
                      <Phone className="h-3.5 w-3.5 inline mr-1.5 text-muted-foreground" />
                      {option.phone}
                    </p>
                  )}
                  <a
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline min-h-[44px]"
                  >
                    Visit {option.url.replace('https://www.', '').replace('https://', '')}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── 5. Recovery Guide ─────────────────────────────────────────────── */}
        <section id="got-scammed" className="scroll-mt-20">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              "I Already Got Scammed" — Recovery Guide
            </h2>
            <p className="text-muted-foreground mt-2">
              Take a breath. You can get through this. Follow these steps in order.
            </p>
          </div>

          <Card className="border-2 border-green-200 dark:border-green-800/40">
            <CardContent className="p-0">
              <div className="bg-green-50 dark:bg-green-950/30 border-b border-green-200 dark:border-green-800/40 px-6 py-4 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <p className="font-semibold text-green-900 dark:text-green-100">
                    Billions of dollars are lost to scams every year. Anyone can be targeted. What
                    matters now is taking these steps.
                  </p>
                </div>
              </div>

              <Accordion type="single" collapsible defaultValue="step-0" className="px-4 py-2">
                {RECOVERY_STEPS.map((step, i) => (
                  <AccordionItem
                    key={i}
                    value={`step-${i}`}
                    className="border rounded-lg px-4 my-2 bg-background"
                  >
                    <AccordionTrigger className="hover:no-underline py-4 min-h-[52px]">
                      <span className="flex items-center gap-3 text-left">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-sm font-bold shrink-0">
                          {i + 1}
                        </span>
                        <span className="font-semibold text-base leading-snug">{step.title}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pl-11 text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                      {step.detail}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* AARP callout */}
          <Card className="mt-5 border-red-200 dark:border-red-800/40 bg-red-50/40 dark:bg-red-950/20">
            <CardContent className="py-5 px-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="p-3 bg-red-100 dark:bg-red-900/50 rounded-full shrink-0">
                <Phone className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-base">AARP Fraud Watch Helpline</p>
                <p className="text-muted-foreground text-sm mt-0.5">
                  Free, confidential support from people who understand what you&apos;re going
                  through. Available Monday–Friday, 8 AM–8 PM ET.
                </p>
              </div>
              <a
                href="tel:18779083360"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors min-h-[44px] shrink-0"
              >
                <Phone className="h-4 w-4" />
                1-877-908-3360
              </a>
            </CardContent>
          </Card>
        </section>

        {/* ── 6. Protect Yourself Tools ─────────────────────────────────────── */}
        <section id="tools">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Protect Yourself — Tools &amp; Guides
            </h2>
            <p className="text-muted-foreground mt-2">
              Knowledge is your best defense. These free TekSure resources take just a few minutes
              each.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {/* Scam Simulator */}
            <Card className="border-2 border-orange-200 dark:border-orange-800/40 hover:shadow-md transition-shadow group">
              <CardContent className="p-5 h-full flex flex-col">
                <div className="text-3xl mb-3" aria-hidden="true"></div>
                <h3 className="font-bold text-base mb-2">Practice Spotting Scams</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Try real-world examples in a safe environment. The more you practice, the easier
                  it is to recognize a scam when it really happens.
                </p>
                <Link
                  to="/tools/scam-simulator"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline min-h-[44px]"
                >
                  Open Scam Simulator
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            {/* Freeze Credit Guide */}
            <Card className="border-2 border-blue-200 dark:border-blue-800/40 hover:shadow-md transition-shadow group">
              <CardContent className="p-5 h-full flex flex-col">
                <div className="text-3xl mb-3" aria-hidden="true"></div>
                <h3 className="font-bold text-base mb-2">Freeze Your Credit</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  A credit freeze is free and one of the most powerful tools against identity theft.
                  This guide walks you through it step by step.
                </p>
                <Link
                  to="/guides/freeze-credit-identity-theft"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline min-h-[44px]"
                >
                  Read the Guide
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            {/* Strong Passwords Guide */}
            <Card className="border-2 border-green-200 dark:border-green-800/40 hover:shadow-md transition-shadow group">
              <CardContent className="p-5 h-full flex flex-col">
                <div className="text-3xl mb-3" aria-hidden="true"></div>
                <h3 className="font-bold text-base mb-2">Create Strong Passwords</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Weak passwords make it easy for scammers to break into your accounts. Learn how to
                  create strong ones you can actually remember.
                </p>
                <Link
                  to="/guides/how-to-create-strong-password"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 dark:text-green-400 hover:underline min-h-[44px]"
                >
                  Read the Guide
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* CTA bottom */}
          <Card className="mt-8 border-primary/30 bg-primary/5">
            <CardContent className="py-7 px-6 text-center">
              <Lock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h2 className="text-xl font-bold mb-2">Want a personalized safety score?</h2>
              <p className="text-muted-foreground mb-5 max-w-md mx-auto text-sm leading-relaxed">
                Our free Cyber Scorecard checks your passwords, accounts, and devices and tells you
                exactly where to focus — no technical knowledge required.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="min-h-[44px]">
                  <Link to="/tools/cyber-scorecard">Take the Cyber Scorecard</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-h-[44px]">
                  <Link to="/safety/scam-alerts">Latest Scam Alerts</Link>
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
