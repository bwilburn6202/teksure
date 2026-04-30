import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertOctagon } from 'lucide-react';

export default function AppleWatchSOSTutorial() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Watch SOS + Fall Detection Tutorial | TekSure" description="How to set up Apple Watch emergency features. Lifesaver for senior wearers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertOctagon className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Watch SOS</h1>
          <p className="text-lg text-muted-foreground">Set up before you need it.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Detects falls automatically.</li>
              <li>Calls 911 if you can&apos;t respond.</li>
              <li>Texts emergency contacts your location.</li>
              <li>Manual SOS via side button.</li>
              <li>Works without phone (cellular models).</li>
              <li>Has saved many senior lives.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set up Fall Detection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone Watch app → My Watch → Emergency SOS.</li>
              <li>Toggle Fall Detection ON.</li>
              <li>Choose &quot;Always On&quot; (for seniors recommended).</li>
              <li>Watch detects hard falls.</li>
              <li>Asks if you&apos;re OK on screen.</li>
              <li>If no response in 60 sec — calls 911.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Emergency Contacts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open Health app on iPhone.</li>
              <li>Tap your photo — Medical ID.</li>
              <li>Add Emergency Contacts.</li>
              <li>Watch SOS notifies them with location.</li>
              <li>Add 2–3 trusted family members.</li>
              <li>They get text + map of your location.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Manual SOS (any time)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hold side button until SOS slider appears.</li>
              <li>Slide right — calls 911 immediately.</li>
              <li>Or release button + tap SOS.</li>
              <li>Practice once so you remember.</li>
              <li>Faster than dialing 911 from phone.</li>
              <li>Hands-free emergency.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cellular vs GPS</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>GPS-only watch needs iPhone nearby.</li>
              <li>Cellular watch works alone.</li>
              <li>Cellular adds $10/month.</li>
              <li>Worth it if leaving phone at home.</li>
              <li>For walking/gardening when phone inside.</li>
              <li>Critical for fall detection without phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Recommended models</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Watch SE — $249 GPS or $299 cellular.</li>
              <li>Series 10 — $399+ for newer features.</li>
              <li>Series 4+ all have fall detection.</li>
              <li>SE perfect for senior emergency use.</li>
              <li>Don&apos;t need expensive Ultra.</li>
              <li>Used Series 6 + 7 also fine.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Test it once</h3>
            <p className="text-sm text-muted-foreground">After setting up, do a practice run. Hold the side button until SOS slider appears. Cancel before it dials. This way you know exactly how to trigger it in a real emergency. Cost of an Apple Watch SE cellular ($299 + $10/month) is comparable to Medical Guardian, but with way more features. Best senior safety device available.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
