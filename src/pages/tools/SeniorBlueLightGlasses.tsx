import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorBlueLightGlasses() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Blue Light Glasses for Seniors — Senior Guide" description="Reduce eye strain from screens." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Blue Light Glasses</h1>
          <p className="text-lg text-muted-foreground">Less screen strain, better sleep.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. What they do</h2><p>Filter blue light from screens. Some seniors find less eye strain after long use.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Cheap options</h2><p>$15-30 on Amazon. Brands like Gunnar, Felix Gray.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Add to prescription</h2><p>Optometrist can add coating to your existing glasses. $50-100 extra.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Built-in screen filters</h2><p>Free. Phone Night Shift, Mac Night Shift, Windows Night light. Same idea.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Bedtime</h2><p>Wear an hour before bed. Studies suggest better sleep.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Mixed evidence</h2><p>Some studies show benefit, some don't. Try cheap pair first before pricier.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>20-20-20 rule does more for eyes than glasses. Look 20 feet away every 20 min.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
