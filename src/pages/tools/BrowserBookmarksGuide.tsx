import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bookmark } from 'lucide-react';

export default function BrowserBookmarksGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Browser Bookmarks for Seniors | TekSure" description="Save sites for easy return. Plain-English bookmark guide for senior browsers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bookmark className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Browser Bookmarks</h1>
          <p className="text-lg text-muted-foreground">Save sites. Find later in 1 click.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why bookmark</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t Google your bank/email each time.</li>
              <li>Bookmarks bypass scammer fake sites.</li>
              <li>Faster access.</li>
              <li>Save URL — never lose.</li>
              <li>Bookmark = type real URL ONCE. Click forever.</li>
              <li>Critical for security.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to bookmark</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Visit website (your bank, email).</li>
              <li>Click STAR icon in address bar.</li>
              <li>Or Ctrl+D (Windows) / Cmd+D (Mac).</li>
              <li>Save to Bookmarks Bar.</li>
              <li>Name shorter if you want.</li>
              <li>Done. Click bookmark to return.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bookmark these always</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Your bank.</li>
              <li>Investment account.</li>
              <li>Email login (gmail.com or outlook.com).</li>
              <li>SSA.gov.</li>
              <li>IRS.gov.</li>
              <li>Medicare.gov.</li>
              <li>Frequently visited sites.</li>
              <li>NEVER click email links to these — use bookmark.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Show bookmarks bar</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bookmarks visible at top of browser.</li>
              <li>Chrome: Ctrl+Shift+B (Windows) / Cmd+Shift+B (Mac).</li>
              <li>Safari: View → Show Favorites Bar.</li>
              <li>Firefox: View → Toolbars → Bookmarks Toolbar.</li>
              <li>One click access.</li>
              <li>Reduces clutter.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Organize bookmarks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Right-click bookmarks → New Folder.</li>
              <li>Group: Banking, Email, News, Shopping.</li>
              <li>Drag bookmarks into folders.</li>
              <li>10-20 bookmarks = manageable.</li>
              <li>100+ = clean up periodically.</li>
              <li>Sync across devices (Chrome, Safari).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Better than Google</h3>
            <p className="text-sm text-muted-foreground">Bookmarking your bank = SAFEST way to log in. Scammers create fake sites that show in Google. Real bookmark always goes to real bank. Never click email link to bank. ALWAYS use bookmark. Critical senior security habit.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
