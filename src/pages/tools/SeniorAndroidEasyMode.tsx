import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function SeniorAndroidEasyMode() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Android Easy Mode for Seniors — TekSure" description="Samsung Easy Mode and Pixel senior tips — make Android simpler." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Android Easy Mode</h1>
          <p className="text-lg text-muted-foreground">Big icons. Simple layout.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Samsung Easy Mode</h2><p>Settings → Display → Easy Mode. Big icons. Limited apps. Senior-perfect.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pixel large display</h2><p>Settings → Display → Display Size and Text. Maximum sizes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Big Launcher (any Android)</h2><p>Free app. Replaces home screen with senior-friendly big buttons.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Live Caption</h2><p>Auto-captions any audio or call. Free on Pixel and Samsung.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sound Amplifier</h2><p>Free Google app. Earbuds turn phone into hearing assist in noisy places.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Personal Safety app</h2><p>Built into Pixel. Send emergency info to contacts with one button.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Verizon and AT&amp;T offer free in-store sessions to set this up.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
