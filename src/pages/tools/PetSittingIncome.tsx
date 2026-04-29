import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PawPrint } from 'lucide-react';

export default function PetSittingIncome() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Sitting Income for Seniors | TekSure" description="Earn $200-2,000/mo pet sitting. Plain-English Rover guide for senior pet sitters." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PawPrint className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Sitting Income</h1>
          <p className="text-lg text-muted-foreground">Love pets without the long-term commitment.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best platforms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Rover</strong> — largest. They take 20%.</li>
              <li><strong>Wag</strong> — focuses on dog walking.</li>
              <li><strong>Care.com</strong> — broad, includes pet care.</li>
              <li><strong>Sittercity</strong> — alternative.</li>
              <li><strong>Word-of-mouth</strong> — keep 100%, build reputation.</li>
              <li><strong>NextDoor</strong> — neighborhood gigs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Services to offer</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Drop-in visits</strong> — $15-30/visit (30-min).</li>
              <li><strong>Dog walking</strong> — $15-30/walk.</li>
              <li><strong>Boarding</strong> — overnight in YOUR home, $25-75/night.</li>
              <li><strong>House sitting</strong> — stay at THEIR home.</li>
              <li><strong>Doggy daycare</strong> — daytime YOUR home.</li>
              <li><strong>Cat sitting</strong> — easier, less time.</li>
              <li>Boarding pays best per hour.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior advantages</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Home all day = perfect for boarding/daycare.</li>
              <li>Patient with anxious pets.</li>
              <li>Reliable — fewer last-minute cancels.</li>
              <li>Mature judgment for medical issues.</li>
              <li>Photos + updates make pet parents happy.</li>
              <li>Long-term clients = stable income.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup Rover</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free profile at rover.com.</li>
              <li>Background check $35.</li>
              <li>Free Rover online safety course.</li>
              <li>Photos of yourself + home.</li>
              <li>Detailed bio about pet experience.</li>
              <li>Set rates competitively at first ($20-30/visit).</li>
              <li>Raise rates as reviews accumulate.</li>
              <li>Rover insurance covers up to $25K.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stay safe</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Always meet pet + owner BEFORE sitting.</li>
              <li>Get vet contact + medical info.</li>
              <li>Pet allergies (yours + pet).</li>
              <li>House key handling — be clear.</li>
              <li>Insurance and bonding through Rover.</li>
              <li>Medication instructions in writing.</li>
              <li>Emergency contact info.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Realistic income</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$200-500/mo for occasional walks.</li>
              <li>$500-1,500/mo for regular schedule.</li>
              <li>$1,500-3,000/mo if doing boarding regularly.</li>
              <li>$3,000+/mo for full-time pet care.</li>
              <li>Holiday weeks = highest pay (Christmas, summer).</li>
              <li>Build referrals — 60% repeat clients within 1 year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best fit for</h3>
            <p className="text-sm text-muted-foreground">Active seniors who love walking + pets. Singles or couples without daily commitments. Snowbirds — sit in summer home, vacation in winter. Easier than dogwalking jobs of past — apps handle marketing + payments. You just enjoy pets + earn money. Many seniors&apos; favorite gig.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
