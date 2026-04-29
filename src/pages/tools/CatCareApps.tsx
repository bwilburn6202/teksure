import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cat } from 'lucide-react';

const APPS = [
  { name: 'Cat Manager', cost: 'FREE', best: 'Health, vaccines, vet visits.', good: 'Best tracking.' },
  { name: '11Pets', cost: 'FREE / $5/mo', best: 'Comprehensive care.', good: 'Best comprehensive.' },
  { name: 'PetDesk', cost: 'FREE', best: 'Vet appointments + reminders.', good: 'Best vet.' },
  { name: 'Whisker', cost: 'FREE', best: 'Litter Robot + Felaqua tracking.', good: 'Best smart.' },
  { name: 'Apple Health', cost: 'FREE', best: 'Pet medication reminders.', good: 'Best simple.' },
];

export default function CatCareApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cat Care Apps for Seniors | TekSure" description="Cat care apps for senior owners. Plain-English picker." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cat Care Apps</h1>
          <p className="text-lg text-muted-foreground">Track health. Don&apos;t miss anything.</p>
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
            <h2 className="font-bold text-xl mb-3">Smart cat tech</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Litter Robot</strong> — auto-cleans ($600).</li>
              <li><strong>Petlibro feeders</strong> — automatic.</li>
              <li><strong>Petcube cam</strong> — watch from phone.</li>
              <li><strong>SureFeed microchip</strong> — multi-cat homes.</li>
              <li><strong>FeedFlex water fountain</strong>.</li>
              <li>Tech-help senior caretakers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior cat health</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Watch weight loss — first sign illness.</li>
              <li>Note water drinking changes.</li>
              <li>Check litter box habits.</li>
              <li>Vet check yearly (twice if 10+).</li>
              <li>Dental exams.</li>
              <li>Senior cat food after age 7.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cat behavior signs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hiding more = ill / anxious.</li>
              <li>Aggression = pain.</li>
              <li>Excessive grooming = stress.</li>
              <li>Loss of appetite = serious.</li>
              <li>Vomiting more than monthly = vet.</li>
              <li>Photos help vet diagnose.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Money-savers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Chewy auto-ship — 5% off + free over $49.</li>
              <li>Costco Kirkland Cat Food — quality + cheap.</li>
              <li>Pet insurance starts $15/mo.</li>
              <li>Wholesale pet pharmacies.</li>
              <li>GoodRx for pet meds.</li>
              <li>Free vaccine clinics — Petco events.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online vet help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Vetster</strong> — video vet $40-60.</li>
              <li><strong>Pawp</strong> — $24/mo unlimited.</li>
              <li><strong>FirstVet</strong> — text-based.</li>
              <li>Skip transport stress.</li>
              <li>Avoid Google diagnoses.</li>
              <li>Real cat may need clinic.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Fostering for seniors</h3>
            <p className="text-sm text-muted-foreground">Senior cats need senior owners — perfect fit. Local shelter foster programs free food + medical care. Senior cats calm + cuddly. Companion benefits seniors mentally + physically. Adopt-a-Cat month — June. Save a life + gain a friend.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
