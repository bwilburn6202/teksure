import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

const SOURCES = [
  { name: 'recalls.gov', what: 'One-stop federal recall portal. Cars, food, drugs, products.', good: 'Best starting point.' },
  { name: 'CPSC.gov', what: 'Consumer Product Safety Commission. Recliners, toys, electronics, appliances.', good: 'Sign up for email alerts.' },
  { name: 'NHTSA.gov/recalls', what: 'Vehicles and tires. Type your VIN to see open recalls.', good: 'Free fix at any dealer.' },
  { name: 'FoodSafety.gov', what: 'Food, USDA + FDA recalls.', good: 'Check before eating Thanksgiving turkey.' },
  { name: 'FDA.gov', what: 'Drugs, medical devices, cosmetics, supplements.', good: 'For prescriptions and OTC meds.' },
  { name: 'Recall Center app', what: 'Single app combining all federal recall databases.', good: 'Push alerts when recalls hit.' },
];

export default function RecallChecker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Recall Checker — Cars, Food, Drugs, Products | TekSure" description="Recalls happen daily. Plain-English guide to checking for recalls on your car, medications, food, and household products — most fixes are free." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Recall Checker</h1>
          <p className="text-lg text-muted-foreground">Free fixes you may be missing.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to check</h2>
            <div className="space-y-3 text-sm">
              {SOURCES.map(s => (
                <div key={s.name} className="border-l-4 border-primary pl-3">
                  <p className="font-bold">{s.name}</p>
                  <p>{s.what}</p>
                  <p className="text-muted-foreground">{s.good}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Check your car NOW</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Find your VIN — printed on driver-side dashboard, registration, insurance card.</li>
              <li>Go to <strong>nhtsa.gov/recalls</strong>.</li>
              <li>Type VIN. Hit Check.</li>
              <li>If recalls open — call dealer. Repair is FREE for ANY make/model regardless of where you bought it.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common product recalls (2024+)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Recliners with electrical hazards.</li>
              <li>Pressure cookers with bad lids.</li>
              <li>Baby and child products (mostly cribs, strollers, car seats).</li>
              <li>Lithium battery devices (e-bikes, e-scooters).</li>
              <li>Air mattresses with leak/electrical problems.</li>
              <li>Foods (E. coli, salmonella).</li>
              <li>Drugs — frequent.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sign up for email alerts</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>CPSC: cpsc.gov → "Email Subscriptions" → "Recalls".</li>
              <li>FDA: fda.gov → email alerts.</li>
              <li>FoodSafety: foodsafety.gov → email alerts.</li>
              <li>NHTSA: nhtsa.gov → recall search subscription.</li>
            </ul>
            <p className="text-sm mt-2">5 minutes once. Saves you finding out years later that your vehicle had a brake recall.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Annual habit</h3>
            <p className="text-sm text-muted-foreground">Once a year (your birthday or January 1) — run your VIN through NHTSA. Search "[brand] recall" for major appliances and recliners. 10 minutes total. Sometimes finds free repairs worth hundreds of dollars.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
