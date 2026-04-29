import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Snowflake } from 'lucide-react';

const PICKS = [
  { name: 'EGO Power+ 24-inch (battery)', price: '$1,000-1,200', best: 'Battery-powered, two-stage. Strong as gas. Quiet, no fumes, no oil changes.', good: 'Best premium battery.' },
  { name: 'Greenworks Pro 80V', price: '$700-900', best: 'Battery alternative. Strong second pick.', good: 'Best battery value.' },
  { name: 'Toro Power Max 824 (gas, two-stage)', price: '$1,200-1,500', best: 'Gas two-stage. Best traditional pick. Tough.', good: 'Best for deep snow / big driveway.' },
  { name: 'Snow Joe SJ625E (electric, single-stage)', price: '$200-300', best: 'Plug-in electric. Light. For small driveways and 6"-or-less snow.', good: 'Best budget pick.' },
  { name: 'Honda HSS928 (gas)', price: '$2,500+', best: 'Premium gas. Lasts 25+ years.', good: 'Best heirloom-quality.' },
];

export default function SnowBlowerPick() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Snow Blower Picker — Battery, Electric, Gas | TekSure" description="Stop shoveling. Plain-English picks for snow blowers — battery (no fumes), electric (cheap), or gas (heavy snow)." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Snowflake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Snow Blower Picker</h1>
          <p className="text-lg text-muted-foreground">Battery, electric, or gas? Plain-English match.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Match to snowfall</h2>
            <ul className="text-sm list-disc pl-5">
              <li><strong>Light snow (1-6")</strong> — single-stage electric or battery. $200-700.</li>
              <li><strong>Moderate (6-12")</strong> — two-stage battery (EGO, Greenworks). $700-1,200.</li>
              <li><strong>Heavy / wet snow / large drives</strong> — two-stage gas. $1,000-2,500.</li>
              <li><strong>Just walks / few feet of snow</strong> — quality shovel + a friend with a blower.</li>
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
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Battery vs gas — for seniors</h2>
            <p className="text-sm">Battery = lighter, easier to start, no oil/gas/spark plug, no fumes, no mess. The downside used to be power — but modern 80V/56V battery blowers match smaller gas units.</p>
            <p className="text-sm mt-2">For most senior driveways under 50 feet, battery is the right answer. Get a SECOND battery as backup ($150).</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hire vs buy</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Local snow plow service: $30-60 per visit. 5-15 visits per winter.</li>
              <li>Total: $300-1,000/year for service.</li>
              <li>Snow blower lasts 10-20 years.</li>
              <li>Break-even: 1-3 years for most homes.</li>
              <li>BUT: need to start it, push it, store it. Senior physical limits matter.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Heart attack warning</h3>
            <p className="text-sm text-muted-foreground">Heart attacks spike after heavy snow. Cold + exertion is a real risk. If you have heart issues, please HIRE someone — even snow blower work is heavy. Self-propelled models help a lot.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
