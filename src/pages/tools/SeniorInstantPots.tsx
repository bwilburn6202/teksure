import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Soup } from 'lucide-react';

export default function SeniorInstantPots() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Instant Pot for Seniors — TekSure" description="Instant Pot basics for seniors — soups, stews, rice, hard-boiled eggs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Soup className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Instant Pot for Seniors</h1>
          <p className="text-lg text-muted-foreground">A 7-in-1 pot. Easier than it looks.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Get the Duo 6-quart</h2><p>$80-$100. Best size for 2 people. Most reliable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Top 5 senior recipes</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Chicken soup (15 min)</li><li>Beef stew (35 min)</li><li>Hard-boiled eggs (5 min)</li><li>Rice (4 min)</li><li>Pulled pork (60 min)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Safety</h2><p>Can&apos;t open until pressure releases. Built-in lock prevents burns.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">First time</h2><p>Run a water test. Boil 1 cup of water on Manual mode. Practice releasing steam.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cleanup</h2><p>Inner pot is dishwasher safe. Lid wipes clean. Easier than slow cookers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">YouTube help</h2><p>Search &ldquo;Instant Pot for beginners.&rdquo; Pressure Luck channel is excellent.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Cook a whole rotisserie-style chicken in 25 minutes. Saves $10 vs grocery store.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
