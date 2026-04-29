import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldX } from 'lucide-react';

export default function IrsScamPlaybook() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="IRS Scam Playbook | TekSure" description="The IRS never calls demanding money. Plain-English playbook for spotting fake IRS calls, texts, and emails — and what real IRS contact looks like." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldX className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">IRS Scam Playbook</h1>
          <p className="text-lg text-muted-foreground">"This is the IRS. You owe back taxes..." — it&apos;s a scam.</p>
        </div>

        <Card className="mb-4 bg-green-50 border-green-300 dark:bg-green-950/20 dark:border-green-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The IRS NEVER does these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Calls demanding immediate payment.</li>
              <li>Threatens arrest, deportation, or license revocation.</li>
              <li>Demands payment in gift cards, wire transfer, crypto, or cash courier.</li>
              <li>Calls or emails before sending a paper letter first.</li>
              <li>Asks for credit card numbers over phone.</li>
              <li>Requires a specific payment method.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How the REAL IRS contacts you</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Mail first, always.</strong> Letter on official IRS letterhead.</li>
              <li>Multiple letters before any phone call.</li>
              <li>Phone calls only AFTER mail attempts have failed.</li>
              <li>Payment by check to "U.S. Treasury" or via IRS.gov direct pay.</li>
              <li>Audits scheduled IN WRITING with weeks of notice.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common scam variants</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"Robocall — press 1 to speak to IRS agent"</strong> — hang up.</li>
              <li><strong>"You owe $4,800 — pay in Apple gift cards"</strong> — hang up.</li>
              <li><strong>Fake email "irs.gov-tax-refund.com"</strong> — delete, don&apos;t click.</li>
              <li><strong>"Sheriff is on the way to arrest you"</strong> — fake. Hang up.</li>
              <li><strong>Text message claiming refund</strong> — IRS doesn&apos;t text. Delete.</li>
              <li><strong>Caller ID shows "IRS"</strong> — caller ID is easily faked. Means nothing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you actually owe taxes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You&apos;ll get LETTERS, not phone calls.</li>
              <li>Call IRS yourself at <strong>1-800-829-1040</strong> to confirm.</li>
              <li>Pay only at <strong>IRS.gov/payments</strong>.</li>
              <li>Real penalties have payment plans (call IRS to set one up).</li>
              <li>If unsure about a letter, take it to a CPA or AARP Tax-Aide (free for seniors).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Defense in 3 words</h2>
            <p className="text-sm font-bold">"I&apos;ll call back."</p>
            <p className="text-sm mt-2">Hang up. Look up the IRS phone number yourself (1-800-829-1040). Call them. Real IRS workers will be able to look up your tax records and explain. Scammers vanish.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Report the scam</h3>
            <p className="text-sm text-muted-foreground">Forward scam emails to <strong>phishing@irs.gov</strong>. Forward scam texts to <strong>7726 (SPAM)</strong>. Report scam calls at <strong>tigta.gov</strong> (Treasury Inspector General). FTC at <strong>reportfraud.ftc.gov</strong>. Takes 5 minutes. Helps catch scammers.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
