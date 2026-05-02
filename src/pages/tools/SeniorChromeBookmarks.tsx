import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bookmark } from 'lucide-react';

export default function SeniorChromeBookmarks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chrome Bookmarks — Senior Guide" description="Save and find your favorite websites." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bookmark className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chrome Bookmarks</h1>
          <p className="text-lg text-muted-foreground">Save favorite sites for one-tap access.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Add a bookmark</h2><p>Visit a site you love. Tap the star icon. Type a short name.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Find bookmarks</h2><p>Tap the three-dot menu. Tap Bookmarks. Your saved sites show in a list.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Make folders</h2><p>Group bookmarks by topic — News, Shopping, Recipes — to find them faster.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Delete old ones</h2><p>Tap and hold a bookmark. Tap the trash icon. Tidy your list once a year.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Bookmarks bar</h2><p>On a computer, Ctrl+Shift+B turns on a row at the top with your favorites.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Sync</h2><p>Sign in to Chrome. Bookmarks appear on your phone, tablet, and computer.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Long URLs are easy to mistype. Bookmarks remove the typing risk and save time.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
