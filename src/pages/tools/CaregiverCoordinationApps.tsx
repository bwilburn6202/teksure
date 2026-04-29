import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartHandshake } from 'lucide-react';

const APPS = [
  { name: 'CaringBridge', cost: 'FREE (donations welcome)', best: 'Free private blog for someone with a major illness. One place to update friends and family — no Facebook needed.', good: 'Best for cancer treatment, surgeries, hospice.' },
  { name: 'Lotsa Helping Hands', cost: 'FREE', best: 'Calendar — friends sign up for meals, rides to chemo, errands. Coordinator manages the schedule.', good: 'Best when many people want to help.' },
  { name: 'Meal Train', cost: 'FREE; $10 one-time Plus', best: 'Most popular for organizing meal deliveries. Friends sign up for nights, see preferences/allergies.', good: 'Use after surgeries, new babies, illnesses.' },
  { name: 'CareZone', cost: 'FREE', best: 'Track meds, scan labels, log doctor visits. Share with family caregivers.', good: 'Best for the day-to-day med tracking.' },
  { name: 'PostHope', cost: 'FREE', best: 'Similar to CaringBridge. Some prefer its simpler interface.', good: 'Alternative to CaringBridge.' },
  { name: 'Tigerlily / Cake', cost: 'Free / Cake $99/yr', best: 'End-of-life planning — wishes, contacts, important documents in one place.', good: 'For "in case the worst happens" planning.' },
];

export default function CaregiverCoordinationApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Caregiver Coordination Apps — CaringBridge, Meal Train | TekSure" description="When a loved one is sick, coordinate help and updates without phone tag. Free apps for meal trains, status updates, and caregiver tracking." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartHandshake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Caregiver Coordination Apps</h1>
          <p className="text-lg text-muted-foreground">When a loved one is sick — accept help and keep family informed.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why these matter</h2>
            <p className="text-sm">A serious illness brings dozens of "let me know if you need anything!" calls. Apps like these turn good intentions into real help — meals delivered, rides arranged, family kept up to date — without one exhausted person fielding 50 calls a day.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (CaringBridge as example)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>caringbridge.org</strong>.</li>
              <li>Click "Start a Site". Free.</li>
              <li>Pick a privacy level — usually "Friends and Family" (link-only access).</li>
              <li>Write a first update.</li>
              <li>Send the link to family by text/email.</li>
              <li>Update once a day or once a week. People see the news without needing to call.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When friends say "let me know if you need anything"</h2>
            <p className="text-sm">Send them the Meal Train or Lotsa link. They sign up for what they\'re willing to do. You get the help without having to ask, schedule, or remember who promised what.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For caregivers — yourself first</h3>
            <p className="text-sm text-muted-foreground">Caregiver burnout is real and serious. Use these apps to OFFLOAD work, not just to update. Accept the meals. Take the offered rides. Schedule a 30-minute walk for yourself. Recover so you can keep showing up.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
