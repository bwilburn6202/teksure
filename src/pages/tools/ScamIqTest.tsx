import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldAlert, CheckCircle, XCircle, ArrowRight, Trophy, RotateCcw, Share2 } from 'lucide-react';

interface Question {
  id: number;
  scenario: string;
  details: string;
  isScam: boolean;
  explanation: string;
  redFlags: string[];
  category: 'email' | 'phone' | 'text' | 'website' | 'social';
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    scenario: 'Amazon order confirmation email',
    details: 'You get an email: "Your Amazon order #298-4721 for $1,249.99 has shipped. If you didn\'t make this purchase, click here to cancel." The sender is amaz0n-support@mail-delivery.net.',
    isScam: true,
    explanation: 'Real Amazon emails come from @amazon.com only. This sender uses a zero instead of an O, and the domain is completely different. The panic tactic ("cancel this charge!") is designed to make you click without thinking. Real alert: never click links in suspicious emails. Open the Amazon app or type amazon.com directly.',
    redFlags: ['Sender domain is not amazon.com', 'Zero instead of O in "amazon"', 'Urgency to click a link', 'Unexpected large purchase'],
    category: 'email',
  },
  {
    id: 2,
    scenario: 'IRS phone call',
    details: 'A caller says they\'re from the IRS. They have a stern tone and say you owe $4,720 in back taxes. If you don\'t pay today with gift cards, a warrant will be issued for your arrest.',
    isScam: true,
    explanation: 'The IRS NEVER calls. They only send letters through the US Postal Service. They also never accept payment by gift card — ever, under any circumstances. No government agency does. Hang up immediately and report to ftc.gov/complaint.',
    redFlags: ['IRS never calls', 'Gift card payment request', 'Threats of arrest', 'Pressure to pay immediately'],
    category: 'phone',
  },
  {
    id: 3,
    scenario: 'Your bank\'s fraud alert',
    details: 'Chase Bank\'s app notifies you: "Suspicious $400 charge at Walmart detected. Reply YES to confirm or NO to decline."',
    isScam: false,
    explanation: 'This is legitimate. Banks routinely send real-time fraud alerts through their official app or by text from a known short-code number (Chase uses 24273). These are safe to respond to. However — if the same message came via email with a link, treat it as suspicious and verify in the app instead.',
    redFlags: [],
    category: 'text',
  },
  {
    id: 4,
    scenario: 'USPS package delivery text',
    details: 'Text message: "USPS: Your package cannot be delivered due to an incomplete address. Please update at usps-deliv.com/track/4829. -USPS"',
    isScam: true,
    explanation: 'USPS does NOT send text messages about delivery unless you explicitly signed up for Informed Delivery. The URL is fake (usps-deliv.com is not a USPS domain — real is usps.com). These "smishing" texts try to steal your address and credit card info.',
    redFlags: ['Fake URL — real USPS is usps.com', 'Unexpected package', 'Clickable link in text', 'USPS doesn\'t text unless you signed up'],
    category: 'text',
  },
  {
    id: 5,
    scenario: 'Microsoft tech support popup',
    details: 'Browsing a website, a full-screen popup appears: "WARNING: Your computer is infected with 7 viruses. Call Microsoft support at 1-800-xxx-xxxx immediately." The page is loud and has countdown timers.',
    isScam: true,
    explanation: 'Microsoft does not scan your computer through a website. Real virus detection comes from your antivirus software (Windows Defender, etc.), not from a web page. This is a classic "scareware" scam. Close the tab, don\'t call. If it won\'t close, hold Power on your computer for 10 seconds to restart.',
    redFlags: ['Websites cannot detect viruses on your computer', 'Fake Microsoft phone number', 'Countdown timer pressure', 'Loud alarming popups'],
    category: 'website',
  },
  {
    id: 6,
    scenario: 'Facebook friend in trouble',
    details: 'Your friend Sarah messages on Facebook: "I\'m stuck in Mexico, my wallet was stolen. Can you wire me $800 via Western Union? I\'ll pay you back Monday, promise. Don\'t call — my phone is dead."',
    isScam: true,
    explanation: 'Sarah\'s Facebook account was hacked. Real friends in real trouble can be verified by calling them — scammers always have an excuse for why you can\'t call. Western Union and gift cards are never how real people ask for help. Call Sarah (or a family member) to verify.',
    redFlags: ['Western Union is untraceable — favorite of scammers', '"Don\'t call" is a huge red flag', 'Urgent money request', 'Account may be hacked, not actual friend'],
    category: 'social',
  },
  {
    id: 7,
    scenario: 'LinkedIn recruiter message',
    details: 'A verified LinkedIn recruiter from a Fortune 500 company messages you: "Your background looks great for a $180K/year remote position. Are you interested in learning more? I can set up a 15-minute intro call this week."',
    isScam: false,
    explanation: 'This is likely legitimate. Real recruiters do cold-message candidates on LinkedIn. Look for a verified profile, the company page matching their title, and legitimate email domain. Red flag would be: asking for SSN/bank info upfront, or requesting payment for "training" or "equipment" — never legitimate.',
    redFlags: [],
    category: 'social',
  },
  {
    id: 8,
    scenario: 'Medicare card email',
    details: 'Email from "Medicare Services": "Your Medicare card needs urgent reactivation. Click here to avoid benefits interruption. Failure to act within 48 hours will suspend coverage."',
    isScam: true,
    explanation: 'Medicare does NOT email you about your card. They communicate by mail only. Medicare cards also don\'t need "reactivation." This scam tries to harvest SSN and Medicare numbers, which can then be used for fraudulent medical billing. Report to 1-800-MEDICARE.',
    redFlags: ['Medicare never emails about your card', 'Urgency / deadline pressure', '"Reactivation" isn\'t a real thing', 'Medicare communicates by mail only'],
    category: 'email',
  },
  {
    id: 9,
    scenario: 'Amazon gift card winner',
    details: 'Text message: "Congratulations! You\'ve been selected to receive a $500 Amazon gift card. Click here to claim: amzn-giftcard.promo/claim/X82F9"',
    isScam: true,
    explanation: 'You didn\'t enter any contest, so you can\'t have won one. Amazon gift cards are not given away through random texts. Any link in an unexpected prize notification is a scam. The URL is fake (real Amazon is amazon.com). These links often install malware or harvest your personal info.',
    redFlags: ['You didn\'t enter a contest', 'Fake URL pretending to be Amazon', 'Unsolicited prize', 'Strange-looking link'],
    category: 'text',
  },
  {
    id: 10,
    scenario: 'Your grandchild in jail',
    details: 'Your phone rings. A voice that sounds exactly like your grandchild says: "Grandma, I\'m in jail. Please don\'t tell mom. I need $2,500 for bail — please wire it to my lawyer."',
    isScam: true,
    explanation: 'The "grandparent scam" is one of the most common frauds against seniors, and AI voice cloning makes it incredibly convincing. Always verify by calling your grandchild\'s actual number, or call a parent or sibling. Real lawyers don\'t take bail money by wire — that\'s always scam.',
    redFlags: ['"Don\'t tell anyone" isolation tactic', 'Wire transfer for bail', 'AI voice cloning can mimic voices', 'Urgent money demand'],
    category: 'phone',
  },
  {
    id: 11,
    scenario: 'Netflix subscription renewal',
    details: 'Email from "Netflix Support": "We were unable to validate your billing information for your subscription. Your account has been suspended. Update your payment method here: netflix-billing.co"',
    isScam: true,
    explanation: 'Real Netflix emails come from netflix.com (not netflix-billing.co). Netflix also never suspends accounts over billing without multiple warnings. Always log into Netflix directly through the app or by typing netflix.com into your browser — never from an email link.',
    redFlags: ['Sender domain is not netflix.com', '"Suspended" urgency', 'Link to a fake payment page', 'Asks for payment info via email'],
    category: 'email',
  },
  {
    id: 12,
    scenario: 'Social Security letter in mail',
    details: 'You receive a physical letter on Social Security Administration letterhead. It asks you to verify your SSN and address by calling 1-800-772-1213 (the real SSA number).',
    isScam: false,
    explanation: 'This is likely legitimate. The SSA does send letters by US mail and uses 1-800-772-1213 as their main number. However — if the letter asks you to call a different number or wire money, it\'s a scam. Also, you can verify any SSA letter by calling the official number directly.',
    redFlags: [],
    category: 'email',
  },
];

export default function ScamIqTest() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Map<number, boolean>>(new Map());
  const [showExplanation, setShowExplanation] = useState(false);
  const [finished, setFinished] = useState(false);

  const currentQ = QUESTIONS[currentIdx];
  const progress = ((currentIdx + (showExplanation ? 1 : 0)) / QUESTIONS.length) * 100;

  const handleAnswer = (answer: boolean) => {
    setAnswers(new Map(answers).set(currentQ.id, answer));
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setShowExplanation(false);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setAnswers(new Map());
    setShowExplanation(false);
    setFinished(false);
  };

  const correct = QUESTIONS.filter(q => answers.get(q.id) === q.isScam).length;
  const percent = Math.round((correct / QUESTIONS.length) * 100);
  const getGrade = () => {
    if (percent >= 90) return { grade: 'Expert', color: 'text-green-600', message: 'You\'re excellent at spotting scams. Share your knowledge with family!' };
    if (percent >= 75) return { grade: 'Savvy', color: 'text-blue-600', message: 'You\'re sharp. A few more practice rounds and you\'ll be an expert.' };
    if (percent >= 60) return { grade: 'Getting there', color: 'text-amber-600', message: 'You caught most of them. Review the ones you missed to sharpen your skills.' };
    return { grade: 'Practice time', color: 'text-red-600', message: 'Don\'t worry — scams are designed to trick everyone. Review and try again.' };
  };

  const userAnswer = answers.get(currentQ.id);
  const wasCorrect = userAnswer === currentQ.isScam;

  if (finished) {
    const g = getGrade();
    return (
      <>
        <SEOHead title="Scam IQ Test Results" description="Your score on the TekSure Scam IQ Test." path="/tools/scam-iq-test" />
        <main className="min-h-screen bg-background">
          <section className="container py-14">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-3">Your Scam IQ</h1>
              <div className={`text-6xl font-bold mb-2 ${g.color}`}>{percent}%</div>
              <Badge className="text-base px-4 py-1">{g.grade}</Badge>
              <p className="text-muted-foreground mt-4 leading-relaxed">{g.message}</p>
              <p className="text-sm text-muted-foreground mt-2">
                You got <strong>{correct} of {QUESTIONS.length}</strong> correct.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-8">
              <h2 className="text-xl font-semibold mb-4">Review your answers</h2>
              <div className="space-y-3">
                {QUESTIONS.map((q, i) => {
                  const userAns = answers.get(q.id);
                  const correct = userAns === q.isScam;
                  return (
                    <Card key={q.id} className={correct ? 'border-green-600/40' : 'border-red-600/40'}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-2">
                          {correct ? <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> : <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />}
                          <div>
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <Badge variant="outline" className="text-xs">#{i + 1}</Badge>
                              <h4 className="font-semibold text-sm">{q.scenario}</h4>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              You said it was <strong>{userAns ? 'a scam' : 'legitimate'}</strong>. It was <strong>{q.isScam ? 'a scam' : 'legitimate'}</strong>.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div className="max-w-xl mx-auto flex gap-3 justify-center flex-wrap">
              <Button onClick={handleReset}>
                <RotateCcw className="w-4 h-4 mr-2" />Try again
              </Button>
              <Button variant="outline" asChild>
                <a href="/tools/scam-simulator">More practice → Scam Simulator</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/safety/scam-alerts">Latest scam alerts</a>
              </Button>
            </div>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Scam IQ Test — How Well Can You Spot Scams?"
        description="Free 12-question quiz that tests your ability to identify phishing, phone scams, fake texts, and tech support fraud. With explanations."
        path="/tools/scam-iq-test"
      />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">Safety Quiz</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Scam IQ Test</h1>
            <p className="text-muted-foreground max-w-2xl">
              12 real-world scenarios. Is it a scam or legitimate? Learn the red flags the experts look for.
            </p>
          </div>
        </section>

        <section className="container py-10 md:py-14">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="text-muted-foreground">Question {currentIdx + 1} of {QUESTIONS.length}</span>
              <Badge variant="outline">{currentQ.category}</Badge>
            </div>
            <div className="h-2 bg-border rounded-full overflow-hidden mb-8">
              <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-3">{currentQ.scenario}</h2>
                <p className="text-muted-foreground leading-relaxed">{currentQ.details}</p>
              </CardContent>
            </Card>

            {!showExplanation ? (
              <>
                <h3 className="font-semibold mb-3">Is this a scam or legitimate?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Button size="lg" variant="outline" onClick={() => handleAnswer(true)} className="h-20 text-base">
                    <ShieldAlert className="w-5 h-5 mr-2 text-red-600" />
                    It's a SCAM
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => handleAnswer(false)} className="h-20 text-base">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    It's LEGITIMATE
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Card className={wasCorrect ? 'border-green-600/40 bg-green-50/50 dark:bg-green-950/20' : 'border-red-600/40 bg-red-50/50 dark:bg-red-950/20'}>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      {wasCorrect ? <CheckCircle className="w-6 h-6 text-green-600" /> : <XCircle className="w-6 h-6 text-red-600" />}
                      <h3 className="text-xl font-bold">
                        {wasCorrect ? 'Correct!' : 'Not quite.'}
                      </h3>
                    </div>
                    <p className="text-sm mb-4 font-medium">
                      The answer: <strong>{currentQ.isScam ? 'This IS a scam.' : 'This is legitimate.'}</strong>
                    </p>
                    <p className="text-sm leading-relaxed mb-4">{currentQ.explanation}</p>

                    {currentQ.redFlags.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Red flags:</h4>
                        <ul className="space-y-1">
                          {currentQ.redFlags.map((f, i) => (
                            <li key={i} className="text-sm flex gap-2">
                              <span className="text-red-600 mt-0.5">•</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
                <Button onClick={handleNext} size="lg" className="w-full mt-4">
                  {currentIdx < QUESTIONS.length - 1 ? (
                    <>Next question <ArrowRight className="w-4 h-4 ml-2" /></>
                  ) : (
                    <>See my score <Trophy className="w-4 h-4 ml-2" /></>
                  )}
                </Button>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
