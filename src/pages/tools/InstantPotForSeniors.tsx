import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';

export default function InstantPotForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Instant Pot for Seniors | TekSure" description="Senior-friendly Instant Pot guide + recipes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ChefHat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Instant Pot</h1>
          <p className="text-lg text-muted-foreground">Senior cooking ease.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Instant Pot Duo</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$80-$120 6-quart.</li><li>Senior most popular size.</li><li>Pressure cook + slow + rice.</li><li>One pot meals.</li><li>Easy cleanup.</li><li>Worth investment.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Set + walk away.</li><li>No babysitting stove.</li><li>Senior arthritis ok.</li><li>Soups, beans, rice perfect.</li><li>Tender meats.</li><li>Healthy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free recipes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pinterest abundant.</li><li>Instant Pot app free.</li><li>YouTube tutorials.</li><li>Senior thousand options.</li><li>Free.</li><li>Bookmark favorites.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Beginner tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Water test first.</li><li>Senior learn pressure release.</li><li>Quick vs natural.</li><li>Don&apos;t overfill.</li><li>Practice familiar recipes.</li><li>Build confidence.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs slow cooker</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Instant Pot does both.</li><li>Faster pressure mode.</li><li>Senior versatile.</li><li>Slow cooker $30 cheaper.</li><li>Replace if old.</li><li>Better tech.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Care + safety</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sealing ring replace yearly.</li><li>$10.</li><li>Senior maintenance.</li><li>Read manual.</li><li>Safety features built-in.</li><li>Worth knowing.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$100 Instant Pot = senior cooking transformation</h3><p className="text-sm text-muted-foreground">$100 Instant Pot Duo 6-qt = senior cooking transformation. Set + walk away. Soups, beans, rice perfect. Tender meats. Free Pinterest recipes abundant. Replaces slow cooker + pressure cooker + rice cooker. Most senior kitchen ROI.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
