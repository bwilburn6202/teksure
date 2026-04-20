import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ShieldAlert, CheckCircle, XCircle, ArrowRight, RotateCcw, AlertTriangle, Mail, Phone, MessageSquare, Trophy, Users } from 'lucide-react';

type Category = 'All' | 'Email' | 'Phone Call' | 'Text Message' | 'Social Media';
type Difficulty = 'Easy' | 'Medium' | 'Hard';

interface ScamScenario {
  id: string;
  type: 'email' | 'text' | 'call' | 'social';
  difficulty: Difficulty;
  title: string;
  sender: string;
  content: string;
  redFlags: string[];
  isScam: boolean;
  explanation: string;
}

const SCENARIOS: ScamScenario[] = [
  { id: '1', type: 'email', difficulty: 'Easy', title: 'Urgent: Your Account Has Been Compromised!', sender: 'security-alert@amaz0n-support.com', content: 'Dear Customer, We detected unusual activity on your account. Click the link below immediately to verify your identity or your account will be permanently locked within 24 hours.\n\n[Verify My Account Now]\n\nAmazon Security Team', redFlags: ['Misspelled domain (amaz0n instead of amazon)', 'Creates false urgency with "24 hours"', 'Generic "Dear Customer" instead of your name', 'Asks you to click a link to verify'], isScam: true, explanation: 'This is a phishing email. Amazon will never ask you to verify your account through an email link. The sender address uses a zero instead of the letter "o" in amazon. If you are worried, go directly to amazon.com by typing it in your browser.' },
  { id: '2', type: 'text', difficulty: 'Easy', title: 'USPS Delivery Notification', sender: '+1 (555) 012-3456', content: 'USPS: Your package could not be delivered on 04/12. Reason: Incomplete address information. Please update your delivery details here: usps-redelivery-update.com/track\n\nReply STOP to opt out', redFlags: ['USPS never charges redelivery fees or texts links', 'Link goes to "usps-redelivery-update.com" not the real usps.com', 'Sent from a regular phone number, not a USPS shortcode', 'Real USPS delivery issues leave a notice at your door'], isScam: true, explanation: 'USPS does not text you links to update your address. They leave a physical notice on your door. If you are expecting a package, go directly to usps.com and enter your tracking number.' },
  { id: '3', type: 'call', difficulty: 'Easy', title: 'Microsoft calling about a virus on your computer', sender: 'Unknown Number', content: '"Hello, this is John from Microsoft Windows Technical Support. Our servers have detected a dangerous virus on your computer that is stealing your personal information right now. I need you to go to your computer and let me connect remotely so I can remove it for you before it is too late. This is a free service from Microsoft."', redFlags: ['Microsoft does not call people about viruses — ever', 'Claims their "servers detected" a virus on your specific computer', 'Asks for remote access to your computer', 'Creates urgency with "before it is too late"'], isScam: true, explanation: 'Microsoft, Apple, and Google will never call you out of the blue about a virus. If someone calls claiming to be tech support and asks for remote access, hang up immediately.' },
  { id: '4', type: 'text', difficulty: 'Easy', title: 'You won a $1,000 gift card!', sender: 'Unknown Number', content: 'CONGRATULATIONS! You have been selected as our weekly winner! Claim your $1,000 Walmart gift card now! Click here: bit.ly/claim-prize-now\n\nReply STOP to opt out', redFlags: ['You did not enter any contest', 'Uses a shortened link (bit.ly) to hide the real website', 'Comes from an unknown number, not from Walmart', 'Real prizes do not arrive via random text messages'], isScam: true, explanation: 'If you did not enter a contest, you did not win one. Legitimate companies do not give away prizes through random text messages. Never click links in unexpected texts.' },
  { id: '5', type: 'call', difficulty: 'Medium', title: 'IRS calling about unpaid taxes', sender: 'Caller ID: "IRS"', content: '"This is Officer Williams, badge number 4721, calling from the Internal Revenue Service. We have issued an arrest warrant in your name for unpaid federal taxes. You must make an immediate payment of $3,200 using gift cards or wire transfer to avoid arrest today. Local police have been notified. Press 1 to speak with our settlement department."', redFlags: ['The IRS never calls to demand immediate payment', 'The IRS never threatens arrest over the phone', 'The IRS never asks for payment by gift cards or wire transfer', 'The IRS always sends written notices first by US mail', 'Real IRS agents do not provide "badge numbers" over the phone'], isScam: true, explanation: 'The IRS always contacts you first by mail — never by phone, email, or text. They will never threaten you with immediate arrest, demand gift card payments, or ask for wire transfers. If you have tax concerns, call the IRS directly at 1-800-829-1040.' },
  { id: '6', type: 'social', difficulty: 'Hard', title: 'New online friend needs help with an emergency', sender: 'Facebook Messenger', content: 'You have been chatting online for 3 weeks with someone who seems very kind and caring. They send you this message:\n\n"I feel so close to you, and I am embarrassed to ask, but I am in a terrible situation. I am a contractor working overseas and my wallet was stolen. I cannot access my bank account from here. Could you send me $500 through Zelle? I promise I will pay you back as soon as I get home next week. You are the only person I trust."', redFlags: ['Asking for money after only a few weeks of online conversation', 'Claims to be stuck overseas with no access to their own money', 'Asks for payment through a method that cannot be reversed (Zelle)', 'Uses emotional manipulation ("you are the only person I trust")', 'Has a convenient excuse for why they cannot handle it themselves'], isScam: true, explanation: 'Romance scams cost Americans over a billion dollars a year. Scammers build emotional connections over weeks or months, then create a "crisis" requiring money. Never send money to someone you have only met online.' },
  { id: '7', type: 'call', difficulty: 'Medium', title: 'Medicare calling about your new card', sender: 'Caller ID: "Medicare"', content: '"Hello, this is Sarah calling from Medicare. We are issuing new Medicare cards and need to verify your information to send you your replacement card. Can you please confirm your Medicare number and Social Security number so we can make sure we have the right address on file? There is no charge for the new card."', redFlags: ['Medicare will never call you to ask for your Medicare number', 'Government agencies do not call to ask for Social Security numbers', 'Real Medicare card replacements are handled through ssa.gov or 1-800-MEDICARE', 'Unsolicited calls asking for personal information are a major red flag'], isScam: true, explanation: 'Medicare will never call you unsolicited to ask for personal information. If you need a replacement Medicare card, visit medicare.gov or call 1-800-MEDICARE (1-800-633-4227) directly.' },
  { id: '8', type: 'call', difficulty: 'Hard', title: 'Your grandchild is in trouble and needs bail money', sender: 'Unknown Number', content: '"Grandma? Grandma, it is me! *crying* I was in a car accident and they arrested me. I need you to send $5,000 for bail right away. Please do not tell Mom and Dad — I am so embarrassed. My lawyer says you can send it by wire transfer or buy gift cards and read the numbers to him. His number is 555-0142. Please hurry, I am so scared."', redFlags: ['Caller does not say their name — waits for you to guess', 'Creates extreme urgency and emotional distress', 'Asks you to keep it a secret from other family members', 'Asks for gift cards or wire transfer — not how real bail works', 'Real bail is paid through the court system, not over the phone'], isScam: true, explanation: 'This is called the "grandparent scam." The caller deliberately does not say a name, hoping you will say something like "Tommy, is that you?" Always hang up and call your grandchild or their parents directly at the number you already have.' },
  { id: '9', type: 'text', difficulty: 'Medium', title: 'Your debit card has been locked', sender: '"BankOfAmerica" (unknown number)', content: 'Bank of America Alert: Your debit card ending in 4892 has been temporarily locked due to suspicious transactions. If this was not you, please call us immediately at 1-888-555-0199 to unlock your card. Ref: #BOA-2026-4471', redFlags: ['The phone number (1-888-555-0199) is not Bank of America\'s real number', 'Real bank alerts tell you to call the number on the back of your card', 'Scammers often include random last 4 digits hoping they match yours', 'The reference number is designed to look official but is meaningless'], isScam: true, explanation: 'If you get a text about suspicious activity on your bank card, never call the number in the text. Instead, flip your card over and call the number printed on the back, or log in to your bank\'s official app.' },
  { id: '10', type: 'call', difficulty: 'Medium', title: 'Social Security number has been suspended', sender: 'Robocall', content: '"This is an urgent message from the Social Security Administration. Your Social Security number has been suspended due to suspicious activity and involvement in criminal fraud. If you do not respond immediately, a warrant will be issued for your arrest. Press 1 now to speak with a federal agent and resolve this matter."', redFlags: ['Social Security numbers cannot be "suspended" — that is not a real thing', 'The SSA does not call with threats of arrest', 'Government agencies do not use robocalls for legal matters', 'Pressing 1 connects you to a scammer, not a federal agent'], isScam: true, explanation: 'Your Social Security number cannot be suspended, frozen, or cancelled. The Social Security Administration will never threaten you with arrest over the phone. If you have questions, call the SSA directly at 1-800-772-1213.' },
  { id: '11', type: 'text', difficulty: 'Hard', title: 'Real fraud alert from your bank', sender: 'Chase Bank (73981)', content: 'Chase Fraud: Did you attempt a purchase of $247.63 at BESTBUY.COM on 04/14? Reply YES if this was you, or NO if it was not. To stop alerts, reply STOP. Msg&data rates apply.', redFlags: [], isScam: false, explanation: 'This is what a real bank fraud alert looks like. It comes from a short code number (not a regular phone number), only asks you to reply YES or NO, does not include any links, and does not ask for personal information.' },
  { id: '12', type: 'text', difficulty: 'Hard', title: 'Appointment reminder from your doctor', sender: 'Valley Medical (24680)', content: 'Reminder: You have an appointment with Dr. Martinez at Valley Medical Group on 04/18 at 2:30 PM. Reply C to confirm, R to reschedule, or X to cancel. Reply STOP to opt out of reminders.', redFlags: [], isScam: false, explanation: 'This is a legitimate appointment reminder. It comes from a short code, references a specific doctor and practice, and only asks for a simple reply. It does not include links or ask for personal information.' },
];

const categoryMap: Record<string, Category> = { email: 'Email', call: 'Phone Call', text: 'Text Message', social: 'Social Media' };
const categories: Category[] = ['All', 'Email', 'Phone Call', 'Text Message', 'Social Media'];
const TypeIcons = { email: Mail, text: MessageSquare, call: Phone, social: Users };
const diffColors: Record<Difficulty, string> = { Easy: 'bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400', Medium: 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400', Hard: 'bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400' };

export default function ScamSimulator() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [answers, setAnswers] = useState<Record<string, 'correct' | 'incorrect'>>({});
  const [showResults, setShowResults] = useState(false);

  const filtered = SCENARIOS.filter(s => activeCategory === 'All' || categoryMap[s.type] === activeCategory);
  const scenario = filtered[currentIndex];
  const TypeIcon = scenario ? TypeIcons[scenario.type] : Mail;
  const correctCount = Object.values(answers).filter(v => v === 'correct').length;
  const totalAnswered = Object.keys(answers).length;
  const pct = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  const handleAnswer = (isScam: boolean) => {
    if (!scenario) return;
    const isCorrect = isScam === scenario.isScam;
    setAnswer(isScam);
    setAnswers(prev => ({ ...prev, [scenario.id]: isCorrect ? 'correct' : 'incorrect' }));
  };

  const handleNext = () => {
    if (currentIndex < filtered.length - 1) {
      setCurrentIndex(i => i + 1);
      setAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setAnswer(null);
    setAnswers({});
    setShowResults(false);
  };

  const changeCategory = (cat: Category) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
    setAnswer(null);
    setShowResults(false);
  };

  const scoreLabel = pct >= 90 ? 'Scam Detection Expert' : pct >= 70 ? 'Scam Aware' : pct >= 50 ? 'Getting There' : 'Needs Practice';
  const scoreTip = pct >= 90 ? 'You have excellent instincts for spotting scams. Keep sharing your knowledge with friends and family.' : pct >= 70 ? 'You catch most scams but a few tricky ones might slip through. Review the explanations for the ones you missed.' : pct >= 50 ? 'You are building good awareness. Pay close attention to the red flags before answering.' : 'No worries — that is exactly what this tool is for. Try again and pay close attention to the red flags.';

  return (
    <>
      <SEOHead title="Scam Simulator — Practice Spotting Scams Safely | TekSure" description="Test your ability to spot phishing emails, fake tech support calls, prize scams, and more. Practice identifying scams in a safe environment and learn what to look for." path="/tools/scam-simulator" />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Scam Simulator' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center flex-shrink-0">
                <ShieldAlert className="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Scam Simulator</h1>
            <p className="text-muted-foreground text-lg">Practice spotting real-world scams in a completely safe environment. Read each scenario and decide — is it real, or is it a scam? Learn the red flags that give scammers away.</p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter by scam type">
            {categories.map(cat => (
              <button key={cat} onClick={() => changeCategory(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] border ${activeCategory === cat ? 'bg-foreground text-background border-foreground' : 'bg-background text-foreground/70 border-border hover:border-foreground/30'}`} aria-pressed={activeCategory === cat}>{cat}</button>
            ))}
          </div>

          {/* Progress bar */}
          {totalAnswered > 0 && !showResults && (
            <div className="mb-6 p-4 rounded-2xl border border-border bg-card">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Progress: {currentIndex + 1} of {filtered.length}</span>
                <span className="font-medium">{correctCount} correct out of {totalAnswered}</span>
              </div>
              <Progress value={((currentIndex + 1) / filtered.length) * 100} className="h-2" aria-label="Quiz progress" />
            </div>
          )}

          {showResults ? (
            <Card>
              <CardContent className="p-8 text-center">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-10 w-10 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Your Scam IQ Score</h2>
                <p className="text-5xl font-bold text-primary mb-2">{pct}%</p>
                <p className="text-lg font-medium mb-2">{scoreLabel}</p>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">{scoreTip}</p>
                <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-8">
                  <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 text-center">
                    <p className="text-2xl font-bold text-green-700 dark:text-green-400">{correctCount}</p>
                    <p className="text-xs text-green-600 dark:text-green-500">Correct</p>
                  </div>
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 text-center">
                    <p className="text-2xl font-bold text-red-700 dark:text-red-400">{totalAnswered - correctCount}</p>
                    <p className="text-xs text-red-600 dark:text-red-500">Missed</p>
                  </div>
                </div>
                <Button onClick={restart} className="gap-2"><RotateCcw className="h-4 w-4" /> Try Again</Button>
                <div className="mt-10 p-6 rounded-2xl border border-border bg-muted/50 text-left">
                  <h3 className="font-semibold mb-3">Top Tips to Stay Safe</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />Never click links in unexpected emails or texts. Go directly to the website yourself.</li>
                    <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />If someone calls demanding immediate payment, hang up. It is always a scam.</li>
                    <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />No government agency will ever ask for gift cards or wire transfers.</li>
                    <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />When in doubt, call the company directly using a number you find yourself.</li>
                    <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />Never send money to someone you have only met online.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          ) : scenario ? (
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="gap-1.5"><TypeIcon className="h-3.5 w-3.5" /> {categoryMap[scenario.type]}</Badge>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${diffColors[scenario.difficulty]}`}>{scenario.difficulty}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{currentIndex + 1} of {filtered.length}</span>
                </div>
                <div className="rounded-xl border bg-muted/30 p-5 mb-6">
                  <p className="text-xs text-muted-foreground mb-1">From: {scenario.sender}</p>
                  <h3 className="font-semibold mb-3">{scenario.title}</h3>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{scenario.content}</p>
                </div>
                {answer === null ? (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button onClick={() => handleAnswer(false)} variant="outline" className="flex-1 py-6 gap-2 border-2 border-green-300 dark:border-green-700 text-green-800 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-950/20"><CheckCircle className="h-5 w-5" /> This Looks Real</Button>
                    <Button onClick={() => handleAnswer(true)} variant="outline" className="flex-1 py-6 gap-2 border-2 border-red-300 dark:border-red-700 text-red-800 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-950/20"><AlertTriangle className="h-5 w-5" /> This Is a Scam</Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className={`rounded-lg p-4 ${answer === scenario.isScam ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {answer === scenario.isScam ? <CheckCircle className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />}
                        <span className="font-semibold">{answer === scenario.isScam ? 'Correct!' : 'Not quite.'}</span>
                      </div>
                      <p className="text-sm leading-relaxed">{scenario.isScam ? 'This was a SCAM.' : 'This was REAL and LEGITIMATE.'}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Explanation</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{scenario.explanation}</p>
                    </div>
                    {scenario.redFlags.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium mb-2">Red Flags to Look For</h4>
                        <ul className="space-y-1.5">{scenario.redFlags.map((f, i) => <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" aria-hidden="true" />{f}</li>)}</ul>
                      </div>
                    )}
                    <Button onClick={handleNext} className="w-full gap-2">{currentIndex < filtered.length - 1 ? <>Next Scenario <ArrowRight className="h-4 w-4" /></> : 'See My Score'}</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="text-center py-20">
              <p className="font-semibold text-lg mb-2">No scenarios in this category</p>
              <p className="text-muted-foreground text-sm">Try selecting "All" to see every scenario.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
