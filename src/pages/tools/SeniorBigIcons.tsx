import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Maximize } from 'lucide-react';

export default function SeniorBigIcons() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Big Icons for Seniors — TekSure" description="Make phone icons bigger — easier to see and tap." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Maximize className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Big Icons for Seniors</h1>
          <p className="text-lg text-muted-foreground">Easier to see. Easier to tap.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone</h2><p>Settings → Display &amp; Brightness → Display Zoom → Larger Text.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android</h2><p>Settings → Display → Display Size and Text → Make Bigger.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Samsung Easy Mode</h2><p>Settings → Display → Easy Mode. Big icons. Few apps.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Big Launcher (Android)</h2><p>Free app. Replaces home screen with HUGE icons.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Trade-off</h2><p>Bigger icons = fewer per screen. Worth it for clarity.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tablet alternative</h2><p>iPad has bigger screen. Same iPhone icons but easier to see and tap.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Big icons + bold text = phone usable forever. Set once, enjoy daily.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
