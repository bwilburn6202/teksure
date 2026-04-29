import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function MedicareScamGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medicare Scam Guide | TekSure" description="Free knee braces, free DNA tests, &quot;new Medicare cards&quot; — these are scams. Plain-English playbook to spot and stop Medicare fraud." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medicare Scam Guide</h1>
          <p className="text-lg text-muted-foreground">$60 BILLION lost to Medicare fraud each year.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The big rule</h2>
            <p className="text-sm font-bold">Medicare NEVER calls or visits you uninvited. Never. If someone calls saying they&apos;re from Medicare — it&apos;s a scam.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common Medicare scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"Free" knee/back braces</strong> — they bill Medicare $1,000+, ship junk, and you can&apos;t get a real one later.</li>
              <li><strong>"Free" DNA cancer test</strong> — billed at $9,000+. Most people qualify for nothing.</li>
              <li><strong>"New Medicare card"</strong> — there&apos;s no new card. Asking for your number = identity theft.</li>
              <li><strong>"Diabetic supplies"</strong> — unsolicited boxes of test strips and lancets billed to Medicare.</li>
              <li><strong>"Free" mobility scooter</strong> — same playbook as knee braces.</li>
              <li><strong>"COVID test kits"</strong> — even though COVID kits are free, scammers want your Medicare number to bill repeatedly.</li>
              <li><strong>Door-to-door agent "switching your plan"</strong> — illegal under CMS rules. Real agents can&apos;t cold-knock.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Protect your Medicare number</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Treat it like a Social Security number — because it CONTAINS a unique ID.</li>
              <li>Never give it to a stranger, even one "from Medicare".</li>
              <li>Only give to your doctor, hospital, pharmacy, or insurance plan.</li>
              <li>Check Medicare Summary Notice every quarter for charges you don&apos;t recognize.</li>
              <li>If stolen → call 1-800-MEDICARE.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Red flags during open enrollment (Oct 15-Dec 7)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Limited time! Today only!" — Medicare doesn&apos;t pressure.</li>
              <li>Cold call about Medicare Advantage plan — illegal.</li>
              <li>Door-knock "Medicare counselor" — illegal.</li>
              <li>"Free dinner" Medicare seminar with hard sell — pause and call SHIP (free state Medicare counselors).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Real help — free</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>1-800-MEDICARE (1-800-633-4227)</strong> — official Medicare line.</li>
              <li><strong>SHIP</strong> — State Health Insurance Assistance Program. Free, unbiased Medicare counselors. Find at <strong>shiphelp.org</strong>.</li>
              <li><strong>Senior Medicare Patrol</strong> — fraud reporting + education. <strong>smpresource.org</strong>.</li>
              <li><strong>Medicare.gov</strong> — official site, plan finder, claims.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">The 1-2-3</h3>
            <p className="text-sm text-muted-foreground">1. Don&apos;t answer unknown calls. 2. Never give your Medicare number to a stranger. 3. Read your quarterly Medicare Summary Notice. Three habits stop 95% of Medicare scams.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
