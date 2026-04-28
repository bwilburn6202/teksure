import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Wifi, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

type Age = 'under-3' | '3-5' | '5-10' | 'over-10';
type Coverage = 'one-room' | 'whole-house' | 'multi-floor' | 'big-house';
type Rented = 'rented' | 'own' | 'not-sure';

interface Recommendation {
  verdict: 'keep' | 'upgrade' | 'consider';
  headline: string;
  summary: string;
  pick: string;
  pickPrice: string;
  pickWhy: string;
  monthlySavings?: string;
}

function recommend(age: Age, coverage: Coverage, rented: Rented, deadZones: boolean): Recommendation {
  // Rented router from ISP — always replace if user owns option
  if (rented === 'rented') {
    return {
      verdict: 'upgrade',
      headline: 'Buy your own router — stop paying rent',
      summary: 'Your ISP is charging $10–$15/month for a rented router. Over 3 years that is $360–$540. A $130 router pays for itself in 9 months and works better.',
      pick: coverage === 'big-house' || coverage === 'multi-floor' ? 'TP-Link Deco X55 mesh (3-pack)' : 'TP-Link Archer AX3000',
      pickPrice: coverage === 'big-house' || coverage === 'multi-floor' ? '$200' : '$100',
      pickWhy: coverage === 'big-house' || coverage === 'multi-floor'
        ? 'Mesh covers a whole house with no dead zones. Three units talk to each other.'
        : 'Solid Wi-Fi 6 router for an apartment or one-floor house. App setup in 10 minutes.',
      monthlySavings: '$10–$15/month',
    };
  }

  // Old router
  if (age === 'over-10' || (age === '5-10' && deadZones)) {
    return {
      verdict: 'upgrade',
      headline: 'Time to replace it',
      summary: 'Routers older than 5 years are slower and have known security holes that the manufacturer no longer patches. Newer Wi-Fi 6 routers are 3-5x faster for the same price.',
      pick: coverage === 'big-house' || coverage === 'multi-floor' ? 'Eero 6+ mesh (3-pack)' : 'TP-Link Archer AX3000',
      pickPrice: coverage === 'big-house' || coverage === 'multi-floor' ? '$280' : '$100',
      pickWhy: coverage === 'big-house' || coverage === 'multi-floor'
        ? 'Mesh blankets the whole house with one signal. Eero is the simplest to set up.'
        : 'Wi-Fi 6 covers an apartment or single-floor house easily. App setup in 10 minutes.',
    };
  }

  // Dead zones with newer router
  if (deadZones) {
    return {
      verdict: 'consider',
      headline: 'Add a mesh extension instead of replacing',
      summary: 'Your router is fine, but parts of the house do not get signal. A second mesh node from the same brand fixes this without replacing what works.',
      pick: 'Match your existing router brand — TP-Link, Eero, or Google Nest Wifi add-on',
      pickPrice: '$80–$150',
      pickWhy: 'Add-on units pair with your existing router and extend coverage. Cheapest option for fixing dead zones.',
    };
  }

  // Newish router, working fine
  if (age === 'under-3' || age === '3-5') {
    return {
      verdict: 'keep',
      headline: 'Keep what you have',
      summary: 'Your router is reasonably new and you have no coverage issues. No need to upgrade. Restart it monthly (unplug for 30 seconds) — that is enough maintenance.',
      pick: 'No purchase needed',
      pickPrice: '$0',
      pickWhy: 'Save the money. Routers that age into trouble usually do so after 5 years.',
    };
  }

  return {
    verdict: 'consider',
    headline: 'Probably fine — keep an eye on it',
    summary: 'Your router has been around a while but works. No urgent need. When it starts dropping connections or running hot, that is your signal to replace.',
    pick: 'When you do upgrade: TP-Link Archer AX3000',
    pickPrice: '$100',
    pickWhy: 'Wi-Fi 6, app-guided setup, reliable. Best mainstream pick.',
  };
}

export default function RouterUpgradeHelper() {
  const [age, setAge] = useState<Age | null>(null);
  const [coverage, setCoverage] = useState<Coverage | null>(null);
  const [rented, setRented] = useState<Rented | null>(null);
  const [deadZones, setDeadZones] = useState<boolean | null>(null);

  const result = useMemo(() => {
    if (!age || !coverage || !rented || deadZones === null) return null;
    return recommend(age, coverage, rented, deadZones);
  }, [age, coverage, rented, deadZones]);

  return (
    <>
      <SEOHead
        title="Wi-Fi Router Upgrade Helper"
        description="Should you replace your Wi-Fi router? Five questions and a clear answer — keep, upgrade, or add a mesh node. Plus the simple math on stop renting from your ISP."
        path="/tools/router-upgrade-helper"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-cyan-50 via-background to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <Wifi className="h-8 w-8 text-cyan-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Wi-Fi Router Upgrade Helper</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Should you replace your router or keep it? Five honest questions and a clear answer.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Router Upgrade Helper' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-6 space-y-6">
              <div>
                <Label className="text-sm font-semibold mb-2 block">1. How old is your current router?</Label>
                <RadioGroup value={age ?? ''} onValueChange={(v) => setAge(v as Age)}>
                  <div className="flex items-center gap-3"><RadioGroupItem value="under-3" id="a1" /><Label htmlFor="a1" className="cursor-pointer">Under 3 years</Label></div>
                  <div className="flex items-center gap-3"><RadioGroupItem value="3-5" id="a2" /><Label htmlFor="a2" className="cursor-pointer">3–5 years</Label></div>
                  <div className="flex items-center gap-3"><RadioGroupItem value="5-10" id="a3" /><Label htmlFor="a3" className="cursor-pointer">5–10 years</Label></div>
                  <div className="flex items-center gap-3"><RadioGroupItem value="over-10" id="a4" /><Label htmlFor="a4" className="cursor-pointer">Over 10 years</Label></div>
                </RadioGroup>
              </div>

              {age && (
                <div>
                  <Label className="text-sm font-semibold mb-2 block">2. Where do you live?</Label>
                  <RadioGroup value={coverage ?? ''} onValueChange={(v) => setCoverage(v as Coverage)}>
                    <div className="flex items-center gap-3"><RadioGroupItem value="one-room" id="c1" /><Label htmlFor="c1" className="cursor-pointer">Studio or one-bedroom apartment</Label></div>
                    <div className="flex items-center gap-3"><RadioGroupItem value="whole-house" id="c2" /><Label htmlFor="c2" className="cursor-pointer">Single-floor house</Label></div>
                    <div className="flex items-center gap-3"><RadioGroupItem value="multi-floor" id="c3" /><Label htmlFor="c3" className="cursor-pointer">Multi-floor house</Label></div>
                    <div className="flex items-center gap-3"><RadioGroupItem value="big-house" id="c4" /><Label htmlFor="c4" className="cursor-pointer">Big house (3,000+ sq ft)</Label></div>
                  </RadioGroup>
                </div>
              )}

              {coverage && (
                <div>
                  <Label className="text-sm font-semibold mb-2 block">3. Did you buy your router, or are you renting it from your internet company?</Label>
                  <RadioGroup value={rented ?? ''} onValueChange={(v) => setRented(v as Rented)}>
                    <div className="flex items-center gap-3"><RadioGroupItem value="own" id="r1" /><Label htmlFor="r1" className="cursor-pointer">I bought it</Label></div>
                    <div className="flex items-center gap-3"><RadioGroupItem value="rented" id="r2" /><Label htmlFor="r2" className="cursor-pointer">I rent it from Comcast / Verizon / Spectrum / etc.</Label></div>
                    <div className="flex items-center gap-3"><RadioGroupItem value="not-sure" id="r3" /><Label htmlFor="r3" className="cursor-pointer">Not sure</Label></div>
                  </RadioGroup>
                  <p className="text-xs text-muted-foreground mt-1">If your bill has a "modem rental fee" or "router rental", you are renting.</p>
                </div>
              )}

              {rented && (
                <div>
                  <Label className="text-sm font-semibold mb-2 block">4. Are there rooms in your home where Wi-Fi barely works?</Label>
                  <RadioGroup value={deadZones === null ? '' : String(deadZones)} onValueChange={(v) => setDeadZones(v === 'true')}>
                    <div className="flex items-center gap-3"><RadioGroupItem value="true" id="d1" /><Label htmlFor="d1" className="cursor-pointer">Yes — at least one dead zone</Label></div>
                    <div className="flex items-center gap-3"><RadioGroupItem value="false" id="d2" /><Label htmlFor="d2" className="cursor-pointer">No — works everywhere</Label></div>
                  </RadioGroup>
                </div>
              )}
            </CardContent>
          </Card>

          {result && (
            <>
              <Card className={`border-2 mb-6 ${
                result.verdict === 'upgrade' ? 'border-green-300 bg-green-50 dark:bg-green-950/20' :
                result.verdict === 'keep' ? 'border-blue-300 bg-blue-50 dark:bg-blue-950/20' :
                'border-amber-300 bg-amber-50 dark:bg-amber-950/20'
              }`}>
                <CardContent className="p-6">
                  <Badge className="mb-2">{result.verdict === 'keep' ? 'Keep it' : result.verdict === 'upgrade' ? 'Upgrade' : 'Maybe'}</Badge>
                  <h2 className="text-2xl font-bold mb-2">{result.headline}</h2>
                  <p className="text-sm text-muted-foreground mb-3">{result.summary}</p>
                  {result.monthlySavings && (
                    <p className="text-sm">Stops paying: <strong>{result.monthlySavings}</strong> in router rent.</p>
                  )}
                </CardContent>
              </Card>

              <Card className="border-border mb-6">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Recommended pick</p>
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold">{result.pick}</p>
                    <Badge variant="outline">{result.pickPrice}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{result.pickWhy}</p>
                </CardContent>
              </Card>

              {(result.verdict === 'upgrade' || result.verdict === 'consider') && (
                <Card className="border-border bg-muted/30 mb-6">
                  <CardContent className="p-5">
                    <p className="text-sm font-semibold mb-2">After you swap routers</p>
                    <ol className="space-y-1.5 text-xs text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">1.</span><span>Use the new router\'s app to pick a Wi-Fi name and password — same as the old one if you want all your devices to reconnect automatically.</span></li>
                      <li className="flex gap-2"><span className="text-primary">2.</span><span>Set up the "guest network" — a separate name for visitors. Keeps your printer and smart devices isolated.</span></li>
                      <li className="flex gap-2"><span className="text-primary">3.</span><span>Return the rented router IN PERSON, get a receipt with the serial number. Photograph it. ISPs charge $200+ for "lost" equipment.</span></li>
                      <li className="flex gap-2"><span className="text-primary">4.</span><span>Call the ISP and ask them to remove the rental fee from your bill. Confirm in writing.</span></li>
                    </ol>
                  </CardContent>
                </Card>
              )}
            </>
          )}

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">A note on Wi-Fi 7 (the newest standard)</p>
                <p className="text-muted-foreground">
                  Wi-Fi 7 routers are out, but they cost 2-3x what Wi-Fi 6 does and you need Wi-Fi 7 phones and laptops to actually use it. For most homes, Wi-Fi 6 is the sweet spot for the next 4-5 years.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/wifi-troubleshooter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Wi-Fi Troubleshooter</p>
                <p className="text-xs text-muted-foreground mt-0.5">Try fixes before you buy.</p>
              </Link>
              <Link to="/tools/wifi-speed" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Wi-Fi Speed Test</p>
                <p className="text-xs text-muted-foreground mt-0.5">Check what you are paying for.</p>
              </Link>
              <Link to="/tools/bill-negotiator" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Bill Negotiator</p>
                <p className="text-xs text-muted-foreground mt-0.5">Reduce your internet bill.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
