import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorDepressionGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Depression Guide | TekSure" description="Spot + treat depression in seniors. Plain-English mental health guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Depression</h1>
          <p className="text-lg text-muted-foreground">Common. Treatable. Don&apos;t suffer alone.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">More common than think</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>20% of seniors have depression.</li>
              <li>Often missed — looks like &quot;just aging.&quot;</li>
              <li>Higher in widowed, isolated, chronically ill.</li>
              <li>Highest suicide rate in 65+ men.</li>
              <li>Treatable with therapy + medication.</li>
              <li>Generation often dismisses mental health.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior symptoms (different)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Loss of interest (NOT just &quot;sad&quot;).</li>
              <li>Sleep changes (too much or too little).</li>
              <li>Appetite changes.</li>
              <li>Fatigue / low energy.</li>
              <li>Feeling worthless / burden.</li>
              <li>Memory + concentration issues.</li>
              <li>Body aches without medical cause.</li>
              <li>Withdrawal from family/activities.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tell primary doctor — they screen + refer.</li>
              <li>Medicare covers therapy + meds.</li>
              <li>Psychology Today — find therapist.</li>
              <li>Online therapy (BetterHelp, Talkspace) Medicare-covered some plans.</li>
              <li>Many specialize in geriatric mental health.</li>
              <li>SAMHSA helpline 1-800-662-4357.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lifestyle helps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Daily walks (proven antidepressant).</li>
              <li>Social engagement — call/visit weekly.</li>
              <li>Volunteer = sense of purpose.</li>
              <li>Pet (see /tools/best-pets-for-seniors).</li>
              <li>Sunlight (vitamin D).</li>
              <li>Limit alcohol (depressant).</li>
              <li>Sleep schedule.</li>
              <li>Mediterranean diet.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Crisis resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> — call or text 988. FREE.</li>
              <li><strong>Friendship Line for Seniors</strong> — 1-800-971-0016.</li>
              <li>If unsafe — go to ER.</li>
              <li>Tell trusted family member.</li>
              <li>Mental health emergency = real emergency.</li>
              <li>Help available 24/7.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Reach out</h3>
            <p className="text-sm text-muted-foreground">Depression in seniors highly treatable. SSRIs work well. Therapy proven effective. Don&apos;t suffer in silence — generation often does. Tell ONE person. Doctor, family, friend, hotline. First step hardest. Better days possible.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
