import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function IPostalMailScanning() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mail Scanning Services for Senior Snowbirds | TekSure" description="Scan mail to your phone. iPostal1, Earth Class Mail for traveling seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mail Scanning Services</h1>
          <p className="text-lg text-muted-foreground">Read your mail anywhere on Earth.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mail forwards to a service address.</li>
              <li>They scan envelope.</li>
              <li>You see scan via app — open or trash?</li>
              <li>If open — they scan contents.</li>
              <li>If important — they forward physical mail.</li>
              <li>Check mail from anywhere in world.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for these seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Snowbirds (winter in Florida, summer up north).</li>
              <li>Long international travelers.</li>
              <li>RVers traveling full-time.</li>
              <li>Adult children of distant parents.</li>
              <li>People who hate mail piles.</li>
              <li>Anyone tired of holding mail.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPostal1</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Largest service — 3,000+ locations.</li>
              <li>$10–$30/month depending on plan.</li>
              <li>Real US street address (not P.O. Box).</li>
              <li>Useful for business/banking.</li>
              <li>Forward, scan, shred, deposit checks.</li>
              <li>Most popular option.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Earth Class Mail</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Premium service — $19–$199/month.</li>
              <li>Better for businesses.</li>
              <li>Can deposit checks remotely.</li>
              <li>Multiple addresses available.</li>
              <li>Established + reliable.</li>
              <li>Higher cost than iPostal1.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">USPS Informed Delivery</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FREE service from USPS.</li>
              <li>Scan of envelopes coming to you.</li>
              <li>Shows what mail will arrive that day.</li>
              <li>No package opening, just envelope scans.</li>
              <li>Sign up at USPS.com.</li>
              <li>Free + immediate value.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup process</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Choose service + plan.</li>
              <li>Get new street address from them.</li>
              <li>File USPS forwarding form (1583).</li>
              <li>Notarize forwarding form.</li>
              <li>Update address with banks, government, etc.</li>
              <li>Mail starts forwarding within days.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try Informed Delivery free first</h3>
            <p className="text-sm text-muted-foreground">Before paying for mail scanning, sign up free at USPS.com for Informed Delivery. Daily email shows envelope scans of mail arriving today. Combined with auto-pay for bills, eliminates 90% of mail concerns. Save iPostal1 ($10/month) for when you actually become a snowbird or full-time traveler.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
