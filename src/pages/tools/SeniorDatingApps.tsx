import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorDatingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Dating Apps — TekSure" description="Best dating apps for seniors over 50 — SilverSingles, OurTime, Match." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Dating Apps</h1>
          <p className="text-lg text-muted-foreground">Find companionship in your 60s, 70s, 80s.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SilverSingles</h2><p>$30-$50/month. Designed for ages 50+. Personality-matching focus.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">OurTime</h2><p>$30/month. Mature audience. Easy to use.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Match.com</h2><p>$30/month. Largest. Mixed ages but lots of seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">eHarmony</h2><p>$36/month. Personality matching. Many seniors find serious relationships.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SAFETY RULES</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>NEVER send money</li><li>Meet in public first</li><li>Tell a family member</li><li>Video chat before meeting</li><li>If they avoid video, scam</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Romance scams</h2><p>$1.3 billion stolen yearly. If they ask for money, they&apos;re scamming.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Real love takes time. Anyone rushing &ldquo;love&rdquo; in 1 week is suspicious.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
