import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

export default function SeniorRaisedBeds() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Raised Garden Beds for Seniors — TekSure" description="Senior-friendly raised beds — Vego Garden, Birdies Container, height that saves backs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Raised Garden Beds</h1>
          <p className="text-lg text-muted-foreground">No more bending.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><p>Bending hurts back, knees, hips. Raised beds bring garden up.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Vego Garden</h2><p>$200-$500. Metal. Lasts 20+ years. 17-32&quot; tall options.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cedar beds</h2><p>$100-$300. Wood. Pretty. 5-10 year lifespan.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best height</h2><p>30-32&quot; lets you sit on edge or stand. Most senior-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Self-watering</h2><p>$150 self-watering raised beds. Less work. Steady moisture.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Vertical garden</h2><p>$80 wall-mount. Strawberries, herbs. No bending required.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Vego raised beds = senior gardening forever. Saves backs.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
