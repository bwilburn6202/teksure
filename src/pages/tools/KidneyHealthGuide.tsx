import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function KidneyHealthGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Kidney Health for Seniors | TekSure" description="Protect kidneys + chronic kidney disease. Plain-English guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Kidney Health</h1>
          <p className="text-lg text-muted-foreground">Silent issues. Catch + slow them.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior kidney facts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>40% of seniors 65+ have CKD.</li>
              <li>Most don&apos;t know.</li>
              <li>Kidney function declines naturally with age.</li>
              <li>Diabetes + high BP = main causes.</li>
              <li>Often no symptoms early.</li>
              <li>Catch + slow — don&apos;t reverse.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get tested</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Blood test: GFR (glomerular filtration rate).</li>
              <li>Urine test: protein in urine.</li>
              <li>Annual after 60.</li>
              <li>Required if diabetes or high BP.</li>
              <li>GFR over 60 = healthy.</li>
              <li>Under 60 — talk to doctor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Protect kidneys</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Control BP under 130/80.</li>
              <li>Control diabetes (A1C).</li>
              <li>Limit salt under 1,500mg/day.</li>
              <li>Drink water (not too much).</li>
              <li>Avoid NSAIDs long-term (Advil, Aleve).</li>
              <li>Quit smoking.</li>
              <li>Limit alcohol.</li>
              <li>Maintain healthy weight.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If diagnosed CKD</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>See nephrologist.</li>
              <li>Renal-friendly diet.</li>
              <li>Avoid certain medications (NSAIDs, contrast dye).</li>
              <li>Check meds with kidney-aware pharmacist.</li>
              <li>SGLT2 inhibitors slow CKD.</li>
              <li>Stage 4-5 — discuss dialysis + transplant.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid kidney damage</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Limit Advil, Aleve, Motrin (NSAIDs).</li>
              <li>Tylenol safer for pain.</li>
              <li>Stay hydrated.</li>
              <li>Avoid contrast dye when possible.</li>
              <li>Tell doctors about kidney issues.</li>
              <li>Many drugs need dose adjustment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free resources</h3>
            <p className="text-sm text-muted-foreground"><strong>National Kidney Foundation</strong> — kidney.org. Free guides + community. <strong>DaVita Kidney Care</strong> — recipe + education. Most insurance covers nephrology consult. Be proactive — kidneys silent until late.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
