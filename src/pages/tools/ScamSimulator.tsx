import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  MessageSquare,
  Phone,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type ScenarioType = 'email' | 'text' | 'phone';

interface Scenario {
  id: number;
  type: ScenarioType;
  title: string;
  from: string;
  content: string;
  isScam: boolean;
  redFlags: string[];
  explanation: string;
}

/* ------------------------------------------------------------------ */
/*  Scenario data (7 scams, 3 legit)                                  */
/* ------------------------------------------------------------------ */

const scenarios: Scenario[] = [
  {
    id: 1,
    type: 'email',
    title: 'Urgent: Your Account Has Been Locked!',
    from: 'Amazon Security <security-alert@amaz0n-verify.com>',
    content:
      'Dear Valued Customer,\n\nWe detected unusual activity on your Amazon account. Your account has been temporarily locked for your protection.\n\nTo restore access, please verify your identity immediately by clicking the link below:\n\nhttps://amaz0n-verify.com/restore-account\n\nIf you do not verify within 24 hours, your account will be permanently closed.\n\nThank you,\nAmazon Security Team',
    isScam: true,
    redFlags: [
      'The sender address uses "amaz0n" (with a zero) instead of "amazon" — a classic trick to look official.',
      'The link goes to "amaz0n-verify.com," not the real amazon.com website.',
      'It creates panic by threatening to permanently close your account.',
      'Real Amazon emails never ask you to click a link to "verify your identity."',
    ],
    explanation:
      'This is a phishing scam. The email is designed to scare you into clicking a fake link that will steal your login information. Amazon will never email you from a misspelled address or threaten to close your account unless you click a link.',
  },
  {
    id: 2,
    type: 'text',
    title: 'Prescription Ready',
    from: 'CVS Pharmacy (800) 746-7287',
    content:
      'CVS Pharmacy: Your prescription for Lisinopril is ready for pickup at the CVS on 412 Main St. Pickup hours are 9 AM – 9 PM. Reply STOP to opt out.',
    isScam: false,
    redFlags: [],
    explanation:
      'This is a legitimate pharmacy notification. It comes from a recognized CVS number, mentions a specific medication and store location, and does not ask you to click any links or share personal information. Pharmacies routinely send these reminders.',
  },
  {
    id: 3,
    type: 'phone',
    title: 'IRS Arrest Warrant',
    from: 'Unknown Number (caller claims to be from the IRS)',
    content:
      'Caller: "This is Officer James Wilson from the Internal Revenue Service. We have filed a lawsuit against you for unpaid federal taxes totaling $4,782. A warrant has been issued for your arrest. To avoid arrest today, you must make an immediate payment using prepaid gift cards. Press 1 to speak to a resolution officer now."',
    isScam: true,
    redFlags: [
      'The IRS never calls to threaten arrest or demand immediate payment.',
      'The IRS never asks for payment through gift cards — that is always a scam.',
      'Real IRS issues are handled through official letters sent by mail.',
      'The call uses scare tactics and urgency to pressure you into acting fast.',
    ],
    explanation:
      'This is one of the most common phone scams in the country. The real IRS always contacts people by mail first, never by phone. They will never threaten arrest, demand gift cards, or pressure you to pay immediately. If you get a call like this, hang up.',
  },
  {
    id: 4,
    type: 'text',
    title: 'Package Delivery Problem',
    from: '+1 (347) 555-0199',
    content:
      'USPS: Your package could not be delivered due to an incomplete address. Please update your delivery details here: https://usps-redelivery-update.com/track?id=9374889',
    isScam: true,
    redFlags: [
      'The link goes to "usps-redelivery-update.com," not the real usps.com website.',
      'USPS does not text you from a random phone number.',
      'Real delivery notices direct you to usps.com or leave a physical slip at your door.',
      'The text creates urgency to make you click without thinking.',
    ],
    explanation:
      'This is a smishing (text message phishing) scam. The fake link is designed to steal your personal information or install harmful software on your phone. If you are expecting a package, go directly to usps.com and enter your tracking number there.',
  },
  {
    id: 5,
    type: 'email',
    title: 'Your Monthly Statement Is Ready',
    from: 'Wells Fargo <alerts@notify.wellsfargo.com>',
    content:
      'Hello,\n\nYour Wells Fargo monthly statement for March 2026 is now available. You can view it by signing in to your account at wellsfargo.com.\n\nIf you have questions, call the number on the back of your debit card.\n\nThank you,\nWells Fargo Customer Service',
    isScam: false,
    redFlags: [],
    explanation:
      'This is a legitimate bank notification. It comes from an official Wells Fargo email address, does not include any clickable links in the message body, and tells you to sign in on your own at wellsfargo.com. It also suggests calling the number on your card — not a number in the email. These are all signs of a real message.',
  },
  {
    id: 6,
    type: 'email',
    title: 'VIRUS DETECTED on Your Computer!',
    from: 'Microsoft Support <urgent-alert@microsoft-security-scan.com>',
    content:
      'WARNING: Our system has detected a critical virus on your Windows computer.\n\nYour personal files, passwords, and banking information are at risk.\n\nCall our Microsoft Certified Technicians immediately at 1-888-555-0147 to remove the virus before it spreads.\n\nDO NOT TURN OFF YOUR COMPUTER.\n\n— Microsoft Security Center',
    isScam: true,
    redFlags: [
      'Microsoft does not send emails warning about viruses on your specific computer.',
      'The sender domain "microsoft-security-scan.com" is not a real Microsoft address.',
      'It asks you to call a phone number where scammers will try to gain remote access to your computer.',
      'It uses all-caps warnings and urgent language to create panic.',
    ],
    explanation:
      'This is a tech support scam. Microsoft will never email you about a virus on your computer or ask you to call a phone number for help. If you call the number, the scammer will try to get remote access to your computer and steal your money or personal information.',
  },
  {
    id: 7,
    type: 'text',
    title: '$500 Gift Card Winner',
    from: '+1 (213) 555-0842',
    content:
      'Congratulations! You have been selected to receive a $500 Walmart Gift Card! Claim your reward now: https://walmart-rewards-claim.com/winner?ref=82947',
    isScam: true,
    redFlags: [
      'You did not enter any contest — you cannot "win" something you never signed up for.',
      'The link goes to "walmart-rewards-claim.com," not the real walmart.com.',
      'Legitimate companies do not give away prizes through random text messages.',
      'It creates excitement to get you to click without thinking.',
    ],
    explanation:
      'This is a prize scam. The link will either ask for personal information (to steal your identity) or ask for a "small processing fee" (to steal your money). No real company gives away gift cards through random texts. If it sounds too good to be true, it is.',
  },
  {
    id: 8,
    type: 'phone',
    title: 'Appointment Reminder',
    from: 'Dr. Thompson\'s Office (555) 412-7700',
    content:
      'Caller: "Hello, this is a reminder from Dr. Thompson\'s office. You have an appointment scheduled for tomorrow, April 5th, at 2:30 PM. Please arrive 15 minutes early. If you need to reschedule, press 1 or call us at 555-412-7700. Thank you."',
    isScam: false,
    redFlags: [],
    explanation:
      'This is a standard automated appointment reminder. It mentions a specific doctor, date, and time. It does not ask for any personal information, payment, or passwords. Doctor\'s offices routinely send these calls and they are safe to listen to.',
  },
  {
    id: 9,
    type: 'email',
    title: 'Grandma, I Need Help!',
    from: 'Tommy Wilson <tommy.wilson.help2026@gmail.com>',
    content:
      'Grandma,\n\nI\'m in trouble and I didn\'t want to worry Mom and Dad. I\'m traveling in Mexico and I got robbed. They took my wallet, phone, and passport. I\'m using a friend\'s email to write you.\n\nI need $2,000 wired to me through Western Union so I can get home. Please don\'t tell Mom — she\'ll freak out. I\'ll pay you back as soon as I\'m home.\n\nPlease hurry,\nTommy',
    isScam: true,
    redFlags: [
      'The "grandchild in trouble" story is one of the most common scams targeting seniors.',
      'It asks for money through Western Union — wire transfers cannot be reversed or traced.',
      'It specifically asks you not to tell other family members, so no one can warn you.',
      'The email address is a random Gmail account, not your grandchild\'s real email.',
    ],
    explanation:
      'This is called the "grandparent scam." Scammers pretend to be a grandchild in trouble to pressure grandparents into sending money fast. If you ever get a message like this, hang up or close the email and call your grandchild directly at their real phone number. Never send money without confirming the story with other family members.',
  },
  {
    id: 10,
    type: 'phone',
    title: 'Social Security Number Compromised',
    from: 'Unknown Number (caller claims to be from the Social Security Administration)',
    content:
      'Caller: "This is an urgent message from the Social Security Administration. Your Social Security number has been linked to suspicious activity and has been suspended. To reactivate your number and avoid legal action, press 1 to speak with a federal agent immediately. Failure to respond will result in the suspension of your benefits."',
    isScam: true,
    redFlags: [
      'The Social Security Administration cannot "suspend" your Social Security number — that is not something they do.',
      'The SSA will never call you to threaten legal action.',
      'Government agencies do not ask you to "press 1" to resolve legal matters.',
      'The call uses scare tactics about losing your benefits to pressure you into acting quickly.',
    ],
    explanation:
      'This is a government impersonation scam. The Social Security Administration will never call to say your number has been "suspended" or threaten legal action over the phone. If you are concerned about your Social Security account, call the real SSA directly at 1-800-772-1213.',
  },
];

/* ------------------------------------------------------------------ */
/*  Sub-components for rendering scenario types                        */
/* ------------------------------------------------------------------ */

function EmailCard({ scenario }: { scenario: Scenario }) {
  return (
    <Card className="border-2 border-border bg-card overflow-hidden">
      {/* email header */}
      <div className="bg-gray-50 border-b px-5 py-4 space-y-1">
        <p className="text-sm text-gray-500 font-medium">From:</p>
        <p className="text-base font-semibold text-gray-800 break-all">{scenario.from}</p>
        <p className="text-sm text-gray-500 font-medium mt-2">Subject:</p>
        <p className="text-base font-semibold text-gray-800">{scenario.title}</p>
      </div>
      {/* email body */}
      <CardContent className="pt-5 pb-6 px-5">
        <p className="text-lg leading-relaxed whitespace-pre-line text-gray-700">
          {scenario.content}
        </p>
      </CardContent>
    </Card>
  );
}

function TextBubble({ scenario }: { scenario: Scenario }) {
  return (
    <div className="space-y-3 max-w-lg mx-auto">
      <p className="text-sm text-gray-500 text-center font-medium">{scenario.from}</p>
      <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm">
        <p className="text-lg leading-relaxed text-gray-800">{scenario.content}</p>
      </div>
    </div>
  );
}

function PhoneTranscript({ scenario }: { scenario: Scenario }) {
  return (
    <Card className="border-2 border-border bg-card overflow-hidden">
      <div className="bg-green-50 border-b px-5 py-4 flex items-center gap-3">
        <Phone className="w-5 h-5 text-green-700" />
        <div>
          <p className="text-sm text-gray-500 font-medium">Incoming call from:</p>
          <p className="text-base font-semibold text-gray-800">{scenario.from}</p>
        </div>
      </div>
      <CardContent className="pt-5 pb-6 px-5">
        <p className="text-lg leading-relaxed whitespace-pre-line text-gray-700 italic">
          {scenario.content}
        </p>
      </CardContent>
    </Card>
  );
}

function TypeBadge({ type }: { type: ScenarioType }) {
  const config = {
    email: { label: 'Email', icon: Mail, color: 'bg-blue-100 text-blue-800' },
    text: { label: 'Text Message', icon: MessageSquare, color: 'bg-purple-100 text-purple-800' },
    phone: { label: 'Phone Call', icon: Phone, color: 'bg-green-100 text-green-800' },
  }[type];
  const Icon = config.icon;
  return (
    <Badge variant="outline" className={`${config.color} border-0 text-base px-3 py-1 gap-1.5`}>
      <Icon className="w-4 h-4" />
      {config.label}
    </Badge>
  );
}

/* ------------------------------------------------------------------ */
/*  Score helpers                                                      */
/* ------------------------------------------------------------------ */

function getScoreMessage(score: number, total: number): { heading: string; body: string } {
  const pct = score / total;
  if (pct === 1)
    return {
      heading: 'Perfect Score!',
      body: 'You spotted every single scam and correctly identified the legitimate messages too. You have excellent scam awareness. Keep it up!',
    };
  if (pct >= 0.8)
    return {
      heading: 'Great Job!',
      body: 'You caught most of the scams. Review the ones you missed to sharpen your skills even more.',
    };
  if (pct >= 0.6)
    return {
      heading: 'Good Effort!',
      body: 'You are building solid awareness. Scammers are tricky, so practicing like this is exactly the right thing to do.',
    };
  return {
    heading: 'Keep Practicing!',
    body: 'Scams are designed to fool people — there is no shame in getting tricked during practice. The important thing is that you are learning. Try again and see how much you improve!',
  };
}

const safetyTips = [
  'Never click links in unexpected messages. Go to the website yourself by typing the address into your browser.',
  'If someone asks for gift cards, wire transfers, or cryptocurrency, it is a scam — no matter who they claim to be.',
  'The government (IRS, SSA, Medicare) will never call to threaten you or demand payment over the phone.',
  'When in doubt, hang up and call the company directly using the number on their official website or your statement.',
  'Talk to a family member or friend before sending money to anyone who contacts you unexpectedly.',
];

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

type Screen = 'intro' | 'scenario' | 'result' | 'final';

export default function ScamSimulator() {
  const [screen, setScreen] = useState<Screen>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(boolean | null)[]>(Array(scenarios.length).fill(null));

  const current = scenarios[currentIndex];

  /* ---- handlers ---- */

  function handleStart() {
    setScreen('scenario');
    setCurrentIndex(0);
    setAnswers(Array(scenarios.length).fill(null));
  }

  function handleAnswer(calledScam: boolean) {
    const updated = [...answers];
    updated[currentIndex] = calledScam === current.isScam;
    setAnswers(updated);
    setScreen('result');
  }

  function handleNext() {
    if (currentIndex + 1 < scenarios.length) {
      setCurrentIndex(currentIndex + 1);
      setScreen('scenario');
    } else {
      setScreen('final');
    }
  }

  const correctCount = answers.filter((a) => a === true).length;
  const scoreMsg = getScoreMessage(correctCount, scenarios.length);
  const wasCorrect = answers[currentIndex] === true;

  /* ---- renders ---- */

  return (
    <>
      <SEOHead
        title="Scam Simulator — Can You Spot the Scam? | TekSure"
        description="Practice spotting scams in a safe environment. See realistic emails, texts, and phone calls and learn to identify the red flags before they cost you money."
      />
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container max-w-3xl mx-auto px-4 py-10 sm:py-16">
          {/* =================== INTRO =================== */}
          {screen === 'intro' && (
            <div className="text-center space-y-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 mb-2">
                <ShieldAlert className="w-10 h-10 text-red-600" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Can You Spot the Scam?
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
                Scammers send millions of fake emails, texts, and phone calls every day. In this
                practice exercise you will see <strong>10 realistic scenarios</strong> — some are
                scams and some are legitimate. Your job is to figure out which is which.
              </p>
              <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
                There is no time limit and no penalty for wrong answers. This is a safe place to
                learn. After each answer we will explain what to look for so you can protect yourself
                in real life.
              </p>
              <Button
                size="lg"
                className="text-lg px-8 py-6 h-auto"
                onClick={handleStart}
              >
                Start Practice
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}

          {/* =================== SCENARIO =================== */}
          {screen === 'scenario' && (
            <div className="space-y-8">
              {/* progress */}
              <div className="flex items-center justify-between text-base text-gray-500">
                <span>
                  Scenario {currentIndex + 1} of {scenarios.length}
                </span>
                <TypeBadge type={current.type} />
              </div>

              {/* progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex) / scenarios.length) * 100}%` }}
                />
              </div>

              {/* scenario content */}
              {current.type === 'email' && <EmailCard scenario={current} />}
              {current.type === 'text' && <TextBubble scenario={current} />}
              {current.type === 'phone' && <PhoneTranscript scenario={current} />}

              {/* answer buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 text-lg py-6 h-auto border-2 border-red-300 text-red-700 hover:bg-red-50 hover:border-red-400"
                  onClick={() => handleAnswer(true)}
                >
                  <ShieldAlert className="mr-2 w-5 h-5" />
                  This Is a Scam
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 text-lg py-6 h-auto border-2 border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400"
                  onClick={() => handleAnswer(false)}
                >
                  <ShieldCheck className="mr-2 w-5 h-5" />
                  This Is Legitimate
                </Button>
              </div>
            </div>
          )}

          {/* =================== RESULT =================== */}
          {screen === 'result' && (
            <div className="space-y-8">
              {/* correct / wrong banner */}
              <Card
                className={`border-2 ${
                  wasCorrect ? 'border-green-300 bg-green-50' : 'border-amber-300 bg-amber-50'
                }`}
              >
                <CardContent className="flex items-start gap-4 pt-6 pb-6 px-5">
                  {wasCorrect ? (
                    <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {wasCorrect ? 'Correct!' : 'Not quite — but that is okay!'}
                    </h2>
                    <p className="text-lg text-gray-700 mt-1">
                      This message was{' '}
                      <strong>{current.isScam ? 'a scam' : 'legitimate'}</strong>.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* explanation */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Why?</h3>
                <p className="text-lg leading-relaxed text-gray-700">{current.explanation}</p>
              </div>

              {/* red flags (scams only) */}
              {current.redFlags.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">Red Flags to Watch For</h3>
                  <ul className="space-y-3">
                    {current.redFlags.map((flag, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                        <span className="text-lg text-gray-700">{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* next button */}
              <div className="pt-2">
                <Button size="lg" className="text-lg px-8 py-6 h-auto" onClick={handleNext}>
                  {currentIndex + 1 < scenarios.length ? (
                    <>
                      Next Scenario
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  ) : (
                    'See Your Results'
                  )}
                </Button>
              </div>
            </div>
          )}

          {/* =================== FINAL SCORE =================== */}
          {screen === 'final' && (
            <div className="space-y-10 text-center">
              {/* score circle */}
              <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-blue-50 border-4 border-blue-200">
                <span className="text-4xl font-bold text-blue-700">
                  {correctCount}/{scenarios.length}
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl font-bold text-gray-900">{scoreMsg.heading}</h1>
                <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
                  {scoreMsg.body}
                </p>
              </div>

              {/* safety tips */}
              <Card className="text-left border-2 border-blue-200 bg-blue-50">
                <CardContent className="pt-6 pb-6 px-5 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Tips to Protect Yourself
                  </h3>
                  <ul className="space-y-3">
                    {safetyTips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-lg text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* try again */}
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 h-auto border-2"
                onClick={handleStart}
              >
                <RotateCcw className="mr-2 w-5 h-5" />
                Try Again
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
