import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SkinCareAfter65() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Skin Care After 65 | TekSure" description="Senior skin: dryness, thinning, cancer screening. Plain-English skincare for 65+." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Skin Care After 65</h1>
          <p className="text-lg text-muted-foreground">Healthy skin = comfort + cancer prevention.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior skin changes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Thinner — bruises easier.</li>
              <li>Drier — produces less oil.</li>
              <li>Slower healing — small cuts last longer.</li>
              <li>More fragile — bandaid removal can tear skin.</li>
              <li>Sun damage from past shows now (spots, growth).</li>
              <li>Most skin cancer in 60s-80s.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily routine</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lukewarm showers — hot water dries skin.</li>
              <li>5-10 min showers max.</li>
              <li>Mild soap (Dove, Cerave) — not antibacterial.</li>
              <li>Pat dry, don&apos;t rub.</li>
              <li>Moisturize within 3 minutes of shower.</li>
              <li>Cetaphil, Cerave, Aveeno = senior-friendly brands.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sun protection still matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>SPF 30+ daily — face, neck, hands.</li>
              <li>EltaMD, La Roche-Posay = dermatologist favorites.</li>
              <li>Wide-brimmed hat outdoors.</li>
              <li>UPF 50 long-sleeve shirts (Coolibar brand).</li>
              <li>Reapply every 2 hours outdoors.</li>
              <li>Skin checks annually with dermatologist (Medicare covers).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch for skin cancer</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>A</strong>symmetry — one side different.</li>
              <li><strong>B</strong>orders — irregular, ragged.</li>
              <li><strong>C</strong>olor — multiple colors in one spot.</li>
              <li><strong>D</strong>iameter — bigger than pencil eraser.</li>
              <li><strong>E</strong>volving — changing size/shape.</li>
              <li>Sore that won&apos;t heal in 3+ weeks.</li>
              <li>See dermatologist immediately if any.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free skin checks</h3>
            <p className="text-sm text-muted-foreground">American Academy of Dermatology runs SPOT Skin Cancer free screening events. AAD.org/spot to find one. Your spouse can do monthly mole map photos with phone — same spot, same lighting. Apple/Google Photos auto-organize by date.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
