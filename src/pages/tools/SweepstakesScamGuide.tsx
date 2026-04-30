import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

export default function SweepstakesScamGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sweepstakes Scam Guide | TekSure" description="&quot;You&apos;ve won!&quot; scams target seniors. Plain-English red flags + how to protect yourself." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Trophy className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sweepstakes Scams</h1>
          <p className="text-lg text-muted-foreground">If you didn&apos;t enter — you didn&apos;t win.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The golden rule</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Real lotteries / sweepstakes never ask for money to claim a prize.</strong></li>
              <li>Real ones don&apos;t require fees, taxes upfront, or shipping.</li>
              <li>Taxes on real wins are filed with IRS, not sent to lottery.</li>
              <li>You can&apos;t win something you didn&apos;t enter.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common sweepstakes scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Publishers Clearing House</strong> — REAL company, fake calls in their name.</li>
              <li><strong>&quot;Foreign lottery&quot;</strong> — Spanish, Canadian, UK lottery wins.</li>
              <li><strong>&quot;Tax + shipping&quot;</strong> — pay $500 to claim $50K.</li>
              <li><strong>&quot;Wire transfer money first&quot;</strong> — gone forever.</li>
              <li><strong>Gift cards as payment</strong> — 100% scam always.</li>
              <li><strong>&quot;Don&apos;t tell anyone yet&quot;</strong> — isolate victim.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Red flags</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phone call or letter you weren&apos;t expecting.</li>
              <li>You don&apos;t remember entering.</li>
              <li>Pressure to act &quot;today.&quot;</li>
              <li>Asks for bank account, SSN, credit card.</li>
              <li>Asks you to wire money / Western Union / send gift cards.</li>
              <li>&quot;Lottery officer&quot; or &quot;IRS agent&quot; calling.</li>
              <li>Check arrives — looks real, deposit + send back portion. Check bounces.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you suspect scam</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stop ALL communication. Don&apos;t argue.</li>
              <li>Don&apos;t deposit any check they sent.</li>
              <li>Don&apos;t send money for any reason.</li>
              <li>Tell trusted family member.</li>
              <li>Block phone number + email.</li>
              <li>Report to FTC: reportfraud.ftc.gov.</li>
              <li>If sent money — call bank IMMEDIATELY, may reverse if quick.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stop the calls</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Register at <strong>donotcall.gov</strong> — FREE.</li>
              <li>Phone carrier scam blocking — Verizon Call Filter, AT&amp;T ActiveArmor (free).</li>
              <li>iPhone — Settings → Phone → Silence Unknown Callers.</li>
              <li>Android — Phone app → Settings → Spam protection.</li>
              <li>Don&apos;t answer unknown numbers — voicemail = real callers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If you fell for one</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t be embarrassed. Scammers target SMART seniors. Tell family + bank immediately. Call <strong>1-877-908-3360 (AARP Fraud Watch helpline)</strong> — counselors help, no judgment. Police usually can&apos;t recover but report still helps. Counseling helps process the loss.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
