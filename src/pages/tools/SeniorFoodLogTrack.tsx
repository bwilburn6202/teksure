import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';

export default function SeniorFoodLogTrack() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Food Log + Tracking | TekSure" description="MyFitnessPal, Cronometer for senior food tracking." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Apple className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Food Log Apps</h1>
          <p className="text-lg text-muted-foreground">Senior nutrition tracking.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">MyFitnessPal</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + Premium $20/mo.</li><li>Largest food database.</li><li>Senior barcode scan.</li><li>Track macros.</li><li>Goal-based.</li><li>Most popular.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cronometer</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + premium.</li><li>Detailed micronutrients.</li><li>Senior track vitamins.</li><li>Better food quality data.</li><li>Worth detail-oriented.</li><li>Free version solid.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior track</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Diabetes management.</li><li>Heart medication interactions.</li><li>Senior weight management.</li><li>Doctor share.</li><li>Catch deficiencies.</li><li>Worth daily.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Don&apos;t restrict too much.</li><li>1,200 cal floor.</li><li>Doctor consult.</li><li>Track 1-2 weeks awareness.</li><li>Don&apos;t obsess.</li><li>Tool not religion.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Health log</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iOS 17.2+ food logging.</li><li>Senior Apple ecosystem.</li><li>Free.</li><li>Simpler than apps.</li><li>Doctor share.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Photo logging</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Lose It! Snap It feature.</li><li>AI estimates.</li><li>Senior simpler.</li><li>Less typing.</li><li>$40/yr Premium.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free MyFitnessPal = senior diet awareness</h3><p className="text-sm text-muted-foreground">Free MyFitnessPal barcode scan = senior fast tracking. Track 1-2 weeks for awareness. Don&apos;t obsess. Cronometer for detailed micronutrients. Apple Health iOS 17.2+ simpler built-in. Lose It Snap It photo. Doctor share patterns critical chronic.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
