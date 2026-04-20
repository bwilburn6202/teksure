import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Link2, ShieldAlert, ShieldCheck, AlertTriangle, ExternalLink, Search, X, Check } from 'lucide-react';

type Severity = 'safe' | 'caution' | 'danger';

type CheckResult = {
  label: string;
  passed: boolean;
  detail: string;
  weight: number; // 0 ok, 1 warn, 2 danger
};

const SUSPICIOUS_TLDS = ['.xyz', '.top', '.click', '.loan', '.win', '.zip', '.country', '.gq', '.tk', '.ml', '.cf'];
const SHORTENERS = ['bit.ly', 'tinyurl.com', 't.co', 'goo.gl', 'ow.ly', 'is.gd', 'buff.ly', 'rebrand.ly', 'cutt.ly'];
const KNOWN_BRANDS = ['amazon', 'paypal', 'microsoft', 'apple', 'google', 'facebook', 'netflix', 'bankofamerica', 'chase', 'wellsfargo', 'usps', 'fedex', 'ups', 'ebay', 'instagram'];
const BRAND_LOOKALIKES: Record<string, string[]> = {
  amazon: ['amaz0n', 'amzon', 'amaazon', 'arnazon'],
  paypal: ['paypa1', 'payp4l', 'paipal', 'paypaI'],
  microsoft: ['micros0ft', 'mircosoft', 'mlcrosoft'],
  apple: ['app1e', 'appl3', 'aple'],
  google: ['g00gle', 'googIe', 'googel'],
  netflix: ['netfllx', 'netfIix', 'netflx'],
};
const LOOKALIKE_CHARS = /[\u0430\u043e\u0440\u0435\u0441\u0445\u0443]/; // Cyrillic a, o, p, e, c, x, y

const EXAMPLES: { label: string; url: string; expect: Severity }[] = [
  { label: 'Real TekSure site', url: 'https://www.teksure.com', expect: 'safe' },
  { label: 'Bank of America', url: 'https://www.bankofamerica.com/login', expect: 'safe' },
  { label: 'Bit.ly shortened link', url: 'https://bit.ly/3Xp9Q2', expect: 'caution' },
  { label: 'Unknown shortener', url: 'http://tinyurl.com/y4abc123', expect: 'caution' },
  { label: 'Fake Amazon login', url: 'http://amaz0n-verify.xyz/login', expect: 'danger' },
  { label: 'PayPal lookalike', url: 'http://paypa1-secure-account-update.top/signin', expect: 'danger' },
];

function analyzeUrl(raw: string): { results: CheckResult[]; verdict: Severity; score: number } {
  const results: CheckResult[] = [];
  let score = 0;
  let url: URL | null = null;
  try {
    url = new URL(raw.trim());
  } catch {
    results.push({ label: 'Valid URL format', passed: false, detail: 'This does not look like a valid URL. Make sure it starts with http:// or https://', weight: 2 });
    return { results, verdict: 'danger', score: 2 };
  }

  const host = url.hostname.toLowerCase();
  const fullUrl = url.toString().toLowerCase();

  // HTTPS
  if (url.protocol === 'https:') {
    results.push({ label: 'Uses HTTPS', passed: true, detail: 'Connection is encrypted. Note: HTTPS does not mean the site is honest, only that the data in transit is private.', weight: 0 });
  } else {
    results.push({ label: 'Uses HTTPS', passed: false, detail: 'This site uses unencrypted HTTP. Anything you type can be intercepted. Real banks and shopping sites use HTTPS.', weight: 2 });
    score += 2;
  }

  // Suspicious TLD
  const tldMatch = SUSPICIOUS_TLDS.find(tld => host.endsWith(tld));
  if (tldMatch) {
    results.push({ label: 'Top-level domain', passed: false, detail: `Domain ends in "${tldMatch}". This is a low-cost TLD often used by scammers. Real major companies almost always use .com, .org, .gov, or country codes.`, weight: 2 });
    score += 2;
  } else {
    results.push({ label: 'Top-level domain', passed: true, detail: 'Domain ending looks normal.', weight: 0 });
  }

  // Shortener
  const shortener = SHORTENERS.find(s => host === s || host.endsWith('.' + s));
  if (shortener) {
    results.push({ label: 'URL shortener', passed: false, detail: `This is a shortened link (${shortener}). The real destination is hidden. Expand it first at unshorten.it before clicking.`, weight: 1 });
    score += 1;
  } else {
    results.push({ label: 'URL shortener', passed: true, detail: 'Not a known shortener — you can see the real domain.', weight: 0 });
  }

  // Subdomain depth
  const dotCount = host.split('.').length - 1;
  if (dotCount > 3) {
    results.push({ label: 'Subdomain depth', passed: false, detail: `URL has ${dotCount} dots. Many subdomains can be a trick to make a fake URL look real (e.g., paypal.com.login.fake.xyz).`, weight: 1 });
    score += 1;
  } else {
    results.push({ label: 'Subdomain depth', passed: true, detail: 'Subdomain depth looks reasonable.', weight: 0 });
  }

  // Brand lookalike
  let lookalikeFound: { brand: string; variant: string } | null = null;
  for (const brand of Object.keys(BRAND_LOOKALIKES)) {
    for (const variant of BRAND_LOOKALIKES[brand]) {
      if (host.includes(variant)) {
        lookalikeFound = { brand, variant };
        break;
      }
    }
    if (lookalikeFound) break;
  }
  if (lookalikeFound) {
    results.push({ label: 'Brand impersonation', passed: false, detail: `Domain contains "${lookalikeFound.variant}" which looks like "${lookalikeFound.brand}" but is misspelled. This is a classic phishing trick.`, weight: 2 });
    score += 2;
  } else {
    // Brand near root with non-matching domain
    const brandInPath = KNOWN_BRANDS.find(b => fullUrl.includes(b) && !host.endsWith(b + '.com') && !host.endsWith('.' + b + '.com'));
    if (brandInPath) {
      results.push({ label: 'Brand impersonation', passed: false, detail: `URL mentions "${brandInPath}" but the real domain isn't ${brandInPath}.com. Scammers put brand names in subdomains or paths to fool you.`, weight: 1 });
      score += 1;
    } else {
      results.push({ label: 'Brand impersonation', passed: true, detail: 'No obvious brand-spoofing patterns detected.', weight: 0 });
    }
  }

  // Lookalike characters
  if (LOOKALIKE_CHARS.test(host)) {
    results.push({ label: 'Lookalike characters', passed: false, detail: 'Domain contains characters from another alphabet that look like English letters. This is a homograph attack.', weight: 2 });
    score += 2;
  } else {
    results.push({ label: 'Lookalike characters', passed: true, detail: 'No deceptive characters spotted in the domain.', weight: 0 });
  }

  // Length
  if (host.length >= 60) {
    results.push({ label: 'Domain length', passed: false, detail: `Domain is ${host.length} characters long. Very long domain names are often used to hide phishing pages.`, weight: 1 });
    score += 1;
  } else {
    results.push({ label: 'Domain length', passed: true, detail: 'Domain length is normal.', weight: 0 });
  }

  // Numbers replacing letters
  const root = host.replace(/^www\./, '').split('.')[0];
  const digitsInRoot = (root.match(/[0-9]/g) || []).length;
  if (digitsInRoot >= 1 && /[a-z][0-9][a-z]/.test(root)) {
    results.push({ label: 'Numbers in domain', passed: false, detail: 'Numbers are mixed inside word-like sections of the domain (e.g., "0" for "o", "1" for "l"). Common phishing pattern.', weight: 2 });
    score += 2;
  } else {
    results.push({ label: 'Numbers in domain', passed: true, detail: 'No suspicious number/letter mixing.', weight: 0 });
  }

  let verdict: Severity = 'safe';
  if (score >= 3) verdict = 'danger';
  else if (score >= 1) verdict = 'caution';

  return { results, verdict, score };
}

function VerdictBadge({ verdict }: { verdict: Severity }) {
  if (verdict === 'safe') {
    return (
      <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
        <ShieldCheck className="h-6 w-6 text-emerald-600 flex-shrink-0" aria-hidden="true" />
        <div>
          <p className="font-semibold text-emerald-900 dark:text-emerald-100">Looks OK</p>
          <p className="text-sm text-emerald-800/80 dark:text-emerald-200/80">No common red flags found, but stay alert and read below.</p>
        </div>
      </div>
    );
  }
  if (verdict === 'caution') {
    return (
      <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
        <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0" aria-hidden="true" />
        <div>
          <p className="font-semibold text-amber-900 dark:text-amber-100">Proceed with caution</p>
          <p className="text-sm text-amber-800/80 dark:text-amber-200/80">Some warning signs detected. Review the checks below before clicking.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
      <ShieldAlert className="h-6 w-6 text-red-600 flex-shrink-0" aria-hidden="true" />
      <div>
        <p className="font-semibold text-red-900 dark:text-red-100">Red flags detected</p>
        <p className="text-sm text-red-800/80 dark:text-red-200/80">Multiple warning signs. We recommend you do not click this link.</p>
      </div>
    </div>
  );
}

export default function UrlSafetyChecker() {
  const [input, setInput] = useState('');
  const [analysis, setAnalysis] = useState<ReturnType<typeof analyzeUrl> | null>(null);

  const run = (value: string) => {
    if (!value.trim()) return;
    setInput(value);
    setAnalysis(analyzeUrl(value));
  };

  return (
    <>
      <SEOHead
        title="URL Safety Checker — Is This Link Safe? | TekSure"
        description="Paste a suspicious link and get an instant safety check. We look for the most common phishing tricks — all in your browser, nothing sent anywhere."
        path="/tools/url-safety-checker"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'URL Safety Checker' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
                <Link2 className="h-6 w-6 text-blue-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Before You Click — Paste the URL Here</h1>
            <p className="text-muted-foreground text-lg">
              Drop in any suspicious link and we will check it for the most common phishing tricks. Everything runs in your browser — nothing is sent anywhere.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl space-y-8">
          {/* Input */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Check a link</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="url"
                  placeholder="https://example.com/something"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && run(input)}
                  className="text-base"
                  aria-label="URL to check"
                />
                <Button onClick={() => run(input)} className="sm:w-auto">
                  <Search className="h-4 w-4 mr-2" aria-hidden="true" /> Analyze
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">Tip: long-press a link on mobile or hover on desktop to copy it without clicking.</p>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Try a sample</CardTitle></CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-2">
                {EXAMPLES.map((ex) => (
                  <button
                    key={ex.url}
                    onClick={() => run(ex.url)}
                    className="text-left p-3 rounded-lg border hover:border-primary hover:bg-muted/50 transition-colors"
                  >
                    <p className="font-medium text-sm">{ex.label}</p>
                    <p className="text-xs text-muted-foreground font-mono break-all mt-1">{ex.url}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          {analysis && (
            <Card>
              <CardHeader><CardTitle className="text-lg">Verdict</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <VerdictBadge verdict={analysis.verdict} />
                <div className="space-y-2">
                  {analysis.results.map((r, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-lg border">
                      <div className="flex-shrink-0 mt-0.5">
                        {r.passed ? (
                          <Check className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                        ) : r.weight === 2 ? (
                          <X className="h-5 w-5 text-red-600" aria-hidden="true" />
                        ) : (
                          <AlertTriangle className="h-5 w-5 text-amber-600" aria-hidden="true" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{r.label}</p>
                        <p className="text-sm text-muted-foreground">{r.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Disclaimer */}
          <Card className="border-amber-200 dark:border-amber-800/50">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-sm mb-1">This is automated analysis only</p>
                  <p className="text-sm text-muted-foreground">
                    It cannot detect every threat. When in doubt, do not click. Verify by typing the company's official URL directly into your browser.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What we check / can't detect */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader><CardTitle className="text-base">What this tool checks</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" /> HTTPS encryption</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" /> Suspicious top-level domains</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" /> Known URL shorteners</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" /> Excessive subdomains</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" /> Brand-name misspellings (amaz0n, paypa1)</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" /> Lookalike characters from other alphabets</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" /> Excessively long domains</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" /> Numbers replacing letters</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-base">What it cannot detect</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><X className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" /> Phishing that uses real, hijacked domains</li>
                  <li className="flex gap-2"><X className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" /> Malware downloads</li>
                  <li className="flex gap-2"><X className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" /> Browser exploits or drive-by installs</li>
                  <li className="flex gap-2"><X className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" /> Where a shortened link actually leads</li>
                  <li className="flex gap-2"><X className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" /> Whether the page is a known scam site</li>
                </ul>
                <a
                  href="https://transparencyreport.google.com/safe-browsing/search"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-sm text-blue-600 hover:underline"
                >
                  Check Google Safe Browsing <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
