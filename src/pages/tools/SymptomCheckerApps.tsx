import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope, AlertTriangle } from 'lucide-react';

const APPS = [
  { name: 'MedlinePlus (free)', cost: 'FREE — US government', best: 'Trustworthy plain-English health info from the National Library of Medicine. Best non-scary first stop.', good: 'medlineplus.gov.' },
  { name: 'Mayo Clinic Symptom Checker', cost: 'FREE', best: 'Major US hospital. Reliable, conservative.', good: 'Asks short questions; gives broad list of possibilities.' },
  { name: 'Ada Health (free app)', cost: 'FREE', best: 'AI-style symptom interview. 5 minutes. Suggests likely conditions and urgency.', good: 'Doesn\'t share data with insurers.' },
  { name: 'WebMD', cost: 'FREE with ads', best: 'Most well-known. Tendency to over-warn — every headache becomes "could be a brain tumor".', good: 'Use sparingly. Easy to spiral.' },
  { name: 'Healthwise / patient portals', cost: 'FREE if your doctor uses it', best: 'Symptom checker INSIDE your patient portal — sends results to your real doctor.', good: 'Best when available.' },
  { name: 'NHS UK app', cost: 'FREE', best: 'British. Surprisingly useful in US — clean, conservative, guides you "what to do tonight".', good: 'Best non-alarmist tone.' },
  { name: 'ChatGPT / Claude', cost: 'Free', best: 'For UNDERSTANDING what your doctor said. "What does this lab result mean in plain English?"', good: 'NOT for diagnosis. For interpreting after a doctor visit.' },
];

export default function SymptomCheckerApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Symptom Checker Apps — Mayo, MedlinePlus, Ada | TekSure" description="Better than Dr. Google. Plain-English guide to free symptom checkers that won\'t scare you into the ER unnecessarily." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Stethoscope className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Symptom Checker Apps</h1>
          <p className="text-lg text-muted-foreground">Don\'t Google "headache" alone. Use these instead.</p>
        </div>

        <Card className="mb-6 border-destructive">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive shrink-0" />
              <div>
                <h2 className="font-bold mb-1">Call 911 if</h2>
                <ul className="text-sm list-disc pl-5">
                  <li>Chest pain, shortness of breath, or pressure.</li>
                  <li>One-sided weakness, slurred speech, droopy face (stroke).</li>
                  <li>Severe head injury after fall.</li>
                  <li>Allergic reaction with throat swelling.</li>
                  <li>Sudden severe headache "worst ever".</li>
                  <li>Major bleeding.</li>
                </ul>
                <p className="text-sm mt-2">Don\'t open an app. Call 911.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Better than symptom checkers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Your patient portal\'s message feature</strong> — message your real doctor. Free, replies usually in 1-2 days.</li>
              <li><strong>Telehealth (Teladoc, Amwell)</strong> — 30-minute video call with real doctor. Can prescribe.</li>
              <li><strong>Pharmacist consultation</strong> — free at every pharmacy. Excellent for "should I see a doctor?" advice.</li>
              <li><strong>Nurse hotline</strong> — many insurance plans have a 24/7 free nurse hotline. Number on your card.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Use AI carefully</h3>
            <p className="text-sm text-muted-foreground">Don\'t ask ChatGPT "Do I have cancer?" — it\'s not a diagnostic tool. DO ask it: "Help me prepare 5 questions to ask my doctor about [condition]" or "Translate this lab report into plain English". Good companion, not a substitute.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
