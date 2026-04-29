import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function FirstDateTech() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="First Date Tech Safety | TekSure" description="Share location with friend, panic button, safe meeting tips. Plain-English tech to make first dates safer for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">First Date Tech Safety</h1>
          <p className="text-lg text-muted-foreground">Use your phone to stay safe.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Share location with friend</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iPhone — Find My</strong>. Open Find My → People → Share My Location → pick friend, set 1-hour timer.</li>
              <li><strong>Android — Google Maps</strong>. Profile → Location sharing → pick friend + duration.</li>
              <li>Send "I&apos;m at [restaurant], on date with [name]" before going in.</li>
              <li>Agree on text check-in time. "If I don&apos;t text by 9 PM, call me."</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Emergency tools you already have</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iPhone Emergency SOS</strong> — hold side + volume button → calls 911 + texts emergency contacts your location.</li>
              <li><strong>Apple Watch</strong> — same. Press + hold side button.</li>
              <li><strong>Android — Emergency button</strong> — power button 5 quick presses.</li>
              <li><strong>Personal Safety app</strong> (Pixel/Samsung) — fall detection, scheduled check-ins.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Public meeting tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Coffee shop, restaurant during DAY first.</li>
              <li>Drive yourself. Park yourself.</li>
              <li>Don&apos;t share home address / workplace until trust built.</li>
              <li>Don&apos;t leave drinks unattended (even at 70+ — drink-spiking happens).</li>
              <li>Pay your half. No "let me pay" leverage.</li>
              <li>Trust your gut. Excuse yourself if uncomfortable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you feel unsafe</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tell server quietly. Many restaurants train staff for "ask for Angela" or similar code.</li>
              <li>Excuse yourself to bathroom. Call friend or Uber.</li>
              <li>Walk to a busy area. Restaurant manager. Hotel lobby.</li>
              <li>Call 911 if needed. "I don&apos;t know this person and I feel threatened."</li>
              <li>Police can escort you to your car.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After the date</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Text your friend "Home safe."</li>
              <li>Don&apos;t share full address until 3rd-4th date.</li>
              <li>Cancel location sharing.</li>
              <li>If you don&apos;t want a 2nd date — text "Thanks for meeting. I&apos;m not feeling a romantic match. Best wishes." Polite + clear.</li>
              <li>If they react angrily — block + report on dating app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">First-date phrases</h3>
            <p className="text-sm text-muted-foreground">"I&apos;m so glad we met." "I had a nice time." "I&apos;ll be in touch." None of these commit you to a 2nd date. Take time to decide. Sleep on it. Most successful 60+ couples report SLOW starts.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
