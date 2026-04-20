import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, CheckCircle, XCircle, ArrowRight, Shield, Lock, AlertTriangle, ExternalLink } from 'lucide-react';

interface CheckItem { id: string; question: string; yesIsGood: boolean; goodAdvice: string; badAdvice: string; link?: { url: string; label: string }; }

const CHECKS: CheckItem[] = [
  { id: 'unique', question: 'Does your email account have a unique password (not shared with any other account)?', yesIsGood: true, goodAdvice: 'Great! A unique email password is your most important defense.', badAdvice: 'Your email is the master key to all your accounts. Change your email password NOW and make it unique — at least 12 characters.' },
  { id: '2fa', question: 'Is two-factor authentication (2FA) turned on for your email?', yesIsGood: true, goodAdvice: 'Excellent! 2FA blocks 99.9% of account hijacking attempts.', badAdvice: 'Enable 2FA immediately. For Gmail: myaccount.google.com/security. For Outlook: account.microsoft.com/security.', link: { url: 'https://myaccount.google.com/security', label: 'Gmail Security Settings' } },
  { id: 'recovery', question: 'Do you have a recovery phone number and backup email set up?', yesIsGood: true, goodAdvice: 'Good. If you ever get locked out, recovery options let you regain access.', badAdvice: 'Without recovery options, you could permanently lose your account. Add a recovery phone and backup email in your account security settings.' },
  { id: 'suspicious', question: 'Do you check for and report suspicious login attempts?', yesIsGood: true, goodAdvice: 'Good habit. Keep reviewing security alerts from your email provider.', badAdvice: 'Check your recent login activity. Gmail: myaccount.google.com/notifications. Outlook: account.microsoft.com/security. Look for logins from unfamiliar locations.' },
  { id: 'phishing', question: 'Do you avoid clicking links in emails from unknown senders?', yesIsGood: true, goodAdvice: 'Smart! Always type URLs directly into your browser instead of clicking email links.', badAdvice: 'Phishing emails are the #1 way accounts get compromised. Never click links in unexpected emails — go directly to the website by typing the URL.' },
  { id: 'forwarding', question: 'Have you checked that no unauthorized forwarding rules exist in your email?', yesIsGood: true, goodAdvice: 'Good. Hackers sometimes set up forwarding to copy all your emails to themselves.', badAdvice: 'Check now! Gmail: Settings → Forwarding. Outlook: Settings → Mail → Forwarding. If you see an unfamiliar address, remove it immediately.' },
  { id: 'apps', question: 'Have you reviewed which third-party apps have access to your email account?', yesIsGood: true, goodAdvice: 'Good practice. Remove any apps you no longer use or don\'t recognize.', badAdvice: 'Third-party apps can read your email. Review access: Gmail → myaccount.google.com/permissions. Remove anything you don\'t recognize.', link: { url: 'https://myaccount.google.com/permissions', label: 'Google Account Permissions' } },
  { id: 'password-manager', question: 'Do you use a password manager to store your email password?', yesIsGood: true, goodAdvice: 'Perfect! Password managers generate and store strong unique passwords.', badAdvice: 'Consider a free password manager like Bitwarden (bitwarden.com). It generates strong passwords and remembers them for you.', link: { url: 'https://bitwarden.com/', label: 'Get Bitwarden (Free)' } },
];

export default function EmailSecurityCheck() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [currentIdx, setCurrentIdx] = useState(0);
  const [done, setDone] = useState(false);
  const check = CHECKS[currentIdx];
  const handleAnswer = (yes: boolean) => { setAnswers(a => ({ ...a, [check.id]: yes })); if (currentIdx < CHECKS.length - 1) setCurrentIdx(i => i + 1); else setDone(true); };
  const restart = () => { setAnswers({}); setCurrentIdx(0); setDone(false); };
  const goodCount = Object.entries(answers).filter(([id, val]) => { const c = CHECKS.find(ch => ch.id === id); return c ? (c.yesIsGood ? val : !val) : false; }).length;
  const grade = goodCount >= 7 ? 'A' : goodCount >= 5 ? 'B' : goodCount >= 3 ? 'C' : 'D';

  return (
    <>
      <SEOHead title="Email Security Check" description="Check if your email account is properly secured. Answer 8 questions and get personalized recommendations." path="/tools/email-security-check" />
      <Navbar />
      <main className="min-h-screen bg-background"><div className="container max-w-2xl py-12 px-4">
        <div className="text-center mb-10"><Mail className="h-12 w-12 text-primary mx-auto mb-4" /><h1 className="text-3xl font-bold mb-2">Email Security Check</h1><p className="text-muted-foreground">Answer 8 questions to find out if your email is properly protected</p></div>
        {done ? (
          <Card><CardContent className="p-8">
            <div className="text-center mb-6"><div className={`text-6xl font-bold mb-2 ${goodCount >= 6 ? 'text-green-500' : goodCount >= 4 ? 'text-amber-500' : 'text-red-500'}`}>{grade}</div><p className="text-lg font-medium">{goodCount} of {CHECKS.length} security measures in place</p></div>
            <div className="space-y-3">{CHECKS.map(c => { const yes = answers[c.id]; const isGood = c.yesIsGood ? yes : !yes; return (
              <div key={c.id} className={`rounded-lg p-4 border ${isGood ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/5 border-red-500/20'}`}>
                <div className="flex items-center gap-2 mb-1">{isGood ? <CheckCircle className="h-4 w-4 text-green-500" /> : <AlertTriangle className="h-4 w-4 text-red-500" />}<span className="font-medium text-sm">{c.question.split('?')[0].split('(')[0].trim()}</span></div>
                <p className="text-sm text-muted-foreground">{isGood ? c.goodAdvice : c.badAdvice}</p>
                {!isGood && c.link && <a href={c.link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-2 hover:underline">{c.link.label} <ExternalLink className="h-3 w-3" /></a>}
              </div>
            ); })}</div>
            <Button onClick={restart} className="w-full mt-6 gap-2"><Shield className="h-4 w-4" /> Check Again</Button>
          </CardContent></Card>
        ) : (
          <Card><CardContent className="p-6">
            <div className="flex items-center justify-between mb-6"><Badge variant="outline" className="gap-1"><Lock className="h-3.5 w-3.5" /> Question {currentIdx + 1}</Badge><span className="text-sm text-muted-foreground">{currentIdx + 1} of {CHECKS.length}</span></div>
            <h2 className="text-lg font-semibold mb-6">{check.question}</h2>
            <div className="flex gap-3"><Button onClick={() => handleAnswer(true)} className="flex-1 gap-2"><CheckCircle className="h-4 w-4" /> Yes</Button><Button onClick={() => handleAnswer(false)} variant="outline" className="flex-1 gap-2"><XCircle className="h-4 w-4" /> No</Button></div>
          </CardContent></Card>
        )}
      </div></main>
      <Footer />
    </>
  );
}
