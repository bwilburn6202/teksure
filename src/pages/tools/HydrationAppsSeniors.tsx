import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

export default function HydrationAppsSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hydration Apps for Seniors | TekSure" description="Water tracking apps. Senior dehydration prevention." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hydration Apps</h1>
          <p className="text-lg text-muted-foreground">Senior water tracking.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior need</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Thirst declines with age.</li><li>Easy to forget.</li><li>Dehydration causes confusion.</li><li>UTIs increased risk.</li><li>Senior daily 6-8 cups.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">WaterMinder</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + $5 Premium.</li><li>Visual goal tracker.</li><li>Senior reminders.</li><li>Apple Watch.</li><li>Simple.</li><li>Worth using.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Smart water bottles</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hidrate Spark $60.</li><li>Glows when need water.</li><li>Senior auto-tracks.</li><li>App syncs.</li><li>Bluetooth.</li><li>Worth gimmick.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Reminders app free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone Reminders.</li><li>Set water reminders 3x daily.</li><li>Senior simple.</li><li>Free.</li><li>No app needed.</li><li>Works.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Beyond water</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tea, coffee count.</li><li>Watery foods.</li><li>Senior soup, fruit.</li><li>Don&apos;t obsess.</li><li>Variety helps.</li><li>Listen body.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch outs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Heart conditions limit fluid.</li><li>Senior doctor consult.</li><li>Diuretics affect.</li><li>Don&apos;t over-drink.</li><li>Personalized targets.</li><li>Talk doctor.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Reminders 3x daily = senior hydration</h3><p className="text-sm text-muted-foreground">Senior thirst declines = need reminders. Free iPhone Reminders 3x daily. Or WaterMinder app visual. Smart bottles $60 if want gadget. Tea + soup count too. Doctor consult heart conditions for limits. Most senior-essential simple habit.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
