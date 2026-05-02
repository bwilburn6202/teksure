import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FolderOpen } from 'lucide-react';

export default function SeniorWindowsFileExplorer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="File Explorer — Senior Guide" description="Find and organize files in Windows." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FolderOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">File Explorer</h1>
          <p className="text-lg text-muted-foreground">Find and organize files easily.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open it</h2><p>Click the yellow folder icon on the taskbar. Or press Windows + E.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Common folders</h2><p>Documents, Pictures, Downloads, Desktop on the left side. Click any to open.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Search</h2><p>Type in the search bar at the top right of any folder. Finds files fast.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Make a new folder</h2><p>Click New, then Folder. Name it. Drag files in to organize.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Rename a file</h2><p>Right-click a file. Click Rename. Type a clearer name.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Delete carefully</h2><p>Press Delete to send to Recycle Bin. Right-click Recycle Bin to restore if you change your mind.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>The Recycle Bin holds deleted files until emptied. Easy to undo a mistake.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
