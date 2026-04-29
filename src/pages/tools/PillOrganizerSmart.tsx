import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

const ORG = [
  { name: 'Hero Smart Dispenser', cost: '$45/mo', best: 'Auto-dispenses correct dose at correct time. Calls family if missed.', good: 'Best high-tech.' },
  { name: 'MedMinder', cost: '$40-65/mo', best: 'Locked compartments. Beep + flash + email if missed.', good: 'Best mid-tech.' },
  { name: 'Live Fine Auto Pill Dispenser', cost: '$170 one-time', best: 'No subscription. Auto-dispenses 6 doses/day.', good: 'Best no-subscription.' },
  { name: 'Weekly pill organizer', cost: '$5-25 one-time', best: 'Old-school 7-day with AM/PM. Senior pharmacy = $5.', good: 'Best simple.' },
  { name: 'Amazon Pillpack (PillPack by Amazon)', cost: 'FREE service', best: 'Pre-sorted dose-packs delivered. Each pack = one dose. Genius for complex regimens.', good: 'Best for many medications.' },
];

export default function PillOrganizerSmart() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pill Organizer Picks | TekSure" description="Hero, MedMinder, Pillpack. Plain-English picks for smart and simple pill organizers — never miss a dose." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pill Organizer Picks</h1>
          <p className="text-lg text-muted-foreground">Smart and simple options.</p>
        </div>

        <div className="space-y-3 mb-6">
          {ORG.map(o => (
            <Card key={o.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{o.name}</h3>
                  <span className="text-sm font-semibold text-primary">{o.cost}</span>
                </div>
                <p className="text-sm">{o.best}</p>
                <p className="text-sm text-muted-foreground">{o.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quick decision</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>1-3 medications</strong> — weekly pill box, $5.</li>
              <li><strong>4-7 medications</strong> — Pillpack (free) + maybe simple reminder app.</li>
              <li><strong>Memory issues</strong> — Hero or MedMinder. Worth $40-65/mo for safety.</li>
              <li><strong>Multiple times/day</strong> — Live Fine auto-dispenser ($170 once).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free reminder apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Medisafe</strong> — most popular medication app. Free + family alerts.</li>
              <li><strong>MyTherapy</strong> — German-quality, free, ad-free.</li>
              <li><strong>Round Health</strong> — simpler interface.</li>
              <li><strong>Apple Health Medications</strong> (iOS 16+) — built into Apple Health.</li>
              <li><strong>Pharmacy app reminders</strong> — CVS, Walgreens have these built-in.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Amazon Pillpack genius</h3>
            <p className="text-sm text-muted-foreground">If on 4+ medications: Pillpack by Amazon Pharmacy is free. They sort each dose into a labeled pouch. Tear open at 8 AM, swallow contents. Tear open at noon, etc. No more weekly sorting. Insurance covers normally. Delivered monthly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
