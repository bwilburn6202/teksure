import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bird } from 'lucide-react';

export default function SeniorBirdingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Birding Apps for Seniors — TekSure" description="Identify birds by sight or sound — Merlin Bird ID, eBird, Audubon." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bird className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Birding Apps</h1>
          <p className="text-lg text-muted-foreground">Identify any bird from your backyard.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Merlin Bird ID</h2><p>FREE. From Cornell Lab. Identifies by photo OR by sound. Magical.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">eBird</h2><p>FREE. Log every bird you see. Contribute to global research.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Audubon Bird Guide</h2><p>FREE. 800+ North American birds. Beautiful illustrations.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sound ID</h2><p>Open Merlin → Sound ID → press microphone. Lists every bird singing within 100 feet.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Set up bird feeders</h2><p>Sunflower seeds for cardinals. Nyjer for finches. Suet for woodpeckers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart bird feeders</h2><p>Bird Buddy ($269). Camera identifies birds, sends photos to your phone.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Backyard birding is one of the most relaxing senior hobbies — and helps cognitive sharpness.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
