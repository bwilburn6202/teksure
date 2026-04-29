import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

const PLATFORMS = [
  { name: 'Your doctor via MyChart', cost: 'Insurance copay', best: 'Best — keeps your usual doctor in the loop. Sees your records.', good: 'Schedule via patient portal.' },
  { name: 'Teladoc Health', cost: '$0-$75 per visit', best: 'Biggest 24/7 service. Often FREE through Medicare Advantage and employer plans.', good: 'Wait time usually under 30 min.' },
  { name: 'Amwell', cost: '$79 urgent care', best: 'Solid alternative. Many insurance partners.', good: 'Strong dermatology and behavioral health.' },
  { name: 'MDLive', cost: '$0-$82 visit', best: 'Owned by Cigna. Often the in-network option for Cigna and many BCBS plans.', good: 'Especially strong on therapy and psychiatry.' },
  { name: 'PlushCare', cost: '$15/month + $0-99 visits', best: 'Same primary care doctor every visit. Subscription-based.', good: 'For people who want continuity.' },
  { name: 'CVS MinuteClinic Virtual Care', cost: '$59 cash; insurance accepted', best: 'CVS\'s telehealth. Strong urgent care.', good: 'Refills go to CVS pharmacy.' },
];

export default function TelehealthVisitCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Telehealth Visit Coach — Doctor From Your Couch | TekSure" description="Sick at 9 PM, can\'t leave the house? Telehealth doctor visit in 30 minutes. Plain-English guide to the best platforms and what they treat." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Stethoscope className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Telehealth Visit Coach</h1>
          <p className="text-lg text-muted-foreground">See a doctor from your couch in 30 minutes.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">When telehealth is great</h2>
            <ul className="text-sm list-disc pl-5">
              <li>Cold, flu, sinus infection.</li>
              <li>Pink eye, mild rashes.</li>
              <li>UTIs.</li>
              <li>Med refills.</li>
              <li>Mental health visits.</li>
              <li>Follow-up with your usual doctor when stable.</li>
            </ul>
            <p className="text-sm mt-2 font-semibold">Don\'t use telehealth for: chest pain, severe shortness of breath, stroke symptoms (face droop, weakness), serious bleeding, severe pain. Call 911.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {PLATFORMS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm mb-1">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Before the visit</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Find a quiet, well-lit room.</li>
              <li>Have your phone or laptop charged or plugged in.</li>
              <li>List your symptoms in order of severity.</li>
              <li>Have your medication list ready.</li>
              <li>Know your pharmacy name and address (they\'ll send any prescription there).</li>
              <li>If something visible (rash, swelling) — make sure the camera shows it clearly.</li>
              <li>Take your temp and blood pressure if relevant. Have those numbers ready.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">During the visit</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Speak slowly and clearly.</li>
              <li>If you can\'t hear well, ask the doctor to type the diagnosis in chat.</li>
              <li>At the end, repeat back the plan: "So you\'re prescribing X for 7 days, and I follow up if Y?".</li>
              <li>Ask: "When should I be seen in person?"</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Medicare Advantage often includes free telehealth</h3>
            <p className="text-sm text-muted-foreground">Many Medicare Advantage plans include unlimited telehealth visits with $0 copay. Check your plan benefits — call the number on your card. Original Medicare also covers telehealth as of 2024 in most cases.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
