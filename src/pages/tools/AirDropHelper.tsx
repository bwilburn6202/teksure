import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Send, AlertTriangle } from 'lucide-react';

export default function AirDropHelper() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AirDrop Helper — Share Photos Between iPhones in Seconds | TekSure" description="AirDrop is the fastest way to send photos and files between Apple devices. Plain steps to send, receive, and stay safe." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Send className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AirDrop Helper</h1>
          <p className="text-lg text-muted-foreground">Share photos and files between iPhones, iPads, and Macs — instantly.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What is AirDrop?</h2>
            <p className="text-sm">A free Apple feature that sends photos, videos, contacts, or files from one Apple device to another nearby. No internet needed. Faster than texting and the photo stays full quality.</p>
            <p className="text-sm mt-2"><strong>Works between:</strong> iPhone, iPad, Mac. NOT between iPhone and Android — for that, use text or email.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-3">Step 1 — Turn on AirDrop on both devices</h3>
            <p className="text-sm mb-2">On both your iPhone and the receiver's iPhone:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm mb-4">
              <li>Open <strong>Control Center</strong> — swipe down from the top-right corner.</li>
              <li>Press and hold the box with Wi-Fi and Bluetooth icons.</li>
              <li>Tap <strong>AirDrop</strong>.</li>
              <li>Choose <strong>"Contacts Only"</strong> if you have each other in your contact lists. If not, tap <strong>"Everyone for 10 Minutes"</strong>.</li>
            </ol>
            <p className="text-sm">Wi-Fi and Bluetooth both need to be on. AirDrop uses them together but doesn't need internet.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-3">Step 2 — Send the photo</h3>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open the photo (or photos — you can pick several) in the Photos app.</li>
              <li>Tap the <strong>Share</strong> button (square with arrow up) in the bottom-left.</li>
              <li>Tap <strong>AirDrop</strong>.</li>
              <li>You'll see a circle with the other person's name or device name. Tap it.</li>
              <li>The other person sees a popup — they tap "Accept" — and the photo lands in their Photos.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-3">Don't see the other person?</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Both phones must be unlocked and awake.</li>
              <li>Both must have Wi-Fi and Bluetooth turned on.</li>
              <li>Devices need to be within 30 feet (10 meters).</li>
              <li>If AirDrop is set to "Contacts Only", you must have each other's number or Apple ID saved.</li>
              <li>Try setting both to "Everyone for 10 Minutes" — the easiest fix.</li>
              <li>Restart Bluetooth: turn it off in Control Center, wait 5 seconds, turn it back on.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-700 dark:text-yellow-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Stay safe in public</h3>
                <p className="text-sm text-muted-foreground mb-2">In rare cases, strangers in public places (subways, airports) AirDrop unwanted images to phones set to "Everyone".</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Keep AirDrop on "Contacts Only" or "Receiving Off" by default.</li>
                  <li>Only switch to "Everyone for 10 Minutes" when you actually need to receive from someone, then it turns off automatically.</li>
                  <li>If you do get an unwanted AirDrop request — tap <strong>Decline</strong>. Nothing was downloaded.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Sharing with Android friends</h3>
            <p className="text-sm text-muted-foreground">AirDrop only works between Apple devices. To send to Android, use Messages (compress to MMS), email, or a free app like <strong>Google Photos</strong> or <strong>WhatsApp</strong> — all work between iPhone and Android.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
