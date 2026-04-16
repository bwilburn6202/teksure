import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle, XCircle, ArrowRight, RotateCcw, Eye, Lock, Smartphone, Globe, Mail } from 'lucide-react';

const CHECKS = [
  { id: 'loc', category: 'Location', icon: Globe, question: 'Do you know which apps have access to your location?', yesAction: 'Great! Review your location permissions quarterly.', noAction: 'Go to Settings → Privacy → Location Services (iPhone) or Settings → Location (Android) to see which apps track your location. Turn off any you don\'t need.' },
  { id: 'cam', category: 'Camera & Mic', icon: Eye, question: 'Have you checked which apps can access your camera and microphone?', yesAction: 'Keep reviewing these regularly.', noAction: 'Check Settings → Privacy → Camera/Microphone. Remove access from apps that don\'t need it.' },
  { id: 'pw', category: 'Passwords', icon: Lock, question: 'Do you use a unique password for every important account?', yesAction: 'Excellent! Consider a password manager if you don\'t use one yet.', noAction: 'Reusing passwords is the #1 security risk. Start with a free password manager like Bitwarden to generate and store unique passwords.' },
  { id: '2fa', category: 'Two-Factor', icon: Smartphone, question: 'Is two-factor authentication enabled on your email account?', yesAction: 'Perfect. Also enable it on banking and social media.', noAction: 'Your email is the master key to all your accounts. Enable 2FA now: Gmail (myaccount.google.com/security), Outlook (account.microsoft.com/security).' },
  { id: 'social', category: 'Social Media', icon: Globe, question: 'Have you reviewed your social media privacy settings in the last 6 months?', yesAction: 'Good habit! Settings change frequently, so check again soon.', noAction: 'Facebook: Settings → Privacy. Instagram: Settings → Privacy. Make your accounts private and limit who can see your posts.' },
  { id: 'email', category: 'Email', icon: Mail, question: 'Do you avoid clicking links in emails from unknown senders?', yesAction: 'Smart! Always type URLs directly into your browser.', noAction: 'Phishing emails are the #1 way hackers steal information. When in doubt, go directly to the website by typing the address yourself.' },
  { id: 'wifi', category: 'Network', icon: Globe, question: 'Do you avoid using public Wi-Fi for banking or shopping?', yesAction: 'Good practice! Use cellular data for sensitive tasks.', noAction: 'Public Wi-Fi is not secure. Use your phone\'s cellular data or a VPN when accessing banking or shopping sites away from home.' },
  { id: 'update', category: 'Updates', icon: Smartphone, question: 'Are your phone and computer set to update automatically?', yesAction: 'Perfect! Automatic updates patch security vulnerabilities.', noAction: 'Enable automatic updates: iPhone (Settings → General → Software Update → Automatic Updates), Android (Settings → System → System Update), Windows (Settings → Update & Security).' },
];

export default function PrivacyAudit() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [currentIdx, setCurrentIdx] = useState(0);
  const [done, setDone] = useState(false);
  const check = CHECKS[currentIdx];
  const handleAnswer = (yes: boolean) => { setAnswers(a => ({ ...a, [check.id]: yes })); if (currentIdx < CHECKS.length - 1) setCurrentIdx(i => i + 1); else setDone(true); };
  const restart = () => { setAnswers({}); setCurrentIdx(0); setDone(false); };
  const yesCount = Object.values(answers).filter(Boolean).length;
  const grade = yesCount >= 7 ? 'A' : yesCount >= 5 ? 'B' : yesCount >= 3 ? 'C' : 'D';
  return (
    <>
      <SEOHead title="Privacy Audit" description="Check your digital privacy in 2 minutes. Find out which settings to change to protect your personal information." path="/tools/privacy-audit" />
      <Navbar />
      <main className="min-h-screen bg-background"><div className="container max-w-2xl py-12 px-4">
        <div className="text-center mb-10"><Shield className="h-12 w-12 text-primary mx-auto mb-4" /><h1 className="text-3xl font-bold mb-2">Privacy Audit</h1><p className="text-muted-foreground">Check your digital privacy in 2 minutes</p></div>
        {done ? (
          <Card><CardContent className="p-8">
            <div className="text-center mb-6"><div className={`text-6xl font-bold mb-2 ${yesCount >= 6 ? 'text-green-500' : yesCount >= 4 ? 'text-amber-500' : 'text-red-500'}`}>{grade}</div><p className="text-lg font-medium">{yesCount} of {CHECKS.length} privacy practices in place</p></div>
            <div className="space-y-3">{CHECKS.map(c => { const yes = answers[c.id]; return (
              <div key={c.id} className={`rounded-lg p-4 border ${yes ? 'bg-green-500/5 border-green-500/20' : 'bg-amber-500/5 border-amber-500/20'}`}>
                <div className="flex items-center gap-2 mb-1">{yes ? <CheckCircle className="h-4 w-4 text-green-500" /> : <XCircle className="h-4 w-4 text-amber-500" />}<span className="font-medium text-sm">{c.category}</span></div>
                <p className="text-sm text-muted-foreground">{yes ? c.yesAction : c.noAction}</p>
              </div>
            ); })}</div>
            <Button onClick={restart} className="w-full mt-6 gap-2"><RotateCcw className="h-4 w-4" /> Start Over</Button>
          </CardContent></Card>
        ) : (
          <Card><CardContent className="p-6">
            <div className="flex items-center justify-between mb-6"><Badge variant="outline" className="gap-1"><check.icon className="h-3.5 w-3.5" /> {check.category}</Badge><span className="text-sm text-muted-foreground">{currentIdx + 1} of {CHECKS.length}</span></div>
            <h2 className="text-lg font-semibold mb-6">{check.question}</h2>
            <div className="flex gap-3"><Button onClick={() => handleAnswer(true)} className="flex-1 gap-2"><CheckCircle className="h-4 w-4" /> Yes</Button><Button onClick={() => handleAnswer(false)} variant="outline" className="flex-1 gap-2"><XCircle className="h-4 w-4" /> No</Button></div>
          </CardContent></Card>
        )}
      </div></main>
      <Footer />
    </>
  );
}
