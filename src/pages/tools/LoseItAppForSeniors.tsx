import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';

export default function LoseItAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Lose It! App for Senior Weight Loss | TekSure" description="Track calories, lose weight. Lose It! senior calorie tracker guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Apple className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Lose It! App</h1>
          <p className="text-lg text-muted-foreground">Calorie tracking made easy.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tracks calories.</li><li>Track macros.</li><li>Goal-based.</li><li>Free version solid.</li><li>Premium $40/yr.</li><li>Senior easy UI.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Snap It feature</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Take photo of meal.</li><li>AI estimates calories.</li><li>Less typing.</li><li>Senior fast log.</li><li>Edit if wrong.</li><li>Premium feature.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Barcode scan</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Scan packaged food.</li><li>Auto-fills calories.</li><li>From database.</li><li>Senior accurate.</li><li>Free.</li><li>Quick log.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why track</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Awareness changes behavior.</li><li>Studies prove tracking works.</li><li>1-2 lb/week loss healthy.</li><li>Senior sustainable pace.</li><li>Build habit.</li><li>Health benefits major.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior considerations</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Don&apos;t restrict too low.</li><li>1,200 cal floor.</li><li>Doctor before drastic.</li><li>Slow + steady.</li><li>Track water too.</li><li>Senior muscle preservation.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Alternatives</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>MyFitnessPal — most popular.</li><li>Cronometer — micronutrients.</li><li>Carb Manager — keto/low carb.</li><li>Apple Health — basic.</li><li>Senior choice.</li><li>Free options.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Tracking awareness = senior weight win</h3><p className="text-sm text-muted-foreground">Many seniors say tracking opened their eyes. &quot;That snack was 600 calories?&quot; Awareness changes behavior. Free Lose It or MyFitnessPal sufficient. 1-2 lb/week is senior-healthy. Don&apos;t restrict too much. Talk to doctor. Bracelet workout adds.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
