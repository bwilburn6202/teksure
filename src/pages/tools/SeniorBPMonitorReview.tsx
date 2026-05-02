import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorBPMonitorReview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Best Blood Pressure Monitors for Seniors — TekSure" description="Top home blood pressure cuffs for seniors — Omron, Withings, Greater Goods." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Best Blood Pressure Monitors</h1>
          <p className="text-lg text-muted-foreground">Track BP at home — accurately.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Omron Platinum</h2><p>$80. Most accurate. Stores 200+ readings. Bluetooth to phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Withings BPM Connect</h2><p>$130. Sleek. Beautiful app. Auto-syncs with iPhone Health.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Greater Goods 0604</h2><p>$25. Cheapest reliable choice. Works without app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">QardioArm</h2><p>$100. Travel-size. Works with Apple Watch.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">How to use</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Sit still 5 minutes first</li><li>Cuff on bare arm</li><li>Arm at heart level</li><li>Take 2 readings, 1 minute apart</li><li>Same time each day</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Insurance coverage</h2><p>Many Medicare Part B plans cover BP monitors with a doctor&apos;s prescription.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Take 2 weeks of readings before doctor visits. Real data beats &ldquo;I felt dizzy.&rdquo;</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
