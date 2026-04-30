import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function VaBenefitsAndApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="VA Benefits & App Coach for Veterans | TekSure" description="Veterans — you may be missing benefits worth $20,000+/year. Plain-English guide to the VA app, healthcare, disability, education, life insurance, and burial benefits." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">VA Benefits & App Coach</h1>
          <p className="text-lg text-muted-foreground">Don\'t miss what you\'ve already earned.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">VA Health Care</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Eligible</strong>: most who served on active duty. Even decades later.</li>
              <li><strong>Cost</strong>: free for service-connected conditions. Low or no cost for many other conditions.</li>
              <li><strong>Includes</strong>: primary care, specialists, mental health, prescription drugs ($0-11/month copay), hearing aids (FREE), vision, dental (varies).</li>
              <li><strong>How to apply</strong>: <strong>va.gov/health-care/apply</strong> or call 1-877-222-VETS.</li>
              <li><strong>Bring</strong>: DD-214, copy of insurance, list of meds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Disability Compensation</h2>
            <p className="text-sm mb-2">Tax-free monthly payment for service-connected conditions, even if not disabling. Most veterans miss this.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Hearing loss/tinnitus from your service — qualifies.</li>
              <li>Knee/back issues from service — qualifies.</li>
              <li>PTSD, anxiety, depression — qualifies if linked to service.</li>
              <li>Diabetes (Agent Orange exposure) — qualifies for Vietnam vets.</li>
              <li>Cancer (burn pit exposure) — PACT Act 2022 expanded coverage.</li>
              <li>10% rating = ~$170/month tax-free for life. 100% = $3,800+/month.</li>
            </ul>
            <p className="text-sm mt-2"><strong>Apply at va.gov/disability/file-claim.</strong> Use a free Veterans Service Organization (VSO) — VFW, American Legion, DAV — to help file. They\'re trained.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Aid & Attendance (most overlooked)</h2>
            <p className="text-sm">For wartime veterans (and their surviving spouses) who need help with daily activities. Up to $2,727/month tax-free for couples (2025).</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Wartime service (any of: WWII, Korea, Vietnam, Gulf War, Iraq/Afghanistan).</li>
              <li>Need help with daily activities (bathing, dressing) OR limited income/assets.</li>
              <li>Apply at <strong>va.gov</strong> → "Pension benefits".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Burial benefits</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Free burial in any of 155 national cemeteries.</li>
              <li>Free headstone or marker.</li>
              <li>Burial allowance: $796 service-connected death; $300 non-service.</li>
              <li>Free flag for casket/cremation urn.</li>
              <li>Apply at <strong>va.gov/burials-memorials</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">VA App (free)</h2>
            <p className="text-sm mb-2">Install <strong>VA: Health and Benefits</strong> from App Store / Play Store. Lets you:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>See your benefit letters and ratings.</li>
              <li>Check disability claim status.</li>
              <li>Refill prescriptions.</li>
              <li>Schedule and join VA telehealth.</li>
              <li>Message your VA doctor.</li>
              <li>Apply for new benefits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free help with your claim</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>VFW (Veterans of Foreign Wars)</strong> — free claims help. Find a Service Officer at vfw.org.</li>
              <li><strong>American Legion</strong> — same. legion.org.</li>
              <li><strong>DAV (Disabled American Veterans)</strong> — DAV.org.</li>
              <li><strong>State Veterans Service Officer</strong> — every state has free veterans benefits help.</li>
              <li><strong>NEVER pay a "claims agent"</strong> percentage of your claim — it\'s illegal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">PACT Act expanded benefits in 2022</h3>
            <p className="text-sm text-muted-foreground">If you served in Vietnam, the Gulf War, Iraq, Afghanistan, or near burn pits — you may now qualify for compensation for cancers and respiratory conditions previously denied. Apply or re-apply: many denied claims are getting reconsidered.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
