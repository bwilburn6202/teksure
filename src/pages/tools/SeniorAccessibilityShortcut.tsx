import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorAccessibilityShortcut() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Accessibility Shortcut for Seniors — TekSure" description="Triple-click magic — instant access to magnifier, zoom, voice control." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Accessibility Shortcut</h1>
          <p className="text-lg text-muted-foreground">Triple-click for instant help.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone setup</h2><p>Settings → Accessibility → Accessibility Shortcut. Pick favorites.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best to add</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Magnifier (camera lens)</li><li>Zoom (screen)</li><li>VoiceOver (read aloud)</li><li>Larger Text toggle</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Use it</h2><p>Triple-click side button. Instantly enables magnifier or zoom.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android equivalent</h2><p>Settings → Accessibility → Accessibility Shortcut. Hold both volume buttons.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Back Tap (iPhone)</h2><p>Triple-tap back of phone. Custom action — flashlight, screenshot, etc.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Practice it</h2><p>Try shortcut once a day. Becomes muscle memory.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Magnifier shortcut = always-on portable magnifying glass. Read pill bottles instantly.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
