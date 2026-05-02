import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets } from 'lucide-react';

export default function SmartIrrigationForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Irrigation for Seniors | TekSure" description="Drip irrigation + smart timers for senior gardens." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplets className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Irrigation</h1>
          <p className="text-lg text-muted-foreground">Senior garden auto-water.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Drip kit basics</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30-$80 starter.</li><li>Senior arthritis fix.</li><li>No daily watering.</li><li>Plants thrive.</li><li>Save water.</li><li>DIY install.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Smart timer</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30-$100.</li><li>Phone control.</li><li>Skip rain days.</li><li>Senior smart watering.</li><li>Schedule auto.</li><li>Worth investment.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Vacation peace.</li><li>Less back strain.</li><li>Plants live.</li><li>Senior travel safe.</li><li>Garden thrives.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Soil moisture</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bluetooth sensor $30.</li><li>Phone alerts dry.</li><li>Senior precise.</li><li>Plant-specific.</li><li>Avoid over-watering.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">YouTube install</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free tutorials.</li><li>Senior step-by-step.</li><li>2-hour install typical.</li><li>Pro $200 if not DIY.</li><li>Worth either way.</li><li>Lasting investment.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Maintain</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Check emitters annually.</li><li>Clean filter quarterly.</li><li>Winter drain freezing climates.</li><li>Senior 30-min upkeep.</li><li>Worth lasting decades.</li><li>Replace tubes 5-7 years.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$80 drip kit = senior garden auto-water</h3><p className="text-sm text-muted-foreground">$80 drip irrigation kit + $50 smart timer = senior garden auto-watering. Vacation peace. Less back strain. Plants thrive. Skip rain days. Free YouTube install or pro $200. Most senior gardener time-saver. Worth investment.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
