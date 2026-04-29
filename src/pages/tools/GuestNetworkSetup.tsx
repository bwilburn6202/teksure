import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function GuestNetworkSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Guest WiFi Network Setup | TekSure" description="Separate WiFi for visitors. Plain-English steps to set up guest network — protect your devices + privacy." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Guest WiFi Setup</h1>
          <p className="text-lg text-muted-foreground">Visitor-friendly. Privacy-safe.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why guest network</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Visitors&apos; phones can&apos;t see your computer/files.</li>
              <li>If a visitor has malware — protected.</li>
              <li>Can have simpler "guest" password to share.</li>
              <li>Limit speed if needed.</li>
              <li>Auto-expire guest access after time period.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (10 min)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open router app (Eero, Nest, Xfinity, etc.).</li>
              <li>Find "Guest Network" or "Guest WiFi".</li>
              <li>Toggle ON.</li>
              <li>Set guest network name (e.g., "Smith Guests").</li>
              <li>Set simple password ("Welcome2025!" — easy to share).</li>
              <li>"Allow access to local network" → OFF (this is key).</li>
              <li>Save. Done.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best practices</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Print guest password on a card. Tape inside guest room.</li>
              <li>Or display QR code (apps like "WiFi QR Code Generator").</li>
              <li>Change yearly OR after big party.</li>
              <li>For Airbnb hosts — required by many guides.</li>
              <li>Smart home gadgets (TVs, Echo) can stay on YOUR network — they need access.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">QR code shortcut</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Generate a QR code with WiFi info (WiFi QR Code Generator app or qifi.org).</li>
              <li>Print it. Frame it. Hang in guest room or kitchen.</li>
              <li>Visitors scan with phone camera → auto-connect.</li>
              <li>No more "what&apos;s the password?" repeat.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Different from main network</h3>
            <p className="text-sm text-muted-foreground">Guest WiFi is SEPARATE from your main wifi. Different password. Different name. Visitors can&apos;t see your computers, printers, smart home devices. Big privacy improvement for 5 minutes setup.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
