import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Undo2 } from 'lucide-react';

export default function ReturnsAtCostco() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Costco Returns Mastery | TekSure" description="Costco has the best return policy in retail. Plain-English guide on what + how to return — even years later." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Undo2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Costco Returns Mastery</h1>
          <p className="text-lg text-muted-foreground">Best return policy in retail.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Costco&apos;s policy in plain English</h2>
            <p className="text-sm">"Risk-Free 100% Satisfaction Guarantee" — return ANY item, ANY time, for ANY reason, with full refund. Even years later. No receipt required (they look it up by membership card).</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Exceptions (90-day return)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Electronics — TVs, computers, cameras, printers.</li>
              <li>Major appliances — fridge, washer, dryer.</li>
              <li>Cell phones (90-day from carrier).</li>
              <li>Cigarettes, alcohol (where prohibited by law).</li>
              <li>Diamonds over 1.00 carat (need credentials).</li>
              <li>Custom-printed items.</li>
              <li>Gift cards.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to return</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Bring item to Returns counter (any Costco).</li>
              <li>Bring membership card.</li>
              <li>Receipt helps but not required.</li>
              <li>Refund to original payment method.</li>
              <li>Or store credit if can&apos;t locate.</li>
              <li>Online orders — return in store OR free pickup.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart use cases</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Half-eaten food that went bad before expected — return for refund.</li>
              <li>Furniture that didn&apos;t fit — return.</li>
              <li>Mattress 6 months in, hurts your back — return for refund.</li>
              <li>Garden tools that broke after 2 seasons — return.</li>
              <li>Half-used vitamins that don&apos;t agree with you — return.</li>
              <li>Costco doesn&apos;t question. Other retailers would.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t abuse</h2>
            <p className="text-sm">Costco tracks return patterns. Excessive returns CAN result in membership cancellation. Be reasonable. The policy exists to build trust, not for you to use it as 90-day rental service.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Membership refund</h3>
            <p className="text-sm text-muted-foreground">If Costco isn&apos;t for you, ask for full membership refund — even at end of year. They give 100% back, no fine print. Try a year. Get money back if it didn&apos;t pay off. Risk-free.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
