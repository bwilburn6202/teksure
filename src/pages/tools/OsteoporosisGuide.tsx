import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bone } from 'lucide-react';

export default function OsteoporosisGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Osteoporosis Guide for Seniors | TekSure" description="Strong bones after 65. Plain-English guide to DEXA scans, calcium, weight-bearing exercise, meds." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Osteoporosis</h1>
          <p className="text-lg text-muted-foreground">Strong bones = no fractures = independence.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get tested</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>DEXA scan — measures bone density.</li>
              <li>Medicare covers every 2 yrs for women 65+.</li>
              <li>Men 70+ should get tested.</li>
              <li>T-score: above -1 normal, -1 to -2.5 osteopenia, below -2.5 osteoporosis.</li>
              <li>Don&apos;t wait until you fracture.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Calcium + Vitamin D</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Calcium 1,200mg/day for women 50+, men 70+.</li>
              <li>From food first — yogurt, milk, cheese, fortified.</li>
              <li>Calcium supplement only if not getting enough food.</li>
              <li>Vitamin D 800-1,000 IU/day (most seniors low).</li>
              <li>Vitamin K2 — newer research, helps calcium go to bones.</li>
              <li>Get blood test — many seniors deficient.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Weight-bearing exercise</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Walking, hiking, dancing — bones load.</li>
              <li>Strength training 2-3x/week — biggest impact.</li>
              <li>Avoid: forward bending, twisting if osteoporosis.</li>
              <li>Tai Chi — improves balance + reduces falls.</li>
              <li>Swimming great for fitness, NOT for bones.</li>
              <li>30 min/day weight-bearing minimum.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medications</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bisphosphonates</strong> (Fosamax, Boniva) — first-line.</li>
              <li><strong>Reclast (zoledronic acid)</strong> — yearly IV. Avoids stomach issues.</li>
              <li><strong>Prolia (denosumab)</strong> — every 6 months injection.</li>
              <li><strong>Forteo, Tymlos</strong> — bone-building, severe cases.</li>
              <li><strong>Evenity</strong> — newer, monthly injection.</li>
              <li>Rare side effect: jaw osteonecrosis (talk to dentist before).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fall prevention essential</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1 fall = potential hip fracture = 50% chance never walking same.</li>
              <li>See /tools/fall-prevention-guide.</li>
              <li>See /tools/stair-safety-checklist.</li>
              <li>Vision + hearing checkups annual.</li>
              <li>Review medications for dizziness side effects.</li>
              <li>Strong leg muscles = balance + faster recovery.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free resources</h3>
            <p className="text-sm text-muted-foreground"><strong>National Osteoporosis Foundation</strong> — bonehealthandosteoporosis.org. <strong>FRAX calculator</strong> — predicts 10-year fracture risk. <strong>NIH Osteoporosis Resource Center</strong> — niams.nih.gov. Quit smoking + limit alcohol = bones improve. It&apos;s never too late.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
