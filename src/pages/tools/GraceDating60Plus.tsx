import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartHandshake } from 'lucide-react';

export default function GraceDating60Plus() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dating with Grace at 60+ | TekSure" description="Practical, kind guidance for dating in your 60s, 70s, 80s. Plain-English tips for first dates, intimacy, and finding companionship." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartHandshake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dating with Grace at 60+</h1>
          <p className="text-lg text-muted-foreground">Different from 25. Often better.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First date tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Coffee shop or restaurant during day = safer + less pressure.</li>
              <li>Drive yourself. Don&apos;t accept rides on first date.</li>
              <li>Tell a friend / family member — share location via phone.</li>
              <li>1 hour max for first meet. Build from there.</li>
              <li>Pay your share. Avoid awkward power dynamic.</li>
              <li>If they&apos;re creepy, leave. "I have to go" is enough.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Intimacy in 60+</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>STDs are rising in 60+. Use protection until both tested.</li>
              <li>Many medications affect sexual function. Doctor can help.</li>
              <li>Lubrication products are normal + helpful after menopause.</li>
              <li>Take time. No rush. Communicate openly.</li>
              <li>Be honest about your body, conditions, what works.</li>
              <li>Right partner accepts you as you are.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to look for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Kindness</strong> — to waiters, strangers. Treats those they don&apos;t need to impress well.</li>
              <li><strong>Honesty</strong> — about health, finances, family, past.</li>
              <li><strong>Curiosity</strong> — about you, the world, ideas.</li>
              <li><strong>Healthy adult kids relationship</strong> — flag if estranged from everyone.</li>
              <li><strong>Hobbies + friends</strong> — has full life, not looking for you to fill it all.</li>
              <li><strong>Calm with conflict</strong> — small disagreements show character.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to avoid</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pushy about moving in / marrying fast.</li>
              <li>Money troubles within first month — early sign of asking later.</li>
              <li>Talking only about ex-spouse (positive OR negative).</li>
              <li>Different vision for retirement (homebody vs traveler).</li>
              <li>Hostility toward your family.</li>
              <li>Heavy drinking / pill use.</li>
              <li>Anyone who pressures intimacy faster than you want.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Companionship vs marriage</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many 60+ couples now choose long-term companionship without marrying.</li>
              <li>Preserves estate for kids on both sides.</li>
              <li>Keeps Social Security widow benefits intact.</li>
              <li>Less pressure than "blending" full lives.</li>
              <li>Domestic partnership / cohabitation agreement = practical legal protection.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">It&apos;s never too late</h3>
            <p className="text-sm text-muted-foreground">People find love at 65, 75, 85. The right partner adds joy without demanding everything change. Take time. Trust your gut. The wrong company is worse than no company.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
