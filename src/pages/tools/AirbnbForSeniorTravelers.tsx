import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function AirbnbForSeniorTravelers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Airbnb for Senior Travelers | TekSure" description="Book Airbnb confidently as a senior. Tips for safe, comfortable stays." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Airbnb for Seniors</h1>
          <p className="text-lg text-muted-foreground">Comfortable stays, confidently.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why seniors love it</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Full kitchen — cook own meals.</li><li>Living room space.</li><li>Often cheaper than hotels.</li><li>Stay longer at one place.</li><li>Family-sized rentals.</li><li>Local neighborhood feel.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Safety filters</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Superhost only.</li><li>4.8+ rating.</li><li>50+ reviews minimum.</li><li>Read recent reviews.</li><li>Skip new listings.</li><li>Verified ID hosts.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior accessibility filters</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Step-free entry.</li><li>Single-floor.</li><li>Walk-in shower.</li><li>Elevator if upper floor.</li><li>Grab bars.</li><li>Senior-friendly check.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Avoid scams</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Always book IN Airbnb.</li><li>Never wire money outside.</li><li>Never email host directly first.</li><li>Stay on platform.</li><li>Read terms carefully.</li><li>Use credit card.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">First booking</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Try short trip first (3 nights).</li><li>Domestic, not international.</li><li>Communicate via app.</li><li>Read house rules.</li><li>Bring own toiletries.</li><li>Confirm check-in clearly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Long stays — save big</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Weekly/monthly discounts 20-30%.</li><li>Snowbird popular.</li><li>Florida + Arizona winters.</li><li>1-3 months in one spot.</li><li>Slower travel = healthier.</li><li>Cook = save more.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Snowbirding via Airbnb</h3><p className="text-sm text-muted-foreground">Many seniors save thousands snowbirding via Airbnb. Rent Florida house Jan-March for $3,000/month vs hotel $300/night. Cook own meals. Long-stay discounts make it affordable. Book 9 months ahead for best selection. Best senior travel hack.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
