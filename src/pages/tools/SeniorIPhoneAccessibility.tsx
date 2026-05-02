import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorIPhoneAccessibility() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPhone Accessibility for Seniors — TekSure" description="Make iPhone easier — bigger text, voice control, magnifier, hearing aids." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPhone Accessibility</h1>
          <p className="text-lg text-muted-foreground">Hidden settings make a huge difference.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bigger text</h2><p>Settings → Accessibility → Display &amp; Text Size → Larger Text. Slide all the way up.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bold text</h2><p>Same menu. Bold makes text easier to read.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Magnifier</h2><p>Triple-click side button. Camera turns into magnifying glass with light.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Speak Selection</h2><p>Highlight any text. Tap &ldquo;Speak.&rdquo; iPhone reads it aloud.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hearing aids</h2><p>Pair Made-for-iPhone hearing aids. Calls stream straight in.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Live Captions</h2><p>Auto-captions on calls, FaceTime, videos. Free and life-changing.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Settings → Accessibility → Triple-Click Side Button. Pick magnifier or zoom for one-button access.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
