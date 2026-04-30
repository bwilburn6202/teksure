import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GitMerge } from 'lucide-react';

export default function UniversalRemoteForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Universal Remote for Seniors | TekSure" description="One remote for everything. Best universal remotes for senior TV viewers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GitMerge className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Universal Remotes</h1>
          <p className="text-lg text-muted-foreground">One remote. End coffee table chaos.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why a universal remote?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Replaces 4–5 different remotes.</li>
              <li>One device for TV, cable, soundbar, streaming.</li>
              <li>Bigger buttons easier on aging eyes.</li>
              <li>Backlit buttons for nighttime.</li>
              <li>Less confusion for visiting grandkids.</li>
              <li>Stop losing remotes between cushions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Big-button basic</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>GE Big Button Universal — $20.</li>
              <li>Huge buttons for low vision.</li>
              <li>Replaces basic TV + cable.</li>
              <li>No fancy features but easy to use.</li>
              <li>Walmart, Amazon stock these.</li>
              <li>Great gift for parents/grandparents.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Logitech Harmony</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sadly discontinued but used ones still work.</li>
              <li>Find on eBay, Facebook Marketplace.</li>
              <li>Activity-based — &quot;Watch TV&quot; turns on everything.</li>
              <li>Smartphone setup app still works.</li>
              <li>Was the gold standard universal remote.</li>
              <li>$50–$150 used.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Modern alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>SofaBaton U2 — $80, similar to Harmony.</li>
              <li>SofaBaton X1 — $110, with hub.</li>
              <li>BroadLink RM4 Pro — $40, smartphone-controlled.</li>
              <li>Caavo (discontinued) — used market.</li>
              <li>Apple TV remote app — controls more devices.</li>
              <li>Roku app — backup remote on phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific picks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Flipper Big Button Universal — $25.</li>
              <li>Made specifically for seniors.</li>
              <li>Only 6 large buttons.</li>
              <li>Programs to your TV in 30 seconds.</li>
              <li>Slip-proof grip.</li>
              <li>Many memory care facilities use this.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setting up universal</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Find code for your TV brand.</li>
              <li>Press setup button.</li>
              <li>Enter code or auto-search.</li>
              <li>Test buttons — power, volume, channels.</li>
              <li>Repeat for each device (cable, soundbar, etc.).</li>
              <li>Adult child can help — 15-minute setup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Flipper for memory issues</h3>
            <p className="text-sm text-muted-foreground">For seniors with early dementia or memory issues, the Flipper Big Button Universal Remote ($25) is wonderful — only 6 buttons, all clearly labeled, replaces all remote complexity. Many caregivers buy these for elderly parents to reduce TV-related frustration. For tech-comfortable seniors who want fancy features, used Logitech Harmony remotes are still the gold standard.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
