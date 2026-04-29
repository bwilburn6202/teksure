import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PawPrint } from 'lucide-react';

export default function BestPetsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Best Pets for Seniors | TekSure" description="Right pet for senior life. Plain-English picks for senior pet adoption — dogs, cats, low-maintenance options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PawPrint className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Best Pets for Seniors</h1>
          <p className="text-lg text-muted-foreground">Companion + purpose + better health.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why pets help seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lower BP + cholesterol.</li>
              <li>Reduce loneliness + depression.</li>
              <li>Force daily walks (dogs).</li>
              <li>Routine = mental health.</li>
              <li>Sense of purpose.</li>
              <li>Conversation starter — meet neighbors.</li>
              <li>Studies: pet owners live 3-5 years longer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best dog breeds</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Senior shelter dog (5-10 yrs)</strong> — calm, trained. Less time commitment.</li>
              <li><strong>Cavalier King Charles Spaniel</strong> — gentle, lap dog.</li>
              <li><strong>Bichon Frise</strong> — friendly, low shedding.</li>
              <li><strong>Pug</strong> — easy-going, indoor pet.</li>
              <li><strong>Shih Tzu</strong> — affectionate, low exercise.</li>
              <li><strong>Senior Labrador</strong> — calm, trained, loving.</li>
              <li>AVOID: puppies (chewing, training), large active breeds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best cats for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Senior cat (8+ yrs)</strong> — calm, litter-trained, less playful.</li>
              <li><strong>Ragdoll</strong> — gentle, lap cat, follows you.</li>
              <li><strong>British Shorthair</strong> — laid-back.</li>
              <li><strong>Persian</strong> — quiet, affectionate (but requires grooming).</li>
              <li><strong>Russian Blue</strong> — quiet, low-shedding.</li>
              <li>Cats good for: less mobility, condo/apartment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Low-maintenance alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Fish</strong> — calming, no walking.</li>
              <li><strong>Birds</strong> — interactive, no walking. Cockatiels/parakeets.</li>
              <li><strong>Robotic pets</strong> — Joy For All companion pet (Hasbro). $130. For dementia patients.</li>
              <li><strong>Foster a pet</strong> — try before commit. See /tools/foster-pets-for-seniors.</li>
              <li><strong>Pet-sitting</strong> — Rover.com. Care for others&apos; pets.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Before adopting — be honest</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mobility — can you walk a dog 2x/day?</li>
              <li>Budget — $1,000-3,000/yr for food, vet, supplies.</li>
              <li>Travel — who watches pet when away?</li>
              <li>Health — what if you can&apos;t care for it?</li>
              <li>Plan — who takes pet if hospitalized?</li>
              <li>Lifespan — dogs 10-15 yrs, cats 15-20.</li>
              <li>Match pet age to your life stage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior-to-senior adoption programs</h3>
            <p className="text-sm text-muted-foreground">Many shelters waive fees for seniors adopting senior pets. <strong>Pets for Seniors</strong> programs nationwide. <strong>Seniors for Seniors</strong> — search local shelters. Most include first vet visit + supplies. Older pets often perfectly trained, calm, ready to love.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
