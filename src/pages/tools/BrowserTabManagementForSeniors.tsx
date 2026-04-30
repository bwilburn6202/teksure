import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { LayoutGrid } from 'lucide-react';

export default function BrowserTabManagementForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Browser Tab Management for Seniors | TekSure" description="Stop tab overload. Senior tab organization for Chrome, Safari." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <LayoutGrid className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tab Management</h1>
          <p className="text-lg text-muted-foreground">Stop tab overload.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why limit tabs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>10+ tabs = slow computer.</li><li>Senior overwhelm.</li><li>Hard to find page.</li><li>Memory hog.</li><li>Forget what each was.</li><li>Close most.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bookmark instead</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Press ⌘+D (Mac) or Ctrl+D (PC).</li><li>Save bookmark.</li><li>Close tab.</li><li>Find later in bookmarks.</li><li>Cleaner browser.</li><li>Senior memory aid.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tab groups Chrome</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Right-click tab.</li><li>Add to new group.</li><li>Color-coded.</li><li>Collapse to save space.</li><li>Senior organization.</li><li>Free feature.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Reading List</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Safari + Chrome have.</li><li>Save articles for later.</li><li>Read offline.</li><li>Cleaner than tabs.</li><li>Senior &quot;read later&quot; helper.</li><li>Built-in free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Restore session</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Closed tab by mistake?</li><li>⌘+Shift+T or Ctrl+Shift+T.</li><li>Restores last closed.</li><li>Repeat for older.</li><li>Senior life-saver.</li><li>Free feature.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior daily habit</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>End of day — close all.</li><li>Bookmark important.</li><li>Reading List the rest.</li><li>Fresh start tomorrow.</li><li>Faster browser.</li><li>Less stress.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Bookmark + Reading List = senior calm</h3><p className="text-sm text-muted-foreground">Many seniors have 30+ open tabs. Computer slows, anxiety rises. Solution: bookmark important, Reading List articles, close rest. Daily habit. Browser fast again. Mind clearer. Free features in Chrome + Safari. Most under-used senior productivity habit.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
