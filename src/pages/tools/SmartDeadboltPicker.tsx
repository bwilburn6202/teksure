import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

const PICKS = [
  { name: 'August Wi-Fi Smart Lock', price: '$200', best: 'Mounts INSIDE your existing deadbolt — keeps your normal key. Auto-locks/unlocks when you arrive home.', good: 'Best for renters or those who don\'t want to swap locks.' },
  { name: 'Schlage Encode Plus', price: '$300', best: 'Replaces deadbolt entirely. Wi-Fi, keypad, key backup. Apple Home Key support (iPhone tap to unlock).', good: 'Best premium replacement.' },
  { name: 'Yale Assure Lock 2 Touch', price: '$280', best: 'Fingerprint reader. Works with Yale Access app or Apple Home.', good: 'Best fingerprint option.' },
  { name: 'Schlage Encode (basic)', price: '$220', best: 'Same brand, simpler features.', good: 'Reliable basic.' },
  { name: 'Kwikset Halo', price: '$170', best: 'Wi-Fi enabled. Keypad. Cheaper than Schlage.', good: 'Best value smart lock.' },
  { name: 'Wyze Lock', price: '$80-150', best: 'Cheap "August-style" inside-mount lock.', good: 'Cheapest decent option.' },
];

export default function SmartDeadboltPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Deadbolt Picker — August, Schlage, Yale | TekSure" description="No more keys under the mat. Plain-English picks for smart deadbolts — keypad, fingerprint, and phone-unlock options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Deadbolt Picker</h1>
          <p className="text-lg text-muted-foreground">No more keys. Senior-friendly options.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why for seniors specifically</h2>
            <ul className="text-sm list-disc pl-5">
              <li>Never locked out — code or fingerprint always works.</li>
              <li>Give grandkids a temporary code (e.g., 2-week visit) — auto-expires.</li>
              <li>Aide / cleaner gets a permanent code that you can revoke instantly.</li>
              <li>Auto-lock at night — never wonder "did I lock the door?".</li>
              <li>Notification when family arrives.</li>
              <li>Most still have a real key as backup.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Install</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Most smart deadbolts replace your existing deadbolt — same hole.</li>
              <li>Remove old deadbolt (4 screws).</li>
              <li>Drop in new deadbolt + secure.</li>
              <li>Connect to phone via app. Wi-Fi setup.</li>
              <li>Add codes for family.</li>
              <li>Total: 20-30 minutes.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch out for</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Battery life</strong> — smart locks need 4 AA batteries every 6-12 months. Set reminder.</li>
              <li><strong>Wi-Fi connection</strong> — some need a hub; others connect direct to Wi-Fi.</li>
              <li><strong>Backup key</strong> — confirm there\'s a physical key option.</li>
              <li><strong>"Auto-lock"</strong> can lock you out if you step into the yard. Set a 30-second delay.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best pick</h3>
            <p className="text-sm text-muted-foreground"><strong>Schlage Encode Plus</strong> — keypad, Wi-Fi, key backup, Apple Home Key support. Reliable, well-built. Worth $80 over Kwikset Halo for build quality.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
