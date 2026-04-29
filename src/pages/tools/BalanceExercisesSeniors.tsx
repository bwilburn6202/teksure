import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpDown } from 'lucide-react';

export default function BalanceExercisesSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Balance Exercises for Seniors | TekSure" description="Improve balance and prevent falls with these exercises for seniors. Safe at-home techniques." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ArrowUpDown className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Balance Exercises</h1>
          <p className="text-lg text-muted-foreground">Prevent falls. Improve stability.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why balance matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Falls are the #1 cause of injury in seniors.</li>
              <li>Balance naturally declines with age.</li>
              <li>Good news: balance can be trained and improved.</li>
              <li>Even 5 minutes daily makes a measurable difference.</li>
              <li>Physical therapists prescribe these exact exercises.</li>
              <li>Tai chi has strongest research backing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Starting exercises (beginners)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stand on one foot — hold counter for support.</li>
              <li>Hold for 10 seconds, switch feet.</li>
              <li>Heel-to-toe walk — one foot directly in front of other.</li>
              <li>Sit-to-stand — rise from chair slowly, no hands.</li>
              <li>Side leg raise — stand, lift leg sideways.</li>
              <li>Always have something nearby to grab.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safe practice setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stand near kitchen counter or sturdy chair.</li>
              <li>Wear shoes with good grip — not socks.</li>
              <li>Clear floor area — no rugs to trip on.</li>
              <li>Have phone nearby — just in case.</li>
              <li>Never exercise balance when tired.</li>
              <li>Morning practice often best — mind is fresh.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tai chi for balance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Strongest research for fall prevention.</li>
              <li>Gentle, slow movements — safe for all fitness levels.</li>
              <li>Free beginner classes on YouTube.</li>
              <li>Search: &quot;Tai chi for seniors beginners.&quot;</li>
              <li>YMCA and senior centers often offer classes.</li>
              <li>8-week program shows measurable improvement.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps + resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Otago Exercise Program — free PDF from government.</li>
              <li>STOP FALLS app — evidence-based exercises.</li>
              <li>CDC STEADI program — balance resources for seniors.</li>
              <li>YouTube: &quot;NIA balance exercises seniors.&quot;</li>
              <li>Your doctor can refer to physical therapy.</li>
              <li>Medicare covers PT — ask your doctor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Environment check too</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Remove loose rugs — major fall hazard.</li>
              <li>Grab bars in shower and toilet area.</li>
              <li>Good lighting in hallways and stairs.</li>
              <li>Keep pathways clear — no cords to trip on.</li>
              <li>Non-slip mat in shower.</li>
              <li>Wear supportive shoes indoors too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">One-leg stand every day</h3>
            <p className="text-sm text-muted-foreground">The simplest daily balance exercise: while brushing teeth, stand on one foot while holding the counter. Switch feet halfway through. That&apos;s it — 2 minutes, twice a day, while doing something you already do. Over 4–8 weeks this measurably improves balance. If you can eventually do it without holding the counter, even better. Start with support and build confidence.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
