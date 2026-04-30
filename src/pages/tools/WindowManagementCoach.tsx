import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { LayoutPanelLeft } from 'lucide-react';

export default function WindowManagementCoach() {
  const [tab, setTab] = useState<'mac' | 'windows'>('mac');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Window Management Coach — Mac & Windows | TekSure" description="Stop wrestling with too many windows. Plain-English steps to snap, tile, and switch windows efficiently on Mac and Windows." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <LayoutPanelLeft className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Window Management Coach</h1>
          <p className="text-lg text-muted-foreground">Tame your computer screen. See more, fumble less.</p>
        </div>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('mac')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'mac' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🍎 Mac</button>
          <button onClick={() => setTab('windows')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'windows' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🪟 Windows</button>
        </div>

        {tab === 'mac' && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Snap windows side by side</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Hover over the GREEN circle (top left of any window).</li>
                  <li>Pick "Tile Window to Left" or "Tile Window to Right".</li>
                  <li>Pick a second window for the other half.</li>
                </ol>
                <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Magnet (free or paid)</strong> — adds Windows-style snap features. Drag a window to the edge — it auto-resizes.</p>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Mission Control (see all windows)</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Press <kbd className="bg-muted px-1.5 py-0.5 rounded">F3</kbd> or swipe up with three fingers on trackpad.</li>
                  <li>See every open window. Click one to jump to it.</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Spotlight (find ANY app, file, or setting)</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Press <kbd className="bg-muted px-1.5 py-0.5 rounded">⌘ + Space</kbd>.</li>
                  <li>Type a few letters of an app, file, or contact.</li>
                  <li>Press Enter. Open in 2 seconds.</li>
                  <li>Faster than digging in folders.</li>
                </ol>
              </CardContent>
            </Card>
          </>
        )}

        {tab === 'windows' && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Snap windows side by side</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Drag any window to the LEFT or RIGHT edge of the screen.</li>
                  <li>It snaps to fill that half.</li>
                  <li>Other open windows show on the other half — click one.</li>
                </ol>
                <p className="text-sm mt-3 bg-muted/50 p-3 rounded">Or press <kbd className="bg-muted px-1.5 py-0.5 rounded">Win + Left/Right arrow</kbd>.</p>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Snap Layouts (Windows 11)</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Hover over the maximize button (top right of any window).</li>
                  <li>A grid appears — pick "two side-by-side", "three", "four corners", etc.</li>
                  <li>Pick which app fills each section.</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Task View (see all windows)</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Press <kbd className="bg-muted px-1.5 py-0.5 rounded">Win + Tab</kbd>.</li>
                  <li>See all open windows. Click any to jump.</li>
                  <li>Or click the "Task View" icon in the taskbar.</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Pin apps to taskbar</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Right-click any open app in the taskbar.</li>
                  <li>"Pin to taskbar".</li>
                  <li>Now it stays in the taskbar even when not open. One click to launch.</li>
                </ol>
              </CardContent>
            </Card>
          </>
        )}

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">The single best one-window tip</h3>
            <p className="text-sm text-muted-foreground">If you only learn one: <strong>Alt + Tab (Windows)</strong> or <strong>⌘ + Tab (Mac)</strong> to switch between open apps. Hold the modifier; tap Tab to cycle. Game changer once it\'s muscle memory.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
