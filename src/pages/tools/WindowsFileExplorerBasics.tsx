import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Folder } from 'lucide-react';

export default function WindowsFileExplorerBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Windows File Explorer Basics | TekSure" description="Learn File Explorer. Plain-English Windows senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Folder className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">File Explorer Basics</h1>
          <p className="text-lg text-muted-foreground">Find your files. Organize Windows.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Open File Explorer</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Click yellow folder icon on taskbar.</li>
              <li>Or Windows key + E.</li>
              <li>Or right-click Start, then File Explorer.</li>
              <li>Three-pane window opens.</li>
              <li>Left = list of locations.</li>
              <li>Right = current folder contents.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Default folders</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Desktop</strong> — files visible on screen.</li>
              <li><strong>Documents</strong> — Word docs, PDFs.</li>
              <li><strong>Downloads</strong> — files downloaded from web.</li>
              <li><strong>Pictures</strong> — photos.</li>
              <li><strong>Music</strong> — music files.</li>
              <li><strong>Videos</strong> — video files.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find a file</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search bar top-right.</li>
              <li>Type any part of file name.</li>
              <li>Searches current folder.</li>
              <li>Click &quot;This PC&quot; first to search all.</li>
              <li>Recent files in left pane.</li>
              <li>Quick Access — pinned folders.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Move + copy files</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Right-click file, then &quot;Cut&quot; (move).</li>
              <li>Right-click file, then &quot;Copy&quot;.</li>
              <li>Open destination folder.</li>
              <li>Right-click empty space, then &quot;Paste&quot;.</li>
              <li>Or drag file with mouse to folder.</li>
              <li>Cancel = Ctrl+Z immediately.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Make new folder</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Right-click empty area.</li>
              <li>Choose &quot;New&quot;, then &quot;Folder&quot;.</li>
              <li>Type name immediately.</li>
              <li>Press Enter.</li>
              <li>Drag files in to organize.</li>
              <li>Folder inside folder OK.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Delete + recover</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Right-click file, then &quot;Delete&quot;.</li>
              <li>Or select + Delete key.</li>
              <li>File goes to Recycle Bin.</li>
              <li>Recycle Bin on desktop.</li>
              <li>Right-click in Bin, then &quot;Restore&quot;.</li>
              <li>Empty Recycle Bin = gone forever.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Backup essentials</h3>
            <p className="text-sm text-muted-foreground">Critical: regularly back up files. OneDrive (built-in) syncs to cloud free 5GB. External hard drive ($60-100). Don&apos;t lose photos in computer crash. File Explorer &gt; right-click critical folder &gt; Properties &gt; backup options. Check OneDrive icon in tray for sync status.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
