import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Footprints } from 'lucide-react';

export default function FootCareSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Foot Care for Seniors | TekSure" description="Daily foot care prevents falls + amputations. Plain-English guide for senior feet." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Footprints className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Foot Care for Seniors</h1>
          <p className="text-lg text-muted-foreground">Healthy feet = independence + no falls.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily check</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Look at top + bottom of feet daily (use mirror or ask spouse).</li>
              <li>Cuts, sores, redness, swelling, blisters.</li>
              <li>Cracks between toes (fungus).</li>
              <li>Wash + dry thoroughly, especially between toes.</li>
              <li>Moisturize tops + bottoms (NOT between toes).</li>
              <li>Trim nails straight across, not curved.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Diabetic feet ESSENTIAL</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Diabetes = nerve damage = can&apos;t feel injuries.</li>
              <li>Small cut → infection → amputation if missed.</li>
              <li>NEVER walk barefoot — even at home.</li>
              <li>Check inside shoes for pebbles before wearing.</li>
              <li>See podiatrist every 3 months.</li>
              <li>Medicare covers diabetic shoes annually with prescription.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior shoe rules</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Closed-toe always.</li>
              <li>Velcro or BOA closures if fingers hurt with laces.</li>
              <li>Wide toe box — feet spread with age.</li>
              <li>Non-slip rubber soles.</li>
              <li>Shop late afternoon (feet largest).</li>
              <li>Brands: SAS, New Balance, Hoka (cushion), Skechers Go Walk.</li>
              <li>Avoid: heels, flip-flops, slippers without backs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common problems</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bunions</strong> — wide-toe shoes, bunion pads, surgery if severe.</li>
              <li><strong>Hammer toes</strong> — gel toe caps, surgery option.</li>
              <li><strong>Plantar fasciitis</strong> — arch support, stretches, ice.</li>
              <li><strong>Toenail fungus</strong> — Lamisil OTC or prescription.</li>
              <li><strong>Corns/calluses</strong> — pumice stone after bath. NOT corn removers if diabetic.</li>
              <li><strong>Swelling</strong> — elevate legs, compression socks 15-20 mmHg.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Podiatrist coverage</h3>
            <p className="text-sm text-muted-foreground">Medicare covers podiatrist for diabetes-related foot care + medical conditions. Routine nail trimming usually NOT covered unless &quot;at-risk&quot; status. Many podiatrists charge $30-50 for nail care if not covered. Worth it if vision/flexibility issues.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
