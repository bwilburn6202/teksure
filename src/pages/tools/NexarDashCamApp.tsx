import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function NexarDashCamApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Nexar Dash Cam App for Seniors | TekSure" description="Use your phone as a dash cam — free with Nexar app. Senior driver evidence + safety." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Nexar Dash Cam</h1>
          <p className="text-lg text-muted-foreground">Phone becomes a dash cam. Free.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Nexar?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free dash cam app.</li>
              <li>Records video while driving.</li>
              <li>Auto-saves accidents (impact detection).</li>
              <li>Cloud storage for footage.</li>
              <li>No dedicated dashcam needed.</li>
              <li>Available iPhone + Android.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors should use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Evidence in accidents — protect your story.</li>
              <li>Insurance disputes resolved fast.</li>
              <li>Hit-and-run protection.</li>
              <li>Catch fraudsters fake-staging accidents.</li>
              <li>Document road conditions.</li>
              <li>Family can review your driving.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mount phone on dashboard.</li>
              <li>Open Nexar app.</li>
              <li>Tap record before driving.</li>
              <li>Auto-stops when arriving.</li>
              <li>Footage saved automatically.</li>
              <li>Use phone car charger.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hardware dash cams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>VIOFO A129 — $200, popular.</li>
              <li>Garmin Dash Cam Mini 2 — $130.</li>
              <li>BlackVue DR770 — $300, premium.</li>
              <li>Better than phone for permanent use.</li>
              <li>24/7 parking surveillance.</li>
              <li>Always recording.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Some insurers offer discount with dashcam.</li>
              <li>Faster claim resolution.</li>
              <li>Protects from false claims.</li>
              <li>Especially useful in 50/50 disputes.</li>
              <li>Ask your insurance about discounts.</li>
              <li>Worth even $200 hardware investment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mount where it doesn&apos;t obstruct view.</li>
              <li>Below the rearview mirror typical.</li>
              <li>USB power from outlet or 12V.</li>
              <li>Verify settings before driving.</li>
              <li>Check footage occasionally.</li>
              <li>Family member can help install.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free Nexar to try</h3>
            <p className="text-sm text-muted-foreground">Before buying a $200 dedicated dashcam, try the free Nexar app for a week. Mount your phone, record commutes, see if you like it. Many seniors find this is enough. If you drive often, then upgrade to dedicated dashcam. The 2-3 minute video clip from a fender-bender can save thousands in disputed insurance claims.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
