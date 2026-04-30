import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wine } from 'lucide-react';

export default function AlcoholForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Alcohol Guidelines for Seniors | TekSure" description="How alcohol affects seniors. Plain-English alcohol guide for 65+." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wine className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Alcohol + Seniors</h1>
          <p className="text-lg text-muted-foreground">Body changes. So should drinking.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors react differently</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Less water in body = stronger effect.</li>
              <li>Slower metabolism — alcohol stays longer.</li>
              <li>Many medications interact dangerously.</li>
              <li>Higher fall risk.</li>
              <li>Worsens depression + anxiety.</li>
              <li>Bad for sleep (looks helpful, isn&apos;t).</li>
              <li>Liver less efficient.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior limits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NIH says 65+ men: &lt;3 drinks/day, &lt;7/week.</li>
              <li>Women: &lt;2/day, &lt;7/week.</li>
              <li>1 drink = 5oz wine, 12oz beer, 1.5oz spirits.</li>
              <li>Many studies suggest LESS = better.</li>
              <li>Recent research — no &quot;healthy&quot; alcohol amount.</li>
              <li>If health issues — consult doctor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medication interactions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>BP meds — stronger drop.</li>
              <li>Sleep meds — dangerous combo.</li>
              <li>Pain meds — overdose risk.</li>
              <li>Diabetes meds — hypoglycemia.</li>
              <li>Anticoagulants — bleeding risk.</li>
              <li>Acetaminophen — liver damage.</li>
              <li>Read med labels — many warn against alcohol.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior alcohol problems</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Late-onset alcoholism more common than realized.</li>
              <li>Often hidden — &quot;just a glass of wine.&quot;</li>
              <li>Common after retirement / loss.</li>
              <li>Worsens depression.</li>
              <li>Falls — hip fractures life-changing.</li>
              <li>Speak with primary doctor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cutting back / quitting</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Talk to doctor — taper safely if heavy drinker.</li>
              <li>Never cold-turkey if heavy — DTs dangerous.</li>
              <li>AA + senior chapters.</li>
              <li>SMART Recovery.</li>
              <li>Therapy + medication options.</li>
              <li>Naltrexone, Antabuse if needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Help</h3>
            <p className="text-sm text-muted-foreground"><strong>SAMHSA helpline</strong> — 1-800-662-4357. FREE 24/7. <strong>AA</strong> — local meetings free. <strong>Senior alcohol treatment</strong> programs exist. Mental health counselors specialized. Many seniors find non-drinking liberating + healthier.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
