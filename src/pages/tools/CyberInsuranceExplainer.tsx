import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function CyberInsuranceExplainer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cyber Insurance for Individuals — Worth It? | TekSure" description="Identity-theft and personal cyber insurance — when it actually helps, when it&apos;s a scam. Plain-English explainer." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cyber Insurance Explainer</h1>
          <p className="text-lg text-muted-foreground">Personal identity-theft and cyber insurance — honest take.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it usually covers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Identity theft restoration</strong> — case manager helps clean up after fraud.</li>
              <li><strong>Lost wages</strong> while resolving fraud (limited).</li>
              <li><strong>Legal fees</strong> if needed.</li>
              <li><strong>Stolen funds</strong> from accounts (varies wildly — read fine print).</li>
              <li><strong>Cyber extortion / ransomware</strong> on personal computer.</li>
              <li><strong>Online fraud reimbursement</strong> for purchases that went bad.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to get it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Add to existing homeowners or renters insurance</strong> — usually $25-100/year. Cheapest path. Talk to your existing insurer.</li>
              <li><strong>AARP — also offers identity-theft restoration</strong> as a member benefit.</li>
              <li><strong>LifeLock / IdentityForce / Identity Guard</strong> — $10-30/month standalone services. Includes monitoring + insurance.</li>
              <li><strong>Aura</strong> — newer all-in-one service (VPN + antivirus + ID theft).</li>
              <li><strong>Some bank accounts</strong> include identity theft coverage. Check your bank perks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When it\'s WORTH it</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>You don\'t want to deal with paperwork if fraud happens — pay for the restoration service.</li>
              <li>You\'ve been a victim before.</li>
              <li>You have lots of online accounts and a complicated financial life.</li>
              <li>Cost is bundled affordably with homeowners insurance ($25-100/year).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When it\'s probably NOT worth it</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>You\'ve already taken the FREE protective steps (credit freeze, two-factor, password manager).</li>
              <li>You\'re willing to do paperwork yourself.</li>
              <li>You\'re paying $30/month for a service you\'ll never call.</li>
              <li>Most damage from credit-card fraud is already covered by your card company\'s zero-liability policy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Credit freeze</strong> at all 3 bureaus (free, federal). Stops most identity theft cold.</li>
              <li><strong>USPS Informed Delivery</strong> (free) — see mail before it arrives.</li>
              <li><strong>Free credit monitoring from Credit Karma, Capital One CreditWise, Chase Credit Journey</strong> — alerts on credit changes.</li>
              <li><strong>Two-factor authentication</strong> on all major accounts.</li>
              <li><strong>Password manager</strong> (Bitwarden free) — no more reused passwords.</li>
              <li><strong>FreeIdentityTheft.gov</strong> from the FTC — step-by-step recovery if you become a victim.</li>
            </ul>
            <p className="text-sm mt-3">These free steps prevent 90% of identity-theft cases. Insurance covers what\'s left.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best path</h3>
            <p className="text-sm text-muted-foreground">Do the FREE steps first (credit freeze, two-factor, password manager). Then ADD identity-theft coverage to your existing homeowners insurance for $25-100/year. Best ratio of protection to cost. Skip the standalone $30/month services unless you really want a personal "case manager" if it ever happens.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
