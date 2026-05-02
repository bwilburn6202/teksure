import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bot } from 'lucide-react';

export default function SeniorRobotPets() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Robot Pets for Senior Dementia — TekSure" description="Joy for All, PARO, Aibo robot pets — comfort for dementia seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bot className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Robot Pets for Seniors</h1>
          <p className="text-lg text-muted-foreground">Comfort. Companionship. No vet bills.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Joy For All</h2><p>$130. Cat or dog. Purrs, breathes, blinks. Used in nursing homes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PARO seal</h2><p>$6,000. Used in dementia clinics. Real medical-grade.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sony Aibo</h2><p>$2,900. Real robot dog. Learns. Plays. Interactive.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why work</h2><p>Dementia patients respond to texture, sound, motion. Robot pets reduce anxiety.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Studies show</h2><p>Reduces agitation. Improves mood. Less medication needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">No care needed</h2><p>No vet bills. No food. No mess. Sleep when not used.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Joy For All ($130) is great affordable option. Real benefits documented.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
