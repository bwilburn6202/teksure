import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const APPS = [
  { name: 'OurTime', cost: '$30/mo', best: 'Specifically 50+. Largest senior dating user base.', good: 'Best dedicated.' },
  { name: 'SilverSingles', cost: '$28/mo', best: 'Personality-based matching. 50+. Higher quality profiles.', good: 'Best personality match.' },
  { name: 'Match.com', cost: '$30/mo', best: 'Largest mainstream. Filter by age. Mix of ages.', good: 'Best variety.' },
  { name: 'eHarmony', cost: '$30/mo', best: 'Long surveys, deeper matches. For serious relationship-seekers.', good: 'Best for long-term.' },
  { name: 'Bumble', cost: 'FREE / $20/mo', best: 'Women message first. Many seniors active. Free works.', good: 'Best free option.' },
  { name: 'Stitch', cost: '$15/mo', best: '50+ friendship + dating. Verified profiles. Smaller, quality.', good: 'Best for friendship too.' },
];

export default function SeniorDatingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Dating Apps Compared | TekSure" description="OurTime, SilverSingles, Match. Plain-English picks for senior dating apps + how to spot real profiles vs scammers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Dating Apps</h1>
          <p className="text-lg text-muted-foreground">It&apos;s 2026. Online dating is normal at 60+.</p>
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
              <li>Real, recent photos. No old wedding pictures.</li>
              <li>Smile in main photo.</li>
              <li>Photo of you doing something — hiking, golfing, gardening.</li>
              <li>Bio mentions interests + what you&apos;re looking for. Be specific.</li>
              <li>NO mention of late spouse on profile (mention later if comfortable).</li>
              <li>Don&apos;t share full last name, address, or workplace.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Be honest about age — most who lie get caught at first meet.</li>
              <li>Health: be realistic about mobility, hearing, etc. Right matches accept.</li>
              <li>Companionship vs marriage — discuss early.</li>
              <li>Adult kids&apos; opinions vary — your life, your choice.</li>
              <li>Take your time. No urgency.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Real meeting</h3>
            <p className="text-sm text-muted-foreground">Move from app → video chat → public coffee meeting fast (within 1-2 weeks). People who delay meeting are usually scammers OR catfishing. See /tools/scam-dating-flags.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
