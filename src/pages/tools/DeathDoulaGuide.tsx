import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function DeathDoulaGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Death Doula Guide for Seniors | TekSure" description="Compassionate end-of-life support. Plain-English death doula guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Death Doula Guide</h1>
          <p className="text-lg text-muted-foreground">Like birth doulas — but for end of life.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What death doulas do</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Emotional support to dying + family.</li>
              <li>Help plan end-of-life wishes.</li>
              <li>Hold space at bedside.</li>
              <li>Coordinate with hospice.</li>
              <li>Guide family through process.</li>
              <li>Vigil during active dying.</li>
              <li>NOT medical care.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">vs hospice</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hospice</strong> — medical care, Medicare-covered.</li>
              <li><strong>Doula</strong> — emotional + practical support.</li>
              <li>Both work together.</li>
              <li>Doula = additional hands.</li>
              <li>NOT replacement for hospice.</li>
              <li>Family gets more support.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$50-100/hour typical.</li>
              <li>$200-2,000 packages.</li>
              <li>NOT covered by Medicare.</li>
              <li>Some sliding scale.</li>
              <li>Volunteer doulas exist (free).</li>
              <li>Some hospitals offer free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find a doula</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>NEDA (National End-of-Life Doula Alliance)</strong> — find directory.</li>
              <li><strong>INELDA (International End of Life Doula Association)</strong>.</li>
              <li>Hospice referrals.</li>
              <li>Hospital social workers know.</li>
              <li>Senior centers may.</li>
              <li>Faith communities.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When useful</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Limited family support.</li>
              <li>Family geographically far.</li>
              <li>Complex emotional issues.</li>
              <li>Desire for non-religious spiritual support.</li>
              <li>Want to plan in advance.</li>
              <li>Solo aging.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Plan ahead</h3>
            <p className="text-sm text-muted-foreground">Some seniors hire doula years before for advance planning + relationship building. Most beneficial during last weeks/months. Death doulas growing field. Better when arranged before crisis. Provides peace + dignity.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
