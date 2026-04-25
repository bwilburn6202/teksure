import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, RotateCcw, ChevronRight, ChevronLeft, Lock, Wifi, Smartphone, Globe, Mail, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CheckItem {
  id: string;
  category: string;
  categoryIcon: typeof ShieldCheck;
  question: string;
  yesPoints: number;
  tip: string;
  guideSlug?: string;
}

const CHECKS: CheckItem[] = [
  // Passwords
  { id: 'pw1', category: 'Passwords', categoryIcon: Lock, question: 'Do you use a different password for each important account (email, banking, etc.)?', yesPoints: 15, tip: 'Reusing passwords is one of the biggest security risks. If one site is hacked, all your accounts become vulnerable. Use a password manager to keep unique passwords for everything.' },
  { id: 'pw2', category: 'Passwords', categoryIcon: Lock, question: 'Are your important passwords at least 12 characters long?', yesPoints: 10, tip: 'Longer passwords are exponentially harder to crack. Aim for 12+ characters — use a passphrase like "PurpleTigerEats7Apples!" which is easy to remember but hard to guess.', guideSlug: 'create-strong-password' },
  { id: 'pw3', category: 'Passwords', categoryIcon: Lock, question: 'Do you use two-factor authentication (2FA) on your email and banking accounts?', yesPoints: 15, tip: 'Two-factor authentication means even if someone has your password, they can\'t get in without a code from your phone. Enable it today — especially on email and banking.', guideSlug: 'two-factor-auth' },
  // Network
  { id: 'net1', category: 'Home Network', categoryIcon: Wifi, question: 'Have you changed your home Wi-Fi router\'s default password?', yesPoints: 10, tip: 'Default router passwords (like "admin" or "password") are publicly known. Change yours via your router\'s settings page — usually found at 192.168.1.1 in your browser.', guideSlug: 'home-network-security' },
  { id: 'net2', category: 'Home Network', categoryIcon: Wifi, question: 'Does your home Wi-Fi use WPA2 or WPA3 security (not WEP or open)?', yesPoints: 10, tip: 'WEP is an old, easily broken security standard. Check your router settings and make sure it\'s set to WPA2 or WPA3.' },
  { id: 'net3', category: 'Home Network', categoryIcon: Wifi, question: 'Do you avoid doing banking or shopping on public Wi-Fi (café, hotel)?', yesPoints: 5, tip: 'Public Wi-Fi can be monitored by others. If you must use it, only use sites that start with "https://" and consider a VPN.' },
  // Device
  { id: 'dev1', category: 'Devices', categoryIcon: Smartphone, question: 'Do you keep your phone, computer, and apps up to date?', yesPoints: 10, tip: 'Updates often include critical security patches. Enable automatic updates where possible — they protect against known vulnerabilities.', guideSlug: 'software-updates' },
  { id: 'dev2', category: 'Devices', categoryIcon: Smartphone, question: 'Does your phone or computer lock automatically with a PIN, password, or fingerprint?', yesPoints: 10, tip: 'A screen lock protects all your data if your device is lost or stolen. Set a lock with at least a 6-digit PIN.' },
  { id: 'dev3', category: 'Devices', categoryIcon: Smartphone, question: 'Do you have a backup of your important files (photos, documents)?', yesPoints: 5, tip: 'Ransomware and device failures can wipe your data. Enable iCloud, Google Photos, or an external hard drive backup now.' },
  // Online behavior
  { id: 'web1', category: 'Online Safety', categoryIcon: Globe, question: 'Do you check that websites show "https://" and a padlock before entering personal details?', yesPoints: 5, tip: 'The "s" in "https" stands for secure — it means the connection is encrypted. Never enter passwords or payment details on a site that only shows "http://".' },
  { id: 'web2', category: 'Online Safety', categoryIcon: Globe, question: 'Do you avoid clicking links in unsolicited text messages or emails?', yesPoints: 10, tip: 'Phishing links are disguised to look real but lead to fake sites that steal your information. If in doubt, go to the website directly by typing it in your browser.', guideSlug: 'identify-phishing-emails' },
  { id: 'email1', category: 'Email Safety', categoryIcon: Mail, question: 'Can you identify the signs of a phishing email (urgency, spelling errors, suspicious sender)?', yesPoints: 5, tip: 'Phishing emails often create false urgency ("Act now!"), have spelling mistakes, or come from odd email addresses. If in doubt, delete and contact the organization directly.' },
  { id: 'email2', category: 'Email Safety', categoryIcon: Mail, question: 'Do you avoid sharing your main email address publicly on social media or websites?', yesPoints: 5, tip: 'Your email is a gateway to all your accounts. Consider using a separate address for newsletters/sign-ups and keeping your main email private.', guideSlug: 'recognizing-avoiding-scams' },
];

const CATEGORIES = [...new Set(CHECKS.map(c => c.category))];

const MAX_SCORE = CHECKS.reduce((sum, c) => sum + c.yesPoints, 0);

function getGrade(pct: number): { grade: string; label: string; color: string; bg: string } {
  if (pct >= 90) return { grade: 'A+', label: 'Excellent', color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/30' };
  if (pct >= 75) return { grade: 'A', label: 'Very Good', color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20' };
  if (pct >= 60) return { grade: 'B', label: 'Good', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' };
  if (pct >= 45) return { grade: 'C', label: 'Fair', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' };
  if (pct >= 30) return { grade: 'D', label: 'Needs improvement', color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/20' };
  return { grade: 'F', label: 'At risk', color: 'text-red-600', bg: 'bg-red-50 dark:bg-red-900/20' };
}

export default function CyberScorecard() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [done, setDone] = useState(false);
  const [expandedRec, setExpandedRec] = useState<string | null>(null);

  const current = CHECKS[currentIdx];
  const progress = Math.round((currentIdx / CHECKS.length) * 100);

  const handleAnswer = (yes: boolean) => {
    const newAnswers = { ...answers, [current.id]: yes };
    setAnswers(newAnswers);
    if (currentIdx < CHECKS.length - 1) {
      setCurrentIdx(i => i + 1);
    } else {
      setDone(true);
    }
  };

  const restart = () => {
    setAnswers({});
    setCurrentIdx(0);
    setDone(false);
    setExpandedRec(null);
  };

  const totalScore = done ? CHECKS.reduce((sum, c) => sum + (answers[c.id] ? c.yesPoints : 0), 0) : 0;
  const pct = done ? Math.round((totalScore / MAX_SCORE) * 100) : 0;
  const grade = done ? getGrade(pct) : null;

  const failedChecks = done ? CHECKS.filter(c => !answers[c.id]) : [];
  const passedChecks = done ? CHECKS.filter(c => answers[c.id]) : [];

  return (
    <>
      <SEOHead
        title="Cybersecurity Scorecard — TekSure"
        description="Check how secure your digital life is with our quick 13-question cybersecurity scorecard. Get a personalized score and actionable tips."
      path="/tools/cyber-scorecard"
      />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Cybersecurity Scorecard</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              13 yes/no questions. Under 3 minutes. Get your personal security score and find out exactly where to improve.
            </p>
          </div>
        </section>

        <div className="container max-w-2xl mx-auto px-4 py-8">
          {!done ? (
            <>
              {/* Category indicator */}
              <div className="flex flex-wrap gap-2 mb-5">
                {CATEGORIES.map(cat => {
                  const catChecks = CHECKS.filter(c => c.category === cat);
                  const answered = catChecks.filter(c => answers[c.id] !== undefined).length;
                  return (
                    <span key={cat} className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
                      answered === catChecks.length
                        ? 'bg-primary/10 border-primary/30 text-primary'
                        : answered > 0
                        ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300'
                        : 'bg-muted border-border text-muted-foreground'
                    }`}>
                      {answered === catChecks.length ? ' ' : ''}{cat}
                    </span>
                  );
                })}
              </div>

              {/* Progress */}
              <div className="mb-5">
                <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                  <span>Question {currentIdx + 1} of {CHECKS.length}</span>
                  <span>{progress}% complete</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
              </div>

              {/* Question */}
              <Card className="border-border shadow-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <current.categoryIcon className="h-4 w-4 text-muted-foreground" />
                    <Badge variant="outline" className="text-xs">{current.category}</Badge>
                  </div>
                  <h2 className="text-lg font-semibold mb-6 leading-snug">{current.question}</h2>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleAnswer(true)}
                      className="py-4 rounded-xl border-2 border-green-400/60 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors font-semibold text-green-700 dark:text-green-300 flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="h-5 w-5" /> Yes
                    </button>
                    <button
                      onClick={() => handleAnswer(false)}
                      className="py-4 rounded-xl border-2 border-red-300/60 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors font-semibold text-red-600 dark:text-red-300 flex items-center justify-center gap-2"
                    >
                      <XCircle className="h-5 w-5" /> No
                    </button>
                  </div>
                </CardContent>
              </Card>

              {currentIdx > 0 && (
                <div className="mt-3">
                  <Button variant="ghost" size="sm" onClick={() => setCurrentIdx(i => i - 1)} className="gap-1 text-xs text-muted-foreground">
                    <ChevronLeft className="h-3 w-3" /> Previous question
                  </Button>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Score card */}
              <Card className={`mb-6 ${grade!.bg} border-border`}>
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <div className="text-5xl font-black">{grade!.grade}</div>
                    <div className="text-left">
                      <p className={`text-xl font-bold ${grade!.color}`}>{grade!.label}</p>
                      <p className="text-sm text-muted-foreground">Score: {totalScore} / {MAX_SCORE} ({pct}%)</p>
                    </div>
                  </div>
                  <div className="w-full bg-white/50 dark:bg-black/20 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${pct >= 75 ? 'bg-green-500' : pct >= 50 ? 'bg-amber-400' : 'bg-red-500'}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Category scores */}
              <Card className="mb-6">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Score by category</CardTitle>
                </CardHeader>
                <CardContent className="pb-5">
                  <div className="space-y-3">
                    {CATEGORIES.map(cat => {
                      const catChecks = CHECKS.filter(c => c.category === cat);
                      const catScore = catChecks.reduce((sum, c) => sum + (answers[c.id] ? c.yesPoints : 0), 0);
                      const catMax = catChecks.reduce((sum, c) => sum + c.yesPoints, 0);
                      const catPct = Math.round((catScore / catMax) * 100);
                      const CatIcon = catChecks[0].categoryIcon;
                      return (
                        <div key={cat} className="flex items-center gap-3">
                          <CatIcon className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                          <span className="text-xs w-28 shrink-0 text-muted-foreground">{cat}</span>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${catPct >= 75 ? 'bg-green-500' : catPct >= 50 ? 'bg-amber-400' : 'bg-red-400'}`}
                              style={{ width: `${catPct}%` }}
                            />
                          </div>
                          <span className="text-xs w-12 text-right text-muted-foreground">{catScore}/{catMax}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* What to fix */}
              {failedChecks.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    {failedChecks.length} thing{failedChecks.length !== 1 ? 's' : ''} to fix
                  </h2>
                  <div className="space-y-2">
                    {failedChecks.map(check => (
                      <Card key={check.id} className="border-border">
                        <CardContent className="p-0">
                          <button
                            className="w-full text-left p-4 flex items-start gap-3"
                            onClick={() => setExpandedRec(expandedRec === check.id ? null : check.id)}
                          >
                            <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <p className="text-sm font-medium leading-snug">{check.question}</p>
                              <span className="text-xs text-muted-foreground">+{check.yesPoints} pts if you fix this</span>
                            </div>
                            <ChevronRight className={`h-4 w-4 text-muted-foreground shrink-0 mt-0.5 transition-transform ${expandedRec === check.id ? 'rotate-90' : ''}`} />
                          </button>
                          {expandedRec === check.id && (
                            <div className="px-4 pb-4 border-t border-border bg-muted/30">
                              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{check.tip}</p>
                              {check.guideSlug && (
                                <Link
                                  to={`/guides/${check.guideSlug}`}
                                  className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline"
                                >
                                  Read the guide <ChevronRight className="h-3 w-3" />
                                </Link>
                              )}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* What you passed */}
              {passedChecks.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    {passedChecks.length} thing{passedChecks.length !== 1 ? 's' : ''} {"you're"} already doing right
                  </h2>
                  <div className="space-y-2">
                    {passedChecks.map(check => (
                      <div key={check.id} className="flex items-start gap-3 p-3 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-green-800 dark:text-green-200 leading-snug">{check.question}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <Button variant="outline" onClick={restart} className="gap-2">
                  <RotateCcw className="h-4 w-4" /> Retake scorecard
                </Button>
                <Button asChild className="gap-2">
                  <Link to="/safety/scam-alerts">Safety tips <ChevronRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </main>

    </>
  );
}
