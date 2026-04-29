import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv2 } from 'lucide-react';

export default function SeniorTvBuyingGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TV Buying Guide for Seniors — OLED, QLED, Size | TekSure" description="Buying a new TV? Plain-English guide to size, picture type (OLED vs QLED vs LED), refresh rate, and brands worth considering." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TV Buying Guide</h1>
          <p className="text-lg text-muted-foreground">From 32" to 85". Plain English picks.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Size: distance from couch matters</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>6 feet from TV</strong> — 50-55" sweet spot.</li>
              <li><strong>8 feet</strong> — 65" sweet spot.</li>
              <li><strong>10 feet</strong> — 75-85" comfortable.</li>
              <li><strong>Bedroom (over 6 feet)</strong> — 32-43" enough.</li>
              <li><strong>Quick formula</strong>: distance in inches ÷ 2 = ideal screen size in inches.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">OLED vs QLED vs LED</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>OLED (LG, Sony)</strong> — best picture. Perfect blacks. $1,200-3,000.</li>
              <li><strong>QLED / Mini-LED (Samsung, TCL, Hisense)</strong> — very bright. Good for sunlit rooms. $700-2,500.</li>
              <li><strong>LED (most TVs)</strong> — basic. Fine for casual viewing. $300-1,500.</li>
              <li><strong>For most seniors:</strong> QLED in living room, basic LED in bedroom.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart TV platform</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Roku TV (TCL, Hisense, some others)</strong> — easiest interface. Most senior-friendly.</li>
              <li><strong>Google TV (Sony, Hisense, others)</strong> — strong if you use Google.</li>
              <li><strong>LG webOS</strong> — clean, simple.</li>
              <li><strong>Samsung Tizen</strong> — slick but pushes ads.</li>
              <li><strong>Fire TV</strong> — Amazon-heavy.</li>
              <li><strong>If unsure:</strong> get a TV with the platform you already use OR add an Apple TV / Roku Stick to ANY TV.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Brand picks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>LG OLED C-series</strong> — best premium picture. Senior-friendly remote.</li>
              <li><strong>Sony Bravia</strong> — best motion handling. Premium.</li>
              <li><strong>Samsung QLED</strong> — bright, vibrant.</li>
              <li><strong>TCL 6-Series Mini-LED</strong> — best value premium.</li>
              <li><strong>Hisense U7/U8</strong> — best mid-range value.</li>
              <li><strong>Vizio</strong> — strong budget pick.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Voice remote</strong> — say "Watch CBS" instead of fumbling through menus.</li>
              <li><strong>Closed captions easy on/off</strong> — should be one button on remote.</li>
              <li><strong>Dialogue/voice mode</strong> — boosts speech clarity.</li>
              <li><strong>Auto-light adjustment</strong> — TV dims/brightens with room.</li>
              <li><strong>Big print menus</strong> — settings allow text size in some TVs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don\'t forget the sound bar</h2>
            <p className="text-sm">Modern thin TVs have terrible sound. Pair ANY new TV with a $200-300 sound bar (See our TV Sound Bar Picker.) — single biggest watching experience improvement.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best sale times</h3>
            <p className="text-sm text-muted-foreground">Black Friday + the week before Super Bowl have the year\'s best TV deals. Costco and Best Buy carry extended warranties worth considering for a $1,000+ TV.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
