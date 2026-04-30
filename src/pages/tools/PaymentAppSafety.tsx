import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, AlertTriangle, ShieldCheck } from 'lucide-react';

const APPS = [
  { id: 'venmo', name: 'Venmo', emoji: '💸', owner: 'Owned by PayPal',
    safety: ['Set your account to "Private" — anyone can see your payments by default.', 'Never accept money from strangers — it\'s often the first step in a scam.', 'Turn on the PIN or Face ID lock in Settings → Security.', 'Enable two-factor authentication.'],
    scams: ['"I sent money by mistake, please send it back" — the original payment will reverse, leaving you out the money you sent.', 'Sellers on Marketplace asking for Venmo "Friends and Family" — this removes buyer protection. Use "Goods and Services" instead.'] },
  { id: 'zelle', name: 'Zelle', emoji: '🏦', owner: 'Built into most US banks',
    safety: ['Treat Zelle like cash. Once it\'s sent, it\'s gone — no chargebacks.', 'Only send money to people you KNOW personally — never to strangers.', 'Verify the phone number or email before sending. One typo and your money goes to a stranger.', 'Banks are starting to refund some Zelle scams as of 2025, but recovery is not guaranteed.'],
    scams: ['Fake "bank fraud" call asking you to "send Zelle to yourself" to test — you\'re actually sending to the scammer.', 'Marketplace buyers offering Zelle for big-ticket items, then claiming the payment "didn\'t go through".'] },
  { id: 'cashapp', name: 'Cash App', emoji: '💵', owner: 'Owned by Block (formerly Square)',
    safety: ['Enable the Security Lock (PIN, Face ID) in Profile → Privacy & Security.', 'Turn on two-factor login.', 'Don\'t click on Cash App "support" links from search engines — Cash App\'s real support is in the app.'],
    scams: ['Fake "Cash App customer service" numbers in Google ads and on social media.', '"Cash flips" — anyone promising to multiply your money is stealing it.', 'Random $50 from a stranger — they\'ll demand it back, plus more.'] },
  { id: 'paypal', name: 'PayPal', emoji: '🅿️', owner: 'PayPal',
    safety: ['Use "Goods and Services" — gives you 180-day buyer protection. Never use "Friends and Family" with strangers.', 'Turn on two-factor in Settings → Security.', 'Watch for fake "PayPal" emails — log in by typing paypal.com, not by clicking links.'],
    scams: ['Fake invoices from random companies — never pay an invoice you didn\'t expect.', '"Overpayment" scam — they "accidentally" send you too much, ask for the difference back, then reverse the original payment.'] },
];

export default function PaymentAppSafety() {
  const [open, setOpen] = useState<string>('venmo');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Venmo, Zelle, Cash App, PayPal Safety Guide | TekSure" description="Sending money on your phone is convenient — and a scammer's favorite tool. Plain-English safety steps for Venmo, Zelle, Cash App, and PayPal." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DollarSign className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Payment App Safety</h1>
          <p className="text-lg text-muted-foreground">Venmo, Zelle, Cash App, PayPal — what to watch out for.</p>
        </div>

        <Card className="mb-6 border-destructive">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive shrink-0" />
              <div>
                <h2 className="font-bold mb-1">The golden rule</h2>
                <p className="text-sm">Once you send money on these apps, it's almost impossible to get back. <strong>Only send to people you actually know.</strong> If you wouldn't hand them $200 in cash, don't send it on the app.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {APPS.map(a => (
            <button key={a.id} onClick={() => setOpen(a.id)} className={`p-3 rounded-lg border-2 ${open === a.id ? 'border-primary bg-primary/10' : 'border-muted'}`}>
              <div className="text-2xl mb-1">{a.emoji}</div>
              <div className="text-sm font-semibold">{a.name}</div>
            </button>
          ))}
        </div>

        {APPS.filter(a => a.id === open).map(a => (
          <div key={a.id}>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-1">{a.emoji} {a.name}</h2>
                <p className="text-sm text-muted-foreground mb-4">{a.owner}</p>
                <h3 className="font-bold mb-2 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-600" />Safety steps</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm mb-4">{a.safety.map((s, i) => <li key={i}>{s}</li>)}</ul>
                <h3 className="font-bold mb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-destructive" />Common scams</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">{a.scams.map((s, i) => <li key={i}>{s}</li>)}</ul>
              </CardContent>
            </Card>
          </div>
        ))}

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If you got scammed</h3>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Open the app and report the transaction as fraud right away.</li>
              <li>Call your bank — they may be able to reverse it if it just happened.</li>
              <li>Report to the FTC at reportfraud.ftc.gov.</li>
              <li>If a scammer impersonated a bank, also call the bank's real number on the back of your card.</li>
            </ol>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
