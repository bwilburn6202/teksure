import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Church } from 'lucide-react';

export default function ChurchLivestreamSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Watch Church Online — Plain English Setup | TekSure" description="Find your church on YouTube/Facebook, cast to TV, give online. Plain-English guide for seniors who can&apos;t make it in person." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Church className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Church Livestream Setup</h1>
          <p className="text-lg text-muted-foreground">Worship from home. Stay connected.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find your church online</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Search "[your church name] livestream" on Google.</li>
              <li>Most churches stream on YouTube, Facebook, or their own site.</li>
              <li>Some use Zoom for small services.</li>
              <li>Subscribe / "follow" to get notifications when service starts.</li>
              <li>Save the link — bookmark on your home screen.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cast to TV (much better than phone)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Smart TV</strong> — open YouTube/Facebook app on TV directly. Search church name.</li>
              <li><strong>Roku / FireTV / AppleTV</strong> — same. Open app, search.</li>
              <li><strong>Phone → TV</strong> — open service on phone, tap "cast" icon, pick your TV.</li>
              <li><strong>Chromecast (~$30)</strong> — plug into HDMI, casts from phone.</li>
              <li>Big screen + couch + coffee = like being at church.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">National + denominational online services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Daily Hope (Rick Warren)</strong> — pastor radio + livestream.</li>
              <li><strong>The Catholic Channel</strong> — daily Mass on Sirius XM + EWTN.</li>
              <li><strong>Mass online</strong> — Catholic.org, Loyola Press, EWTN.</li>
              <li><strong>Hour of Power (Robert Schuller legacy)</strong>.</li>
              <li><strong>Joni and Friends</strong> — disability ministry.</li>
              <li><strong>Andrew Wommack Ministries</strong>.</li>
              <li>Most major denominations have a national livestream.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online giving</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most churches have "Give" button on website.</li>
              <li>Apps like <strong>Tithe.ly</strong>, <strong>Pushpay</strong>, <strong>Givelify</strong>.</li>
              <li>Set up recurring monthly giving — "set and forget".</li>
              <li>End-of-year tax statement automated.</li>
              <li>For older non-tech members: many churches still mail check via snail mail. Both work.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Stay connected beyond Sunday</h3>
            <p className="text-sm text-muted-foreground">Most churches now have email newsletters, Facebook groups, prayer chains via text. Ask the church office how to join. The community matters as much as the service. Keep the relationships even when you can&apos;t make it in person.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
