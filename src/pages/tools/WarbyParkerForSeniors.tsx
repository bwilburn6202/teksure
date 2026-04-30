import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Glasses } from 'lucide-react';

export default function WarbyParkerForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Warby Parker for Seniors | TekSure" description="Online + in-store eyewear shopping. Warby Parker explained for senior glasses buyers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Glasses className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Warby Parker</h1>
          <p className="text-lg text-muted-foreground">Quality glasses, simpler buying experience.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Warby Parker?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Glasses start at $95 with prescription lenses included.</li>
              <li>5-day free home try-on — 5 frames sent to you.</li>
              <li>Or visit retail stores (250+ nationwide).</li>
              <li>Eye exams available in many stores.</li>
              <li>Progressive lenses + readers + sunglasses.</li>
              <li>Quality comparable to LensCrafters at lower price.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Home try-on process</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Browse frames at WarbyParker.com.</li>
              <li>Select 5 frames you like.</li>
              <li>Receive in 1–2 days, free shipping both ways.</li>
              <li>Try on at home for 5 days.</li>
              <li>Return all 5 in prepaid box.</li>
              <li>Order favorite with prescription.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pricing breakdown</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Single-vision glasses: $95.</li>
              <li>Progressive lenses: +$200 (~$295 total).</li>
              <li>Blue-light filtering: +$50.</li>
              <li>Anti-reflective coating: included.</li>
              <li>Compare to $400+ at traditional optical shops.</li>
              <li>FSA + HSA accepted.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance + Medicare</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Accepts most vision insurance plans.</li>
              <li>Submits claims for you.</li>
              <li>Medicare doesn&apos;t typically cover glasses.</li>
              <li>Medicare Advantage often does — check plan.</li>
              <li>VSP, EyeMed, Davis Vision all accepted.</li>
              <li>Out-of-network reimbursement help available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cheaper alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Zenni Optical — $9 frames + lenses (cheapest).</li>
              <li>EyeBuyDirect — $40 starting price.</li>
              <li>GlassesUSA — frequent 50% off promos.</li>
              <li>Liingo Eyewear — also home try-on, $77 starting.</li>
              <li>Costco Optical — high quality, member prices.</li>
              <li>Compare carefully — quality varies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Need a prescription?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Get eye exam at Costco, Walmart, or Warby Parker store.</li>
              <li>Prescription valid 1–2 years usually.</li>
              <li>Ask doctor for prescription with PD (pupillary distance).</li>
              <li>PD is required for online ordering.</li>
              <li>Many won&apos;t print PD — measure at home.</li>
              <li>Apps can measure PD with phone selfie camera.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try home try-on first</h3>
            <p className="text-sm text-muted-foreground">For most seniors buying online glasses for the first time, Warby Parker&apos;s 5-day free home try-on removes the biggest risk — buying without trying. Pick 5 frames online, try them on at home with family for opinions, send back what doesn&apos;t work, order what does. Many seniors have saved hundreds versus traditional optical shops.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
