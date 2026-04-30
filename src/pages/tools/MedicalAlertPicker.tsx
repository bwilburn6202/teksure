import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Siren } from 'lucide-react';

const PICKS = [
  { name: 'Lively Mobile Plus', price: '$25-40/month', best: 'Senior-focused. Walks you through setup. Pendant or wristband. GPS for outside the home.', good: 'Strong customer service. No long-term contract.' },
  { name: 'Bay Alarm Medical', price: '$30/month + $80 device', best: 'Solid in-home option. Some plans include a smartwatch. Often top-rated for service.', good: 'Better Business Bureau A+, transparent pricing.' },
  { name: 'Philips Lifeline', price: '$30-50/month + $50-100 setup', best: 'Famous "Help, I\'ve fallen" brand. Auto fall detection on premium plans.', good: 'Long history, trusted but pricier than newer options.' },
  { name: 'MobileHelp', price: '$20-50/month', best: 'Mobile and home options. Free spouse coverage on some plans.', good: 'Often runs deals — no activation fee, free shipping.' },
  { name: 'Medical Guardian', price: '$30-50/month', best: 'Multiple device types — pendant, watch, GPS for car. Some plans include caregiver app.', good: 'Strong Wi-Fi/cellular options.' },
  { name: 'Apple Watch (Series 4+) + iPhone', price: '$300+ watch one-time', best: 'Auto fall detection (calls 911 + family). Heart monitoring. Looks like a regular watch — many seniors prefer this to a pendant.', good: 'Best modern alternative — no monthly fee for the SOS feature.' },
];

export default function MedicalAlertPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medical Alert Pendant Picker — Lifeline, Lively, MobileHelp | TekSure" description="Compare medical alert systems. Pendants vs. watches vs. Apple Watch. Plain-English picks with real costs and what they actually cover." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Siren className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medical Alert Picker</h1>
          <p className="text-lg text-muted-foreground">"Help, I\'ve fallen" — devices that get you help fast.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Two basic types</h2>
            <ul className="text-sm list-disc pl-5">
              <li><strong>Home base + pendant</strong> — works inside the home. Cheapest. Won\'t help you if you fall in the yard or store.</li>
              <li><strong>Mobile / GPS pendant</strong> — works anywhere with cell signal. About $5-10/month more than home-only.</li>
              <li><strong>Smartwatch (Apple, Galaxy)</strong> — newer alternative. Many features built in.</li>
            </ul>
            <p className="text-sm mt-2 font-semibold">Always pick mobile if you ever go outside or drive.</p>
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
                <p className="text-sm mb-1">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Features to look for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Automatic fall detection</strong> — calls help even if you can\'t press the button. Worth $5-10/month extra.</li>
              <li><strong>2-way voice</strong> — talk to the operator through the pendant or base.</li>
              <li><strong>Battery life</strong> — pendant should last 5+ days; base unit should have backup battery.</li>
              <li><strong>Waterproof</strong> — many falls happen in the bathroom.</li>
              <li><strong>GPS location</strong> — operators know exactly where you are when seconds matter.</li>
              <li><strong>No contract</strong> — month-to-month means easy to cancel.</li>
              <li><strong>Caregiver app</strong> — family can check device status, get alerts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Watch as a real alternative</h2>
            <p className="text-sm mb-2">Apple Watch Series 4 and newer have:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Fall detection</strong> — calls 911 + emergency contacts if you don\'t move for 1 minute after a fall.</li>
              <li><strong>Crash detection</strong> (Series 8+) — detects car accidents.</li>
              <li><strong>Emergency SOS via satellite</strong> — works with no cell service (Series 8+ paired with iPhone 14+).</li>
              <li><strong>Heart rate alerts</strong> — high, low, irregular rhythm.</li>
              <li><strong>EKG</strong> — 30-second test on demand.</li>
              <li>$300+ watch + $5-10/month cellular plan = total monthly cost similar to traditional pendant. AND it\'s a watch.</li>
            </ul>
            <p className="text-sm mt-2 bg-muted/50 p-3 rounded">Many seniors who refused a "pendant" wear an Apple Watch happily — it doesn\'t signal "elderly".</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Insurance / Medicare</h3>
            <p className="text-sm text-muted-foreground">Original Medicare does NOT cover medical alerts. Many Medicare Advantage plans do — call your plan to ask. Some long-term care insurance and Medicaid waivers cover it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
