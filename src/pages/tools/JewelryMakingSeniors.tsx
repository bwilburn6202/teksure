import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gem } from 'lucide-react';

export default function JewelryMakingSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Jewelry Making for Seniors | TekSure" description="Make jewelry as hobby + income. Plain-English starter guide for senior jewelry makers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gem className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Jewelry Making</h1>
          <p className="text-lg text-muted-foreground">Beautiful gifts. Etsy income potential.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy starter techniques</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Beading</strong> — simple stringing. Starter kit $30.</li>
              <li><strong>Wire wrapping</strong> — copper/silver wire + beads. $30.</li>
              <li><strong>Knotting</strong> — pearl knotting style.</li>
              <li><strong>Macrame</strong> — knot bracelets.</li>
              <li><strong>Polymer clay</strong> — handmade beads/charms.</li>
              <li><strong>Resin</strong> — capture flowers, photos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Starter supplies ($30-50)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mixed beads — Walmart $10 jar.</li>
              <li>Thin elastic OR beading wire.</li>
              <li>Crimp beads + closures.</li>
              <li>Round-nose pliers + flat-nose pliers ($15).</li>
              <li>Wire cutters.</li>
              <li>Project board / mat.</li>
              <li>Fishbeads.com, Fire Mountain Gems = senior-favorite supply stores.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Magnifying glass / desk magnifier.</li>
              <li>Bead board with measuring channels.</li>
              <li>Larger holes in beads (easier threading).</li>
              <li>Bead stoppers prevent slip.</li>
              <li>Beadalong threading wire (stiffer).</li>
              <li>Good light essential.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free learning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>YouTube</strong> — endless tutorials.</li>
              <li><strong>Beadaholique YouTube</strong> — best beginner channel.</li>
              <li><strong>Pinterest</strong> — free patterns.</li>
              <li><strong>Bead Society</strong> — local clubs (most cities).</li>
              <li><strong>Michael&apos;s + Hobby Lobby</strong> — free in-store classes.</li>
              <li><strong>Senior centers</strong> — often have classes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sell jewelry?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Etsy</strong> — biggest market. See /tools/etsy-selling-for-seniors.</li>
              <li><strong>Local craft fairs</strong> — try a few.</li>
              <li><strong>Facebook Marketplace</strong>.</li>
              <li><strong>Friends + family</strong> — easiest first sales.</li>
              <li><strong>Senior centers</strong> — host markets.</li>
              <li>Realistic income $100-1,000/mo at first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior arthritis-friendly</h3>
            <p className="text-sm text-muted-foreground">If hand pain — try LARGER beads + macrame knot bracelets. Avoid tiny seed beads. Polymer clay easier than wire wrapping. Many senior crafters successfully adapt to limitations. Pottery, painting also alternatives if jewelry too fiddly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
