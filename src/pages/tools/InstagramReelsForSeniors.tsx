import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PlaySquare } from 'lucide-react';

export default function InstagramReelsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Instagram Reels for Senior Viewers | TekSure" description="Watch + create short videos on Instagram. Senior content + safety tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PlaySquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Instagram Reels</h1>
          <p className="text-lg text-muted-foreground">Like TikTok but on Instagram.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What are Reels?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Short videos within Instagram.</li>
              <li>Same creators often as TikTok.</li>
              <li>15-60 seconds typical.</li>
              <li>Free.</li>
              <li>Algorithm shows what you watch.</li>
              <li>Many seniors prefer to TikTok.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Reels over TikTok</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Already on Instagram.</li>
              <li>One less app.</li>
              <li>Same content (creators post both).</li>
              <li>Meta-owned (Facebook).</li>
              <li>If concerned about TikTok privacy — Reels alternative.</li>
              <li>Combined with photos + Stories.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">YouTube Shorts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Same format on YouTube app.</li>
              <li>Tap Shorts tab.</li>
              <li>Often educational content.</li>
              <li>YouTube algorithm-trained.</li>
              <li>If you already use YouTube — easy.</li>
              <li>Different content than TikTok/Reels.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Discover by topic</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search hashtags — #seniorcooking #travel #garden.</li>
              <li>Browse by interest.</li>
              <li>Follow accounts you like.</li>
              <li>Build personalized feed.</li>
              <li>Engage with thoughtful comments.</li>
              <li>Make friends in comment threads.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Set account to Private.</li>
              <li>Settings → Privacy → Private Account.</li>
              <li>Restrict who can DM you.</li>
              <li>Don&apos;t reply to strangers.</li>
              <li>Block + Report bad actors.</li>
              <li>Don&apos;t share location in posts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Time management</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Time on Instagram.</li>
              <li>Set daily limit (30-60 min).</li>
              <li>Reels can be addictive.</li>
              <li>Set bedtime reminder.</li>
              <li>Phone alerts when over.</li>
              <li>Healthy boundaries.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Reels = TikTok-lite</h3>
            <p className="text-sm text-muted-foreground">If you&apos;re cautious about TikTok but love short videos, Instagram Reels delivers similar content within an app you may already use. Same creators, same algorithm-based discovery. Set time limits to prevent endless scrolling. Free, fun, educational when curated well. Try it for a week.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
