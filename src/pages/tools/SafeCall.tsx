import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, ShieldCheck, AlertTriangle, XCircle, ChevronRight, RotateCcw, ExternalLink } from 'lucide-react';

interface Question {
  id: string;
  text: string;
  hint?: string;
  options: { label: string; value: string }[];
}

const questions: Question[] = [
  {
    id: 'who',
    text: 'Who did the caller claim to be?',
    options: [
      { label: 'The IRS, Social Security, or another government agency', value: 'gov' },
      { label: 'Microsoft, Apple, or another tech company', value: 'tech' },
      { label: 'My bank or credit card company', value: 'bank' },
      { label: 'Medicare or a health insurance company', value: 'health' },
      { label: 'A prize company (lottery, sweepstakes)', value: 'prize' },
      { label: `They didn't say, or it was a recorded message`, value: 'unknown' },
      { label: 'A family member or friend in trouble', value: 'family' },
      { label: 'A utility company (electric, gas, water)', value: 'utility' },
    ],
  },
  {
    id: 'initiated',
    text: 'Did YOU call them, or did they call YOU?',
    options: [
      { label: `They called me (I didn't expect the call)`, value: 'they_called' },
      { label: 'I called a number I found online or in an ad', value: 'i_called_ad' },
      { label: 'I called the number printed on my card or statement', value: 'i_called_card' },
    ],
  },
  {
    id: 'demand',
    text: 'What did the caller ask you to do?',
    hint: 'Pick the one that best matches.',
    options: [
      { label: 'Pay with a gift card (iTunes, Google Play, Amazon, etc.)', value: 'giftcard' },
      { label: 'Send money by wire transfer or Zelle/Venmo/Cash App', value: 'wire' },
      { label: 'Give my Social Security number, Medicare number, or bank account details', value: 'ssn' },
      { label: 'Let them control my computer remotely', value: 'remote' },
      { label: 'Confirm my account details (name, address, last 4 of card)', value: 'confirm' },
      { label: 'Click a link they texted or emailed me', value: 'link' },
      { label: 'Nothing yet — they just left a voicemail / I called back', value: 'nothing' },
      { label: 'Verify a normal account issue — no unusual request', value: 'normal' },
    ],
  },
  {
    id: 'pressure',
    text: 'How did the caller behave?',
    options: [
      { label: `They said it was urgent — I'd be arrested, fined, or lose my account immediately`, value: 'urgent' },
      { label: 'They were friendly and I called them back at a number I found myself', value: 'normal_callback' },
      { label: 'They said not to tell anyone (my family, bank, or the police)', value: 'secret' },
      { label: 'They were calm and professional — no unusual pressure', value: 'calm' },
      { label: 'They hung up before I could ask questions', value: 'hangup' },
    ],
  },
];

type Risk = 'scam' | 'likely-scam' | 'possibly-legit' | 'likely-legit';

interface Result {
  risk: Risk;
  headline: string;
  summary: string;
  actions: string[];
  reportLinks: { label: string; url: string }[];
}

function evaluate(answers: Record<string, string>): Result {
  const { who, initiated, demand, pressure } = answers;

  // Definite scam signals
  const definiteScam =
    demand === 'giftcard' ||
    demand === 'wire' ||
    (demand === 'ssn' && initiated === 'they_called') ||
    demand === 'remote' ||
    pressure === 'secret' ||
    who === 'prize' ||
    (who === 'gov' && demand !== 'normal') ||
    (who === 'gov' && pressure === 'urgent');

  if (definiteScam) {
    return {
      risk: 'scam',
      headline: 'This has the hallmarks of a scam.',
      summary: 'Real government agencies, banks, and tech companies do not call and ask for gift card payments, wire transfers, your Social Security number over the phone, or access to your computer. No legitimate caller will tell you to keep the call secret from your family or bank.',
      actions: [
        'Do NOT pay anything or give out any personal information.',
        'Hang up immediately if the call is still active.',
        'If you already paid or shared information — call your bank right away.',
        'Report the call to the FTC at reportfraud.ftc.gov.',
        'Tell a trusted family member or friend what happened.',
      ],
      reportLinks: [
        { label: 'Report to FTC (reportfraud.ftc.gov)', url: 'https://reportfraud.ftc.gov' },
        { label: 'Report to the FCC (fcc.gov/consumers/guides/filing-informal-complaint)', url: 'https://www.fcc.gov/consumers/guides/filing-informal-complaint' },
        { label: 'AARP Fraud Watch Network Helpline: 1-877-908-3360', url: 'https://www.aarp.org/money/scams-fraud/fraud-watch-network/' },
      ],
    };
  }

  // Likely scam signals
  const likelyScam =
    pressure === 'urgent' ||
    demand === 'link' ||
    (who === 'tech' && initiated === 'they_called') ||
    (who === 'family' && (demand === 'wire' || demand === 'giftcard')) ||
    (who === 'health' && initiated === 'they_called' && demand !== 'normal');

  if (likelyScam) {
    return {
      risk: 'likely-scam',
      headline: `This looks suspicious — don't act yet.`,
      summary: 'Several things about this call raise red flags. Scammers often create fake urgency and impersonate tech companies, government agencies, or even family members. Before doing anything, verify the call independently.',
      actions: [
        'Do not pay, share personal information, or install anything on your computer yet.',
        'Hang up and call the company or person back using a number you find yourself (on their official website or on your bill).',
        'For family members — call a second family member to verify the story.',
        'Ask yourself: why would a legitimate company call me with this urgency?',
        `If you're still unsure, ask a trusted person to help you.`,
      ],
      reportLinks: [
        { label: 'Report to FTC (reportfraud.ftc.gov)', url: 'https://reportfraud.ftc.gov' },
        { label: 'AARP Scam-Tracking Map', url: 'https://www.aarp.org/money/scams-fraud/scam-tracking-map/' },
      ],
    };
  }

  // Possibly legit
  const possiblyLegit =
    initiated === 'i_called_card' ||
    (pressure === 'calm' && demand === 'confirm') ||
    demand === 'nothing';

  if (possiblyLegit) {
    return {
      risk: 'possibly-legit',
      headline: 'This could be legitimate — but verify first.',
      summary: `The details you described don't set off major alarms, but it's always worth double-checking before sharing any personal information or making a payment.`,
      actions: [
        'Never share full account numbers, passwords, or Social Security numbers over the phone.',
        `It's always okay to say "I'll call you back" and hang up to verify.`,
        'Call the company back using the number on your bill, card, or their official website.',
        'Legitimate companies will understand if you need a moment to verify.',
      ],
      reportLinks: [],
    };
  }

  return {
    risk: 'likely-legit',
    headline: 'This call sounds legitimate.',
    summary: `Based on what you've described, this appears to be a routine call. You called a number you found yourself and there were no unusual demands. That's a good sign.`,
    actions: [
      `Always confirm the company's identity before sharing sensitive information.`,
      'You can always call back using the number on your official statement or their website.',
      'Never feel pressured to decide immediately on a call.',
    ],
    reportLinks: [],
  };
}

const riskConfig: Record<Risk, { color: string; bg: string; border: string; icon: typeof Phone }> = {
  scam: { color: 'text-red-700 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-950/30', border: 'border-red-200 dark:border-red-800', icon: XCircle },
  'likely-scam': { color: 'text-orange-700 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-950/30', border: 'border-orange-200 dark:border-orange-800', icon: AlertTriangle },
  'possibly-legit': { color: 'text-amber-700 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-950/30', border: 'border-amber-200 dark:border-amber-800', icon: AlertTriangle },
  'likely-legit': { color: 'text-green-700 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-950/30', border: 'border-green-200 dark:border-green-800', icon: ShieldCheck },
};

export default function SafeCall() {
  const [step, setStep] = useState(0); // 0 = intro, 1-N = questions, final = result
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<Result | null>(null);

  const isIntro = step === 0;
  const isDone = result !== null;
  const currentQuestion = !isIntro && !isDone ? questions[step - 1] : null;
  const progress = isDone ? 100 : Math.round((step / (questions.length + 1)) * 100);

  function selectAnswer(questionId: string, value: string) {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (step >= questions.length) {
      setResult(evaluate(newAnswers));
    } else {
      setStep(step + 1);
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setResult(null);
  }

  const cfg = result ? riskConfig[result.risk] : null;
  const ResultIcon = cfg?.icon ?? ShieldCheck;

  return (
    <>
      <SEOHead
        title="Was That Phone Call a Scam? | TekSure Safe Call Evaluator"
        description="Answer 4 quick questions about a suspicious phone call and find out if it was a scam — with clear steps on what to do next."
        path="/tools/safe-call"
      />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Safe Call Evaluator' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-green-50 dark:bg-green-950/30 flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-green-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Safe Call Evaluator
            </h1>
            <p className="text-muted-foreground text-lg">
              Got a suspicious phone call? Answer 4 quick questions and find out if it was a scam — and what to do next.
            </p>
          </div>
        </section>

        <div className="container py-10 pb-24 max-w-2xl">
          {/* Progress bar */}
          {!isIntro && (
            <div className="mb-8">
              <div className="flex justify-between text-xs text-muted-foreground mb-2">
                <span>Question {isDone ? questions.length : step} of {questions.length}</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          )}

          {/* Intro */}
          {isIntro && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border bg-card space-y-4">
                <h2 className="font-bold text-xl">How this works</h2>
                <p className="text-muted-foreground">
                  We'll ask you 4 simple questions about the call. Based on your answers, we'll tell you whether it shows signs of being a scam — and give you clear steps on what to do.
                </p>
                <p className="text-muted-foreground">
                  This tool uses patterns identified by the FTC (Federal Trade Commission) and AARP to flag common scam tactics.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-sm text-amber-800 dark:text-amber-300 mb-1">If you already paid money or gave personal information</p>
                    <p className="text-sm text-amber-700 dark:text-amber-400">
                      Contact your bank immediately. Time matters. Then report the scam to the FTC at reportfraud.ftc.gov.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => setStep(1)}
                className="w-full h-13 rounded-2xl text-base gap-2"
                size="lg"
              >
                Start Evaluation <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          )}

          {/* Questions */}
          {currentQuestion && (
            <div className="space-y-5">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Question {step} of {questions.length}</p>
                <h2 className="text-xl font-bold mb-1">{currentQuestion.text}</h2>
                {currentQuestion.hint && (
                  <p className="text-sm text-muted-foreground">{currentQuestion.hint}</p>
                )}
              </div>
              <div className="space-y-3">
                {currentQuestion.options.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => selectAnswer(currentQuestion.id, opt.value)}
                    className="w-full text-left p-4 rounded-2xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors min-h-[52px] flex items-center gap-3 group"
                  >
                    <span className="h-5 w-5 rounded-full border-2 border-border group-hover:border-primary flex-shrink-0 transition-colors" aria-hidden="true" />
                    <span className="text-sm font-medium">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result */}
          {isDone && result && cfg && (
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl border ${cfg.border} ${cfg.bg}`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`h-12 w-12 rounded-2xl bg-white/60 dark:bg-white/10 flex items-center justify-center flex-shrink-0`}>
                    <ResultIcon className={`h-6 w-6 ${cfg.color}`} aria-hidden="true" />
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${cfg.color}`}>
                      {result.risk === 'scam' ? 'HIGH RISK — SCAM' :
                       result.risk === 'likely-scam' ? 'LIKELY SCAM' :
                       result.risk === 'possibly-legit' ? 'PROCEED WITH CAUTION' :
                       'LIKELY LEGITIMATE'}
                    </p>
                    <h2 className="text-xl font-bold">{result.headline}</h2>
                  </div>
                </div>
                <p className="text-sm leading-relaxed">{result.summary}</p>
              </div>

              {/* What to do */}
              <div className="p-6 rounded-2xl border bg-card">
                <h3 className="font-bold text-base mb-4">What to do</h3>
                <ol className="space-y-3">
                  {result.actions.map((action, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-semibold mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-muted-foreground leading-relaxed">{action}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Report links */}
              {result.reportLinks.length > 0 && (
                <div className="p-6 rounded-2xl border bg-card">
                  <h3 className="font-bold text-base mb-4">Report this scam</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Reporting scam calls helps protect others. It only takes 2 minutes.
                  </p>
                  <div className="space-y-3">
                    {result.reportLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Common scam tactics */}
              <div className="p-5 rounded-2xl bg-muted/50 border border-border">
                <h3 className="font-semibold text-sm mb-3">Quick Tip: Signs of a scam call</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    'Asks for gift cards as payment — any card brand',
                    'Claims you owe money to the IRS or government',
                    `Says you'll be arrested if you don't pay immediately`,
                    'Asks you to let them control your computer',
                    'Tells you to keep the call secret from your family',
                    'A "family member" calls asking for emergency money',
                  ].map((tip, i) => (
                    <li key={i} className="flex gap-2">
                      <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant="outline"
                onClick={reset}
                className="w-full gap-2 rounded-2xl"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" /> Evaluate another call
              </Button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
