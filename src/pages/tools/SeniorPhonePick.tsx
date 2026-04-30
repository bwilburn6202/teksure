import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

const PICKS = [
  { name: 'iPhone SE (2024+)', price: '$430-600', best: 'Cheapest current iPhone. Touch ID (fingerprint) which many seniors prefer to Face ID. Smaller, easier to grip.', good: 'Best entry to Apple world.' },
  { name: 'iPhone 15 / 16', price: '$700-900', best: 'Standard iPhone. Big screen, great camera, Face ID, USB-C now.', good: 'Best for most seniors.' },
  { name: 'iPhone Plus / Pro Max', price: '$900-1,300', best: 'Bigger screen — easier to read for low vision. Bigger battery.', good: 'Worth the extra for visibility.' },
  { name: 'Samsung Galaxy A35 / A55', price: '$300-500', best: 'Best mid-range Android. Big screen, good cameras, fingerprint reader.', good: 'Best Android budget pick.' },
  { name: 'Google Pixel 8a', price: '$500', best: 'Cleanest Android experience, best camera at this price, gets updates 7 years.', good: 'Top recommended Android for seniors.' },
  { name: 'Lively Smart (formerly GreatCall)', price: '$150 + service', best: 'Made FOR seniors. Big icons, urgent response button, simple menu. Costs $20/month with 5Star button + caregiver app.', good: 'Best for tech-shy seniors.' },
  { name: 'Jitterbug Flip2', price: '$100 + service', best: 'Flip phone made for seniors. Big buttons, big screen text, urgent button. NO smartphone — calls and texts only.', good: 'For those who don\'t want internet on phone at all.' },
];

export default function SeniorPhonePick() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Best Phone for Seniors — iPhone, Galaxy, Lively | TekSure" description="Buying a phone? Plain-English picks for seniors — iPhone, Android, simplified senior phones. What suits which person." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Phone Picker</h1>
          <p className="text-lg text-muted-foreground">From iPhone to senior-specific. Match person to phone.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Quick guide</h2>
            <ul className="text-sm list-disc pl-5">
              <li><strong>Family on iPhone?</strong> Get an iPhone — FaceTime, iMessage, AirDrop just work.</li>
              <li><strong>Tight budget?</strong> Refurbished iPhone SE or Samsung A35.</li>
              <li><strong>Tech-shy?</strong> Lively Smart or Jitterbug Flip2.</li>
              <li><strong>Want all features but big screen?</strong> iPhone Plus or Galaxy S Ultra.</li>
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
                <p className="text-sm mb-1">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save 30-50% — refurbished</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Apple Certified Refurbished</strong> — same warranty, $100-300 off.</li>
              <li><strong>Verizon, AT&T, T-Mobile certified pre-owned</strong> — direct from carrier.</li>
              <li><strong>Amazon Renewed</strong> — graded used phones.</li>
              <li><strong>Back Market / Swappa</strong> — independent refurbished marketplaces.</li>
              <li><strong>Costco</strong> — sometimes has phone deals with extended warranty.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific features to check</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Big text + bold</strong> — set in display settings (works on any iPhone or Android).</li>
              <li><strong>Easy mode</strong> on Samsung — bigger icons, simpler home screen.</li>
              <li><strong>Voice Control / Siri</strong> — hands-free.</li>
              <li><strong>Emergency SOS</strong> — every modern phone has it. (See our Emergency SOS Setup tool.)</li>
              <li><strong>Hearing aid pairing (MFI hearing aids)</strong> — works best on iPhone.</li>
              <li><strong>Fall detection</strong> — Apple Watch + iPhone, or some Samsung Galaxy + Galaxy Watch.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Our pick for most seniors</h3>
            <p className="text-sm text-muted-foreground"><strong>iPhone SE refurbished from Apple ($350-450)</strong> if budget is tight. <strong>iPhone 15 from Verizon/AT&T/T-Mobile</strong> on a senior plan if more comfortable. Refurbished/used Galaxy A55 ($250-400) for Android families. Avoid the absolute cheapest no-name Android phones — slow within a year.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
