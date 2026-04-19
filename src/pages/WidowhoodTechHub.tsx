import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  HeartHandshake,
  Calendar,
  List,
  Smartphone,
  Mail,
  Users,
  Wallet,
  Tv,
  Image as ImageIcon,
  Scale,
  HeartPulse,
  ArrowRight,
  Phone,
} from 'lucide-react';

const firstMonth = [
  {
    title: 'Get certified death certificates',
    description:
      'Order 10–20 certified copies from the funeral home or your county vital records office. Every account closure, pension, and insurance claim will ask for one. Better to have extras than to reorder.',
  },
  {
    title: 'Notify Social Security',
    description:
      'The funeral director usually does this, but confirm. If not, call 1-800-772-1213. Survivor benefits may be available to you — they have a dedicated team at ssa.gov/survivors.',
  },
  {
    title: 'Contact their employer or pension plan',
    description:
      'Employer life insurance, final paycheck, unused PTO, and 401(k) rollovers all need to start. HR will guide you. Pensions often have survivor benefits that continue for you.',
  },
  {
    title: 'Continue paying the critical bills',
    description:
      'Mortgage, utilities, car insurance, health insurance. Do not rush to close anything. Use their checking account if you have access and can legally do so — your attorney will confirm what is okay.',
  },
  {
    title: 'Everything else can wait',
    description:
      'Credit cards, email accounts, subscriptions, social media — these all still function and are not emergencies. You have months, not days.',
  },
];

const inventoryItems = [
  {
    category: 'Email accounts',
    examples: 'Gmail, Yahoo, Outlook, iCloud, work email',
  },
  {
    category: 'Phone and computer passwords',
    examples:
      'Check for a written password book in their desk or nightstand. Many people keep one even if they never told anyone.',
  },
  {
    category: 'Online banking logins',
    examples: 'Chase, Bank of America, Wells Fargo, local banks, credit union',
  },
  {
    category: 'Investment accounts',
    examples: 'Fidelity, Vanguard, Schwab, employer 401(k), old rolled-over IRAs',
  },
  {
    category: 'Social media profiles',
    examples: 'Facebook, Instagram, LinkedIn, Twitter/X, TikTok',
  },
  {
    category: 'Subscription services',
    examples:
      'Netflix, Spotify, Amazon Prime, gym apps, dating apps, newspaper subscriptions, cloud storage',
  },
  {
    category: 'Loyalty and rewards',
    examples: 'Airline miles, hotel points, credit card rewards, grocery rewards',
  },
  {
    category: 'Cryptocurrency (if any)',
    examples:
      'Coinbase, Kraken, hardware wallets. Needs the private keys or seed phrase — without them, crypto is permanently lost.',
  },
  {
    category: 'Cloud photo storage',
    examples: 'iCloud Photos, Google Photos, Dropbox, OneDrive, Amazon Photos',
  },
];

const phoneAccess = [
  {
    title: 'Apple Digital Legacy Contact',
    description:
      'If your spouse set this up in advance, you already have what you need. Go to apple.com/legal/digital-legacy with the access key and a death certificate. You get a copy of their photos, notes, emails, and data.',
    action: 'apple.com/legal/digital-legacy',
  },
  {
    title: 'Apple — no Legacy Contact set up',
    description:
      'You can still request access, but it requires a court order naming you as the personal representative of the estate, plus a certified death certificate. This can take months. An estate attorney makes it faster.',
    action: 'Contact Apple Support',
  },
  {
    title: 'Google Inactive Account Manager',
    description:
      'If your spouse set this up, Google will automatically share data with the people they named after a period of inactivity. Check at myaccount.google.com/inactive if you have any of their other login info.',
    action: 'myaccount.google.com/inactive',
  },
  {
    title: 'Google — requesting access',
    description:
      'Go to support.google.com and search "access deceased person account". Requires death certificate, ID, and proof of authority (estate docs). Google decides case by case.',
    action: 'support.google.com',
  },
];

const emailAccess = [
  {
    service: 'Gmail',
    steps:
      'support.google.com → "Request information from a deceased person\'s account". Google has a formal process with three stages. Requires death certificate, your ID, and in many cases court documents.',
  },
  {
    service: 'Outlook / Microsoft',
    steps:
      'Microsoft\'s "Next of Kin" process — support.microsoft.com. Requires death certificate and either proof you are the executor or proof of your relationship. They send data on DVD, which feels dated but is how it works.',
  },
  {
    service: 'Yahoo',
    steps:
      'Yahoo does NOT transfer accounts to family members as a policy. You can request the account be deleted. Some data may be preserved if a court orders it.',
  },
  {
    service: 'iCloud / Apple Mail',
    steps:
      'Same as Apple Digital Legacy process. Without a Legacy Contact, a court order is usually required.',
  },
];

const socialMedia = [
  {
    service: 'Facebook — Memorialize',
    description:
      'Keep the profile as a memorial. Friends can post memories, but nobody can log in. "Remembering" appears next to their name. Request at facebook.com/help/memorialization.',
  },
  {
    service: 'Facebook — Delete',
    description:
      'Remove the account entirely. Requires death certificate. Some family members prefer this — no wrong answer.',
  },
  {
    service: 'Instagram',
    description:
      'Same options as Facebook (memorialize or delete). Go to help.instagram.com and search "deceased". Requires death certificate.',
  },
  {
    service: 'LinkedIn',
    description:
      'LinkedIn has a "Deceased Member" form — linkedin.com/help. Removes the profile or memorializes it. Takes a few weeks.',
  },
  {
    service: 'Twitter / X',
    description:
      'Account deletion only — no memorialization. Submit at help.x.com with death certificate and your government ID.',
  },
];

const financialClosure = [
  {
    title: 'Banks and credit unions',
    description:
      'Call each bank, notify them, send a certified death certificate. Joint accounts typically pass to the surviving spouse automatically. Solo accounts become part of the estate and may need probate.',
  },
  {
    title: 'Investment accounts',
    description:
      'Fidelity, Vanguard, Schwab — each has a survivor process. If you were named as beneficiary, the transfer is usually quick (weeks). If not, probate.',
  },
  {
    title: 'Credit cards',
    description:
      'Notify each issuer. They freeze the account. Authorized user cards stop working. Any balance typically comes out of the estate, not your personal assets (check with an attorney).',
  },
  {
    title: 'Life insurance claims',
    description:
      'Contact each insurer directly with a certified death certificate. Turn-around is usually 30–60 days. Employer group life insurance is separate — HR handles that.',
  },
  {
    title: 'Cryptocurrency',
    description:
      'Without the private keys or seed phrase, crypto is usually permanently inaccessible. If you find a hardware wallet, recovery words on paper, or notes about Coinbase/Kraken, keep them safe and consult a crypto-savvy estate attorney.',
  },
];

const subscriptionCancellations = [
  {
    category: 'Streaming services',
    examples: 'Netflix, Disney+, Hulu, HBO Max, Apple TV+, Paramount+, Peacock',
  },
  {
    category: 'Music and audio',
    examples: 'Spotify, Apple Music, Audible, SiriusXM',
  },
  {
    category: 'Apps',
    examples:
      'Look at their App Store / Google Play subscriptions — many have auto-renewing app subscriptions they forgot about',
  },
  {
    category: 'Gym and fitness',
    examples: 'Planet Fitness, Peloton, apps like MyFitnessPal, Strava Premium',
  },
  {
    category: 'Cloud storage',
    examples: 'iCloud+, Google One, Dropbox, OneDrive — download data BEFORE cancelling',
  },
  {
    category: 'Delivery and shopping',
    examples: 'Amazon Prime, Instacart, DoorDash DashPass, meal kits',
  },
];

const preservingMemories = [
  {
    title: 'Download their photos first',
    description:
      'Before closing any account, download everything. Google Takeout (takeout.google.com) exports Gmail, Photos, Drive, YouTube, and everything else as a ZIP. For iCloud Photos, download to a Mac or PC first.',
  },
  {
    title: 'Save important emails',
    description:
      'Love letters, family updates, life events. Export key emails to PDF or forward them to your own account before you lose access. On Gmail, use Google Takeout to download the entire mailbox.',
  },
  {
    title: 'Export their text messages',
    description:
      "iPhone: use an app like iMazing to save iMessage threads as PDF. Android: Google's backup includes texts. Text message threads are often the most day-to-day memories of a relationship.",
  },
  {
    title: 'Voicemails',
    description:
      'Save voicemails from them before cancelling the phone line. iPhone: long-press voicemail → Share → Save to Files. Android: tap the voicemail → Save. These become precious.',
  },
  {
    title: 'Shared photo albums',
    description:
      'Transfer shared iCloud albums to your own account. In Google Photos, shared libraries can be converted to your personal library. Do this before closing their account.',
  },
];

const legalResources = [
  {
    name: 'Find an estate attorney',
    description:
      'Probate, asset transfer, and debt handling — an estate attorney is worth the $1,500–$5,000 fee for anything beyond a simple joint-ownership situation. Ask at the funeral home or your bank for a referral.',
  },
  {
    name: 'Probate basics',
    description:
      'Probate is the court process of transferring assets from the deceased to heirs. Joint property and named beneficiaries usually skip probate. Individual assets with no beneficiary typically go through it.',
  },
  {
    name: 'LawHelp.org',
    description:
      'Free legal aid directory by state. If you cannot afford a private attorney, LawHelp points you to pro bono and sliding-scale resources in your area.',
  },
  {
    name: 'AARP Legal Services',
    description:
      'AARP members get discounted legal consultations — often free initial reviews. legal.aarp.org. Very useful for the quick questions estate attorneys would charge you for.',
  },
];

const griefSupport = [
  {
    name: 'GriefShare',
    description:
      'In-person and online support groups, 13 weeks. Led by trained facilitators. Christian framing but open to all faiths. Free or by donation. griefshare.org.',
  },
  {
    name: 'AARP grief and loss resources',
    description:
      'aarp.org/caregiving/grief-loss — articles, a supportive community, and practical checklists for widows and widowers. Designed for adults over 50.',
  },
  {
    name: '988 Suicide & Crisis Lifeline',
    description:
      'Call or text 988 any time. Widowhood is one of the highest-risk times for depression and suicidal thoughts. This is a judgment-free, free, 24/7 line.',
  },
  {
    name: 'Local hospice grief programs',
    description:
      'Even if hospice was not involved in the death, most hospice organizations run free grief support groups open to the whole community. Call any local hospice and ask.',
  },
  {
    name: "Widow's support groups (local)",
    description:
      'Your local senior center, community center, or place of worship likely hosts in-person groups. People who have lived through it understand in a way other friends cannot.',
  },
];

export default function WidowhoodTechHub() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="After a Loss — Managing Your Spouse's Digital Life | TekSure"
        description="A patient, warm guide to managing a deceased spouse's digital accounts, devices, photos, and memories. Take what you need, skip what you are not ready for."
        path="/widowhood-tech-hub"
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
              After Losing Your Partner
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              What to do with their technology — when you are ready.
            </p>
          </div>
        </section>

        {/* Opening Note */}
        <section className="container max-w-3xl pt-10">
          <Card className="rounded-2xl border border-border bg-primary/5">
            <CardContent className="p-8 text-center">
              <p className="text-foreground/90 leading-relaxed text-lg">
                There is no rush.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Take your time. This guide is here when you are ready — not before. Most of these
                tasks have no deadline. The ones that do are listed first.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* First 30 Days */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <Badge variant="outline" className="mb-3">First 30 days</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <Calendar className="h-7 w-7" />
              Only what is urgent
            </h2>
            <p className="text-muted-foreground">
              These are the few things that really do matter in the first month. Everything else
              can wait.
            </p>
          </div>

          <div className="space-y-3">
            {firstMonth.map((item) => (
              <Card key={item.title} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Inventory */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <List className="h-7 w-7" />
                Make a list of their digital life
              </h2>
              <p className="text-muted-foreground">
                Do this on paper or in a notebook. Writing it down gives you something to work
                from. You do not need to do anything with it yet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {inventoryItems.map((item) => (
                <Card key={item.category} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{item.category}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.examples}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Phone Access */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <Smartphone className="h-7 w-7" />
              Accessing their phone
            </h2>
            <p className="text-muted-foreground">
              Phones are where most of daily digital life lives — photos, messages, apps. Here is
              how to get in, legally.
            </p>
          </div>

          <div className="space-y-3">
            {phoneAccess.map((p) => (
              <Card key={p.title} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    {p.description}
                  </p>
                  <p className="text-xs text-primary font-medium">{p.action}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Email Access */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <Mail className="h-7 w-7" />
                Getting into their email
              </h2>
              <p className="text-muted-foreground">
                Email is often the key to everything else — password resets, bills, contacts.
                Each provider has its own process.
              </p>
            </div>

            <div className="space-y-3">
              {emailAccess.map((e) => (
                <Card key={e.service} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{e.service}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{e.steps}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <Users className="h-7 w-7" />
              Social media accounts
            </h2>
            <p className="text-muted-foreground">
              Some families want the profile kept as a memorial. Others want it closed. Both are
              valid. There is no deadline on this decision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {socialMedia.map((s) => (
              <Card key={s.service} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{s.service}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Financial */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <Wallet className="h-7 w-7" />
                Financial accounts
              </h2>
              <p className="text-muted-foreground">
                Each institution has a survivor process. A death certificate and patience are the
                main things you need.
              </p>
            </div>

            <div className="space-y-3">
              {financialClosure.map((f) => (
                <Card key={f.title} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subscriptions */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <Tv className="h-7 w-7" />
              Subscriptions to cancel
            </h2>
            <p className="text-muted-foreground">
              Look through their last six months of credit card and bank statements. Every
              recurring charge is a subscription. Cancel the ones that were only theirs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {subscriptionCancellations.map((s) => (
              <Card key={s.category} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{s.category}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.examples}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Preserving Memories */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <ImageIcon className="h-7 w-7" />
                Preserving the memories
              </h2>
              <p className="text-muted-foreground">
                Do this before closing accounts. Once the account is gone, the data usually goes
                with it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {preservingMemories.map((p) => (
                <Card key={p.title} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Legal */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <Scale className="h-7 w-7" />
              Legal resources
            </h2>
            <p className="text-muted-foreground">
              A small amount of legal help goes a long way. Even a one-hour consultation will
              save you weeks of confusion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {legalResources.map((l) => (
              <Card key={l.name} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{l.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{l.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Grief Support */}
        <section className="bg-primary/5 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <HeartPulse className="h-7 w-7" />
                Grief support
              </h2>
              <p className="text-muted-foreground">
                You do not have to carry this alone. Free support exists everywhere if you want
                it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {griefSupport.map((g) => (
                <Card key={g.name} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{g.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{g.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container max-w-4xl py-14">
          <Card className="rounded-2xl border border-border bg-card">
            <CardContent className="p-8 md:p-10 text-center">
              <HeartHandshake className="h-8 w-8 text-primary mx-auto mb-3" />
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                We can help you with any of this
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Sitting down with someone patient who understands the technology can turn hours
                of confusion into one calm conversation. Book a session whenever you are ready.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button asChild size="lg" className="rounded-xl gap-2">
                  <Link to="/book">
                    <Phone className="h-4 w-4" />
                    Book a session
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link to="/caregiver-hub">
                    Caregiver resources
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
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
