import { useState } from 'react';
import { ShieldAlert, CheckCircle2, XCircle, RotateCcw, ChevronRight, AlertTriangle, Trophy, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

/* ── Types ───────────────────────────────── */
type ScenarioType = 'email' | 'text' | 'phone';

interface Scenario {
  id: number;
  type: ScenarioType;
  title: string;
  isScam: boolean;
  content: string;
  from: string;
  redFlags: string[];
  explanation: string;
}

/* ── Scenario data ───────────────────────── */
const scenarios: Scenario[] = [
  {
    id: 1,
    type: 'email',
    title: 'IRS Tax Notice',
    isScam: true,
    from: 'irs-collections@tax-urgentnotice.com',
    content: `Subject: URGENT: Warrant for Your Arrest — Unpaid Taxes

Dear Taxpayer,

Our records indicate you owe $4,782.00 in back taxes. A federal arrest warrant has been issued in your name. You must pay IMMEDIATELY using gift cards or wire transfer to avoid arrest.

Call 1-800-555-0199 within 24 hours or law enforcement WILL come to your home.

— IRS Criminal Investigation Division`,
    redFlags: [
      'The IRS never threatens arrest by email — they send paper letters by mail.',
      'The email address "tax-urgentnotice.com" is not a real government domain (.gov).',
      'Legitimate agencies never demand payment by gift cards or wire transfer.',
      'Extreme urgency and fear tactics ("arrest warrant," "24 hours") are classic pressure techniques.',
    ],
    explanation: 'The IRS always contacts you by postal mail first. They never threaten immediate arrest, and they never accept gift cards or wire transfers as payment. If you get a message like this, hang up or delete it.',
  },
  {
    id: 2,
    type: 'phone',
    title: 'Grandchild Emergency Call',
    isScam: true,
    from: 'Unknown number — voice sounds like your grandchild',
    content: `[Phone rings — a young voice, crying]

"Grandma? Grandpa? It's me... I'm in trouble. I was in a car accident and I got arrested. Please don't tell Mom and Dad — I'm so embarrassed. I need you to send $3,000 for bail right away. My lawyer says you can send it through Walmart as a money order. Please hurry, I'm so scared..."

[A second voice comes on]
"Hello, I'm the public defender assigned to your grandchild's case. We need the money within 2 hours or they'll be transferred to county jail."`,
    redFlags: [
      'AI can now clone voices from just a few seconds of audio found on social media.',
      'Scammers always say "don\'t tell your parents" to prevent you from verifying the story.',
      'Real lawyers never call demanding immediate cash payments from relatives.',
      'Asking for money orders or wire transfers is a huge red flag — these are untraceable.',
      'The caller never says their own name — they let you fill it in ("Is that you, Tommy?").',
    ],
    explanation: 'This is called the "grandparent scam." Always hang up and call your grandchild directly on their known phone number. Even if the voice sounds exactly like them, AI voice cloning technology can fake it perfectly.',
  },
  {
    id: 3,
    type: 'email',
    title: 'Tech Support Alert',
    isScam: true,
    from: 'Windows Security Center (pop-up on your screen)',
    content: `====================================
  MICROSOFT WINDOWS DEFENDER ALERT
====================================

** YOUR COMPUTER IS INFECTED **

Trojan Spyware detected! Your passwords, banking
info, and personal files are AT RISK.

DO NOT SHUT DOWN YOUR COMPUTER.
Call Microsoft Certified Technicians immediately:

    1-888-555-0342 (Toll Free)

Error Code: DW6VB36
Failure to act may result in permanent data loss.
====================================`,
    redFlags: [
      'Real Windows alerts never include a phone number to call.',
      'Microsoft will never contact you through a pop-up asking you to call them.',
      'Fake "error codes" (DW6VB36) are made up to sound technical and scary.',
      'Legitimate antivirus software handles threats automatically — it doesn\'t ask you to call someone.',
      'The pop-up tries to prevent you from closing it or shutting down (so you\'ll panic and call).',
    ],
    explanation: 'These pop-ups appear on websites and are completely fake. Close the browser tab (or force-quit the browser). Your computer is not infected. Never call the number — they\'ll try to charge hundreds of dollars for fake repairs.',
  },
  {
    id: 4,
    type: 'text',
    title: 'Package Delivery Notice',
    isScam: true,
    from: '+1 (347) 555-0891',
    content: `USPS: Your package 9400-1234-5678 could not be delivered due to incomplete address. Update your information within 24hrs to avoid return:

https://usps-redelivery-update.tracking-info.xyz/verify

Reply STOP to opt out`,
    redFlags: [
      'The link goes to "tracking-info.xyz" — not the real USPS website (usps.com).',
      'USPS does not text you demanding you click a link to update your address.',
      'The "24 hours" deadline creates false urgency so you act without thinking.',
      'The tracking number format looks real but is completely made up.',
      'If you weren\'t expecting a package, that\'s another clue it\'s fake.',
    ],
    explanation: 'Fake delivery texts are one of the most common scams. The link leads to a fake website designed to steal your personal information. If you\'re worried about a real package, go directly to usps.com and enter the tracking number yourself.',
  },
  {
    id: 5,
    type: 'text',
    title: 'New Online Friend',
    isScam: true,
    from: 'Margaret_loves_garden on Facebook',
    content: `"Hi there! I saw your comment on the gardening group and I just had to reach out. You seem like such a wonderful person. I'm Margaret, 62, recently widowed. My late husband was in the military.

I know this is forward, but I feel a real connection with you. Life has been so lonely since Richard passed. I would love to chat more and get to know you.

I'm actually living overseas right now settling my husband's estate, but I'll be moving to the US soon. Maybe we could meet for coffee when I arrive?

PS — I'm having some trouble with the bank here processing the estate transfer. Have you ever dealt with international banking?"`,
    redFlags: [
      'Quickly building an emotional bond with a stranger is a hallmark of romance scams.',
      'Mentioning being widowed and lonely is designed to create sympathy and lower your guard.',
      'Living "overseas" explains why they can\'t meet in person or video chat.',
      'The mention of banking troubles is the setup — eventually they\'ll ask for money.',
      'The profile may use stolen photos of a real person.',
    ],
    explanation: 'Romance scams target lonely people by building fake emotional connections. They\'ll eventually ask for money for "emergencies," "travel," or "business problems." Never send money to someone you haven\'t met in person, and be suspicious of anyone who moves quickly to deep emotional conversations.',
  },
  {
    id: 6,
    type: 'text',
    title: 'Bank Security Alert',
    isScam: true,
    from: '56789 (short code)',
    content: `[Wells Fargo Alert] Unusual activity detected on your account ending in **4821. A charge of $847.33 at BEST BUY was flagged.

If this was NOT you, tap below immediately to secure your account:

https://wellsfargo-secure.account-verify.net/login

If this was you, no action needed.`,
    redFlags: [
      'The link goes to "account-verify.net" — not the real Wells Fargo site (wellsfargo.com).',
      'Real bank alerts tell you to call the number on the back of your card — not click a link.',
      'The specific dollar amount and store name make it feel real, but scammers do this on purpose.',
      'Short code numbers (56789) can be spoofed — don\'t trust the sender.',
      'The page you\'d land on would look exactly like Wells Fargo\'s site but steal your login.',
    ],
    explanation: 'Bank phishing texts are extremely convincing. Never click a link in a text about your bank account. Instead, open your banking app directly or call the number printed on the back of your debit card.',
  },
  {
    id: 7,
    type: 'email',
    title: 'Prize Winner Notification',
    isScam: true,
    from: 'awards@international-sweepstakes-board.org',
    content: `Subject: Congratulations! You've Won $2,500,000.00!

Dear Lucky Winner,

Your email was randomly selected in our International Internet Sweepstakes draw. You have won TWO MILLION FIVE HUNDRED THOUSAND DOLLARS ($2,500,000.00)!

To claim your prize, simply pay the $199.99 processing and insurance fee. Once received, your funds will be deposited within 48 hours.

Click here to pay the processing fee and claim your winnings!

Sincerely,
Dr. James Williams
International Prize Commission
London, United Kingdom`,
    redFlags: [
      'You can\'t win a contest you never entered.',
      'Legitimate sweepstakes never charge a fee to collect your prize — that\'s illegal.',
      'The email address uses a fake organization name that sounds official.',
      '"Dr. James Williams" is a fabricated authority figure meant to sound credible.',
      'The huge dollar amount is designed to cloud your judgment with excitement.',
    ],
    explanation: 'If you have to pay money to receive a prize, it\'s always a scam. Real sweepstakes (like Publishers Clearing House) never require fees. Delete these emails immediately.',
  },
  {
    id: 8,
    type: 'phone',
    title: 'Medicare Benefits Call',
    isScam: true,
    from: 'Caller ID shows: "Medicare Services"',
    content: `[Automated voice, then transferred to a person]

"Hello, this is Sarah from Medicare Benefits Center. I'm calling because you qualify for a new Medicare card with enhanced benefits at no additional cost. We're updating all cards in your area.

I just need to verify your identity. Can you confirm your Medicare number and date of birth so I can process your upgraded card?

This offer expires at the end of the month, and if you don't update now, you may experience a gap in coverage."`,
    redFlags: [
      'Medicare will never call you to ask for your Medicare number — they already have it.',
      'No one from Medicare calls to offer "upgraded" or "new" cards out of the blue.',
      'Asking you to "verify" your identity is how they steal your personal information.',
      'The threat of losing coverage creates urgency so you don\'t stop to think.',
      'Caller ID can be easily spoofed to show any name, including "Medicare Services."',
    ],
    explanation: 'Medicare scam calls are extremely common. Medicare will never call you unsolicited to ask for your Medicare number, Social Security number, or banking details. If someone calls claiming to be from Medicare, hang up and call 1-800-MEDICARE (1-800-633-4227) directly.',
  },
];

/* ── Helper for type badges ──────────────── */
function TypeBadge({ type }: { type: ScenarioType }) {
  const config = {
    email: { label: 'Email', className: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
    text: { label: 'Text Message', className: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
    phone: { label: 'Phone Call', className: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
  };
  const c = config[type];
  return <Badge className={`${c.className} text-base px-3 py-1`}>{c.label}</Badge>;
}

/* ── Main component ──────────────────────── */
export default function ScamSimulator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [revealed, setRevealed] = useState(false);
  const [finished, setFinished] = useState(false);

  const scenario = scenarios[currentIndex];
  const totalScenarios = scenarios.length;
  const progress = (currentIndex / totalScenarios) * 100;

  const score = Object.entries(answers).reduce((acc, [idx, answeredYes]) => {
    const s = scenarios[Number(idx)];
    const correct = s.isScam === answeredYes;
    return acc + (correct ? 1 : 0);
  }, 0);

  function handleAnswer(saidScam: boolean) {
    setAnswers(prev => ({ ...prev, [currentIndex]: saidScam }));
    setRevealed(true);
  }

  function handleNext() {
    if (currentIndex < totalScenarios - 1) {
      setCurrentIndex(prev => prev + 1);
      setRevealed(false);
    } else {
      setFinished(true);
    }
  }

  function reset() {
    setCurrentIndex(0);
    setAnswers({});
    setRevealed(false);
    setFinished(false);
  }

  const isCorrect = currentIndex in answers && scenario.isScam === answers[currentIndex];

  return (
    <>
      <SEOHead
        title="Scam Simulator | TekSure"
        description="Test your ability to spot scams with 8 realistic scenarios. Learn the red flags of phishing emails, scam calls, and fake texts in a safe, interactive quiz."
        path="/tools/scam-simulator"
      />
      <Navbar />
      <main className="container py-12 min-h-[80vh] max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <ShieldAlert className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Scam Simulator</h1>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          Can you tell what's real and what's a scam? Test yourself with 8 realistic scenarios and learn the warning signs.
        </p>

        {/* ── Progress bar ── */}
        {!finished && (
          <div className="mb-8">
            <div className="flex justify-between text-lg text-muted-foreground mb-2">
              <span>Scenario {currentIndex + 1} of {totalScenarios}</span>
              <span>Score: {score}/{Object.keys(answers).length}</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        )}

        {/* ── Scenario card ── */}
        {!finished && (
          <div>
            {/* Scenario header */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <TypeBadge type={scenario.type} />
              <h2 className="text-xl font-semibold">{scenario.title}</h2>
            </div>

            {/* Simulated message */}
            <Card className="mb-6 border-2">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  From: <span className="font-mono text-foreground">{scenario.from}</span>
                </p>
                <div className="bg-muted/50 rounded-xl p-5 font-mono text-base leading-relaxed whitespace-pre-wrap">
                  {scenario.content}
                </div>
              </CardContent>
            </Card>

            {/* Answer buttons */}
            {!revealed && (
              <div className="space-y-3">
                <p className="text-xl font-semibold text-center mb-4">Is this a scam?</p>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="min-h-16 text-lg font-semibold border-2 hover:bg-red-50 hover:border-red-400 hover:text-red-700 dark:hover:bg-red-950 dark:hover:border-red-500 dark:hover:text-red-300 transition-all"
                    onClick={() => handleAnswer(true)}
                  >
                    <ShieldAlert className="h-6 w-6 mr-2" />
                    Yes, it's a scam
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="min-h-16 text-lg font-semibold border-2 hover:bg-green-50 hover:border-green-400 hover:text-green-700 dark:hover:bg-green-950 dark:hover:border-green-500 dark:hover:text-green-300 transition-all"
                    onClick={() => handleAnswer(false)}
                  >
                    <CheckCircle2 className="h-6 w-6 mr-2" />
                    No, it's real
                  </Button>
                </div>
              </div>
            )}

            {/* Reveal section */}
            {revealed && (
              <div className="space-y-4">
                {/* Correct / incorrect banner */}
                <div
                  className={`rounded-xl p-5 flex items-start gap-4 ${
                    isCorrect
                      ? 'bg-green-50 border-2 border-green-300 dark:bg-green-950/40 dark:border-green-700'
                      : 'bg-red-50 border-2 border-red-300 dark:bg-red-950/40 dark:border-red-700'
                  }`}
                >
                  {isCorrect ? (
                    <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="h-8 w-8 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className={`text-xl font-bold ${isCorrect ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}`}>
                      {isCorrect ? 'Correct!' : 'Not quite!'} This {scenario.isScam ? 'IS a scam' : 'is legitimate'}.
                    </p>
                    <p className="text-lg mt-1 text-foreground/80">{scenario.explanation}</p>
                  </div>
                </div>

                {/* Red flags list */}
                <Card className="border-2 border-amber-300 dark:border-amber-700 bg-amber-50/50 dark:bg-amber-950/30">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Eye className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                      <h3 className="text-lg font-bold text-amber-800 dark:text-amber-300">Red Flags to Watch For</h3>
                    </div>
                    <ul className="space-y-3">
                      {scenario.redFlags.map((flag, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                          <span className="text-base">{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Next button */}
                <Button
                  size="lg"
                  className="w-full min-h-14 text-lg font-semibold gap-2"
                  onClick={handleNext}
                >
                  {currentIndex < totalScenarios - 1 ? (
                    <>Next Scenario <ChevronRight className="h-5 w-5" /></>
                  ) : (
                    <>See My Results <Trophy className="h-5 w-5" /></>
                  )}
                </Button>
              </div>
            )}
          </div>
        )}

        {/* ── Final results ── */}
        {finished && (
          <div>
            {/* Score card */}
            <Card className="mb-8 border-2 border-primary/30 bg-primary/5">
              <CardContent className="p-8 text-center">
                <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2">Your Score: {score}/{totalScenarios}</h2>
                <p className="text-xl text-muted-foreground mb-4">
                  {score === totalScenarios
                    ? "Perfect score! You're a scam-spotting expert!"
                    : score >= 6
                    ? 'Great job! You have strong scam awareness.'
                    : score >= 4
                    ? 'Good effort! Review the red flags below to sharpen your skills.'
                    : 'Keep learning! Knowing these red flags will protect you.'}
                </p>
                <Progress value={(score / totalScenarios) * 100} className="h-4 max-w-md mx-auto" />
              </CardContent>
            </Card>

            {/* Full review of all scenarios */}
            <h3 className="text-2xl font-bold mb-4">What You Learned</h3>
            <div className="space-y-4 mb-8">
              {scenarios.map((s, i) => {
                const userSaidScam = answers[i];
                const wasCorrect = s.isScam === userSaidScam;
                return (
                  <Card key={s.id} className="border">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        {wasCorrect ? (
                          <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                        ) : (
                          <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                        )}
                        <span className="text-lg font-semibold">{s.title}</span>
                        <TypeBadge type={s.type} />
                        <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-sm ml-auto">
                          Scam
                        </Badge>
                      </div>
                      <p className="text-base text-muted-foreground mb-3">{s.explanation}</p>
                      <details className="group">
                        <summary className="text-base font-medium text-primary cursor-pointer hover:underline">
                          View all red flags
                        </summary>
                        <ul className="mt-3 space-y-2 pl-2">
                          {s.redFlags.map((flag, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-1" />
                              <span className="text-base">{flag}</span>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Safety tips box */}
            <Card className="mb-8 border-2 border-amber-300 dark:border-amber-700 bg-amber-50/50 dark:bg-amber-950/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-3">Golden Rules to Stay Safe</h3>
                <ul className="space-y-3">
                  {[
                    'Never give personal info (Social Security, Medicare, bank details) to someone who contacts you first.',
                    "If something feels urgent or scary, that's a red flag. Scammers want you to panic.",
                    'Hang up and call back using a number you trust (from your card, a bill, or the official website).',
                    "Never pay by gift card, wire transfer, or cryptocurrency. Legitimate companies don't ask for these.",
                    'When in doubt, ask a trusted friend or family member before taking action.',
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ShieldAlert className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-lg">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Button size="lg" variant="outline" onClick={reset} className="gap-2 min-h-14 text-lg">
              <RotateCcw className="h-5 w-5" /> Try Again
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
