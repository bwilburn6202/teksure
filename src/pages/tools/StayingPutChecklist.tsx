import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function StayingPutChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Aging in Place Checklist for Seniors | TekSure" description="Stay home safely as you age. Plain-English aging-in-place checklist." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Aging in Place</h1>
          <p className="text-lg text-muted-foreground">Stay home. Stay safe. Stay independent.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Home modifications</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Grab bars in bathroom.</li>
              <li>Walk-in shower.</li>
              <li>Stair lift if 2-story.</li>
              <li>Lever door handles.</li>
              <li>Bright lighting.</li>
              <li>Remove rugs (fall hazard).</li>
              <li>Wider doorways.</li>
              <li>Smart home tech.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Care plan</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plan for as needs increase.</li>
              <li>In-home care via agency.</li>
              <li>Family caregivers.</li>
              <li>Adult day programs.</li>
              <li>Respite care.</li>
              <li>Hospice eventually.</li>
              <li>$30-40/hr in-home aide.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior support tech</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Watch with fall detection.</li>
              <li>Medical alert pendant.</li>
              <li>Ring/Nest doorbell + cameras.</li>
              <li>Smart locks.</li>
              <li>Voice assistant (Alexa).</li>
              <li>Smart medication dispenser.</li>
              <li>GPS shoes for dementia.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Connection essential</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Family check-ins regular.</li>
              <li>Friends + neighbors visits.</li>
              <li>Faith community.</li>
              <li>Senior center activities.</li>
              <li>Volunteer work.</li>
              <li>Senior transportation services.</li>
              <li>Loneliness = bigger health risk than smoking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to leave home</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Multiple falls.</li>
              <li>Unable to manage meds safely.</li>
              <li>Wandering / dementia advancing.</li>
              <li>Unable to bathe/dress.</li>
              <li>Cognitive decline severe.</li>
              <li>Caregiver burnout.</li>
              <li>Discuss with family + doctor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free home assessment</h3>
            <p className="text-sm text-muted-foreground">Many Area Agencies on Aging do free home safety assessments. Call <strong>Eldercare Locator: 1-800-677-1116</strong>. Occupational therapist evaluation Medicare-covered with referral. Catches risks early. Stay home safer longer.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
