import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

export default function SeniorTelehealth() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Telehealth Visits — Senior Guide" description="See your doctor by video from home." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Stethoscope className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Telehealth Visits</h1>
          <p className="text-lg text-muted-foreground">See the doctor without leaving home.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Schedule</h2><p>Call the office or use MyChart. Confirm it is video, not phone-only.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Test ahead</h2><p>Open the link 15 minutes early. Test camera and microphone. Avoid panicking at the start.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Good lighting</h2><p>Sit facing a window. Doctor sees your face clearly without harsh shadows.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Quiet room</h2><p>Pick a room without a TV or barking dog. Headphones help with privacy too.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. List of medications</h2><p>Have all pill bottles or a list ready. Same as any in-office visit.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Take notes</h2><p>Write down what doctor recommends. Don't trust memory alone — telehealth ends fast.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Medicare and most insurance covers telehealth like an in-office visit. Check your plan.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
