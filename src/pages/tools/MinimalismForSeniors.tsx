import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Feather } from 'lucide-react';

export default function MinimalismForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Minimalism for Seniors | TekSure" description="Less stuff = more peace. Plain-English minimalism guide for senior simple living." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Feather className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Minimalism for Seniors</h1>
          <p className="text-lg text-muted-foreground">Less stuff. More life. More money.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why now</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Less to clean / maintain.</li>
              <li>Less to dust.</li>
              <li>Easier to find things.</li>
              <li>Smaller home = lower bills + maintenance.</li>
              <li>Lighter financial load = retirement security.</li>
              <li>Less burden on heirs.</li>
              <li>Mental clarity from clearer space.</li>
              <li>Travel becomes easier.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">90/90 rule</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Used in last 90 days OR using in next 90?</li>
              <li>If no — let it go.</li>
              <li>Excludes seasonal, special items.</li>
              <li>Quick way to declutter clothes, kitchen, garage.</li>
              <li>Apply to one drawer/closet at a time.</li>
              <li>30 min/day = whole house in 3-6 months.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sentimental items hardest — take photo, donate.</li>
              <li>Multiple sets of china/crystal — keep ONE.</li>
              <li>Books — donate to library, keep favorites.</li>
              <li>Multiple TVs / electronics — donate to schools.</li>
              <li>Tools — keep what you actually use.</li>
              <li>Clothes — keep what fits NOW.</li>
              <li>Greeting cards — scan + toss.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Swedish death cleaning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Concept: declutter so kids don&apos;t have to.</li>
              <li>Book: <em>The Gentle Art of Swedish Death Cleaning</em>.</li>
              <li>Decade-long process, not panic.</li>
              <li>Tell stories of items as you sort.</li>
              <li>Give heirlooms to family NOW — see them enjoyed.</li>
              <li>Loving final gift to family.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where stuff goes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Family</strong> — ask if they want.</li>
              <li><strong>Buy Nothing groups</strong> — Facebook neighborhood.</li>
              <li><strong>Goodwill / Salvation Army</strong> — pickup available.</li>
              <li><strong>Habitat ReStore</strong> — furniture + appliances.</li>
              <li><strong>Vietnam Vets</strong> — free pickup.</li>
              <li><strong>Sell valuable items</strong> — Facebook Marketplace, eBay.</li>
              <li><strong>Estate sale</strong> — for high volume.</li>
              <li>See /tools/garage-sale-seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Digital minimalism too</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Unsubscribe from emails.</li>
              <li>Delete unused apps.</li>
              <li>Cancel unused subscriptions.</li>
              <li>Phone notifications off.</li>
              <li>Social media break.</li>
              <li>News break — feels great.</li>
              <li>Inbox zero practice.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">One in, one out</h3>
            <p className="text-sm text-muted-foreground">After decluttering — rule for life: bring something IN, take something OUT. Prevents re-accumulation. Christmas + birthday gifts = display, then donate. Give experiences instead of stuff. Live lighter forever.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
