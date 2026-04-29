import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

const SVCS = [
  { name: 'Chewy Connect with a Vet', cost: 'FREE for Chewy customers / $15/visit non-customers', best: '24/7 video chat with licensed vets. Free if you order from Chewy.', good: 'Best free.' },
  { name: 'Pawp', cost: '$24/mo for entire household', best: 'Unlimited 24/7 vet chats + $3,000 emergency fund.', good: 'Best subscription.' },
  { name: 'Fuzzy', cost: '$25/mo', best: 'Unlimited live chat + scheduled video calls.', good: 'Best chat.' },
  { name: 'PetCoach (PetSmart)', cost: 'FREE for chat / $10-20 per question with vet', good: 'Free Q&amp;A from vets, vet techs.', best: 'Best for quick advice.' },
  { name: 'Vetster', cost: '$50-80/visit', best: 'Real video appointment with a licensed vet. Can prescribe in many states.', good: 'Best real visit.' },
];

export default function PetTelevetVisits() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Telehealth — See a Vet Online | TekSure" description="Skip the $200 vet visit for minor issues. Plain-English picks for free + paid pet telehealth services." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Stethoscope className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Tele-Vet Visits</h1>
          <p className="text-lg text-muted-foreground">Quick advice without a vet visit.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
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
            <h2 className="font-bold text-xl mb-3">When tele-vet works well</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Is this rash an emergency?"</li>
              <li>"Why is the cat throwing up after eating?"</li>
              <li>"Should I be worried about this lump?"</li>
              <li>"My dog ate ____ — is that toxic?"</li>
              <li>Behavioral questions (anxiety, aggression, training).</li>
              <li>Diet + nutrition advice.</li>
              <li>Refilling a routine prescription.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you NEED in-person vet</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bleeding that won&apos;t stop.</li>
              <li>Trouble breathing.</li>
              <li>Suspected broken bone.</li>
              <li>Bloated belly + retching (deadly in dogs).</li>
              <li>Hit by car, fell from height.</li>
              <li>Suspected poisoning + symptoms (vomiting, seizure, lethargy).</li>
              <li>Eye injuries.</li>
              <li>Most state laws require in-person visit before vet can prescribe.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pet poison emergency</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>ASPCA Poison Hotline</strong> — 1-888-426-4435. $95 fee but life-saving.</li>
              <li><strong>Pet Poison Helpline</strong> — 1-855-764-7661. $85 fee.</li>
              <li>Have ready: pet&apos;s weight, what they ate, how much, when.</li>
              <li>Free poisonous food list: ASPCA.org/pet-care/animal-poison-control.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Online pharmacy savings</h3>
            <p className="text-sm text-muted-foreground">For prescription refills — Chewy Pharmacy and 1800PetMeds save 30-50% vs vet office. Vet writes script, online pharmacy fills. Auto-ship for monthly meds. See /tools/online-pet-pharmacies.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
