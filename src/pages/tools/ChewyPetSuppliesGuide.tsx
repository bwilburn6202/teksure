import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Package } from 'lucide-react';

export default function ChewyPetSuppliesGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chewy Pet Supplies for Seniors | TekSure" description="Auto-deliver pet food and supplies. Chewy explained for seniors with pets." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Package className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chewy</h1>
          <p className="text-lg text-muted-foreground">Pet food + supplies delivered to your door.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Chewy?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No more hauling 30-lb bags from the store.</li>
              <li>Auto-ship — never run out of pet food.</li>
              <li>Free shipping on orders $49+.</li>
              <li>Often cheaper than pet stores.</li>
              <li>24/7 customer service — always answer.</li>
              <li>Wide selection — every brand + size.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Auto-ship savings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Set up recurring delivery — every 2, 4, or 6 weeks.</li>
              <li>5% off most items first auto-ship order.</li>
              <li>5% off ongoing for many items.</li>
              <li>Skip or change schedule anytime.</li>
              <li>Cancel anytime — no commitment.</li>
              <li>Saves time + money.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Prescription pet meds</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Chewy Pharmacy — fill pet prescriptions.</li>
              <li>Often cheaper than vet pharmacy.</li>
              <li>Vet faxes/emails prescription to Chewy.</li>
              <li>Auto-refill available.</li>
              <li>Diabetic supplies, heart meds, flea treatment.</li>
              <li>Always check vet&apos;s price first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Chewy Connect telehealth</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free for Chewy customers.</li>
              <li>Talk to a vet by video chat.</li>
              <li>Helpful for non-emergency questions.</li>
              <li>&quot;Is this rash serious?&quot; type questions.</li>
              <li>Saves a vet trip for minor concerns.</li>
              <li>Available evenings + weekends.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to set up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to Chewy.com or download Chewy app.</li>
              <li>Create account — email + password.</li>
              <li>Add pet info — species, age, weight.</li>
              <li>Find your usual food brand.</li>
              <li>Add to cart — toggle &quot;Auto-Ship&quot; for 5% off.</li>
              <li>Pick frequency — based on how much pet eats.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Famous Chewy customer service</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Send sympathy flowers when pet passes.</li>
              <li>Refunds + returns no questions asked.</li>
              <li>Hand-painted pet portraits sometimes.</li>
              <li>Real humans answer phone 24/7.</li>
              <li>Take open bags back.</li>
              <li>Why people stay loyal to Chewy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">No more carrying heavy bags</h3>
            <p className="text-sm text-muted-foreground">For seniors with mobility issues or back problems, Chewy auto-ship is a major quality-of-life upgrade. A 30-lb bag of dog food shows up on your porch every 4 weeks without you ever lifting it from a store cart. Often cheaper than the pet store. Skip or pause anytime if you&apos;re traveling. Set it up once, then never think about pet food again.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
