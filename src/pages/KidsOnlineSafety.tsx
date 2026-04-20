import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Baby,
  ShieldCheck,
  AlertTriangle,
  MessageCircle,
  ExternalLink,
  Smartphone,
  Users,
  Heart,
  Lock,
  Eye,
  ArrowRight,
  Phone,
} from 'lucide-react';

type AgeGroup = {
  id: string;
  label: string;
  ages: string;
  intro: string;
  bullets: string[];
};

const ageGroups: AgeGroup[] = [
  {
    id: 'early',
    label: '0–5 years',
    ages: 'Toddlers & preschool',
    intro:
      'AAP guidance: under 18 months avoid screens (except video chat). 18–24 months — only high-quality programming, watched together. Ages 2–5 — limit to 1 hour/day with a parent.',
    bullets: [
      'Cocomelon and similar fast-cut shows are linked in early research to attention issues — co-view and pause to talk about what is happening.',
      'YouTube Kids is safer than YouTube but still has gaps. Stick to PBS Kids, Sesame Street, and curated channels rather than the autoplay feed.',
      'Co-viewing matters more than the content. Ask "what is the bear feeling?" and turn it into language practice.',
      'No screens during meals, in the bedroom, or in the hour before sleep. The blue-light effect is real for kids.',
    ],
  },
  {
    id: 'middle',
    label: '6–9 years',
    ages: 'Early elementary',
    intro:
      'This is the age of "first device." A locked-down tablet for video calls and educational apps is a great training-wheel before a phone. Browsing should be supervised — sit next to them.',
    bullets: [
      'Use kid accounts on YouTube Kids, Apple Family Sharing, or Google Family Link — not your adult account.',
      'Stick to age-rated games (Roblox is rated 7+ but the chat features need supervision — see Threats section).',
      'Set Screen Time / Family Link limits BEFORE handing over the device. It is much harder to roll back later.',
      'Talk about the rule "if anyone online ever asks you to keep a secret from us, tell us right away." Repeat it monthly.',
    ],
  },
  {
    id: 'tween',
    label: '10–13 years',
    ages: 'Tween / middle school',
    intro:
      'The phone conversation. Most kids in this range get one — averaging age 11 in the US. Decide as a family if a basic flip phone, a kid phone (Gabb, Pinwheel), or a locked-down smartphone fits best.',
    bullets: [
      'Federal COPPA law sets 13 as the minimum age for most social media. TikTok, Instagram, Snapchat, and Discord all officially require 13+. Verify the account birthdate.',
      'Use a written phone contract — when it gets put away, what is allowed, what gets it taken away. Common Sense Media has free templates.',
      'Install monitoring (Bark, Qustodio, Family Link) BEFORE handing over the phone, with the kid present. Transparency builds trust.',
      'Talk about screenshots. "Anything you send can be screenshotted by anyone — including your friends — forever."',
    ],
  },
  {
    id: 'teen',
    label: '14–17 years',
    ages: 'High school',
    intro:
      'The shift from monitoring to coaching. Heavy surveillance at this age tends to push behavior underground. Trust + transparency + open conversations work better than spyware.',
    bullets: [
      'Move from "I can read everything" to "I can spot-check, and we will talk about what I find." This honesty is what teens actually respect.',
      'Have the privacy conversation: who can see their data, why platforms profit from it, why a 7-year text history is searchable forever.',
      'Sextortion is a fast-growing threat for teen boys especially — see the Threats section. They need to know they will not be in trouble for telling you.',
      'Help them set their own boundaries — Do Not Disturb during homework, charging the phone outside the bedroom at night, deleting apps they are losing hours to.',
    ],
  },
];

type Tool = {
  name: string;
  platform: string;
  url: string;
  description: string;
  cost: string;
};

const setupTools: Tool[] = [
  {
    name: 'iPhone Screen Time',
    platform: 'iOS',
    url: 'https://support.apple.com/HT201304',
    description: 'Built into every iPhone and iPad. Set daily limits, schedule downtime, restrict adult content, and require approval for app installs.',
    cost: 'Free',
  },
  {
    name: 'Android Family Link',
    platform: 'Android',
    url: 'https://families.google.com/familylink/',
    description: 'Google\'s official kid-account tool. App approvals, screen-time limits, location sharing, and bedtime locks.',
    cost: 'Free',
  },
  {
    name: 'YouTube Kids',
    platform: 'iOS / Android / TV',
    url: 'https://www.youtubekids.com',
    description: 'Separate from adult YouTube. Pre-vetted videos, no comments, no autoplay if you turn it off. Safer for under-9 — older kids will quickly want regular YouTube.',
    cost: 'Free',
  },
  {
    name: 'Apple Family Sharing',
    platform: 'iOS / Mac',
    url: 'https://www.apple.com/family-sharing/',
    description: 'Share apps and subscriptions across the family, set up child Apple IDs, require purchase approval, and locate family devices.',
    cost: 'Free',
  },
  {
    name: 'Bark',
    platform: 'iOS / Android',
    url: 'https://www.bark.us',
    description: 'AI-powered monitoring across 30+ apps including text, email, social media. Alerts parents to bullying, predators, suicide risk, and explicit content.',
    cost: '$14/mo',
  },
  {
    name: 'Qustodio',
    platform: 'iOS / Android / Mac / Windows',
    url: 'https://www.qustodio.com',
    description: 'Strong web filtering, app blocking, and time limits. Better cross-device coverage than Apple/Google built-ins.',
    cost: 'From $55/yr',
  },
  {
    name: 'Life360',
    platform: 'iOS / Android',
    url: 'https://www.life360.com',
    description: 'Family location sharing — knowing the kid arrived at school, knowing the teen is driving safely. Free tier covers location; paid adds driving reports and emergency dispatch.',
    cost: 'Free / $8 mo',
  },
];

type Threat = {
  icon: typeof AlertTriangle;
  name: string;
  description: string;
  signs: string;
};

const threats: Threat[] = [
  {
    icon: AlertTriangle,
    name: 'Predators on social media',
    description:
      'Adults posing as peers in DMs on Instagram, Snapchat, Discord, and gaming chats. They build trust over weeks before asking for photos or in-person meetings.',
    signs: 'Warning signs: a new "friend" your child cannot describe meeting in real life, secretive phone use, hiding the screen when you walk by, or a new gift-card or money request.',
  },
  {
    icon: MessageCircle,
    name: 'Cyberbullying',
    description:
      'Group chats, anonymous apps, and Snapchat are the main venues. A kid can be excluded, mocked, or threatened — often by classmates — with the parents none the wiser.',
    signs: 'Warning signs: sudden mood drop after using the phone, refusing to go to school, deleting accounts, withdrawing from friends. Save screenshots before deleting anything.',
  },
  {
    icon: Lock,
    name: 'Sextortion',
    description:
      'A fast-growing threat targeting teen boys especially. Predator poses as a girl, gets a nude photo, then threatens to send it to family and friends unless paid. The FBI has issued multiple warnings.',
    signs: 'Tell your kid: "If this ever happens, you will not be in trouble. Do not pay. Stop talking to them. Tell us or another adult right away. We will fix it." See CyberTipline below.',
  },
  {
    icon: Eye,
    name: 'Inappropriate content',
    description:
      'Pornography, violence, and self-harm content are reachable in 2 clicks on most apps. The dopamine hit of shocking content keeps young brains pulled in.',
    signs: 'Use Screen Time/Family Link content filters, set DNS-level filtering at home (NextDNS, Cloudflare for Families), and have age-appropriate conversations rather than pretending it does not exist.',
  },
  {
    icon: Users,
    name: 'Gaming dangers (Roblox, Fortnite, Discord)',
    description:
      'These platforms are not the games themselves — they are social platforms with games attached. Voice chat with strangers, Robux scams, and predator contact through chat are all real.',
    signs: 'Disable open voice chat, use parental account linking on Roblox, restrict Discord DMs to friends only, and play with your kid for an hour to see the chat culture firsthand.',
  },
  {
    icon: Heart,
    name: 'TikTok and Instagram mental health',
    description:
      'Years of research now connect heavy use, especially in tween and teen girls, to anxiety, body image issues, and depression. The infinite scroll and algorithmic comparison are designed to capture attention, not protect kids.',
    signs: 'Use built-in time limits in each app, encourage following accounts that post real life rather than highlight reels, and watch for sudden changes in self-image talk.',
  },
];

const conversationGuides = [
  {
    title: '"Why I want to know your passwords"',
    script:
      '"This is not about not trusting you. It is about being able to help if something goes wrong — like if your account gets hacked, or someone is bothering you, or there is an emergency. I will not snoop without telling you. I promise."',
  },
  {
    title: '"If you ever see something that scares you..."',
    script:
      '"You will never be in trouble for telling me. I would rather know about anything weird — even if you broke a rule to find it. We will figure it out together. The only mistake is keeping it to yourself."',
  },
  {
    title: '"Strangers online are strangers"',
    script:
      '"If a person you have never met in real life starts being your friend online, that is something to be careful about. Anyone can pretend to be anyone. If they ask for a photo, ask you to keep a secret, or want to meet up — tell me right away."',
  },
  {
    title: '"Nothing you send ever really disappears"',
    script:
      '"Snapchats can be screenshotted. Texts can be saved. Even after you delete them, the other person can have a copy forever. Before you send anything you would not want grandma or your principal to see — pause. That is the rule."',
  },
];

const emergencyResources = [
  {
    name: 'CyberTipline',
    url: 'https://report.cybertip.org',
    description: 'Run by NCMEC. Report online crimes against children — sextortion, exploitation, predator contact. Reviewed 24/7. Often the fastest route to police involvement.',
    phone: '1-800-843-5678',
  },
  {
    name: 'Common Sense Media',
    url: 'https://www.commonsensemedia.org',
    description: 'Independent age and content reviews for every show, movie, app, and game. Search before you let your kid watch or download anything.',
  },
  {
    name: 'ConnectSafely',
    url: 'https://www.connectsafely.org',
    description: 'Non-profit that publishes plain-English parent guides for every major app and platform. Updated regularly as features change.',
  },
];

export default function KidsOnlineSafety() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Kids Online Safety Hub — Keep Children Safe on Phones, Tablets & Computers | TekSure"
        description="A practical parent guide to raising kids in the digital age — age-by-age guidance, parental controls, the real threats, and conversation scripts that work."
        path="/kids-online-safety"
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="container max-w-3xl text-center py-16 md:py-20">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
              <ShieldCheck className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Raising Kids in the Digital Age
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              A practical parent guide to phones, tablets, social media, and the conversations that keep kids safer — without surveillance.
            </p>
          </div>
        </section>

        {/* Age-Based Guidance */}
        <section className="container max-w-5xl py-12 md:py-16">
          <div className="mb-8 text-center">
            <Badge variant="outline" className="mb-3">AGE-BASED GUIDANCE</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">What works at each age</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The right approach for a 4-year-old is wrong for a 14-year-old. Pick your kid\'s age below.
            </p>
          </div>

          <Tabs defaultValue="early" className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 bg-muted/40 p-2 rounded-2xl h-auto">
              {ageGroups.map((g) => (
                <TabsTrigger key={g.id} value={g.id} className="rounded-xl flex-col py-3 h-auto">
                  <span className="font-semibold">{g.label}</span>
                  <span className="text-xs text-muted-foreground">{g.ages}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {ageGroups.map((g) => (
              <TabsContent key={g.id} value={g.id} className="mt-6">
                <Card className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center shrink-0">
                        <Baby className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{g.label} — {g.ages}</h3>
                        <p className="text-muted-foreground leading-relaxed">{g.intro}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {g.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="rounded-full bg-primary/10 text-primary text-xs font-bold w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <p className="text-sm text-muted-foreground leading-relaxed flex-1">{b}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Essential Setup */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-6xl py-12 md:py-16">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <Badge variant="outline" className="mb-3">ESSENTIAL SETUP</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                The tools that actually work
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A mix of built-in (free) controls and paid monitoring services. Pick what fits your family.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {setupTools.map((t) => (
                <Card key={t.name} className="rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
                  <CardContent className="p-5 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{t.name}</h3>
                        <p className="text-xs text-muted-foreground/80">{t.platform}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs shrink-0">{t.cost}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{t.description}</p>
                    <Button asChild variant="outline" size="sm" className="rounded-xl gap-2 self-start">
                      <a href={t.url} target="_blank" rel="noopener noreferrer">
                        Visit
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Big Threats */}
        <section className="container max-w-6xl py-12 md:py-16">
          <div className="mb-8 text-center">
            <Badge variant="outline" className="mb-3">THE BIG THREATS</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              What actually puts kids at risk
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The honest list — what to watch for, what to do about it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {threats.map((t) => (
              <Card key={t.name} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="rounded-lg bg-rose-50 dark:bg-rose-950/40 p-2 shrink-0">
                      <t.icon className="h-4 w-4 text-rose-700 dark:text-rose-300" />
                    </div>
                    <h3 className="font-semibold text-foreground">{t.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{t.description}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed bg-muted/40 rounded-xl p-3">
                    {t.signs}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Conversation Guides */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-4xl py-12 md:py-16">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <Badge variant="outline" className="mb-3">CONVERSATION GUIDES</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Scripts for the hard talks
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Borrow these word-for-word, or use them as a starting point. The exact wording matters less than having the talk.
              </p>
            </div>

            <div className="space-y-4">
              {conversationGuides.map((c) => (
                <Card key={c.title} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-3">{c.title}</h3>
                    <blockquote className="text-sm text-muted-foreground leading-relaxed italic border-l-4 border-primary/40 pl-4">
                      {c.script}
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Resources */}
        <section className="container max-w-5xl py-12 md:py-16">
          <div className="mb-8 text-center">
            <Badge variant="outline" className="mb-3">EMERGENCY RESOURCES</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              When you need help right now
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {emergencyResources.map((r) => (
              <Card key={r.name} className="rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
                <CardContent className="p-5 flex flex-col h-full">
                  <h3 className="font-semibold text-foreground mb-2">{r.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{r.description}</p>
                  <div className="space-y-2">
                    {r.phone && (
                      <Button asChild variant="default" size="sm" className="rounded-xl gap-2 w-full">
                        <a href={`tel:${r.phone.replace(/-/g, '')}`}>
                          <Phone className="h-3.5 w-3.5" />
                          {r.phone}
                        </a>
                      </Button>
                    )}
                    <Button asChild variant="outline" size="sm" className="rounded-xl gap-2 w-full">
                      <a href={r.url} target="_blank" rel="noopener noreferrer">
                        Visit site
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* For Grandparents */}
        <section className="container max-w-4xl pb-16">
          <Card className="rounded-2xl border border-primary/20 bg-primary/5">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 w-12 h-12 flex items-center justify-center shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <Badge variant="outline" className="mb-2 bg-background/60">FOR GRANDPARENTS</Badge>
                  <h3 className="text-xl font-bold text-foreground mb-3">A special note for grandparents</h3>
                  <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                    <p>
                      Grandparents often have the trust kids do not extend to parents — you can be the safe adult a child tells when something has gone wrong online.
                    </p>
                    <p>
                      You do not need to be a tech expert. You just need to know the basics: ask what apps they are using, what they like about them, and who they talk to. Listen without judgment so they keep talking.
                    </p>
                    <p>
                      If you are caring for grandkids regularly, ask the parents what controls are set on the devices and what the family rules are. Then back them up.
                    </p>
                  </div>
                  <Button asChild variant="outline" className="rounded-xl gap-2 mt-4">
                    <Link to="/caregiver-hub">
                      Visit our Caregiver Hub
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
