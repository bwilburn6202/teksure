import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  HeartHandshake, ChevronRight, ExternalLink,
  Apple, Mail, Smartphone, Banknote, Facebook, Camera, ShoppingCart,
} from 'lucide-react';

interface ServiceGuide {
  id: string;
  name: string;
  icon: typeof Apple;
  policy: string;
  steps: string[];
  link: string;
}

const SERVICES: ServiceGuide[] = [
  {
    id: 'apple',
    name: 'Apple ID (iPhone, iPad, iCloud)',
    icon: Apple,
    policy: 'Apple has a "Legacy Contact" feature. If your loved one set you as a Legacy Contact in advance, you can request access right away. Otherwise, you will need a court order.',
    steps: [
      'If they pre-named a Legacy Contact: Settings → your name → Sign-In & Security → Legacy Contact (look for the access key).',
      'Visit Apple\'s Digital Legacy page and follow the request form.',
      'You will need: the access key (if any), the death certificate, and the deceased\'s Apple ID email.',
      'No legacy contact set up? You will need a court order naming you as the personal representative.',
    ],
    link: 'https://support.apple.com/en-us/102631',
  },
  {
    id: 'google',
    name: 'Google (Gmail, YouTube, Photos)',
    icon: Mail,
    policy: 'Google\'s "Inactive Account Manager" lets people set what happens after months of inactivity. After death, family can request data access or account closure.',
    steps: [
      'Go to Google\'s "Submit a request regarding a deceased user\'s account" form.',
      'Choose between: closing the account, getting funds (Google Pay), or requesting data.',
      'Required: scan of your government ID, the death certificate, and the deceased\'s email address.',
      'Google reviews each request manually — expect 2 to 6 weeks.',
    ],
    link: 'https://support.google.com/accounts/troubleshooter/6357590',
  },
  {
    id: 'facebook',
    name: 'Facebook & Instagram (Meta)',
    icon: Facebook,
    policy: 'A Facebook profile can be "memorialized" (kept up with "Remembering" before the name) or removed entirely. Instagram supports the same memorialization.',
    steps: [
      'Go to facebook.com/help/contact/234739086860192 to memorialize the profile.',
      'Or go to facebook.com/help/contact/228813257197480 to request removal.',
      'You will need: a link to their profile, proof of death, and proof you are an immediate family member.',
      'For Instagram: the same forms cover Instagram via Meta\'s help center.',
    ],
    link: 'https://www.facebook.com/help/1506822589577997',
  },
  {
    id: 'phone',
    name: 'Phone carrier (Verizon, AT&T, T-Mobile)',
    icon: Smartphone,
    policy: 'You can transfer the phone number to a survivor\'s account, suspend the line, or close it. Most carriers waive the early termination fee with a death certificate.',
    steps: [
      'Call the carrier\'s customer service. Ask specifically for "the bereavement team" — most have one.',
      'Have ready: the deceased\'s account number or phone, your relationship, the death certificate.',
      'If you want to keep the number, ask to "port it" to your account in the same call.',
      'Ask for any final-bill credits — most carriers prorate the month and waive late fees.',
    ],
    link: 'https://www.consumerreports.org/electronics/cell-phones/how-to-cancel-a-deceased-persons-cell-phone-account-a3043121519/',
  },
  {
    id: 'bank',
    name: 'Banks & credit cards',
    icon: Banknote,
    policy: 'Joint accounts pass to the surviving owner automatically. Sole accounts become part of the estate and need probate paperwork. Subscriptions and recurring charges keep running until the account is closed.',
    steps: [
      'Call each bank. Ask for the estate department — every major bank has one.',
      'Have ready: death certificate, your photo ID, account numbers, executor letter (if you have one).',
      'Ask the bank to print a list of all recurring charges in the last 12 months — this catches forgotten subscriptions.',
      'Cancel or transfer credit cards. Closed-card balances become part of the estate.',
    ],
    link: 'https://consumer.ftc.gov/articles/who-pays-debts-someone-who-died',
  },
  {
    id: 'photos',
    name: 'Photos worth saving',
    icon: Camera,
    policy: 'Before any account is closed, get the photos out. They are often the single most-regretted thing families lose.',
    steps: [
      'Apple: use Apple\'s data download or copy iCloud photos to a hard drive while you still have the password.',
      'Google: takeout.google.com lets you download every photo in a single .zip.',
      'Facebook: facebook.com → Settings → "Your Information" → "Download Your Information".',
      'Save copies in two places — an external drive AND a family member\'s cloud account.',
    ],
    link: 'https://takeout.google.com',
  },
  {
    id: 'subs',
    name: 'Subscriptions and recurring charges',
    icon: ShoppingCart,
    policy: 'Streaming, app store, gym, magazines — most keep charging until canceled. Worth a methodical sweep through the last 12 months of bank statements.',
    steps: [
      'Pull the last 12 months of bank and credit card statements.',
      'Highlight every recurring charge — Netflix, Hulu, iCloud storage, Adobe, etc.',
      'Cancel each one by signing into the account directly (not by calling the bank — bank "stop payments" can leave the account open).',
      'When you cannot get into an account, ask the bank to refuse future charges from that merchant.',
    ],
    link: 'https://consumer.ftc.gov/articles/who-pays-debts-someone-who-died',
  },
];

export default function AccountAfterLoss() {
  return (
    <>
      <SEOHead
        title="Account After Loss — Closing Digital Accounts"
        description="A free, plain-English guide to closing or transferring a loved one's digital accounts after a death — Apple, Google, Facebook, banks, phone carriers, photos, and subscriptions."
        path="/account-after-loss"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <HeartHandshake className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Closing Accounts After a Loss</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              We are sorry. This page exists to make one part of a hard time a little easier — clear, free, US-focused steps for handling someone&apos;s digital accounts.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Account After Loss' }]} />

          <Card className="border-border bg-amber-50 dark:bg-amber-950/20 mb-8">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Before you do anything</p>
              <ul className="space-y-1.5 text-sm">
                <li className="flex gap-2"><span className="text-amber-600">•</span><span>Get at least 5 certified copies of the death certificate. You will need an original for almost every request.</span></li>
                <li className="flex gap-2"><span className="text-amber-600">•</span><span>Save photos and family videos out of every account first — accounts get closed, photos can be lost.</span></li>
                <li className="flex gap-2"><span className="text-amber-600">•</span><span>Take screenshots of recurring charges in case you need to dispute them later.</span></li>
                <li className="flex gap-2"><span className="text-amber-600">•</span><span>This guide is general information — for legal advice, talk to a probate attorney in your state.</span></li>
              </ul>
            </CardContent>
          </Card>

          {/* In-page nav */}
          <Card className="border-border mb-8 bg-muted/30">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Jump to a service</p>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                {SERVICES.map(s => (
                  <a key={s.id} href={`#${s.id}`} className="flex items-center gap-2 p-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors">
                    <ChevronRight className="h-4 w-4 shrink-0" />
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {SERVICES.map(s => {
            const Icon = s.icon;
            return (
              <section key={s.id} id={s.id} className="mb-8 scroll-mt-24">
                <Card className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h2 className="font-semibold text-lg">{s.name}</h2>
                        <p className="text-sm text-muted-foreground mt-1">{s.policy}</p>
                      </div>
                    </div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2">Step by step</p>
                    <ol className="space-y-2 text-sm">
                      {s.steps.map((step, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center mt-0.5">{i + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                    <a href={s.link} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1 mt-4 text-sm text-primary hover:underline">
                      Official page <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </section>
            );
          })}

          <Card className="border-border bg-gradient-to-br from-primary/5 to-secondary/5 mb-8">
            <CardContent className="p-6">
              <Badge className="mb-3" variant="secondary">Plan ahead</Badge>
              <p className="font-semibold mb-2">For your own family — set this up now, while you can.</p>
              <p className="text-sm text-muted-foreground mb-4">
                Pick a Legacy Contact on your iPhone today. Set up Google Inactive Account Manager. Save your password manager backup somewhere two trusted people can reach. The hour you spend now saves your family weeks of paperwork later.
              </p>
              <Button asChild>
                <Link to="/tools/family-tech-roundtable">Run the family tech roundtable</Link>
              </Button>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/bereavement-tech" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Bereavement Tech Hub</p>
                <p className="text-xs text-muted-foreground mt-0.5">Wider guide for the months after.</p>
              </Link>
              <Link to="/tools/data-broker-removal" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Data Broker Removal</p>
                <p className="text-xs text-muted-foreground mt-0.5">Stop their info appearing online.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Scammers target grieving families. Check messages.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
