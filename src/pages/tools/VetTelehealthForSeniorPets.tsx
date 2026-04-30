import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

export default function VetTelehealthForSeniorPets() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Vet Telehealth for Senior Pets | TekSure" description="Online vet consultations. Senior pet telehealth guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Stethoscope className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Telehealth</h1>
          <p className="text-lg text-muted-foreground">Online vet visits.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">PetCube vet chat</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free with PetCube subscription.</li><li>$9/month.</li><li>24/7 vet chat.</li><li>Senior peace.</li><li>Quick answers.</li><li>Less ER trips.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Chewy Connect</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free for Autoship customers.</li><li>Vet chat.</li><li>Senior bonus benefit.</li><li>Quick triage.</li><li>Don&apos;t need to drive.</li><li>Worth subscribing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Vetster</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$60/visit.</li><li>Real video appointment.</li><li>Senior at-home.</li><li>Most issues.</li><li>Backup to vet.</li><li>Worth knowing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When telehealth ok</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Skin issues.</li><li>Diet questions.</li><li>Behavior advice.</li><li>Mild symptoms.</li><li>Senior triage.</li><li>Save vet trip.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When NOT</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bleeding emergency.</li><li>Trouble breathing.</li><li>Seizures.</li><li>Bloat in dog.</li><li>Senior — call ER.</li><li>Don&apos;t delay.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tip</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Have local vet relationship.</li><li>Telehealth supplements.</li><li>Don&apos;t replace.</li><li>Both important.</li><li>Senior best of both.</li><li>Pet ages matter.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Chewy vet chat = senior pet bonus</h3><p className="text-sm text-muted-foreground">Chewy Autoship subscribers get free Connect vet chat. Quick questions answered. Save vet trip + senior energy. Plus Vetster $60 video appointments for fuller consults. Doesn&apos;t replace local vet but supplements. Senior pet care upgrade.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
