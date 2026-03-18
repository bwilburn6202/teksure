import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartPulse, RotateCcw, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';

interface Question {
  id: string;
  question: string;
  options: { value: string; label: string; score: 'green' | 'amber' | 'red'; tip: string }[];
}

const questions: Question[] = [
  {
    id: 'age',
    question: '1. How old is your main device?',
    options: [
      { value: 'new', label: 'Less than 2 years', score: 'green', tip: 'Great — your device is still well within its supported lifespan.' },
      { value: 'mid', label: '2–5 years', score: 'amber', tip: 'Your device is getting older. Keep software updated and consider replacing the battery if performance dips.' },
      { value: 'old', label: 'More than 5 years', score: 'red', tip: 'Older devices miss security updates and slow down. Start planning for a replacement soon.' },
    ],
  },
  {
    id: 'slow',
    question: '2. Has your device been slowing down?',
    options: [
      { value: 'no', label: 'No, runs fine', score: 'green', tip: 'Excellent! Your device is performing well.' },
      { value: 'sometimes', label: 'Sometimes', score: 'amber', tip: 'Try closing unused apps, clearing your browser cache, and restarting regularly.' },
      { value: 'yes', label: 'Yes, noticeably slower', score: 'red', tip: 'Run a disk cleanup, uninstall apps you don't use, and check for malware. A factory reset may help as a last resort.' },
    ],
  },
  {
    id: 'storage',
    question: '3. How much free storage do you have?',
    options: [
      { value: 'plenty', label: 'Plenty (50%+ free)', score: 'green', tip: 'You have lots of room. Keep it that way by periodically clearing old files.' },
      { value: 'some', label: 'Getting low (10–50% free)', score: 'amber', tip: 'Move photos and videos to cloud storage or an external drive to free up space.' },
      { value: 'full', label: 'Almost full (<10% free)', score: 'red', tip: 'Low storage causes slowdowns and crashes. Delete unused apps, clear downloads, and back up files immediately.' },
    ],
  },
  {
    id: 'updates',
    question: '4. When did you last run software updates?',
    options: [
      { value: 'recent', label: 'Within the last month', score: 'green', tip: 'Perfect — staying up to date keeps you protected against security threats.' },
      { value: 'while', label: '1–6 months ago', score: 'amber', tip: 'Check for updates now. Security patches are released frequently and skipping them leaves you vulnerable.' },
      { value: 'never', label: 'More than 6 months / not sure', score: 'red', tip: 'Update immediately! Go to Settings → Update and install everything available. This is your #1 security defence.' },
    ],
  },
  {
    id: 'antivirus',
    question: '5. Do you have antivirus or security software?',
    options: [
      { value: 'yes', label: 'Yes, active and updated', score: 'green', tip: 'Well done — keep it running and let it update automatically.' },
      { value: 'builtin', label: 'Just the built-in one (Windows Defender, etc.)', score: 'amber', tip: 'Built-in protection is decent, but make sure it's enabled and scanning regularly.' },
      { value: 'no', label: 'No / not sure', score: 'red', tip: 'Install a reputable free antivirus (like Windows Defender or Avast Free) right away to protect your device.' },
    ],
  },
];

const statusConfig = {
  green: { icon: CheckCircle2, label: 'Good', bg: 'bg-green-50 dark:bg-green-950/30', border: 'border-green-200 dark:border-green-800', text: 'text-green-700 dark:text-green-400' },
  amber: { icon: AlertTriangle, label: 'Could Improve', bg: 'bg-amber-50 dark:bg-amber-950/30', border: 'border-amber-200 dark:border-amber-800', text: 'text-amber-700 dark:text-amber-400' },
  red: { icon: XCircle, label: 'Action Needed', bg: 'bg-red-50 dark:bg-red-950/30', border: 'border-red-200 dark:border-red-800', text: 'text-red-700 dark:text-red-400' },
};

export default function HealthCheck() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = questions.every((q) => answers[q.id]);

  const handleSubmit = () => {
    if (allAnswered) setSubmitted(true);
  };

  const handleRetake = () => {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getResult = (q: Question) => {
    const chosen = q.options.find((o) => o.value === answers[q.id]);
    return chosen!;
  };

  const overallScore = () => {
    const scores = questions.map((q) => getResult(q).score);
    const reds = scores.filter((s) => s === 'red').length;
    const ambers = scores.filter((s) => s === 'amber').length;
    if (reds >= 2) return { label: 'Needs Attention', color: 'text-red-600', message: 'Several areas need urgent action. Follow the tips below to get your device back on track.' };
    if (reds >= 1 || ambers >= 3) return { label: 'Could Be Better', color: 'text-amber-600', message: 'A few things could use improvement. Check the tips below to boost your device health.' };
    return { label: 'Looking Good!', color: 'text-green-600', message: 'Your device is in great shape. Keep up the good habits!' };
  };

  return (
    <div className="min-h-screen">
      <SEOHead title="Tech Health Check | TekSure" description="Take a quick 5-question quiz to check the health of your device and get personalised tips." path="/tools/health-check" />
      <Navbar />

      <section className="hero-gradient text-primary-foreground">
        <div className="container py-16 md:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl mx-auto text-center">
            <HeartPulse className="h-12 w-12 mx-auto mb-4 text-secondary" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Tech Health Check</h1>
            <p className="text-lg opacity-80">Answer 5 quick questions to see how healthy your device is.</p>
          </motion.div>
        </div>
      </section>

      <section className="container py-12 max-w-2xl">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/tools">Tools</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Health Check</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {!submitted ? (
          <div className="space-y-8">
            {questions.map((q) => (
              <Card key={q.id}>
                <CardHeader>
                  <CardTitle className="text-base">{q.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={answers[q.id] || ''} onValueChange={(val) => setAnswers((prev) => ({ ...prev, [q.id]: val }))}>
                    {q.options.map((opt) => (
                      <div key={opt.value} className="flex items-center gap-3 py-1.5">
                        <RadioGroupItem value={opt.value} id={`${q.id}-${opt.value}`} />
                        <Label htmlFor={`${q.id}-${opt.value}`} className="cursor-pointer">{opt.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            ))}

            <Button onClick={handleSubmit} disabled={!allAnswered} size="lg" className="w-full">
              Get My Results
            </Button>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            {/* Overall */}
            <Card className="border-2">
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-muted-foreground mb-1">Overall Result</p>
                <p className={`text-2xl font-bold ${overallScore().color}`}>{overallScore().label}</p>
                <p className="text-sm text-muted-foreground mt-2">{overallScore().message}</p>
              </CardContent>
            </Card>

            {/* Per-question results */}
            {questions.map((q) => {
              const result = getResult(q);
              const cfg = statusConfig[result.score];
              const Icon = cfg.icon;
              return (
                <Card key={q.id} className={`${cfg.bg} ${cfg.border} border`}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Icon className={`h-5 w-5 mt-0.5 shrink-0 ${cfg.text}`} />
                      <div>
                        <p className="font-medium text-sm mb-1">{q.question}</p>
                        <p className={`text-xs font-semibold mb-1 ${cfg.text}`}>Your answer: {result.label} — {cfg.label}</p>
                        <p className="text-sm text-muted-foreground">{result.tip}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <Button onClick={handleRetake} variant="outline" size="lg" className="w-full gap-2">
              <RotateCcw className="h-4 w-4" /> Retake Quiz
            </Button>
          </motion.div>
        )}
      </section>

      <Footer />
    </div>
  );
}
