import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

export default function CarRepairFinder() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Find an Honest Car Mechanic | TekSure" description="Avoid getting ripped off at the auto shop. Plain-English picks for finding a trusted local mechanic and fair price estimates." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Find an Honest Mechanic</h1>
          <p className="text-lg text-muted-foreground">Stop getting ripped off at the shop.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best free tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>RepairPal.com</strong> — type your car + repair. Get a fair-price range for your zip code. Free.</li>
              <li><strong>RepairPal Certified Shop locator</strong> — only certified shops. Pre-screened for honesty + fair pricing.</li>
              <li><strong>Yelp / Google Reviews</strong> — read reviews. Look for ones with photos.</li>
              <li><strong>Better Business Bureau</strong> — check for complaints.</li>
              <li><strong>AAA Approved Auto Repair</strong> — AAA members get pre-screened shops.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get 3 quotes</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>For any repair over $300, get 3 written quotes.</li>
              <li>Email or text photos of any "needed" parts they show you.</li>
              <li>Quotes should match within 20% of each other.</li>
              <li>If one is way higher — they&apos;re padding. Skip them.</li>
              <li>If one is way lower — they may use cheap parts. Ask what brand.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common rip-offs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"Engine flush"</strong> — almost never needed. $100-200 padding.</li>
              <li><strong>"Fuel injection cleaning"</strong> — modern cars don&apos;t need it. $80-200 padding.</li>
              <li><strong>"Replace cabin air filter"</strong> — $30 part shops charge $100+. Buy on Amazon, change yourself in 2 min.</li>
              <li><strong>"Differential service"</strong> — only every 60,000 miles. They&apos;ll suggest at every visit.</li>
              <li><strong>"Coolant flush"</strong> — only every 100,000 miles or per manual. Not annually.</li>
              <li><strong>Battery upsell</strong> — most batteries last 4-6 years. Walmart and Costco install for free with battery purchase.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Honest mechanic — green flags</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Shows you the broken part. Lets you keep it.</li>
              <li>Explains repair without sales pressure.</li>
              <li>Written estimate before starting work.</li>
              <li>Calls before doing extra work over $100.</li>
              <li>Long-time same-staff shop (years, not months).</li>
              <li>Reasonable pricing matches RepairPal range.</li>
              <li>Won&apos;t add work — refers to specialist when needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Maintenance schedule (skip the salesman)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Oil change</strong> — every 5,000-7,500 miles for synthetic. Every 3,000 only on very old cars.</li>
              <li><strong>Tire rotation</strong> — every 6,000-7,500 miles. Free at Costco, Sam&apos;s, Discount Tire if you bought tires there.</li>
              <li><strong>Brake pads</strong> — typically every 30,000-70,000 miles depending on driving.</li>
              <li><strong>Air filter</strong> — every 15,000-30,000 miles.</li>
              <li>Open your owner&apos;s manual — real schedule is in the maintenance section.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free oil-change inspection trick</h3>
            <p className="text-sm text-muted-foreground">When the oil-change shop tries to upsell you a $400 repair: politely thank them, drive to RepairPal.com, get a fair price. Then call your trusted mechanic for a second opinion. Many "urgent" repairs aren&apos;t urgent.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
