import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import {
  ShieldAlert, AlertTriangle, CheckCircle2, RotateCcw,
  Phone, Mail, MessageSquare, ChevronRight,
} from 'lucide-react';

interface Flag {
  label: string;
  weight: number;
  why: string;
}

interface DecodeResult {
  risk: 'safe' | 'suspicious' | 'dangerous';
  score: number;
  flags: Flag[];
  plainExplanation: string;
  nextSteps: string[];
}

const URGENCY_WORDS = [
  'urgent', 'immediately', 'right now', 'final notice', 'last chance',
  'act now', 'verify now', 'within 24 hours', 'within 48 hours',
  'suspended', 'locked', 'will be closed', 'expire', 'deactivate',
];
const PAYMENT_WORDS = [
  'gift card', 'apple card', 'google play card', 'amazon card',
  'wire transfer', 'western union', 'moneygram', 'bitcoin', 'crypto',
  'cash app', 'zelle', 'venmo to verify', 'pay a fee', 'processing fee',
  'tax payment', 'release fee',
];
const IMPERSONATION = [
  'irs', 'social security', 'medicare', 'amazon security', 'microsoft support',
  'apple support', 'paypal security', 'bank of america', 'chase fraud',
  'fbi', 'police', 'sheriff', 'us postal', 'usps', 'fedex delivery',
  'ups delivery', 'netflix billing',
];
const PRIZE_WORDS = [
  'you won', 'congratulations you', 'prize', 'sweepstakes', 'lottery',
  'inheritance', 'beneficiary', 'unclaimed funds', 'refund pending',
  'tax refund', 'stimulus',
];
const SECRECY_WORDS = [
  "don't tell", 'do not tell', 'keep this confidential', 'between us',
  'do not contact', 'do not hang up',
];

function decode(text: string): DecodeResult {
  const lower = text.toLowerCase();
  const flags: Flag[] = [];

  const hasUrgency = URGENCY_WORDS.some(w => lower.includes(w));
  if (hasUrgency) flags.push({
    label: 'Pressure to act fast',
    weight: 25,
    why: 'Real companies almost never demand action in minutes. Scammers use a ticking clock so you act before you can think.',
  });

  const hasPayment = PAYMENT_WORDS.some(w => lower.includes(w));
  if (hasPayment) flags.push({
    label: 'Asks for unusual payment',
    weight: 35,
    why: 'No real agency or company asks for gift cards, wire transfers, or crypto. This is the single strongest scam signal.',
  });

  const hasImpersonation = IMPERSONATION.some(w => lower.includes(w));
  if (hasImpersonation) flags.push({
    label: 'Claims to be from a trusted name',
    weight: 15,
    why: 'Scammers borrow names you trust (IRS, Apple, your bank). The name in the message proves nothing on its own.',
  });

  const hasPrize = PRIZE_WORDS.some(w => lower.includes(w));
  if (hasPrize) flags.push({
    label: 'Promises a prize, refund, or windfall',
    weight: 20,
    why: 'You did not enter a contest you do not remember. Surprise refunds and inheritances are nearly always fake.',
  });

  const hasSecrecy = SECRECY_WORDS.some(w => lower.includes(w));
  if (hasSecrecy) flags.push({
    label: 'Asks you to keep it secret',
    weight: 25,
    why: 'Telling you not to talk to family or police is how scammers isolate their target. Real businesses welcome a second opinion.',
  });

  const linkMatches = text.match(/https?:\/\/\S+/gi) ?? [];
  const suspiciousLink = linkMatches.find(l => {
    const host = l.replace(/^https?:\/\//i, '').split('/')[0].toLowerCase();
    return /\d/.test(host) || host.split('.').length > 3 || host.length > 40
      || /(bit\.ly|tinyurl|t\.co|goo\.gl|ow\.ly)/.test(host);
  });
  if (suspiciousLink) flags.push({
    label: 'Suspicious or shortened link',
    weight: 20,
    why: 'Shortened links and unusual web addresses can hide where you actually land. Never tap a link from an unexpected message.',
  });

  const phoneMatches = text.match(/\+?\d[\d\s\-().]{8,}\d/g) ?? [];
  if (phoneMatches.length && (hasUrgency || hasPayment || hasImpersonation)) {
    flags.push({
      label: 'Asks you to call an unfamiliar number',
      weight: 15,
      why: 'Always look up a company\'s real phone number on its official website or your card — never use the number in the message.',
    });
  }

  const score = Math.min(100, flags.reduce((s, f) => s + f.weight, 0));
  let risk: DecodeResult['risk'] = 'safe';
  if (score >= 50) risk = 'dangerous';
  else if (score >= 20) risk = 'suspicious';

  let plainExplanation = '';
  let nextSteps: string[] = [];

  if (risk === 'dangerous') {
    plainExplanation = 'This message has strong scam warning signs. Do not reply, do not tap links, and do not call any number it gives you.';
    nextSteps = [
      'Delete the message — or screenshot it first if you want to report it.',
      'If you got it as a text, forward it to 7726 (SPAM) for free.',
      'Report it at reportfraud.ftc.gov so it helps protect others.',
      'If you already clicked or paid, call your bank right away.',
    ];
  } else if (risk === 'suspicious') {
    plainExplanation = 'Some parts of this message look off. Do not act on it directly. Verify another way before doing anything.';
    nextSteps = [
      'Do not use the phone number or link in the message.',
      'Open a new browser tab or look on the back of your card and use the official contact info.',
      'Ask a trusted family member or friend to look at it with you.',
    ];
  } else {
    plainExplanation = 'No obvious scam patterns showed up in this message. Stay alert anyway — when in doubt, contact the company directly using a number you trust.';
    nextSteps = [
      'If something still feels off, trust your gut and ask someone you trust.',
      'Never share passwords, PINs, or one-time codes by reply.',
    ];
  }

  return { risk, score, flags, plainExplanation, nextSteps };
}

const SAMPLES: { label: string; text: string; icon: typeof Phone }[] = [
  {
    label: 'Fake delivery text',
    icon: MessageSquare,
    text: 'USPS: Your package cannot be delivered due to incomplete address. Confirm within 24 hours or it will be returned: http://usps-track-204.co/verify',
  },
  {
    label: 'IRS gift card scam',
    icon: Phone,
    text: 'IRS Final Notice: A warrant has been issued for your arrest for unpaid taxes. Call 1-800-555-0144 immediately and pay $987 with Apple gift cards to release the warrant. Do not tell anyone.',
  },
  {
    label: 'Bank security email',
    icon: Mail,
    text: 'Bank of America Security: Unusual activity detected. Your account is locked. Verify your identity now to restore access: https://bofa-secure-login-portal.tk/verify',
  },
];

export default function ScamMessageDecoder() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<DecodeResult | null>(null);

  const handleDecode = () => {
    if (!text.trim()) return;
    setResult(decode(text));
  };

  const reset = () => {
    setText('');
    setResult(null);
  };

  const riskBadge = result && {
    safe:       { label: 'Looks safe',     cls: 'bg-green-100 text-green-700 border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800' },
    suspicious: { label: 'Looks suspicious', cls: 'bg-amber-100 text-amber-700 border-amber-300 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800' },
    dangerous:  { label: 'Likely a scam',   cls: 'bg-red-100 text-red-700 border-red-300 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800' },
  }[result.risk];

  return (
    <>
      <SEOHead
        title="Scam Message Decoder"
        description="Paste a suspicious text, email, or voicemail message and get a plain-English risk score and clear next steps."
        path="/tools/scam-message-decoder"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-red-50 via-background to-amber-50 dark:from-red-950/20 dark:to-amber-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-red-500/10 rounded-full">
                <ShieldAlert className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Scam Message Decoder</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Paste a suspicious text, email, or voicemail. We will show the warning signs in plain English and tell you what to do next.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Scam Message Decoder' },
            ]}
          />

          {!result ? (
            <>
              <Card className="border-border shadow-sm">
                <CardContent className="p-6">
                  <label htmlFor="msg" className="block text-sm font-semibold mb-2">
                    Paste the message you got
                  </label>
                  <Textarea
                    id="msg"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Example: USPS: Your package cannot be delivered. Confirm within 24 hours: http://..."
                    className="min-h-[160px] text-base"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Nothing you paste leaves your device. The check happens right here in your browser.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-4">
                    <Button onClick={handleDecode} disabled={!text.trim()} size="lg" className="gap-2">
                      Check this message <ChevronRight className="h-4 w-4" />
                    </Button>
                    {text && (
                      <Button variant="outline" onClick={reset} size="lg">Clear</Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6">
                <p className="text-sm font-semibold text-muted-foreground mb-3">Or try a real scam example</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {SAMPLES.map((s) => {
                    const Icon = s.icon;
                    return (
                      <button
                        key={s.label}
                        onClick={() => setText(s.text)}
                        className="text-left p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                      >
                        <Icon className="h-5 w-5 text-muted-foreground mb-2" />
                        <p className="font-medium text-sm">{s.label}</p>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{s.text}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <>
              <Card className="mb-6 border-border shadow-sm overflow-hidden">
                <div className={`p-6 text-center border-b border-border ${
                  result.risk === 'dangerous' ? 'bg-red-50 dark:bg-red-950/20' :
                  result.risk === 'suspicious' ? 'bg-amber-50 dark:bg-amber-950/20' :
                  'bg-green-50 dark:bg-green-950/20'
                }`}>
                  <Badge className={`mb-3 ${riskBadge!.cls}`}>{riskBadge!.label}</Badge>
                  <p className="text-2xl font-bold mb-1">{result.score}/100 risk score</p>
                  <p className="text-sm text-muted-foreground max-w-lg mx-auto">{result.plainExplanation}</p>
                </div>

                {result.flags.length > 0 && (
                  <CardContent className="p-5">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">What we noticed</p>
                    <div className="space-y-3">
                      {result.flags.map((f, i) => (
                        <div key={i} className="flex gap-3 p-3 rounded-lg bg-muted/40 border border-border">
                          <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-sm">{f.label}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{f.why}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>

              <Card className="mb-6 border-border">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> What to do next
                  </p>
                  <ul className="space-y-2">
                    {result.nextSteps.map((step, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-primary font-semibold">{i + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="flex flex-wrap gap-3">
                <Button variant="outline" onClick={reset} className="gap-2">
                  <RotateCcw className="h-4 w-4" /> Check another message
                </Button>
                <Button asChild>
                  <Link to="/scam-defense">Visit Scam Defense Center</Link>
                </Button>
              </div>
            </>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/phishing-scanner" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">URL Safety Scanner</p>
                <p className="text-xs text-muted-foreground mt-0.5">Check if a website link looks safe.</p>
              </Link>
              <Link to="/tools/scam-witness-statement" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Report a Scam</p>
                <p className="text-xs text-muted-foreground mt-0.5">Build an FTC/IC3 report from your story.</p>
              </Link>
              <Link to="/scam-defense" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Defense Center</p>
                <p className="text-xs text-muted-foreground mt-0.5">All our scam protection tools in one place.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
