import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import {
  ChevronRight, Trophy, RotateCcw, AlertTriangle, CheckCircle2,
  Shield, HardDrive, Wifi, Battery, Lock, Smartphone,
} from 'lucide-react';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';

interface Question {
  id: string;
  category: string;
  text: string;
  icon: typeof Shield;
  options: { label: string; points: number }[];
}

const questions: Question[] = [
  {
    id: 'q1',
    category: 'Security',
    text: 'How often do you update your device\'s software?',
    icon: Shield,
    options: [
      { label: 'As soon as updates are available', points: 3 },
      { label: 'Every few weeks', points: 2 },
      { label: 'Only when something breaks', points: 1 },
      { label: 'I never update it', points: 0 },
    ],
  },
  {
    id: 'q2',
    category: 'Security',
    text: 'Do you use different passwords for different accounts?',
    icon: Lock,
    options: [
      { label: 'Yes, all unique and stored in a password manager', points: 3 },
      { label: 'Most are different', points: 2 },
      { label: 'I reuse a couple of passwords', points: 1 },
      { label: 'I use the same password for everything', points: 0 },
    ],
  },
  {
    id: 'q3',
    category: 'Storage',
    text: 'How full is the storage on your main device?',
    icon: HardDrive,
    options: [
      { label: 'Less than half full — plenty of space', points: 3 },
      { label: 'About halfway full', points: 2 },
      { label: 'Nearly full — sometimes I get warnings', points: 1 },
      { label: 'Completely full — I can\'t save anything new', points: 0 },
    ],
  },
  {
    id: 'q4',
    category: 'Backup',
    text: 'When did you last back up your important photos and files?',
    icon: Smartphone,
    options: [
      { label: 'Automatic — backs up daily to the cloud', points: 3 },
      { label: 'Within the last month', points: 2 },
      { label: 'It\'s been a while — over 6 months', points: 1 },
      { label: 'I\'ve never backed up', points: 0 },
    ],
  },
  {
    id: 'q5',
    category: 'Network',
    text: 'How do you connect when you\'re out and about?',
    icon: Wifi,
    options: [
      { label: 'I use my phone\'s data or trusted Wi-Fi only', points: 3 },
      { label: 'I mostly use public Wi-Fi carefully', points: 2 },
      { label: 'I use any available Wi-Fi without thinking about it', points: 1 },
      { label: 'I connect to any network that\'s free', points: 0 },
    ],
  },
  {
    id: 'q6',
    category: 'Battery',
    text: 'How do you manage your device\'s battery?',
    icon: Battery,
    options: [
      { label: 'I keep it between 20–80% charge most of the time', points: 3 },
      { label: 'I charge it when it gets low (around 20%)', points: 2 },
      { label: 'I let it run to 0% before charging', points: 1 },
      { label: 'I leave it plugged in 24/7', points: 0 },
    ],
  },
  {
    id: 'q7',
    category: 'Privacy',
    text: 'Have you reviewed which apps have access to your location, camera, and contacts?',
    icon: Shield,
    options: [
      { label: 'Yes — I review permissions regularly', points: 3 },
      { label: 'I checked once when I set things up', points: 2 },
      { label: 'I accept whatever apps ask for', points: 1 },
      { label: 'I\'ve never looked at app permissions', points: 0 },
    ],
  },
  {
    id: 'q8',
    category: 'Scam Awareness',
    text: 'What do you do when you receive an unexpected email or text asking you to click a link?',
    icon: AlertTriangle,
    options: [
      { label: 'I verify the sender and hover over links before clicking', points: 3 },
      { label: 'I only click if it looks official', points: 2 },
      { label: 'I usually click if I\'m curious', points: 1 },
      { label: 'I always click on links in messages', points: 0 },
    ],
  },
];

interface Result {
  grade: string;
  label: string;
  color: string;
  emoji: string;
  summary: string;
  tips: string[];
}

function getResult(score: number, maxScore: number): Result {
  const pct = score / maxScore;
  if (pct >= 0.85) return {
    grade: 'A', label: 'Tech Health Champion', color: 'text-[hsl(var(--teksure-success))]',
    emoji: '🏆',
    summary: 'Excellent! You\'re practising great digital hygiene across security, backup, privacy, and network safety.',
    tips: ['Keep your habits up — you\'re a great role model for friends and family!', 'Consider a password manager if you haven\'t already.'],
  };
  if (pct >= 0.65) return {
    grade: 'B', label: 'Good Tech Habits', color: 'text-blue-500',
    emoji: '👍',
    summary: 'You\'re doing well in most areas! A few small tweaks will take you from good to great.',
    tips: ['Enable automatic backups if you haven\'t already.', 'Consider setting up two-factor authentication on your most important accounts.', 'Review app permissions on your phone — just 5 minutes can make a difference.'],
  };
  if (pct >= 0.40) return {
    grade: 'C', label: 'Room to Improve', color: 'text-[hsl(var(--teksure-warning))]',
    emoji: '📋',
    summary: 'You\'re managing okay, but there are some important gaps in your tech habits that could leave you vulnerable.',
    tips: ['Start with one change: enable automatic software updates today.', 'Set up a free cloud backup (Google Photos, iCloud, or OneDrive).', 'Never reuse passwords — try a free password manager like Bitwarden.', 'Be cautious on public Wi-Fi — avoid logging into accounts on open networks.'],
  };
  return {
    grade: 'D', label: 'Needs Attention', color: 'text-red-500',
    emoji: '🔧',
    summary: 'Your device and data may be at risk. The good news? Each fix is simple, and TekSure guides can walk you through each one.',
    tips: ['Update your device software right now — it takes under 10 minutes.', 'Back up your photos to iCloud or Google Photos (free).', 'Change your most important passwords to unique ones.', 'Run our Cybersecurity Scorecard for a full safety check.'],
  };
}

const categoryColors: Record<string, string> = {
  Security: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
  Storage: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  Backup: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
  Network: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  Battery: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  Privacy: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
  'Scam Awareness': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
};

export default function TechHealthQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const q = questions[currentQ];
  const totalScore = answers.reduce((sum, a) => sum + a, 0);
  const maxScore = questions.length * 3;
  const result = getResult(totalScore, maxScore);

  const handleSelect = (points: number, idx: number) => {
    setSelectedOption(idx);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    const pts = q.options[selectedOption].points;
    const newAnswers = [...answers, pts];
    setAnswers(newAnswers);
    setSelectedOption(null);
    if (currentQ + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrentQ(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentQ(0);
    setAnswers([]);
    setSelectedOption(null);
    setDone(false);
  };

  return (
    <>
      <SEOHead
        title="Tech Health Quiz – TekSure Tools"
        description="Take our 8-question quiz to discover how healthy your digital habits are — covering security, backup, privacy, battery, and scam awareness."
        path="/tools/tech-health-quiz"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="bg-primary text-primary-foreground py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-2xl">
            <Breadcrumb className="mb-5">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground">Home</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/tools" className="text-primary-foreground/70 hover:text-primary-foreground">Tools</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary-foreground">Tech Health Quiz</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Tech Health Quiz</h1>
              <p className="text-lg text-primary-foreground/80">
                8 quick questions to reveal how healthy your digital habits are.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-muted/40 min-h-screen py-10">
          <div className="container mx-auto px-4 max-w-2xl">
            <>
              {!done ? (
                <div key={`q-${currentQ}`}>
                  {/* Progress */}
                  <div className="flex items-center justify-between mb-2 text-sm text-muted-foreground">
                    <span>Question {currentQ + 1} of {questions.length}</span>
                    <Badge className={categoryColors[q.category] ?? ''}>{q.category}</Badge>
                  </div>
                  <Progress value={((currentQ) / questions.length) * 100} className="h-2 mb-6" />

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-5">
                        <div className="p-2 rounded-lg bg-primary/10 shrink-0 mt-0.5">
                          <q.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-xl font-semibold leading-snug">{q.text}</h2>
                      </div>

                      <div className="space-y-3">
                        {q.options.map((opt, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSelect(opt.points, idx)}
                            className={`w-full text-left px-4 py-3 rounded-lg border transition-all text-sm font-medium ${
                              selectedOption === idx
                                ? 'border-primary bg-primary/10 text-primary ring-1 ring-primary'
                                : 'border-border bg-card hover:border-primary/50 hover:bg-muted'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>

                      <Button
                        className="mt-5 w-full"
                        disabled={selectedOption === null}
                        onClick={handleNext}
                      >
                        {currentQ + 1 === questions.length ? 'See My Results' : 'Next Question'} →
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div key="results">
                  {/* Score card */}
                  <Card className="mb-5">
                    <CardContent className="p-8 text-center">
                      <div className="text-5xl mb-3">{result.emoji}</div>
                      <div className={`text-7xl font-black mb-1 ${result.color}`}>{result.grade}</div>
                      <h2 className="text-2xl font-bold mb-1">{result.label}</h2>
                      <p className="text-muted-foreground mb-4 max-w-sm mx-auto">{result.summary}</p>
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Trophy className="h-4 w-4" />
                        <span>Score: {totalScore} / {maxScore} ({Math.round((totalScore / maxScore) * 100)}%)</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tips */}
                  <Card className="mb-5">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Your action steps
                      </h3>
                      <ul className="space-y-3">
                        {result.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm">
                            <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold mt-0.5">
                              {i + 1}
                            </span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="flex-1" onClick={handleReset}>
                      <RotateCcw className="h-4 w-4 mr-2" /> Retake Quiz
                    </Button>
                    <Button className="flex-1" asChild>
                      <Link to="/tools/cyber-scorecard">Run Cybersecurity Scorecard →</Link>
                    </Button>
                  </div>
                </div>
              )}
            </>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
