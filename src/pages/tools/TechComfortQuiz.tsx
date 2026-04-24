import { useState } from 'react';
import { ClipboardCheck, RotateCcw, ChevronRight, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Link } from 'react-router-dom';

/* ── Types ───────────────────────────────── */
interface Question {
  id: number;
  text: string;
  subtext: string;
  options: { label: string; points: number }[];
}

interface GuideRec {
  title: string;
  description: string;
  path: string;
  emoji: string;
}

type Level = 'beginner' | 'intermediate' | 'advanced';

/* ── Questions ───────────────────────────── */
const questions: Question[] = [
  {
    id: 1,
    text: 'How often do you use a smartphone?',
    subtext: 'Think about your typical week.',
    options: [
      { label: 'Never', points: 0 },
      { label: 'Sometimes', points: 1 },
      { label: 'Daily', points: 3 },
    ],
  },
  {
    id: 2,
    text: 'Can you send a text message?',
    subtext: 'A regular SMS or iMessage / Android message.',
    options: [
      { label: 'No', points: 0 },
      { label: 'With help', points: 1 },
      { label: 'Yes, easily', points: 3 },
    ],
  },
  {
    id: 3,
    text: 'Have you ever used email?',
    subtext: 'Gmail, Outlook, Yahoo Mail, etc.',
    options: [
      { label: 'No', points: 0 },
      { label: 'I read emails', points: 1 },
      { label: 'I send them too', points: 3 },
    ],
  },
  {
    id: 4,
    text: 'Do you shop online?',
    subtext: 'Amazon, eBay, grocery delivery, etc.',
    options: [
      { label: 'Never', points: 0 },
      { label: 'Rarely', points: 1 },
      { label: 'Regularly', points: 3 },
    ],
  },
  {
    id: 5,
    text: 'Can you connect to WiFi?',
    subtext: 'Finding and joining a wireless network.',
    options: [
      { label: 'No', points: 0 },
      { label: 'Sometimes need help', points: 1 },
      { label: 'Yes', points: 3 },
    ],
  },
  {
    id: 6,
    text: 'Have you used video calling?',
    subtext: 'FaceTime, Zoom, WhatsApp video, etc.',
    options: [
      { label: 'Never', points: 0 },
      { label: 'A few times', points: 1 },
      { label: 'Regularly', points: 3 },
    ],
  },
  {
    id: 7,
    text: 'Do you use social media?',
    subtext: 'Facebook, Instagram, YouTube, etc.',
    options: [
      { label: 'No', points: 0 },
      { label: 'I browse', points: 1 },
      { label: 'I post too', points: 3 },
    ],
  },
  {
    id: 8,
    text: 'Can you download an app?',
    subtext: 'From the App Store or Google Play.',
    options: [
      { label: 'No', points: 0 },
      { label: 'With help', points: 1 },
      { label: 'Yes', points: 3 },
    ],
  },
  {
    id: 9,
    text: 'How do you handle passwords?',
    subtext: 'Think about your online accounts.',
    options: [
      { label: 'Same one everywhere', points: 0 },
      { label: 'A few different ones', points: 1 },
      { label: 'I use a password manager', points: 3 },
    ],
  },
  {
    id: 10,
    text: 'How comfortable are you learning new tech?',
    subtext: 'When you encounter something unfamiliar.',
    options: [
      { label: 'Nervous', points: 0 },
      { label: 'Willing to try', points: 1 },
      { label: 'Excited', points: 3 },
    ],
  },
];

/* ── Recommendations per level ───────────── */
const guidesByLevel: Record<Level, { heading: string; emoji: string; message: string; guides: GuideRec[] }> = {
  beginner: {
    heading: 'Getting Started',
    emoji: '',
    message:
      "Great news — you're at the beginning of an exciting journey! Everyone starts somewhere, and TekSure is here to walk you through every step. These guides are written in plain, friendly language with no jargon.",
    guides: [
      { title: 'Device Setup Checklist', description: 'Step-by-step help setting up a new phone, tablet, or computer from scratch.', path: '/tools/device-setup-checklist', emoji: '' },
      { title: 'WiFi Troubleshooter', description: 'Get connected to the internet with clear, visual instructions.', path: '/tools/wifi-troubleshooter', emoji: '' },
      { title: 'Jargon Translator', description: 'Confused by tech words? Type any term and get a plain-English explanation.', path: '/tools/jargon-translator', emoji: '' },
      { title: 'Safety Course', description: 'Learn the basics of staying safe online — passwords, scams, and privacy.', path: '/tools/safety-course', emoji: '' },
      { title: 'Error Decoder', description: "See a confusing error message? Paste it here and we'll explain what it means.", path: '/error-decoder', emoji: '' },
    ],
  },
  intermediate: {
    heading: 'Building Confidence',
    emoji: '',
    message:
      "You've got the basics down — nice work! Now it's time to level up your skills. These guides will help you get more done, stay safer online, and feel confident with everyday tech tasks.",
    guides: [
      { title: 'Password Manager Guide', description: 'Stop reusing passwords — set up a secure password manager in minutes.', path: '/tools/password-manager', emoji: '' },
      { title: 'Meeting Setup Helper', description: 'Join Zoom, FaceTime, and other video calls without the stress.', path: '/tools/meeting-setup-helper', emoji: '' },
      { title: 'App Recommender', description: 'Find the best apps for your device and needs — personalized picks.', path: '/tools/app-recommender', emoji: '' },
      { title: 'Phishing Scanner', description: 'Learn to spot fake emails and messages before they trick you.', path: '/tools/phishing-scanner', emoji: '' },
      { title: 'Backup Wizard', description: "Make sure your photos, contacts, and files are backed up — so you never lose what matters.", path: '/tools/backup-wizard', emoji: '' },
    ],
  },
  advanced: {
    heading: 'Power User',
    emoji: '',
    message:
      "You're already comfortable with technology — impressive! These advanced tools will help you take control of your digital life, boost your privacy, and explore cutting-edge features.",
    guides: [
      { title: 'Privacy Audit', description: 'Review and tighten privacy settings across all your devices and accounts.', path: '/tools/privacy-audit', emoji: '' },
      { title: 'Digital Footprint Scanner', description: 'Discover what information about you is visible online — and how to remove it.', path: '/tools/digital-footprint-scanner', emoji: '' },
      { title: 'Two-Factor Authentication Setup', description: 'Add an extra layer of security to all your important accounts.', path: '/tools/two-factor-setup', emoji: '' },
      { title: 'Subscription Auditor', description: 'Track down forgotten subscriptions and stop wasting money every month.', path: '/tools/subscription-auditor', emoji: '' },
      { title: 'Home Network Map', description: 'See every device on your WiFi and secure your home network.', path: '/tools/home-network-map', emoji: '' },
    ],
  },
};

function getLevel(score: number): Level {
  if (score <= 12) return 'beginner';
  if (score <= 22) return 'intermediate';
  return 'advanced';
}

/* ── Component ───────────────────────────── */
export default function TechComfortQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const totalQuestions = questions.length;
  const progress = showResults ? 100 : (currentQ / totalQuestions) * 100;
  const totalScore = answers.reduce((sum, pts) => sum + pts, 0);
  const level = getLevel(totalScore);
  const result = guidesByLevel[level];

  function handleAnswer(points: number) {
    const updated = [...answers, points];
    setAnswers(updated);

    if (currentQ + 1 < totalQuestions) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResults(true);
    }
  }

  function handleBack() {
    if (currentQ > 0) {
      setAnswers(answers.slice(0, -1));
      setCurrentQ(currentQ - 1);
    }
  }

  function reset() {
    setCurrentQ(0);
    setAnswers([]);
    setShowResults(false);
  }

  return (
    <>
      <SEOHead
        title="Tech Comfort Assessment | TekSure"
        description="Take our friendly 10-question quiz to discover your tech comfort level and get personalized guide recommendations tailored just for you."
        path="/tools/tech-comfort-quiz"
      />
      <Navbar />
      <main className="container py-12 min-h-[80vh] max-w-2xl mx-auto">
        {/* Header */}
        <div className="relative">
          <div className="absolute right-0 top-0">
            <BookmarkButton
              type="tool"
              slug="tech-comfort-quiz"
              title="Tech Comfort Assessment"
              url="/tools/tech-comfort-quiz"
            />
          </div>
          <div className="flex items-center gap-3 mb-2 pr-14">
            <ClipboardCheck className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Tech Comfort Assessment</h1>
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            Answer 10 quick questions and we'll recommend the perfect guides for your level. No wrong answers!
          </p>
        </div>

        {/* Progress bar */}
        {!showResults && (
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-1">
              <span>
                Question {currentQ + 1} of {totalQuestions}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        )}

        {/* ── Questions ── */}
        {!showResults && (
          <div>
            <Card className="border-2 border-primary/20">
              <CardContent className="p-6 sm:p-8">
                <p className="text-sm text-primary font-semibold mb-1">
                  Question {questions[currentQ].id} of {totalQuestions}
                </p>
                <h2 className="text-xl sm:text-2xl font-bold mb-1">{questions[currentQ].text}</h2>
                <p className="text-muted-foreground mb-6">{questions[currentQ].subtext}</p>

                <div className="grid gap-3">
                  {questions[currentQ].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt.points)}
                      className="flex items-center gap-4 p-4 sm:p-5 rounded-xl border-2 border-border bg-card text-left text-lg transition-all hover:border-primary/60 hover:bg-primary/5 active:scale-[0.98]"
                    >
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg shrink-0">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="font-medium">{opt.label}</span>
                      <ChevronRight className="h-5 w-5 text-muted-foreground ml-auto" />
                    </button>
                  ))}
                </div>

                {currentQ > 0 && (
                  <Button variant="ghost" className="mt-4 text-base" onClick={handleBack}>
                    ← Back
                  </Button>
                )}
              </CardContent>
            </Card>

            <div className="mt-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 p-4">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                 <strong>No pressure!</strong> There are no right or wrong answers. Just pick what feels closest to your experience.
              </p>
            </div>
          </div>
        )}

        {/* ── Results ── */}
        {showResults && (
          <div>
            {/* Score summary */}
            <Card className="border-2 border-primary/30 bg-primary/5 mb-8">
              <CardContent className="p-6 sm:p-8 text-center">
                <span className="text-5xl mb-4 block">{result.emoji}</span>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                  Your Level: {result.heading}
                </h2>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-lg font-semibold text-primary">
                    Score: {totalScore} / {totalQuestions * 3}
                  </span>
                </div>
                <Progress value={(totalScore / (totalQuestions * 3)) * 100} className="h-3 max-w-xs mx-auto mb-4" />
                <p className="text-muted-foreground text-lg max-w-lg mx-auto">
                  {result.message}
                </p>
              </CardContent>
            </Card>

            {/* Recommended guides */}
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Recommended Guides for You</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              We picked these guides just for your level. Start with any one — they're all written in friendly, plain language.
            </p>

            <div className="grid gap-4 mb-8">
              {result.guides.map((guide, i) => (
                <Link key={i} to={guide.path} className="block group">
                  <Card className="transition-all hover:shadow-md hover:border-primary/40 group-hover:bg-primary/5">
                    <CardContent className="p-5 flex items-center gap-4">
                      <span className="text-3xl shrink-0">{guide.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg font-bold">{guide.title}</span>
                          {i === 0 && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                              Start here
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{guide.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Encouragement box */}
            <div className="rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 p-5 mb-6">
              <p className="text-base font-semibold text-green-700 dark:text-green-400 mb-1">
                 You're already making progress!
              </p>
              <p className="text-sm text-green-700/90 dark:text-green-300/90">
                Just by taking this assessment, you've shown that you're ready to learn. Technology is a tool — and like any tool, it gets easier with practice. We're here to help every step of the way.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" onClick={reset} className="gap-2 text-base">
                <RotateCcw className="h-4 w-4" /> Take it again
              </Button>
              <Button asChild className="gap-2 text-base">
                <Link to="/tools">
                  <BookOpen className="h-4 w-4" /> Browse all tools
                </Link>
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
