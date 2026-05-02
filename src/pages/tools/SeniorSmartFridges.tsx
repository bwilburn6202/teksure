import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Refrigerator } from 'lucide-react';

export default function SeniorSmartFridges() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Refrigerators for Seniors — TekSure" description="Are smart fridges worth it for seniors? Samsung, LG, GE compared." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Refrigerator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Refrigerators</h1>
          <p className="text-lg text-muted-foreground">Are they worth it?</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Samsung Family Hub</h2><p>$3,500+. Inside cameras. Order groceries from screen. Family calendar.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">LG ThinQ</h2><p>$2,500+. App alerts on door open, water filter status, food expiration.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Honest opinion</h2><p>Most smart features rarely used. A regular fridge + grocery list app does the same thing for $1,500 less.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When worth it</h2><p>If kids will use it for daily family schedules. Or for leaks/temp alerts when away.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cheap alternative</h2><p>$30 smart sensor on the fridge door tells you if it&apos;s open. Same alert. 99% cheaper.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch out for repairs</h2><p>Smart fridges break more often. Tech updates last 5 years. Plain fridges last 15+.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Save money. A regular fridge + iPad on the counter does it all.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
