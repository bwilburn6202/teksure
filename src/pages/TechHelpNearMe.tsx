import { useState } from 'react';
import {
  Library,
  Users,
  Heart,
  HandHeart,
  Church,
  GraduationCap,
  ExternalLink,
  Phone,
  MapPin,
  Search,
  Clock,
  Battery,
  KeyRound,
  ListChecks,
  Home,
  BookOpen,
  Info,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// ── Types ──────────────────────────────────────────────────────────────────────

interface HelpType {
  icon: typeof Library;
  emoji: string;
  title: string;
  description: string;
  primaryLink?: { label: string; url: string };
  secondaryLink?: { label: string; url: string };
}

interface Tip {
  icon: typeof Clock;
  title: string;
  detail: string;
}

// ── Data ───────────────────────────────────────────────────────────────────────

const helpTypes: HelpType[] = [
  {
    icon: Library,
    emoji: '📚',
    title: 'Public libraries',
    description:
      "Almost every public library offers free WiFi, free computer access, and often free tech help classes. Many libraries have 1-on-1 tech tutor appointments you can book ahead — just walk in and ask at the information desk.",
    primaryLink: { label: 'Find libraries near you', url: 'https://www.worldcat.org/libraries' },
    secondaryLink: { label: 'About US libraries (IMLS)', url: 'https://www.imls.gov' },
  },
  {
    icon: Users,
    emoji: '👴',
    title: 'Senior centers',
    description:
      'Local senior centers often run weekly tech help sessions, sometimes paired with teen volunteers from nearby schools. Call ahead to confirm the schedule — sessions fill up fast and sometimes require a quick sign-up.',
    primaryLink: {
      label: 'Eldercare Locator (find senior services)',
      url: 'https://eldercare.acl.gov',
    },
  },
  {
    icon: Heart,
    emoji: '🏢',
    title: 'AARP chapters',
    description:
      'AARP volunteers across the country offer free tech help, especially around tax time through AARP Tax-Aide. Members and non-members are welcome at most events. Check the local events page for your area.',
    primaryLink: { label: 'Find AARP local events', url: 'https://local.aarp.org' },
  },
  {
    icon: HandHeart,
    emoji: '🙌',
    title: 'Nonprofit organizations',
    description:
      'Dedicated nonprofits offer structured tech training for older adults and underserved communities. Cyber-Seniors connects teens with seniors, OATS (now Senior Planet) runs in-person classes, and Human-I-T focuses on low-income households.',
    primaryLink: { label: 'Cyber-Seniors', url: 'https://cyberseniors.org' },
    secondaryLink: { label: 'Senior Planet (OATS)', url: 'https://seniorplanet.org' },
  },
  {
    icon: Church,
    emoji: '⛪',
    title: 'Faith & community groups',
    description:
      "Churches, mosques, synagogues, and community centers often run tech help programs as part of their outreach work. If you belong to a religious community, ask at the front office — and if you don't, many programs welcome everyone regardless of faith.",
  },
  {
    icon: GraduationCap,
    emoji: '🎓',
    title: 'Schools & library partnerships',
    description:
      'Some high schools, colleges, and universities pair students with seniors needing tech help as part of community service or service-learning programs. Call your local high school or community college and ask about tech buddy programs.',
  },
];

const askingTips: Tip[] = [
  {
    icon: Clock,
    title: 'Call ahead to confirm',
    detail:
      "Tech help times change — a quick phone call saves a wasted trip. Ask what kind of help they can offer and whether you need to book.",
  },
  {
    icon: Battery,
    title: 'Bring your device and charger',
    detail:
      "Take whatever device you need help with — phone, laptop, tablet — along with its charger. Sessions often run longer than expected.",
  },
  {
    icon: KeyRound,
    title: 'Know your passwords',
    detail:
      "Write down passwords for your email, Apple ID, Google account, or anything you might need. Better yet, use a password manager like Bitwarden to keep them safe.",
  },
  {
    icon: ListChecks,
    title: 'Write down your questions',
    detail:
      "A short list of 'what's been bothering me' is gold. Specific questions like \"my printer won't connect\" get you much further than \"my computer is slow.\"",
  },
];

// ── Component ──────────────────────────────────────────────────────────────────

const TechHelpNearMe = () => {
  const [zip, setZip] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Find Local Tech Help — Free In-Person Help Near You | TekSure"
        description="Most communities have free tech help at libraries, senior centers, and nonprofits. Here's how to find it near you."
      />
      <Navbar />

      <main className="container mx-auto px-4 py-12 md:py-16">
        {/* Hero */}
        <section className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-medium mb-4">
            <MapPin className="h-4 w-4" />
            Local Tech Help Directory
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Real People Who Can Help You — In Your Neighborhood
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Most communities have free tech help available at libraries, senior centers, and
            community nonprofits. Here's how to find it near you.
          </p>
        </section>

        {/* Where to find help */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Where to find free help</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Six kinds of places to start looking. One of these is almost certainly within a short
              drive or bus ride.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {helpTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Card
                  key={type.title}
                  className="flex flex-col h-full border-2 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-3xl" aria-hidden="true">
                        {type.emoji}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {type.description}
                    </p>
                    {(type.primaryLink || type.secondaryLink) && (
                      <div className="flex flex-col gap-2 mt-auto">
                        {type.primaryLink && (
                          <Button asChild size="sm" variant="outline" className="w-full">
                            <a
                              href={type.primaryLink.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-1.5"
                            >
                              {type.primaryLink.label}
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          </Button>
                        )}
                        {type.secondaryLink && (
                          <Button asChild size="sm" variant="ghost" className="w-full">
                            <a
                              href={type.secondaryLink.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-1.5"
                            >
                              {type.secondaryLink.label}
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* How to ask for help */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">How to ask for help</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A few small habits make tech help sessions go much better. Try these and you'll get
              more out of your visit.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {askingTips.map((tip) => {
              const Icon = tip.icon;
              return (
                <Card key={tip.title} className="border-2">
                  <CardHeader>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tip.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Don't want to leave home */}
        <section className="mx-auto max-w-5xl rounded-2xl border-2 bg-card p-8 md:p-12 mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
              <Home className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Don't want to leave home?</h2>
              <p className="text-muted-foreground">
                Plenty of free tech help is available from your couch — by phone, video, or
                online.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  TekSure remote help
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Book a video session with a patient, plain-language helper who can walk you
                  through whatever's stuck.
                </p>
                <Button asChild size="sm" className="w-full">
                  <a href="/get-help">Get help from TekSure</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Free online programs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Free internet, discounted devices, and online training programs for qualifying
                  households.
                </p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <a href="/free-resources">See free resources</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Phone helplines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div>
                    <div className="font-medium">AARP Fraud Watch Helpline</div>
                    <a
                      href="tel:18779083360"
                      className="text-primary hover:underline font-mono text-sm"
                    >
                      1-877-908-3360
                    </a>
                  </div>
                  <div>
                    <div className="font-medium">Eldercare Locator</div>
                    <a
                      href="tel:18006771116"
                      className="text-primary hover:underline font-mono text-sm"
                    >
                      1-800-677-1116
                    </a>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  Free to call
                </Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resources directory — Eldercare Locator */}
        <section className="mx-auto max-w-4xl rounded-2xl border-2 border-primary/30 bg-primary/5 p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
              <Search className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Find services by ZIP code</h2>
              <p className="text-muted-foreground mb-4">
                The <strong>Eldercare Locator</strong> is a free public service from the US
                Administration on Aging. Enter a ZIP code and it finds local senior centers,
                tech help programs, transportation, meal services, and more near you.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a
                    href="https://eldercare.acl.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Open Eldercare Locator
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:18006771116" className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call 1-800-677-1116
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ZIP code search — decorative / coming soon */}
        <section className="mx-auto max-w-2xl mb-16">
          <Card className="border-2 border-dashed">
            <CardHeader className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground mx-auto mb-3">
                <MapPin className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">Find help near your ZIP code</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <Input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={5}
                  value={zip}
                  onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  placeholder="Enter your ZIP code"
                  className="h-12 text-base"
                  aria-label="ZIP code"
                />
                <Button size="lg" disabled className="shrink-0">
                  Search (coming soon)
                </Button>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
                <Info className="h-4 w-4 mt-0.5 shrink-0" />
                <p>
                  Local search is coming soon. For now, use the{' '}
                  <a
                    href="https://eldercare.acl.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Eldercare Locator
                  </a>{' '}
                  above for the most comprehensive directory — it covers every ZIP code in the
                  United States.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final encouragement */}
        <section className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
            <Heart className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold mb-3">You're not alone</h2>
          <p className="text-muted-foreground mb-6">
            Asking for tech help can feel awkward, but the people running these programs genuinely
            want to help. They chose this work. Bring your questions — no question is too basic.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild>
              <a href="/get-help">Book TekSure help</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/free-resources">See free programs</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TechHelpNearMe;
