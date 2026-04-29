import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function HospiceMyths() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hospice Myths Busted | TekSure" description="What hospice really is. Plain-English guide for senior families." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hospice Myths Busted</h1>
          <p className="text-lg text-muted-foreground">Hospice is comfort. Not giving up.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Myth: Hospice = giving up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>FALSE</strong>. Hospice = best comfort + quality of life.</li>
              <li>Aggressive symptom management.</li>
              <li>Family support.</li>
              <li>Many live LONGER on hospice (less harmful treatments).</li>
              <li>Some &quot;graduate&quot; off hospice (improve).</li>
              <li>Quality &gt; quantity sometimes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Myth: Hospice means death soon</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Eligible if life expectancy 6 months or less.</li>
              <li>If life prolongs — re-certify.</li>
              <li>Many on hospice 1+ years.</li>
              <li>Some improve, leave hospice.</li>
              <li>Better quality of life often.</li>
              <li>Late-hospice = less benefit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Myth: Have to be home</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most hospice IS at home.</li>
              <li>Also in nursing homes, assisted living.</li>
              <li>Hospice inpatient unit if symptoms uncontrolled.</li>
              <li>You choose where.</li>
              <li>Same hospice team continues.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Myth: No medications</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>FALSE</strong>. Hospice covers all comfort meds.</li>
              <li>Pain control aggressive.</li>
              <li>No withdrawal of essential meds usually.</li>
              <li>Some curative-only stopped (chemo, etc.).</li>
              <li>Comfort focus.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Real hospice benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FREE with Medicare (full benefit).</li>
              <li>Nursing visits, doctor, social worker, chaplain.</li>
              <li>All medications + equipment covered.</li>
              <li>24/7 phone access.</li>
              <li>13 months bereavement support after.</li>
              <li>Volunteer companions.</li>
              <li>Keep family from caregiving alone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t wait too long</h3>
            <p className="text-sm text-muted-foreground">Median hospice stay = 3 weeks. Should be 3-6 months. Late hospice = lost benefits. Ask doctor: &quot;Would you be surprised if I/parent died in next year?&quot; If no — discuss hospice. Earlier = better quality of life. Don&apos;t wait until last days.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
