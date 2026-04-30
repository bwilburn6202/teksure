import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hammer } from 'lucide-react';

export default function WoodworkingPlansApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Woodworking Plans + Apps for Seniors | TekSure" description="Best woodworking plans, apps, and YouTube channels for seniors. Free and paid options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hammer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Woodworking Resources</h1>
          <p className="text-lg text-muted-foreground">Plans, apps, and free video tutorials.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free YouTube channels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Steve Ramsey — Woodworking for Mere Mortals.</li>
              <li>Stumpy Nubs — beginner to advanced.</li>
              <li>Jonathan Katz-Moses — clear instruction style.</li>
              <li>April Wilkerson — DIY furniture builds.</li>
              <li>The Wood Whisperer — pro-level techniques.</li>
              <li>Hundreds of free project videos each week.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free plan websites</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Ana White — hundreds of free woodworking plans.</li>
              <li>Wood Magazine — free plans monthly.</li>
              <li>Popular Mechanics — classic project plans.</li>
              <li>Reddit r/woodworking — community + plans.</li>
              <li>Instructables — step-by-step with photos.</li>
              <li>YouTube channels often link plan downloads.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Paid plan resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>TedsWoodworking — 16,000 plans for $67 lifetime.</li>
              <li>Fine Woodworking magazine — $35/year subscription.</li>
              <li>Wood Magazine subscription — $30/year.</li>
              <li>Popular Woodworking — $30/year, video archive.</li>
              <li>Etsy — buy individual plan PDFs ($5–15 each).</li>
              <li>Free options usually enough.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Useful apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iHandy Carpenter — level + ruler + protractor.</li>
              <li>Bob Vila&apos;s Hand Tool — tool reference guide.</li>
              <li>Wood Magazine app — read on phone or tablet.</li>
              <li>SketchUp Free — design plans in 3D.</li>
              <li>Cut List Optimizer — minimize wood waste.</li>
              <li>Most apps free or under $5.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior shop safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hearing protection — over-ear muffs, not foam plugs.</li>
              <li>Safety glasses always — not just goggles you forget.</li>
              <li>Dust mask or respirator for sanding.</li>
              <li>Push sticks for table saw — never fingers near blade.</li>
              <li>Don&apos;t work tired or after medication.</li>
              <li>SawStop technology — auto-stops blade if it touches skin.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tool tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Battery tools = no cord trips.</li>
              <li>Lighter cordless drills + impact drivers.</li>
              <li>Easy-grip handles — soft padded.</li>
              <li>Magnifying lights for fine work.</li>
              <li>Standing aids + stools at workbench.</li>
              <li>Smaller projects — no need to build huge furniture.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with YouTube + Ana White</h3>
            <p className="text-sm text-muted-foreground">Before paying for plan packages or magazine subscriptions, check Ana White&apos;s free plans (AnaWhite.com) and watch a few Steve Ramsey YouTube videos. Both are free and absolutely beginner-friendly. Pick a small project — a simple birdhouse or stool — to get started. Many seniors return to woodworking in retirement and rediscover a lifelong hobby they put on hold.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
