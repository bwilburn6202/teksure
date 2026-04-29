import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pencil } from 'lucide-react';

export default function AdultColoringBooks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Adult Coloring Books for Seniors | TekSure" description="Coloring books for senior relaxation. Plain-English picks + tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pencil className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Adult Coloring Books</h1>
          <p className="text-lg text-muted-foreground">Therapy. Sleep aid. Joy.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Health benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reduces anxiety + stress.</li>
              <li>Better sleep when done before bed.</li>
              <li>Improves focus + concentration.</li>
              <li>Brain exercise for color matching.</li>
              <li>Mindfulness practice.</li>
              <li>Especially helpful for dementia patients.</li>
              <li>Used in art therapy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best book picks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Johanna Basford</strong> — Secret Garden, Enchanted Forest. Iconic.</li>
              <li><strong>Color With Music</strong> — color while listening (audio CD).</li>
              <li><strong>Birds + Butterflies</strong> — peaceful.</li>
              <li><strong>Mandalas</strong> — meditative.</li>
              <li><strong>Dover</strong> publisher — affordable, varied.</li>
              <li><strong>Senior-specific</strong> — &quot;Color By Number for Seniors&quot; large print.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>LARGE PRINT or simpler designs.</li>
              <li>Single-sided pages (won&apos;t bleed through).</li>
              <li>Spiral-bound (lay flat).</li>
              <li>Heavy paper (markers don&apos;t bleed).</li>
              <li>Color-by-number for those who freeze on choices.</li>
              <li>&quot;Color &amp; chat&quot; — group activity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best supplies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Colored pencils</strong> — Prismacolor, Faber-Castell, Crayola.</li>
              <li><strong>Markers</strong> — Crayola SuperTips, Tombow ABT (alcohol).</li>
              <li><strong>Gel pens</strong> — Sakura, Pilot G2.</li>
              <li><strong>Pencil sharpener</strong> with manual crank.</li>
              <li><strong>Eraser</strong> — colored pencil eraser.</li>
              <li>Start with pencils — cleaner, easier.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free printable</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pinterest — search &quot;adult coloring printable.&quot;</li>
              <li>Crayola.com free printables.</li>
              <li>Try free pages before buying books.</li>
              <li>Print at 8.5x11 size.</li>
              <li>Use heavier paper for markers (cardstock).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Coloring apps too</h3>
            <p className="text-sm text-muted-foreground"><strong>Happy Color</strong> — number-based digital coloring. Free. Senior favorite. <strong>Pigment</strong> — premium iPad coloring. <strong>Colorfy</strong> — popular. No mess. Saves space. Color anywhere on iPad. Different appeal than paper. Try both.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
