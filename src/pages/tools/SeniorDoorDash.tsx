import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

export default function SeniorDoorDash() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="DoorDash for Seniors — Senior Guide" description="Order food delivery with DoorDash." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Utensils className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">DoorDash</h1>
          <p className="text-lg text-muted-foreground">Restaurant food delivered.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free app</h2><p>App or doordash.com. Sign up with your email and address.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Find a restaurant</h2><p>Browse by cuisine. Pizza, Chinese, Mexican. Filter by 4+ stars.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Place order</h2><p>Tap items. Customize toppings or sides. Tap Checkout.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Tip generously</h2><p>Drivers rely on tips. 15-20% is fair. Tip in the app at checkout.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Track delivery</h2><p>App shows the driver on a map. ETA updates in real time.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. DashPass</h2><p>$10/month. $0 delivery fee on $12+ orders. Pays for itself with 2-3 orders.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Restaurant prices on DoorDash are often higher than dine-in. Compare before splurging.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
