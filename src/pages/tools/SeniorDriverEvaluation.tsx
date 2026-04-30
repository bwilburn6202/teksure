import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardCheck } from 'lucide-react';

export default function SeniorDriverEvaluation() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Driver Evaluation Guide | TekSure" description="Is it time to stop driving? Senior driver evaluations, family conversations, alternatives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ClipboardCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Driver Evaluation</h1>
          <p className="text-lg text-muted-foreground">When is it time to hand over keys?</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Warning signs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Multiple recent fender benders.</li>
              <li>Getting lost in familiar areas.</li>
              <li>Family + friends afraid to ride with you.</li>
              <li>Slow reaction to traffic situations.</li>
              <li>Difficulty seeing road signs at night.</li>
              <li>Other drivers honking frequently at you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Driver Rehabilitation Specialist</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Occupational therapist trained in driving.</li>
              <li>Comprehensive driving evaluation.</li>
              <li>2–4 hours, costs $200–$500.</li>
              <li>Sometimes covered by Medicare.</li>
              <li>Find at AOTA.org.</li>
              <li>Most accurate professional assessment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AAA Senior Driver tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>SeniorDriving.AAA.com — free resources.</li>
              <li>Self-assessment quizzes.</li>
              <li>RoadwiseRX — medication side effects on driving.</li>
              <li>Refresher driving courses.</li>
              <li>Tips for adapting driving habits.</li>
              <li>Free for everyone, not just AAA members.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AARP Smart Driver Course</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Online or in-classroom course.</li>
              <li>4 hours total.</li>
              <li>Insurance discount in many states.</li>
              <li>Refreshes traffic laws.</li>
              <li>Senior-specific defensive driving.</li>
              <li>$25 for AARP members.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Family conversation tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Address concerns early — not after accident.</li>
              <li>Use specific examples without judgment.</li>
              <li>Suggest professional evaluation.</li>
              <li>Discuss alternatives — Uber, paratransit.</li>
              <li>Don&apos;t take keys without conversation.</li>
              <li>Frame as safety, not aging.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Adjusting driving habits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Drive only daytime — no night driving.</li>
              <li>Avoid highways or rush hour.</li>
              <li>Stay in familiar areas.</li>
              <li>Plan routes ahead — no last-minute decisions.</li>
              <li>Don&apos;t drive in bad weather.</li>
              <li>Less driving = safer driving.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Plan for the day before it comes</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t wait until an accident forces the issue. Set up Uber on your phone NOW while you&apos;re still driving. Identify ride alternatives. Take the AARP Smart Driver Course this year. The hardest part of giving up driving isn&apos;t the act — it&apos;s the feeling of lost independence. Having alternatives ready makes the eventual transition much easier.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
