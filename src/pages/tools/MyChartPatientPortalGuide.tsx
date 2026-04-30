import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

export default function MyChartPatientPortalGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="MyChart Patient Portal Guide for Seniors | TekSure" description="Use MyChart to access medical records, message doctors, and more." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Stethoscope className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">MyChart Guide</h1>
          <p className="text-lg text-muted-foreground">Online access to your doctor.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What MyChart does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>See test results.</li><li>Message your doctor.</li><li>Schedule appointments.</li><li>Refill prescriptions.</li><li>View medical history.</li><li>Pay bills online.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sign up</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Ask front desk for activation code.</li><li>Visit MyChart.com or app.</li><li>Enter code + create account.</li><li>Add username + password.</li><li>Verify email.</li><li>Done — start using.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Test results</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Posted soon after lab.</li><li>See numbers + ranges.</li><li>Don&apos;t panic at first read.</li><li>Doctor explains in context.</li><li>Trends over time visible.</li><li>Save for personal records.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Messaging doctor</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Non-urgent questions.</li><li>Reply in 1-3 business days.</li><li>Don&apos;t use for emergencies.</li><li>Brief, clear messages.</li><li>Skip phone tag.</li><li>Written record kept.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family proxy access</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Adult child can access.</li><li>HIPAA form at office.</li><li>Help schedule + remind.</li><li>See appointments.</li><li>Useful for caregivers.</li><li>Senior controls access.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Prescription refills</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Click medication.</li><li>Request refill.</li><li>Sent to pharmacy.</li><li>No phone call needed.</li><li>Track status.</li><li>Easy senior win.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Best senior medical tool</h3><p className="text-sm text-muted-foreground">If your hospital uses MyChart (most major systems do), sign up. Worth the 10-minute setup. See test results without phone tag. Schedule appointments without 30-minute holds. Message doctor for simple questions. Most senior-life-changing healthcare app available.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
