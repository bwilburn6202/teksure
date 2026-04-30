import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Languages } from 'lucide-react';

const APPS = [
  { name: 'Duolingo', cost: 'FREE / $13/mo', best: 'Game-like. Most popular. 40+ languages. 5 minutes a day.', good: 'Best free.' },
  { name: 'Babbel', cost: '$15/mo', best: 'More structured grammar. Senior-friendly explanations.', good: 'Best for grammar.' },
  { name: 'Pimsleur', cost: '$20/mo', best: 'Audio-only. Perfect while walking, driving. Senior favorite.', good: 'Best audio.' },
  { name: 'Rosetta Stone', cost: '$200 lifetime', best: 'Immersion method. No translation. Old-school but proven.', good: 'Best immersion.' },
  { name: 'Mango Languages', cost: 'FREE with library card', best: 'Free via local library. 70+ languages. Polished.', good: 'Best free with library.' },
  { name: 'Italki / Preply', cost: '$10-50/lesson', best: 'Real human tutors via video. 1-on-1.', good: 'Best for conversation.' },
];

export default function LanguageAppCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Language Apps Compared | TekSure" description="Duolingo, Babbel, Pimsleur. Plain-English picks for senior-friendly language learning apps. Free options first." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Languages className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Language Apps</h1>
          <p className="text-lg text-muted-foreground">Spanish, French, Italian — at any age.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quick decision</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Just want to try free</strong> → Duolingo or Mango (library).</li>
              <li><strong>Hear better than read</strong> → Pimsleur audio.</li>
              <li><strong>Need real grammar</strong> → Babbel or Rosetta Stone.</li>
              <li><strong>Going to specific country</strong> → 1-on-1 tutor on iTalki.</li>
              <li>Combine 2 — Duolingo daily + Pimsleur on walks works well.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adults can learn languages — research shows 60+ retain just as well with practice.</li>
              <li>Pronunciation may be harder. Listen + repeat slowly.</li>
              <li>Spaced repetition apps (Anki, Memrise) help vocabulary stick.</li>
              <li>Visit local library — many host free conversation groups.</li>
              <li>Consume native media — Spanish telenovelas, French news, Italian movies.</li>
              <li>Switch phone language for a week — total immersion.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Brain benefit</h3>
            <p className="text-sm text-muted-foreground">Bilingual seniors show 4-5 year delay in dementia onset on average. Even partial language learning helps cognitive reserve. 15 min/day is plenty.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
