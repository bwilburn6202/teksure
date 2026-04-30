import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function ParkinsonsAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Parkinson's Apps for Seniors | TekSure" description="Apps that help manage Parkinson's symptoms. Tremor tracking, voice, exercise." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Parkinson&apos;s Apps</h1>
          <p className="text-lg text-muted-foreground">Tech support for symptoms.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Symptom tracking</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>mPower 2.0 — research app.</li><li>Parkinson&apos;s Toolkit.</li><li>Track tremor + meds.</li><li>Share with doctor.</li><li>Free.</li><li>Better appointments.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice exercise</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>SpeechVive.</li><li>LSVT LOUD app.</li><li>Daily voice exercises.</li><li>Combat soft speech.</li><li>Recommended by SLPs.</li><li>Maintain communication.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Exercise apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Rock Steady Boxing.</li><li>PD Warrior.</li><li>Tai chi for Parkinson&apos;s.</li><li>YouTube classes free.</li><li>Slow progression.</li><li>Daily movement key.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Medication reminders</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Critical for PD.</li><li>Specific times.</li><li>Medisafe app.</li><li>Multiple alerts.</li><li>Never miss dose.</li><li>Family monitoring option.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Watch</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tracks symptoms.</li><li>Movement Disorder API.</li><li>Doctor sees data.</li><li>Fall detection.</li><li>Voice notes.</li><li>Senior PD friendly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Resources</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Parkinson.org — official.</li><li>Michael J Fox Foundation.</li><li>Local support groups.</li><li>Free PD-specific exercise.</li><li>Care partner support.</li><li>Big community.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Tech extends PD independence</h3><p className="text-sm text-muted-foreground">Apple Watch + Medisafe + LSVT LOUD app = best PD tech combo. Track tremor, never miss meds, maintain voice. Plus free YouTube PD-specific exercise. Many seniors with Parkinson&apos;s extend independence years using these tools. Don&apos;t face it without tech support.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
