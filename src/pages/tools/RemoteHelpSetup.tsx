import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, AlertTriangle } from 'lucide-react';

export default function RemoteHelpSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Remote Help Setup — Let Family Fix Your Computer From Far Away | TekSure" description="Adult children can see your screen and click for you — safely. Apple, Microsoft, and Google all offer free remote help. Plain-English setup." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Monitor className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Remote Help Setup</h1>
          <p className="text-lg text-muted-foreground">Let a trusted family member fix something on your computer or phone — without driving over.</p>
        </div>

        <Card className="mb-6 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-700 dark:text-yellow-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Read this first</h3>
                <p className="text-sm">Only EVER let people you know personally see your screen. Scammers ("Microsoft tech support", random pop-ups) will use these same tools to steal from you. Real family knows your stories. Real Microsoft and Apple do not call you.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🍎 Mac to Mac (or iPhone to iPhone) — SharePlay screen sharing</h2>
            <p className="text-sm mb-2">If both of you have Apple devices, this is built in.</p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Start a FaceTime call with the family member.</li>
              <li>Tap the <strong>SharePlay</strong> icon (a person with sparkles, top right of FaceTime).</li>
              <li>Tap <strong>"Share My Screen"</strong>. They see what you see.</li>
              <li>For Mac-to-Mac, on the helper's end they can also <strong>request control</strong> of your screen — you must approve a popup.</li>
              <li>End sharing anytime by tapping the SharePlay icon → "End".</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🪟 Windows — Quick Assist (free)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>You: press the <strong>Windows key</strong>, type "Quick Assist", press Enter.</li>
              <li>You: tap "Get help".</li>
              <li>Helper does the same on their PC and clicks "Help someone".</li>
              <li>Helper signs in with their Microsoft account → gets a 6-digit code.</li>
              <li>Helper reads you the code → you type it in your Quick Assist window.</li>
              <li>You see a popup asking permission. Click "Allow". Helper can now see your screen.</li>
              <li>To close: just close the Quick Assist window.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🤖 Android — Google Meet screen share</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Start a Google Meet video call with the family member.</li>
              <li>Tap the three-dot menu → "Share screen" → "Start sharing".</li>
              <li>They can see your screen but cannot click for you. Verbal coaching only.</li>
            </ol>
            <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>For full control:</strong> Install the free <strong>Google Family Link</strong> app — gives a trusted family member limited access. Or use TeamViewer (paid for business but free for family use).</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cross-platform — TeamViewer (free for personal)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Both of you install <strong>TeamViewer</strong> from teamviewer.com or your app store.</li>
              <li>Choose "Personal use" when it asks.</li>
              <li>You: open TeamViewer. It shows a 9-digit ID and 4-digit password.</li>
              <li>Read those numbers to your family member by phone.</li>
              <li>They type them in. You see a popup asking permission. Click "Allow".</li>
              <li>They can now see and click on your screen.</li>
              <li>Close TeamViewer when done — they lose access.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Family ground rules</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Only start a remote session when YOU dial the family member first — never when someone calls you.</li>
              <li>Stay on the phone with them while they're on your screen.</li>
              <li>End the session as soon as the problem is fixed.</li>
              <li>If a "Microsoft" or "Apple" person ever asks you to install remote-help software, hang up. Always a scam.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
