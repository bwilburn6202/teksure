import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function SeniorTriviaApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Trivia Apps for Seniors — TekSure" description="Trivia games for seniors — Trivia Crack, HQ Trivia, Jeopardy." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Trivia Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Test your knowledge.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Trivia Crack</h2><p>FREE. 6 categories. Play against family.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">QuizUp</h2><p>FREE. Compete head-to-head with strangers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Jeopardy! World Tour</h2><p>FREE. Real Jeopardy questions. Practice if you ever want to audition.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sporcle</h2><p>FREE. Quizzes about everything. Geography quizzes are popular.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">NPR News Quiz</h2><p>FREE. Weekly current events quiz on Wait Wait podcast.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family game</h2><p>Trivia Crack with grandkids. Fun multi-generation activity.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 15 minutes daily. Memory recall + new learning combo.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
