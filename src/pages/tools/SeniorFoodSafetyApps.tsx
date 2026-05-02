import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function SeniorFoodSafetyApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Food Safety Apps for Seniors — TekSure" description="USDA FoodKeeper, recall alerts, expiration tracking for senior food safety." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Food Safety Apps</h1>
          <p className="text-lg text-muted-foreground">Important for senior immune systems.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">USDA FoodKeeper</h2><p>FREE. Official app. How long anything keeps in fridge/freezer.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">USDA recall alerts</h2><p>FREE. Get alerts when food you bought is recalled.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FoodSwitch</h2><p>FREE. Scan barcode. Suggests healthier alternatives.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Yuka</h2><p>FREE. Scan food and cosmetics. Health rating + bad ingredients flagged.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Expiration tracker</h2><p>Plant Jammer or NoWaste. Track what you have and expire dates.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior food safety</h2><p>Older immune systems = more risk. Stricter expiration follow-through.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: When in doubt, throw it out. $10 of food is cheaper than food poisoning.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
