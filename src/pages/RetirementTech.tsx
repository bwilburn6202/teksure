import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Sparkles,
  Trash2,
  Plane,
  Palette,
  Users,
  HeartPulse,
  GraduationCap,
  HandHeart,
  PiggyBank,
  Stethoscope,
  Phone,
  Shield,
  Library,
  ArrowRight,
  ExternalLink,
  Award,
  CheckCircle2,
} from 'lucide-react';

const auditItems = [
  {
    title: 'Work email account',
    description:
      'Cancel your work email forwarding. Save anything personal you want to keep (contacts, photos, important threads) before HR shuts the account down — usually within 30 days of your last day.',
  },
  {
    title: 'LinkedIn',
    description:
      'You may keep it for keeping up with old colleagues, but turn off "open to work" notifications and update the headline to "Retired" or your new chapter.',
  },
  {
    title: 'Company-issued phone',
    description:
      'Return on or before your last day. Wipe personal data first (factory reset). If you bought it through a corporate plan, get a written release before transferring the number to a personal carrier.',
  },
  {
    title: 'Multiple cloud subscriptions',
    description:
      'Audit Google One, iCloud, Dropbox, Microsoft 365. Many people pay for two or three because work overlapped with personal. Pick one for personal use and cancel the rest.',
  },
  {
    title: 'Corporate VPN',
    description:
      'Uninstall on the day you retire. Some corporate VPNs can monitor traffic even from personal devices that were once enrolled.',
  },
  {
    title: 'Industry-specific apps',
    description:
      'Bloomberg Terminal, AutoCAD, Epic, Salesforce — anything you only used for work. Uninstall, cancel personal subscriptions, and remove from autopay.',
  },
];

const newApps = [
  {
    icon: Plane,
    title: 'Travel',
    items: [
      { name: 'Google Flights', note: 'Free flexible-date and price-tracking searches.' },
      { name: 'Expedia', note: 'Hotel + flight bundles, often cheaper than booking separately.' },
      { name: 'Kayak', note: 'Aggregator that scans 100+ travel sites at once.' },
      { name: 'Travelzoo', note: 'Curated weekly deals — vetted, not algorithmic.' },
    ],
  },
  {
    icon: Palette,
    title: 'Hobbies',
    items: [
      { name: 'Craftsy', note: 'Knitting, quilting, baking, watercolor — taught by working artists.' },
      { name: 'MasterClass', note: 'High-production lessons from named experts. Annual subscription.' },
      { name: 'Skillshare', note: 'Practical creative classes, often shorter than MasterClass.' },
      { name: 'YouTube how-tos', note: 'Free. Almost any hobby has a dedicated channel community.' },
    ],
  },
  {
    icon: Users,
    title: 'Family',
    items: [
      { name: 'FaceTime', note: 'Video calls with iPhone family. Group calls work well.' },
      { name: 'Marco Polo', note: 'Video messages — record now, family watches when free. Great across time zones.' },
      { name: 'Shared photo albums', note: 'iCloud Shared Album or Google Photos. Everyone adds, everyone sees.' },
    ],
  },
  {
    icon: HeartPulse,
    title: 'Health',
    items: [
      { name: 'MyChart', note: 'Patient portal used by most major US health systems. Lab results, appointments, refills.' },
      { name: 'Medicare.gov', note: 'Sign in to manage coverage, find providers, compare plans during open enrollment.' },
      { name: 'Apple Watch / Fitbit', note: 'Step tracking, heart rate, fall detection. Fall detection is the feature most worth turning on.' },
    ],
  },
  {
    icon: GraduationCap,
    title: 'Learning',
    items: [
      { name: 'Khan Academy', note: 'Free. Math, science, history, economics — unlimited access, no ads.' },
      { name: 'Coursera', note: 'University courses. Audit free, pay for certificates.' },
      { name: 'Osher Lifelong Learning Institute', note: 'In-person and online courses for adults 50+, hosted at 125+ universities. olli.osher.net' },
    ],
  },
  {
    icon: HandHeart,
    title: 'Volunteering',
    items: [
      { name: 'VolunteerMatch', note: 'Search local opportunities by cause, skill, and time commitment.' },
      { name: 'AARP Experience Corps', note: 'Tutoring program for adults 50+ in elementary schools. Stipend in some cities.' },
      { name: 'Catchafire', note: 'Pro bono projects matching your professional skills with nonprofits that need them.' },
    ],
  },
];

const financialItems = [
  {
    title: 'RMD calculators',
    description:
      'Required Minimum Distributions begin at age 73. Vanguard, Fidelity, and Schwab all have free RMD calculators on their sites. Missing one is a 25% penalty on the amount.',
  },
  {
    title: 'Social Security decisions',
    description:
      'Sign up at ssa.gov/myaccount to see your projected benefit at every claiming age. Waiting from 62 to 70 increases the monthly check by roughly 77%, but the right answer depends on health and need.',
  },
  {
    title: 'Medicare enrollment windows',
    description:
      'Initial Enrollment Period is the 7 months around your 65th birthday. Open Enrollment is October 15 to December 7 every year. Missing your initial window can mean lifetime late penalties.',
  },
  {
    title: 'Estate planning tools',
    description:
      'Trust & Will, FreeWill, and LegalZoom offer online wills and trusts ($150-$600). For complex estates, an estate attorney remains the right call — but a basic will is better than nothing.',
  },
  {
    title: 'Digital record-keeping',
    description:
      'A single password manager (1Password, Bitwarden) and a "if anything happens to me" document with bank, brokerage, insurance, and digital accounts saves your family weeks of work later.',
  },
];

const healthItems = [
  {
    title: 'Medicare portal',
    description:
      'medicare.gov/account/login — see claims, change plans, find providers, order replacement cards.',
  },
  {
    title: 'Telehealth',
    description:
      'Best for follow-ups, prescription refills, simple infections, mental health visits, and dermatology. Not appropriate for chest pain, severe abdominal pain, breathing trouble, or anything that needs a physical exam.',
  },
  {
    title: 'Fall detection setup',
    description:
      'Apple Watch (Series 4+): Settings → Emergency SOS → Fall Detection → Always On. Auto-calls 911 if you fall and do not respond within 60 seconds. Fitbit Sense and Google Pixel Watch have similar features.',
  },
  {
    title: 'Medical ID setup',
    description:
      'iPhone: Health app → Medical ID → set blood type, allergies, medications, emergency contacts. Visible from the lock screen so paramedics can access without your passcode.',
  },
  {
    title: 'Patient portals',
    description:
      'Sign up for the portal at every provider you see (MyChart is the most common). Lab results often appear there before your doctor calls.',
  },
];

const stayingConnected = [
  {
    title: 'Family tech',
    description:
      'iCloud Shared Albums or Google Photos shared albums for the grandkids. Marco Polo for video messages across time zones. FaceTime or Zoom for the standing weekly call.',
  },
  {
    title: 'New friends',
    description:
      'Nextdoor for neighborhood connections (volunteer opportunities, recommendations, lost pets). Meetup for interest-based groups (hiking, books, board games). Bumble For Friends for one-on-one new friendships.',
  },
  {
    title: 'Community groups online',
    description:
      'Facebook groups for hobbies, conditions, and former workplaces. Reddit communities (r/retirement, r/seniors, r/widowers) for plain conversation when you need it. Library and YMCA newsletters for local in-person events.',
  },
];

const scams = [
  { title: 'Pension fraud', description: 'Calls offering to "release" pension funds early or "cash out" your retirement. No legitimate pension administrator works this way.' },
  { title: '"IRS owes you" or "IRS will arrest you" scams', description: 'The IRS does not call to demand immediate payment, and never threatens arrest. They contact you by mail first.' },
  { title: 'Romance scams', description: 'Online connection moves quickly to love declarations and an emergency that needs money. Reverse-image-search profile photos before sending anything.' },
  { title: 'Grandparent scams', description: 'Caller claims to be a grandchild in jail, in the hospital, or stranded — needs money wired now and "do not tell mom and dad." Hang up and call the actual grandchild.' },
];

export default function RetirementTech() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Retirement Tech Guide — Starting Fresh in Your New Chapter | TekSure"
        description="Retirement is the chance to reset your tech life. What to drop, what new apps to try, and how to handle the financial, health, social, and safety tech that matters most."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-purple-50 to-background dark:from-purple-950/30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="mr-1 h-3 w-3" />
              New Chapter
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Retirement Is a Great Time to Reinvent Your Tech Life
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Drop what you no longer need. Add what fits the life you actually want. Set up the
              health, financial, and safety tech that becomes more useful in this chapter than any
              other.
            </p>
          </div>
        </div>
      </section>

      {/* Audit */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <Trash2 className="mr-1 h-3 w-3" />
              The Retirement Tech Audit
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">What you might not need anymore</h2>
            <p className="text-muted-foreground">
              The accounts, subscriptions, and tools that were tied to work. Cancel, return, or
              wipe — but do it intentionally.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {auditItems.map((item) => (
              <Card key={item.title} className="border-2">
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Apps */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">New Interests Deserve New Apps</h2>
              <p className="text-muted-foreground">
                The categories most retirees actually pick up — and the apps that match.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newApps.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Card key={cat.title} className="border-2">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">{cat.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {cat.items.map((item) => (
                          <li key={item.name} className="text-sm">
                            <div className="font-medium">{item.name}</div>
                            <div className="text-muted-foreground">{item.note}</div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Tech */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <PiggyBank className="mr-1 h-3 w-3" />
              Money in Retirement
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Financial Tech for Retirement</h2>
            <p className="text-muted-foreground">
              The tools and decisions that have the highest dollar impact in this chapter.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {financialItems.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tech */}
      <section className="border-y bg-rose-50/40 dark:bg-rose-950/20">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-3">
                <Stethoscope className="mr-1 h-3 w-3" />
                Health Tech
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Health Tech for This Chapter</h2>
              <p className="text-muted-foreground">
                The setups that matter more after 65 than before.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {healthItems.map((item) => (
                <Card key={item.title} className="border-2">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staying Connected */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <Phone className="mr-1 h-3 w-3" />
              Connection
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Staying Connected</h2>
            <p className="text-muted-foreground">
              The tech that keeps family close and helps you build new circles in retirement.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {stayingConnected.map((item) => (
              <Card key={item.title} className="border-2">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avoiding Scams */}
      <section className="border-y bg-amber-50/40 dark:bg-amber-950/20">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <Badge variant="secondary" className="mb-3">
                <Shield className="mr-1 h-3 w-3" />
                Stay Safe
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Avoiding Retirement Scams</h2>
              <p className="text-muted-foreground">
                Retirees lose more money to fraud than any other age group. Not because they are
                less careful — because scammers target them more.
              </p>
            </div>
            <div className="mb-6 grid gap-4 md:grid-cols-2">
              {scams.map((s) => (
                <Card key={s.title}>
                  <CardContent className="p-5">
                    <h3 className="mb-2 font-semibold">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button asChild>
                <Link to="/scam-defense">
                  Visit the Scam Defense Center
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <Award className="mr-1 h-3 w-3" />
              Free Programs
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Free Retirement Resources</h2>
            <p className="text-muted-foreground">
              Programs designed for this chapter, almost all free with a library card or AARP
              membership.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-700" />
                  <h3 className="font-semibold">AARP membership benefits</h3>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  $16/year. Unlocks discounts on travel, prescriptions, restaurants, and rental
                  cars, plus free tech tutorials, scam alerts, and Movies for Grownups.
                </p>
                <a
                  href="https://www.aarp.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  aarp.org <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-purple-700" />
                  <h3 className="font-semibold">Senior Planet</h3>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  Free in-person and online tech classes for adults 60+ from Older Adults
                  Technology Services (OATS, an AARP affiliate). Phone, computer, social media,
                  scam awareness.
                </p>
                <a
                  href="https://seniorplanet.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  seniorplanet.org <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <Library className="h-5 w-5 text-purple-700" />
                  <h3 className="font-semibold">Library programs</h3>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  Most public libraries offer free 1-on-1 tech help by appointment, group classes,
                  and access to LinkedIn Learning, Mango Languages, and Libby (audiobooks +
                  ebooks). Ask the reference desk what is on offer.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/free-resources">
                Browse all free resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Welcome to the next chapter.
            </h2>
            <p className="mb-6 text-muted-foreground">
              The tech you choose now shapes how this part of life feels. Pick the pieces that fit
              the life you actually want.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link to="/guides">Browse all guides</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/get-help">Book 1-on-1 tech help</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
