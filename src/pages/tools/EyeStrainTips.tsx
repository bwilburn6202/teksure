import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function EyeStrainTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Eye Strain Tips for Seniors | TekSure" description="Reduce screen-related eye strain. Plain-English tips on the 20-20-20 rule, lighting, dry eye, computer glasses." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Eye Strain Tips</h1>
          <p className="text-lg text-muted-foreground">Save your eyes from screens.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">20-20-20 rule</h2>
            <p className="text-sm">Every 20 minutes, look at something 20 feet away for 20 seconds. Most-recommended eye care rule. Set a phone timer first 2 weeks until habit forms.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Screen at arm&apos;s length (24-26").</li>
              <li>Top of screen at eye level — slight downward gaze.</li>
              <li>Bigger font — Settings → Display → Text Size.</li>
              <li>Lighting BEHIND you, not facing screen (no glare).</li>
              <li>Turn DOWN screen brightness in dim room.</li>
              <li>Turn UP brightness in bright room — straining = squinting.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Dry eye relief</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Blink consciously every 30 sec while reading.</li>
              <li>Artificial tears (preservative-free is best) — Refresh Optive, Systane.</li>
              <li>Humidifier in bedroom + office.</li>
              <li>Avoid fan blowing at face.</li>
              <li>Warm compresses — 5 min daily helps oil glands.</li>
              <li>Omega-3 supplements (1,000mg/day) help dry eyes.</li>
              <li>If chronic, see eye doctor — could be MGD or other.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Computer glasses (anti-fatigue)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Different from blue light glasses — these are reading-distance focused.</li>
              <li>Helpful if you work 4+ hrs/day on screens.</li>
              <li>Eye doctor can prescribe "computer-distance" lenses.</li>
              <li>Often built into progressives now.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to worry</h2>
            <p className="text-sm">See eye doctor if eye strain is paired with:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Sudden vision change.</li>
              <li>Floaters or flashes.</li>
              <li>Curtain in vision.</li>
              <li>Severe headaches.</li>
              <li>Double vision.</li>
              <li>Pain inside eye.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Annual eye exam</h3>
            <p className="text-sm text-muted-foreground">Best eye-strain fix is the right prescription. Many seniors push glasses 3-5 years. Annual exam catches gradual changes you don&apos;t notice. See /tools/eye-exam-apps.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
