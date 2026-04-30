import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Newspaper } from 'lucide-react';

export default function NYTimesAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="New York Times App for Seniors | TekSure" description="NYT app, games, cooking, audio explained for senior subscribers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Newspaper className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">NY Times App</h1>
          <p className="text-lg text-muted-foreground">News, crosswords, cooking, audio.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Subscription tiers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>News only — $4/month often.</li>
              <li>All Access — $25/month for everything.</li>
              <li>Includes Games, Cooking, Wirecutter, Audio.</li>
              <li>Athletic add-on for sports fans.</li>
              <li>Group + family rates available.</li>
              <li>Senior + student discounts sometimes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">News reading</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adjustable text size in app.</li>
              <li>Listen to articles aloud (audio mode).</li>
              <li>Offline reading — download for trips.</li>
              <li>Save articles for later.</li>
              <li>Daily Briefing email of top stories.</li>
              <li>Push notifications for breaking news.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Games — popular with seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Crossword (full + Mini daily).</li>
              <li>Wordle.</li>
              <li>Connections.</li>
              <li>Spelling Bee.</li>
              <li>Tiles + Letter Boxed + Strands.</li>
              <li>Many seniors subscribe just for games.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cooking app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>20,000+ tested recipes.</li>
              <li>Save favorites.</li>
              <li>Generate grocery lists.</li>
              <li>Step-by-step cooking mode.</li>
              <li>Notes from other home cooks.</li>
              <li>Best paid recipe app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Audio + podcasts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>The Daily — top podcast in America.</li>
              <li>Listen to articles read by narrators.</li>
              <li>Hands-free news.</li>
              <li>Great while walking, driving, doing chores.</li>
              <li>Premium podcasts — Hard Fork, etc.</li>
              <li>Senior-friendly audio listening option.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Wirecutter — product reviews</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Product recommendations.</li>
              <li>Best mattress, best vacuum, etc.</li>
              <li>Tested + verified by experts.</li>
              <li>Saves time researching.</li>
              <li>Senior-friendly product picks.</li>
              <li>Worth it for big purchase decisions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">All Access for $25 = great value</h3>
            <p className="text-sm text-muted-foreground">If you read news, do crosswords, cook, AND want product reviews, the NYT All Access subscription at $25/month is one of the best media values available. Compared to subscribing separately for newspaper, recipe app, crossword, and audio narration — much cheaper bundled. Also makes a great gift from adult children to retired parents.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
