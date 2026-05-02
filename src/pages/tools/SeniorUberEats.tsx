import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

export default function SeniorUberEats() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Uber Eats for Seniors — Senior Guide" description="Use Uber Eats for food and grocery delivery." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Utensils className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Uber Eats</h1>
          <p className="text-lg text-muted-foreground">Same Uber, but for food.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Same login as Uber</h2><p>If you have Uber for rides, the same login works for Uber Eats.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Restaurants and stores</h2><p>Order from local restaurants, plus 7-Eleven, CVS, Walgreens for grocery items.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Group orders</h2><p>Send a link to family. They add their own items. One person pays at checkout.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Schedule ahead</h2><p>Order Sunday breakfast on Saturday night. Arrives at the time you pick.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Compare with DoorDash</h2><p>Same restaurant might be $1-2 different on each app. Check both.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Uber One</h2><p>$10/month. Free delivery and 5% off Eats orders. Plus discounts on Uber rides.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Special diet? Most apps have filters for vegetarian, gluten-free, low-carb.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
