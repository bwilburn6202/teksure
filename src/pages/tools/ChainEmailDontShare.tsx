import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MailX } from 'lucide-react';

export default function ChainEmailDontShare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chain Emails: Don't Forward | TekSure" description="How to spot chain emails, hoaxes, and 'forward to 10 people' scams. Plain-English guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MailX className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chain Emails: Don&apos;t Forward</h1>
          <p className="text-lg text-muted-foreground">If it says &quot;send to 10 people&quot; — delete it.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Spot a chain email</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Forward this to 10 friends or bad luck.&quot;</li>
              <li>&quot;Microsoft will pay you $1 for each forward.&quot; (FAKE.)</li>
              <li>&quot;Bill Gates is sharing his fortune.&quot; (FAKE.)</li>
              <li>&quot;Missing child — share everywhere.&quot; (Usually old + already found.)</li>
              <li>&quot;Prayer request — pass it on.&quot; (Sentiment-bait.)</li>
              <li>Long forwarded email with 50 names in TO field.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why they&apos;re harmful</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Spreads misinformation — friends think you vetted it.</li>
              <li>Exposes friends&apos; emails to scammers (TO field harvesting).</li>
              <li>Some carry virus links / phishing.</li>
              <li>Clogs inboxes.</li>
              <li>Damages your credibility — people stop reading your emails.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Verify before sharing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Snopes.com</strong> — search the headline. Free.</li>
              <li><strong>FactCheck.org</strong> — political + health hoaxes.</li>
              <li><strong>Reuters Fact Check</strong> — viral claims.</li>
              <li>Search the exact headline + word &quot;hoax&quot; on Google.</li>
              <li>If you can&apos;t verify in 2 min — don&apos;t share.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you must forward something real</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use BCC — protect friends&apos; emails from harvesting.</li>
              <li>Delete the long forward chain at the bottom first.</li>
              <li>Add 1 sentence why it matters to YOU.</li>
              <li>Verify with Snopes first.</li>
              <li>Only send to people who&apos;d actually want it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Polite reply to chain-email senders</h3>
            <p className="text-sm text-muted-foreground">&quot;Thanks for thinking of me — I checked Snopes and this one&apos;s a hoax. Wanted to let you know so you don&apos;t pass it on.&quot; Most senders appreciate it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
