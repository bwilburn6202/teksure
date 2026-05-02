import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

export default function LeafBlowerSafeForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Leaf Blowers | TekSure" description="Lightweight battery leaf blowers for senior arthritis." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Leaf Blowers</h1>
          <p className="text-lg text-muted-foreground">Lightweight options.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Battery best</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>EGO + Ryobi 40V.</li><li>$200-$400.</li><li>Senior light + quiet.</li><li>No gas mixing.</li><li>Push button start.</li><li>Worth investment.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Avoid gas</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Heavy.</li><li>Pull-cord start.</li><li>Senior arthritis nightmare.</li><li>Smelly + loud.</li><li>Many cities banning.</li><li>Skip.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Battery push-start.</li><li>Lighter.</li><li>Quieter.</li><li>Senior arthritis ok.</li><li>Easy to handle.</li><li>Less back strain.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Or hire</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Lawn service includes.</li><li>$30-$50 visit.</li><li>Senior easier.</li><li>No equipment storage.</li><li>Worth it some.</li><li>Compare cost.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Hearing protection</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Even battery loud.</li><li>Senior sensitive ears.</li><li>Earmuffs $20.</li><li>Eye protection.</li><li>Glove for grip.</li><li>Worth setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Backpack vs handheld</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Backpack — distributes weight.</li><li>Senior big yards better.</li><li>Handheld — small yards.</li><li>Pick by yard size.</li><li>Battery + ergonomic key.</li><li>Test in store.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$200 EGO 40V = senior arthritis-friendly</h3><p className="text-sm text-muted-foreground">$200 EGO/Ryobi 40V battery leaf blower = senior arthritis-friendly. Push-button start, light, quiet. Skip gas — heavy + pull-cord nightmare. Hearing protection $20. Or hire lawn service $30-$50 if no DIY. Best senior lawn tool option.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
