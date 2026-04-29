import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scale } from 'lucide-react';

export default function PrepaidVsContractPhones() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Prepaid vs Contract Phones for Seniors | TekSure" description="Choose the right plan. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scale className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Prepaid vs Contract</h1>
          <p className="text-lg text-muted-foreground">Which is right for you?</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Prepaid: pros</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pay-as-you-go simple.</li>
              <li>No contract — cancel anytime.</li>
              <li>No credit check.</li>
              <li>Cheaper monthly.</li>
              <li>Predictable budget.</li>
              <li>Avoid surprise overages.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Prepaid: cons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Buy phone outright ($300-1500).</li>
              <li>Limited international roaming.</li>
              <li>Sometimes data deprioritized.</li>
              <li>Refill / auto-pay required.</li>
              <li>No phone insurance available some.</li>
              <li>Can run out of minutes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Contract: pros</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phone bundled (paid over time).</li>
              <li>Latest devices always.</li>
              <li>Insurance available.</li>
              <li>Priority data.</li>
              <li>International features.</li>
              <li>Family plans available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Contract: cons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$80-150/mo typical.</li>
              <li>2-year commitment.</li>
              <li>Termination fee if cancel.</li>
              <li>Credit check required.</li>
              <li>Surprise overages.</li>
              <li>Phone &quot;subsidy&quot; really hidden cost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best prepaid for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mint Mobile</strong> — $15/mo 5GB.</li>
              <li><strong>Tracfone</strong> — basic phones, simple.</li>
              <li><strong>Cricket Wireless</strong> — ATT network.</li>
              <li><strong>Total Wireless</strong> — Verizon network.</li>
              <li><strong>Consumer Cellular</strong> — senior-focused.</li>
              <li>$20-40/mo typical.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior recommendation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most seniors = prepaid wins.</li>
              <li>Especially if phone is paid off.</li>
              <li>Saves $50+/mo.</li>
              <li>$600+/yr in pocket.</li>
              <li>No contract pressure.</li>
              <li>Switch easily if unhappy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Lifeline Discount</h3>
            <p className="text-sm text-muted-foreground">Federal program — Lifeline. Free or discounted phone service for low-income seniors. Up to $9.25/mo discount. SNAP / Medicaid recipients qualify automatically. Apply at lifelinesupport.org. Many seniors don&apos;t know about this. Free phones available too. Truly free phone service possible.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
