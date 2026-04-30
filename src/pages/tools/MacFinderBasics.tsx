import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Folder } from 'lucide-react';

export default function MacFinderBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mac Finder Basics | TekSure" description="Learn Mac Finder. Plain-English Apple senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Folder className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mac Finder Basics</h1>
          <p className="text-lg text-muted-foreground">Find files. Organize. Mac mastered.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Open Finder</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Click smiley face icon on dock.</li>
              <li>Or click desktop, then &quot;Finder&quot; in menu bar.</li>
              <li>New window opens.</li>
              <li>Left = sidebar with locations.</li>
              <li>Right = current folder contents.</li>
              <li>Cmd + N = new Finder window.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sidebar locations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Recents</strong> — recent files.</li>
              <li><strong>Applications</strong> — all apps.</li>
              <li><strong>Desktop</strong> — files visible.</li>
              <li><strong>Documents</strong> — Word, Pages.</li>
              <li><strong>Downloads</strong> — from web.</li>
              <li><strong>iCloud Drive</strong> — cloud-synced.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find a file (Spotlight)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cmd + Space — opens Spotlight.</li>
              <li>Type any part of file name.</li>
              <li>Searches entire Mac instantly.</li>
              <li>Or magnifying glass top-right.</li>
              <li>Or Finder search bar.</li>
              <li>Use sentence: &quot;photos from last week&quot;.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Move + copy files</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Drag file = move.</li>
              <li>Hold Option + drag = copy.</li>
              <li>Or Cmd+C to copy, Cmd+V to paste.</li>
              <li>Cmd+X cuts file (rare on Mac).</li>
              <li>Drop into Dock to open with app.</li>
              <li>Cmd+Z = undo immediately.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Make folders</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>File menu, then &quot;New Folder&quot;.</li>
              <li>Or Cmd + Shift + N.</li>
              <li>Type name immediately.</li>
              <li>Press Enter.</li>
              <li>Drag files in.</li>
              <li>Right-click for color-code label.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Delete + recover</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Drag to Trash bin (dock).</li>
              <li>Or Cmd + Delete on file.</li>
              <li>Click Trash to view.</li>
              <li>Drag back to recover.</li>
              <li>&quot;Empty Trash&quot; = permanent delete.</li>
              <li>Time Machine restores deleted files.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">View options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Icons (default).</li>
              <li>List — alphabetical with details.</li>
              <li>Columns — show folder hierarchy.</li>
              <li>Gallery — preview images.</li>
              <li>Cmd + 1, 2, 3, 4 = switch view.</li>
              <li>Cmd + + makes icons bigger.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">iCloud + Time Machine</h3>
            <p className="text-sm text-muted-foreground">iCloud Drive automatically syncs Documents + Desktop. Time Machine — plug external drive once, set + forget. Backs up automatically. Recovers anything ever deleted. System Settings &gt; General &gt; Time Machine. $60 external drive = peace of mind for life.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
