import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GlassWater } from 'lucide-react';

export default function CocktailMixingSenior() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cocktail Mixing for Seniors | TekSure" description="Make great cocktails at home. Plain-English senior bartending guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GlassWater className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cocktail Mixing</h1>
          <p className="text-lg text-muted-foreground">Bartender at home. Save vs bar.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior favorites</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Classic Martini</strong> — gin, vermouth, olive.</li>
              <li><strong>Old Fashioned</strong> — bourbon, sugar, bitters.</li>
              <li><strong>Manhattan</strong> — bourbon/rye, sweet vermouth.</li>
              <li><strong>Negroni</strong> — gin, Campari, sweet vermouth.</li>
              <li><strong>Margarita</strong> — tequila, lime, triple sec.</li>
              <li><strong>Whiskey Sour</strong> — whiskey, lemon, sugar.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Home bar essentials</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bourbon (Bulleit, Buffalo Trace).</li>
              <li>Vodka (Tito&apos;s).</li>
              <li>Gin (Hendrick&apos;s, Tanqueray).</li>
              <li>Tequila Blanco (Espolon).</li>
              <li>Sweet + dry vermouth.</li>
              <li>Triple sec (Cointreau).</li>
              <li>Angostura bitters.</li>
              <li>Lemons, limes fresh.</li>
              <li>Simple syrup (DIY).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bar tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cocktail shaker (Boston preferred).</li>
              <li>Jigger for measuring.</li>
              <li>Bar spoon.</li>
              <li>Strainer.</li>
              <li>Muddler.</li>
              <li>Mixing glass.</li>
              <li>$50 starter kit on Amazon.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Good resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Death &amp; Co cocktail book</strong>.</li>
              <li><strong>Liquor.com</strong> — free recipes.</li>
              <li><strong>Mr. Boston Bartender&apos;s Guide</strong>.</li>
              <li><strong>YouTube</strong> — channels like Anders Erickson.</li>
              <li>Cocktail subscription boxes.</li>
              <li>Local cocktail classes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mocktails growing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sober curious movement.</li>
              <li>Non-alcoholic spirits (Lyre&apos;s, Seedlip).</li>
              <li>Seedlip + tonic = sophisticated.</li>
              <li>Health-conscious seniors enjoying.</li>
              <li>Doesn&apos;t affect medications.</li>
              <li>Same ritual without alcohol.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior moderation</h3>
            <p className="text-sm text-muted-foreground">Senior bodies process alcohol slower. Cocktails often have 2-3 drink&apos;s worth alcohol. ONE cocktail = limit. Hydrate. See /tools/alcohol-for-seniors. Enjoy responsibly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
