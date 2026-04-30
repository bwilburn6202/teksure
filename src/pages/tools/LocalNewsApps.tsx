import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Newspaper } from 'lucide-react';

export default function LocalNewsApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Local News Apps — Don&apos;t Miss What&apos;s Near Home | TekSure" description="Local newspapers, public radio, town newsletters. Plain-English picks for staying informed about your community." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Newspaper className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Local News Apps</h1>
          <p className="text-lg text-muted-foreground">National news everywhere. Local news harder to find.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best local news sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Your local newspaper website</strong> — search "[town name] news". Many have $5/mo digital subs (cheap).</li>
              <li><strong>Local public radio</strong> — NPR member station has best free local coverage. Apps free.</li>
              <li><strong>Patch.com</strong> — covers thousands of towns. Free.</li>
              <li><strong>NextDoor (already covered)</strong> — local-only, often unfiltered.</li>
              <li><strong>Local Facebook groups</strong> — "[Town] News" or "[Town] Buy Sell Trade".</li>
              <li><strong>Town/city official website</strong> — meeting agendas, ordinances, election info.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free local news apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple News</strong> (built-in) — pulls local stories if you set your zip.</li>
              <li><strong>Google News</strong> — same idea. Set "headlines for me" with location.</li>
              <li><strong>NPR One</strong> — local public radio app. Free.</li>
              <li><strong>Local TV station apps</strong> — most have free streaming + push alerts.</li>
              <li><strong>Citizen app</strong> — police/fire scanner alerts. Useful but anxiety-inducing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sign up for ALERTS</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>County emergency alerts</strong> — search "[county] emergency text alerts". Free. Tornado, severe weather, AMBER.</li>
              <li><strong>Town newsletter</strong> — most towns have one. Free.</li>
              <li><strong>School district email</strong> — for grandparents who help with grandkids.</li>
              <li><strong>Power company outage alerts</strong> — text or email.</li>
              <li><strong>Trash/recycling reminders</strong> — Recycle Coach or town app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reliable local journalism (paid is worth it)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local newspaper digital subscription — $5-15/mo. Often the ONLY source for school board, city council, local courts.</li>
              <li>Senior discounts often available — call and ask.</li>
              <li>Community-funded papers are growing — many are donation-supported.</li>
              <li>Without subscriptions, local newspapers DIE. Yours has — please support what&apos;s left.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Limit national news</h3>
            <p className="text-sm text-muted-foreground">Studies show heavy national news consumption is bad for older adults — raises blood pressure, increases anxiety. Local news + 30-min daily national check-in is healthier. Quality local news directly affects your daily life. National news mostly doesn&apos;t.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
