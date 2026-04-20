import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Languages,
  BookOpen,
  Settings,
  Smartphone,
  Building2,
  GraduationCap,
  Users,
  ShieldAlert,
  Globe,
  ArrowRight,
  Camera,
  MessageCircle,
  Mic,
  Volume2,
  Phone,
  Heart,
  AlertTriangle,
} from 'lucide-react';

const translationTools = [
  {
    icon: Camera,
    name: 'Google Translate',
    description:
      'Free. Point your camera at a sign, menu, or letter to see it in your language right away. Also has a conversation mode — you and someone else can speak and it translates both ways.',
    tip: 'Download your language for offline use — works without internet.',
  },
  {
    icon: MessageCircle,
    name: 'Apple Translate',
    description:
      'Built into every iPhone. Open the Translate app. Works for text, voice, and conversations. No extra app to install.',
    tip: 'Ask Siri: "Translate hello to Spanish" and it will speak it for you.',
  },
  {
    icon: Globe,
    name: 'Microsoft Translator',
    description:
      'Free. Strong offline mode — good for places with no WiFi. Can translate a whole group conversation where each person uses their own phone.',
    tip: 'Download the language packs at home before you travel or visit an appointment.',
  },
  {
    icon: Languages,
    name: 'DeepL',
    description:
      'Free for short text. The most natural-sounding translations for written documents — letters from school, work emails, government forms.',
    tip: 'Use this for important written things. It sounds less robotic than other tools.',
  },
];

const learningApps = [
  {
    name: 'Duolingo',
    description:
      'Free. 5 minutes a day. Games and short lessons. The most popular app in the world for learning English. Works on any phone.',
    price: 'Free (paid version removes ads)',
  },
  {
    name: 'Babbel',
    description:
      'Paid ($13/month). Lessons are built by real teachers. Good for adults who want serious grammar and conversation practice.',
    price: 'Around $13/month',
  },
  {
    name: 'Rosetta Stone',
    description:
      'Paid. Learn by hearing and seeing — no translation. Best if you want to think in English, not just memorize words.',
    price: '$12/month or $180 lifetime',
  },
  {
    name: 'Mango Languages',
    description:
      'FREE through most public libraries in the United States. Ask your librarian — you just need a library card. High-quality lessons for 70+ languages.',
    price: 'FREE with library card',
  },
  {
    name: 'Drops',
    description:
      'Free (5 minutes a day). Learn vocabulary with pictures. Good for beginners who want to build up words fast.',
    price: 'Free (or $10/month unlimited)',
  },
  {
    name: 'BBC Learning English',
    description:
      'Completely free. News stories and videos in simpler English. Great for practicing listening to real-world English.',
    price: 'Free',
  },
  {
    name: 'VOA Learning English',
    description:
      "Free. Voice of America news, read slowly and clearly. Every story has the written words so you can follow along.",
    price: 'Free',
  },
];

const phoneSettings = [
  {
    icon: Settings,
    title: 'Change your phone language',
    description:
      'You can set your phone to your first language and still use English apps. On iPhone: Settings → General → Language & Region. On Android: Settings → System → Languages.',
  },
  {
    icon: MessageCircle,
    title: 'Turn on spell check',
    description:
      'Your phone will underline English words that may be wrong. Tap the word to see suggestions. This helps you learn as you type.',
  },
  {
    icon: Mic,
    title: 'Use voice dictation',
    description:
      'Instead of typing, hold the microphone key on the keyboard and speak. Your phone will write it for you. A great way to practice speaking.',
  },
  {
    icon: Volume2,
    title: 'Hear English pronounced',
    description:
      'Highlight any English word on your phone and choose "Speak" or "Pronounce". You will hear how native speakers say it. Practice repeating after it.',
  },
];

const eslApps = [
  {
    name: 'News in Levels',
    description:
      'Read the same news story at Level 1 (very simple), Level 2 (medium), or Level 3 (normal). Start at Level 1 and work up.',
    url: 'newsinlevels.com',
  },
  {
    name: 'Learn English (BBC)',
    description:
      'Free app from the British BBC. Short videos, vocabulary games, and grammar lessons for every level.',
    url: 'BBC Learning English app',
  },
  {
    name: 'LingQ',
    description:
      'Read books, news, and stories in English. Tap any word you do not know — it saves it so you can practice later.',
    url: 'lingq.com',
  },
];

const governmentServices = [
  {
    name: 'USCIS (Immigration)',
    description:
      'Check your case status, file forms, and find forms in Spanish, Chinese, Vietnamese, Korean, Tagalog, Haitian Creole, Russian, and more.',
    phone: '1-800-375-5283 (press 2 for Spanish)',
    website: 'uscis.gov',
  },
  {
    name: 'IRS (Taxes)',
    description:
      'The IRS has free help in many languages. They will never call you first to ask for money. If you get a call like that, it is a scam.',
    phone: '1-800-829-1040 (Spanish), 1-800-829-4059 (TTY)',
    website: 'irs.gov/espanol',
  },
  {
    name: 'Social Security',
    description:
      'Apply for a Social Security number, check benefits, and find forms in 17+ languages at ssa.gov/language-support.',
    phone: '1-800-772-1213 (say "Spanish" for a Spanish speaker)',
    website: 'ssa.gov/language-support',
  },
];

const freeClasses = [
  {
    name: 'USA Learns',
    description:
      'Completely free online English classes built by the US Department of Education. Three full courses — beginner, intermediate, and citizenship prep. No sign-up fee ever.',
    url: 'usalearns.org',
  },
  {
    name: 'Your local library',
    description:
      'Most public libraries offer free ESL classes, conversation groups, and one-on-one tutoring. Walk in and ask — they are happy to help. Libraries also have free books in many languages.',
    url: 'Visit your nearest library',
  },
  {
    name: 'Citizenship.gov',
    description:
      'Free study materials for the US Citizenship test. The 100 questions, practice tests, and videos — all free from the government.',
    url: 'uscis.gov/citizenship',
  },
];

const warningSigns = [
  'Someone calls and says they are from USCIS, IRS, or Social Security and asks for money or gift cards. This is always a scam. The government never calls to ask for money.',
  'A "notario" offers legal help for immigration. In many countries "notario" means lawyer. In the US, a notario is NOT a lawyer. Only a real lawyer (abogado) can help with your case.',
  'Someone says you will be deported if you do not pay right now. Real government officers do not do this. Hang up and call the real number on the official website.',
  'You get an email or text that looks like it is from the government, with a link to click. Never click. Type the real website address into your browser yourself.',
  'Someone offers to "fix" your immigration status fast for a big fee in cash. Real immigration help has real paperwork and takes time. Cash-only, fast, and secret means scam.',
];

const languageResources = [
  {
    lang: 'Español (Spanish)',
    resources: [
      'TekSure en español: /guias',
      'USAGov en español: usa.gov/espanol',
      'IRS en español: 1-800-829-1040',
    ],
  },
  {
    lang: '中文 (Mandarin)',
    resources: [
      'USAGov Chinese: usa.gov/chinese',
      'USCIS Chinese materials',
      'Social Security: 1-800-772-1213 (press 3 for Chinese)',
    ],
  },
  {
    lang: 'Tiếng Việt (Vietnamese)',
    resources: [
      'USAGov Vietnamese section',
      'USCIS Vietnamese translations',
      'Vietnamese-American community centers',
    ],
  },
  {
    lang: 'العربية (Arabic)',
    resources: [
      'USAGov Arabic resources',
      'Arab American Family Services',
      'Local Islamic community centers',
    ],
  },
  {
    lang: 'Tagalog (Filipino)',
    resources: [
      'USAGov Tagalog content',
      'Filipino community centers',
      'SSA Tagalog support line',
    ],
  },
  {
    lang: 'Русский (Russian)',
    resources: [
      'USAGov Russian section',
      'Russian-speaking legal aid in major cities',
      'Local Russian community organizations',
    ],
  },
  {
    lang: '한국어 (Korean)',
    resources: [
      'USAGov Korean materials',
      'Korean American Community Services',
      'Local Korean-American family centers',
    ],
  },
];

export default function EslTechHub() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Tech Help in Simple English — For Non-Native Speakers | TekSure"
        description="Technology help in very clear, simple English. Translation apps, free English classes, language settings, and protection from scams that target new immigrants."
        path="/esl-tech-hub"
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="container max-w-3xl text-center py-16 md:py-20">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
              <Languages className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Technology Help in Simple English
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              You don't need perfect English to use technology. These tools make it easier.
            </p>
          </div>
        </section>

        {/* Translation Tools */}
        <section className="container max-w-6xl py-14">
          <div className="mb-8">
            <Badge variant="outline" className="mb-3">Start here</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Translation tools every phone has
            </h2>
            <p className="text-muted-foreground">
              These apps are free. They are already on your phone or you can install them in one
              minute. They work for text, pictures, and speaking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {translationTools.map((tool) => (
              <Card key={tool.name} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center shrink-0">
                      <tool.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground pt-1.5">{tool.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {tool.description}
                  </p>
                  <p className="text-xs text-foreground/80 bg-primary/5 rounded-lg p-3 border border-primary/10">
                    <strong>Quick Tip:</strong> {tool.tip}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Language Learning Apps */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-6xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Language learning apps
              </h2>
              <p className="text-muted-foreground">
                Free and paid apps that teach English. Start with the free ones. The best one is
                the one you will use every day.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {learningApps.map((app) => (
                <Card key={app.name} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <h3 className="font-semibold text-foreground">{app.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {app.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">{app.price}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Phone Settings */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              English-friendly phone settings
            </h2>
            <p className="text-muted-foreground">
              Change these settings once and your phone helps you learn every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {phoneSettings.map((setting) => (
              <Card key={setting.title} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center shrink-0">
                      <setting.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{setting.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {setting.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ESL-Designed Apps */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Simple apps made for English learners
              </h2>
              <p className="text-muted-foreground">
                These apps use simpler English on purpose. You will understand more from the start.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {eslApps.map((app) => (
                <Card key={app.name} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <Smartphone className="h-5 w-5 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{app.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {app.description}
                    </p>
                    <p className="text-xs text-primary font-medium">{app.url}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Government Services */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Accessing government services
            </h2>
            <p className="text-muted-foreground">
              The US government offers free help in many languages. These are the real, official
              numbers and websites.
            </p>
          </div>

          <div className="space-y-4">
            {governmentServices.map((service) => (
              <Card key={service.name} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center shrink-0">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="inline-flex items-center gap-1.5 text-foreground/80">
                          <Phone className="h-3.5 w-3.5" /> {service.phone}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-primary">
                          <Globe className="h-3.5 w-3.5" /> {service.website}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Free English Classes */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Free English classes
              </h2>
              <p className="text-muted-foreground">
                Real classes. No cost. No tricks. Made by the US government and local libraries.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {freeClasses.map((cls) => (
                <Card key={cls.name} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-6">
                    <GraduationCap className="h-6 w-6 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{cls.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {cls.description}
                    </p>
                    <p className="text-xs text-primary font-medium">{cls.url}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="container max-w-4xl py-14">
          <Card className="rounded-2xl border border-border bg-card">
            <CardContent className="p-8">
              <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center mb-4">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">
                Connecting with your community
              </h2>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Your local library</strong> is one of the
                  best places for new Americans. Free WiFi, free computers, help with forms, books
                  in many languages, and often a person who speaks your language.
                </p>
                <p>
                  <strong className="text-foreground">Nextdoor app</strong> connects you with
                  neighbors on your street. Ask questions about trash day, local stores, or where
                  to find things. It is free.
                </p>
                <p>
                  <strong className="text-foreground">Facebook groups</strong> for your community
                  (Spanish-speaking families in your city, Vietnamese community in your state,
                  etc.) can be very helpful. Search on Facebook for your language + your city.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Scam Warning */}
        <section className="bg-destructive/5 border-y border-destructive/20">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <Badge variant="destructive" className="mb-3">Important</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <ShieldAlert className="h-7 w-7 text-destructive" />
                Scams that target new immigrants
              </h2>
              <p className="text-muted-foreground">
                Bad people try to steal money and information from people who are new to this
                country. If you see any of these warning signs — stop and get help from a trusted
                friend or a real lawyer.
              </p>
            </div>

            <div className="space-y-3">
              {warningSigns.map((sign, i) => (
                <Card key={i} className="rounded-2xl border border-destructive/30 bg-background">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground/90 leading-relaxed">{sign}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="rounded-2xl border border-border bg-card mt-6">
              <CardContent className="p-6">
                <p className="text-sm text-foreground/90 leading-relaxed">
                  <strong>If you think you were scammed:</strong> Report it at{' '}
                  <span className="text-primary">reportfraud.ftc.gov</span> (available in Spanish
                  at reportefraude.ftc.gov). It is free. You will not get in trouble with
                  immigration for reporting a scam.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resources by Language */}
        <section className="container max-w-6xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Resources by language
            </h2>
            <p className="text-muted-foreground">
              Official US government websites and trusted community resources in your language.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {languageResources.map((lang) => (
              <Card key={lang.lang} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-3 text-lg">{lang.lang}</h3>
                  <ul className="space-y-2">
                    {lang.resources.map((r, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <ArrowRight className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="container max-w-4xl py-14">
          <Card className="rounded-2xl border border-border bg-primary/5">
            <CardContent className="p-8 md:p-10 text-center">
              <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                You belong here. Technology can help.
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                TekSure has guides written in simple English and in Spanish. Take your time —
                every small step is progress.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button asChild size="lg" className="rounded-xl gap-2">
                  <Link to="/guias">
                    Guías en español
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link to="/guides">All guides</Link>
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
