import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const APPS = [
  { name: 'YouVersion (Bible app)', cost: 'FREE', best: 'Most popular Bible app. 2,000+ versions. Reading plans, daily verse, Bible audio.', good: 'Best free Bible app.' },
  { name: 'Hallow', cost: 'Free; $7-13/mo Premium', best: 'Catholic prayer + meditation. Rosary, Mass readings, sleep prayers.', good: 'Best Catholic.' },
  { name: 'Pray as You Go', cost: 'FREE', best: 'British Jesuit daily prayer + scripture. 12-minute audio. Beloved by many.', good: 'Best free daily devotional.' },
  { name: 'Abide', cost: 'Free; $40/yr Premium', best: 'Christian meditations focused on anxiety, sleep, healing.', good: 'Best Christian meditation.' },
  { name: 'Blue Letter Bible', cost: 'FREE', best: 'Deep Bible study — Strong\'s concordance, commentaries, original Greek/Hebrew.', good: 'Best for serious study.' },
  { name: 'Daily Audio Bible', cost: 'FREE', good: 'Brian Hardin reads through Bible in 1 year.', best: 'Best for car listening.' },
  { name: 'Olive Tree', cost: 'Free + paid commentaries', best: 'Premium Bible study with commentary library.', good: 'Best paid Bible study.' },
];

export default function BibleChristianApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bible & Christian Daily Apps — YouVersion, Hallow | TekSure" description="Daily scripture, prayer, devotional, and meditation apps for Christians. Plain-English picks for the best free and paid spiritual apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bible & Christian Apps</h1>
          <p className="text-lg text-muted-foreground">Daily scripture, prayer, devotional reading.</p>
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
            <h2 className="font-bold text-xl mb-3">Watch church services online</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Most churches stream Sunday services on Facebook, YouTube, or their website.</li>
              <li>Search "[your church] live" or check the church\'s social media.</li>
              <li>Right Now Media — Christian streaming service with thousands of teachings, often free through your church.</li>
              <li>EWTN — Catholic 24/7 TV streaming.</li>
              <li>TBN, Daystar — Christian TV via Roku/Apple TV.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For housebound seniors</h3>
            <p className="text-sm text-muted-foreground">If you can\'t make it to church, ask your pastor about home communion / visitation. Most churches arrange. Plus your church\'s livestream + Hallow or YouVersion daily reading keeps spiritual connection strong.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
