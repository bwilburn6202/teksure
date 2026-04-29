import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldX } from 'lucide-react';

export default function MedicareScamDefense() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medicare Scam Defense | TekSure" description="Spot Medicare scams. Plain-English red flags + reporting for senior Medicare fraud." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldX className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medicare Scam Defense</h1>
          <p className="text-lg text-muted-foreground">$60B/yr in Medicare fraud. Don&apos;t be a victim.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">RULE: Medicare NEVER calls you</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Medicare doesn&apos;t cold-call.</li>
              <li>Medicare doesn&apos;t door-knock.</li>
              <li>Medicare doesn&apos;t ask for SSN over phone.</li>
              <li>Medicare doesn&apos;t threaten cancellation.</li>
              <li>If unsure — hang up + call Medicare directly: 1-800-MEDICARE.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>&quot;New Medicare card&quot;</strong> — asks for SSN. Fake.</li>
              <li><strong>Free knee braces / back braces</strong> — bills Medicare $1,000+ for nothing.</li>
              <li><strong>DNA test kits</strong> — &quot;free cancer screening,&quot; bills Medicare.</li>
              <li><strong>Diabetic supplies</strong> — over-orders + bills.</li>
              <li><strong>Hospice scams</strong> — sign up healthy people.</li>
              <li><strong>Plan switch pressure</strong> — &quot;your plan is ending.&quot;</li>
              <li><strong>Free meals to listen to pitch</strong> — usually overpriced Medicare Advantage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Protect your Medicare number</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Treat like credit card number.</li>
              <li>Only doctor + Medicare-approved providers need it.</li>
              <li>Never give to phone callers, door knockers, &quot;free testing.&quot;</li>
              <li>Check Medicare Summary Notices for charges you didn&apos;t get.</li>
              <li>Sign up for Medicare.gov account to monitor claims.</li>
              <li>If number stolen — call 1-800-MEDICARE for new card.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If contacted</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hang up. No conversation needed.</li>
              <li>Don&apos;t say &quot;yes&quot; (some record + use voice).</li>
              <li>Don&apos;t press numbers.</li>
              <li>Block number after hangup.</li>
              <li>If they have your # — they don&apos;t have your data, they guessed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Report fraud</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>1-800-MEDICARE</strong> (1-800-633-4227) — official line.</li>
              <li><strong>SMP (Senior Medicare Patrol)</strong> — smpresource.org. Free.</li>
              <li><strong>HHS Office of Inspector General</strong> — oig.hhs.gov/fraud.</li>
              <li><strong>FTC</strong> — reportfraud.ftc.gov.</li>
              <li><strong>State Insurance Commissioner</strong> — for plan switching.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help: SHIP</h3>
            <p className="text-sm text-muted-foreground"><strong>SHIP (State Health Insurance Assistance Program)</strong> — FREE counselors in every state. shiphelp.org. Help compare plans, fight bills, report scams. Better than ANY salesperson because they don&apos;t earn commission.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
