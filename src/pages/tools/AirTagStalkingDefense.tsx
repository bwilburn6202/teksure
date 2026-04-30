import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Radar, AlertTriangle } from 'lucide-react';

export default function AirTagStalkingDefense() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AirTag Stalking Defense — How to Find Hidden Trackers | TekSure" description="Worried someone is tracking you with an Apple AirTag, Tile, or SmartTag? Here's how to find one and what to do about it." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Radar className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AirTag Stalking Defense</h1>
          <p className="text-lg text-muted-foreground">Find hidden trackers in your bag, car, or coat — in plain English.</p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-2">What is an AirTag?</h2>
            <p className="text-sm">A small round white tracker (about the size of a quarter) made by Apple. People use them to find lost keys or luggage. But unfortunately, some abusers slip them into bags, coats, or cars to follow people. Tile and Samsung SmartTag work similarly.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📱 If you have an iPhone</h2>
            <p className="text-sm mb-3">Your iPhone automatically warns you if an unknown AirTag has been with you for a while.</p>
            <ul className="list-disc pl-5 space-y-2 text-sm mb-4">
              <li>You'll see a notification: <em>"AirTag Found Moving With You"</em>.</li>
              <li>Tap the notification → tap "Continue" → you can play a sound to find the tag, or see where it\'s been with you.</li>
              <li>Even without a notification, you can check yourself: open the <strong>Find My</strong> app → tap "Items" → "Items Detected With You".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🤖 If you have an Android phone</h2>
            <p className="text-sm mb-3">Android also detects unknown AirTags now.</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Install the free Apple app <strong>"Tracker Detect"</strong> from the Google Play Store, or use the built-in scanner.</li>
              <li>Settings → Safety & emergency → Unknown tracker alerts (on most Android 14+ phones).</li>
              <li>Tap "Scan now" — it looks for nearby AirTags or compatible trackers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🔍 Where to physically search</h2>
            <p className="text-sm mb-2">If you got an alert, look in these spots:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Inside coat pockets, purse linings, backpack pockets.</li>
              <li>Inside your car: under seats, glove compartment, between cushions, in the trunk\'s wheel well, behind the bumper, magnetic to the underside of the car.</li>
              <li>Inside hat brims or shoes.</li>
              <li>In gifts you recently received from someone you don\'t fully trust.</li>
              <li>You can also play a sound from the alert — the AirTag will beep.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-700 dark:text-yellow-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">If you find one — important</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm mt-2">
                  <li><strong>Don\'t throw it out yet.</strong> The serial number can help police find who bought it.</li>
                  <li>If you feel unsafe — go to a public place (police station, friend\'s house) before disabling it.</li>
                  <li>To disable an AirTag: hold it shiny side up, twist the metal back counter-clockwise, lift off, and pull out the battery.</li>
                  <li>Call <strong>911</strong> if you\'re in immediate danger.</li>
                  <li>Otherwise, contact local police (non-emergency line) and the National Domestic Violence Hotline at <strong>1-800-799-7233</strong>.</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">False alarm</h3>
            <p className="text-sm text-muted-foreground">Sometimes you get an "AirTag Found Moving With You" alert because you borrowed someone's car or rode in a friend's, and their AirTag traveled with you. Always check who owns it before assuming the worst — but don't ignore the alert either.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
