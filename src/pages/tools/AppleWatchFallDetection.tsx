import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function AppleWatchFallDetection() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Watch Fall Detection Setup | TekSure" description="Auto-911 if you fall. Plain-English Apple Watch fall detection guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fall Detection Setup</h1>
          <p className="text-lg text-muted-foreground">Auto-call emergency. Life-saving.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How it works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Watch detects hard fall.</li>
              <li>Watch buzzes + asks &quot;Are you okay?&quot;</li>
              <li>If you don&apos;t respond in 60 sec — auto-calls 911.</li>
              <li>Sends location to emergency services.</li>
              <li>Notifies your emergency contacts.</li>
              <li>Has saved many senior lives.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (5 minutes)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Need Apple Watch SE 2 / Series 4+.</li>
              <li>Watch app on iPhone.</li>
              <li>Tap &quot;My Watch&quot; → &quot;Emergency SOS.&quot;</li>
              <li>Toggle ON &quot;Fall Detection.&quot;</li>
              <li>Auto-on if 65+ when set up Apple ID.</li>
              <li>Add Medical ID + emergency contacts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set up Medical ID</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone Health app → Profile (top right).</li>
              <li>Medical ID → Edit.</li>
              <li>Add: conditions, allergies, medications, blood type.</li>
              <li>Add emergency contacts.</li>
              <li>Toggle ON &quot;Show When Locked.&quot;</li>
              <li>Toggle ON &quot;Share During Emergency Call.&quot;</li>
              <li>EMTs see this even when phone locked.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Manual Emergency SOS</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hold side button on Apple Watch.</li>
              <li>Slide &quot;Emergency SOS.&quot;</li>
              <li>Or just hold longer — auto-calls.</li>
              <li>iPhone — hold side + volume buttons.</li>
              <li>Both call 911 + emergency contacts.</li>
              <li>Even if Apple ID locked.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily wear matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wear watch in shower (most are waterproof).</li>
              <li>Sleep with on (or use 2nd as overnight).</li>
              <li>Charge while in shower OR while reading.</li>
              <li>15-min charge = 8 hours.</li>
              <li>Falls happen at any time.</li>
              <li>Always-wear = always-protected.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cellular vs WiFi</h3>
            <p className="text-sm text-muted-foreground">Cellular Apple Watch ($100 extra) = calls 911 even if iPhone not nearby. Critical for outdoor walks/falls. WiFi-only requires nearby iPhone. For seniors who walk alone — cellular worth $100. Add to AT&amp;T, Verizon, T-Mobile cellular plan ($10/mo).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
