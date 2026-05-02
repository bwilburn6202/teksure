import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorBlueLightFilters() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Blue Light Filters for Seniors — TekSure" description="Reduce eye strain — Night Shift, blue light glasses, screen filters." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Blue Light Filters</h1>
          <p className="text-lg text-muted-foreground">Easier on senior eyes.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone Night Shift</h2><p>FREE. Settings → Display &amp; Brightness → Night Shift. Auto sunset to sunrise.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android Night Light</h2><p>FREE. Settings → Display → Night Light.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">f.lux on computer</h2><p>FREE. Reduces blue light on Mac and Windows. Worth installing.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Blue light glasses</h2><p>$20-$80. Studies mixed but many seniors swear by them.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Better sleep</h2><p>Avoid screens 1 hour before bed. Bigger impact than any filter.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Macular degeneration</h2><p>Some studies link blue light to AMD progression. Filter as precaution.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Set Night Shift to 7 PM-7 AM. Eyes thank you within a week.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
