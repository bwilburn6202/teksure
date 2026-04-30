import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brush } from 'lucide-react';

export default function SeniorPaintingClasses() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Painting Classes for Seniors | TekSure" description="Learn watercolor, acrylic, oil painting from home. Senior-friendly online classes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brush className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Painting Classes</h1>
          <p className="text-lg text-muted-foreground">Discover the artist within.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bob Ross style — free</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bob Ross Joy of Painting on YouTube.</li>
              <li>Full episodes free + iconic.</li>
              <li>Wet-on-wet oil technique.</li>
              <li>Encouraging + soothing style.</li>
              <li>Many seniors start here.</li>
              <li>&quot;Happy little trees&quot; mindset.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Skillshare painting</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$14/month for thousands of classes.</li>
              <li>Watercolor, acrylic, oil, drawing.</li>
              <li>1-month free trial.</li>
              <li>Beginner to advanced.</li>
              <li>Professional artist instructors.</li>
              <li>Cancel anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">YouTube channels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lindsay Weirich (The Frugal Crafter).</li>
              <li>Watercolor Misfit.</li>
              <li>Sarah Cray (Let&apos;s Make Art).</li>
              <li>Lewis Rossignol — drawing.</li>
              <li>Free quality tutorials.</li>
              <li>Replace expensive subscriptions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Local options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Senior centers often offer classes.</li>
              <li>Library art programs.</li>
              <li>Community college continuing ed.</li>
              <li>Paint + sip parties (with friends).</li>
              <li>OLLI lifelong learning programs.</li>
              <li>In-person better than online for some.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cheap art supplies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reeves watercolors — beginner $20.</li>
              <li>Liquitex Basics acrylics — $20 starter.</li>
              <li>Canson watercolor pad — $10.</li>
              <li>Don&apos;t buy expensive at first.</li>
              <li>Upgrade as you learn.</li>
              <li>Hobby Lobby + Michaels coupons help.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Digital painting</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPad + Apple Pencil + Procreate ($13).</li>
              <li>No supplies, no mess.</li>
              <li>Unlimited &quot;canvas.&quot;</li>
              <li>Save + share digitally.</li>
              <li>Different feel than traditional.</li>
              <li>Free trials of various apps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Bob Ross + dollar-store paints</h3>
            <p className="text-sm text-muted-foreground">Easiest start: watch Bob Ross on YouTube + buy basic acrylic paints from Hobby Lobby. Spend $20 on paints + cheap canvas. Try following along with one episode. Free + low-risk way to discover if painting brings you joy. Many seniors discover lifelong artistic passion this way. The journey from there is endless.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
