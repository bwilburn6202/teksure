import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brush } from 'lucide-react';

export default function PaintByNumbersAdult() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Adult Paint by Numbers for Seniors | TekSure" description="Beautiful art without skill. Plain-English paint by numbers guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brush className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Paint by Numbers</h1>
          <p className="text-lg text-muted-foreground">Therapy + beautiful results. No skill needed.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior-favorite</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NO art skill required.</li>
              <li>Number = color. Just fill in.</li>
              <li>Meditative, relaxing.</li>
              <li>Beautiful finished result you frame.</li>
              <li>Affordable hobby ($15-30 per kit).</li>
              <li>Reduces anxiety + boredom.</li>
              <li>Studies show benefits for dementia.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best brands</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Plaid CraftsBigComplete</strong> — quality Reds.</li>
              <li><strong>DIY Custom Paint By Numbers</strong> — your photo as kit. $30.</li>
              <li><strong>Winnie&apos;s Picks</strong> — senior-friendly designs.</li>
              <li><strong>Etsy custom</strong> — turn family photos to kits.</li>
              <li><strong>Amazon variety</strong> — $15-30 kits.</li>
              <li>Premium kits (Numart) better quality vs cheap.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for success</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Good lighting (daylight or daylight bulb).</li>
              <li>Magnifying glass for fine numbers.</li>
              <li>Start with largest areas first.</li>
              <li>Save smallest details for fresh days.</li>
              <li>2-3 sessions/week — not all at once.</li>
              <li>Cover unused colors (dry out).</li>
              <li>Tweezers or fine brush for tiny spots.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Difficulty levels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Beginner</strong> — large areas, fewer colors. Start here.</li>
              <li><strong>Intermediate</strong> — more detail.</li>
              <li><strong>Advanced</strong> — many tiny spaces, complex.</li>
              <li>Start with 11x14&quot; or larger canvas.</li>
              <li>Skip mini canvases (too hard for arthritic hands).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After completion</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Spray varnish — protects + adds shine.</li>
              <li>Frame at Michael&apos;s, Hobby Lobby (50% off coupons).</li>
              <li>Display proudly.</li>
              <li>Gift to family.</li>
              <li>Donate to senior center.</li>
              <li>Sell on Etsy (some do).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Custom from photo</h3>
            <p className="text-sm text-muted-foreground">Paint family photo. Many websites turn photos to paint-by-number kits ($30-60). Wedding photos, pet portraits, family gatherings. Personalized + meaningful. Search &quot;custom paint by numbers from photo.&quot; Great gift for grandkids&apos; weddings.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
