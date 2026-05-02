import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorChristmasShoppingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Christmas Shopping Apps | TekSure" description="Holiday shopping made easy for senior gift-givers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Christmas Shopping</h1>
          <p className="text-lg text-muted-foreground">Senior holiday ease.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Amazon Wishlist family</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Each family member create.</li><li>Senior buys what wanted.</li><li>No guessing.</li><li>Free.</li><li>Avoid returns.</li><li>Worth coordinating.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Etsy handmade</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Personalized gifts.</li><li>Senior unique.</li><li>Support small biz.</li><li>Order early.</li><li>Worth premium.</li><li>Treasured.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Walmart pickup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Order online + pickup.</li><li>Free pickup.</li><li>Senior no parking lots.</li><li>Skip crowds.</li><li>Free.</li><li>Worth holiday season.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Group gifting</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Plumfund, GroupGreeting.</li><li>Senior splits big gift.</li><li>Family contributes.</li><li>One nice gift instead many small.</li><li>Free.</li><li>Worth coordinating.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Gift cards</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Skip stuff.</li><li>Senior easier.</li><li>Recipients pick.</li><li>Email instant.</li><li>Free shipping.</li><li>Worth.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Black Friday timing</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Honey + Camel track.</li><li>Senior wait price drops.</li><li>Avoid early-bird store crowds.</li><li>Online same deals.</li><li>Free.</li><li>Patient saves.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Family wishlists + online pickup = senior easy holidays</h3><p className="text-sm text-muted-foreground">Senior holiday shopping: family Amazon wishlists end guessing + Walmart pickup avoids crowds + group gifting splits costs + gift cards if want easy. Honey/Camel for price tracking. Most senior holiday stress reducers. Free + powerful.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
