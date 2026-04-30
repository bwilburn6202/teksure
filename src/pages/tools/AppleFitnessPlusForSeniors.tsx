import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function AppleFitnessPlusForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Fitness+ for Seniors | TekSure" description="Apple workouts for seniors. Compare with SilverSneakers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Fitness+</h1>
          <p className="text-lg text-muted-foreground">Senior workouts iPad.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it offers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$10/mo or Apple One bundle.</li><li>4,000+ workouts.</li><li>HIIT, yoga, pilates.</li><li>Senior friendly options.</li><li>Need iPhone or iPad.</li><li>Apple Watch enhances.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior content</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>10-min yoga.</li><li>Beginner strength.</li><li>Mindful cooldown.</li><li>Walk + run treadmill.</li><li>Senior all levels.</li><li>Modifications shown.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Watch</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Heart rate live.</li><li>Calorie tracking.</li><li>Senior bonus stats.</li><li>Auto-records workout.</li><li>Activity rings update.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free trial</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>3 months free with new device.</li><li>1 month standard.</li><li>Senior try first.</li><li>Cancel easy.</li><li>Apple One bundle includes.</li><li>Worth testing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Peloton App</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Peloton — $13/mo.</li><li>No Peloton bike needed.</li><li>Both have senior content.</li><li>Try free trials of both.</li><li>Senior compare.</li><li>Pick favorite.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free options</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>SilverSneakers free Medicare.</li><li>YouTube fitness free.</li><li>Senior frugal first.</li><li>Then paid if want better.</li><li>Try before subscribe.</li><li>Many free options.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$10 Apple Fitness+ = senior premium</h3><p className="text-sm text-muted-foreground">Apple Fitness+ $10/mo or Apple One bundle = senior premium iPad workouts. 4,000+ classes. Try free SilverSneakers + YouTube first. If want polish + Apple Watch integration, $10 worth it. 1-month trial. Cancel easy.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
