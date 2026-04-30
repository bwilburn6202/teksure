import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileSignature } from 'lucide-react';

export default function PowerOfAttorneyTypes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Power of Attorney Types | TekSure" description="Understand POA types. Plain-English guide for seniors choosing the right Power of Attorney." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileSignature className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Power of Attorney Types</h1>
          <p className="text-lg text-muted-foreground">Most important paperwork. Get it RIGHT.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">4 main types</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>General POA</strong> — broad financial powers. Ends if you become incapacitated.</li>
              <li><strong>Durable POA</strong> — continues if you become incapacitated. **MOST IMPORTANT for seniors**.</li>
              <li><strong>Healthcare POA</strong> (Medical POA) — medical decisions only.</li>
              <li><strong>Springing POA</strong> — only takes effect when you become incapacitated.</li>
              <li>Most seniors need <strong>Durable + Healthcare</strong> together.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why you NEED both</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Without POA — family must go to COURT for guardianship.</li>
              <li>Court process: $5K-15K + 6-12 months.</li>
              <li>Court appoints — may not be person you&apos;d pick.</li>
              <li>Embarrassing public process.</li>
              <li>POA done now = $200-500 + 1 hour.</li>
              <li>Without — bills unpaid, accounts frozen.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pick your agent carefully</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Trust 100% — they have access to EVERYTHING.</li>
              <li>Live nearby (or willing to travel).</li>
              <li>Financially responsible.</li>
              <li>Will follow your wishes.</li>
              <li>Have backup agent named.</li>
              <li>Multiple agents — joint decisions slows things.</li>
              <li>One primary + one backup is best.</li>
              <li>Adult child #1 most common, doctor/lawyer rarely.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What POA can do</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pay your bills.</li>
              <li>Manage bank accounts + investments.</li>
              <li>Sign tax returns.</li>
              <li>Sell or buy property (if granted).</li>
              <li>Manage retirement accounts.</li>
              <li>Access safe deposit box.</li>
              <li>Sign contracts on your behalf.</li>
              <li>NOT make medical decisions (separate Healthcare POA).</li>
              <li>NOT change your will.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY vs lawyer</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>State-specific forms</strong> — most states have official POA form.</li>
              <li><strong>LegalZoom, Rocket Lawyer</strong> — $50-150. Decent for simple situations.</li>
              <li><strong>Elder law attorney</strong> — $200-500. Best for complex.</li>
              <li>Get notarized + witnessed (most states require).</li>
              <li>Give copies to: agent, doctor, bank, kids.</li>
              <li>Update every 5 years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help</h3>
            <p className="text-sm text-muted-foreground"><strong>AARP</strong> — free POA forms by state. <strong>FreeWill.com</strong> — free POA online for seniors. <strong>Legal Aid</strong> societies — free for low income. <strong>Senior Legal Services</strong> via Area Agency on Aging — often free. Don&apos;t put off — most seniors regret waiting until crisis.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
