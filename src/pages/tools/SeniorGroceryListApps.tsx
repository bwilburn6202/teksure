import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function SeniorGroceryListApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grocery List Apps for Seniors — TekSure" description="Best grocery list apps — AnyList, Apple Reminders, Out of Milk." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grocery List Apps</h1>
          <p className="text-lg text-muted-foreground">Share with spouse. Never forget items.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AnyList</h2><p>FREE basic. Auto-organizes by aisle. Senior-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Reminders</h2><p>FREE. Built into iPhone. Share with spouse — both see updates.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Out of Milk</h2><p>FREE. Multi-store. Tracks pantry inventory.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice add</h2><p>&ldquo;Hey Siri, add milk to grocery list.&rdquo; Hands-free during cooking.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Echo Show</h2><p>&ldquo;Alexa, add tomatoes to grocery list.&rdquo; Reads it back at the store.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Share with family</h2><p>Adult kids add items they need. Visit them, bring it.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Make a shared list with spouse. Automatic when one buys what the other added.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
