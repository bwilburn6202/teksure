import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Warehouse } from 'lucide-react';

const PICKS = [
  { name: 'Chamberlain B6753T (myQ-built-in)', price: '$300-400', best: 'Most popular smart garage door opener. Quiet belt drive. App control + Alexa/Google.', good: 'Best new install.' },
  { name: 'LiftMaster 8550WLB', price: '$500', best: 'Premium version. Wall mount (jackshaft). Quieter, more reliable.', good: 'Best premium.' },
  { name: 'myQ Smart Hub (add to existing opener)', price: '$30-50', best: 'Adds smart features to your EXISTING opener. Don\'t replace the opener.', good: 'Best upgrade for existing.' },
  { name: 'Tailwind iQ3', price: '$100', best: 'Smart hub alternative to myQ. No subscription pressure.', good: 'Privacy-conscious option.' },
  { name: 'Genie StealthDrive Connect', price: '$300', best: 'Direct competitor to Chamberlain. Quieter belt.', good: 'Genie alternative.' },
];

export default function SmartGarageOpener() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Garage Door Opener Picker | TekSure" description="Open the garage from your phone. Plain-English picks for smart garage door openers and the cheap myQ hub upgrade for existing openers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Warehouse className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Garage Opener</h1>
          <p className="text-lg text-muted-foreground">Open garage from phone, anywhere.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why senior-friendly</h2>
            <ul className="text-sm list-disc pl-5">
              <li>"Did I close the garage?" answered from anywhere.</li>
              <li>Open for FedEx / Amazon delivery without unlocking front door.</li>
              <li>Open for handyman, cleaner, family without giving them remote.</li>
              <li>Auto-close at sunset.</li>
              <li>Notifies if left open more than 15 minutes.</li>
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
            <h2 className="font-bold text-xl mb-3">Easiest path</h2>
            <p className="text-sm">If your existing opener was made after ~2010, get a <strong>myQ Smart Hub</strong> ($30-50). Mounts to ceiling. Connects to existing opener wires. App-controlled in 15 minutes. No need to replace the whole opener for $400.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Note on Amazon Key (in-garage delivery)</h2>
            <p className="text-sm">myQ partners with Amazon Key — Amazon driver opens your garage, places package inside, closes garage. Free for Prime members. Some find this magic, others find it creepy. Optional, easy to disable.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For new install</h3>
            <p className="text-sm text-muted-foreground">If buying a new opener, get the Chamberlain B6753T or similar belt-drive WITH built-in myQ. Quieter than chain drives, smart features included. Lasts 15+ years.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
