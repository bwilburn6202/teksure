import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function FosterPetsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Fostering Pets for Seniors | TekSure" description="Foster pets — companionship without commitment. Plain-English guide for senior foster parents." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Foster Pets for Seniors</h1>
          <p className="text-lg text-muted-foreground">All the love. None of the lifelong commitment.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why foster?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Companionship without 15-year commitment.</li>
              <li>Try before adopting (foster-to-adopt).</li>
              <li>Save lives — fosters free shelter space.</li>
              <li>Costs covered — food, supplies, vet usually free.</li>
              <li>Choose duration — 2 weeks to 6 months typically.</li>
              <li>Take breaks between pets.</li>
              <li>Often easier than full ownership.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Types of foster</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Senior pets</strong> — calmer, perfect for seniors. Less time.</li>
              <li><strong>Mom + puppies/kittens</strong> — needy short-term.</li>
              <li><strong>Medical recovery</strong> — short-term post-surgery.</li>
              <li><strong>Behavior socialization</strong> — needs basic care + love.</li>
              <li><strong>Hospice foster</strong> — give dying senior pet final months of love.</li>
              <li><strong>Vacation foster</strong> — owner deployed, hospitalized — temporary.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you provide</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Safe home environment.</li>
              <li>Food + water.</li>
              <li>Basic care (walks, petting, attention).</li>
              <li>Transport to vet appointments.</li>
              <li>Love + socialization.</li>
              <li>Updates to rescue (photos, behavior).</li>
              <li>Return when adopted.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What rescue provides</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vet care + medications usually 100% covered.</li>
              <li>Often food + supplies free.</li>
              <li>Beds, crates, toys loaned.</li>
              <li>24/7 support phone.</li>
              <li>Pet returned if doesn&apos;t work out.</li>
              <li>Training help if needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to start</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local shelter — search &quot;[your city] pet foster.&quot;</li>
              <li>Petfinder.com — find rescues near you.</li>
              <li>Best Friends Animal Society.</li>
              <li>Breed-specific rescues (Lab Rescue, Cat Welfare, etc.).</li>
              <li>Application + home visit usually.</li>
              <li>Match pet to your situation honestly.</li>
              <li>Start with 1 pet, short term — 2 weeks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">&quot;Foster fail&quot; warning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adopting your foster pet — common!</li>
              <li>Many seniors fall in love + keep first foster.</li>
              <li>Plan finances + lifestyle for full ownership.</li>
              <li>Or be honest — return to shelter, choose another.</li>
              <li>Don&apos;t feel guilty — saving lives either way.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Hospice fostering: most meaningful</h3>
            <p className="text-sm text-muted-foreground">Senior pets in shelters often die alone. <strong>Hospice fostering</strong> = give them love + a home for final weeks/months. Rescue covers all costs. Bittersweet but profound. Many seniors do it repeatedly. Best Friends has program. Search &quot;senior pet hospice foster.&quot;</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
