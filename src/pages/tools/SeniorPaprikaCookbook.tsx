import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorPaprikaCookbook() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Paprika Cookbook — Senior Guide" description="Save recipes in one digital cookbook." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Paprika</h1>
          <p className="text-lg text-muted-foreground">Save your favorites in one place.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Cost</h2><p>$5 one-time per device. Worth it for serious cooks. No subscription.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Save any recipe</h2><p>Browser extension grabs recipes from any website. Removes ads.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Digital recipe box</h2><p>Type Grandma's recipes by hand. Add photos. Keep them forever.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Meal planning</h2><p>Drag recipes to calendar. Auto-builds shopping lists.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Sync to family</h2><p>Pay once on each family device — share the cookbook with everyone.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Smart search</h2><p>Search by ingredient. What can I make with chicken and rice?</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Print recipes too. Some folks like a paper cookbook on the counter.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
