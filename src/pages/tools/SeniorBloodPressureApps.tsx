import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorBloodPressureApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Blood Pressure Apps for Seniors — TekSure" description="Track blood pressure on your phone — share readings with your doctor." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Blood Pressure Apps</h1>
          <p className="text-lg text-muted-foreground">Log readings. Spot patterns. Share with your doctor.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Omron Connect</h2><p>Free. Pairs with Omron cuffs by Bluetooth. Auto-logs every reading.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Withings Health Mate</h2><p>Free. Works with Withings BPM Connect. Big graphs.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Health / Google Fit</h2><p>Built into your phone. Type in readings manually. Shows trends over months.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart BP</h2><p>$2.99. Highly rated for manual entry. Print or email charts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to log</h2><p>Same time daily, before coffee or medicine. Sit still 5 minutes first.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Share with doctor</h2><p>Most apps export a PDF. Email or print before your next visit.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Take 2 readings, 1 minute apart. Log the average for accuracy.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
