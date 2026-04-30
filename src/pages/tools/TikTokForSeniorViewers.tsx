import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function TikTokForSeniorViewers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TikTok for Senior Viewers | TekSure" description="Discover TikTok safely as a senior. Recipes, history, comedy, family content." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TikTok</h1>
          <p className="text-lg text-muted-foreground">Not just for kids. Senior-friendly content available.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">It&apos;s not just dancing kids</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>TikTok is short-form videos.</li>
              <li>Algorithm shows what you watch.</li>
              <li>Watch cooking, gardening, history, dogs.</li>
              <li>Soon shows only what you like.</li>
              <li>Powerful interest-based learning.</li>
              <li>Free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly content</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cooking videos — quick recipes.</li>
              <li>Gardening tips.</li>
              <li>History + culture.</li>
              <li>Pet videos.</li>
              <li>Travel destinations.</li>
              <li>DIY home repair.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Train the algorithm</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Like videos you enjoy.</li>
              <li>Skip videos you don&apos;t.</li>
              <li>Follow accounts you like.</li>
              <li>Within a week — your feed perfect.</li>
              <li>&quot;Not Interested&quot; on bad videos.</li>
              <li>Algorithm learns fast.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior creators to follow</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Old Gays — popular senior comedy.</li>
              <li>Joe + Suzy on TikTok — gardening.</li>
              <li>Granfluencer crafts.</li>
              <li>Senior cooking demonstrators.</li>
              <li>Many senior accounts — millions of followers.</li>
              <li>Find your tribe.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup for safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Privacy → Private account.</li>
              <li>Settings → Restricted Mode ON.</li>
              <li>Filters out mature content.</li>
              <li>Don&apos;t share personal info in comments.</li>
              <li>Block + report bad accounts.</li>
              <li>Watch only — don&apos;t need to post.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Time limits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>TikTok algorithmically addictive.</li>
              <li>Settings → Screen Time → Daily limit.</li>
              <li>Set 30 min/day cap.</li>
              <li>Take breaks.</li>
              <li>Don&apos;t scroll endlessly.</li>
              <li>Phone alerts when limit reached.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try one week</h3>
            <p className="text-sm text-muted-foreground">If skeptical of TikTok, try one week. Like cooking + history + travel videos. Skip the rest. By day 5, your feed will show only senior-friendly content. Many seniors find TikTok the most engaging app for learning new things. Set 30-minute daily limit + Restricted Mode to enjoy without overdoing it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
