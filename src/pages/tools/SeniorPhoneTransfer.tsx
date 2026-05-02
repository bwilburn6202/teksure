import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function SeniorPhoneTransfer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Transfer Guide for Seniors — TekSure" description="Move from old phone to new — iPhone Quick Start, Smart Switch, Move to iOS." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Transfer Guide</h1>
          <p className="text-lg text-muted-foreground">New phone? Move everything easily.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone to iPhone</h2><p>Quick Start. Place old next to new. Auto-transfers everything.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android to Android</h2><p>Samsung Smart Switch (FREE). Or Google Backup. Restores everything.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android to iPhone</h2><p>Move to iOS app. Free Apple app. Transfers contacts, messages, photos.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone to Android</h2><p>Google Drive backup. Or Smart Switch handles iCloud transfer.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Store help</h2><p>FREE. Buy iPhone there. Genius transfers everything for you.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best Buy Geek Squad</h2><p>$30-$100. They handle full transfer if buying from them.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Don&apos;t reset old phone for a week. Let any missed apps catch up.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
