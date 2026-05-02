import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

export default function SeniorAppleSupport() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Support for Seniors — TekSure" description="Free Apple help — Genius Bar, Apple Support app, AppleCare for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Support for Seniors</h1>
          <p className="text-lg text-muted-foreground">Free help. Patient. Real.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Support app</h2><p>FREE. Schedule appointments. Live chat. Phone callback.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Genius Bar</h2><p>FREE. 30-minute appointments. Diagnoses repairs.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Today at Apple</h2><p>FREE classes. Photo basics, video calls, accessibility, Apple Watch setup.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Aging in Place</h2><p>FREE 1-on-1 sessions. Apple specialists help seniors with iPhone setup.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AppleCare+</h2><p>$10/month for iPhone. Worth it for accidents (drops, water).</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Phone</h2><p>1-800-APL-CARE. US-based support. Patient with seniors.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Book Genius Bar 1 week ahead. Slots fill fast.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
