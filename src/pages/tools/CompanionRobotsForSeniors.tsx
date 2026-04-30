import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bot } from 'lucide-react';

export default function CompanionRobotsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Companion Robots for Seniors | TekSure" description="Robot companions like ElliQ, Joy for All, and Paro reduce isolation." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bot className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Companion Robots</h1>
          <p className="text-lg text-muted-foreground">Tech for senior loneliness.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">ElliQ</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tabletop AI companion.</li><li>Talks, listens.</li><li>Reminds + suggests activities.</li><li>$249 + $40/month.</li><li>Senior-designed.</li><li>Reduces loneliness studies.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Joy for All Pets</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Robot cat or dog.</li><li>$130 each.</li><li>Purrs, barks, moves.</li><li>Realistic feel.</li><li>Especially good for dementia.</li><li>No pet care needed.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Paro therapeutic seal</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$6,000 medical robot.</li><li>FDA-approved.</li><li>Memory care facilities use.</li><li>Reduces anxiety.</li><li>Premium option.</li><li>For deep dementia.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Replika AI</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>App-based AI friend.</li><li>Free + paid versions.</li><li>Texts + voice chat.</li><li>Listens always.</li><li>Senior backup conversation.</li><li>Don&apos;t replace humans.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Echo Show + Alexa</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$80 starter companion.</li><li>Drop-in family video.</li><li>Voice answers.</li><li>News + music.</li><li>Cheaper companion.</li><li>Senior accessible.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When companion robots help</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Living alone.</li><li>Limited mobility for outings.</li><li>Mild dementia comfort.</li><li>Spouse loss adjustment.</li><li>Always there.</li><li>Supplement, not replace humans.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$130 Joy pet = lonely senior comfort</h3><p className="text-sm text-muted-foreground">Joy for All robot cat ($130) shockingly comforting for lonely seniors. Purrs, responds to touch, no pet maintenance. Great for memory care or living alone. ElliQ ($249) more advanced AI. Don&apos;t replace human contact — but real comfort 24/7.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
