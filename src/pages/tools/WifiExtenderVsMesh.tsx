import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function WifiExtenderVsMesh() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Wi-Fi Extender vs Mesh — Which Fixes Dead Zones? | TekSure" description="Wi-Fi weak in the back bedroom? Plain-English guide to extenders ($30-50), mesh systems ($150-400), and which actually works." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Wi-Fi Extender vs Mesh</h1>
          <p className="text-lg text-muted-foreground">Fix the dead zone — without spending too much.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📡 Wi-Fi Extender (cheap, simple)</h2>
            <p className="text-sm">$30-80 device that plugs into a wall outlet. Catches your existing Wi-Fi, rebroadcasts.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li><strong>Pros</strong>: Cheap, fast install (10 minutes).</li>
              <li><strong>Cons</strong>: Halves the speed at the extender. Creates a SECOND network name. Phone may stay on weak primary instead of switching.</li>
              <li><strong>When to use</strong>: One small area not getting signal (back bedroom, garage). Budget under $100.</li>
            </ul>
            <p className="text-sm mt-2"><strong>Picks</strong>: TP-Link RE315 ($30), Netgear EX3700 ($40).</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🌐 Mesh System (premium, seamless)</h2>
            <p className="text-sm">$150-400 set of 2-3 units. Replaces your existing router. Creates ONE network with full coverage.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li><strong>Pros</strong>: Same network everywhere. Full speed. Auto-switches as you walk.</li>
              <li><strong>Cons</strong>: 3-5x more expensive than extender.</li>
              <li><strong>When to use</strong>: Whole-home coverage problems. Big house. Multiple dead zones.</li>
            </ul>
            <p className="text-sm mt-2"><strong>Picks</strong>: eero 6+ 2-pack ($200), TP-Link Deco X20 3-pack ($170), Google Nest Wifi Pro 3-pack ($300).</p>
            <p className="text-sm mt-2">(See our Mesh Wi-Fi Picker for more.)</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🔌 Powerline adapter (alternative)</h2>
            <p className="text-sm">Sends internet through your home\'s electrical wiring. $80-150 for a kit. Plug one in near router, one in dead zone.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li><strong>Pros</strong>: Bypasses Wi-Fi entirely. Wired-quality speeds.</li>
              <li><strong>Cons</strong>: Older homes with split electrical panels often don\'t work.</li>
              <li><strong>When to use</strong>: Smart TV in basement that needs hard internet.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free fixes to try first</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Move router</strong> — central in home, off floor, away from microwave/big appliances.</li>
              <li><strong>Restart router</strong> — unplug 30 sec, plug back. Fixes 50% of complaints.</li>
              <li><strong>Update firmware</strong> — log into router admin page, click "Check for updates".</li>
              <li><strong>Check Wi-Fi channel</strong> — auto might be jammed by neighbors. Try manually setting channel 1, 6, or 11 on 2.4GHz.</li>
              <li><strong>Replace 8-year-old router</strong> — new $80 router beats old $200 router.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Decision rule</h3>
            <p className="text-sm text-muted-foreground">One small dead zone → extender. Multiple dead zones / whole-house → mesh. Stuck on bad Wi-Fi for years → just upgrade to mesh, spend the money once. The savings on stress is enormous.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
