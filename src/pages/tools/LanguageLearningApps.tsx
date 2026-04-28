import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Languages, ChevronRight, ExternalLink } from 'lucide-react';

interface Pick {
  name: string;
  cost: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const PICKS: Pick[] = [
  {
    name: 'Mango Languages',
    cost: 'FREE with most US public library cards',
    bestFor: 'Anyone with a library card. 70+ languages, full courses, no catch.',
    pros: ['Around 80% of US public libraries pay for Mango — you get it free.', 'Real conversational lessons, not word matching.', 'Works in a web browser and on phone apps.', 'Sign in with your library card number.'],
    cons: ['Library has to subscribe — most do, but call yours to confirm.'],
    link: 'https://mangolanguages.com/available-libraries/',
  },
  {
    name: 'Duolingo (free tier)',
    cost: 'Free with ads, or Super at 14 dollars/mo',
    bestFor: 'Daily 5-minute practice. Good for building a habit.',
    pros: ['Completely usable on the free tier.', 'Game-style lessons keep you coming back.', '40+ languages: Spanish, French, Italian, German, more.', 'Owl mascot reminders are funny and effective.'],
    cons: ['Heavy on tapping, lighter on real conversation.', 'Free tier has ads between lessons.'],
    link: 'https://www.duolingo.com',
  },
  {
    name: 'Babbel',
    cost: '14 dollars/mo, cheaper with annual plan',
    bestFor: 'Learners who want grammar explained, not guessed.',
    pros: ['Lessons designed by language teachers.', 'Strong on grammar and sentence structure.', '14 languages with practical, travel-ready phrases.', 'Babbel Live group classes on higher tier.'],
    cons: ['Subscription only — no real free version.'],
    link: 'https://www.babbel.com',
  },
  {
    name: 'Rosetta Stone',
    cost: '16 dollars/mo or one-time lifetime around 200 dollars',
    bestFor: 'Visual learners. The classic immersion-style program.',
    pros: ['No translation — learn by matching pictures and sounds.', 'Good speech-recognition feedback on accent.', '25+ languages.', 'Lifetime plan often goes on sale under 200 dollars.'],
    cons: ['Pure immersion can feel slow if you want grammar rules upfront.'],
    link: 'https://www.rosettastone.com',
  },
  {
    name: 'Pimsleur',
    cost: '20 dollars/mo (audio-first)',
    bestFor: 'Driving, walking, or anyone who learns better by listening.',
    pros: ['All audio — no screen needed once a lesson starts.', '30-minute daily lessons, designed for spoken fluency.', 'Excellent for memory and pronunciation.', 'Free 7-day trial.'],
    cons: ['Reading and writing are secondary.', 'Pricier than app-only options.'],
    link: 'https://www.pimsleur.com',
  },
  {
    name: 'iTalki',
    cost: 'Pay-per-lesson, around 10-25 dollars per hour',
    bestFor: 'Practicing with a real teacher one-on-one over video call.',
    pros: ['Live human teachers from around the world.', 'Pick a teacher who matches your pace and personality.', 'Pay only for lessons you book — no subscription.', 'Trial lessons often 5-10 dollars to try a teacher.'],
    cons: ['Needs a video call setup (webcam, headphones).', 'Costs add up with multiple weekly lessons.'],
    link: 'https://www.italki.com',
  },
  {
    name: 'Memrise',
    cost: 'Free with paid Pro tier around 9 dollars/mo',
    bestFor: 'Real-world phrases — uses video clips of native speakers.',
    pros: ['Free tier covers most beginner needs.', 'Short videos of locals speaking — great for ear training.', '20+ languages.', 'Quick 5-minute sessions, good for breaks.'],
    cons: ['Less structured than Babbel or Rosetta.'],
    link: 'https://www.memrise.com',
  },
];

export default function LanguageLearningApps() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Language Learning Apps for Seniors"
        description="Seven honest picks: Mango (FREE with library card), Duolingo, Babbel, Rosetta Stone, Pimsleur, iTalki, and Memrise."
        path="/tools/language-learning-apps"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-amber-500/10 rounded-full">
                <Languages className="h-8 w-8 text-amber-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Language Learning Apps for Seniors</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Seven picks compared by cost, style, and who they fit. Mango Languages is free through most public libraries — start there.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Language Learning Apps' }]} />

          <Card className="border-border bg-amber-50 dark:bg-amber-950/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Try Mango first — it is free</p>
              <p className="text-xs text-muted-foreground">
                Around 80% of US public libraries pay for Mango Languages so you do not have to. Sign up with your library card number for full access to 70+ languages — no trial limit, no ads, no upsell. Confirm your library participates by visiting the Mango library lookup page or calling your branch.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {(showAll ? PICKS : PICKS.slice(0, 3)).map(p => (
              <Card key={p.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{p.name}</p>
                    <Badge variant="outline">{p.cost}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {p.bestFor}</p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {p.pros.map((pr, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{pr}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {p.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                      </ul>
                    </div>
                  </div>
                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    Visit / sign up <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (<Button variant="outline" onClick={() => setShowAll(true)}>Show all 7 picks</Button>)}
          </div>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Quick Tip on staying with it</p>
              <p className="text-xs text-muted-foreground">
                Pick a 10-minute window you already keep — after morning coffee, after the news, before bed. Daily 10 minutes beats a weekend cram every time. Pair the app with a weekly call to a friend or family member who speaks the language.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/library-power-pack" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Library Power Pack</p>
                <p className="text-xs text-muted-foreground mt-0.5">Free apps your library card unlocks.</p>
              </Link>
              <Link to="/tools/dictation-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Dictation Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Speak instead of type — great for practice.</p>
              </Link>
              <Link to="/tools/translation-tools" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Translation Tools</p>
                <p className="text-xs text-muted-foreground mt-0.5">For travel, signs, and real-time chat.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: a new language at any age sharpens memory and lifts mood. Ten minutes a day is plenty.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
