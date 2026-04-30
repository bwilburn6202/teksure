import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function PhilipsLifelineSenior() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Philips Lifeline for Senior Customers | TekSure" description="Established medical alert from Philips. Reviewed for senior emergency safety." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Philips Lifeline</h1>
          <p className="text-lg text-muted-foreground">Established. Reliable. Hospital-recommended.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Philips Lifeline?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>40+ years in medical alert business.</li>
              <li>Recommended by 200,000+ healthcare professionals.</li>
              <li>Often discharge planners suggest at hospital.</li>
              <li>Reliable, established service.</li>
              <li>Owned by Philips — large medical company.</li>
              <li>One of the original brands.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Plans</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>HomeSafe Standard — $30/month.</li>
              <li>HomeSafe with AutoAlert (fall detection) — $45/month.</li>
              <li>On the Go (mobile + GPS) — $50/month.</li>
              <li>On the Go with AutoAlert — $58/month.</li>
              <li>$50 activation fee.</li>
              <li>Equipment included.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AutoAlert fall detection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Detects falls automatically.</li>
              <li>Alerts monitoring center even if can&apos;t press button.</li>
              <li>Most lab-tested technology.</li>
              <li>Includes if you press wrist accidentally.</li>
              <li>Recommended for fall-prone seniors.</li>
              <li>$15/month upgrade worth it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cancel anytime</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No long-term contracts.</li>
              <li>30-day risk-free trial.</li>
              <li>Cancel anytime no fees.</li>
              <li>Return equipment.</li>
              <li>Better than Life Alert contracts.</li>
              <li>Fair cancellation policy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">vs Medical Guardian</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lifeline — established + healthcare-trusted.</li>
              <li>Medical Guardian — newer, more options.</li>
              <li>Lifeline often $5–$15/month more.</li>
              <li>Both have 24/7 monitoring.</li>
              <li>Both equally responsive.</li>
              <li>Either fine choice.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance + tax deduction</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Medical alert NOT covered by Medicare/insurance usually.</li>
              <li>May be tax-deductible as medical expense.</li>
              <li>Long-term care insurance sometimes covers.</li>
              <li>Some Medicare Advantage plans include.</li>
              <li>Check your specific plan.</li>
              <li>Save receipts for tax time.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If hospital recommended Lifeline</h3>
            <p className="text-sm text-muted-foreground">If a hospital discharge planner recommended Philips Lifeline, that&apos;s a strong endorsement. The service is established and reliable. The slightly higher cost vs Medical Guardian or Bay Alarm Medical reflects their healthcare relationships. Either way — get something. Studies show medical alerts dramatically reduce death + hospital time after falls.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
