import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

export default function TechSupportPopupDefense() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="'Your Computer Has a Virus!' Pop-up — What to Do | TekSure" description="Scary full-screen pop-up with sirens telling you to call Microsoft? It's a scam. Here's how to close it safely without paying anyone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-destructive mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">"Your Computer Has a Virus!" Pop-up</h1>
          <p className="text-lg text-muted-foreground">Scary pop-up. Loud sirens. Phone number. It's all fake.</p>
        </div>

        <Card className="mb-6 border-destructive">
          <CardContent className="pt-6">
            <h2 className="font-bold text-2xl mb-2">Don't call the number.</h2>
            <p className="text-sm">No matter what the pop-up says, do not call. The number is NOT Microsoft, NOT Apple, NOT McAfee. It goes to a scam call center where they'll convince you to install remote-control software, then drain your bank account.</p>
            <p className="text-sm mt-2">Microsoft and Apple <strong>never</strong> show pop-ups telling you to call them.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First — close it</h2>
            <p className="font-semibold text-sm mt-2">If the pop-up locks the browser:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
              <li><strong>Mac:</strong> Press <kbd className="bg-muted px-1.5 py-0.5 rounded">⌘</kbd>+<kbd className="bg-muted px-1.5 py-0.5 rounded">Option</kbd>+<kbd className="bg-muted px-1.5 py-0.5 rounded">Esc</kbd> → pick the browser → "Force Quit".</li>
              <li><strong>Windows:</strong> Press <kbd className="bg-muted px-1.5 py-0.5 rounded">Ctrl</kbd>+<kbd className="bg-muted px-1.5 py-0.5 rounded">Shift</kbd>+<kbd className="bg-muted px-1.5 py-0.5 rounded">Esc</kbd> → highlight the browser → click "End Task".</li>
              <li><strong>Last resort:</strong> Hold the power button to turn the computer off. Wait 10 seconds. Turn back on.</li>
            </ul>
            <p className="text-sm">When the browser opens again, it might offer to "restore tabs" — say <strong>NO</strong>. That re-opens the bad page.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Second — clean up the browser</h2>
            <p className="font-semibold text-sm mt-2">Chrome / Edge:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
              <li>Click the three dots (top right) → Settings.</li>
              <li>Privacy and security → Clear browsing data.</li>
              <li>Time range: "All time". Tick everything. Click "Clear".</li>
            </ol>
            <p className="font-semibold text-sm">Safari:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Safari → Clear History → "All History".</li>
              <li>Safari → Settings → Extensions — remove anything you don't recognize.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Third — run a free virus scan</h2>
            <p className="text-sm mb-2">In most cases, this kind of pop-up is just a scary website — your computer doesn't have an actual virus. But run a scan to be sure.</p>
            <p className="font-semibold text-sm mt-3">Mac:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
              <li>Macs have built-in protection. Often nothing more is needed.</li>
              <li>For a deep scan, install <strong>Malwarebytes for Mac</strong> (free) — well-trusted.</li>
            </ul>
            <p className="font-semibold text-sm">Windows:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Click Start → type "Windows Security" → open it.</li>
              <li>"Virus & threat protection" → "Quick scan".</li>
              <li>Or for a deeper scan, install <strong>Malwarebytes</strong> (free).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-700 dark:text-yellow-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-2">If you DID call the number</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li><strong>If you let them remote-control your computer:</strong> Disconnect from the internet (unplug Ethernet, turn off Wi-Fi).</li>
                  <li>Restart the computer. The remote-control software is usually a stand-alone program — uninstall anything they had you install.</li>
                  <li>Change your important passwords from a DIFFERENT device — bank, email, Apple ID, Google.</li>
                  <li>Call your bank. If they had you "verify" anything, treat it as if your account was breached.</li>
                  <li>If they charged your credit card — call the card company; reverse the charge.</li>
                  <li>Take the computer to a real local repair shop for a full clean (around $100-$150).</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-300 dark:bg-green-950/20 dark:border-green-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <ShieldCheck className="w-6 h-6 text-green-700 dark:text-green-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Prevent next time</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Use a free pop-up/ad blocker like <strong>uBlock Origin</strong> (Chrome, Firefox, Edge).</li>
                  <li>Don't click on tempting links in random emails — most of these pop-ups come from sketchy sites.</li>
                  <li>Real Apple, Microsoft, and your antivirus will not pop up a giant warning. They quietly notify in the system tray.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
