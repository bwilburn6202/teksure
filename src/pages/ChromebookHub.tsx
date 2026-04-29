import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Laptop,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Zap,
  GraduationCap,
  ArrowRight,
  BookOpen,
  Wrench,
  Gift,
  type LucideIcon,
} from 'lucide-react';

type Recommendation = {
  tier: string;
  model: string;
  price: string;
  takeaway: string;
  icon: LucideIcon;
};

const recommendations: Recommendation[] = [
  {
    tier: 'Budget',
    model: 'Acer Chromebook 315',
    price: '~$280',
    takeaway: 'A reliable everyday Chromebook with a big screen and enough power for web browsing, email, and video calls.',
    icon: Laptop,
  },
  {
    tier: 'Midrange',
    model: 'HP Chromebook 14',
    price: '~$400',
    takeaway: 'A nice step up in build quality and battery life. Fits most households for years.',
    icon: Laptop,
  },
  {
    tier: 'Premium',
    model: 'Framework Chromebook',
    price: '~$800',
    takeaway: 'Repairable, upgradable, and fast. For people who want a high-end machine without Windows or Mac complexity.',
    icon: Zap,
  },
  {
    tier: 'For Seniors',
    model: 'Lenovo IdeaPad Flex 5i Chromebook',
    price: '~$450',
    takeaway: 'Large, backlit keyboard and a touchscreen that folds flat. Friendly for anyone with vision or dexterity challenges.',
    icon: GraduationCap,
  },
  {
    tier: 'For Students',
    model: 'Acer Chromebook Spin 513',
    price: '~$350',
    takeaway: 'Rugged design, long battery life, 2-in-1 hinge. Built to survive backpacks and homework sessions.',
    icon: GraduationCap,
  },
];

const yesChecks = [
  'You mainly browse the web, email, watch videos, and use Google Docs.',
  'You want something simple, secure, and inexpensive.',
  'You want a laptop with long battery life that stays fast for years.',
];

const noChecks = [
  'You edit video professionally or play demanding PC games.',
  'You rely on the desktop versions of Microsoft Office (Excel macros, advanced Word features).',
  'You need Windows-only software for work (specialty tax, medical, or CAD programs).',
];

const basicsGuides = [
  { title: 'What is a Chromebook?', slug: 'what-is-a-chromebook' },
  { title: 'Set up your new Chromebook', slug: 'set-up-new-chromebook' },
  { title: 'Use Google Docs on a Chromebook', slug: 'use-google-docs-chromebook' },
  { title: 'Print from a Chromebook', slug: 'print-from-chromebook' },
];

const worksGreat = [
  'Google apps (Docs, Sheets, Slides, Gmail, Photos)',
  'Web browsing and web apps',
  'Video calling (Zoom, Meet, FaceTime via web)',
  'Streaming video (Netflix, YouTube, Disney+, Max)',
  'Android apps from the Play Store (on newer models)',
  'Linux apps for developers (optional, advanced)',
];

const doesntWork = [
  'Traditional Windows or Mac desktop software',
  'Most PC games (AAA titles, Steam library)',
  'Industry software that requires Windows (some tax, accounting, or medical apps)',
];

const maintenanceTips = [
  {
    title: 'Let it update itself',
    body: 'Chromebooks download updates automatically and install them on restart. You do not need to manage this — just restart it once a week.',
  },
  {
    title: 'Keep it plugged in occasionally',
    body: 'Most Chromebook batteries last 5+ years. Letting it hit 0% often can shorten that. Top it up before it dies.',
  },
  {
    title: 'Clear out old tabs',
    body: 'If it feels slow, close tabs you are not using. Chromebooks love RAM-free space.',
  },
  {
    title: 'Check the auto-update expiration date',
    body: 'Every Chromebook has a date after which it stops getting updates. Search "Auto Update Expiration" + your model to find yours.',
  },
];

export default function ChromebookHub() {
  return (
    <>
      <SEOHead
        title="Chromebook Guide — Everything You Need to Know | TekSure"
        description="Chromebooks are affordable, secure, and surprisingly powerful. Whether you're considering one or already own one, here's everything you need."
        path="/chromebook"
      />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Chromebook Guide' }]} />
        </div>

        {/* Hero */}
        <section className="border-b">
          <div className="container py-12 md:py-20 max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-14 w-14 rounded-2xl bg-sky-50 dark:bg-sky-950/30 flex items-center justify-center flex-shrink-0">
                <Laptop className="h-7 w-7 text-sky-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Device Guide</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Chromebook: The Simpler Computer
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Chromebooks are affordable, secure, and surprisingly powerful. Whether you are considering
              one or already own one, here is everything you need.
            </p>
          </div>
        </section>

        {/* What is a Chromebook */}
        <section className="container py-12 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">What Is a Chromebook?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 text-base md:text-lg leading-relaxed">
              <div>
                <h3 className="font-semibold mb-1">How it differs from Windows or Mac</h3>
                <p className="text-muted-foreground">
                  Chromebooks run Chrome OS — a stripped-down system built around the Chrome web browser.
                  Almost everything happens in the browser or as a web app. That makes the computer
                  faster, cheaper, and harder to break.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Why schools love them</h3>
                <p className="text-muted-foreground">
                  Schools deploy Chromebooks because they are inexpensive, boot in seconds, update
                  themselves, and are hard to infect with viruses. The same qualities make them great
                  for households too.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Is it right for you?</h3>
                <p className="text-muted-foreground">
                  If you already spend most of your computer time in a browser — email, news, YouTube,
                  banking, shopping — a Chromebook can do everything you do today for a fraction of
                  the cost.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Is a Chromebook right for you */}
        <section className="container py-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Is a Chromebook Right for You?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Check the boxes that sound like you. If most are green, a Chromebook is a great pick.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-emerald-200 dark:border-emerald-900">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                  Yes — get one
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {yesChecks.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-base leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-rose-200 dark:border-rose-900">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-rose-600" aria-hidden="true" />
                  Consider alternatives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {noChecks.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-base leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Chromebooks */}
        <section className="container py-12 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Best Chromebooks in 2026
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Five honest picks across budgets and use cases. Prices change often — use these as starting points.
          </p>

          <div className="space-y-4">
            {recommendations.map((r) => {
              const Icon = r.icon;
              return (
                <Card key={r.model}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-sky-50 dark:bg-sky-950/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-sky-600" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <Badge variant="outline">{r.tier}</Badge>
                          <span className="font-bold text-lg">{r.model}</span>
                          <span className="text-muted-foreground">{r.price}</span>
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed">{r.takeaway}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Chromebook Basics Guides */}
        <section className="container py-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Chromebook Basics</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Short, plain-language guides for the most common tasks.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {basicsGuides.map((g) => (
              <Link
                key={g.slug}
                to={`/guides/${g.slug}`}
                className="group flex items-center gap-4 rounded-2xl border bg-card p-5 transition hover:border-primary hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="h-12 w-12 rounded-xl bg-sky-50 dark:bg-sky-950/30 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-sky-600" aria-hidden="true" />
                </div>
                <span className="flex-1 font-semibold text-base leading-snug">{g.title}</span>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary flex-shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>

        {/* Living with a Chromebook */}
        <section className="container py-12 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Living with a Chromebook
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            What works great, what doesn't, and why you can stop worrying about viruses.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <Card className="border-emerald-200 dark:border-emerald-900">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                  What works great
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {worksGreat.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-base leading-relaxed">
                      <span className="text-emerald-600 mt-1" aria-hidden="true">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-rose-200 dark:border-rose-900">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-rose-600" aria-hidden="true" />
                  What doesn't work
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {doesntWork.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-base leading-relaxed">
                      <span className="text-rose-600 mt-1" aria-hidden="true">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 border-2">
            <CardContent className="pt-6 flex gap-4 items-start">
              <div className="h-12 w-12 rounded-xl bg-violet-50 dark:bg-violet-950/30 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-6 w-6 text-violet-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Built-in security that takes care of itself</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Chromebooks update themselves in the background. Each update ships the latest security
                  patches. The system also isolates every web page and app in a "sandbox" so a bad site
                  cannot touch your files. You do not need antivirus software.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tips for long life */}
        <section className="container py-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Tips for Long Life</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Four small habits that keep a Chromebook fast and useful for years.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {maintenanceTips.map((t) => (
              <Card key={t.title}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center flex-shrink-0">
                      <Wrench className="h-5 w-5 text-amber-700" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{t.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t.body}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Free Chromebook Programs */}
        <section className="container py-12 pb-24 max-w-4xl">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center flex-shrink-0">
                  <Gift className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                </div>
                <CardTitle className="text-2xl">Free Chromebook Programs</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed">
                Can't afford a Chromebook? Several non-profits provide free or low-cost refurbished
                Chromebooks to households that qualify, including <strong>PCs for People</strong> and
                <strong> Human-I-T</strong>. They also help with free or reduced-cost internet.
              </p>
              <Button asChild size="lg">
                <Link to="/free-resources">
                  See Free Computer Programs
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
