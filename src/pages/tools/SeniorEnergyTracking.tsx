import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function SeniorEnergyTracking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Energy Tracking for Seniors — TekSure" description="Track and lower power bills — Sense, utility apps, free tools." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Energy Tracking</h1>
          <p className="text-lg text-muted-foreground">See where the power goes. Lower the bill.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free utility apps</h2><p>Most US power companies have free apps. Show daily use, predict bill.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sense Home Monitor</h2><p>$300 + electrician. Identifies which appliance uses what.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart plug monitoring</h2><p>$15 smart plugs (TP-Link Kasa) show wattage of any device.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Energy hogs</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Old fridges</li><li>Plasma TVs</li><li>Heated towel racks</li><li>Old AC units</li><li>Leaky toilets (water bill)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free home audits</h2><p>Many utilities offer FREE home audits. Saves $100-$300 per year.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">LIHEAP help</h2><p>Low Income Home Energy Assistance helps seniors pay heating bills. Apply at your state energy office.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Set utility app to text alerts when bill is over budget. No surprises.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
