import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Folder } from 'lucide-react';

export default function SeniorMacFinder() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mac Finder — Senior Guide" description="Manage files on a Mac with Finder." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Folder className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mac Finder</h1>
          <p className="text-lg text-muted-foreground">Find and organize your files.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open Finder</h2><p>Click the blue smiling face icon at the left of the Dock.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Sidebar</h2><p>Documents, Downloads, Desktop on the left. Click any to open.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Search</h2><p>Type in the search bar top right. Pick This Mac to search everywhere.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. New folder</h2><p>File menu, New Folder. Or press Shift + Command + N. Name it clearly.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Quick Look</h2><p>Click any file. Press Space. Preview without opening the full app.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Trash</h2><p>Drag files to the Trash icon at end of the Dock. Empty Trash to free space for good.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Tags color-code files. Right-click a file, pick a tag color. Find them later by color.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
