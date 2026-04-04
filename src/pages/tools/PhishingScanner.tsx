import { useState, useRef } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Search, AlertTriangle, CheckCircle2, XCircle, Info, RotateCcw, Link as LinkIcon } from 'lucide-react';

interface ScanResult {
  url: string;
  risk: 'safe' | 'suspicious' | 'dangerous';
  score: number;
  flags: string[];
  explanation: string;
}

// Heuristic-based client-side analysis
function analyseUrl(rawUrl: string): ScanResult {
  const flags: string[] = [];
  let score = 0;

  // Normalise
  let url = rawUrl.trim();
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }

  let parsed: URL | null = null;
  try {
    parsed = new URL(url);
  } catch {
    return {
      url: rawUrl,
      risk: 'dangerous',
      score: 100,
      flags: ['Invalid URL format'],
      explanation: 'This doesn\'t look like a valid web address. It may be malformed or intentionally obfuscated.',
    };
  }

  const hostname = parsed.hostname.toLowerCase();
  const fullUrl = url.toLowerCase();
  const path = parsed.pathname.toLowerCase();

  // Red flags
  if (parsed.protocol === 'http:') {
    score += 20;
    flags.push('Uses HTTP (not secure HTTPS)');
  }

  // IP address instead of domain
  if (/^(\d{1,3}\.){3}\d{1,3}$/.test(hostname)) {
    score += 40;
    flags.push('Uses IP address instead of a domain name');
  }

  // Very long URL
  if (url.length > 200) {
    score += 15;
    flags.push('Unusually long URL');
  }

  // Suspicious TLDs
  const suspiciousTLDs = ['.xyz', '.tk', '.ml', '.ga', '.cf', '.gq', '.top', '.click', '.online', '.site', '.live', '.download'];
  if (suspiciousTLDs.some(t => hostname.endsWith(t))) {
    score += 25;
    flags.push('Uses a high-risk top-level domain');
  }

  // Brand impersonation in subdomain/path
  const brands = ['paypal', 'apple', 'google', 'amazon', 'microsoft', 'netflix', 'hmrc', 'natwest', 'barclays', 'lloyds', 'halifax', 'santander', 'royalmail', 'fedex', 'dhl', 'ups', 'facebook', 'instagram', 'whatsapp', 'nhs', 'gov'];
  const knownDomains: Record<string, string> = { paypal: 'paypal.com', apple: 'apple.com', google: 'google.com', amazon: 'amazon.co.uk', microsoft: 'microsoft.com', netflix: 'netflix.com', hmrc: 'gov.uk', royalmail: 'royalmail.com', fedex: 'fedex.com', dhl: 'dhl.com', facebook: 'facebook.com', instagram: 'instagram.com' };
  for (const brand of brands) {
    if (hostname.includes(brand)) {
      const official = knownDomains[brand];
      if (official && !hostname.endsWith(official) && !hostname.endsWith('.' + official)) {
        score += 35;
        flags.push(`Impersonates "${brand}" but is not the real website`);
      }
    }
  }

  // Suspicious keywords in URL
  const susKeywords = ['login', 'signin', 'verify', 'secure', 'update', 'confirm', 'account', 'banking', 'password', 'credential', 'urgent', 'suspended', 'click', 'free', 'prize', 'winner', 'claim'];
  const keywordsFound = susKeywords.filter(k => fullUrl.includes(k));
  if (keywordsFound.length >= 2) {
    score += 15 * Math.min(keywordsFound.length, 3);
    flags.push(`Contains suspicious keywords: ${keywordsFound.slice(0, 3).join(', ')}`);
  }

  // Excessive subdomains
  const parts = hostname.split('.');
  if (parts.length >= 4) {
    score += 20;
    flags.push('Many subdomains (a common trick to look legitimate)');
  }

  // Special characters in domain
  if (hostname.includes('%') || hostname.includes('@')) {
    score += 30;
    flags.push('Domain contains special characters — unusual for legitimate sites');
  }

  // Homograph attack (non-ASCII characters)
  if (/[^\x00-\x7F]/.test(hostname)) {
    score += 35;
    flags.push('Domain contains non-standard characters (possible impersonation attack)');
  }

  // Shortened URLs
  const shorteners = ['bit.ly', 'tinyurl.com', 'goo.gl', 't.co', 'ow.ly', 'is.gd', 'buff.ly', 'short.link'];
  if (shorteners.some(s => hostname.endsWith(s))) {
    score += 15;
    flags.push('Shortened URL — hides the real destination');
  }

  // Cap at 100
  score = Math.min(score, 100);

  let risk: ScanResult['risk'];
  let explanation: string;

  if (score === 0) {
    risk = 'safe';
    explanation = 'No obvious phishing indicators found. This URL appears to be structured normally. Remember: no automated tool can guarantee a site is 100% safe — always check you\'re on the right website before entering personal details.';
  } else if (score < 40) {
    risk = 'suspicious';
    explanation = 'This URL has one or more characteristics that can be associated with phishing. This doesn\'t mean it\'s definitely dangerous, but you should be cautious before clicking it or entering any personal information.';
  } else {
    risk = 'dangerous';
    explanation = 'This URL shows multiple strong indicators of a phishing or scam website. We strongly recommend NOT visiting this link. If you received it via text or email, do not click it. If you\'re concerned about a real website, go directly to it by typing its address into your browser.';
  }

  return { url: rawUrl, risk, score, flags, explanation };
}

const RECENT_EXAMPLES = [
  { label: 'Fake USPS (scam)', url: 'http://usps-delivery.xyz/tracking?ref=12345&redelivery=confirm' },
  { label: 'Legitimate PayPal', url: 'https://paypal.com/myaccount' },
  { label: 'Suspicious login page', url: 'http://secure-paypal-login.com/signin' },
];

export default function PhishingScanner() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<ScanResult | null>(null);
  const [scanning, setScanning] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const scan = () => {
    if (!input.trim()) return;
    setScanning(true);
    // Small delay for UX feel
    setTimeout(() => {
      setResult(analyseUrl(input.trim()));
      setScanning(false);
    }, 600);
  };

  const reset = () => {
    setInput('');
    setResult(null);
    inputRef.current?.focus();
  };

  const riskColors = {
    safe: { border: 'border-green-400 dark:border-green-600', bg: 'bg-green-50 dark:bg-green-950/20', icon: CheckCircle2, iconClass: 'text-green-600', label: 'Looks Safe', badge: 'bg-green-100 text-green-700' },
    suspicious: { border: 'border-amber-400 dark:border-amber-600', bg: 'bg-amber-50 dark:bg-amber-950/20', icon: AlertTriangle, iconClass: 'text-amber-500', label: 'Suspicious', badge: 'bg-amber-100 text-amber-700' },
    dangerous: { border: 'border-red-400 dark:border-red-600', bg: 'bg-red-50 dark:bg-red-950/20', icon: XCircle, iconClass: 'text-red-500', label: 'Likely Dangerous', badge: 'bg-red-100 text-red-700' },
  };

  return (
    <>
      <SEOHead
        title="Phishing URL Scanner — TekSure"
        description="Check if a link or website address looks suspicious before you click it. Our free phishing scanner analyses URLs for warning signs."
      path="/tools/phishing-scanner"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Phishing Link Scanner</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Received a suspicious link? Paste it here to check for warning signs before you click it.
            </p>
          </div>
        </section>

        <div className="container max-w-2xl mx-auto px-4 py-8">
          {/* Disclaimer */}
          <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-6">
            <Info className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
            <p className="text-xs text-blue-700 dark:text-blue-300">
              <strong>How it works:</strong> This tool analyses the structure of web addresses for common phishing patterns. It does not visit the link or connect to external services — everything runs privately in your browser. No tool can guarantee 100% accuracy; use your judgement too.
            </p>
          </div>

          {/* Scanner input */}
          {!result && (
            <Card className="border-border shadow-sm mb-6">
              <CardContent className="p-6">
                <label className="block text-sm font-medium mb-2" htmlFor="url-input">
                  Paste the link you want to check
                </label>
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    id="url-input"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && scan()}
                    placeholder="e.g. http://royalmail-delivery.xyz/tracking"
                    className="text-sm"
                  />
                  <Button onClick={scan} disabled={!input.trim() || scanning} className="gap-2 shrink-0">
                    {scanning ? (
                      <span className="flex items-center gap-2"><span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Scanning...</span>
                    ) : (
                      <><Search className="h-4 w-4" /> Scan</>
                    )}
                  </Button>
                </div>

                {/* Quick examples */}
                <div className="mt-4">
                  <p className="text-xs text-muted-foreground mb-2">Try an example:</p>
                  <div className="flex flex-wrap gap-2">
                    {RECENT_EXAMPLES.map(ex => (
                      <button
                        key={ex.url}
                        onClick={() => setInput(ex.url)}
                        className="text-xs px-2.5 py-1 rounded-full bg-muted hover:bg-accent border border-border transition-colors"
                      >
                        {ex.label}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Result */}
          {result && (() => {
            const style = riskColors[result.risk];
            const Icon = style.icon;
            return (
              <div className="space-y-4">
                {/* Main verdict */}
                <Card className={`${style.border} ${style.bg} border-2`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon className={`h-8 w-8 ${style.iconClass} shrink-0 mt-0.5`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="font-bold text-lg">{style.label}</h2>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${style.badge}`}>
                            Risk score: {result.score}/100
                          </span>
                        </div>
                        <div className="flex items-start gap-1 mb-2 min-w-0">
                          <LinkIcon className="h-3 w-3 text-muted-foreground shrink-0 mt-1" />
                          <p className="text-xs text-muted-foreground break-all">{result.url}</p>
                        </div>
                        <p className="text-sm text-foreground/80 leading-relaxed">{result.explanation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Risk score bar */}
                <Card>
                  <CardContent className="p-5">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Risk level</p>
                    <div className="relative h-3 bg-gradient-to-r from-green-400 via-amber-400 to-red-500 rounded-full mb-1">
                      <div
                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-zinc-900 border-2 border-foreground/80 rounded-full transition-all"
                        style={{ left: `calc(${result.score}% - 8px)` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Safe</span>
                      <span>Suspicious</span>
                      <span>Dangerous</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Flags */}
                {result.flags.length > 0 && (
                  <Card>
                    <CardContent className="p-5">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Warning signs detected ({result.flags.length})
                      </p>
                      <div className="space-y-2">
                        {result.flags.map((flag, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <AlertTriangle className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <p className="text-sm text-muted-foreground">{flag}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {result.flags.length === 0 && (
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">No specific warning signs detected. The URL follows normal patterns.</p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* What to do */}
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-5">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">What should I do?</p>
                    {result.risk === 'safe' && (
                      <p className="text-sm text-muted-foreground">No major red flags detected. Still, always double-check the site looks correct after visiting, and never enter personal details on a site you\'re unsure about.</p>
                    )}
                    {result.risk === 'suspicious' && (
                      <p className="text-sm text-muted-foreground">Proceed with caution. If you received this link unexpectedly (via text, email, or social media), it\'s safer not to click it. If it\'s from a company you use, go to their website directly by typing the address rather than clicking the link.</p>
                    )}
                    {result.risk === 'dangerous' && (
                      <p className="text-sm text-muted-foreground">Do not click this link. Delete the message that contained it. If you think you\'ve already been scammed, contact your bank and report it to the FTC at <strong>1-877-382-4357</strong> or <strong>ReportFraud.ftc.gov</strong>.</p>
                    )}
                  </CardContent>
                </Card>

                <Button variant="outline" onClick={reset} className="gap-2 w-full">
                  <RotateCcw className="h-4 w-4" /> Check another link
                </Button>
              </div>
            );
          })()}

          {/* Tips */}
          {!result && (
            <Card className="border-dashed border-primary/30 bg-primary/5">
              <CardContent className="p-5">
                <p className="text-sm font-medium mb-3">Signs of a phishing link to watch for:</p>
                <div className="space-y-2">
                  {[
                    '🔒 Real sites always use https:// — look for the padlock',
                    '📧 If you didn\'t expect the link, be suspicious regardless of who sent it',
                    '🔤 Check for subtle misspellings like "roya1mail.com" (number 1 not letter l)',
                    '⏩ Shortened URLs like bit.ly hide where you\'re actually going',
                    '🏦 Banks and HMRC never ask you to click a link to verify your account',
                  ].map((tip, i) => (
                    <p key={i} className="text-xs text-muted-foreground">{tip}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
