import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Flame } from 'lucide-react';

export default function AirFryerForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Air Fryer for Seniors | TekSure" description="Best senior air fryers + how to use." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Flame className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Air Fryer</h1>
          <p className="text-lg text-muted-foreground">Senior easy cooking.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best basket Ninja</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Ninja AF161 — $100.</li><li>5-quart.</li><li>Senior couple-size.</li><li>Easy cleanup.</li><li>Reliable.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best dual basket</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Ninja DZ201 — $200.</li><li>2 baskets cook simultaneously.</li><li>Senior holiday.</li><li>Family hosting.</li><li>Worth premium.</li><li>Time-saver.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Faster than oven.</li><li>Less heat to kitchen.</li><li>Healthier than fried.</li><li>Senior arthritis-friendly.</li><li>Easy buttons.</li><li>Worth.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior-favorite foods</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Frozen french fries.</li><li>Chicken wings.</li><li>Salmon.</li><li>Vegetables.</li><li>Reheats leftovers crispy.</li><li>Bacon.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free recipes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pinterest endless.</li><li>YouTube videos.</li><li>Senior easy reference.</li><li>Free.</li><li>Adjust temps + times.</li><li>Note what works.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cleaning</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Basket dishwasher safe.</li><li>Wipe interior.</li><li>Senior easy maintenance.</li><li>5 min.</li><li>Worth easy.</li><li>Daily use ok.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$100 Ninja air fryer = senior cooking ROI</h3><p className="text-sm text-muted-foreground">$100 Ninja AF161 5-quart air fryer = senior cooking transformation. Faster than oven. Less heat kitchen. Healthier. Frozen fries, wings, salmon, vegetables perfect. Easy senior buttons. Dishwasher-safe basket. Most senior kitchen upgrade ROI. Worth it.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
