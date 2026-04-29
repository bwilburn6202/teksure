import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

export default function CPAPHelpSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="CPAP Help for Seniors | TekSure" description="Sleep apnea + CPAP setup. Plain-English guide for seniors — masks, cleaning, troubleshooting." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">CPAP Help for Seniors</h1>
          <p className="text-lg text-muted-foreground">Treat sleep apnea = energy + brain back.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Do you have sleep apnea?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Loud snoring most nights.</li>
              <li>Spouse hears you stop breathing.</li>
              <li>Wake gasping or choking.</li>
              <li>Tired all day despite 7+ hrs sleep.</li>
              <li>Morning headaches.</li>
              <li>50% of seniors 65+ have it — most undiagnosed.</li>
              <li>Untreated = heart disease, stroke, dementia.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get diagnosed</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Ask doctor for sleep study referral.</li>
              <li>Home sleep test usually fine ($150-300).</li>
              <li>Medicare covers with diagnosis.</li>
              <li>Lab study if home test inconclusive.</li>
              <li>AHI score: 5-15 mild, 15-30 moderate, 30+ severe.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mask types</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Nasal pillow</strong> — small, light. Good if mouth-breather + chinstrap.</li>
              <li><strong>Nasal mask</strong> — covers nose. Most popular.</li>
              <li><strong>Full-face</strong> — nose + mouth. Best for mouth breathers.</li>
              <li>Try multiple — DME supplier should let you swap first 30 days.</li>
              <li>Comfort = compliance. Keep trying until right fit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cleaning + care</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wipe mask cushion daily with mild soap.</li>
              <li>Wash mask + tubing weekly.</li>
              <li>Replace mask cushion monthly.</li>
              <li>Replace mask every 6 months.</li>
              <li>Replace tubing every 3 months.</li>
              <li>Use distilled water in humidifier.</li>
              <li>SoClean cleaners — convenient but not required.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common problems</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Dry mouth</strong> — increase humidifier setting.</li>
              <li><strong>Mask leak</strong> — try different size/type.</li>
              <li><strong>Aerophagia (gas)</strong> — pressure too high. Doctor adjust.</li>
              <li><strong>Skin irritation</strong> — try different cushion material.</li>
              <li><strong>Claustrophobia</strong> — try nasal pillow type.</li>
              <li>Don&apos;t give up — most adjust within 2-4 weeks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Resources</h3>
            <p className="text-sm text-muted-foreground"><strong>cpap.com</strong> — supplies + advice. <strong>Reddit r/CPAP</strong> — active community. <strong>Sleep Foundation</strong> — sleepfoundation.org. Free. Medicare Part B covers CPAP rental, becomes yours after 13 months.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
