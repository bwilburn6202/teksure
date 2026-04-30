import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bug } from 'lucide-react';

export default function ButterflyGarden() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Butterfly Garden Guide for Seniors | TekSure" description="Attract butterflies + monarchs. Plain-English picks for nectar plants + host plants." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bug className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Butterfly Garden</h1>
          <p className="text-lg text-muted-foreground">Living jewels in your yard.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Two types of plants needed</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Nectar plants</strong> — adult butterflies feed.</li>
              <li><strong>Host plants</strong> — caterpillars eat (becomes butterflies).</li>
              <li>BOTH needed — without host plants, no new butterflies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best nectar plants</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Coneflower (Echinacea)</strong> — hardy, native, perennial.</li>
              <li><strong>Black-eyed Susan</strong> — yellow daisies.</li>
              <li><strong>Bee balm (Monarda)</strong> — also attracts hummingbirds.</li>
              <li><strong>Lantana</strong> — annual, blooms all summer.</li>
              <li><strong>Zinnias</strong> — annuals, easy from seed.</li>
              <li><strong>Butterfly bush</strong> — magnet (but invasive in some states — check).</li>
              <li><strong>Phlox, salvia, asters</strong> — perennial favorites.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best host plants</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Milkweed</strong> — MUST for monarch butterflies.</li>
              <li><strong>Parsley + dill + fennel</strong> — for swallowtails.</li>
              <li><strong>Pawpaw tree</strong> — for zebra swallowtail.</li>
              <li><strong>Native grasses</strong> — for skipper butterflies.</li>
              <li><strong>Violets</strong> — for fritillaries.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plant native species — local butterflies prefer them.</li>
              <li>Pick perennials — comes back yearly.</li>
              <li>NO pesticides — kills caterpillars.</li>
              <li>Sunny spot — butterflies need warmth.</li>
              <li>Water dish with rocks — "puddling" station.</li>
              <li>Plant in "drifts" of 3-5 same plants — butterflies see better.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save the monarchs</h3>
            <p className="text-sm text-muted-foreground">Monarch population dropped 80% since 1990s. Plant milkweed = direct help. Free seeds from Save Our Monarchs (saveourmonarchs.org). Best senior gardening contribution to wildlife.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
