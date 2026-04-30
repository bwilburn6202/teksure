import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bookmark } from 'lucide-react';

export default function ChromeBookmarksSyncForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chrome Bookmarks Sync for Seniors | TekSure" description="Sync bookmarks across devices. Chrome + Safari bookmarks for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bookmark className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bookmarks Sync</h1>
          <p className="text-lg text-muted-foreground">Same bookmarks everywhere.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Chrome sync</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sign in Chrome.</li><li>Same Google account everywhere.</li><li>Bookmarks sync.</li><li>History too.</li><li>Saved passwords.</li><li>Phone + computer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Safari sync</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iCloud Drive on.</li><li>Settings → iCloud → Safari.</li><li>iPhone + iPad + Mac.</li><li>Bookmarks + Reading List.</li><li>Open tabs visible.</li><li>Senior magic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Save bookmark</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Click star icon.</li><li>Choose folder.</li><li>Add note.</li><li>Save.</li><li>Find in Bookmarks bar.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Organize folders</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Banking folder.</li><li>News folder.</li><li>Recipes folder.</li><li>Drag to organize.</li><li>Senior categorize.</li><li>Easy retrieval.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Backup bookmarks</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Chrome → Bookmark Manager.</li><li>Export to file.</li><li>Save to Drive/Email.</li><li>If computer crashes.</li><li>Restore on new.</li><li>Senior insurance.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Use Bookmarks Bar.</li><li>Visible always.</li><li>Top 8 sites.</li><li>One-click access.</li><li>Senior efficient.</li><li>Less typing.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Sync = same browser everywhere</h3><p className="text-sm text-muted-foreground">Sign in to Chrome on phone + computer with same Google = bookmarks/history sync. Same in Safari with iCloud. Find that recipe on phone — saved on computer too. Many seniors miss this. Set up once, work everywhere. Free + transformative.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
