import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookmarkPlus } from 'lucide-react';

export default function PocketReadingListForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pocket + Reading List for Seniors | TekSure" description="Save articles to read later. Pocket app + browser Reading List." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookmarkPlus className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Read Later Apps</h1>
          <p className="text-lg text-muted-foreground">Save now, read later.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pocket</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free Mozilla app.</li><li>Save articles + videos.</li><li>Read offline.</li><li>Distraction-free reading.</li><li>Senior favorite.</li><li>Multi-device sync.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Safari Reading List</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Built-in iPhone/Mac.</li><li>Tap share → Add to Reading List.</li><li>Read later anywhere.</li><li>Offline.</li><li>Free.</li><li>Senior simple.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Chrome Reading List</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Click menu → Reading List.</li><li>Add current page.</li><li>Sync across devices.</li><li>Free.</li><li>Senior built-in.</li><li>Read later.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior workflow</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>See article on phone.</li><li>Save to Reading List.</li><li>Settle on couch with iPad.</li><li>Read distraction-free.</li><li>Big text, no ads.</li><li>Senior comfort.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Reader Mode</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Safari shows AA icon.</li><li>Tap — clean view.</li><li>No ads, no clutter.</li><li>Big text.</li><li>Senior eye relief.</li><li>Per-article.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Listen to articles</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pocket reads aloud.</li><li>Drive listening.</li><li>Cooking listening.</li><li>Senior audio prefer.</li><li>Free in Pocket.</li><li>Bookmark + listen.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Reader Mode = senior eye relief</h3><p className="text-sm text-muted-foreground">Safari Reader Mode (tap AA icon) strips ads/clutter, big text, dark mode option. Senior eye paradise for any article. Plus Reading List/Pocket save for later. Free. Daily senior internet life-saver. Use both for any article worth reading.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
