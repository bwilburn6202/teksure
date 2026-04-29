import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessagesSquare } from 'lucide-react';

export default function RedditForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Reddit for Seniors | TekSure" description="Senior-friendly subreddits + how to use Reddit safely. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessagesSquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Reddit for Seniors</h1>
          <p className="text-lg text-muted-foreground">Niche communities. Helpful answers.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly subreddits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>r/AskOldPeople</strong> — friendly community.</li>
              <li><strong>r/Retirement</strong> — planning + life.</li>
              <li><strong>r/Medicare</strong> — questions answered.</li>
              <li><strong>r/personalfinance</strong> — money advice.</li>
              <li><strong>r/aging</strong> — health + senior issues.</li>
              <li><strong>r/Genealogy</strong> — family history.</li>
              <li>Hobby subreddits — gardening, knitting, cooking, etc.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How Reddit works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Communities = subreddits (r/something).</li>
              <li>Read without account.</li>
              <li>Make account to post + comment.</li>
              <li>Upvote good, downvote bad.</li>
              <li>Stay anonymous (use fake username).</li>
              <li>Don&apos;t use real name.</li>
              <li>FREE.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why useful for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Specific niche questions answered.</li>
              <li>Anonymous medical / personal questions.</li>
              <li>Wide range of perspectives.</li>
              <li>Real people (not bots) often.</li>
              <li>Senior community on r/AskOldPeople.</li>
              <li>Best for: research, advice, learning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid pitfalls</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Politics subreddits = polarized.</li>
              <li>Don&apos;t share personal info.</li>
              <li>Some subs hostile (avoid).</li>
              <li>Crypto / get-rich subs = scam-prone.</li>
              <li>Pick 5-10 favorite subs only.</li>
              <li>Use Reddit app or old.reddit.com (cleaner).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Reddit Premium</h3>
            <p className="text-sm text-muted-foreground">$6/mo Reddit Premium = no ads. Worth it for daily users. FREE version fine. Reddit&apos;s open-source third-party apps gone — official app required now. Web version old.reddit.com still cleaner UI for many seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
