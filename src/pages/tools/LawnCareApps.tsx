import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

const APPS = [
  { name: 'Sunday Lawn Care', cost: '$120-300/year', best: 'Soil-test-based custom lawn fertilizer. Mailed to you. Eco-friendly.', good: 'Best DIY service.' },
  { name: 'Lawnbot.io / Yardbook', cost: 'Free with services', best: 'Find local lawn services and get quotes online.', good: 'Best for finding pros.' },
  { name: 'TruGreen', cost: 'Subscription, varies', best: 'National professional lawn service.', good: 'Reliable for those who want pro service.' },
  { name: 'GreenPal', cost: 'Free quotes', best: '"Uber for lawns" — local mowers bid on your job.', good: 'Cheapest local mowing.' },
  { name: 'LawnStarter', cost: 'Subscription', best: 'Recurring lawn care via app.', good: 'For those who hate scheduling.' },
  { name: 'Picture This / PlantSnap', cost: 'Free trial; $30/yr', best: 'Identify weeds and plant problems by photo.', good: 'For DIY diagnosis.' },
  { name: 'Almanac.com', cost: 'FREE', best: 'When to fertilize, plant, aerate by zip code. Free wisdom.', good: 'Best free reference.' },
];

export default function LawnCareApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Lawn Care Apps — Sunday, GreenPal, TruGreen | TekSure" description="DIY soil-tested fertilizer, find a mower, eco-friendly lawn care. Plain-English picks for lawn care apps and services." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Lawn Care Apps</h1>
          <p className="text-lg text-muted-foreground">DIY or hire — done right.</p>
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
            <h2 className="font-bold text-xl mb-3">Senior-friendly lawn options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Robotic mower</strong> — set and forget. (See our Robotic Lawn Mower Pick.)</li>
              <li><strong>GreenPal local mower</strong> — $25-50 per mow.</li>
              <li><strong>Drought-tolerant grass</strong> — buffalograss, fescue. Mow 2x/month vs 4x.</li>
              <li><strong>Smaller lawn</strong> — replace some lawn with native plants, gravel paths, garden.</li>
              <li><strong>Local "Mow & Snow" services</strong> — same person handles all-year yard maintenance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When DIY is great</h3>
            <p className="text-sm text-muted-foreground">If yard work is your enjoyable hobby — keep it. <strong>Sunday Lawn Care</strong> ($120-300/yr) sends you the right fertilizer for YOUR soil at the right time. Cheaper and healthier than mass-market brands. Best DIY-friendly modern lawn service.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
