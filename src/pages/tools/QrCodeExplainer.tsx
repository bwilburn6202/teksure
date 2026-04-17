import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { QrCode, Smartphone, ShieldAlert, ShieldCheck, AlertTriangle, ExternalLink, Search, Check, X } from 'lucide-react';

type Severity = 'safe' | 'caution' | 'danger';

type CheckResult = {
  label: string;
  passed: boolean;
  detail: string;
  weight: number;
};

const SUSPICIOUS_TLDS = ['.xyz', '.top', '.click', '.loan', '.win', '.zip', '.country', '.gq', '.tk', '.ml', '.cf'];
const SHORTENERS = ['bit.ly', 'tinyurl.com', 't.co', 'goo.gl', 'ow.ly', 'is.gd', 'buff.ly', 'rebrand.ly', 'cutt.ly'];
const BRAND_LOOKALIKES: Record<string, string[]> = {
  amazon: ['amaz0n', 'arnazon'],
  paypal: ['paypa1', 'payp4l'],
  microsoft: ['micros0ft', 'mircosoft'],
  apple: ['app1e', 'appl3'],
  google: ['g00gle'],
};
const LOOKALIKE_CHARS = /[\u0430\u043e\u0440\u0435\u0441\u0445\u0443]/;

function analyzeUrl(raw: string): { results: CheckResult[]; verdict: Severity; score: number } {
  const results: CheckResult[] = [];
  let score = 0;
  let url: URL | null = null;
  try {
    url = new URL(raw.trim());
  } catch {
    results.push({ label: 'Valid URL format', passed: false, detail: 'This does not look like a valid URL. QR decoders return the link text — paste it as you saw it.', weight: 2 });
    return { results, verdict: 'danger', score: 2 };
  }

  const host = url.hostname.toLowerCase();
  const fullUrl = url.toString().toLowerCase();

  if (url.protocol === 'https:') {
    results.push({ label: 'Uses HTTPS', passed: true, detail: 'The link uses an encrypted connection.', weight: 0 });
  } else {
    results.push({ label: 'Uses HTTPS', passed: false, detail: 'Plain HTTP — anything you type can be intercepted. Real businesses use HTTPS.', weight: 2 });
    score += 2;
  }

  const tldMatch = SUSPICIOUS_TLDS.find(tld => host.endsWith(tld));
  if (tldMatch) {
    results.push({ label: 'Domain ending', passed: false, detail: `Ends in "${tldMatch}". Cheap TLDs are common in QR scams. Real companies use .com / .org / .gov.`, weight: 2 });
    score += 2;
  } else {
    results.push({ label: 'Domain ending', passed: true, detail: 'Domain ending looks normal.', weight: 0 });
  }

  const shortener = SHORTENERS.find(s => host === s || host.endsWith('.' + s));
  if (shortener) {
    results.push({ label: 'URL shortener', passed: false, detail: `Shortened with ${shortener}. The real destination is hidden — extra risk for QR codes since you cannot see what the code points to.`, weight: 1 });
    score += 1;
  } else {
    results.push({ label: 'URL shortener', passed: true, detail: 'Not a known shortener.', weight: 0 });
  }

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
    results.push({ label: 'Brand impersonation', passed: false, detail: `Domain contains "${lookalikeFound.variant}" — a misspelling of "${lookalikeFound.brand}". Classic phishing.`, weight: 2 });
    score += 2;
  } else {
    results.push({ label: 'Brand impersonation', passed: true, detail: 'No obvious brand-spoofing patterns.', weight: 0 });
  }

  if (LOOKALIKE_CHARS.test(host)) {
    results.push({ label: 'Lookalike characters', passed: false, detail: 'Contains foreign-alphabet characters that mimic English letters.', weight: 2 });
    score += 2;
  } else {
    results.push({ label: 'Lookalike characters', passed: true, detail: 'No deceptive characters in domain.', weight: 0 });
  }

  const dotCount = host.split('.').length - 1;
  if (dotCount > 3) {
    results.push({ label: 'Subdomain depth', passed: false, detail: `${dotCount} dots in the domain — scammers stack subdomains to mimic real brands.`, weight: 1 });
    score += 1;
  } else {
    results.push({ label: 'Subdomain depth', passed: true, detail: 'Subdomain depth is reasonable.', weight: 0 });
  }

  // mention of money/prizes/verify in path
  if (/(verify|account|prize|reward|gift|claim|update|secure|signin|login)/i.test(fullUrl) && score > 0) {
    results.push({ label: 'Suspicious keywords in path', passed: false, detail: 'URL path contains words common in scams (verify, prize, claim).', weight: 1 });
    score += 1;
  }

  let verdict: Severity = 'safe';
  if (score >= 3) verdict = 'danger';
  else if (score >= 1) verdict = 'caution';

  return { results, verdict, score };
}

function VerdictBadge({ verdict }: { verdict: Severity }) {
  const styles = {
    safe: { wrap: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800', icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />, title: 'Looks OK', text: 'No common red flags. Still — only scan QR codes from trusted sources.', titleClass: 'text-emerald-900 dark:text-emerald-100', textClass: 'text-emerald-800/80 dark:text-emerald-200/80' },
    caution: { wrap: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800', icon: <AlertTriangle className="h-6 w-6 text-amber-600" />, title: 'Proceed with caution', text: 'Some warning signs. Verify the source before continuing.', titleClass: 'text-amber-900 dark:text-amber-100', textClass: 'text-amber-800/80 dark:text-amber-200/80' },
    danger: { wrap: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800', icon: <ShieldAlert className="h-6 w-6 text-red-600" />, title: 'Red flags detected', text: 'Multiple warning signs — we recommend you do not visit this link.', titleClass: 'text-red-900 dark:text-red-100', textClass: 'text-red-800/80 dark:text-red-200/80' },
  }[verdict];
  return (
    <div className={`flex items-center gap-3 p-4 rounded-xl border ${styles.wrap}`}>
      <div className="flex-shrink-0">{styles.icon}</div>
      <div>
        <p className={`font-semibold ${styles.titleClass}`}>{styles.title}</p>
        <p className={`text-sm ${styles.textClass}`}>{styles.text}</p>
      </div>
    </div>
  );
}

const QR_SCAMS = [
  { title: 'Parking meter QR scams', detail: 'Stickers placed over real parking meter QR codes redirect to fake payment pages that steal card info. Pay through the city app or with the meter directly.' },
  { title: 'Restaurant menu overlays', detail: 'Fake QR stickers placed on top of real menus on tables route you to phishing pages or "tip" sites. Ask the host for the menu URL or use a paper menu.' },
  { title: 'Gift / prize QR mailers', detail: 'A postcard arrives saying you won something — scan to claim. Almost always a phishing or malware page.' },
  { title: '"Verify your account" flyers', detail: 'Posted on doors or sent in mail asking you to "verify" with a QR. Real banks and utilities never do this.' },
  { title: 'Crypto wallet QR swaps', detail: 'Some malware swaps a wallet address QR for the attacker\'s. Always verify wallet addresses by other means.' },
];

const SAFE_CASES = [
  { title: 'Official company packaging', detail: 'Codes printed onto sealed retail packaging are usually safe — but still check the URL preview matches the brand.' },
  { title: 'Restaurant tables you trust', detail: 'If the QR is laser-etched or printed into the table — likely fine. Loose stickers, especially overlapping older ones — skip.' },
  { title: 'Tickets from trusted sellers', detail: 'Tickets from Ticketmaster, AXS, the venue, or your airline app — fine. Tickets forwarded by strangers — verify the sender first.' },
  { title: 'Your own saved QRs', detail: 'Codes you generated yourself for sharing Wi-Fi or contact info are safe.' },
];

const RED_FLAGS = [
  'It is a sticker placed over another sticker',
  'It arrived in unsolicited mail',
  'It promises money, prizes, or refunds',
  'The decoded URL is shortened (bit.ly, tinyurl) or unfamiliar',
  'It urges you to act quickly',
  'It asks for payment, card details, or login info',
];

const EXAMPLES: { label: string; url: string }[] = [
  { label: 'Real Apple support', url: 'https://support.apple.com' },
  { label: 'Shortened link from a flyer', url: 'https://bit.ly/3claim' },
  { label: 'Fake parking payment', url: 'http://parking-pay-now.xyz/meter/4421' },
];

export default function QrCodeExplainer() {
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
        title="What Does This QR Code Do? — QR Code Safety Check | TekSure"
        description="QR codes are links in disguise. Decode safely, paste the URL here, and find out before you scan."
        path="/tools/qr-code-explainer"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'QR Code Safety Check' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center flex-shrink-0">
                <QrCode className="h-6 w-6 text-purple-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Before You Scan — Understand Where That QR Code Takes You</h1>
            <p className="text-muted-foreground text-lg">
              QR codes are links in disguise. Scammers hide bad URLs inside them. Here is how to check safely.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl space-y-8">
          {/* How to decode */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-purple-600" aria-hidden="true" />
                3 Ways to Check a QR Code Before Scanning
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <p className="font-semibold text-sm mb-1">On iPhone</p>
                <p className="text-sm text-muted-foreground">Open the Camera app and point it at the QR code. iOS shows the URL as a banner first — it does not open automatically. Read the URL. If it looks wrong, do not tap.</p>
              </div>
              <div className="rounded-lg border p-4">
                <p className="font-semibold text-sm mb-1">On Android</p>
                <p className="text-sm text-muted-foreground">Use Google Lens (built into the Camera app on most Androids). It previews the URL before opening. If your phone auto-opens links, switch to Lens for QR codes.</p>
              </div>
              <div className="rounded-lg border p-4">
                <p className="font-semibold text-sm mb-1">Use a desktop QR decoder</p>
                <p className="text-sm text-muted-foreground">If you suspect a QR is malicious, take a photo and upload it to a decoder website like qrserver.com or qr.io on a computer. Read the URL there before deciding to visit.</p>
              </div>
            </CardContent>
          </Card>

          {/* URL paste */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Paste the decoded URL here</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="url"
                  placeholder="https://example.com/..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && run(input)}
                  className="text-base"
                  aria-label="Decoded URL"
                />
                <Button onClick={() => run(input)} className="sm:w-auto">
                  <Search className="h-4 w-4 mr-2" aria-hidden="true" /> Check
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {EXAMPLES.map((ex) => (
                  <button
                    key={ex.url}
                    onClick={() => run(ex.url)}
                    className="text-xs px-3 py-1.5 rounded-full border hover:border-primary hover:bg-muted/50 transition-colors"
                  >
                    {ex.label}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {analysis && (
            <Card>
              <CardHeader><CardTitle className="text-lg">Result</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <VerdictBadge verdict={analysis.verdict} />
                <div className="space-y-2">
                  {analysis.results.map((r, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-lg border">
                      <div className="flex-shrink-0 mt-0.5">
                        {r.passed ? <Check className="h-5 w-5 text-emerald-600" /> : r.weight === 2 ? <X className="h-5 w-5 text-red-600" /> : <AlertTriangle className="h-5 w-5 text-amber-600" />}
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

          {/* Common scams */}
          <Card>
            <CardHeader><CardTitle className="text-lg">QR Code Scams You Should Know</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {QR_SCAMS.map((s) => (
                <div key={s.title} className="rounded-lg border p-4">
                  <p className="font-semibold text-sm mb-1">{s.title}</p>
                  <p className="text-sm text-muted-foreground">{s.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Safe cases */}
          <Card>
            <CardHeader><CardTitle className="text-lg">When QR Codes Are Safe</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {SAFE_CASES.map((s) => (
                <div key={s.title} className="flex gap-3">
                  <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-sm">{s.title}</p>
                    <p className="text-sm text-muted-foreground">{s.detail}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Skip it if */}
          <Card className="border-red-200 dark:border-red-800/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" /> Skip it if...</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {RED_FLAGS.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <X className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="text-sm text-muted-foreground">
            Want a deeper link check?{' '}
            <a href="/tools/url-safety-checker" className="text-blue-600 hover:underline inline-flex items-center gap-1">
              Try the URL Safety Checker <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
