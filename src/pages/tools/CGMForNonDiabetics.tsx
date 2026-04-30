import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart } from 'lucide-react';

export default function CGMForNonDiabetics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="CGM for Non-Diabetic Seniors | TekSure" description="Continuous glucose monitors for prediabetes + healthy aging. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <LineChart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">CGM Beyond Diabetes</h1>
          <p className="text-lg text-muted-foreground">See what food does to your body — real time.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What CGM shows</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Glucose every 5 minutes, 24/7.</li>
              <li>Spikes from food.</li>
              <li>Energy crashes.</li>
              <li>Sleep effect on glucose.</li>
              <li>Exercise effect.</li>
              <li>Stress effect.</li>
              <li>Game-changer for prediabetes prevention.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">2024+ over-the-counter CGMs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Stelo (Dexcom)</strong> — $89/2 sensors. NO prescription needed.</li>
              <li><strong>Lingo (Abbott)</strong> — $99/sensor. NO prescription.</li>
              <li>14-day sensor.</li>
              <li>Phone app shows readings.</li>
              <li>Try 1-3 months — change habits forever.</li>
              <li>Most senior-relevant tech of decade.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior insights</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>White rice / bread spike huge for seniors.</li>
              <li>Walking 10 min after meals = much lower spike.</li>
              <li>Eating protein first = lower spike.</li>
              <li>Sleep deprivation raises glucose next day.</li>
              <li>Stress raises glucose.</li>
              <li>Adjust diet based on YOUR data.</li>
              <li>What works varies person to person.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Prediabetes prevention</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>50% of seniors have prediabetes.</li>
              <li>Most don&apos;t know.</li>
              <li>CGM catches issues before A1C blood test.</li>
              <li>Diet + exercise reverses prediabetes 60%+.</li>
              <li>Critical window — act now.</li>
              <li>Doctor can prescribe CGM if A1C 5.7+ on Medicare.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apply sensor to back of arm (painless).</li>
              <li>Lasts 14 days.</li>
              <li>Pair with phone app.</li>
              <li>Eat normally first 2-3 days = baseline.</li>
              <li>Then experiment.</li>
              <li>Same meal different times — see patterns.</li>
              <li>Walk after high-carb meals — note difference.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Caution</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Not medical advice — just data.</li>
              <li>Don&apos;t obsess over readings.</li>
              <li>Some people develop anxiety / disordered eating.</li>
              <li>Take breaks between sensors.</li>
              <li>Talk to doctor about findings.</li>
              <li>If diabetic — get prescription CGM (Dexcom G7, Libre 3) covered by Medicare.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Future of senior health</h3>
            <p className="text-sm text-muted-foreground">Personalized health = data + action. CGM cheap + accessible 2024+. Apple/Samsung adding non-invasive glucose to watches eventually. Smart rings adding too. Tracking your body = key to aging well. Many seniors lose 10-20 lbs + reverse prediabetes after 1 month with CGM.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
