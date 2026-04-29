import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function ScamDatingFlags() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Romance Scam Red Flags | TekSure" description="Romance scams cost seniors $1.3 BILLION/year. Plain-English red flags + escape strategies for online dating scams." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Romance Scam Red Flags</h1>
          <p className="text-lg text-muted-foreground">$1.3 billion/yr lost to romance scams.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Scammer playbook</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Profile picture is too good — model, soldier, doctor, oil rig worker.</li>
              <li>Love-bombs you within days. "I&apos;ve never felt this way."</li>
              <li>Always overseas. Working / military / oil platform.</li>
              <li>Refuses video chat. Always "bad connection".</li>
              <li>Eventually has emergency: medical bill, customs fee, business deal.</li>
              <li>Asks for $500-50,000+ via wire / gift cards / crypto.</li>
              <li>Promises to repay 10x.</li>
              <li>Vanishes when payment stops or victim wakes up.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Red flags — every scammer has them</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Profile: only 1-3 photos. Too perfect.</li>
              <li>"Widowed with one daughter" sob story common.</li>
              <li>Wants to move to text/email/WhatsApp fast (off the dating app).</li>
              <li>Says "I love you" within 1-3 weeks.</li>
              <li>"My phone is broken" excuses video chat.</li>
              <li>Spelling/grammar weird sometimes.</li>
              <li>Story doesn&apos;t add up between conversations.</li>
              <li>ALWAYS ends in money request.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Test them</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Reverse image search</strong> — save photo, upload to images.google.com. Often shows it&apos;s a stolen model photo.</li>
              <li><strong>Demand video chat</strong> within 1 week. Real people will. Scammers won&apos;t.</li>
              <li><strong>"Ask grandkid to verify"</strong> — show their profile to your tech-savvy grandchild. Outside view spots scams fast.</li>
              <li><strong>Google their stories</strong> — copy/paste their exact words. Often appear on other scam victims&apos; reports.</li>
              <li><strong>NEVER send money</strong> — to ANYONE you haven&apos;t met in person. Period.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you&apos;ve been scammed</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Stop sending money IMMEDIATELY.</li>
              <li>Call your bank. Stop pending wires.</li>
              <li>Report to <strong>FTC at reportfraud.ftc.gov</strong>.</li>
              <li>Report to <strong>FBI IC3 at IC3.gov</strong>.</li>
              <li>Tell trusted family. Don&apos;t hide from shame — it happened to millions.</li>
              <li>Therapy helps. The grief of romantic betrayal is real.</li>
              <li>Money rarely recovered — but reporting helps protect others.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">"I&apos;m too smart for this"</h3>
            <p className="text-sm text-muted-foreground">Lawyers, doctors, teachers, military officers — all get scammed. Loneliness is the vulnerability, not intelligence. Scammers are professionals. They have scripts. They train. The defense is ONE rule: never send money to someone you haven&apos;t met in person.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
