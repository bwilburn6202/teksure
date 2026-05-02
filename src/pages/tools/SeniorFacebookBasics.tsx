import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorFacebookBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Facebook Basics for Seniors — TekSure" description="How seniors use Facebook safely — friends, posts, privacy, scam alerts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Facebook for Seniors</h1>
          <p className="text-lg text-muted-foreground">Stay in touch with family.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Friends only</h2><p>Settings → Privacy → &ldquo;Who can see future posts&rdquo; → Friends. Strangers can&apos;t see anything.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Add family</h2><p>Search their name. Tap Add Friend. They confirm. You see their posts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch out for fake friends</h2><p>If &ldquo;a friend&rdquo; sends weird messages, the account is hacked. Don&apos;t click links.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Common scams</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>&ldquo;You won a prize&rdquo;</li><li>Cheap brand-name shopping ads</li><li>Romance scams in messages</li><li>Crypto investments</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bigger text</h2><p>Settings → Accessibility. Or zoom in your phone display.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family groups</h2><p>Make a private group with all family. Photo and update sharing without strangers.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 30 minutes daily max. Beyond that, studies show mood drops.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
