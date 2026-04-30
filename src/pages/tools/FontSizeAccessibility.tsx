import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Type } from 'lucide-react';

export default function FontSizeAccessibility() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bigger Text on Phone | TekSure" description="Make phone text bigger. Plain-English steps for iPhone + Android display + accessibility settings." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Type className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bigger Text Everywhere</h1>
          <p className="text-lg text-muted-foreground">Stop squinting.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone — bigger text</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Display &amp; Brightness → Text Size.</li>
              <li>Slide RIGHT for bigger text.</li>
              <li>For MUCH bigger: Settings → Accessibility → Display &amp; Text Size → Larger Text → ON.</li>
              <li>Drag slider far right — extra-large.</li>
              <li>Bold Text ON — easier to read.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone — bigger icons</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Display &amp; Brightness → Display Zoom.</li>
              <li>Tap "Larger Text".</li>
              <li>Phone restarts.</li>
              <li>Apps + buttons + icons all bigger.</li>
              <li>iPhone effectively becomes simpler phone.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android — bigger text</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Display → Font Size + Display Size.</li>
              <li>Slide both right.</li>
              <li>Display Size makes EVERYTHING bigger.</li>
              <li>Font Size makes text only.</li>
              <li>Settings → Accessibility for additional options.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other senior-friendly tweaks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iPhone Reduce Motion</strong> — Settings → Accessibility → Motion → Reduce Motion ON.</li>
              <li><strong>Increase Contrast</strong> — Accessibility → Display &amp; Text Size → Increase Contrast.</li>
              <li><strong>Bold Text</strong> — same menu.</li>
              <li><strong>Button Shapes</strong> — outlines text-only buttons.</li>
              <li><strong>Smart Invert</strong> — dark mode for some screens.</li>
              <li><strong>VoiceOver</strong> — phone reads everything aloud (for severe vision).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Settings change everywhere</h3>
            <p className="text-sm text-muted-foreground">When you set bigger text, ALL apps that respect the setting use it. Mail, Messages, Settings, Notes — all get bigger together. Apps that ignore it (some old apps) — replace if possible.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
