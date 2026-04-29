import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardCheck } from 'lucide-react';

export default function PreSurgeryChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pre-Surgery Checklist for Seniors | TekSure" description="Best surgery outcomes start before. Plain-English senior surgery prep checklist." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ClipboardCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pre-Surgery Checklist</h1>
          <p className="text-lg text-muted-foreground">Better recovery = better preparation.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">3-4 weeks before</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Medical clearance from primary doctor.</li>
              <li>Pre-op blood work + EKG if needed.</li>
              <li>Stop smoking — even short break helps healing.</li>
              <li>Limit alcohol.</li>
              <li>Get vaccines current.</li>
              <li>Address dental issues.</li>
              <li>Start light exercise — boosts recovery.</li>
              <li>Buy at-home recovery supplies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">1-2 weeks before</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Confirm meds list with surgeon (some stop, some continue).</li>
              <li>Stop blood thinners only if doctor says.</li>
              <li>Stop NSAIDs (Advil, Aleve) usually 1 week before.</li>
              <li>Stop herbs (ginkgo, garlic, vitamin E) — bleeding risk.</li>
              <li>Confirm transportation home day-of.</li>
              <li>Arrange caregiver for recovery period.</li>
              <li>Stock fridge + pantry.</li>
              <li>Prepare bedroom — close to bathroom.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Day before</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Follow exact eating + drinking rules.</li>
              <li>Shower with surgical scrub if instructed.</li>
              <li>Pack hospital bag.</li>
              <li>Pack: ID, insurance card, list of meds, glasses, hearing aids, CPAP, phone charger, comfortable clothes home.</li>
              <li>Remove jewelry + nail polish.</li>
              <li>Get good sleep.</li>
              <li>Confirm time + location.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Recovery setup at home</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bedroom on first floor if possible.</li>
              <li>Reach phone, water, meds from bed.</li>
              <li>Walker / cane / wheelchair as needed.</li>
              <li>Raised toilet seat / shower chair.</li>
              <li>Frozen meals stocked.</li>
              <li>Clear walking paths — no rugs.</li>
              <li>Pet care arranged.</li>
              <li>Mail forwarding if longer recovery.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Post-op recovery</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Walk early + often (prevents clots).</li>
              <li>Pain manage on schedule (don&apos;t wait until severe).</li>
              <li>Wean off opioids ASAP — addiction risk.</li>
              <li>Watch incision daily — redness, drainage, swelling = call.</li>
              <li>Watch for confusion (post-op delirium common in seniors).</li>
              <li>Hydrate.</li>
              <li>Eat protein for healing.</li>
              <li>Follow up appointments.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior surgery risks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Delirium (temporary confusion) — common.</li>
              <li>Pneumonia — sit up, breathe deep, walk.</li>
              <li>Blood clots — wear compression, walk.</li>
              <li>Falls during recovery — most common ER return.</li>
              <li>Constipation from anesthesia + opioids.</li>
              <li>Discuss ALL with anesthesia + surgeon.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Bring advocate</h3>
            <p className="text-sm text-muted-foreground">Spouse or adult child should be present at admission + discharge. Advocate hears doctor, asks questions you forget. Discharge instructions OVERWHELMING — second person catches details. Have list of questions ready. Don&apos;t leave hospital confused — ask until clear.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
