import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Recycle } from 'lucide-react';

export default function SeniorOldDevicesRecycle() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Recycle Old Devices for Seniors — TekSure" description="Safely sell or recycle old phones, computers — wipe data first." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Recycle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Recycle Old Devices</h1>
          <p className="text-lg text-muted-foreground">Get cash. Help the planet.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wipe first</h2><p>iPhone: Settings → General → Reset → Erase All. Android: Settings → Reset.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sell for cash</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Apple Trade-In</li><li>Samsung Trade-In</li><li>Decluttr.com</li><li>Best Buy trade-in</li><li>Amazon Trade-In</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Donate</h2><p>Goodwill, Cell Phones for Soldiers. Tax deduction.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free recycling</h2><p>Best Buy and Staples take any electronics free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Old computers</h2><p>Wipe with manufacturer&apos;s reset tool. Factory new state.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Don&apos;t throw away</h2><p>Lithium batteries cause fires. Always recycle properly.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Old iPhones often worth $100-$200. Check Apple Trade-In before recycling.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
