import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

const APPS = [
  { name: 'Library Brainfuse / HelpNow', cost: 'FREE with library card', best: 'Real human tutors available afternoons & evenings. K-12 + college. Math, writing, science.', good: 'Most underused free benefit.' },
  { name: 'Khan Academy', cost: 'FREE', best: 'Self-paced. Best for math, science, AP courses, SAT prep.', good: 'Free forever.' },
  { name: 'Wyzant', cost: '$30-100/hour, varies', best: '1-on-1 in-person OR online tutors. Many subjects, every level. Real qualifications.', good: 'Best for ongoing weekly tutoring.' },
  { name: 'Outschool', cost: '$15-40/class, often $10-20/hour', best: 'Live online classes for kids 3-18 in groups of 1-12. Fascinating non-traditional topics: Minecraft history, Spanish through baking, etc.', good: 'Best for enrichment, not homework.' },
  { name: 'Varsity Tutors', cost: '$40-80/hour', best: 'Test prep specialty (SAT/ACT). Many tutor packages. Rotating tutors.', good: 'Worth it for major tests.' },
  { name: 'Tutor.com', cost: 'FREE through some libraries and military', best: '24/7 tutoring. Often free if you have library card or are a military family.', good: 'Check eligibility before paying elsewhere.' },
  { name: 'Preply', cost: 'Per-tutor pricing $10-50/hr', best: 'Worldwide tutors. Strong for languages and English-as-second-language.', good: 'Often cheapest 1-on-1.' },
];

export default function OnlineTutoringApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Tutoring Apps — Wyzant, Outschool, Khan | TekSure" description="Hire a 1-on-1 tutor for grandkids — or use the FREE one your library already pays for. Plain-English picks for online tutoring." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Tutoring Apps</h1>
          <p className="text-lg text-muted-foreground">Free options first. Paid only if needed.</p>
        </div>

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
            <h2 className="font-bold text-xl mb-3">Where to start</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Get the kid a library card (free).</li>
              <li>Check the library website for "online tutoring" — most offer Brainfuse or Tutor.com FREE.</li>
              <li>If grandkid wants more (specific weekly tutor) — Wyzant or local tutors.</li>
              <li>If they\'re prepping for SAT/ACT — Khan Academy SAT prep is FREE and excellent. Add Varsity Tutors only if they need 1-on-1.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best gift for a struggling student</h3>
            <p className="text-sm text-muted-foreground">5 sessions on Wyzant ($150-500) often turns around a slipping grade. The right tutor for 5 weeks beats the wrong tutor for a year. Read reviews carefully and book a 30-minute trial first.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
