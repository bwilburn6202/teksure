import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function VAAidAndAttendance() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="VA Aid + Attendance for Senior Veterans | TekSure" description="$2,400/mo for senior veterans needing care. Plain-English Aid + Attendance guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Star className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">VA Aid + Attendance</h1>
          <p className="text-lg text-muted-foreground">$2,400+/mo. Most eligible vets don&apos;t apply.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is it?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pension PLUS extra for vets needing care.</li>
              <li>$2,300-2,800/month tax-free typically.</li>
              <li>Couples can get more.</li>
              <li>For wartime veterans (or surviving spouse).</li>
              <li>Helps pay for in-home care, assisted living, nursing home.</li>
              <li>NOT counted as income for Medicaid in most states.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Eligibility</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Veteran served 90+ days active duty (1+ during wartime).</li>
              <li>Honorable / general discharge.</li>
              <li>Wartime periods: WWII, Korea, Vietnam, Gulf War.</li>
              <li>Need help with daily activities (bathing, dressing, etc.).</li>
              <li>OR housebound.</li>
              <li>Income + asset limits (high — $138K assets allowed 2026).</li>
              <li>Surviving spouses of vets also eligible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apply</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Form 21-2680 (medical) + Form 21P-527EZ (pension).</li>
              <li>VA.gov or visit local VA office.</li>
              <li>Doctor must complete medical eval.</li>
              <li>Free help: VFW or American Legion service officers.</li>
              <li>Process takes 4-12 months.</li>
              <li>Backpay from application date.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SCAM alert</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NEVER pay anyone to help apply — VA help is FREE.</li>
              <li>Predatory &quot;veterans benefits&quot; advisors charge $$$.</li>
              <li>Some push annuity / trust products to qualify (often hurts more than helps).</li>
              <li>Use accredited representatives only.</li>
              <li>VFW + American Legion = FREE + accredited.</li>
              <li>Look up at VA.gov/ogc/accreditation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free help applying</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>VFW</strong> — vfw.org/assistance.</li>
              <li><strong>American Legion</strong> — legion.org.</li>
              <li><strong>DAV (Disabled American Veterans)</strong> — dav.org.</li>
              <li><strong>State Veterans Affairs</strong> — every state has dept.</li>
              <li><strong>County Veteran Service Officer</strong> — most counties have free help.</li>
              <li>All FREE accredited representatives.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Other VA benefits often missed</h3>
            <p className="text-sm text-muted-foreground"><strong>Healthcare</strong> — many qualify, never enrolled. <strong>Burial benefits</strong> — free at national cemetery + headstone. <strong>Survivor benefits</strong> — DIC for surviving spouses. <strong>Property tax exemptions</strong> — most states for disabled vets. Apply for ALL — much money goes unclaimed.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
