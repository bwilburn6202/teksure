import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

export default function ServiceAnimalAppsSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Service Animals for Seniors | TekSure" description="Service dog + emotional support animal senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Award className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Service Animals</h1>
          <p className="text-lg text-muted-foreground">Senior support.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Service dog</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Trained for disability.</li><li>$15,000-$30,000 trained.</li><li>Free from charities.</li><li>Senior wait list 2-5 years.</li><li>ADA full access.</li><li>Worth waiting.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free programs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Canine Companions.</li><li>Service Dogs Inc.</li><li>Senior apply free.</li><li>Match to needs.</li><li>Years wait.</li><li>Worth pursuing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Emotional support</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Letter from therapist.</li><li>Apartment exception.</li><li>Senior depression/anxiety.</li><li>Not full ADA access anymore.</li><li>Recent rule change.</li><li>Read carefully.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch out scams</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Online ESA letters $$.</li><li>Many fake.</li><li>Senior caution.</li><li>Real therapist relationship.</li><li>No registry — fake claim.</li><li>Skeptical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior benefits</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hearing dogs alert sound.</li><li>Medical alert dogs.</li><li>Seizure response.</li><li>Mobility assistance.</li><li>Senior independence.</li><li>Life-changing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>BringFido — pet-friendly travel.</li><li>Service dog cards in apps.</li><li>Senior travel ease.</li><li>Free options.</li><li>Worth knowing.</li><li>Plan ahead.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free service dog charities = senior life-changing</h3><p className="text-sm text-muted-foreground">Senior service dog from Canine Companions free. 2-5 year wait worth it. Hearing, mobility, medical alert. Avoid scam ESA online letters. Real therapist relationship for ESA. BringFido app pet-friendly travel. Most senior independence-restoring tech.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
