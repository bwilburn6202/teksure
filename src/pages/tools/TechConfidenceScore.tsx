import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, RotateCcw, ArrowRight, CheckCircle2, Trophy, Sprout, Sun, Star, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const questions = [
  { q: 'How comfortable are you connecting to Wi-Fi on a new device?', options: ['Not at all', 'I need help', 'I can manage', 'No problem'], weights: [0, 1, 2, 3] },
  { q: 'Can you create and remember a strong password?', options: ['No idea where to start', 'Only simple ones', 'Yes, with a bit of effort', 'Easily — I use a manager'], weights: [0, 1, 2, 3] },
  { q: 'How confident are you spotting a phishing email or scam text?', options: ['Not confident at all', 'Sometimes unsure', 'Usually can tell', 'Very confident'], weights: [0, 1, 2, 3] },
  { q: 'Have you ever backed up your phone or computer?', options: ['Never', 'Once, a long time ago', 'Occasionally', 'Regularly and automatically'], weights: [0, 1, 2, 3] },
  { q: 'How do you feel about video calling (FaceTime, Zoom)?', options: ['Never tried it', 'Only with help', 'Can do it on my own', 'I do it regularly'], weights: [0, 1, 2, 3] },
  { q: 'Can you install or update an app on your phone?', options: ['No idea how', 'I\'ve tried but struggled', 'Yes, with some effort', 'Yes, easily'], weights: [0, 1, 2, 3] },
  { q: 'How comfortable are you shopping online safely?', options: ['Very uncomfortable', 'Nervous but I try', 'Fairly comfortable', 'Very comfortable'], weights: [0, 1, 2, 3] },
  { q: 'Do you know how to organize your files and photos?', options: ['Everything is messy', 'A bit organized', 'Mostly tidy', 'Well organized'], weights: [0, 1, 2, 3] },
  { q: 'Have you set up two-factor authentication on any account?', options: ['What is that?', 'Heard of it but haven\'t', 'On one or two accounts', 'On most accounts'], weights: [0, 1, 2, 3] },
  { q: 'How do you feel about learning new technology?', options: ['Very anxious', 'Nervous but willing', 'Fairly open', 'I enjoy it'], weights: [0, 1, 2, 3] },
];

function getResult(score: number, max: number) {
  const pct = (score / max) * 100;
  if (pct < 25) return {
    grade: 'Beginner', color: 'text-orange-600', bg: 'bg-orange-50 border-orange-200',
    icon: Sprout, tagline: 'Everyone starts somewhere — you\'re in the right place.',
    next: 'Start with our Beginner Basics learning path to build your foundation step by step.',
    path: '/my-path',
  };
  if (pct < 50) return {
    grade: 'Developing', color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200',
    icon: Sun, tagline: 'You\'re making great progress. A little more practice and you\'ll fly.',
    next: 'Browse our Safety Essentials and How-To guides to fill in the gaps.',
    path: '/guides',
  };
  if (pct < 75) return {
    grade: 'Capable', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200',
    icon: Star, tagline: 'You\'re doing really well. A few more skills and you\'ll be fully independent.',
    next: 'Try our Practical Skills path — you\'re ready for the next level.',
    path: '/my-path',
  };
  return {
    grade: 'Confident', color: 'text-green-600', bg: 'bg-green-50 border-green-200',
    icon: Trophy, tagline: 'You\'re a confident, capable tech user. Well done!',
    next: 'Share your knowledge — why not help others in the Community Forum?',
    path: '/forum',
  };
}

export default function TechConfidenceScore() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const total = questions.length;
  const score = answers.reduce((s, a, i) => s + (questions[i]?.weights[a] ?? 0), 0);
  const max = total * 3;
  const result = getResult(score, max);
  const pct = Math.round((score / max) * 100);

  function answer(idx: number) {
    const next = [...answers, idx];
    setAnswers(next);
    if (current + 1 >= total) setDone(true);
    else setCurrent(c => c + 1);
  }

  function reset() { setCurrent(0); setAnswers([]); setDone(false); }

  const previousScore = typeof window !== 'undefined'
    ? localStorage.getItem('teksure-confidence-score')
    : null;

  if (done && typeof window !== 'undefined') {
    localStorage.setItem('teksure-confidence-score', String(pct));
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Tech Confidence Score — Find Your Level & Learning Path | TekSure"
        description="Take a 10-question quiz to find out your true tech confidence level. Get a personalized learning plan matched to your result."
        path="/tools/confidence-score"
      />
      <Navbar />
      <main className="flex-1 container max-w-2xl py-12">
        <div className="text-center mb-10">
          <div className="text-4xl mb-3"></div>
          <h1 className="text-3xl font-bold mb-2">Tech Confidence Score</h1>
          <p className="text-muted-foreground">10 quick questions to measure your tech confidence — and show you what to tackle next.</p>
        </div>

        <>
          {!done ? (
            <div key={current}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">Question {current + 1} of {total}</span>
                <span className="text-sm font-medium">{Math.round(((current) / total) * 100)}%</span>
              </div>
              <Progress value={(current / total) * 100} className="mb-6 h-2" />
              <Card>
                <CardContent className="pt-8 pb-6">
                  <p className="text-xl font-semibold mb-8 text-center leading-snug">{questions[current].q}</p>
                  <div className="grid gap-3">
                    {questions[current].options.map((opt, i) => (
                      <Button key={i} variant="outline" size="lg" className="text-left h-auto py-3 px-4 justify-start text-base hover:bg-primary/10 hover:border-primary" onClick={() => answer(i)}>
                        <span className="font-semibold mr-3 text-muted-foreground">{['A', 'B', 'C', 'D'][i]}</span>
                        {opt}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div key="result">
              <Card className={`border-2 ${result.bg} mb-6`}>
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"><result.icon className="h-8 w-8 text-primary" /></div>
                  <h2 className="text-3xl font-bold mb-1">Your score: <span className={result.color}>{pct}%</span></h2>
                  <Badge className={`text-base px-4 py-1 mb-4 ${result.color} border-current bg-white`} variant="outline">{result.grade}</Badge>
                  <p className="text-lg mb-2">{result.tagline}</p>
                  {previousScore && Number(previousScore) !== pct && (
                    <p className="text-sm text-muted-foreground mt-1">Previous score: {previousScore}% <TrendingUp className="inline h-3.5 w-3.5 ml-1 text-green-500" /></p>
                  )}
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="pt-6 pb-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">What to do next</p>
                      <p className="text-muted-foreground text-sm">{result.next}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid sm:grid-cols-2 gap-3">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  <Link to={result.path}><ArrowRight className="h-4 w-4" /> {result.grade === 'Confident' ? 'Visit the Forum' : 'Start Learning'}</Link>
                </Button>
                <Button variant="outline" size="lg" onClick={reset} className="gap-2">
                  <RotateCcw className="h-4 w-4" /> Retake Quiz
                </Button>
              </div>
            </div>
          )}
        </>
      </main>
      <Footer />
    </div>
  );
}
