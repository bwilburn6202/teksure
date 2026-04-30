import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function WebexForSeniorMedicalVisits() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Webex for Senior Medical Visits | TekSure" description="Hospital systems use Webex. Senior Webex telehealth guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Webex Telehealth</h1>
          <p className="text-lg text-muted-foreground">Hospital video visits.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cisco enterprise video.</li><li>Many hospitals use.</li><li>HIPAA-compliant.</li><li>Telehealth standard.</li><li>Free for patients.</li><li>Senior medical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Join visit</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Email link from doctor.</li><li>Click 5-10 min before.</li><li>Test camera + mic.</li><li>Wait in lobby.</li><li>Doctor lets you in.</li><li>Senior step-by-step.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Web — no download.</li><li>Or Webex app.</li><li>Allow camera + mic.</li><li>Quiet, lit room.</li><li>Have meds list ready.</li><li>Senior prep.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Day of visit</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>5-min early test.</li><li>Vital signs ready (BP, weight).</li><li>List symptoms + questions.</li><li>Family member if helpful.</li><li>Pen + paper.</li><li>Senior visit prep.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tech help</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hospital tech support line.</li><li>Test session beforehand.</li><li>Family member assist first time.</li><li>Backup phone call.</li><li>Senior fallback.</li><li>Don&apos;t panic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No driving.</li><li>No waiting room.</li><li>Faster visits.</li><li>Family can join.</li><li>Insurance covers.</li><li>Convenient.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">5-min early test = senior smooth visit</h3><p className="text-sm text-muted-foreground">Hospital sends Webex link day before. Test 5 minutes early — camera, mic, lighting. Have meds + vitals ready. Family member can join for tough conversations. Webex pretty senior-friendly. Practice with hospital tech support if first time.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
