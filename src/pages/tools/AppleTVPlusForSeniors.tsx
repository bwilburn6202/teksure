import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function AppleTVPlusForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple TV+ for Seniors | TekSure" description="Apple original shows. Senior Apple TV+ guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple TV+</h1>
          <p className="text-lg text-muted-foreground">Apple originals.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it offers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$10/month.</li><li>Originals only.</li><li>Ted Lasso, Severance.</li><li>The Morning Show.</li><li>Documentaries.</li><li>Senior favorite.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free 3 months</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>New Apple device — 3 months free.</li><li>Or Apple One bundle.</li><li>Senior take advantage.</li><li>Cancel after if want.</li><li>Easy cancel.</li><li>Try free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior favorites</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Ted Lasso — uplifting.</li><li>The Morning Show.</li><li>Slow Horses.</li><li>For All Mankind.</li><li>Senior prestige.</li><li>Gentle pace usually.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple One bundle</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$20/mo Individual.</li><li>$26 Family.</li><li>iCloud + Music + TV+ + Arcade.</li><li>Senior savings.</li><li>Compare separate $$.</li><li>Worth bundling.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch anywhere</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone, iPad, Mac.</li><li>Web — tv.apple.com.</li><li>Android via web.</li><li>Smart TVs Apple TV app.</li><li>Senior any device.</li><li>Cross-platform.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Netflix</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple TV+ — quality not quantity.</li><li>Netflix — much more content.</li><li>Apple cheaper.</li><li>Senior pick depth.</li><li>Subscribe to one or other.</li><li>Both not needed.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$10/mo + free trials = senior quality</h3><p className="text-sm text-muted-foreground">Apple TV+ $10/month is senior-quality programming. Ted Lasso, Slow Horses, For All Mankind. Often free 3 months with new Apple device. Apple One bundle saves vs separate. Less content than Netflix, but each show worth watching.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
