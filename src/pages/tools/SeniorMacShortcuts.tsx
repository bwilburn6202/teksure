import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Command } from 'lucide-react';

export default function SeniorMacShortcuts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mac Keyboard Shortcuts for Seniors | TekSure" description="Essential Mac shortcuts for older adults." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Command className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mac Shortcuts</h1>
          <p className="text-lg text-muted-foreground">Senior efficiency.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Essential</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>⌘+C copy.</li><li>⌘+V paste.</li><li>⌘+Z undo.</li><li>⌘+S save.</li><li>⌘+P print.</li><li>Senior daily.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Browser</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>⌘+T new tab.</li><li>⌘+W close tab.</li><li>⌘+Shift+T restore tab.</li><li>⌘+L address bar.</li><li>Senior speed.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Screenshot</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>⌘+Shift+3 full screen.</li><li>⌘+Shift+4 selection.</li><li>⌘+Shift+5 menu.</li><li>Senior share easily.</li><li>Save desktop.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Spotlight</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>⌘+Space.</li><li>Search anything.</li><li>Calculator.</li><li>App launcher.</li><li>Senior magic key.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Switch app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>⌘+Tab between apps.</li><li>Hold + repeat for list.</li><li>Senior multitasking.</li><li>Faster than Dock.</li><li>Free.</li><li>Worth learning.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Print sticker</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Print top 10 shortcuts.</li><li>Tape near monitor.</li><li>Senior reference.</li><li>Build muscle memory.</li><li>Free.</li><li>Worth keeping.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">⌘+Space Spotlight = senior magic</h3><p className="text-sm text-muted-foreground">Senior Mac power = ⌘+Space Spotlight + ⌘+Tab app switch + ⌘+Shift+4 screenshot. Plus copy/paste/undo. Print top 10 shortcut sticker tape near monitor. Free. Senior efficiency huge upgrade.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
