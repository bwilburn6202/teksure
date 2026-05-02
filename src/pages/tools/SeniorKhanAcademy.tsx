import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorKhanAcademy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Khan Academy for Seniors — TekSure" description="100% free educational courses — math, history, science — clear for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Khan Academy</h1>
          <p className="text-lg text-muted-foreground">Free, ad-free education for life.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">100% Free</h2><p>Nonprofit. Ad-free. Subjects from kindergarten through college.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>US history</li><li>Art history</li><li>Personal finance</li><li>Computer programming</li><li>Brush up on math</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Khanmigo AI tutor</h2><p>$4/month. AI tutor that explains anything, no judgment, slow as you need.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Help grandkids</h2><p>Sign up as a parent. Get progress reports. Help with homework.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">App or website</h2><p>Both work. App is great for short videos during coffee breaks.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Donate if you can</h2><p>Donor-supported. Even $5/month helps keep it free for everyone.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Start with one topic that interests you. 10 minutes a day adds up to a college course.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
