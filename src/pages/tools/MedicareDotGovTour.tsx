import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cross } from 'lucide-react';

export default function MedicareDotGovTour() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medicare.gov Tour for Seniors | TekSure" description="Find your way around Medicare.gov. Plain-English tour for senior beneficiaries." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cross className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medicare.gov Tour</h1>
          <p className="text-lg text-muted-foreground">Master your Medicare account online.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Most useful tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Find a doctor</strong> — &quot;Find &amp; Compare&quot; tool.</li>
              <li><strong>Plan Finder</strong> — compare Part D + Advantage.</li>
              <li><strong>Care Compare</strong> — hospital + nursing home ratings.</li>
              <li><strong>What&apos;s covered</strong> — coverage lookup.</li>
              <li><strong>Costs</strong> — what you&apos;ll pay.</li>
              <li><strong>Get forms</strong> — appeals, change plans.</li>
              <li><strong>Track claims</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup MyMedicare</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to medicare.gov/account.</li>
              <li>Login.gov or ID.me account.</li>
              <li>Need: Medicare number, last 4 SSN.</li>
              <li>Verify identity.</li>
              <li>Sign in for personalized info.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Plan Finder = annual must</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open Enrollment Oct 15 - Dec 7 yearly.</li>
              <li>Use Plan Finder to compare.</li>
              <li>Enter your medications.</li>
              <li>See cheapest Part D plan FOR YOU.</li>
              <li>Most seniors save $200-1,500/yr by switching.</li>
              <li>Free + 30 min worth your time.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Care Compare</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Star ratings 1-5 for hospitals.</li>
              <li>Doctor ratings.</li>
              <li>Nursing home quality.</li>
              <li>Home health agency ratings.</li>
              <li>Hospice ratings.</li>
              <li>Use BEFORE big medical decisions.</li>
              <li>4-5 stars = significantly better outcomes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free help: SHIP</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>State Health Insurance Assistance Program.</li>
              <li>shiphelp.org or 1-877-839-2675.</li>
              <li>Free 1-on-1 Medicare counselors.</li>
              <li>Help with Plan Finder.</li>
              <li>Compare plans for your meds.</li>
              <li>Better than ANY salesperson — they&apos;re unbiased.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Avoid sales call</h3>
            <p className="text-sm text-muted-foreground">Insurance &quot;agents&quot; calling about Medicare = often scammer or commission salesperson. Use Medicare.gov directly. Use SHIP for advice. Avoid Medicare Advantage TV ads with celebrities — they push specific plans for commission. Compare on plan finder yourself.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
