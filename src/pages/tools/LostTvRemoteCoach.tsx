import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

export default function LostTvRemoteCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Lost TV Remote — Use Phone as Remote | TekSure" description="Lost the remote in the couch cushions? Plain-English steps to control your TV with your phone — and find the missing remote." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Search className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Lost TV Remote — Use Your Phone</h1>
          <p className="text-lg text-muted-foreground">Don\'t spend money — your phone is a remote.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple TV / iPhone</h2>
            <p className="text-sm mb-2">Your iPhone IS an Apple TV remote.</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Swipe down from top-right corner — Control Center.</li>
              <li>Tap the Apple TV remote icon (rectangle with play button).</li>
              <li>Pick your Apple TV. Use the touchpad on screen.</li>
              <li>Or open the "Apple TV Remote" app (built in).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Roku TV / stick</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Install the free <strong>Roku</strong> app from App Store / Play Store.</li>
              <li>Phone must be on the same Wi-Fi as the Roku.</li>
              <li>App auto-detects your Roku.</li>
              <li>Touchscreen remote replaces the lost one.</li>
              <li>Bonus — the app has "Private Listening" — sound goes to your phone\'s headphones, not to the TV speakers.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Amazon Fire TV / Stick</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Install the <strong>Fire TV</strong> app.</li>
              <li>Sign in with the same Amazon account as the Fire TV.</li>
              <li>Connect (same Wi-Fi).</li>
              <li>Touchpad remote on phone.</li>
              <li>Includes voice — speak Alexa commands.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Samsung Smart TV</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Install <strong>SmartThings</strong> from Samsung.</li>
              <li>Sign in with Samsung account (or create one).</li>
              <li>Add your TV as a device.</li>
              <li>App lets you control TV from phone.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">LG, Vizio, Sony Smart TVs</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>LG ThinQ app</strong>.</li>
              <li><strong>SmartCast app</strong> (Vizio).</li>
              <li><strong>Sony Video & TV SideView app</strong>.</li>
              <li>Each works similarly — install, log in, pair on Wi-Fi, control.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If your TV is older (no Wi-Fi)</h2>
            <p className="text-sm mb-2">You need a phone with an infrared (IR) blaster — most newer phones don\'t have one. But:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Samsung Galaxy older models</strong> have IR blasters. App: SmartThings or "Peel Remote".</li>
              <li><strong>For most phones</strong>: buy a $30 BroadLink IR hub. Plugs in, controls IR devices via app.</li>
              <li><strong>Or just buy a $10 universal remote</strong> from Walmart and program it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Find that remote</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Couch cushions — always check first.</li>
              <li>Between recliner cushions / under recliner.</li>
              <li>In the bathroom or kitchen (you took it during commercials).</li>
              <li>On TOP of the TV (somehow common).</li>
              <li>In a coat pocket from last week.</li>
              <li>Stick a Tile or AirTag to the remote — find it with your phone next time.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
