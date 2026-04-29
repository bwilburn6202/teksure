import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function DVTPreventionSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="DVT Prevention for Seniors | TekSure" description="Prevent blood clots in legs. Plain-English DVT guide for seniors travel + recovery." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">DVT Prevention</h1>
          <p className="text-lg text-muted-foreground">Blood clots in legs = serious. Preventable.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DVT basics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Deep Vein Thrombosis = blood clot in leg.</li>
              <li>Can break loose + travel to lungs (PE) = fatal.</li>
              <li>Risk increases with age.</li>
              <li>Higher risk: surgery, long flights, immobility.</li>
              <li>Often missed.</li>
              <li>Preventable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Symptoms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Leg swelling (one side usually).</li>
              <li>Warm to touch.</li>
              <li>Pain in calf.</li>
              <li>Red or discolored skin.</li>
              <li>Hard to walk.</li>
              <li>Sudden shortness of breath = lungs (911).</li>
              <li>Chest pain breathing = 911.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Prevent during flights/long drives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Walk every 1-2 hours.</li>
              <li>Ankle pumps (point + flex feet) every 20 min.</li>
              <li>Compression socks 15-20 mmHg.</li>
              <li>Stay hydrated.</li>
              <li>Avoid alcohol on flights.</li>
              <li>Don&apos;t cross legs long periods.</li>
              <li>Aisle seat for stretches.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After surgery</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Walk early + often.</li>
              <li>Compression boots in hospital.</li>
              <li>Sometimes blood thinners briefly.</li>
              <li>Don&apos;t skip ambulation.</li>
              <li>Hospitals routinely prevent now.</li>
              <li>Hip + knee replacements highest risk.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily prevention</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Walk daily.</li>
              <li>Stay hydrated.</li>
              <li>Don&apos;t sit 4+ hours without breaks.</li>
              <li>Compression socks if swelling.</li>
              <li>Maintain healthy weight.</li>
              <li>Quit smoking.</li>
              <li>Hormone therapy/birth control = increased risk.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If diagnosed DVT</h3>
            <p className="text-sm text-muted-foreground">Blood thinner 3-6+ months. Often outpatient. Compression stockings reduce post-DVT issues. Some get caval filters. Recurrence common — prevention matters. Don&apos;t ignore leg symptoms.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
