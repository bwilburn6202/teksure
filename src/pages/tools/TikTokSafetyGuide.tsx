import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function TikTokSafetyGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TikTok Safety for Seniors | TekSure" description="Use TikTok safely. Plain-English guide for senior TikTok users + concerned grandparents." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TikTok for Seniors</h1>
          <p className="text-lg text-muted-foreground">Addictive. Use carefully.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What TikTok is</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Short videos (15 sec to 10 min).</li>
              <li>Algorithm shows what addicts you.</li>
              <li>Free + ad-supported.</li>
              <li>Senior content surprisingly good if you find it.</li>
              <li>Recipes, gardening, history, comedy.</li>
              <li>Pets + grandparent humor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior caution</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>VERY addictive — limit time.</li>
              <li>Misinformation spreads (medical, financial).</li>
              <li>Scammers target via comments.</li>
              <li>Privacy concerns — ByteDance owns.</li>
              <li>Politics + outrage often.</li>
              <li>Use sparingly + wisely.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safer use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Set 30-min daily limit (Settings).</li>
              <li>Follow specific accounts only (skip For You feed).</li>
              <li>Don&apos;t engage with strangers in comments.</li>
              <li>Mute extreme political content.</li>
              <li>Don&apos;t share personal info.</li>
              <li>Don&apos;t click links in profiles.</li>
              <li>Set account to Private if posting.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-good content</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cooking accounts (#tiktokcooking).</li>
              <li>Gardening (#gardentok).</li>
              <li>History (#historytok).</li>
              <li>Senior comedians (Lillian Droniak, Joan).</li>
              <li>Pets (#dogtok #cattok).</li>
              <li>Crafts (#crafttok).</li>
              <li>Avoid news + politics.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For concerned grandparents</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Talk to grandkids about TikTok use.</li>
              <li>Family Pairing — set time limits.</li>
              <li>Restricted Mode for younger kids.</li>
              <li>Predators a real risk.</li>
              <li>TikTok dangers + benefits both real.</li>
              <li>Open conversation = safer kids.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Should YOU use it?</h3>
            <p className="text-sm text-muted-foreground">For curious connection with grandkids — yes, but limit. For news/medical info — NO. For entertainment — sometimes okay. For mental health — debatable. Many seniors find Instagram safer alternative for similar entertainment.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
