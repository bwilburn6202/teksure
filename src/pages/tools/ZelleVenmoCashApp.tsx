import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Send } from 'lucide-react';

const APPS = [
  { name: 'Zelle', cost: 'FREE (built into bank app)', best: 'Bank-to-bank, instant. Your bank&apos;s app already has it. Best for trusted recipients only — NOT recoverable if scammed.', good: 'Best with trusted family.' },
  { name: 'Venmo (PayPal)', cost: 'FREE for friends', best: 'Most popular among adult kids. Has social feed. Owned by PayPal. Optional debit card.', good: 'Best for adult kids/grandkids.' },
  { name: 'Cash App', cost: 'FREE', best: 'Block (Square) brand. Popular with younger people. Includes free debit card + bitcoin.', good: 'Best for under-30 family.' },
  { name: 'PayPal', cost: 'FREE for friends', best: 'Oldest. Best buyer protection if used for purchases ("Goods &amp; Services" option).', good: 'Best for online buys.' },
  { name: 'Apple Cash (iPhone only)', cost: 'FREE', best: 'Send via Messages app. Stays in Apple ecosystem. Easy if everyone is on iPhone.', good: 'Best for iPhone families.' },
];

export default function ZelleVenmoCashApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Zelle, Venmo, Cash App — Compared | TekSure" description="Pay your kids and grandkids instantly. Plain-English picks for money-transfer apps and the scam to watch out for on Zelle." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Send className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Zelle, Venmo, Cash App</h1>
          <p className="text-lg text-muted-foreground">Send money instantly to family.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">⚠ Zelle scam warning</h2>
            <p className="text-sm">Zelle is INSTANT and IRREVERSIBLE. Once sent, banks rarely refund — even if you were scammed. Scammers love it for this. Common trick: "We need to transfer your money to a safe account" or "Click this link to verify your Zelle account". <strong>Real banks NEVER ask you to send money via Zelle to "verify" or "secure" anything.</strong></p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Use Zelle ONLY with people you know</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Spouse, kids, grandkids, sibling, trusted close friend.</li>
              <li>NEVER for online purchases (no buyer protection).</li>
              <li>NEVER to a stranger.</li>
              <li>NEVER because someone called and asked you to.</li>
              <li>Always double-check name and amount before sending.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For online purchases — use PayPal</h2>
            <p className="text-sm">If buying from a stranger online (Facebook Marketplace, Craigslist, eBay): <strong>PayPal &quot;Goods &amp; Services&quot;</strong> is the safest. Costs 3% fee but gives full buyer protection. Item never arrived? PayPal refunds you. Don&apos;t use Zelle/Venmo/Cash App for purchases — no protection.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Set up 2FA on the app and your bank.</li>
              <li>Set a transfer limit (most apps allow $500-1,000/day max).</li>
              <li>Don&apos;t leave money sitting in Venmo/Cash App — they&apos;re not FDIC-insured. Move to bank.</li>
              <li>Lock the app with Face ID / fingerprint.</li>
              <li>Disable "social feed" on Venmo (Settings → Privacy → Private). Public feed shows your transactions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If you got scammed</h3>
            <p className="text-sm text-muted-foreground">Call your BANK immediately — same day, ideally within an hour. New 2024 federal rules require some Zelle scam refunds. Report to <strong>reportfraud.ftc.gov</strong>. File a police report (paper trail). Scams via Venmo/Cash App: open dispute in app + report to FTC. Recovery rare but try.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
