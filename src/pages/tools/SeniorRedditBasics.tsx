import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

export default function SeniorRedditBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Reddit for Seniors — TekSure" description="Find communities, ask questions — senior-friendly subreddits and tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Reddit for Seniors</h1>
          <p className="text-lg text-muted-foreground">Real communities. Real answers.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free</h2><p>Browse without an account. Sign up free to comment or post.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior-friendly subreddits</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>r/seniors</li><li>r/AskOldPeople</li><li>r/retirement</li><li>r/Cooking</li><li>r/AskHistorians</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">How to use</h2><p>Type a subreddit name in search. Read posts. Upvote if helpful. Comment if you want.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Use a username</h2><p>Don&apos;t use your real name. Reddit anonymity is the norm.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Block trolls</h2><p>Long-press a username → Block. Done. They&apos;re gone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mod help</h2><p>Stuck? Message a subreddit&apos;s moderators. Most are kind.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Use the official Reddit app — third-party apps may show ads or scams.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
