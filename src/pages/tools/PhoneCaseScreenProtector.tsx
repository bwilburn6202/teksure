import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function PhoneCaseScreenProtector() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Cases + Screen Protectors | TekSure" description="Protect your phone. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cases + Screen Protectors</h1>
          <p className="text-lg text-muted-foreground">$25 saves $300 in repairs.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why protect?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phone screen replacement: $200-400.</li>
              <li>Phone falls inevitable.</li>
              <li>Senior hands sometimes shaky.</li>
              <li>Cracked screens = harder to read.</li>
              <li>Senior insurance often expensive.</li>
              <li>Best to prevent breakage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best cases for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>OtterBox Defender</strong> — toughest ($60).</li>
              <li><strong>OtterBox Symmetry</strong> — slim + protective ($40).</li>
              <li><strong>Lifeproof FRE</strong> — waterproof ($90).</li>
              <li><strong>Spigen Tough Armor</strong> — affordable ($20).</li>
              <li><strong>Casetify</strong> — drop-tested colorful ($50).</li>
              <li>Avoid cheap rubber sleeves.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Ridges easier grip.</li>
              <li>Raised lip protects screen.</li>
              <li>Pop socket — anti-drop.</li>
              <li>Wallet case — credit cards inside.</li>
              <li>Strap or wrist tether.</li>
              <li>Magnetic mount compatible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Screen protectors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tempered glass best — $10-15.</li>
              <li>Easier to apply than plastic.</li>
              <li>Anti-scratch + anti-shatter.</li>
              <li>Replace yearly or when scratched.</li>
              <li>3-pack from Amazon.</li>
              <li>Apple Store applies for free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apply screen protector</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Clean phone screen w/ alcohol wipe.</li>
              <li>Dust-free environment (bathroom after shower).</li>
              <li>Align with charging port + speaker.</li>
              <li>Press from middle outward.</li>
              <li>Apply card to push out bubbles.</li>
              <li>Bubble = peel back + reapply.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Phone insurance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AppleCare+ — $5-10/mo.</li>
              <li>Verizon / ATT phone insurance — $11-15.</li>
              <li>Cracked screen $29 deductible.</li>
              <li>Loss/theft $99-199.</li>
              <li>Worth it if you drop phones often.</li>
              <li>Skip if careful + good case.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cracked screen still works</h3>
            <p className="text-sm text-muted-foreground">If screen cracks, screen protector often took the hit — not real screen. Replace screen protector, no repair needed. If real screen cracked: AppleCare $29 fix. Without insurance — $200-400. Save photos to cloud now in case. Consider phone repair shop ($150 third party).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
