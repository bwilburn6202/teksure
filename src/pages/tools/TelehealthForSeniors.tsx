import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function TelehealthForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Telehealth + Video Doctor Visits for Seniors | TekSure" description="See doctors via video. Telehealth made simple for older adults." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Telehealth Visits</h1>
          <p className="text-lg text-muted-foreground">See doctor without driving.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When telehealth works</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Follow-up visits.</li><li>Medication refills.</li><li>Prescription discussion.</li><li>Mild symptoms.</li><li>Mental health.</li><li>Skin conditions (with photo).</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When NOT to use</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Chest pain — call 911.</li><li>Stroke symptoms — 911.</li><li>Severe injury.</li><li>New symptoms needing exam.</li><li>Annual physicals.</li><li>Anything urgent.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup before visit</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Test camera + mic in advance.</li><li>Quiet, lit room.</li><li>Charge phone/tablet.</li><li>Have medications nearby.</li><li>List symptoms + questions.</li><li>Family member to help if new.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Common platforms</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Doxy.me — browser, no app.</li><li>MyChart Video.</li><li>Teladoc.</li><li>Amwell.</li><li>Zoom for Healthcare.</li><li>FaceTime sometimes.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Insurance + cost</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Medicare covers telehealth.</li><li>Most insurance covers.</li><li>Same copay as in-person.</li><li>No travel, no parking.</li><li>Save 1-2 hours per visit.</li><li>Easier for seniors.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bigger screen helps — tablet/laptop.</li><li>Headphones improve audio.</li><li>Practice video call before.</li><li>Family caregiver can join.</li><li>Take notes during visit.</li><li>Email follow-up questions.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Telehealth = senior gift</h3><p className="text-sm text-muted-foreground">Telehealth is one of the best things to come from the pandemic for seniors. No driving, no waiting rooms, no parking. Most follow-ups can be virtual. Ask your doctor next time which visits qualify. Saves hours, gas, and energy each year.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
