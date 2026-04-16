import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldAlert, CheckCircle, XCircle, ArrowRight, RotateCcw, AlertTriangle, Mail, Phone, MessageSquare } from 'lucide-react';

interface ScamScenario {
  id: string;
  type: 'email' | 'text' | 'call';
  title: string;
  sender: string;
  content: string;
  redFlags: string[];
  isScam: boolean;
  explanation: string;
}

const SCENARIOS: ScamScenario[] = [
  { id: '1', type: 'email', title: 'Urgent: Your Account Has Been Compromised!', sender: 'security-alert@amaz0n-support.com', content: 'Dear Customer, We detected unusual activity on your account. Click the link below immediately to verify your identity or your account will be permanently locked within 24 hours.', redFlags: ['Misspelled domain (amaz0n instead of amazon)', 'Creates false urgency', 'Generic greeting instead of your name'], isScam: true, explanation: 'This is a phishing email. Amazon will never ask you to verify your account through an email link. The sender address uses a zero instead of the letter "o" in amazon.' },
  { id: '2', type: 'text', title: 'USPS Delivery Notification', sender: '+1 (555) 012-3456', content: 'USPS: Your package could not be delivered. A redelivery fee of $3.00 is required. Pay now to reschedule delivery.', redFlags: ['USPS never charges redelivery fees', 'Sent from a regular phone number, not USPS shortcode'], isScam: true, explanation: 'USPS does not charge fees for redelivery and will never text you asking for payment. They leave a paper notice on your door.' },
  { id: '3', type: 'email', title: 'Your Order Confirmation', sender: 'order-confirmation@amazon.com', content: 'Hello Bailey, Thank you for your order #112-3456789. Your "Wireless Bluetooth Headphones" will arrive Thursday. Track at amazon.com/orders.', redFlags: [], isScam: false, explanation: 'This is legitimate. It uses your real name, a specific order number, and directs you to amazon.com (the real website).' },
  { id: '4', type: 'call', title: 'Microsoft Technical Support', sender: 'Unknown Number', content: '"Hello, this is Microsoft Technical Support. We have detected a virus on your computer. We need remote access right now to fix this urgent problem."', redFlags: ['Microsoft never calls about viruses', 'Asks for remote access', 'Creates panic'], isScam: true, explanation: 'Microsoft will never call you out of the blue about a virus. Hang up immediately.' },
  { id: '5', type: 'text', title: 'Bank Alert', sender: 'Chase Bank (56421)', content: 'Chase Fraud Alert: Did you authorize a $487.32 charge at BESTBUY.COM? Reply YES or NO.', redFlags: [], isScam: false, explanation: 'This is a legitimate fraud alert. It comes from a bank shortcode, references a specific amount, and does not ask you to click links.' },
  { id: '6', type: 'email', title: 'You Won a $1,000 Gift Card!', sender: 'rewards@walmart-winners.net', content: 'Congratulations! You have been randomly selected to receive a $1,000 Walmart Gift Card. Claim now — offer expires in 1 hour!', redFlags: ['Not from walmart.com', 'You never entered a contest', 'Artificial time pressure'], isScam: true, explanation: 'You cannot win a contest you never entered. Walmart does not give away gift cards by email.' },
];

export default function ScamSimulator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showResults, setShowResults] = useState(false);
  const scenario = SCENARIOS[currentIndex];
  const TypeIcon = scenario.type === 'email' ? Mail : scenario.type === 'text' ? MessageSquare : Phone;
  const handleAnswer = (isScam: boolean) => { setAnswer(isScam); setScore(s => ({ correct: s.correct + (isScam === scenario.isScam ? 1 : 0), total: s.total + 1 })); };
  const handleNext = () => { if (currentIndex < SCENARIOS.length - 1) { setCurrentIndex(i => i + 1); setAnswer(null); } else setShowResults(true); };
  const restart = () => { setCurrentIndex(0); setAnswer(null); setScore({ correct: 0, total: 0 }); setShowResults(false); };
  const pct = Math.round((score.correct / SCENARIOS.length) * 100);
  return (
    <>
      <SEOHead title="Scam Simulator" description="Practice spotting scam emails, texts, and calls in a safe environment." path="/tools/scam-simulator" />
      <Navbar />
      <main className="min-h-screen bg-background"><div className="container max-w-3xl py-12 px-4">
        <div className="text-center mb-10"><ShieldAlert className="h-12 w-12 text-primary mx-auto mb-4" /><h1 className="text-3xl font-bold mb-2">Scam Simulator</h1><p className="text-muted-foreground max-w-lg mx-auto">Practice spotting scam emails, texts, and phone calls. Can you tell the difference?</p></div>
        {showResults ? (
          <Card><CardContent className="p-8 text-center"><div className={`text-6xl font-bold mb-4 ${pct >= 80 ? 'text-green-500' : pct >= 50 ? 'text-amber-500' : 'text-red-500'}`}>{pct}%</div><h2 className="text-xl font-bold mb-2">You got {score.correct} out of {SCENARIOS.length} correct</h2><p className="text-muted-foreground mb-6">{pct >= 80 ? 'Great job! You have a strong eye for scams.' : pct >= 50 ? 'Not bad, but review the red flags below.' : 'Scammers are tricky. Review the explanations to sharpen your skills.'}</p><Button onClick={restart} className="gap-2"><RotateCcw className="h-4 w-4" /> Try Again</Button></CardContent></Card>
        ) : (
          <Card><CardContent className="p-6">
            <div className="flex items-center justify-between mb-4"><Badge variant="outline" className="gap-1.5"><TypeIcon className="h-3.5 w-3.5" /> {scenario.type === 'email' ? 'Email' : scenario.type === 'text' ? 'Text Message' : 'Phone Call'}</Badge><span className="text-sm text-muted-foreground">{currentIndex + 1} of {SCENARIOS.length}</span></div>
            <div className="rounded-xl border bg-muted/30 p-5 mb-6"><p className="text-xs text-muted-foreground mb-1">From: {scenario.sender}</p><h3 className="font-semibold mb-3">{scenario.title}</h3><p className="text-sm leading-relaxed">{scenario.content}</p></div>
            {answer === null ? (
              <div className="flex gap-3"><Button onClick={() => handleAnswer(true)} variant="destructive" className="flex-1 gap-2"><AlertTriangle className="h-4 w-4" /> SCAM</Button><Button onClick={() => handleAnswer(false)} className="flex-1 gap-2"><CheckCircle className="h-4 w-4" /> LEGITIMATE</Button></div>
            ) : (
              <div className="space-y-4">
                <div className={`rounded-lg p-4 ${answer === scenario.isScam ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`}><div className="flex items-center gap-2 mb-2">{answer === scenario.isScam ? <CheckCircle className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />}<span className="font-semibold">{answer === scenario.isScam ? 'Correct!' : 'Not quite.'}</span></div><p className="text-sm leading-relaxed">{scenario.explanation}</p></div>
                {scenario.redFlags.length > 0 && <div><p className="text-sm font-medium mb-2">Red flags:</p><ul className="space-y-1">{scenario.redFlags.map((f, i) => <li key={i} className="flex items-start gap-2 text-sm"><AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />{f}</li>)}</ul></div>}
                <Button onClick={handleNext} className="w-full gap-2">{currentIndex < SCENARIOS.length - 1 ? <>Next<ArrowRight className="h-4 w-4" /></> : 'See Results'}</Button>
              </div>
            )}
          </CardContent></Card>
        )}
      </div></main>
      <Footer />
    </>
  );
}
