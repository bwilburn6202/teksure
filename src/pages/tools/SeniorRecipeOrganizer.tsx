import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorRecipeOrganizer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Recipe Organizer Apps | TekSure" description="Organize recipes digitally. Senior recipe app guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Recipe Organizer</h1>
          <p className="text-lg text-muted-foreground">Senior digital cookbook.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Paprika</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$5 one-time.</li><li>Save any web recipe.</li><li>Senior digital cookbook.</li><li>Meal plan.</li><li>Grocery list auto.</li><li>Worth one-time.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Notes free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Save recipes simple.</li><li>Senior already use.</li><li>Tag + organize.</li><li>Search.</li><li>Free.</li><li>Worth simpler need.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Recipe Keeper</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + premium.</li><li>Web recipe save.</li><li>Senior reliable.</li><li>Cross-platform.</li><li>Worth trying.</li><li>Free version solid.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family share</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Share grandma recipes.</li><li>Senior family treasure.</li><li>Photo + handwriting.</li><li>Preserve forever.</li><li>Worth digitizing.</li><li>Free apps.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPad in kitchen</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Big screen for recipes.</li><li>Senior arthritis ok touch.</li><li>Stand $20.</li><li>Voice control hands-free.</li><li>Worth setup.</li><li>Game-changer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Print backup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Print favorites.</li><li>Tech fails happens.</li><li>Senior backup.</li><li>Recipe binder.</li><li>Worth.</li><li>Both digital + physical.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$5 Paprika + iPad = senior digital cookbook</h3><p className="text-sm text-muted-foreground">$5 Paprika app one-time + iPad on $20 stand = senior digital cookbook. Save any web recipe. Auto grocery list. Meal plan. Or free Apple Notes simpler. Print favorites backup. Most senior kitchen organization upgrade.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
