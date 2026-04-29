import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function ColorBlindTools() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Color Blindness Tools — Apps &amp; Settings | TekSure" description="Apps and phone settings that help with color blindness. Plain-English picks for color filters, identifiers, and EnChroma glasses." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Color Blindness Tools</h1>
          <p className="text-lg text-muted-foreground">8% of men, 0.5% of women — apps that help.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone color filters (built-in)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Accessibility → Display &amp; Text Size.</li>
              <li>Tap "Color Filters" → toggle ON.</li>
              <li>Pick your type: Protanopia (red-blind), Deuteranopia (green-blind), Tritanopia (blue-blind).</li>
              <li>Slider adjusts intensity.</li>
              <li>Triple-click side button for quick toggle.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android color correction</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Accessibility → Visibility enhancements.</li>
              <li>Tap "Color correction" → ON.</li>
              <li>Choose color blindness type.</li>
              <li>Or "Color inversion" if useful.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Color Blind Pal</strong> (FREE) — names colors when you point camera. iOS + Android.</li>
              <li><strong>Chromatic Vision Simulator</strong> (FREE) — see what others see.</li>
              <li><strong>Spectrum (FREE)</strong> — color picker + names.</li>
              <li><strong>Color Name AR</strong> — augmented reality color labels in real time.</li>
              <li><strong>Seeing AI / Be My Eyes</strong> — both name colors, more comprehensive.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">EnChroma glasses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Special-tinted lenses — let many colorblind people see colors better.</li>
              <li>$200-450 indoor / outdoor pair.</li>
              <li>Helps roughly 80% of red-green colorblind people.</li>
              <li>Won&apos;t work for all forms.</li>
              <li>Try on at EnChroma store, or 30-day return online.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common challenges + workarounds</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Traffic lights</strong> — position matters more than color (top = red, bottom = green).</li>
              <li><strong>LED indicator lights</strong> — confusing red/green. Check device manual for blink patterns.</li>
              <li><strong>Charts/graphs</strong> — ask for patterns or labels, not just colors.</li>
              <li><strong>Maps with red/green</strong> — Google Maps has accessibility-friendly color modes.</li>
              <li><strong>Cooking meat doneness</strong> — use thermometer, not color.</li>
              <li><strong>Banana ripeness</strong> — feel for firmness.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Test your color vision</h3>
            <p className="text-sm text-muted-foreground">EnChroma offers a free online color blindness test at <strong>enchroma.com/test</strong>. Takes 2 minutes. Tells you the type and severity. Helpful even if you&apos;re not buying EnChroma.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
