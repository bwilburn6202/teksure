import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

export default function FloodPrep() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Flood Prep for Seniors | TekSure" description="Hurricane, flash flood, river flood. Plain-English flood preparation + flood insurance + safety tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Flood Prep</h1>
          <p className="text-lg text-muted-foreground">Insurance + plan + go-bag.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Flood insurance is SEPARATE</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Standard homeowners does NOT cover flood.</li>
              <li>Federal NFIP via FEMA — most common.</li>
              <li>Cost: $400-2,500/year depending on zone.</li>
              <li>30-day waiting period — buy NOW, before threat.</li>
              <li>Even outside flood zones — 25% of claims from low-risk areas.</li>
              <li>Renters can get contents-only flood insurance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Before flood</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Check FEMA flood zone — fema.gov/flood-maps.</li>
              <li>Move valuables to upper floors.</li>
              <li>Sandbags from town if available.</li>
              <li>Sump pump tested.</li>
              <li>Anchor outdoor fuel tanks.</li>
              <li>Move car to high ground.</li>
              <li>Photo home + valuables for claim.</li>
              <li>Backup important documents to cloud.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">During</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Don&apos;t drive through water</strong> — 6 inches sweeps cars away.</li>
              <li>"Turn around — Don&apos;t drown" — National Weather Service motto.</li>
              <li>If water rising — go UP not out.</li>
              <li>Avoid touching electrical when wet.</li>
              <li>Don&apos;t walk in floodwater — current + debris.</li>
              <li>Listen to weather radio for evacuation orders.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After flood</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t enter home until cleared safe.</li>
              <li>Photograph EVERYTHING for insurance + FEMA.</li>
              <li>File claim within 60 days for NFIP.</li>
              <li>Apply for FEMA aid: disasterassistance.gov.</li>
              <li>Beware contractor scams — check licenses + Better Business Bureau.</li>
              <li>Throw out anything contaminated by floodwater (sewage risk).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">FEMA disaster assistance</h3>
            <p className="text-sm text-muted-foreground">After major flood, FEMA aid available even without flood insurance. Up to $40K+ for severe damage. Apply at <strong>disasterassistance.gov</strong> or 1-800-621-3362. Many seniors miss this — apply quickly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
