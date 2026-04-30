import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const APPS = [
  { name: 'OurTime', cost: '$30-40/mo', best: '50+ only. Largest senior dating app.', good: 'Best overall.' },
  { name: 'SeniorMatch', cost: '$30/mo', best: '50+ only. Active community.', good: 'Best community.' },
  { name: 'eHarmony', cost: '$40-65/mo', best: 'Long-term focused. Quality matches.', good: 'Best for serious.' },
  { name: 'Match.com', cost: '$30-40/mo', best: 'All ages. Senior section large.', good: 'Best general.' },
  { name: 'Silver Singles', cost: '$30-40/mo', best: '50+ only. Personality-based matching.', good: 'Best personality.' },
];

export default function DatingAfter60Guide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dating After 60 | TekSure" description="Senior dating apps + safety. Plain-English guide for finding love after 60." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dating After 60</h1>
          <p className="text-lg text-muted-foreground">Love finds you when you stop looking. But also — apps work.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Profile tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Recent photos only — no &quot;30 years ago&quot;.</li>
              <li>5-6 photos: face, full body, hobby, with friends.</li>
              <li>NO sunglasses in main photo.</li>
              <li>Specific hobbies — &quot;loves hiking&quot; better than &quot;outdoorsy&quot;.</li>
              <li>What you want — long term, casual, friends.</li>
              <li>Spell-check.</li>
              <li>Show interests, not just looks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Romance scam red flags</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Moves to texting/email FAST (off platform).</li>
              <li>&quot;Working overseas&quot; — military, oil rig, doctor abroad.</li>
              <li>&quot;Can&apos;t video call&quot; — always excuses.</li>
              <li>Asks for ANY money. Not a penny. Ever.</li>
              <li>Talks marriage/love within weeks.</li>
              <li>Crisis stories needing emergency help.</li>
              <li>$500M+ lost yearly to romance scams. See /tools/romance-scam-defense.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First date safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Public place — coffee shop, restaurant.</li>
              <li>Tell friend/family details + check-in time.</li>
              <li>Drive yourself.</li>
              <li>Don&apos;t share home address.</li>
              <li>Trust gut — bail if uncomfortable.</li>
              <li>Reverse image search profile photo (Google Images).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Beyond apps</h3>
            <p className="text-sm text-muted-foreground">Many seniors meet through hobby groups (hiking, dancing, religious community, volunteering, classes) — no apps needed. AARP Magazine has monthly dating column. Senior centers often host singles events. In-person = healthier than apps.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
