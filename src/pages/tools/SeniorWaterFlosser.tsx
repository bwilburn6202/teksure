import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

export default function SeniorWaterFlosser() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Water Flossers for Seniors — TekSure" description="Easier than string floss — Waterpik for seniors with dexterity issues." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Water Flossers</h1>
          <p className="text-lg text-muted-foreground">Way easier than string floss.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Waterpik Aquarius</h2><p>$70. Most popular. Counter-top. 10 settings.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Waterpik Cordless</h2><p>$80. Battery-powered. Travel-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><p>Arthritis makes string floss hard. Water flosser easy with shaky hands.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Dental implants/bridges</h2><p>Best for seniors with implants. Reaches where string can&apos;t.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Dentist approved</h2><p>American Dental Association seal. Real benefits proven.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tips for use</h2><p>Lean over sink. Mouth slightly open. Start at gum line. Move slowly.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Add mouthwash to water reservoir for extra benefit.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
