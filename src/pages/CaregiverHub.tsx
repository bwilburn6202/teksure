import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  HeartHandshake,
  Smartphone,
  Monitor,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  Users,
  Map,
  HeartPulse,
  Siren,
  Link as LinkIcon,
  Wallet,
  KeyRound,
  Scale,
  Gift,
  MessageSquare,
  Phone,
} from 'lucide-react';

// ─── Start Here cards ────────────────────────────────────────────────────────

const startHere = [
  {
    icon: Smartphone,
    title: 'Set up their new device',
    description:
      'A calm, step-by-step walkthrough for unboxing a phone, tablet, or computer — including the settings to change before you hand it over.',
    to: '/guides/set-up-new-iphone-for-senior',
  },
  {
    icon: Monitor,
    title: 'Set up remote help',
    description:
      'Install one of the free tools that lets you see their screen from your house so you can fix problems without a car trip.',
    to: '/guides/set-up-remote-help',
  },
  {
    icon: ShieldCheck,
    title: 'Make their device senior-friendly',
    description:
      'Bigger text, simpler home screen, easier-to-find apps, and the accessibility settings most people miss.',
    to: '/guides/senior-friendly-phone-setup',
  },
  {
    icon: MessageCircle,
    title: 'Have the hard conversations',
    description:
      'Scripts for talking about passwords, scams, and when to ask for help — without damaging their independence or your relationship.',
    to: '/guides/difficult-tech-conversations',
  },
];

// ─── Common Situations accordion ─────────────────────────────────────────────

const situations = [
  {
    id: 'same-question',
    q: 'They keep calling me with the same question',
    a: [
      'This is almost always because the answer did not stick — not because they are not listening. Write the steps down in large print and tape them near the device.',
      'Better yet, record a short screen recording on your phone and text it to them. They can watch it as many times as they need without calling.',
      'Our printable Quick Reference Cards are built for exactly this — one card per task, large type, no jargon.',
    ],
    cta: { to: '/quick-reference-cards', label: 'Print a quick reference card' },
  },
  {
    id: 'falling-for-scams',
    q: "They've been falling for scams",
    a: [
      'Start from a place of empathy, not embarrassment. Scammers are professionals — this can happen to anyone, and shame makes people hide the next one.',
      'Walk through the Scam Defense Center with them. Focus on one rule: anyone who contacts you first and asks for money or account info is a scammer until proven otherwise.',
      'If money has already been sent, act fast — freeze credit, call the bank, and report to the FTC. Our scam recovery guide has the exact phone numbers to call.',
    ],
    cta: { to: '/scam-defense', label: 'Open the Scam Defense Center' },
  },
  {
    id: 'phone-confusing',
    q: 'Their phone feels confusing',
    a: [
      'Turn on simplified mode. iPhone Assistive Access, Android Simple Mode, or Samsung Easy Mode shrink the phone down to only the apps they actually use.',
      'Remove apps they do not use. A cluttered home screen is the number one cause of phone anxiety for older users.',
      'Increase the text size to "Large" or "Larger" in Settings. Almost everyone benefits, and almost nobody thinks to change it.',
    ],
    cta: { to: '/accessibility', label: 'Accessibility features guide' },
  },
  {
    id: 'forgot-password',
    q: 'They forgot their password again',
    a: [
      'A password manager solves this forever. One master password unlocks the rest, and most of them have a family sharing feature so you can help without knowing their logins.',
      'If they resist a password manager, a written notebook kept in a safe spot at home is better than reused passwords. Just keep it offline.',
      'For accounts they rarely use, teach them the "forgot password" flow. It is almost always faster than remembering.',
    ],
    cta: { to: '/guides/password-manager-for-seniors', label: 'Set up a password manager' },
  },
  {
    id: 'cannot-see',
    q: "They can't see the screen well",
    a: [
      'Turn on larger text system-wide and enable Display Zoom on iPhone. Most people only need a few minutes in Settings → Display.',
      'Teach them the two-finger pinch gesture and browser zoom shortcut (Ctrl/Cmd and +). It helps in every app, including email and the web.',
      'Dark mode reduces glare and is easier on tired eyes in the evening. Worth trying even if they have always used light mode.',
    ],
    cta: { to: '/accessibility#vision', label: 'See vision features' },
  },
  {
    id: 'distrust-tech',
    q: "They don't trust technology",
    a: [
      'Their distrust is usually earned — from a scam, a confusing interface, or an update that moved everything. Do not dismiss it.',
      'Start with the thing they actually want to do. "Let me show you how to video call your grandkids" works better than "Let me teach you your phone."',
      'Never take over. Put the device in their hands and talk them through it. Doing it for them confirms their worst fear: that they cannot.',
    ],
    cta: { to: '/tech-anxiety', label: 'Tech anxiety resources' },
  },
  {
    id: 'different-states',
    q: 'We live in different states',
    a: [
      'Set up remote desktop software now, before there is an emergency. TeamViewer QuickSupport and Chrome Remote Desktop are both free for family use.',
      'Enable Family Sharing (iPhone) or Family Link (Android) so you can help manage their Apple ID or Google account without logging in as them.',
      'Share your real-time location with each other through Find My or Life360. It is less about surveillance and more about knowing everyone got home.',
    ],
    cta: { to: '/guides/remote-tech-support-long-distance', label: 'Long-distance tech support' },
  },
  {
    id: 'may-have-been-scammed',
    q: 'They may have been scammed',
    a: [
      'Move fast but stay calm. Reassure them — scammers are skilled, this is not their fault, and hiding it makes it worse.',
      'Immediate steps: call the bank, freeze credit at all three bureaus, change passwords on any accounts that were accessed, and file a report at reportfraud.ftc.gov.',
      'If remote access software was installed, assume the computer is compromised. Unplug it from the internet and have a professional wipe it before using again.',
    ],
    cta: { to: '/guides/scam-recovery-steps', label: 'Scam recovery playbook' },
  },
];

// ─── Tools for caregivers ────────────────────────────────────────────────────

const caregiverTools = [
  {
    icon: Users,
    title: 'Apple Family Sharing',
    description:
      'Share subscriptions, locations, and screen time with up to six family members. The best way to help manage an Apple ID without sharing the password.',
    to: '/guides/set-up-family-sharing-apple',
  },
  {
    icon: Users,
    title: 'Google Family Link',
    description:
      'Google\'s version — manage apps, screen time, and account recovery for Android users in the family, including older adults who opt in.',
    to: '/guides/google-family-link-setup',
  },
  {
    icon: Monitor,
    title: 'Remote desktop tools',
    description:
      'TeamViewer QuickSupport and Chrome Remote Desktop let you see their screen from anywhere. Free for personal and family use.',
    to: '/guides/remote-desktop-for-family',
  },
  {
    icon: Map,
    title: 'Life360 for families',
    description:
      'Real-time location sharing, driving alerts, and an SOS button. Popular with adult children of aging parents and honestly useful for peace of mind.',
    to: '/guides/life360-for-seniors',
  },
  {
    icon: HeartPulse,
    title: 'Medical ID on phone',
    description:
      'Set up emergency medical info that first responders can see from the lock screen — medications, allergies, emergency contacts, blood type.',
    to: '/guides/medical-id-iphone',
  },
  {
    icon: Siren,
    title: 'Emergency SOS setup',
    description:
      'Configure Emergency SOS on iPhone and Android so they can call for help and alert you with a single button press or hold.',
    to: '/guides/emergency-sos-setup',
  },
];

// ─── Talk to them about... ───────────────────────────────────────────────────

const scripts = [
  {
    icon: KeyRound,
    topic: 'Passwords',
    intro: 'The "why" matters more than the "what."',
    script:
      '"A lot of people use the same password for everything, and I used to too. But if one website gets hacked, every account gets opened. I want to help you pick a safer way to keep track — a password manager, or a notebook you keep at home. Which sounds better to you?"',
  },
  {
    icon: Wallet,
    topic: 'Money scams',
    intro: 'Be calm, be specific, and never imply they are naive.',
    script:
      '"Scams have gotten really convincing lately — some of them fool people like my coworker who works in tech. The rule I try to follow is: if someone calls, texts, or emails me first and asks for money or a gift card or account info, I hang up and call back using the number on the back of my card. Want me to show you how that looks in practice?"',
  },
  {
    icon: Scale,
    topic: "When it's time for help",
    intro: "This one is about their autonomy, not your convenience.",
    script:
      '"I am not here to take anything over. I only want you to have more help available when you want it. What does help look like to you? Would you want me to be able to see your screen if something goes wrong, or would you rather I only step in when you call?"',
  },
  {
    icon: Gift,
    topic: 'Digital legacy',
    intro: 'The sooner, the better — and it gives them control.',
    script:
      '"Both of us are going to have accounts someday that nobody else can get into. Apple and Google and Facebook actually let you pick someone who can reach them if something happens to you. Can we set that up for both of us? I\'d feel better knowing we did it together."',
  },
];

export default function CaregiverHub() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Caregiver Tech Hub — Helping a Loved One with Technology | TekSure"
        description="Real advice for helping a parent, grandparent, or friend with technology — without taking over. Common situations, plain-language scripts, and the tools that actually help."
        path="/caregiver-hub"
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="container max-w-3xl text-center py-16 md:py-20">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
              <HeartHandshake className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Helping Someone You Love With Technology
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Whether you're helping a parent, grandparent, or friend, this is your starting point.
              Real advice, not generic tips.
            </p>
          </div>
        </section>

        {/* Start Here */}
        <section className="container max-w-6xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Start here</h2>
            <p className="text-muted-foreground">
              Four things that make everything else easier. Do these first and the rest gets
              calmer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {startHere.map((item) => (
              <Card
                key={item.title}
                className="rounded-2xl border border-border bg-card hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Open guide
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Common Situations */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-4xl py-14">
            <div className="mb-8">
              <Badge variant="outline" className="mb-3 bg-background">
                Common situations
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                You are not the first person to deal with this
              </h2>
              <p className="text-muted-foreground">
                Eight of the most common caregiver situations, with what to actually do — not
                what to feel.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {situations.map((s) => (
                <AccordionItem
                  key={s.id}
                  value={s.id}
                  className="rounded-2xl border border-border bg-card px-5 data-[state=open]:border-primary/40"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold text-foreground pr-4">{s.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      {s.a.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-xl gap-2 mt-4"
                    >
                      <Link to={s.cta.to}>
                        {s.cta.label}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Tools for Caregivers */}
        <section className="container max-w-6xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Tools for caregivers
            </h2>
            <p className="text-muted-foreground">
              Six real tools — not apps we get paid to mention. Every one of these has a free tier
              that covers a family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {caregiverTools.map((tool) => (
              <Card
                key={tool.title}
                className="rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors"
              >
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center shrink-0">
                      <tool.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground leading-snug pt-1.5">
                      {tool.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {tool.description}
                  </p>
                  <Link
                    to={tool.to}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    <LinkIcon className="h-3.5 w-3.5" />
                    How to set it up
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Talk to them about... */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <Badge variant="outline" className="mb-3 bg-background">
                Talk to them about...
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Scripts for the conversations that matter
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                The words you use matter as much as the settings you change. Steal these directly
                — they are written to be said out loud, not recited.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {scripts.map((s) => (
                <Card
                  key={s.topic}
                  className="rounded-2xl border border-border bg-card"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-xl bg-primary/10 w-10 h-10 flex items-center justify-center shrink-0">
                        <s.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{s.topic}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground/90 italic mb-3">{s.intro}</p>
                    <blockquote className="border-l-2 border-primary/40 pl-4 text-sm text-foreground/90 leading-relaxed">
                      {s.script}
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Free resources + Community */}
        <section className="container max-w-5xl py-14">
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="rounded-2xl border border-border bg-card">
              <CardContent className="p-6 md:p-8">
                <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center mb-4">
                  <Gift className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Free programs for seniors
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Affordable Connectivity, discounted phone plans, free tablet programs from AARP,
                  and local library tech classes. Real programs, with real eligibility rules.
                </p>
                <Button asChild className="rounded-xl gap-2">
                  <Link to="/free-resources">
                    See free resources
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-border bg-card">
              <CardContent className="p-6 md:p-8">
                <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center mb-4">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Caregiver community</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Ask questions, share what worked, and learn from other people doing exactly what
                  you are doing. Moderated, free, and no judgment.
                </p>
                <Button asChild variant="outline" className="rounded-xl gap-2">
                  <Link to="/forum">
                    Visit the forum
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <Card className="rounded-2xl border border-border bg-primary/5 mt-10">
            <CardContent className="p-8 md:p-10 text-center">
              <HeartHandshake className="h-8 w-8 text-primary mx-auto mb-3" />
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                You do not have to figure this out alone
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Book a TekSure session on behalf of someone you care for. Tell us what is going on
                in the notes and we'll tailor our approach.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button asChild size="lg" className="rounded-xl gap-2">
                  <Link to="/get-help">
                    <Phone className="h-4 w-4" />
                    Book support for them
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link to="/tech-anxiety">Tech anxiety resources</Link>
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
