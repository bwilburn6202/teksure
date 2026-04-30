import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

const PHONES = [
  { name: 'Lively Jitterbug Smart 4', cost: '$150 + $20-50/mo', best: 'Senior-specific. Big icons, simple UI. Urgent Response button.', good: 'Best senior smartphone.' },
  { name: 'Lively Jitterbug Flip 2', cost: '$100 + $20-50/mo', best: 'Flip phone. Big buttons, big screen. No internet by default.', good: 'Best simple flip.' },
  { name: 'Doro 7060 / 8050', cost: '$100-200', best: 'European brand for seniors. Hearing-aid compatible.', good: 'Best for hearing aids.' },
  { name: 'iPhone SE + simplified setup', cost: '$429', best: 'Apple&apos;s cheapest iPhone. Set up in "simple mode" — big icons, easy navigation.', good: 'Best familiar brand.' },
  { name: 'Light Phone III', cost: '$799', best: 'Calls + texts + maps + music ONLY. No internet, no apps, no scrolling.', good: 'Best minimalist.' },
];

export default function SimplePhonesForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Simple Phones for Seniors | TekSure" description="Jitterbug, Doro, Light Phone, simple iPhone. Plain-English picks for senior phones with big buttons + clear UI." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Simple Phones for Seniors</h1>
          <p className="text-lg text-muted-foreground">Big buttons. Big text. Just calls.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PHONES.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Configure regular phone for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Display → Text Size → biggest.</li>
              <li>Bold Text ON.</li>
              <li>Display Zoom → "Larger Text".</li>
              <li>Reduce Motion ON.</li>
              <li>Increase Contrast ON.</li>
              <li>Hearing aid pairing if needed.</li>
              <li>Add big-icon launcher for Android (Big Launcher app, free).</li>
              <li>Pin only essential apps to home screen — Phone, Messages, Photos, Camera.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why iPhone SE is best for many</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Familiar Apple brand most know.</li>
              <li>Plenty of accessibility settings.</li>
              <li>Family already on iPhone — FaceTime, iMessage easy.</li>
              <li>Larger phone — easier to hold than tiny flip phones.</li>
              <li>Use as needed — calls only OR full smartphone later.</li>
              <li>Apple Watch pairs as fall detector.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best gift</h3>
            <p className="text-sm text-muted-foreground">If grandparent struggles with phone — DON&apos;T just buy a simple replacement. SETUP and DELIVER it ready-to-use. Pre-load contacts, pre-configure all settings, pre-install apps. 2 hours of work — months of usability.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
