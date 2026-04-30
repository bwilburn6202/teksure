import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { LifeBuoy } from 'lucide-react';

export default function MedicalAlertWatchesForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medical Alert Watches for Seniors | TekSure" description="Modern medical alert watches. Senior fall detection guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <LifeBuoy className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medical Alert Watches</h1>
          <p className="text-lg text-muted-foreground">Modern senior emergency.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Watch SE/9</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$249-$400.</li><li>Fall detection.</li><li>SOS one button.</li><li>Senior modern alert.</li><li>Looks like watch.</li><li>Multifunction.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Lively Wearable</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$50 + $25/month.</li><li>Senior simpler.</li><li>Pendant or wrist.</li><li>5Star agent button.</li><li>GreatCall company.</li><li>Senior-targeted.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Medical Guardian</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30-$50/month.</li><li>Watch-style.</li><li>Fall detection.</li><li>Senior 24/7 monitoring.</li><li>Voice 2-way.</li><li>Trusted brand.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Watch best</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>For tech-savvy senior.</li><li>$0 monthly fee.</li><li>Need iPhone.</li><li>Fall detection auto.</li><li>SOS calls.</li><li>Heart, ECG, sleep.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pendant simple</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Lifeline AT&amp;T.</li><li>$30/month.</li><li>One button.</li><li>Senior simple.</li><li>For tech-resistant.</li><li>Cellular built-in.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tip</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Wear shower too (waterproof).</li><li>Most falls in bath.</li><li>Don&apos;t take off.</li><li>Charge nightly.</li><li>Senior critical wear.</li><li>Family peace.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Apple Watch SE = senior modern alert</h3><p className="text-sm text-muted-foreground">$249 Apple Watch SE = senior modern medical alert. Fall detection auto. SOS call. Heart monitoring. No monthly fee. Better looking than pendant. For tech-resistant seniors, $30/mo Lively or Lifeline pendant. Wear in shower too.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
