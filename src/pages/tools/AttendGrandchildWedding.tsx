import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function AttendGrandchildWedding() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Attend Grandchild Wedding for Seniors | TekSure" description="Travel + enjoy wedding. Plain-English senior wedding guest guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grandchild Wedding</h1>
          <p className="text-lg text-muted-foreground">Make it work — even if difficult.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Travel planning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Book flights early.</li>
              <li>Direct flights — fewer transfers.</li>
              <li>Aisle seat — bathroom access.</li>
              <li>Wheelchair assistance free.</li>
              <li>Travel insurance ESSENTIAL.</li>
              <li>Bring meds in carry-on.</li>
              <li>2-3 days before wedding to recover from travel.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Wedding day comfort</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Comfortable shoes (not fancy painful).</li>
              <li>Layers (venues vary in temperature).</li>
              <li>Cane / walker if needed.</li>
              <li>Reserved seating ask family.</li>
              <li>Bathroom location identify early.</li>
              <li>Quiet room break if overwhelmed.</li>
              <li>Don&apos;t skip meals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Photo opportunities</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Family generations photo.</li>
              <li>Grandparent + grandchild.</li>
              <li>Tell photographer in advance.</li>
              <li>Hand off camera if family member can capture.</li>
              <li>Take videos with phone too.</li>
              <li>Make sure YOU&apos;re in photos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior gift ideas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Family heirloom (gold + meaning).</li>
              <li>Letter of life advice.</li>
              <li>Family photo album.</li>
              <li>Cash always appreciated.</li>
              <li>Honeymoon contribution.</li>
              <li>Toast at reception.</li>
              <li>Your presence = best gift.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If can&apos;t attend physically</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Video message played at reception.</li>
              <li>FaceTime during ceremony.</li>
              <li>Send heartfelt letter.</li>
              <li>Family records ceremony.</li>
              <li>Plan special visit later.</li>
              <li>Some virtually attend now.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Push if you can</h3>
            <p className="text-sm text-muted-foreground">Many seniors regret missing weddings. Health permitting — make trip work. Family helps with logistics. Wheelchair, oxygen, special diets accommodated. Lifetime memory. Don&apos;t let perfect be enemy of good. Even attending part = wonderful.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
