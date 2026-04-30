import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function SubstackForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Substack for Senior Readers + Writers | TekSure" description="Subscribe to independent newsletters. Or start your own — Substack for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Substack</h1>
          <p className="text-lg text-muted-foreground">Independent newsletters. Read or write.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Substack?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Newsletter platform.</li>
              <li>Writers publish directly to subscribers.</li>
              <li>Many free, some paid ($5–$10/month).</li>
              <li>No algorithm filtering.</li>
              <li>Independent journalism + commentary.</li>
              <li>Quality varies — pick wisely.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Popular for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heather Cox Richardson — daily history + politics.</li>
              <li>The Pour Over — neutral news summary.</li>
              <li>Garbage Day — internet culture.</li>
              <li>Astral Codex Ten — long-form thinking.</li>
              <li>Slow Boring — Matt Yglesias.</li>
              <li>Many free + paid options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to subscribe</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Visit Substack.com.</li>
              <li>Search topics or writers.</li>
              <li>Click Subscribe — enter email.</li>
              <li>Free if author hasn&apos;t set price.</li>
              <li>Or pay through credit card.</li>
              <li>Newsletters arrive in email.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reading experience</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Substack app — read all subscriptions.</li>
              <li>Or read via email.</li>
              <li>Audio narration on many posts.</li>
              <li>Comment + discuss with other readers.</li>
              <li>Adjustable text size.</li>
              <li>Save for later.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Start your own newsletter</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free to publish.</li>
              <li>Substack takes 10% of paid subscriptions.</li>
              <li>Many seniors share life stories or expertise.</li>
              <li>Write about retirement, gardening, history, etc.</li>
              <li>Family + friends auto-subscribe.</li>
              <li>Build audience over time.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cancel subscriptions easily</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Each newsletter has Manage Subscription link.</li>
              <li>Or visit Substack.com → Settings.</li>
              <li>See all paid subscriptions in one place.</li>
              <li>Cancel anytime, no hassle.</li>
              <li>Most senior readers have 1–3 paid.</li>
              <li>Keep checking + pruning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Heather Cox Richardson is free</h3>
            <p className="text-sm text-muted-foreground">If you&apos;re curious about Substack, subscribe free to Heather Cox Richardson&apos;s &quot;Letters from an American.&quot; She&apos;s a Boston College history professor who writes daily about American history + current events. Over 1 million subscribers. Free. It&apos;ll show you the format. Then explore other writers in topics you care about.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
