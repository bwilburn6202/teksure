import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function InstagramSeniorGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Instagram for Seniors | TekSure" description="Photos + family + travel. Plain-English Instagram guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Instagram for Seniors</h1>
          <p className="text-lg text-muted-foreground">Photo-focused. Calmer than TikTok.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors love it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Visual focus = beautiful photos + videos.</li>
              <li>Less politics than Facebook.</li>
              <li>Travel + food + pets popular.</li>
              <li>See grandkids&apos; lives.</li>
              <li>Connect old friends + family.</li>
              <li>Free.</li>
              <li>Algorithm gentler than TikTok.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free download Instagram app.</li>
              <li>Sign up with email.</li>
              <li>Pick username (avoid using full real name).</li>
              <li>Profile photo + simple bio.</li>
              <li>Set account to Private (Settings → Privacy).</li>
              <li>Only approved followers see posts.</li>
              <li>Search for family/friends.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to follow</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Family + close friends only first.</li>
              <li>Travel accounts.</li>
              <li>Cooking + gardening.</li>
              <li>Pets.</li>
              <li>Historic photos (@historyinpics).</li>
              <li>Senior fitness (@robinsonm9).</li>
              <li>Build slowly. 100-200 follows max.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy + safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Private account = friends only.</li>
              <li>Strangers can&apos;t see posts.</li>
              <li>Don&apos;t post location in real time.</li>
              <li>Block harassers immediately.</li>
              <li>Disable search engines indexing.</li>
              <li>Hide story from specific people.</li>
              <li>Add 2FA — Settings → Security.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>DM from strangers — block.</li>
              <li>&quot;Verify your account&quot; emails — phishing.</li>
              <li>Influencer scams promoting products.</li>
              <li>Romance scammers very active.</li>
              <li>Crypto investments in DMs = scam.</li>
              <li>Don&apos;t click ads with too-good prices.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Avoid Reels addiction</h3>
            <p className="text-sm text-muted-foreground">Instagram Reels = TikTok-like. Limit time (Settings → Time Limit). Stick to feed of friends. Reels can be addictive. Set 30 min/day limit. Healthier mind. Use for connection, not consumption.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
