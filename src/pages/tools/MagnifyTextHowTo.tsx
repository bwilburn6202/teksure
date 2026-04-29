import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ZoomIn } from 'lucide-react';

export default function MagnifyTextHowTo() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Magnify Text on Phone + Computer | TekSure" description="Zoom into anything. Plain-English iPhone + Mac + Windows magnification tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ZoomIn className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Magnify Anything</h1>
          <p className="text-lg text-muted-foreground">Built-in tricks.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone — Zoom anywhere</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Accessibility → Zoom → Toggle ON.</li>
              <li>Triple-tap with 3 fingers anywhere — zoom in.</li>
              <li>Drag with 3 fingers to pan around.</li>
              <li>Triple-tap again to zoom out.</li>
              <li>Adjust max zoom level in Zoom settings.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone Magnifier app</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Search "Magnifier" on iPhone — built-in.</li>
              <li>Add to Control Center: Settings → Control Center.</li>
              <li>Triple-press side button (set as accessibility shortcut).</li>
              <li>Use as physical magnifying glass — read pill bottles, menus, labels.</li>
              <li>Flashlight ON for low light.</li>
              <li>Freeze image to read at your pace.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mac — Zoom screen</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>System Settings → Accessibility → Zoom.</li>
              <li>Use ⌘ + Option + = to zoom in.</li>
              <li>⌘ + Option + - to zoom out.</li>
              <li>Or scroll with Ctrl + trackpad/mouse to zoom (Smart Zoom).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Windows — Magnifier</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Press <kbd className="bg-muted px-1.5 py-0.5 rounded">Win</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">+</kbd> to start magnifier.</li>
              <li>Press <kbd className="bg-muted px-1.5 py-0.5 rounded">Win</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">+</kbd> again to zoom more.</li>
              <li>Win + - to zoom out.</li>
              <li>Win + Esc to exit magnifier.</li>
              <li>Or Settings → Ease of Access → Magnifier.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Web pages — zoom in browser</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><kbd className="bg-muted px-1.5 py-0.5 rounded">Ctrl</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">+</kbd> (PC) or <kbd className="bg-muted px-1.5 py-0.5 rounded">⌘</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">+</kbd> (Mac).</li>
              <li>Each press zooms 10%.</li>
              <li>Reset: Ctrl + 0 or ⌘ + 0.</li>
              <li>Save default zoom in browser settings.</li>
              <li>Safari: View → Make Text Larger.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">iPad &gt; iPhone for vision</h3>
            <p className="text-sm text-muted-foreground">If reading on phone is hard, iPad gives 3x more screen real estate. iPad mini is only $499. For non-tech seniors, iPad is the friendly tablet — see /tools/ipad-for-seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
