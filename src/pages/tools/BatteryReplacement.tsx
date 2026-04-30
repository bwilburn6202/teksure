import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Battery } from 'lucide-react';

export default function BatteryReplacement() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone + Laptop Battery Replacement | TekSure" description="$50 fix vs $1000 new phone. Plain-English picks for battery replacement options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Battery className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Battery Replacement</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t buy new — replace battery.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to replace battery</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phone dies before lunch.</li>
              <li>Laptop won&apos;t hold charge over 2 hours.</li>
              <li>Phone shuts off unexpectedly.</li>
              <li>iPhone Settings → Battery → Battery Health → under 80% Maximum Capacity.</li>
              <li>Often easier + 90% cheaper than buying new device.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone replacement options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Store</strong> — $89-119. Genuine. Best quality.</li>
              <li><strong>uBreakiFix (Asurion)</strong> — Apple-authorized. Same quality. Often faster.</li>
              <li><strong>Local repair shop</strong> — $50-80. Quality varies.</li>
              <li><strong>iFixit DIY kit</strong> — $40-60. Save $30. Skill needed.</li>
              <li>Apple Care covers if under battery warranty.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Laptop battery replacement</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mac</strong> — Apple replaces $129-199.</li>
              <li><strong>Windows laptop</strong> — manufacturer site $50-150.</li>
              <li><strong>Best Buy / uBreakiFix</strong> — service for many brands.</li>
              <li><strong>iFixit DIY</strong> — $40-100. Doable for most.</li>
              <li>Look for OEM (original) — beware fake batteries on Amazon.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Extend battery life</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone — Settings → Battery → Optimized Battery Charging ON.</li>
              <li>Don&apos;t leave at 100% all day.</li>
              <li>Don&apos;t let it drain to 0.</li>
              <li>Avoid hot environments (cars in summer).</li>
              <li>Use phone&apos;s charger or quality 3rd-party.</li>
              <li>Brightness lower = battery lasts longer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When to give up</h3>
            <p className="text-sm text-muted-foreground">If your phone is 7+ years old + slow + battery dying — replace. New phone gets security updates. iPhone SE ($429) cheap entry. Old phones eventually dropped from updates = security risk.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
