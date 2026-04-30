import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PawPrint } from 'lucide-react';

export default function PuppyScamGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Puppy &amp; Pet Scams Online | TekSure" description="80% of online puppy ads are scams. Plain-English playbook for spotting fake breeders, fake adoption fees, and shipping fraud." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PawPrint className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Puppy Scam Guide</h1>
          <p className="text-lg text-muted-foreground">No puppy. Just heartbreak and lost money.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The numbers</h2>
            <p className="text-sm">Better Business Bureau says 80% of sponsored search ads for puppies online are scams. Average loss: $850. The puppy never existed. Photos were stolen from real breeders.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How the scam works</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Beautiful puppy photos online. Suspiciously low price.</li>
              <li>"Breeder" emails or texts only. Never video chat.</li>
              <li>Asks for deposit. Then "shipping fee".</li>
              <li>Then "special crate". Then "vaccinations". Then "insurance".</li>
              <li>Each fee comes with a sob story. Each must be sent by gift card or wire.</li>
              <li>Eventually they go silent. No puppy. No refund.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Red flags</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Price way below typical for breed (real Frenchie = $3,000+, scammers offer $500).</li>
              <li>Refuses to video chat with the puppy.</li>
              <li>Won&apos;t let you visit in person.</li>
              <li>Wants payment by Zelle, Cash App, gift card, wire, or crypto.</li>
              <li>"Free puppy, just pay shipping."</li>
              <li>Story keeps escalating with new fees.</li>
              <li>Email addresses with random numbers (puppy.lover.92834@gmail.com).</li>
              <li>Stolen photos — reverse search image on Google. If it appears on multiple sites, it&apos;s stolen.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to find a real puppy/pet</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Petfinder.com</strong> + <strong>AdoptaPet.com</strong> — verified shelters and rescues.</li>
              <li><strong>Local shelter or humane society</strong> — visit in person.</li>
              <li><strong>Breed-specific rescue</strong> — search "[breed] rescue near me".</li>
              <li><strong>AKC Marketplace</strong> for purebred — verifies breeders.</li>
              <li>NEVER buy a pet you can&apos;t see in person or video.</li>
              <li>Pay by credit card (chargeback protection) or in cash at pickup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reverse image search</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Save the puppy photo from the listing.</li>
              <li>Go to <strong>images.google.com</strong>.</li>
              <li>Click the camera icon. Upload the photo.</li>
              <li>Google shows where else that image appears online.</li>
              <li>If it&apos;s on 5 different breeder sites — it&apos;s stolen. Walk away.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If you sent money</h3>
            <p className="text-sm text-muted-foreground">Report at <strong>petscams.com</strong>, <strong>BBB.org</strong>, and <strong>reportfraud.ftc.gov</strong>. Credit card payments can sometimes be reversed. Wire/gift card almost never. Tell the platform (Facebook Marketplace, Craigslist) so the listing comes down.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
