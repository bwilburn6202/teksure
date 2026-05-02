import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';

export default function SeniorMyFitnessPal() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="MyFitnessPal for Seniors — Senior Guide" description="Track food and calories with MyFitnessPal." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Apple className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">MyFitnessPal</h1>
          <p className="text-lg text-muted-foreground">Track what you eat.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free version</h2><p>Free with ads. Tracks calories and basic nutrition.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Paid premium</h2><p>$20/month or $80/year. Macros, meal planning, no ads.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Barcode scanner</h2><p>Scan food labels. App auto-logs them.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Recipe analyzer</h2><p>Paste a recipe URL. App breaks down nutrition per serving.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Diabetic friendly</h2><p>Track carbs by meal. Helps tighten blood sugar control.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Doctor ready</h2><p>Export weekly food log. Useful at nutritionist or doctor visits.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Lose It! is a similar free app. Try both. Pick the one with the simpler buttons.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
