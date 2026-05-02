import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function SeniorB12Tracking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="B12 for Seniors — TekSure" description="B12 deficiency common in seniors — symptoms, supplements, food sources." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">B12 for Seniors</h1>
          <p className="text-lg text-muted-foreground">20% of seniors deficient.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why seniors deficient</h2><p>Stomach acid drops with age. B12 absorption decreases. Common.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Symptoms</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Fatigue</li><li>Memory problems</li><li>Tingling hands/feet</li><li>Balance issues</li><li>Mood changes</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Test it</h2><p>Annual blood test. Medicare covers. Cheap to check.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Supplements</h2><p>$10-$20/year. Sublingual tablet under tongue better than swallowed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Food sources</h2><p>Beef, fish, eggs, dairy. Vegans always need supplement.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Metformin issue</h2><p>Diabetes med depletes B12. Take supplement if on metformin.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Don&apos;t accept fatigue as &ldquo;just aging.&rdquo; Test B12 first.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
