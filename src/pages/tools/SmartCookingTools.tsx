import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';

const TOOLS = [
  { name: 'Instant Pot Duo', price: '$80-120', best: 'Pressure cooker + slow cooker + rice cooker + steamer in one. Great for beans, soup, tough meat.', good: 'Cuts cooking time in half for things like chili, ribs.' },
  { name: 'Air fryer (basket or oven style)', price: '$80-200', best: 'Crisp food without the oil. Reheats leftovers far better than the microwave.', good: 'Fries frozen food crispy, makes roasted vegetables great.' },
  { name: 'MEATER Plus', price: '$100', best: 'Wireless meat thermometer. Stays in the meat as it cooks. Phone alerts when done. Perfect roasts every time.', good: 'No more guessing on Thanksgiving turkey.' },
  { name: 'Anova Sous Vide Precision Cooker', price: '$150', best: 'Cooks meat to PERFECT doneness in a water bath. Steakhouse-quality at home.', good: 'For meat lovers who want consistency.' },
  { name: 'KitchenAid Stand Mixer', price: '$300+', best: 'For bakers. Lasts 30+ years. Strong resale value.', good: 'Pricey but heirloom-grade.' },
  { name: 'Vitamix or Ninja blender', price: '$100-500', best: 'Smoothies, soups, nut butters. Vitamix is bulletproof; Ninja is cheaper.', good: 'Worth it if you smoothie daily.' },
];

export default function SmartCookingTools() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Cooking Tools — Instant Pot, Air Fryer, MEATER | TekSure" description="Tech in the kitchen that actually saves time. Plain-English picks for the 6 best gadgets that change how you cook." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ChefHat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Cooking Tools</h1>
          <p className="text-lg text-muted-foreground">Tech in the kitchen that actually helps. Honest picks.</p>
        </div>

        <div className="space-y-3 mb-6">
          {TOOLS.map(t => (
            <Card key={t.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{t.name}</h3>
                  <span className="text-sm font-semibold text-primary">{t.price}</span>
                </div>
                <p className="text-sm mb-1"><strong>Best for:</strong> {t.best}</p>
                <p className="text-sm text-muted-foreground">{t.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best companion apps</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Instant Pot app</strong> — recipes specifically for the cooker.</li>
              <li><strong>MEATER app</strong> — auto-cooking modes and notifications.</li>
              <li><strong>Joule (Anova)</strong> — sous-vide guides for any cut of meat.</li>
              <li><strong>Yummly</strong> — connects to many smart appliances.</li>
              <li><strong>NYT Cooking</strong> — best general recipes (not appliance-specific).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What I\'d skip</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Smart fridges with screens — gimmick. Buy a normal good fridge instead.</li>
              <li>Coffee makers with apps — still need to fill water and beans manually.</li>
              <li>Smart toaster ovens — no real benefit over regular ones.</li>
              <li>Pricey "smart" knives or cutting boards — pure marketing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to start</h3>
            <p className="text-sm text-muted-foreground">If you cook 3+ times a week and don\'t have one — get an Instant Pot OR an air fryer. Pick whichever fits your usual meals more. Both are usually $80-100, used widely, with thousands of free recipes online.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
