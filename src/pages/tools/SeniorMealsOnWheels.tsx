import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorMealsOnWheels() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Meals on Wheels — Senior Guide" description="Sign up for free or low-cost senior meals." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Meals on Wheels</h1>
          <p className="text-lg text-muted-foreground">Hot meals delivered with a friendly face.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Who qualifies</h2><p>Seniors 60+ who can't cook or shop. Most programs accept everyone, donations encouraged.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Find local program</h2><p>Visit mealsonwheelsamerica.org. Type ZIP code. Find your nearest program.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Apply</h2><p>Call the local number. Some have an online form. Most respond within a week.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Free or sliding scale</h2><p>Most programs ask for $3-5 donation per meal. Free if you can't pay.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Friendly check-ins</h2><p>Delivery includes a chat. Good company plus a wellness check.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Special diets</h2><p>Most accommodate diabetic, kosher, halal, gluten-free. Mention when applying.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Eldercare Locator — call 1-800-677-1116 — also helps with transportation, bill help, and more.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
