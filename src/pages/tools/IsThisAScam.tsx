import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone,
  Globe,
  LinkIcon,
  ExternalLink,
  Info,
} from 'lucide-react';

type Channel = 'email' | 'text' | 'call' | 'website' | 'link';

interface ChannelOption {
  id: Channel;
  label: string;
  icon: typeof Mail;
  placeholder: string;
}

const channels: ChannelOption[] = [
  {
    id: 'email',
    label: 'Email',
    icon: Mail,
    placeholder: 'Paste the full email here — including the subject line, sender name, and body...',
  },
  {
    id: 'text',
    label: 'Text Message',
    icon: MessageSquare,
    placeholder: 'Paste the text message you received, including the phone number or shortcode if you can...',
  },
  {
    id: 'call',
    label: 'Phone Call',
    icon: Phone,
    placeholder: 'Describe what the caller said and the phone number they called from...',
  },
  {
    id: 'website',
    label: 'Website',
    icon: Globe,
    placeholder: 'Paste the full website URL and describe what the site is asking for...',
  },
  {
    id: 'link',
    label: 'Link',
    icon: LinkIcon,
    placeholder: 'Paste the suspicious link here along with where it came from...',
  },
];

interface ScoreRule {
  id: string;
  points: number;
  label: string;
  test: (text: string) => boolean;
}

const URGENCY_WORDS = [
  'urgent',
  'immediate',
  'act now',
  'expires today',
  'expires in',
  'suspended',
  'within 24 hours',
  'last chance',
  'final notice',
];

const MONEY_DEMAND_WORDS = [
  'gift card',
  'gift cards',
  'itunes card',
  'google play card',
  'wire transfer',
  'western union',
  'moneygram',
  'bitcoin',
  'crypto',
  'cryptocurrency',
  'usdt',
  'ethereum',
];

const AUTHORITY_IMPERSONATION = [
  'irs',
  'social security',
  'social security administration',
  'microsoft',
  'apple support',
  'your bank',
  'chase bank',
  'wells fargo',
  'amazon security',
  'paypal security',
  'medicare',
];

const ACTION_REQUESTS = [
  'verify your account',
  'confirm payment',
  'click here',
  'click below',
  'update your information',
  'confirm your identity',
  'reactivate your account',
];

const WINNINGS_KEYWORDS = [
  'you won',
  'you have won',
  'congratulations',
  'lottery',
  'inheritance',
  'prize',
  'sweepstakes',
  'claim your',
  'selected as a winner',
];

const FAKE_AV_KEYWORDS = [
  'norton',
  'mcafee',
  'virus detected',
  'computer infected',
  'your pc is infected',
  'malware detected',
];

const COMPROMISE_KEYWORDS = [
  'account has been compromised',
  'unusual sign-in',
  'unauthorized access',
  'someone tried to log in',
];

const FAMILY_EMERGENCY_KEYWORDS = [
  'grandma',
  'grandpa',
  'mom it\'s me',
  'dad it\'s me',
  'this is your grandson',
  'this is your granddaughter',
  'send money please',
  'i need money',
  'bail',
  'stranded',
];

const MISSPELLED_BRANDS = [
  'amaz0n',
  'amazn',
  'paypa1',
  'paypall',
  'app1e',
  'appl3',
  'g00gle',
  'micros0ft',
  'netfllx',
  'netfl1x',
  'faceb00k',
];

const SHORT_URL_DOMAINS = ['bit.ly', 'tinyurl.com', 't.co', 'goo.gl', 'is.gd', 'buff.ly', 'shorturl'];

const SUSPICIOUS_TLDS = ['.xyz', '.top', '.click', '.loan', '.cam', '.zip', '.country', '.support'];

function hasAny(text: string, words: string[]): string | null {
  for (const w of words) {
    if (text.includes(w)) return w;
  }
  return null;
}

function detectGrammarIssues(text: string): boolean {
  // Simple heuristics: double spaces, random capitalization, missing articles, odd punctuation
  if (/\s{3,}/.test(text)) return true;
  if (/[a-z][A-Z]{2,}/.test(text)) return true;
  if (/!!{2,}/.test(text) || /\?\?{2,}/.test(text)) return true;
  // Mixed capitalization within a single word is suspicious
  if (/\b[A-Z][a-z]+[A-Z][a-z]+\b/.test(text) && !/\b(YouTube|iPhone|iPad|eBay|LinkedIn|PayPal|McAfee|MacBook|WhatsApp|TikTok|TekSure)\b/i.test(text)) {
    return true;
  }
  return false;
}

function detectUnusualPhoneFormat(text: string): boolean {
  // US phone number formats are usually 10 digits. Unusual formats include
  // long international numbers, five-digit shortcodes in unusual contexts,
  // or numbers with unusual separators.
  const weirdPhone = /\+\d{11,}/.test(text); // very long international
  const dottedPhone = /\b\d{3}\.\d{3}\.\d{4}\b/.test(text);
  return weirdPhone || dottedPhone;
}

function hasShortUrlWithoutContext(text: string): boolean {
  for (const domain of SHORT_URL_DOMAINS) {
    if (text.includes(domain)) return true;
  }
  return false;
}

function hasSuspiciousTld(text: string): boolean {
  for (const tld of SUSPICIOUS_TLDS) {
    if (text.includes(tld)) return true;
  }
  return false;
}

function hasWeirdSubdomain(text: string): boolean {
  // e.g. secure-login.amazon.evil-site.xyz or apple.support-reset.com
  return /\b[a-z0-9-]+\.[a-z0-9-]+\.(xyz|top|click|loan|cam|zip|country|support)\b/.test(text);
}

interface Trigger {
  label: string;
  points: number;
  matchedOn?: string;
}

function analyze(text: string, channel: Channel): { score: number; triggers: Trigger[] } {
  const lower = text.toLowerCase();
  const triggers: Trigger[] = [];

  // Urgency
  const urgency = hasAny(lower, URGENCY_WORDS);
  if (urgency) {
    triggers.push({
      label: `Uses urgent language to pressure you ("${urgency}")`,
      points: 2,
      matchedOn: urgency,
    });
  }

  // Money demand (instant red flag)
  const money = hasAny(lower, MONEY_DEMAND_WORDS);
  if (money) {
    triggers.push({
      label: `Asks for gift cards, crypto, or wire transfer ("${money}") — this is the biggest scam red flag`,
      points: 10,
      matchedOn: money,
    });
  }

  // Authority impersonation + action
  const authority = hasAny(lower, AUTHORITY_IMPERSONATION);
  const actionWord = hasAny(lower, ACTION_REQUESTS);
  if (authority && actionWord) {
    triggers.push({
      label: `Pretends to be a trusted organization ("${authority}") and asks you to take action`,
      points: 3,
      matchedOn: authority,
    });
  } else if (authority) {
    triggers.push({
      label: `Mentions a commonly impersonated organization ("${authority}")`,
      points: 1,
      matchedOn: authority,
    });
  }

  // Action requests alone
  if (actionWord && !authority) {
    triggers.push({
      label: `Pushes you to "${actionWord}" — classic phishing wording`,
      points: 2,
      matchedOn: actionWord,
    });
  }

  // Phone call urgency
  if (/call.*(now|immediately|today|within)/i.test(text)) {
    triggers.push({
      label: 'Tells you to call a number urgently',
      points: 2,
    });
  }

  // Misspelled brand
  const misspelled = hasAny(lower, MISSPELLED_BRANDS);
  if (misspelled) {
    triggers.push({
      label: `Uses a misspelled brand name in the URL or text ("${misspelled}")`,
      points: 5,
      matchedOn: misspelled,
    });
  }

  // Suspicious TLD / weird subdomain
  if (hasSuspiciousTld(lower)) {
    triggers.push({
      label: 'Contains an unusual website ending (like .xyz, .top, or .click)',
      points: 3,
    });
  }
  if (hasWeirdSubdomain(lower)) {
    triggers.push({
      label: 'URL has a suspicious subdomain pattern',
      points: 2,
    });
  }

  // Winnings / lottery
  const winning = hasAny(lower, WINNINGS_KEYWORDS);
  if (winning) {
    triggers.push({
      label: `Claims you won a prize, lottery, or inheritance ("${winning}")`,
      points: 4,
      matchedOn: winning,
    });
  }

  // Fake antivirus
  const fakeAv = hasAny(lower, FAKE_AV_KEYWORDS);
  if (fakeAv) {
    triggers.push({
      label: `Claims your computer is infected ("${fakeAv}") — classic fake antivirus scam`,
      points: 3,
      matchedOn: fakeAv,
    });
  }

  // Unusual urgency + money
  if (urgency && money) {
    triggers.push({
      label: 'Combines urgency with a demand for money — a huge red flag',
      points: 5,
    });
  }

  // Grammar issues
  if (detectGrammarIssues(text)) {
    triggers.push({
      label: 'Has grammar or formatting oddities',
      points: 1,
    });
  }

  // Unusual phone number
  if (detectUnusualPhoneFormat(text)) {
    triggers.push({
      label: 'Contains a phone number with an unusual format',
      points: 1,
    });
  }

  // Short URL without context
  if (hasShortUrlWithoutContext(lower)) {
    triggers.push({
      label: 'Contains a shortened link (like bit.ly) hiding the real destination',
      points: 2,
    });
  }

  // Account compromised
  const compromise = hasAny(lower, COMPROMISE_KEYWORDS);
  if (compromise) {
    triggers.push({
      label: `Claims your account has been compromised ("${compromise}")`,
      points: 3,
      matchedOn: compromise,
    });
  }

  // Family emergency
  const family = hasAny(lower, FAMILY_EMERGENCY_KEYWORDS);
  if (family) {
    triggers.push({
      label: `Claims to be family in trouble needing money ("${family}") — the "grandparent scam"`,
      points: 5,
      matchedOn: family,
    });
  }

  // Channel-specific bonuses
  if (channel === 'call' && /call.*(now|immediately)/i.test(text)) {
    // already counted
  }

  const score = triggers.reduce((sum, t) => sum + t.points, 0);
  return { score, triggers };
}

type Verdict = 'safe' | 'caution' | 'scam';

function verdictFromScore(score: number): Verdict {
  if (score >= 8) return 'scam';
  if (score >= 3) return 'caution';
  return 'safe';
}

const verdictConfig: Record<
  Verdict,
  {
    label: string;
    emoji: string;
    headline: string;
    recommendation: string;
    Icon: typeof ShieldCheck;
    className: string;
  }
> = {
  safe: {
    label: 'Probably legitimate',
    emoji: '',
    headline: 'No major red flags',
    recommendation:
      'We did not find common scam patterns here. That said, always verify by contacting the company directly using a phone number from their official website — not from the message itself.',
    Icon: ShieldCheck,
    className:
      'bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-900',
  },
  caution: {
    label: 'Be cautious',
    emoji: '',
    headline: 'These details look suspicious',
    recommendation:
      'Be careful. Do not click any links, reply, or send money. Verify through an official channel — call the company using the number on the back of your card or their official website.',
    Icon: AlertTriangle,
    className:
      'bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-900',
  },
  scam: {
    label: 'Almost certainly a scam',
    emoji: '',
    headline: 'This has all the signs of a scam',
    recommendation:
      'Do NOT respond, click links, or send money. Delete it. If you already responded or sent money, call your bank right away, then report it at ReportFraud.ftc.gov.',
    Icon: ShieldAlert,
    className: 'bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-900',
  },
};

export default function IsThisAScam() {
  const [channel, setChannel] = useState<Channel>('email');
  const [input, setInput] = useState('');
  const [result, setResult] = useState<{
    score: number;
    triggers: Trigger[];
    verdict: Verdict;
  } | null>(null);

  const activeChannel = channels.find((c) => c.id === channel)!;

  const handleCheck = () => {
    if (!input.trim()) return;
    const { score, triggers } = analyze(input, channel);
    const verdict = verdictFromScore(score);
    setResult({ score, triggers, verdict });
  };

  const handleReset = () => {
    setInput('');
    setResult(null);
  };

  return (
    <>
      <SEOHead
        title="Is This a Scam? — Check Suspicious Texts, Emails & URLs | TekSure"
        description="Paste a suspicious email, text, phone call, or link and our free checker will scan for common scam red flags and tell you how risky it looks."
        path="/tools/is-this-a-scam"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center flex-shrink-0">
                <ShieldAlert className="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Is This a Scam?
            </h1>
            <p className="text-muted-foreground text-lg">
              Got a suspicious text, email, phone call, or link? Paste it below and we'll scan for common scam red flags before you click, reply, or respond.
            </p>
          </div>
        </section>

        <div className="container py-10 pb-24 max-w-4xl">
          {/* Channel tabs */}
          <div className="mb-6">
            <p className="text-sm font-medium mb-3">What kind of message is this?</p>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Choose message type"
            >
              {channels.map((c) => {
                const Icon = c.icon;
                const active = c.id === channel;
                return (
                  <button
                    key={c.id}
                    onClick={() => {
                      setChannel(c.id);
                      setResult(null);
                    }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] border ${
                      active
                        ? 'bg-foreground text-background border-foreground'
                        : 'bg-background text-foreground/70 border-border hover:border-foreground/30'
                    }`}
                    aria-pressed={active}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Input */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <activeChannel.icon className="h-5 w-5 text-foreground/70" />
                Paste the {activeChannel.label.toLowerCase()} content
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder={activeChannel.placeholder}
                className="min-h-[160px] text-base"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="Suspicious content"
              />
              <div className="flex flex-wrap gap-3">
                <Button onClick={handleCheck} disabled={!input.trim()} size="lg">
                  <ShieldCheck className="h-4 w-4 mr-2" />
                  Check for Scam Signs
                </Button>
                {result && (
                  <Button variant="outline" onClick={handleReset} size="lg">
                    Start Over
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Result */}
          {result && (
            <>
              {(() => {
                const v = verdictConfig[result.verdict];
                const Icon = v.Icon;
                return (
                  <Card className={`border-2 mb-6 ${v.className}`}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Icon className="h-10 w-10 flex-shrink-0" aria-hidden="true" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl" aria-hidden="true">
                              {v.emoji}
                            </span>
                            <Badge variant="outline" className="bg-background/60">
                              {v.label}
                            </Badge>
                            <Badge variant="secondary">Score: {result.score}</Badge>
                          </div>
                          <h2 className="text-xl font-bold mb-2">{v.headline}</h2>
                          <p className="text-sm leading-relaxed">{v.recommendation}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })()}

              {/* Triggers breakdown */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">What we spotted</CardTitle>
                </CardHeader>
                <CardContent>
                  {result.triggers.length === 0 ? (
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <p>
                        No common scam patterns matched. The message might still be one-of-a-kind, so stay alert — but nothing here tripped our red-flag list.
                      </p>
                    </div>
                  ) : (
                    <ul className="space-y-3">
                      {result.triggers.map((t, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <p>{t.label}</p>
                          </div>
                          <Badge variant="outline" className="flex-shrink-0">
                            +{t.points}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>

              {/* Disclaimer */}
              <Card className="mb-6 bg-muted/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Info className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <p>
                      <strong className="text-foreground">This is automated analysis, not a guarantee.</strong>{' '}
                      When in doubt, don't respond. Call the company or person directly using a phone number from their official website or your own records — never from the message itself.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Next steps */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What to do next</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Link
                      to="/scam-defense"
                      className="flex items-center gap-3 p-4 rounded-lg border hover:border-foreground/30 transition-colors"
                    >
                      <ShieldAlert className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm">Scam Defense Center</p>
                        <p className="text-xs text-muted-foreground">
                          Learn how to recognize and recover
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    </Link>
                    <Link
                      to="/tools/scam-simulator"
                      className="flex items-center gap-3 p-4 rounded-lg border hover:border-foreground/30 transition-colors"
                    >
                      <ShieldCheck className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm">Practice Scam Spotting</p>
                        <p className="text-xs text-muted-foreground">
                          Try our Scam Simulator tool
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {!result && (
            <Card className="bg-muted/30 border-dashed">
              <CardContent className="py-10 text-center">
                <ShieldCheck className="h-10 w-10 mx-auto text-muted-foreground/60 mb-3" />
                <p className="text-muted-foreground">
                  Paste a suspicious message above and click <strong>Check for Scam Signs</strong> to see the red flags.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
