import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bike } from 'lucide-react';

export default function RecumbentBikeForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Recumbent Bikes for Seniors | TekSure" description="Best recumbent stationary bikes for senior knees + back." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bike className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Recumbent Bikes</h1>
          <p className="text-lg text-muted-foreground">Senior knee-friendly.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior love</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Comfortable seat.</li><li>Back support.</li><li>Easy on/off.</li><li>Knee gentle.</li><li>Senior arthritis OK.</li><li>Watch TV while pedal.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Schwinn 230</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$330.</li><li>Best senior value.</li><li>22 programs.</li><li>Heart rate sensors.</li><li>Senior reliable.</li><li>Trusted brand.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">NordicTrack R35</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$1,000+.</li><li>iFit subscription.</li><li>Tablet built-in.</li><li>Senior premium.</li><li>Heavy.</li><li>Worth it for some.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Used Craigslist</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$100-$200 often.</li><li>People give up exercising.</li><li>Senior frugal.</li><li>Test ride first.</li><li>Save big.</li><li>Plenty available.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Daily 20-30 min.</li><li>Heart healthy.</li><li>Easy on joints.</li><li>Watch news + pedal.</li><li>Indoor any weather.</li><li>Habit-friendly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Place facing TV.</li><li>Audiobook while pedal.</li><li>Senior multi-task.</li><li>Track minutes.</li><li>Start 10 min daily.</li><li>Build to 30.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$330 Schwinn 230 = senior knee-friendly</h3><p className="text-sm text-muted-foreground">$330 Schwinn 230 recumbent bike = senior daily exercise. Knee-friendly, back-supported, watch TV while pedal. Or used Craigslist $100. 20-30 min daily. Heart healthy. Best senior fitness equipment for arthritis. Habit-friendly.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
