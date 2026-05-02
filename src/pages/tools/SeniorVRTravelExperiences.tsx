import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Compass } from 'lucide-react';

export default function SeniorVRTravelExperiences() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="VR Travel for Seniors | TekSure" description="Travel virtually. Senior VR experiences without leaving home." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Compass className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">VR Travel</h1>
          <p className="text-lg text-muted-foreground">Senior armchair adventures.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Meta Quest 3</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$300.</li><li>Standalone VR.</li><li>Senior travel apps.</li><li>Wander, National Geographic.</li><li>Free apps abundant.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Wander app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$10 one-time.</li><li>Google Street View VR.</li><li>Senior anywhere.</li><li>Childhood home.</li><li>Family member visit virtually.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Limited mobility seniors</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Climb mountains virtually.</li><li>Senior wheelchair access world.</li><li>Hike national parks.</li><li>Visit Eiffel Tower.</li><li>VR magic.</li><li>Worth premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Memory care</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Reminiscence therapy.</li><li>Visit hometown.</li><li>Old occupations.</li><li>Senior dementia engaging.</li><li>Family-shared experience.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Comfort + setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Heavy headset.</li><li>Senior 15-min sessions.</li><li>Sit in chair.</li><li>No motion sickness slow.</li><li>Family help setup.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free YouTube 360</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>YouTube 360 videos.</li><li>Phone in cardboard $10.</li><li>Senior cheap intro.</li><li>Try before $300.</li><li>Free.</li><li>Test interest.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$300 Quest 3 + Wander = senior virtual travel</h3><p className="text-sm text-muted-foreground">$300 Meta Quest 3 + $10 Wander app = senior virtual travel anywhere. Limited mobility climb mountains. Visit childhood home. Memory care reminiscence powerful. Sit in chair, 15 min sessions. Or free YouTube 360 + $10 cardboard try first. Magic.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
