import { useState } from 'react';
import { ShieldAlert, CheckCircle2, XCircle, RotateCcw, ChevronRight, Trophy } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

interface Question {
  id: number;
  type: 'text' | 'call' | 'email' | 'popup';
  typeLabel: string;
  scenario: string;
  detail?: string;
  answer: 'scam' | 'legit';
  explanation: string;
  redFlags?: string[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'text',
    typeLabel: 'Text Message',
    scenario: 'You receive a text: "Your Social Security number has been suspended due to suspicious activity. Call 1-888-555-0192 immediately to avoid arrest."',
    answer: 'scam',
    explanation: 'The Social Security Administration never suspends Social Security numbers, and the government never threatens arrest by text. This is a classic government impersonation scam. Never call numbers provided in unsolicited texts.',
    redFlags: ['Government agencies contact you by mail, not text', 'Threats of arrest are a major red flag', 'Requests you call an unknown number'],
  },
  {
    id: 2,
    type: 'email',
    typeLabel: 'Email',
    scenario: 'You get an email from your bank saying your statement is ready to view. The sender shows "alerts@bankofamerica.com" and the email has your first name in the greeting.',
    answer: 'legit',
    explanation: 'This is likely a legitimate bank statement notification. Banks do send these emails from their official domain. Always verify the sender domain carefully (bankofamerica.com, not bankofamerica-alerts.com or similar). When in doubt, log into your bank directly by typing the address rather than clicking the email link.',
  },
  {
    id: 3,
    type: 'call',
    typeLabel: 'Phone Call',
    scenario: '"Hi, this is Microsoft Support. We detected a virus on your computer and need remote access to fix it before your data is destroyed."',
    answer: 'scam',
    explanation: 'Microsoft, Apple, Google, and any tech company will never call you unsolicited to report a virus. This is a tech support scam. The goal is to gain remote access to your computer to steal information or install real malware. Hang up immediately.',
    redFlags: ['No tech company calls you unsolicited', 'Creating urgency with threats of data loss', 'Asking for remote access to your computer'],
  },
  {
    id: 4,
    type: 'text',
    typeLabel: 'Text Message',
    scenario: '"Hi Mom, it\'s me. I\'m in an emergency and I lost my phone. This is my friend\'s number. I need $800 sent through Zelle right away. Please don\'t call, I\'ll explain everything later."',
    answer: 'scam',
    explanation: 'This is a "grandparent scam" or "family emergency scam." Scammers pose as a family member in trouble and create urgency so you act before you can think. Always call your family member\'s known number directly to verify — the real person will answer.',
    redFlags: ['Asking you not to call', 'Request for immediate money', 'Requesting untraceable payment method', 'Story designed to prevent verification'],
  },
  {
    id: 5,
    type: 'popup',
    typeLabel: 'Pop-Up on Screen',
    scenario: 'A large red warning fills your screen: "VIRUS DETECTED — Your computer is infected! Call 1-800-555-7733 now. Do NOT shut down your computer."',
    answer: 'scam',
    explanation: 'Real antivirus software does not display phone numbers or tell you not to shut down your computer. This is a fake alert designed to make you call scammers. Close the browser (or force-quit if it won\'t close), restart your computer, and run your actual antivirus software.',
    redFlags: ['Legitimate security software never shows phone numbers', '"Do not shut down" is a manipulation tactic', 'Designed to create panic so you call'],
  },
  {
    id: 6,
    type: 'email',
    typeLabel: 'Email',
    scenario: 'You receive a Medicare email: "Action Required: Your Medicare benefits will be canceled unless you verify your information by clicking here and entering your Medicare number."',
    answer: 'scam',
    explanation: 'Medicare never sends emails asking you to verify your information or threatening to cancel benefits. Medicare contacts you by mail. Never share your Medicare number in response to an unsolicited email — it can be used like a Social Security number for medical identity theft.',
    redFlags: ['Medicare communicates by mail, not email', 'Threats of benefit cancellation create panic', 'Your Medicare number should be guarded like your SSN'],
  },
  {
    id: 7,
    type: 'call',
    typeLabel: 'Phone Call',
    scenario: 'Your pharmacy calls from the number you have saved for them. They say your prescription is ready for pickup and ask if you have any questions.',
    answer: 'legit',
    explanation: 'This is a normal pharmacy notification call. Pharmacies routinely call about prescriptions from their listed number. No unusual requests, no urgency, no money involved. If you are unsure, you can always hang up and call the pharmacy back at the number on their website or your prescription bottle.',
  },
  {
    id: 8,
    type: 'text',
    typeLabel: 'Text Message',
    scenario: '"USPS: Your package could not be delivered. A $3.50 redelivery fee is required. Pay here: [short link]"',
    answer: 'scam',
    explanation: 'USPS does not text you to collect delivery fees via a link. This is a "smishing" (SMS phishing) scam targeting people expecting packages. If you are expecting a USPS delivery, track it directly at USPS.com by typing the address yourself — never click links in unexpected texts.',
    redFlags: ['USPS does not collect fees via text links', 'Small amount designed to seem plausible', 'Shortened or suspicious link'],
  },
  {
    id: 9,
    type: 'email',
    typeLabel: 'Email',
    scenario: 'An email says: "You have won a $500 gift card! Click to claim your prize. This offer expires in 24 hours."',
    answer: 'scam',
    explanation: 'Unsolicited prize notifications are almost always scams. Clicking the link often leads to a fake site that collects your personal information, asks for "shipping" payment to receive the prize, or installs malware. If you did not enter a contest, you did not win one.',
    redFlags: ['You cannot win a contest you did not enter', '24-hour deadline creates artificial urgency', 'No legitimate company sends unsolicited prize emails'],
  },
  {
    id: 10,
    type: 'call',
    typeLabel: 'Phone Call',
    scenario: '"This is the IRS. You owe back taxes and will be arrested within two hours if you don\'t pay using gift cards. Purchase Google Play cards and call us back with the numbers."',
    answer: 'scam',
    explanation: 'The IRS never calls demanding immediate payment, never threatens arrest over the phone, and never asks for payment in gift cards — ever. Gift cards are the #1 payment method for scammers because they are untraceable and non-refundable. Hang up immediately. If you have real IRS concerns, visit IRS.gov or call 1-800-829-1040.',
    redFlags: ['IRS communicates by mail first, not phone calls', 'Threats of immediate arrest', 'Gift card payment demand is always a scam'],
  },
];

type UserAnswer = 'scam' | 'legit';

interface AnswerRecord {
  questionId: number;
  userAnswer: UserAnswer;
  correct: boolean;
}

export default function ScamOrLegitQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [selected, setSelected] = useState<UserAnswer | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizDone, setQuizDone] = useState(false);

  const q = QUESTIONS[current];
  const score = answers.filter(a => a.correct).length;

  const handleAnswer = (choice: UserAnswer) => {
    if (selected !== null) return;
    setSelected(choice);
    setShowResult(true);
    const correct = choice === q.answer;
    setAnswers(prev => [...prev, { questionId: q.id, userAnswer: choice, correct }]);
  };

  const handleNext = () => {
    if (current + 1 >= QUESTIONS.length) {
      setQuizDone(true);
    } else {
      setCurrent(prev => prev + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  const restart = () => {
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setShowResult(false);
    setQuizDone(false);
  };

  const typeColors: Record<string, string> = {
    text: 'bg-blue-100 dark:bg-blue-950/50 text-blue-800 dark:text-blue-200',
    call: 'bg-green-100 dark:bg-green-950/50 text-green-800 dark:text-green-200',
    email: 'bg-purple-100 dark:bg-purple-950/50 text-purple-800 dark:text-purple-200',
    popup: 'bg-orange-100 dark:bg-orange-950/50 text-orange-800 dark:text-orange-200',
  };

  const getFeedbackColor = () => {
    if (!showResult) return '';
    return selected === q.answer
      ? 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800'
      : 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800';
  };

  if (quizDone) {
    const pct = Math.round((score / QUESTIONS.length) * 100);
    const grade = pct >= 90 ? 'Excellent' : pct >= 70 ? 'Good' : pct >= 50 ? 'Keep practicing' : 'Review needed';
    const gradeColor = pct >= 90 ? 'text-green-600' : pct >= 70 ? 'text-blue-600' : pct >= 50 ? 'text-amber-600' : 'text-red-600';

    return (
      <>
        <SEOHead
          title="Scam or Legit? Quiz — TekSure"
          description="Test your ability to spot scams. 10 real-world scenarios — texts, calls, emails, and pop-ups. Learn to recognize the red flags before scammers reach you."
        />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4">
          <div className="max-w-xl mx-auto text-center">
            <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Quiz Complete!</h1>
            <p className="text-6xl font-bold my-6 tabular-nums">
              <span className={gradeColor}>{score}</span>
              <span className="text-gray-400 text-3xl"> / {QUESTIONS.length}</span>
            </p>
            <p className={`text-2xl font-semibold mb-2 ${gradeColor}`}>{grade}</p>
            <p className="text-gray-500 dark:text-gray-400 mb-8">{pct}% of scenarios identified correctly</p>

            {/* Per-question review */}
            <div className="text-left space-y-3 mb-8">
              {answers.map((a, i) => {
                const qq = QUESTIONS[i];
                return (
                  <div key={qq.id} className={`rounded-xl p-4 border ${a.correct ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900' : 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900'}`}>
                    <div className="flex items-start gap-2">
                      {a.correct
                        ? <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        : <XCircle className="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      }
                      <div>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          #{i + 1} {qq.typeLabel} — {qq.answer === 'scam' ? '🚨 Scam' : '✅ Legit'}
                        </p>
                        {!a.correct && (
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{qq.explanation}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6 text-left">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>Remember:</strong> When in doubt, hang up and call back using a number you look up yourself.
                Report scams to the FTC at <strong>ReportFraud.ftc.gov</strong> or call 1-877-382-4357.
              </p>
            </div>

            <button
              onClick={restart}
              className="flex items-center gap-2 mx-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Try Again
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Scam or Legit? Quiz — TekSure"
        description="Test your ability to spot scams. 10 real-world scenarios — texts, calls, emails, and pop-ups. Learn to recognize the red flags before scammers reach you."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4">
        <div className="max-w-xl mx-auto">

          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-950/60 mb-4">
              <ShieldAlert className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">Scam or Legit?</h1>
            <p className="text-gray-500 dark:text-gray-400">10 real-world scenarios. Can you spot the scam?</p>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
              {current + 1} of {QUESTIONS.length}
            </span>
            <div className="flex-1 bg-gray-200 dark:bg-gray-800 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((current + (showResult ? 1 : 0)) / QUESTIONS.length) * 100}%` }}
              />
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{score} correct</span>
          </div>

          {/* Question card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden mb-4">
            <div className="px-5 pt-5 pb-4">
              <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${typeColors[q.type]}`}>
                {q.typeLabel}
              </span>
              <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed font-medium">
                {q.scenario}
              </p>
              {q.detail && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{q.detail}</p>
              )}
            </div>

            {/* Answer buttons */}
            {!showResult && (
              <div className="px-5 pb-5 grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleAnswer('scam')}
                  className="flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/30 hover:border-red-400 hover:bg-red-100 dark:hover:bg-red-950/60 text-red-700 dark:text-red-300 font-semibold text-lg transition-all"
                >
                  🚨 Scam
                </button>
                <button
                  onClick={() => handleAnswer('legit')}
                  className="flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30 hover:border-green-400 hover:bg-green-100 dark:hover:bg-green-950/60 text-green-700 dark:text-green-300 font-semibold text-lg transition-all"
                >
                  ✅ Legit
                </button>
              </div>
            )}

            {/* Result feedback */}
            {showResult && (
              <div className={`mx-5 mb-5 rounded-xl border p-4 ${getFeedbackColor()}`}>
                <div className="flex items-start gap-2 mb-2">
                  {selected === q.answer
                    ? <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    : <XCircle className="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  }
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    {selected === q.answer
                      ? 'Correct!'
                      : `Not quite — this was a ${q.answer === 'scam' ? '🚨 scam' : '✅ legitimate message'}`
                    }
                  </p>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{q.explanation}</p>
                {q.redFlags && q.redFlags.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Red flags</p>
                    <ul className="space-y-1">
                      {q.redFlags.map((f, i) => (
                        <li key={i} className="flex gap-1.5 text-sm text-gray-700 dark:text-gray-300">
                          <span className="text-red-500 flex-shrink-0">•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Next button */}
          {showResult && (
            <button
              onClick={handleNext}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold text-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
            >
              {current + 1 >= QUESTIONS.length ? 'See My Results' : 'Next Question'}
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
