import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function MedicalEquipmentRental() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medical Equipment — Rent vs Buy | TekSure" description="Walkers, wheelchairs, hospital beds. Plain-English picks + Medicare coverage rules + free programs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medical Equipment</h1>
          <p className="text-lg text-muted-foreground">Rent. Buy. Borrow free.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medicare covers (DME)</h2>
            <p className="text-sm">Medicare Part B covers Durable Medical Equipment with doctor&apos;s prescription:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Walkers, canes, crutches.</li>
              <li>Wheelchairs (manual + power).</li>
              <li>Hospital beds.</li>
              <li>Oxygen + CPAP.</li>
              <li>Commodes / shower chairs.</li>
              <li>Diabetic supplies, blood pressure monitors.</li>
              <li>Medicare pays 80% after deductible.</li>
              <li>Use Medicare-enrolled supplier.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">FREE equipment programs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Loan closets</strong> — many counties have free durable medical equipment loan closets. Search "[county] medical equipment loan".</li>
              <li><strong>Lions Club</strong> — free wheelchair, hearing equipment loans.</li>
              <li><strong>VFW / American Legion</strong> — for veterans.</li>
              <li><strong>Catholic Charities</strong>.</li>
              <li><strong>Independent Living Centers</strong> — federal-funded.</li>
              <li><strong>Goodwill Easter Seals</strong> — sometimes free DME.</li>
              <li><strong>Hospital social worker</strong> can connect you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Rent for short-term needs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Drive Medical / Hugo Mobility</strong> — rentals 1-week to 6-month.</li>
              <li><strong>National Seating &amp; Mobility</strong> — chains nationwide.</li>
              <li><strong>Medequip USA</strong> — short-term rentals.</li>
              <li>$50-150/month typical.</li>
              <li>Insurance often covers rental too.</li>
              <li>Better than buying for temporary post-surgery needs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Buying second-hand</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Facebook Marketplace</strong> — wheelchair, walker often $20-100.</li>
              <li><strong>Estate sales</strong> — frequently good deals.</li>
              <li><strong>Goodwill / Salvation Army</strong> — basic medical equipment.</li>
              <li><strong>Senior centers</strong> — sometimes have items to give away.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Skip mobility scooter dealers</h3>
            <p className="text-sm text-muted-foreground">Aggressive scooter ads on TV target seniors. Same scooter often $1,500-3,000 cheaper used / from Costco / Amazon. Medicare may NOT cover the deluxe model they show. Get scooter through proper Medicare DME supplier instead.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
