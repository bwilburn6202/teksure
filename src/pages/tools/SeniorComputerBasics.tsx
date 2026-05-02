import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor } from 'lucide-react';

export default function SeniorComputerBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Computer Basics for Seniors — TekSure" description="Senior-friendly computer guide — Mac vs PC, basic skills, free help." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Monitor className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Computer Basics</h1>
          <p className="text-lg text-muted-foreground">Pick the right one. Learn the basics.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mac or PC?</h2><p>If you have an iPhone — Mac is easier. If you have Android — PC is fine. Both work.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>iPad ($350) — easiest</li><li>Chromebook ($300) — simple</li><li>MacBook Air ($999)</li><li>Windows laptop ($500-$800)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Make text bigger</h2><p>Mac: System Settings → Display → Scale. Windows: Settings → Display → Scale.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Use a mouse</h2><p>Trackpads frustrate many seniors. A $15 mouse is faster.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Keyboard shortcuts</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Cmd/Ctrl + C = copy</li><li>Cmd/Ctrl + V = paste</li><li>Cmd/Ctrl + Z = undo</li><li>Cmd/Ctrl + S = save</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free help</h2><p>Senior Planet, library classes, AARP TEK Workshops, Cyber-Seniors.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Don&apos;t fear breaking it. Software damage is rare. Click around and explore.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
