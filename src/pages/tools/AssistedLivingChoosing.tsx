import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Building2 } from 'lucide-react';

export default function AssistedLivingChoosing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Choosing Assisted Living for Seniors | TekSure" description="Pick the right assisted living. Plain-English checklist for senior families." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Building2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Choosing Assisted Living</h1>
          <p className="text-lg text-muted-foreground">More choice + transparency now. Choose well.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Levels of senior living</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Independent living</strong> — apartment + meals + activities.</li>
              <li><strong>Assisted living</strong> — adds help with daily activities.</li>
              <li><strong>Memory care</strong> — dementia-specific.</li>
              <li><strong>Skilled nursing / nursing home</strong> — medical care.</li>
              <li><strong>CCRC</strong> — all on one campus.</li>
              <li>Match to current + future needs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost realities</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Independent: $2,500-5,000/mo.</li>
              <li>Assisted living: $4,500-7,500/mo.</li>
              <li>Memory care: $6,000-10,000/mo.</li>
              <li>Skilled nursing: $9,000-12,000/mo.</li>
              <li>Most NOT covered by Medicare.</li>
              <li>Long-term care insurance helps.</li>
              <li>Medicaid covers some after spend-down.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tour checklist</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Visit 3+ facilities.</li>
              <li>Eat lunch there.</li>
              <li>Visit unannounced second time.</li>
              <li>Check smell + cleanliness.</li>
              <li>Talk to current residents.</li>
              <li>Look at activity calendar.</li>
              <li>Meet medical director.</li>
              <li>Ask about staff turnover.</li>
              <li>Read state inspection reports.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Questions to ask</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Staff to resident ratio?</li>
              <li>Costs for additional services?</li>
              <li>What if needs increase?</li>
              <li>Memory care available on-site?</li>
              <li>How handle medical emergencies?</li>
              <li>Family pet policy?</li>
              <li>Visiting hours?</li>
              <li>Trial stay possible?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pressure tactics &quot;sign today.&quot;</li>
              <li>Hidden fees not in contract.</li>
              <li>High staff turnover.</li>
              <li>State violations.</li>
              <li>Smell of urine.</li>
              <li>Residents in hallways unattended.</li>
              <li>Staff disrespectful.</li>
              <li>Ask why if multiple have left.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help</h3>
            <p className="text-sm text-muted-foreground"><strong>A Place for Mom</strong> — free placement. <strong>SeniorAdvisor.com</strong> — reviews. <strong>Long-term Care Ombudsman</strong> — your free advocate. Call before AND during stay. <strong>Caring.com</strong> reviews. Compare extensively.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
