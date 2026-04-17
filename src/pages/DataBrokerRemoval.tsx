import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  UserMinus,
  ExternalLink,
  ListChecks,
  RefreshCcw,
  HelpCircle,
  DollarSign,
  Search,
} from 'lucide-react';

type Difficulty = 'Easy' | 'Moderate' | 'Hard';

type Broker = {
  rank: number;
  name: string;
  shows: string;
  difficulty: Difficulty;
  url: string;
  processing: string;
};

const brokers: Broker[] = [
  {
    rank: 1,
    name: 'Whitepages',
    shows: 'Name, age, current and past addresses, phone numbers, relatives, neighbors',
    difficulty: 'Easy',
    url: 'https://www.whitepages.com/suppression_requests',
    processing: '24–48 hours',
  },
  {
    rank: 2,
    name: 'Spokeo',
    shows: 'Addresses, phone numbers, email, family, social media accounts, court records',
    difficulty: 'Easy',
    url: 'https://www.spokeo.com/optout',
    processing: '3–5 days',
  },
  {
    rank: 3,
    name: 'BeenVerified',
    shows: 'Addresses, phones, emails, criminal records, marriage and divorce records',
    difficulty: 'Easy',
    url: 'https://www.beenverified.com/app/optout/search',
    processing: '24 hours',
  },
  {
    rank: 4,
    name: 'TruePeopleSearch',
    shows: 'Full address, phone, age, relatives — completely free, fully public',
    difficulty: 'Easy',
    url: 'https://www.truepeoplesearch.com/removal',
    processing: '24–48 hours',
  },
  {
    rank: 5,
    name: 'Intelius',
    shows: 'Background checks, criminal records, addresses, phones, professional licenses',
    difficulty: 'Moderate',
    url: 'https://www.intelius.com/opt-out',
    processing: '5–7 days',
  },
  {
    rank: 6,
    name: 'Instant Checkmate',
    shows: 'Criminal records, addresses, phones, social profiles, court records',
    difficulty: 'Moderate',
    url: 'https://www.instantcheckmate.com/optout',
    processing: '48 hours',
  },
  {
    rank: 7,
    name: 'Radaris',
    shows: 'Addresses, phones, family, employment history, education',
    difficulty: 'Hard',
    url: 'https://radaris.com/page/how-to-remove',
    processing: '1–2 weeks',
  },
  {
    rank: 8,
    name: 'PeekYou',
    shows: 'Aggregated social media profiles, photos, contact info',
    difficulty: 'Easy',
    url: 'https://www.peekyou.com/about/contact/optout/',
    processing: '7 days',
  },
  {
    rank: 9,
    name: 'PeopleFinder',
    shows: 'Addresses, phones, age, relatives, court records',
    difficulty: 'Moderate',
    url: 'https://www.peoplefinder.com/optout.php',
    processing: '5–10 days',
  },
  {
    rank: 10,
    name: 'MyLife',
    shows: 'Reputation scores, address history, relatives, alleged court records',
    difficulty: 'Hard',
    url: 'https://www.mylife.com/ccpa/index.pubview',
    processing: '10–14 days',
  },
  {
    rank: 11,
    name: 'US Search',
    shows: 'Addresses, phones, age, relatives, possible aliases',
    difficulty: 'Moderate',
    url: 'https://www.ussearch.com/opt-out/',
    processing: '5–7 days',
  },
  {
    rank: 12,
    name: 'PublicRecordsNow',
    shows: 'Addresses, phones, criminal and court records',
    difficulty: 'Moderate',
    url: 'https://www.publicrecordsnow.com/optout/',
    processing: '7 days',
  },
  {
    rank: 13,
    name: 'FamilyTreeNow',
    shows: 'Family tree, ages, addresses, possible relatives going back generations',
    difficulty: 'Easy',
    url: 'https://www.familytreenow.com/optout',
    processing: '48 hours',
  },
  {
    rank: 14,
    name: 'ThatsThem',
    shows: 'Addresses, phones, emails, vehicle info, IP addresses',
    difficulty: 'Easy',
    url: 'https://thatsthem.com/optout',
    processing: '24–48 hours',
  },
  {
    rank: 15,
    name: 'Clustrr',
    shows: 'Aggregated social and contact info',
    difficulty: 'Moderate',
    url: 'https://clustrr.com/opt-out/',
    processing: '7 days',
  },
];

const paidServices = [
  {
    name: 'DeleteMe',
    price: '$129/year',
    url: 'https://joindeleteme.com',
    pros: 'The most established service. Covers 30+ brokers, sends quarterly reports, US-based support.',
    cons: 'Most expensive option. Will not catch every smaller broker on its own.',
  },
  {
    name: 'Kanary',
    price: '$60/year',
    url: 'https://kanary.com',
    pros: 'Half the price of DeleteMe. Covers 100+ sites and lets you add custom search terms.',
    cons: 'Smaller company, less brand recognition. Customer support is online-only.',
  },
  {
    name: 'Optery',
    price: 'From $4.99/month',
    url: 'https://www.optery.com',
    pros: 'Free tier shows you exactly where you appear. Paid tiers cover hundreds of brokers automatically.',
    cons: 'The cheapest tier covers fewer sites. Real coverage starts at the $14.99/month plan.',
  },
];

const whitepagesSteps = [
  {
    title: 'Find your listing',
    description:
      'Go to whitepages.com and search your full name and city. Open the result that matches you.',
  },
  {
    title: 'Copy your profile URL',
    description:
      'In the address bar, copy the long URL of your specific profile page. You will paste it on the opt-out form.',
  },
  {
    title: 'Open the opt-out page',
    description:
      'Visit whitepages.com/suppression_requests in a new tab. Paste your profile URL into the field and click "Next".',
  },
  {
    title: 'Confirm by phone',
    description:
      'Whitepages will call you with a 4-digit code. Enter it to confirm the request. Your listing is removed within 24–48 hours.',
  },
  {
    title: 'Repeat for old addresses',
    description:
      'If you find separate listings for an old address or a former name, repeat the process for each. Whitepages treats each as a separate record.',
  },
];

const faqs = [
  {
    q: 'How often should I check?',
    a: 'Every 3 months. Data brokers buy fresh records constantly — your removed listing will often reappear within a few months as a new "version" gets imported from public records.',
  },
  {
    q: 'Will this stop all tracking?',
    a: 'No. Removing yourself from these sites stops the public-facing exposure. It does not stop ad networks, social media tracking, or surveillance. For broader protection see our Privacy Hub.',
  },
  {
    q: 'Is it worth it?',
    a: 'Yes — especially if you have ever been doxxed, stalked, or had identity theft. Even if not, removing your phone and address from public sites cuts down on scam calls, junk mail, and social engineering attempts.',
  },
  {
    q: 'Can I have someone else do it for me?',
    a: 'You can use a paid service like DeleteMe or Kanary to do it on your behalf. Or a tech-savvy family member can submit the requests using your information — most sites do not require you personally.',
  },
];

const difficultyStyle: Record<Difficulty, string> = {
  Easy: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900',
  Moderate: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900',
  Hard: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900',
};

export default function DataBrokerRemoval() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Remove Yourself from Data Broker Sites — Free Step-by-Step | TekSure"
        description="Your address, phone number, and family are listed on dozens of data broker sites. Use this free step-by-step guide to remove yourself from the 15 biggest ones."
        path="/data-broker-removal"
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="container max-w-3xl text-center py-16 md:py-20">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
              <UserMinus className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Your Address, Phone Number, and Family Are All Online. Here's How to Remove Them.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              A free, step-by-step guide to opting out of the 15 biggest people-search sites.
            </p>
          </div>
        </section>

        {/* Explainer */}
        <section className="container max-w-3xl py-12">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Data brokers are companies that gather your personal information from public records,
              court filings, social media, and other sites — then publish it on a search page that
              anyone with your name can find. They make money from background-check buyers, marketers,
              and anyone willing to pay for a quick lookup.
            </p>
            <p>
              You never signed up. You never gave them permission. But because most of the source data
              is technically public, federal law does not require them to ask. The good news: every major
              broker is required to honor opt-out requests, and you can submit them yourself, for free,
              in an afternoon.
            </p>
          </div>
        </section>

        {/* Google's tool callout */}
        <section className="container max-w-4xl py-2">
          <Card className="rounded-2xl border border-primary/30 bg-primary/5">
            <CardContent className="p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
              <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center shrink-0">
                <Search className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-foreground mb-1">Google's own removal tool</h2>
                <p className="text-sm text-muted-foreground">
                  Google has a free "Results about you" tool that scans Search for your name, phone,
                  address, and email — then lets you request removal of any matches.
                </p>
              </div>
              <Button asChild className="rounded-xl gap-2 shrink-0">
                <a
                  href="https://myactivity.google.com/results-about-you"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Google's tool
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* The 15 biggest brokers */}
        <section className="container max-w-6xl py-12 md:py-16">
          <div className="mb-8 text-center">
            <Badge variant="outline" className="mb-3">THE 15 BIGGEST DATA BROKERS</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Where you'll find your information — and how to remove it
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start at #1 and work down. The top of the list reaches the most people, so the impact-per-minute is highest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {brokers.map((b) => (
              <Card
                key={b.name}
                className="rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors"
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 w-9 h-9 flex items-center justify-center shrink-0 text-primary font-bold text-sm">
                        {b.rank}
                      </div>
                      <h3 className="font-semibold text-foreground">{b.name}</h3>
                    </div>
                    <Badge variant="outline" className={difficultyStyle[b.difficulty]}>
                      {b.difficulty}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    <span className="font-medium text-foreground/80">Shows: </span>
                    {b.shows}
                  </p>
                  <p className="text-xs text-muted-foreground/80 mb-4">
                    Typical processing time: <span className="font-medium">{b.processing}</span>
                  </p>
                  <Button asChild variant="outline" size="sm" className="rounded-xl gap-2">
                    <a href={b.url} target="_blank" rel="noopener noreferrer">
                      Open opt-out page
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Walkthrough */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-3xl py-12 md:py-16">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4">
                <ListChecks className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Step-by-step: removing yourself from Whitepages
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Whitepages is the largest. Once you do it once, every other site works the same way.
              </p>
            </div>

            <div className="space-y-4">
              {whitepagesSteps.map((s, idx) => (
                <Card key={s.title} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="rounded-xl bg-primary/10 w-10 h-10 flex items-center justify-center shrink-0 text-primary font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Paid Services */}
        <section className="container max-w-6xl py-12 md:py-16">
          <div className="mb-8 text-center">
            <Badge variant="outline" className="mb-3">
              <DollarSign className="h-3 w-3 inline mr-1" />
              PAID SERVICES
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              If you don't want to do it yourself
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These services do the opt-outs on your behalf and re-check periodically. Honest pros and cons for each.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {paidServices.map((s) => (
              <Card key={s.name} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{s.name}</h3>
                    <span className="text-sm font-medium text-primary">{s.price}</span>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-1">PROS</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.pros}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">CONS</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.cons}</p>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="sm" className="rounded-xl gap-2">
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      Visit site
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Keep it up */}
        <section className="container max-w-3xl py-2">
          <Card className="rounded-2xl border border-amber-300/40 bg-amber-50/60 dark:bg-amber-950/20 dark:border-amber-900/50">
            <CardContent className="p-5 md:p-6 flex items-start gap-4">
              <div className="rounded-xl bg-amber-100 dark:bg-amber-900/40 w-11 h-11 flex items-center justify-center shrink-0">
                <RefreshCcw className="h-5 w-5 text-amber-700 dark:text-amber-300" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Keep it up — set a reminder for 3 months from now</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Data brokers re-import public records on a rolling schedule. Even after a successful
                  removal, your listing often reappears in 3–6 months. Add a recurring reminder to your
                  calendar to spot-check the top 5 sites quarterly.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="container max-w-3xl py-12 md:py-16">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Frequently asked</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f) => (
              <Card key={f.q} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
