import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

export default function ComputerCleanupCoach() {
  const [tab, setTab] = useState<'mac' | 'windows'>('mac');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Computer Cleanup Coach — Mac and Windows | TekSure" description="Computer running slow? Plain-English steps to free up space, kill background apps, and make it feel new again. Mac and Windows." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Computer Cleanup Coach</h1>
          <p className="text-lg text-muted-foreground">Make a slow computer feel new — without paying for "tune-up software".</p>
        </div>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('mac')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'mac' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🍎 Mac</button>
          <button onClick={() => setTab('windows')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'windows' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🪟 Windows</button>
        </div>

        {tab === 'mac' && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">1. Restart it (most overlooked fix)</h3>
                <p className="text-sm">Apple menu → Restart. Macs are great about staying on for weeks but they DO need a restart now and then. Often instantly fixes slowness.</p>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">2. Free up storage</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Apple menu → About This Mac → "More Info" → "Storage Settings".</li>
                  <li>Recommendations show up — "Empty Trash automatically", "Optimize Storage", etc.</li>
                  <li>Click "Documents" — see what's eating your drive. Empty old downloads, old screenshots.</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">3. Stop apps from auto-starting</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>System Settings → General → Login Items.</li>
                  <li>Remove apps you don't need running on startup (Spotify, Adobe, Dropbox if you don't use them daily).</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">4. Update macOS</h3>
                <p className="text-sm">System Settings → General → Software Update. Updates fix bugs that slow you down.</p>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">5. Run a free virus scan</h3>
                <p className="text-sm">Macs aren't immune. Install <strong>Malwarebytes for Mac</strong> (free) — scan once a month.</p>
              </CardContent>
            </Card>
          </>
        )}

        {tab === 'windows' && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">1. Restart (don't just close the lid)</h3>
                <p className="text-sm">Start menu → Power → Restart. Windows performance often degrades after a few days; a restart fixes 70% of slow-computer complaints.</p>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">2. Free up disk space</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Settings → System → Storage.</li>
                  <li>Turn ON "Storage Sense" — it auto-deletes old temp files and Recycle Bin.</li>
                  <li>Click "Cleanup recommendations" — Windows suggests big files to delete safely.</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">3. Stop apps from auto-starting</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Press <kbd className="bg-muted px-1.5 py-0.5 rounded">Ctrl</kbd>+<kbd className="bg-muted px-1.5 py-0.5 rounded">Shift</kbd>+<kbd className="bg-muted px-1.5 py-0.5 rounded">Esc</kbd> → Task Manager.</li>
                  <li>Click the "Startup apps" tab.</li>
                  <li>Right-click anything you don't use immediately — "Disable".</li>
                  <li>Especially: OneDrive (if you don't use it), Spotify, anything with "Helper" in the name.</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">4. Update Windows</h3>
                <p className="text-sm">Settings → Windows Update → "Check for updates". Run all of them. Restart when asked.</p>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">5. Run virus scan</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Start → "Windows Security" → Virus & threat protection → "Quick scan".</li>
                  <li>For a deeper check: Install <strong>Malwarebytes</strong> (free version).</li>
                </ol>
              </CardContent>
            </Card>
          </>
        )}

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">DON'T install "PC Speed Booster" software</h3>
            <p className="text-sm text-muted-foreground">Apps with names like "PC Cleaner Pro", "MacKeeper", "Driver Updater" are mostly bloatware — they slow your machine MORE than they help, and many are scammy. Stick to built-in tools and Malwarebytes.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Still slow after all that?</h3>
            <p className="text-sm text-muted-foreground">If your computer is more than 6-8 years old, the hardware is just slow. Two affordable upgrades: more RAM (memory) and an SSD (faster hard drive). Many local repair shops do this for $100-$200 — often turns a 7-year-old computer into a "feels new" machine for a fraction of replacing it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
