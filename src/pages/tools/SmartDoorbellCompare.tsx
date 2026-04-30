import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DoorOpen } from 'lucide-react';

const BELLS = [
  { name: 'Ring Video Doorbell (Plus)', cost: '$100-180 + $5/mo (optional)', best: 'Most popular. Easy install. Owned by Amazon. Subscription unlocks recordings.', good: 'Best overall.' },
  { name: 'Nest Doorbell (battery or wired)', cost: '$180-280 + $8/mo (optional)', best: 'Smart Google AI knows packages, people, animals. Free 3-hour event history without subscription.', good: 'Best free tier.' },
  { name: 'Eufy Video Doorbell', cost: '$160-260, no monthly', best: 'No subscription. Records to local memory. Solid hardware.', good: 'Best no-fee.' },
  { name: 'Arlo Essential', cost: '$100-150 + $5/mo', best: 'Strong battery life. Good if you also have Arlo cameras.', good: 'Best Arlo ecosystem.' },
  { name: 'Wyze Video Doorbell', cost: '$30-60', best: 'Cheapest brand-name doorbell. 14 days free recording. Decent video.', good: 'Best budget.' },
];

export default function SmartDoorbellCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Doorbell Compared — Ring, Nest, Eufy | TekSure" description="See who&apos;s at the door from your phone. Plain-English picks for video doorbells with and without subscription fees." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DoorOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Doorbell Compare</h1>
          <p className="text-lg text-muted-foreground">See and talk to whoever&apos;s at the door.</p>
        </div>

        <div className="space-y-3 mb-6">
          {BELLS.map(b => (
            <Card key={b.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{b.name}</h3>
                  <span className="text-sm font-semibold text-primary">{b.cost}</span>
                </div>
                <p className="text-sm">{b.best}</p>
                <p className="text-sm text-muted-foreground">{b.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why bother</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>See who&apos;s at the door</strong> from anywhere — phone, tablet, watch.</li>
              <li><strong>Talk to delivery drivers</strong> — "leave it on the porch please".</li>
              <li><strong>Scare off strangers</strong> — "Can I help you?" through speaker.</li>
              <li><strong>Catch porch pirates</strong> — recorded video helps police.</li>
              <li><strong>Don&apos;t open door for strangers</strong> — talk to them first through phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Battery vs wired</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Battery</strong> — easy install (3 screws). Charge every 2-6 months. Most people pick this.</li>
              <li><strong>Wired</strong> — uses existing doorbell wires. Always on. No charging. Needs minor electrical knowledge or installer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Subscription gotcha</h2>
            <p className="text-sm">Most doorbells need a $3-10/month subscription to:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Save video clips longer than 3-24 hours.</li>
              <li>Watch recordings (otherwise just live view).</li>
              <li>Use facial recognition.</li>
              <li>Multiple cameras one bill.</li>
            </ul>
            <p className="text-sm mt-3">Eufy and some Wyze stay free, with local storage. Trade-off: less cloud security.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly setup</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Have a tech-savvy family member do the wifi setup.</li>
              <li>Install on phone. Test "answer doorbell" once.</li>
              <li>Set up "snooze" if you don&apos;t want notifications during nap (1-12 hours).</li>
              <li>Add family members to the app — they get notifications too. Helps when you&apos;re away.</li>
              <li>Add a smart speaker (Echo, Nest Hub) — announces "Someone&apos;s at the front door" out loud.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Privacy note</h3>
            <p className="text-sm text-muted-foreground">Ring shares footage with police on request, sometimes without notifying you. If that bothers you, Eufy or Wyze (local storage) are safer choices. All doorbells should follow local laws — don&apos;t aim camera at neighbor&apos;s yard.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
