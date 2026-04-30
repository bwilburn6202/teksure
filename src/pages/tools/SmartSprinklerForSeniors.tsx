import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets } from 'lucide-react';

export default function SmartSprinklerForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Sprinkler Controllers for Seniors | TekSure" description="Save water + lawn looks great. Smart sprinkler guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplets className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Sprinklers</h1>
          <p className="text-lg text-muted-foreground">Lawn watered automatically.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Replaces dial controller.</li><li>Wifi connected.</li><li>Phone app control.</li><li>Adjusts to weather.</li><li>Skips watering when rain.</li><li>Saves water + money.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best brands</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Rachio — top pick.</li><li>RainMachine.</li><li>Hunter Hydrawise.</li><li>$200-$300.</li><li>Replace existing controller.</li><li>Senior install or pro.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Adjust schedule from couch.</li><li>Skip during rain.</li><li>Vacation watering.</li><li>20-50% water savings.</li><li>Lawn always healthy.</li><li>No outside trips.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Rebates</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Many cities offer.</li><li>Save $100+ from city.</li><li>Water authority sites.</li><li>Senior worth it.</li><li>Free money.</li><li>Check local programs.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Install</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Replace existing controller.</li><li>Same wires.</li><li>Photo old wiring first.</li><li>Match to new unit.</li><li>YouTube tutorials.</li><li>Or hire pro $100.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch outs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Wifi must reach garage.</li><li>App may update settings.</li><li>Subscription — usually no.</li><li>Update phone app.</li><li>Battery backup nice.</li><li>Senior friendly long-term.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$300 sprinkler = $200 water savings/yr</h3><p className="text-sm text-muted-foreground">Rachio smart sprinkler pays back in 1-2 years via water savings. Plus rebate from many cities. Lawn looks better — adjusts to actual weather. No more running outside in rain to skip cycle. Senior-perfect smart home upgrade.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
