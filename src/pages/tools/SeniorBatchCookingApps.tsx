import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';

export default function SeniorBatchCookingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Batch Cooking Apps | TekSure" description="Cook once, eat all week. Senior meal prep apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ChefHat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Batch Cooking</h1>
          <p className="text-lg text-muted-foreground">Senior cook once.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior love</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cook 2 hours once.</li><li>Eat all week.</li><li>Senior less daily effort.</li><li>Healthier than takeout.</li><li>Save $$.</li><li>Worth ritual.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Recipe sources</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pinterest abundant.</li><li>Workweek Lunch app.</li><li>Senior easy reference.</li><li>YouTube videos.</li><li>Free options.</li><li>Worth bookmarking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Container investment</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30 glass containers.</li><li>Microwave + freezer-safe.</li><li>Senior reusable.</li><li>Pyrex set.</li><li>Worth investment.</li><li>Eco-friendly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best batch foods</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Chili.</li><li>Soups.</li><li>Casseroles.</li><li>Senior comfort food.</li><li>Freezable.</li><li>Reheats well.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sunday batch</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>2-hour ritual.</li><li>Senior + spouse together.</li><li>Cook week.</li><li>Music + audio.</li><li>Worth tradition.</li><li>Family time.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Freezer storage</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Label dates.</li><li>3 months max.</li><li>Senior rotate.</li><li>Backup meals.</li><li>Travel insurance.</li><li>Worth.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Sunday batch + Pyrex = senior week of meals</h3><p className="text-sm text-muted-foreground">Senior Sunday 2-hour batch cooking + $30 Pyrex glass containers = whole week of meals. Chili, soups, casseroles freeze well. Pinterest free recipe abundant. Saves daily cooking effort + money + healthy. Worth tradition. Spouse together fun.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
