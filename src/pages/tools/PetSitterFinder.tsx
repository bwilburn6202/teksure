import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

const SERVICES = [
  { name: 'Rover', cost: '$25-50/visit', best: 'Largest network. Background-checked.', good: 'Best big.' },
  { name: 'Wag', cost: '$20-40/walk', best: 'Walk-focused. App-driven.', good: 'Best walks.' },
  { name: 'Care.com', cost: '$15-25/hour', best: 'Local sitters + caregivers.', good: 'Best local.' },
  { name: 'Trusted Housesitters', cost: '$130/yr', best: 'Free sitter for free stay.', good: 'Best free.' },
  { name: 'Nextdoor', cost: 'FREE', best: 'Local neighbors who pet sit.', good: 'Best community.' },
];

export default function PetSitterFinder() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Sitter Finder for Seniors | TekSure" description="Find trusted pet sitters. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Search className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Sitter Finder</h1>
          <p className="text-lg text-muted-foreground">Travel without leaving pet alone.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SERVICES.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior pick: Rover</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Largest network nationwide.</li>
              <li>Background-checked sitters.</li>
              <li>Reviews + photos.</li>
              <li>$25-50/visit.</li>
              <li>Insurance + payment built-in.</li>
              <li>Easier than Care.com.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sitter screening</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Read 10+ reviews.</li>
              <li>Look for repeat customers.</li>
              <li>Meet-and-greet first.</li>
              <li>Watch how pet reacts.</li>
              <li>Verify ID + photos match.</li>
              <li>Trust gut feeling.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Before you leave</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vet contact info.</li>
              <li>Medication schedule.</li>
              <li>Emergency contact.</li>
              <li>Feeding instructions.</li>
              <li>Vet authorization signed.</li>
              <li>Pet camera live to phone.</li>
              <li>Daily photo updates.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">In-home vs boarding</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>In-home — less stress for pet.</li>
              <li>Daily routines kept.</li>
              <li>Less risk of illness.</li>
              <li>Boarding — social if dog.</li>
              <li>24-hour supervision.</li>
              <li>Senior pets prefer in-home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save money</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Trade with neighbors / friends.</li>
              <li>Family for big trips.</li>
              <li>Trusted Housesitters — free.</li>
              <li>Buy sitter dinner — value.</li>
              <li>Same sitter every time — discount.</li>
              <li>Local college students.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Trust your camera</h3>
            <p className="text-sm text-muted-foreground">Pet camera ($50-150) — Furbo, Petcube. Watch sitter visits. Photo + audio updates. Phone app. Brings peace of mind. See pet thriving while gone. Travel without guilt. Pet stays in routine while you have peace.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
