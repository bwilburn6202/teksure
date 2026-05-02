import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorBeekeeping() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Beekeeping for Seniors — TekSure" description="Senior beekeeping — Flow Hive, classes, equipment, honey." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Beekeeping for Seniors</h1>
          <p className="text-lg text-muted-foreground">Tasty hobby.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Flow Hive</h2><p>$700+. No-lift honey extraction. Senior-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Beginner kit</h2><p>$300-$500. Standard hive + protective gear.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Local clubs</h2><p>Find via Bee Culture magazine. Mentors essential.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Time required</h2><p>Few hours weekly. Most spring/summer. Slow winter.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Allergies</h2><p>Check epinephrine. Stings happen. Have plan.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Honey harvest</h2><p>1 hive = 30-60 lbs honey/year. Sell or gift.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Take beekeeping class first. Don&apos;t buy bees blind.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
