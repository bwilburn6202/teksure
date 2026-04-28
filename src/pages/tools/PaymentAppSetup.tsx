import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wallet, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

type App = 'zelle' | 'venmo' | 'cash-app' | 'apple-cash';

interface PayApp {
  name: string;
  who: string;
  setup: string[];
  send: string[];
  fees: string;
  protection: string;
  notes: string[];
  link: string;
}

const APPS: Record<App, PayApp> = {
  'zelle': {
    name: 'Zelle',
    who: 'Best for: people whose bank already has it built in (Bank of America, Chase, Wells Fargo, Capital One, USAA, and most others). Money moves bank-to-bank in minutes.',
    setup: [
      'Open your bank app (most US banks).',
      'Find "Send Money with Zelle" or "Zelle".',
      'Enroll with your phone number or email.',
      'Done — there is no separate app to download.',
    ],
    send: [
      'In your bank app, tap Zelle.',
      'Pick a recipient (phone number or email).',
      'Enter amount → confirm.',
      'Money is in their account in minutes if they are also Zelle-enrolled.',
    ],
    fees: 'No fees from Zelle. Some banks charge their own.',
    protection: 'Almost none. Zelle is treated like cash — once sent, gone. Use ONLY with people you actually know.',
    notes: [
      'Most common scam: someone tricks you into sending Zelle as "verification" or "to refund a check". Hang up if asked.',
      'Limit: most banks cap Zelle at $1,000-$3,500 per day. Worth knowing.',
    ],
    link: 'https://www.zellepay.com/get-started',
  },
  'venmo': {
    name: 'Venmo',
    who: 'Best for: paying friends back, splitting dinner, paying for casual freelance work. Owned by PayPal.',
    setup: [
      'Install "Venmo" from the App Store / Play Store.',
      'Sign up with email and phone.',
      'Link your bank account or debit card.',
      'Verify identity (driver\'s license).',
    ],
    send: [
      'Open Venmo → tap "Pay or Request" (button at bottom).',
      'Type recipient\'s name or @venmo.',
      'Enter amount, write a description.',
      'Tap "Pay".',
    ],
    fees: 'Free with bank account / debit card. 3% fee for credit card.',
    protection: 'Better than Zelle if marked as "Goods & Services" — gives you a dispute window. "Friends" payments have no protection.',
    notes: [
      'Default to private transactions: Settings → Privacy → "Private". Otherwise your payments are public!',
      'Cash out daily — money can sit in Venmo earning nothing. Auto-transfer to your bank is free.',
    ],
    link: 'https://venmo.com/help/article/getting-started',
  },
  'cash-app': {
    name: 'Cash App',
    who: 'Best for: people without traditional bank accounts. Gives you a free debit card and account-like features. Owned by Block (formerly Square).',
    setup: [
      'Install "Cash App".',
      'Sign up with phone or email.',
      'Pick your $cashtag (like @username).',
      'Order the free Cash Card debit card if you want one.',
    ],
    send: [
      'Open Cash App → enter amount → tap "Pay".',
      'Type the recipient\'s $cashtag, phone, or email.',
      'Tap "Pay".',
    ],
    fees: 'Free standard transfers. 1.5% for instant.',
    protection: 'Limited — closer to Zelle than Venmo. Only direct fraud cases get refunded.',
    notes: [
      'Big with younger family. If grandkids ask for "Cash App", this is what they mean.',
      'High scam target — people impersonate Cash App support and ask for your password. Cash App support never DMs you.',
    ],
    link: 'https://cash.app',
  },
  'apple-cash': {
    name: 'Apple Cash',
    who: 'Best for: iPhone families. Built into Messages — send money inside any text conversation.',
    setup: [
      'Settings → Wallet & Apple Pay → Apple Cash → Enable.',
      'Verify identity (driver\'s license + Social Security number).',
      'Done — works through Messages and Wallet automatically.',
    ],
    send: [
      'Open a Messages conversation.',
      'Tap the "+" or apps icon → Apple Cash.',
      'Enter amount → "Pay" → confirm with Face ID.',
      'Recipient gets it in their Apple Cash card or transfers to bank.',
    ],
    fees: 'Free.',
    protection: 'Limited (similar to Venmo Friends). Disputes harder than credit-card chargebacks.',
    notes: [
      'iPhone-only. Recipients also need iPhone to receive.',
      'Very phishing-resistant — the entire flow goes through Face ID, not a password.',
    ],
    link: 'https://support.apple.com/en-us/HT207875',
  },
};

const APP_OPTIONS: { id: App; label: string }[] = [
  { id: 'zelle',     label: 'Zelle (bank-to-bank)' },
  { id: 'venmo',     label: 'Venmo' },
  { id: 'cash-app',  label: 'Cash App' },
  { id: 'apple-cash', label: 'Apple Cash' },
];

export default function PaymentAppSetup() {
  const [app, setApp] = useState<App>('zelle');
  const a = APPS[app];

  return (
    <>
      <SEOHead
        title="Payment App Setup"
        description="Set up Zelle, Venmo, Cash App, or Apple Cash safely. Compare the four most-used US payment apps, with honest fee info and scam warnings for each."
        path="/tools/payment-app-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-green-50 via-background to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-green-500/10 rounded-full">
                <Wallet className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Payment App Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Send money to family in minutes. Pick the right app — and avoid the scams that target every one of them.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Payment App Setup' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Which app does your family use?</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {APP_OPTIONS.map(o => (
                  <button key={o.id} onClick={() => setApp(o.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      app === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <Badge variant="outline" className="mb-2">{a.name}</Badge>
              <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {a.who}</p>
              <div className="grid sm:grid-cols-2 gap-2 mb-3">
                <Badge variant="outline" className="text-xs justify-start">Fees: {a.fees}</Badge>
                <Badge variant="outline" className="text-xs justify-start">Protection: {a.protection}</Badge>
              </div>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Setup</p>
              <ol className="space-y-1.5 mb-4">
                {a.setup.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-primary font-semibold shrink-0">{i + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Send money</p>
              <ol className="space-y-1.5 mb-4">
                {a.send.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-primary font-semibold shrink-0">{i + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Worth knowing</p>
              <ul className="space-y-1">
                {a.notes.map((n, i) => (
                  <li key={i} className="flex gap-2 text-sm"><span className="text-primary shrink-0">•</span><span>{n}</span></li>
                ))}
              </ul>

              <a href={a.link} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline">
                Official help <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">The single most important rule for ALL payment apps</p>
                <p className="text-muted-foreground">
                  Treat any payment app like cash. Once sent, the money is gone. Send only to people you actually know — never to "verify" something, "release" a prize, or "refund" a check. If a caller pressures you to send Zelle/Venmo/Cash App, they are scamming you.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Five universal safety habits</p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">•</span><span>Turn on biometric unlock (Face ID / fingerprint) for the app.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Send a $1 test before sending a large amount to a new contact.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Set a daily transfer limit in your bank settings — even $500/day is plenty for normal use.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Check the recipient name carefully — typos can\'t be undone.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Cash out daily. Money sitting in payment apps earns no interest and is less protected than in your bank.</span></li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/online-banking-safety" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Online Banking Safety</p>
                <p className="text-xs text-muted-foreground mt-0.5">Lock down your bank account first.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Check that "send Zelle to verify" message.</p>
              </Link>
              <Link to="/tools/marketplace-scam-spotter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Marketplace Scam Spotter</p>
                <p className="text-xs text-muted-foreground mt-0.5">For payment-app marketplace scams.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
