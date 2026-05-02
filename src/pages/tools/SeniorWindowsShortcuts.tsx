import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Keyboard } from 'lucide-react';

export default function SeniorWindowsShortcuts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Windows Keyboard Shortcuts for Seniors | TekSure" description="Essential Windows shortcuts for older adults." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Keyboard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Windows Shortcuts</h1>
          <p className="text-lg text-muted-foreground">Senior efficiency.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Essential</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Ctrl+C copy.</li><li>Ctrl+V paste.</li><li>Ctrl+Z undo.</li><li>Ctrl+S save.</li><li>Ctrl+P print.</li><li>Senior daily.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Window key</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Win — Start menu.</li><li>Win+E — File Explorer.</li><li>Win+L — lock computer.</li><li>Win+D — show desktop.</li><li>Senior power user.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Screenshot</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Win+Shift+S snip.</li><li>PrintScreen full.</li><li>Win+PrtScn save desktop.</li><li>Senior easy share.</li><li>Free.</li><li>Snipping Tool.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Browser tabs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Ctrl+T new tab.</li><li>Ctrl+W close.</li><li>Ctrl+Shift+T restore.</li><li>Senior fix oops.</li><li>Free.</li><li>Worth knowing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Switch apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Alt+Tab.</li><li>Hold + repeat.</li><li>Senior multitasking.</li><li>Faster than mouse.</li><li>Free.</li><li>Game changer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sticker reference</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Print shortcuts list.</li><li>Tape near monitor.</li><li>Senior memory aid.</li><li>Build muscle memory.</li><li>Free.</li><li>Daily use.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Win+E + Alt+Tab = senior power</h3><p className="text-sm text-muted-foreground">Senior Windows power = Win+E File Explorer + Alt+Tab switch apps + Win+Shift+S snip screenshot. Plus copy/paste/undo. Print sticker tape near monitor. Free + huge time saver.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
