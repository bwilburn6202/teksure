import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

const LOCKS = [
  { name: 'Schlage Encode', cost: '$200-280', best: 'Most reliable. Built-in WiFi. Works with Alexa/Google. Senior favorite.', good: 'Best overall.' },
  { name: 'August Wi-Fi Smart Lock', cost: '$150-230', best: 'Goes inside existing deadbolt. Use your existing key too.', good: 'Best non-replacement.' },
  { name: 'Yale Assure SL', cost: '$220-280', best: 'Touchscreen, no keyhole. Works with multiple smart hubs.', good: 'Best touchscreen.' },
  { name: 'Kwikset Halo', cost: '$160-210', best: 'Cheapest WiFi lock. Decent.', good: 'Best budget WiFi.' },
  { name: 'Lockly Vision Elite', cost: '$300-400', best: 'Lock + camera + doorbell in one.', good: 'Best multi-purpose.' },
];

export default function SmartLockGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Lock Picks for Seniors | TekSure" description="Schlage Encode, August, Yale. Plain-English picks for senior-friendly smart locks. Never lose keys again." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Lock Guide</h1>
          <p className="text-lg text-muted-foreground">No more lost keys.</p>
        </div>

        <div className="space-y-3 mb-6">
          {LOCKS.map(l => (
            <Card key={l.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{l.name}</h3>
                  <span className="text-sm font-semibold text-primary">{l.cost}</span>
                </div>
                <p className="text-sm">{l.best}</p>
                <p className="text-sm text-muted-foreground">{l.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors love them</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No more "did I lock the door?" — check from phone.</li>
              <li>Lock remotely if you forgot.</li>
              <li>Codes for caregiver / dog walker / cleaner — change anytime.</li>
              <li>One-time codes for delivery driver.</li>
              <li>Auto-lock after X seconds — never accidentally unlocked.</li>
              <li>Auto-unlock when you arrive home.</li>
              <li>Log of who came in + when.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Install in 30 minutes</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Remove old deadbolt (4 screws).</li>
              <li>Install new lock per instructions.</li>
              <li>Connect to wifi via app.</li>
              <li>Set master code.</li>
              <li>Add additional codes.</li>
              <li>Test — lock + unlock.</li>
              <li>Or hire handyman/locksmith for $50-100.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Battery + backup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most run on AA batteries — 6-12 months.</li>
              <li>Low battery = warns weeks ahead.</li>
              <li>Backup keyhole on most models — physical key works in emergency.</li>
              <li>Some have 9V emergency contact (touch a 9V battery to wake dead lock).</li>
              <li>NEVER buy a smart lock without a backup method.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Insurance discount</h3>
            <p className="text-sm text-muted-foreground">Many homeowner&apos;s policies give 5-10% discount for monitored smart locks + doorbells. Worth filing the form. Often covers cost of locks within 2 years.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
