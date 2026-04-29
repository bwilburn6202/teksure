import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function QigongForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Qigong for Seniors | TekSure" description="Gentle Chinese exercise for energy + balance. Plain-English Qigong guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Qigong for Seniors</h1>
          <p className="text-lg text-muted-foreground">Even gentler than Tai Chi. Easy energy boost.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Qigong vs Tai Chi</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Qigong = simpler, repetitive movements.</li>
              <li>Tai Chi = longer flowing sequences.</li>
              <li>Qigong easier for very limited mobility.</li>
              <li>Both Chinese health practices.</li>
              <li>Can do Qigong sitting.</li>
              <li>5-10 min daily enough.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Health benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reduces stress + anxiety.</li>
              <li>Improves circulation.</li>
              <li>Better sleep.</li>
              <li>Pain reduction (especially arthritis).</li>
              <li>Lower BP.</li>
              <li>Boost immunity (some studies).</li>
              <li>Mental focus.</li>
              <li>Studied for cancer recovery, COPD.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy first practice</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stand or sit comfortably.</li>
              <li>Breathe slowly through nose.</li>
              <li>Raise arms slowly while inhaling.</li>
              <li>Lower while exhaling.</li>
              <li>10 reps.</li>
              <li>Add gentle hip turns.</li>
              <li>That&apos;s it. Already doing Qigong.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best learning resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Lee Holden</strong> — YouTube + courses. Most popular Qigong teacher.</li>
              <li><strong>Qigong with Jeffrey Chand</strong> — YouTube channel.</li>
              <li><strong>5 Element Qigong</strong> by Lee Holden — DVD.</li>
              <li><strong>The Healer Within</strong> book by Roger Jahnke.</li>
              <li><strong>Tai Chi For Health Institute</strong> — Qigong programs too.</li>
              <li>Free YouTube very good.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">8 Brocades — classic senior set</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Ba Duan Jin — 8 simple movements.</li>
              <li>1,000+ years old.</li>
              <li>Each move 8 reps.</li>
              <li>Whole sequence 10-15 min.</li>
              <li>Free YouTube tutorials.</li>
              <li>Hospitals + retirement homes worldwide use.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Pair with meditation</h3>
            <p className="text-sm text-muted-foreground">Qigong + meditation = perfect senior daily practice. 10 min movement + 10 min sitting meditation = transformative over months. Both improve cognition, mood, sleep. No equipment needed. Can do home alone or with classes. Most seniors find this most enjoyable exercise.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
