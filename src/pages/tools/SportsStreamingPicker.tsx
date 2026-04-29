import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

const PICKS = [
  { name: 'YouTube TV', cost: '$83/month', best: 'Most popular cable replacement. ESPN, ABC, FOX, NBC, regional sports. NFL Sunday Ticket add-on ($350/yr).', good: 'Best overall for cord-cutters.' },
  { name: 'Hulu + Live TV', cost: '$83/month with Disney+', best: 'Includes Disney+ + ESPN+ + Live TV. ESPN coverage included.', good: 'Best Disney bundle value.' },
  { name: 'FuboTV', cost: '$80-100/month', best: 'Most sports channels. Strong international (soccer).', good: 'Best for soccer/specialty sports.' },
  { name: 'MLB.tv', cost: '$150/year', best: 'Every out-of-market MLB game. Cheap if you watch lots of baseball.', good: 'Best for baseball fans.' },
  { name: 'NFL+ / NFL Sunday Ticket on YouTube', cost: '$350/year', best: 'Out-of-market NFL games. Otherwise local games are free over the air.', good: 'For die-hard fans only.' },
  { name: 'NBA League Pass', cost: '$15/month', best: 'Most NBA games. Cheaper than NFL.', good: 'Best for basketball.' },
  { name: 'Antenna for local sports', cost: '$30 one-time', best: 'NFL Sunday games on FOX/CBS, March Madness on TBS/CBS, World Series on FOX. ALL FREE.', good: 'Best free sports — see Antenna TV Setup.' },
];

export default function SportsStreamingPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sports Streaming Picker — YouTube TV, Fubo, MLB | TekSure" description="Watch the games without cable. Plain-English picks for the best sports streaming services and league-specific subscriptions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Trophy className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sports Streaming Picker</h1>
          <p className="text-lg text-muted-foreground">Watch the games. Cancel cable.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
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
            <h2 className="font-bold text-xl mb-3">Math vs cable</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Cable with sports tier: $150-200/month.</li>
              <li>YouTube TV alone: $83/month. Saves $800-1,400/year.</li>
              <li>Antenna + ESPN+ ($11/mo): about $11/month — covers most casual fans.</li>
              <li>For baseball fans only: MLB.tv $150/year covers ALL games out of market.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Specific sport tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>NFL fan, ALL teams</strong> — YouTube TV + NFL Sunday Ticket ($430/year extra).</li>
              <li><strong>NFL fan, just my team</strong> — antenna gets local CBS/FOX. + ESPN+ for Monday Night Football.</li>
              <li><strong>NBA fan, ALL teams</strong> — YouTube TV + NBA League Pass.</li>
              <li><strong>MLB fan</strong> — antenna for local team if FOX/local. MLB.tv ($150/year) for ALL out of market.</li>
              <li><strong>College football</strong> — ESPN+ has many lower-tier games. Big games on ABC/CBS via antenna or live TV.</li>
              <li><strong>Soccer</strong> — Fubo or Peacock (Premier League).</li>
              <li><strong>Hockey</strong> — ESPN+ for NHL.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip — pause when sport is off-season</h3>
            <p className="text-sm text-muted-foreground">YouTube TV and Hulu + Live let you PAUSE for 1-3 months free. NFL fan paying for live TV in May? Pause until August. Saves $250+ per year.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
