import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function MedicareEnrollmentTimeline() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medicare Enrollment Timeline | TekSure" description="When to enroll. Late penalties. Plain-English Medicare timeline for 64-year-olds + already-on Medicare." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calendar className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medicare Enrollment Timeline</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t miss the windows.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Initial Enrollment Period (IEP)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>3 months BEFORE your 65th birthday month.</li>
              <li>The month you turn 65.</li>
              <li>3 months AFTER 65th birthday month.</li>
              <li>= 7-month window total.</li>
              <li>Sign up on time = no penalty.</li>
              <li>Late = lifetime 10% penalty per year late on Part B.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If still working at 65</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>If employer covers you (20+ employees) — can delay Part B.</li>
              <li>Special Enrollment Period 8 months after job ends.</li>
              <li>Smaller employer (under 20) — Medicare is primary, sign up.</li>
              <li>Get "creditable coverage" letter from employer for proof.</li>
              <li>Mistakes here = costly penalties.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Part D (drugs) timing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Same IEP window.</li>
              <li>Late = 1% lifetime penalty per month late on Part D.</li>
              <li>Even if no current prescriptions — STILL enroll cheap basic plan to avoid future penalty.</li>
              <li>Can change plans annually during AEP.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Annual Enrollment Period (AEP)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>October 15 - December 7</strong> every year.</li>
              <li>Switch Medicare Advantage plans.</li>
              <li>Switch Part D plans.</li>
              <li>Switch BETWEEN Original Medicare + Medicare Advantage.</li>
              <li>Changes take effect January 1.</li>
              <li>Compare every year — plans + drugs + costs change.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>SHIP</strong> — State Health Insurance Assistance Program. Free unbiased Medicare counselors. shiphelp.org.</li>
              <li><strong>1-800-MEDICARE</strong> — free official line.</li>
              <li><strong>Medicare.gov Plan Finder</strong> — compare drugs + plans for your area.</li>
              <li><strong>SSA.gov/medicare</strong> — apply online.</li>
              <li>Avoid commission-based "Medicare advisors" — biased.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Most-missed: Medigap window</h3>
            <p className="text-sm text-muted-foreground">Medigap (Medicare Supplement) — best 6-month window starts when you sign up for Part B. After that, insurers can charge more / deny based on health. Don&apos;t miss this window.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
