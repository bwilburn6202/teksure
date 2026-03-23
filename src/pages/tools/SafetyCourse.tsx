import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, GraduationCap, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

/* ── Lesson data ─────────────────────────────────── */

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface Lesson {
  id: number;
  emoji: string;
  title: string;
  subtitle: string;
  content: { heading?: string; text: string }[];
  quiz: QuizQuestion[];
}

const lessons: Lesson[] = [
  {
    id: 1,
    emoji: '🎣',
    title: 'Spotting Scams',
    subtitle: 'Learn to recognise the most common tricks scammers use',
    content: [
      { text: 'Scammers send millions of messages every day hoping a small number of people will fall for them. Knowing what to look for makes you almost impossible to fool.' },
      { heading: 'Red flags in emails and texts', text: 'Urgent language like "Your account will be closed in 24 hours!" is designed to panic you into acting without thinking. Legitimate companies rarely demand instant action.' },
      { heading: 'Fake sender addresses', text: 'Always look at the actual email address — not just the display name. A scam email might show "Apple Support" but the address could be something like applehelp@randomdomain123.com.' },
      { heading: 'Links that aren\'t what they seem', text: 'Before clicking any link, hover your mouse over it (on a computer) to see the real destination. If the address looks strange or doesn\'t match the company, don\'t click it.' },
      { heading: 'The golden rule', text: 'When in doubt, go directly to the company\'s website by typing it yourself — never through a link in an email. Real banks, the government, and genuine companies will never ask for your password or PIN by email.' },
    ],
    quiz: [
      {
        question: 'You get an email from "PayPal Security" with the address: paypal-security@helpdesk-verify.net. What should you do?',
        options: [
          'Click the link to check your account',
          'Reply to ask if it\'s genuine',
          'Delete it — the address doesn\'t look like PayPal\'s official domain',
          'Forward it to friends as a warning',
        ],
        correct: 2,
        explanation: 'The real PayPal always uses @paypal.com. Any email from a different domain is a scam, no matter what name it shows.',
      },
      {
        question: 'An email says "Your Netflix account will be deleted TONIGHT unless you click here." What\'s the best response?',
        options: [
          'Click the link quickly before your account is deleted',
          'Go to netflix.com yourself and log in to check your account — ignore the link',
          'Call the number in the email',
          'Pay the fee mentioned',
        ],
        correct: 1,
        explanation: 'Urgency is a classic scam tactic. Always go to a company\'s website yourself — never through an email link.',
      },
    ],
  },

  {
    id: 2,
    emoji: '🔐',
    title: 'Strong Passwords',
    subtitle: 'Create passwords that are easy to remember but hard to crack',
    content: [
      { text: 'Your password is the lock on your digital life. A weak password is like leaving your front door open. The good news: strong passwords don\'t have to be hard to remember.' },
      { heading: 'What makes a password weak?', text: 'Short passwords (under 8 characters), common words like "password123", and using the same password everywhere are the three biggest mistakes. Over 80% of hacked accounts used simple or repeated passwords.' },
      { heading: 'The passphrase method', text: 'Instead of one hard-to-remember word, string together 3–4 random words: "purple-lamp-teacup-frog" is extremely secure AND easy to remember. These are called passphrases.' },
      { heading: 'One password per account', text: 'If you use the same password everywhere, one hacked site means ALL your accounts are at risk. Use a different password for your email, banking, and social media at minimum.' },
      { heading: 'Password managers', text: 'You don\'t have to remember every password. A password manager like Bitwarden (free) or your phone\'s built-in manager stores them all safely. You only need to remember one master password.' },
    ],
    quiz: [
      {
        question: 'Which of these passwords is the strongest?',
        options: [
          'P@ssw0rd',
          'john1956',
          'correct-horse-battery-staple',
          'Qx7!',
        ],
        correct: 2,
        explanation: 'Length beats complexity. "correct-horse-battery-staple" is 30+ characters — far harder to crack than short "complex" passwords.',
      },
      {
        question: 'You use the same password on your email and banking. Your email gets hacked. What\'s the risk?',
        options: [
          'None — passwords are encrypted',
          'The hacker can now try your email password on your bank account too',
          'Only the email is at risk',
          'The bank will warn you automatically',
        ],
        correct: 1,
        explanation: 'Hackers try leaked passwords on banks, social media, and other sites immediately. Always use unique passwords for important accounts.',
      },
    ],
  },

  {
    id: 3,
    emoji: '🛒',
    title: 'Safe Online Shopping',
    subtitle: 'Buy online with confidence and spot dodgy websites',
    content: [
      { text: 'Online shopping is safe when you know what to look for. Millions of safe transactions happen every day — you just need to spot the rare dodgy ones.' },
      { heading: 'Check for HTTPS', text: 'Before entering any payment details, look at the address bar. The web address should start with "https://" — the "s" stands for secure. Most browsers also show a padlock icon. If it just says "http://" without the "s", leave immediately.' },
      { heading: 'Research the seller', text: 'Search for "[shop name] reviews" or "[shop name] scam" before buying from an unfamiliar website. Check Trustpilot. If you can\'t find any information, that\'s a warning sign.' },
      { heading: 'If it seems too good to be true...', text: 'A £500 phone for £39.99 is almost certainly a scam or counterfeit. Scammers attract buyers with unbeatable prices then take your money and send nothing — or cheap fakes.' },
      { heading: 'Use credit cards or PayPal when possible', text: 'Credit cards and PayPal offer purchase protection — you can dispute charges if goods don\'t arrive. Paying by bank transfer directly gives you no protection at all.' },
    ],
    quiz: [
      {
        question: 'You\'re about to pay on a new shopping site. The address bar shows "http://cheapshoes-deals.net". What should you do?',
        options: [
          'Pay — the website looks professional',
          'Leave — the lack of "https://" means the connection isn\'t secure',
          'Use a debit card instead of credit card',
          'Pay with cash on delivery',
        ],
        correct: 1,
        explanation: '"http://" without the "s" means your payment details aren\'t encrypted. Never enter card details on a non-HTTPS site.',
      },
      {
        question: 'Which payment method gives you the most protection when shopping online?',
        options: [
          'Bank transfer directly to the seller',
          'Cash sent in the post',
          'Credit card or PayPal',
          'Cryptocurrency',
        ],
        correct: 2,
        explanation: 'Credit cards and PayPal let you dispute charges and get refunds if something goes wrong. Bank transfers offer almost no protection once the money is sent.',
      },
    ],
  },

  {
    id: 4,
    emoji: '🔒',
    title: 'Protecting Your Privacy',
    subtitle: 'Control what information you share and with whom',
    content: [
      { text: 'Your personal information is valuable. Knowing how to protect it stops companies, advertisers, and criminals from misusing it.' },
      { heading: 'Think before you share', text: 'Every piece of information you share online — your name, birthday, phone number, home town — can potentially be used against you. Be stingy. A website only needs what\'s truly necessary to provide its service.' },
      { heading: 'Social media privacy settings', text: 'Most social media platforms default to sharing everything publicly. Check your privacy settings and set posts to "Friends only" at minimum. Don\'t post your home address, daily routine, or when you\'re going on holiday.' },
      { heading: 'Location data', text: 'Phones track your location constantly. Go to Settings > Privacy > Location Services and restrict apps that don\'t genuinely need to know where you are.' },
      { heading: 'What cookies are', text: 'When websites ask about "cookies", they\'re asking permission to track you across the internet. Always click "Reject All" or "Manage Preferences" rather than accepting everything. It makes no difference to how the website works.' },
      { heading: 'Two-factor authentication (2FA)', text: '2FA means that even if someone gets your password, they can\'t get in without a code sent to your phone. Enable it on your email, banking app, and any social media accounts.' },
    ],
    quiz: [
      {
        question: 'A website shows a cookie banner with "Accept All" and "Manage Preferences" buttons. What should you do?',
        options: [
          'Always click "Accept All" — it helps the website',
          'Click "Manage Preferences" or "Reject All" to limit tracking',
          'Close the browser to avoid it',
          'It doesn\'t matter — cookies are harmless',
        ],
        correct: 1,
        explanation: '"Accept All" lets websites track you across the internet for advertising. Rejecting or managing cookies has no impact on how the site works.',
      },
      {
        question: 'What does two-factor authentication (2FA) protect against?',
        options: [
          'Viruses on your computer',
          'Someone logging into your account even if they have your password',
          'Junk email',
          'Slow internet connection',
        ],
        correct: 1,
        explanation: '2FA adds a second step (like a text to your phone) so that a stolen password alone isn\'t enough to access your account.',
      },
    ],
  },

  {
    id: 5,
    emoji: '🚨',
    title: 'If Something Goes Wrong',
    subtitle: 'What to do immediately after a security incident',
    content: [
      { text: 'Even careful people sometimes get caught out. Knowing what to do in the first few hours makes a huge difference to how much damage is done.' },
      { heading: 'You clicked a suspicious link', text: 'Don\'t panic. Close the browser tab immediately. Don\'t enter any passwords. Run a security scan (Windows Defender on PC). If you entered any details, change those passwords immediately from a different device.' },
      { heading: 'You think you\'ve been hacked', text: 'Change your email password immediately — your email is the key to everything else. Then change passwords for banking, social media, and any site that matters. Enable 2FA where you haven\'t already.' },
      { heading: 'You gave money to a scammer', text: 'Contact your bank immediately — within hours is much better than days. Banks can sometimes reverse transactions quickly. Report the scam to Action Fraud (UK: actionfraud.police.uk) or the FTC (US: reportfraud.ftc.gov).' },
      { heading: 'Someone has remote access to your computer', text: 'Disconnect from the internet immediately — unplug the network cable or turn off WiFi. This cuts their access. Then call a trusted tech helper. Do not use that computer until it\'s been checked.' },
      { heading: 'You\'re not sure if it\'s a scam', text: 'When in doubt, ask someone you trust. Contact TekSure and we\'ll help you work out if something is safe. It\'s always better to ask than to ignore it.' },
    ],
    quiz: [
      {
        question: 'You accidentally clicked a link in a suspicious email. What should you do FIRST?',
        options: [
          'Nothing — one click can\'t do any harm',
          'Shut down your computer permanently',
          'Close the tab and don\'t enter any personal details — then run a security scan',
          'Forward the email to everyone you know',
        ],
        correct: 2,
        explanation: 'One click rarely causes damage by itself. Close the tab, don\'t enter anything, then run a scan. Most harm comes from entering details, not the click itself.',
      },
      {
        question: 'You realise you\'ve sent money to a scammer. What should you do immediately?',
        options: [
          'Wait and see if the goods arrive',
          'Call your bank straight away — speed matters',
          'Tell your friends so they know too',
          'Accept the loss and move on',
        ],
        correct: 1,
        explanation: 'Banks can sometimes reverse transfers if contacted within hours. Every minute counts — call them immediately and explain it was a scam.',
      },
    ],
  },
];

/* ── Certificate component ───────────────────────── */

const Certificate = ({ onReset }: { onReset: () => void }) => (
  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
    <div className="text-6xl mb-4">🎓</div>
    <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 text-sm px-4 py-1.5 mb-4">
      Course Complete!
    </Badge>
    <h2 className="text-2xl font-bold mb-2">You're Internet Safety Certified!</h2>
    <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
      You've completed all 5 lessons and proven you can protect yourself online. Share this with your family!
    </p>

    <div className="border-2 border-amber-400/40 rounded-2xl p-8 bg-amber-50/50 dark:bg-amber-950/20 mb-8 max-w-sm mx-auto">
      <Shield className="h-12 w-12 text-amber-500 mx-auto mb-3" />
      <p className="text-lg font-bold mb-1">Internet Safety Certificate</p>
      <p className="text-sm text-muted-foreground">Issued by TekSure</p>
      <p className="text-xs text-muted-foreground mt-1">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      <div className="mt-4 pt-4 border-t border-amber-200 dark:border-amber-800 grid grid-cols-1 gap-1.5 text-xs text-left">
        {lessons.map(l => (
          <div key={l.id} className="flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-green-500 shrink-0" />
            <span>{l.emoji} {l.title}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <Button asChild className="gap-2">
        <Link to="/safety/scam-alerts">
          <ArrowRight className="h-4 w-4" /> Read Scam Alerts
        </Link>
      </Button>
      <Button variant="outline" onClick={onReset} className="gap-2">
        <RotateCcw className="h-4 w-4" /> Retake Course
      </Button>
    </div>
  </motion.div>
);

/* ── Main component ─────────────────────────────── */

export default function SafetyCourse() {
  const [courseStarted, setCourseStarted] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [lessonPhase, setLessonPhase] = useState<'content' | 'quiz'>('content');
  const [currentQuizQ, setCurrentQuizQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [courseComplete, setCourseComplete] = useState(false);

  const lesson = lessons[currentLesson];
  const overallProgress = courseStarted
    ? Math.round(((currentLesson + (lessonPhase === 'quiz' ? 0.5 : 0)) / lessons.length) * 100)
    : 0;

  const handleAnswer = (idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    const correct = idx === lesson.quiz[currentQuizQ].correct;
    setAnsweredCorrectly(correct);
    if (correct) setQuizScore(s => s + 1);
  };

  const nextQuestion = () => {
    if (currentQuizQ < lesson.quiz.length - 1) {
      setCurrentQuizQ(q => q + 1);
      setSelectedAnswer(null);
      setAnsweredCorrectly(null);
    } else {
      // Lesson complete
      setCompletedLessons(prev => [...prev, lesson.id]);
      if (currentLesson < lessons.length - 1) {
        setCurrentLesson(l => l + 1);
        setLessonPhase('content');
        setCurrentQuizQ(0);
        setSelectedAnswer(null);
        setAnsweredCorrectly(null);
      } else {
        setCourseComplete(true);
      }
    }
  };

  const reset = () => {
    setCourseStarted(false);
    setCurrentLesson(0);
    setLessonPhase('content');
    setCurrentQuizQ(0);
    setSelectedAnswer(null);
    setAnsweredCorrectly(null);
    setQuizScore(0);
    setCompletedLessons([]);
    setCourseComplete(false);
  };

  return (
    <>
      <SEOHead
        title="Free Internet Safety Course for Beginners | TekSure"
        description="A free 5-lesson online safety course for beginners and seniors. Learn to spot scams, create strong passwords, shop safely, and protect your privacy."
        path="/tools/safety-course"
      />
      <Navbar />
      <main className="container max-w-2xl py-12 min-h-[70vh]">

        <div className="flex items-start gap-3 mb-8">
          <GraduationCap className="h-8 w-8 text-secondary shrink-0 mt-0.5" />
          <div>
            <h1 className="text-3xl font-bold">Internet Safety Course</h1>
            <p className="text-muted-foreground mt-1">5 short lessons · Free · No sign-up needed</p>
          </div>
        </div>

        {courseStarted && !courseComplete && (
          <>
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <span>Lesson {currentLesson + 1} of {lessons.length} — {lesson.title}</span>
              <span>{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-1.5 mb-8" />
          </>
        )}

        <AnimatePresence mode="wait">

          {/* Course intro */}
          {!courseStarted && (
            <motion.div key="intro" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <Card className="mb-6">
                <CardContent className="py-8 text-center">
                  <div className="text-5xl mb-4">🔐</div>
                  <h2 className="text-xl font-semibold mb-3">Stay Safe Online</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
                    5 short lessons covering everything beginners need to know about staying safe online — from spotting scams to protecting your privacy. Each lesson takes about 3 minutes.
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-3 mb-8">
                {lessons.map((l, i) => (
                  <div key={l.id} className="flex items-center gap-4 p-3 rounded-xl bg-muted/50 border border-border">
                    <span className="text-xl shrink-0">{l.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{l.title}</p>
                      <p className="text-xs text-muted-foreground truncate">{l.subtitle}</p>
                    </div>
                    <Badge variant="outline" className="text-xs shrink-0">Lesson {i + 1}</Badge>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full h-14 text-base gap-2" onClick={() => setCourseStarted(true)}>
                Start Course <ChevronRight className="h-5 w-5" />
              </Button>
            </motion.div>
          )}

          {/* Certificate */}
          {courseComplete && (
            <Certificate onReset={reset} />
          )}

          {/* Lesson content */}
          {courseStarted && !courseComplete && lessonPhase === 'content' && (
            <motion.div key={`lesson-${currentLesson}-content`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{lesson.emoji}</span>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Lesson {lesson.id}</p>
                  <h2 className="text-xl font-bold">{lesson.title}</h2>
                </div>
              </div>

              <Card className="mb-6">
                <CardContent className="py-6 space-y-4">
                  {lesson.content.map((block, i) => (
                    <div key={i}>
                      {block.heading && (
                        <h3 className="font-semibold text-base mb-1.5">{block.heading}</h3>
                      )}
                      <p className="text-sm text-muted-foreground leading-relaxed">{block.text}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Button size="lg" className="w-full h-12 gap-2" onClick={() => setLessonPhase('quiz')}>
                Take the Quiz <ChevronRight className="h-5 w-5" />
              </Button>
            </motion.div>
          )}

          {/* Quiz */}
          {courseStarted && !courseComplete && lessonPhase === 'quiz' && (
            <motion.div key={`lesson-${currentLesson}-quiz-${currentQuizQ}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="outline" className="text-xs">Quiz — {lesson.emoji} {lesson.title}</Badge>
                <span className="text-xs text-muted-foreground ml-auto">
                  Q{currentQuizQ + 1} of {lesson.quiz.length}
                </span>
              </div>

              <Card className="mb-5">
                <CardContent className="py-6">
                  <p className="font-semibold text-base leading-snug">{lesson.quiz[currentQuizQ].question}</p>
                </CardContent>
              </Card>

              <div className="space-y-3 mb-5">
                {lesson.quiz[currentQuizQ].options.map((option, i) => {
                  let style = 'border-border bg-card hover:border-secondary/50 hover:shadow-sm';
                  if (selectedAnswer !== null) {
                    if (i === lesson.quiz[currentQuizQ].correct) {
                      style = 'border-green-500 bg-green-50 dark:bg-green-950/20';
                    } else if (i === selectedAnswer && selectedAnswer !== lesson.quiz[currentQuizQ].correct) {
                      style = 'border-destructive bg-destructive/10';
                    } else {
                      style = 'border-border bg-card opacity-60';
                    }
                  }
                  return (
                    <button
                      key={i}
                      disabled={selectedAnswer !== null}
                      onClick={() => handleAnswer(i)}
                      className={`w-full flex items-start gap-3 p-4 rounded-xl border transition-all text-left ${style} disabled:cursor-default`}
                    >
                      <span className="shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="text-sm leading-relaxed">{option}</span>
                      {selectedAnswer !== null && i === lesson.quiz[currentQuizQ].correct && (
                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 ml-auto mt-0.5" />
                      )}
                      {selectedAnswer !== null && i === selectedAnswer && i !== lesson.quiz[currentQuizQ].correct && (
                        <XCircle className="h-4 w-4 text-destructive shrink-0 ml-auto mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedAnswer !== null && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                  <div className={`rounded-xl p-4 mb-5 flex items-start gap-3 ${
                    answeredCorrectly
                      ? 'bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/40'
                      : 'bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40'
                  }`}>
                    <span className="text-xl shrink-0">{answeredCorrectly ? '✅' : '💡'}</span>
                    <p className="text-sm leading-relaxed">{lesson.quiz[currentQuizQ].explanation}</p>
                  </div>

                  <Button size="lg" className="w-full h-12 gap-2" onClick={nextQuestion}>
                    {currentQuizQ < lesson.quiz.length - 1
                      ? 'Next Question'
                      : currentLesson < lessons.length - 1
                        ? `Next Lesson: ${lessons[currentLesson + 1].title}`
                        : 'Finish Course 🎓'}
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
