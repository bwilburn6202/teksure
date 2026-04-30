import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Spade } from 'lucide-react';

export default function BridgeOnlineForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bridge Online for Seniors | TekSure" description="Play bridge online with friends or strangers. Senior bridge app guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Spade className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bridge Online</h1>
          <p className="text-lg text-muted-foreground">Play anytime, anywhere.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bridge Base Online</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + most popular.</li><li>BBO.com or app.</li><li>Play anytime.</li><li>Tournaments daily.</li><li>Robot or human partner.</li><li>Senior bridge mecca.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Funbridge</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>App-focused.</li><li>Bid against AI.</li><li>Solo play any time.</li><li>Compare to others.</li><li>Free + paid options.</li><li>Senior favorite.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">ACBL</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>American Contract Bridge.</li><li>Earn masterpoints online.</li><li>Sanctioned games.</li><li>Local club connection.</li><li>Annual fee.</li><li>Serious players.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Learning</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Audrey Grant beginner books.</li><li>BBO learning section.</li><li>Local bridge classes.</li><li>YouTube — BridgeBum.</li><li>Slow + steady learning.</li><li>Lifetime study.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">With friends</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>BBO private tables.</li><li>Zoom + audio chat.</li><li>Schedule weekly games.</li><li>Long-distance connection.</li><li>Friends across country.</li><li>Senior social magic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bigger screen = easier.</li><li>iPad ideal.</li><li>Slow tournaments to start.</li><li>Don&apos;t stress masterpoints.</li><li>Have fun first.</li><li>Brain workout proven.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">BBO = senior bridge community</h3><p className="text-sm text-muted-foreground">Free Bridge Base Online connects 100,000+ players globally. Bridge proven to slow cognitive decline. Many seniors play hour daily — keeps mind sharp. Friends across country play weekly via private tables. Best free senior brain game online.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
