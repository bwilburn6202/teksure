import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PawPrint } from 'lucide-react';

const APPS = [
  { name: 'Petfinder', cost: 'FREE', best: 'Biggest pet adoption site. Photos + bios from 11,000+ shelters/rescues.', good: 'Most popular.' },
  { name: 'Adopt a Pet', cost: 'FREE', best: 'Same idea. Often shows different pets than Petfinder.', good: 'Use both.' },
  { name: 'BestFriends.org', cost: 'FREE', best: 'Best Friends Animal Society network. Save Them All movement.', good: 'No-kill focused.' },
  { name: 'Local shelter websites', cost: 'FREE', best: 'Search "[your city] animal shelter" or "[county] humane society".', good: 'Direct from source.' },
  { name: 'Foster-based rescues', cost: 'FREE adoption fees vary $50-500', best: 'Pets live in foster homes — well-known temperaments. Better matches.', good: 'Best for finding right fit.' },
  { name: 'Senior pet adoption', cost: 'Often reduced/free', best: 'Many shelters waive fees for seniors adopting senior pets.', good: 'Win-win — older pets need homes most.' },
];

export default function PetAdoptionApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Adoption Apps — Petfinder, Adopt a Pet | TekSure" description="Find your next furry friend. Plain-English picks for adoption sites and senior-friendly programs at shelters." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PawPrint className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Adoption Apps</h1>
          <p className="text-lg text-muted-foreground">Find a friend. Save a life.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">"Seniors for Seniors" programs</h2>
            <p className="text-sm">Many US shelters have a "Seniors for Seniors" program — adopt a senior pet for free or reduced fee.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Senior pets often house-trained, mellow, lower-energy.</li>
              <li>Reduced or waived adoption fees ($0-50 vs $200-500).</li>
              <li>Some include free vet visit + initial supplies.</li>
              <li>Fewer training challenges than puppy.</li>
              <li>Search "[your city] seniors for seniors" or call local shelter.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Considerations for older adopters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Outliving the pet</strong> — talk to family. Have a plan if pet outlives you.</li>
              <li><strong>Mobility</strong> — cats, smaller dogs, older dogs better than energetic puppies.</li>
              <li><strong>Allergies</strong> — try a "meet and greet" or foster first.</li>
              <li><strong>Vet costs</strong> — average $1,000-2,500/year. Pet insurance ($30-60/month) helps with surgeries.</li>
              <li><strong>Grooming + walking help</strong> — Rover, local dog walkers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Foster first</h2>
            <p className="text-sm">Many shelters have "foster-to-adopt" programs. Take a pet home for 2-4 weeks. If it works — adopt. If not — return without judgment. Lowers risk dramatically.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best fit for many seniors</h3>
            <p className="text-sm text-muted-foreground">Adult cats (2-7 years old) — already house-trained, social, lower-maintenance than dogs. Many languish in shelters because puppies/kittens get adopted first. Save a life and gain a quiet companion.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
