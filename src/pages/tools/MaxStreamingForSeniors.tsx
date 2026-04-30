import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function MaxStreamingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Max (HBO) for Seniors | TekSure" description="HBO Max streaming for seniors. Senior Max guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Max (HBO)</h1>
          <p className="text-lg text-muted-foreground">Premium streaming.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it offers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>HBO classics + new.</li><li>Warner movies.</li><li>$10-$21/month.</li><li>Sopranos, Succession.</li><li>Senior premium TV.</li><li>Real Time, Last Week Tonight.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Plans</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Basic with ads $10.</li><li>Standard $17.</li><li>Premium $21 4K.</li><li>Senior pick basic.</li><li>Annual saves 20%.</li><li>$96-$200/year.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior favorites</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Game of Thrones.</li><li>Sopranos.</li><li>True Detective.</li><li>Curb Your Enthusiasm.</li><li>HBO documentaries.</li><li>Classic films too.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free trial</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No traditional free trial.</li><li>Some carrier deals.</li><li>Cricket includes sometimes.</li><li>AT&amp;T includes premium.</li><li>Senior check carriers.</li><li>Free if eligible.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Quality</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>HBO known prestige.</li><li>Highest quality TV.</li><li>Slow-paced senior friendly.</li><li>Subtitles for hearing.</li><li>Senior cinema-quality.</li><li>Worth premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Watch on smart TV best.</li><li>Phone if travel.</li><li>Download offline.</li><li>Subscribe + cancel by season.</li><li>Senior frugal.</li><li>$96/yr at most.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$10/mo Max ad-tier = senior premium</h3><p className="text-sm text-muted-foreground">$10/month Max with ads = senior premium content. HBO classics + Warner movies. Subscribe for season then cancel. Or check AT&amp;T plans — sometimes free. Best prestige TV available. Sopranos to Game of Thrones. Senior quality TV.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
