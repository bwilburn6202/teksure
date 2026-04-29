import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function BlindSpotMirrorSetups() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Blind Spot Mirror Setup for Seniors | TekSure" description="$5-20 stick-on mirrors that eliminate blind spots. Plain-English picks + how to angle side mirrors correctly." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Blind Spot Mirrors</h1>
          <p className="text-lg text-muted-foreground">$5 trick. Major safety boost.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best blind spot mirrors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Ampper Round 2"</strong> — $7. Most popular. Stick-on, adjustable.</li>
              <li><strong>Utopicar 2-pack</strong> — $10. Frameless design.</li>
              <li><strong>Liberrway Convex</strong> — $10. Wider angle.</li>
              <li>Just stick on outside corner of side mirror — done.</li>
              <li>Adjustable ball-joint = tilt to your blind spot.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Side mirror angle (BAS Method)</h2>
            <p className="text-sm">SAE / BAS Method by SAE International — eliminates traditional blind spots:</p>
            <ol className="list-decimal pl-5 space-y-2 text-sm mt-2">
              <li>Sit in driver seat, head against window.</li>
              <li>Adjust LEFT mirror — see only EDGE of car.</li>
              <li>Sit upright, head toward center.</li>
              <li>Adjust RIGHT mirror — see only EDGE of car.</li>
              <li>Adjust REAR mirror — center on rear window.</li>
              <li>Result: car appears in PASSED mirror as it leaves rear mirror.</li>
              <li>Practice 1 week — adjust as needed.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other senior-driving safety tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bigger interior rearview mirror</strong> ($30) — clip-on extension.</li>
              <li><strong>Anti-glare film</strong> for windshield ($20).</li>
              <li><strong>Lighted rearview mirror</strong> ($15) — for night.</li>
              <li><strong>Dash cam</strong> — settle "who&apos;s at fault" disputes.</li>
              <li><strong>Front + rear sensors aftermarket</strong> ($100-200).</li>
              <li><strong>Heads-up display</strong> ($50-100) — speed on windshield.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bigger advice</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Avoid lane-changes on busy highways when possible.</li>
              <li>Always shoulder-check before changing lanes (mirror + glance).</li>
              <li>Slow down 5 mph below traffic flow if comfortable — let others pass.</li>
              <li>Drive familiar routes when possible.</li>
              <li>Avoid driving in heavy rain / dawn / dusk if vision struggles.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Newer cars do this for you</h3>
            <p className="text-sm text-muted-foreground">Cars 2018+ often have blind spot warning beeps + lane departure alerts. If considering new car, prioritize these features. They prevent way more accidents than horsepower.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
