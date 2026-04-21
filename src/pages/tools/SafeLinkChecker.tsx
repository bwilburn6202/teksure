import { useState } from 'react';
import {
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  Shield,
  Link2,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  ExternalLink,
  RotateCcw,
  Lock,
  LockOpen,
  Eye,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

/* ── Types ───────────────────────────────── */
type RiskLevel = 'safe' | 'caution' | 'warning' | 'danger';
type FindingKind = 'good' | 'caution' | 'warning' | 'danger' | 'info';

interface Finding {
  kind: FindingKind;
  title: string;
  detail: string;
}

interface Analysis {
  input: string;
  parsed: URL | null;
  parseError: string | null;
  findings: Finding[];
  risk: RiskLevel;
  score: number; // 0 = safe, higher = riskier
}

/* ── Reference lists ─────────────────────── */
// URL shorteners — not malicious on their own, but they hide the real destination.
const URL_SHORTENERS = [
  'bit.ly', 'tinyurl.com', 't.co', 'goo.gl', 'ow.ly', 'is.gd', 'buff.ly',
  'adf.ly', 'shorte.st', 'cutt.ly', 'rebrand.ly', 'tiny.cc', 'bl.ink',
  'rb.gy', 'tr.im', 'bit.do', 'soo.gd', 'lnkd.in', 'youtu.be',
  'fb.me', 'wp.me', 'mcaf.ee', 'x.co', 'v.gd', 'qr.net',
];

// Well-known, legitimate sites — if the hostname (or a subdomain of it) matches exactly,
// we can give a cautiously positive signal. We still remind users to double-check.
const KNOWN_SAFE_DOMAINS = [
  'google.com', 'youtube.com', 'gmail.com',
  'amazon.com', 'amazon.co.uk', 'amazon.ca',
  'apple.com', 'icloud.com',
  'microsoft.com', 'outlook.com', 'live.com', 'office.com', 'bing.com',
  'facebook.com', 'instagram.com', 'whatsapp.com', 'messenger.com',
  'x.com', 'twitter.com',
  'linkedin.com', 'github.com',
  'netflix.com', 'hulu.com', 'disneyplus.com', 'spotify.com',
  'paypal.com', 'venmo.com',
  'wikipedia.org', 'reddit.com',
  'zoom.us', 'dropbox.com',
  'nytimes.com', 'bbc.com', 'bbc.co.uk', 'cnn.com', 'reuters.com',
  'teksure.com',
];

// TLDs frequently abused for free, throwaway phishing sites.
const SUSPICIOUS_TLDS = [
  'xyz', 'tk', 'ml', 'ga', 'cf', 'gq', 'top', 'work', 'click',
  'country', 'stream', 'download', 'loan', 'review', 'party',
  'science', 'racing', 'win', 'men', 'date', 'zip', 'mov',
];

// Words and phrases commonly seen in phishing URLs.
const PHISHING_KEYWORDS = [
  'verify', 'verification', 'account-suspended', 'account-locked',
  'urgent', 'confirm', 'update-account', 'secure-login',
  'signin-alert', 'unusual-activity', 'payment-failed',
  'invoice', 'reactivate', 'reset-password-now',
  'free-gift', 'claim-prize', 'you-won', 'limited-offer',
  'wallet-connect', 'unlock-account', 'security-check',
];

/* ── Lookalike / homograph detection ─────── */
// Characters that are often used to impersonate ASCII letters.
const HOMOGLYPH_REGEX = /[\u0400-\u04FF\u0370-\u03FF\u00C0-\u00FF]/; // Cyrillic, Greek, accented Latin
const PUNYCODE_PREFIX = 'xn--';

// Very rough "looks like" check — collapses common visual confusions.
function looksLikeCheck(host: string): string[] {
  const warnings: string[] = [];
  const lower = host.toLowerCase();

  // rn → m, vv → w, cl → d, 0 → o, 1 → l, I → l
  const normalized = lower
    .replace(/rn/g, 'm')
    .replace(/vv/g, 'w')
    .replace(/cl/g, 'd')
    .replace(/0/g, 'o')
    .replace(/1/g, 'l');

  for (const safe of KNOWN_SAFE_DOMAINS) {
    if (lower === safe) return warnings; // exact match — skip
    if (lower.endsWith('.' + safe)) return warnings; // subdomain of safe — skip
    // only test root-ish domains (e.g. "paypaI.com") to avoid false positives
    if (normalized === safe && lower !== safe) {
      warnings.push(`The address looks almost identical to "${safe}" — this is a common trick where scammers swap letters that look the same.`);
    }
  }
  return warnings;
}

/* ── Main analyzer ───────────────────────── */
function analyze(rawInput: string): Analysis {
  const input = rawInput.trim();
  const findings: Finding[] = [];

  if (!input) {
    return {
      input,
      parsed: null,
      parseError: 'No link to check yet.',
      findings: [],
      risk: 'safe',
      score: 0,
    };
  }

  // Allow pasting without a protocol — add http:// so URL() parses it.
  let toParse = input;
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(toParse)) {
    toParse = 'http://' + toParse;
  }

  let parsed: URL | null = null;
  try {
    parsed = new URL(toParse);
  } catch {
    return {
      input,
      parsed: null,
      parseError: "That doesn't look like a valid web address. Try pasting the full link (it usually starts with http:// or https://).",
      findings: [],
      risk: 'safe',
      score: 0,
    };
  }

  const host = parsed.hostname.toLowerCase();
  const path = parsed.pathname.toLowerCase();
  const search = parsed.search.toLowerCase();
  const full = (host + path + search).toLowerCase();

  let score = 0;

  /* ── @ symbol in URL — highly suspicious, hides real destination ── */
  if (input.includes('@') && !input.startsWith('mailto:')) {
    const beforeAt = input.split('@')[0];
    if (/https?:\/\//i.test(beforeAt)) {
      findings.push({
        kind: 'danger',
        title: 'The @ symbol hides the real destination',
        detail: 'This link uses an old trick where everything before the @ is ignored by your browser. The real site is whatever comes after the @. Scammers use this to make links look like they go to a trusted site when they don\'t.',
      });
      score += 40;
    }
  }

  /* ── IP address instead of a domain name ── */
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host) || /^\[[0-9a-f:]+\]$/i.test(parsed.hostname)) {
    findings.push({
      kind: 'danger',
      title: 'Link uses a numeric address, not a website name',
      detail: 'Real companies use names (like amazon.com), not strings of numbers (like 192.168.1.42). A numeric address is almost always a sign of something shady — often a temporary scam server.',
    });
    score += 35;
  }

  /* ── HTTPS vs HTTP ── */
  if (parsed.protocol === 'https:') {
    findings.push({
      kind: 'good',
      title: 'Connection is encrypted (HTTPS)',
      detail: 'The little padlock icon will show in your browser. Your typing is scrambled so it can\'t be read in transit. This alone does NOT mean the site is trustworthy — it just means nobody can eavesdrop.',
    });
  } else if (parsed.protocol === 'http:') {
    findings.push({
      kind: 'warning',
      title: 'Connection is NOT encrypted (HTTP, not HTTPS)',
      detail: 'Anyone between you and this site — on public WiFi, for example — could read what you type, including passwords. Real banks, shopping sites, and login pages always use HTTPS.',
    });
    score += 15;
  } else {
    findings.push({
      kind: 'caution',
      title: `Unusual link type: ${parsed.protocol}`,
      detail: 'This isn\'t a normal web address. Be very careful — it could be trying to open an app or do something unexpected.',
    });
    score += 20;
  }

  /* ── Punycode / non-Latin characters ── */
  if (host.includes(PUNYCODE_PREFIX)) {
    findings.push({
      kind: 'danger',
      title: 'Address uses non-English characters (punycode)',
      detail: 'Letters from other alphabets can look identical to English letters but lead somewhere completely different. Real Western companies almost never do this — treat this as a strong warning sign.',
    });
    score += 30;
  }
  if (HOMOGLYPH_REGEX.test(parsed.hostname)) {
    findings.push({
      kind: 'warning',
      title: 'Address contains characters that look like English letters',
      detail: 'Mixed-alphabet tricks (like a Russian "а" that looks like an English "a") are a classic phishing tactic. Double-check that the domain is really what you think it is.',
    });
    score += 20;
  }

  /* ── Lookalike domains ── */
  for (const warn of looksLikeCheck(host)) {
    findings.push({
      kind: 'warning',
      title: 'Address looks like a lookalike of a real site',
      detail: warn,
    });
    score += 25;
  }

  /* ── URL shorteners ── */
  const matchedShortener = URL_SHORTENERS.find(s => host === s || host.endsWith('.' + s));
  if (matchedShortener) {
    findings.push({
      kind: 'caution',
      title: `This is a shortened link (${matchedShortener})`,
      detail: 'Shortened links hide where they actually go. They\'re not always bad — they\'re common in texts and on social media — but you can\'t tell the real destination until you click. When in doubt, ask the sender what it points to, or use a link-expander tool.',
    });
    score += 10;
  }

  /* ── Known-safe domain ── */
  const safeMatch = KNOWN_SAFE_DOMAINS.find(d => host === d || host.endsWith('.' + d));
  if (safeMatch) {
    findings.push({
      kind: 'good',
      title: `This is a recognized domain (${safeMatch})`,
      detail: 'The address belongs to a well-known company. Still, double-check the spelling carefully — scammers often register near-identical-looking addresses.',
    });
    // Only lighten the score if nothing suspicious showed up alongside it
    if (score < 10) score = Math.max(0, score - 5);
  }

  /* ── Suspicious TLDs ── */
  const tldParts = host.split('.');
  const tld = tldParts[tldParts.length - 1];
  if (SUSPICIOUS_TLDS.includes(tld)) {
    findings.push({
      kind: 'warning',
      title: `Address ends in ".${tld}" — often used by scammers`,
      detail: 'Some web address endings are free or very cheap, which makes them popular with people setting up throwaway scam sites. A legitimate business usually uses .com, .org, .net, or a country-code ending (.uk, .ca, .au, etc.).',
    });
    score += 20;
  }

  /* ── Excessive subdomains ── */
  // Something like secure.login.paypal.com.evil.xyz — the "real" part is the last two chunks
  const subdomainCount = tldParts.length - 2; // crude
  if (subdomainCount >= 3) {
    findings.push({
      kind: 'warning',
      title: 'Address has an unusual number of dots',
      detail: 'Scammers build long subdomains to make a link look like it belongs to a real company when it doesn\'t. Look at the two parts right before the first single slash — that\'s the true owner of the site.',
    });
    score += 15;
  }

  /* ── Phishing keywords ── */
  const matchedKeywords = PHISHING_KEYWORDS.filter(k => full.includes(k));
  if (matchedKeywords.length > 0) {
    findings.push({
      kind: 'warning',
      title: 'Address contains urgency or alarm words',
      detail: `We spotted: ${matchedKeywords.slice(0, 3).map(k => `"${k}"`).join(', ')}. Legitimate companies rarely put alarm words in their web addresses. These are classic pressure tactics used to get you to click without thinking.`,
    });
    score += 15 * Math.min(matchedKeywords.length, 3);
  }

  /* ── Very long URL ── */
  if (input.length > 150) {
    findings.push({
      kind: 'caution',
      title: 'The link is very long',
      detail: 'Unusually long addresses can be a way to hide the real destination inside a jumble of characters. Not automatically bad — but worth a second look before clicking.',
    });
    score += 5;
  }

  /* ── Nothing obviously wrong ── */
  if (findings.length === 0 || (findings.length === 1 && findings[0].kind === 'good')) {
    findings.push({
      kind: 'info',
      title: "We didn't spot any obvious red flags",
      detail: 'This link passed our basic checks, but no automated tool can promise a site is safe. If you didn\'t ask for this link, or it came from someone you don\'t know, treat it with caution anyway.',
    });
  }

  /* ── Bucket the score into a risk level ── */
  let risk: RiskLevel;
  if (score >= 40) risk = 'danger';
  else if (score >= 20) risk = 'warning';
  else if (score >= 8) risk = 'caution';
  else risk = 'safe';

  return { input, parsed, parseError: null, findings, risk, score };
}

/* ── Risk-level styling helpers ──────────── */
const RISK_META: Record<RiskLevel, {
  label: string;
  headline: string;
  icon: typeof Shield;
  badgeClass: string;
  cardClass: string;
  textClass: string;
  iconWrapClass: string;
  summary: string;
}> = {
  safe: {
    label: 'Looks safe',
    headline: 'No obvious warning signs',
    icon: ShieldCheck,
    badgeClass: 'bg-green-600 text-white',
    cardClass: 'border-green-300 bg-green-50 dark:bg-green-950/30 dark:border-green-800',
    textClass: 'text-green-800 dark:text-green-200',
    iconWrapClass: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
    summary: 'Our basic checks didn\'t find red flags. You can still be careful — never enter passwords or payment info unless you\'re sure the site is real.',
  },
  caution: {
    label: 'Caution',
    headline: 'A few things to double-check',
    icon: Shield,
    badgeClass: 'bg-yellow-500 text-white',
    cardClass: 'border-yellow-300 bg-yellow-50 dark:bg-yellow-950/30 dark:border-yellow-800',
    textClass: 'text-yellow-900 dark:text-yellow-200',
    iconWrapClass: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300',
    summary: 'Nothing alarming, but we noticed a detail or two worth a second look before clicking. Read the findings below.',
  },
  warning: {
    label: 'Warning',
    headline: 'Be careful with this link',
    icon: ShieldAlert,
    badgeClass: 'bg-orange-500 text-white',
    cardClass: 'border-orange-300 bg-orange-50 dark:bg-orange-950/30 dark:border-orange-800',
    textClass: 'text-orange-900 dark:text-orange-200',
    iconWrapClass: 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300',
    summary: 'We found clear warning signs. Don\'t enter any personal information unless you can confirm the site is real through another way.',
  },
  danger: {
    label: 'Danger',
    headline: "Don't click this link",
    icon: ShieldX,
    badgeClass: 'bg-red-600 text-white',
    cardClass: 'border-red-300 bg-red-50 dark:bg-red-950/30 dark:border-red-800',
    textClass: 'text-red-900 dark:text-red-200',
    iconWrapClass: 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300',
    summary: 'This link has strong signs of being a scam or phishing page. Do not click it. If it came from a friend\'s account, their account may have been hacked.',
  },
};

const FINDING_META: Record<FindingKind, {
  icon: typeof Info;
  iconClass: string;
  ringClass: string;
}> = {
  good:    { icon: CheckCircle2,   iconClass: 'text-green-700 dark:text-green-400',   ringClass: 'bg-green-100 dark:bg-green-900/40' },
  info:    { icon: Info,           iconClass: 'text-slate-700 dark:text-slate-300',   ringClass: 'bg-slate-100 dark:bg-slate-800/60' },
  caution: { icon: Eye,            iconClass: 'text-yellow-700 dark:text-yellow-400', ringClass: 'bg-yellow-100 dark:bg-yellow-900/40' },
  warning: { icon: AlertTriangle,  iconClass: 'text-orange-700 dark:text-orange-400', ringClass: 'bg-orange-100 dark:bg-orange-900/40' },
  danger:  { icon: XCircle,        iconClass: 'text-red-700 dark:text-red-400',       ringClass: 'bg-red-100 dark:bg-red-900/40' },
};

/* ── Action-step suggestions per risk level ── */
function getActions(risk: RiskLevel): { title: string; steps: string[] } {
  if (risk === 'safe') {
    return {
      title: 'What to do',
      steps: [
        'You can open this link, but stay alert — even real-looking sites can ask for more than they should.',
        'If the page asks for your password or payment info, stop and go directly to the company\'s known website by typing the address yourself.',
        'Never trust a login page you reached from an email or text — always go to the site through your bookmarks or by typing it in.',
      ],
    };
  }
  if (risk === 'caution') {
    return {
      title: 'What to do',
      steps: [
        'Before clicking, ask the sender directly (through a different channel — a phone call is best) whether they actually sent this link.',
        'If it\'s a shortened link, you can use a link expander (like checkshorturl.com) to preview where it goes.',
        'Don\'t enter any passwords, one-time codes, or credit card numbers on the page this leads to.',
      ],
    };
  }
  if (risk === 'warning') {
    return {
      title: 'What to do',
      steps: [
        'Don\'t click the link until you can confirm it\'s real.',
        'Go to the company\'s official website another way — type it into your browser or use a bookmark you already trust.',
        'If the link came by email or text, do NOT reply. Delete the message, or forward it to reportphishing@apwg.org.',
        'If you already clicked and entered info, change that password right away and check your accounts for anything unexpected.',
      ],
    };
  }
  return {
    title: 'What to do',
    steps: [
      'Do not click this link. Close the message or tab now.',
      'If this came from someone you know, their account may be hacked — contact them through a different channel (a phone call) to warn them.',
      'If you already clicked, stop entering information immediately. Change passwords for any account you may have typed. Run a scan with your antivirus.',
      'Report the message to the platform it came from (your email provider, phone carrier, or social media app all have a "report phishing" option).',
    ],
  };
}

/* ── Page component ──────────────────────── */
export default function SafeLinkChecker() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState<Analysis | null>(null);

  function runCheck() {
    setResult(analyze(value));
    // Smooth-scroll the result into view on small screens
    setTimeout(() => {
      const el = document.getElementById('safe-link-result');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }

  function reset() {
    setValue('');
    setResult(null);
  }

  const meta = result ? RISK_META[result.risk] : null;
  const RiskIcon = meta?.icon;
  const actions = result ? getActions(result.risk) : null;

  return (
    <>
      <SEOHead
        title="Safe Link Checker | TekSure"
        description="Paste any suspicious link and get a plain-language safety analysis — privacy-first, no tracking, no server calls. Spots shorteners, lookalikes, phishing keywords and more."
        path="/tools/safe-link-checker"
      />
      <Navbar />
      <main id="main-content" className="container py-12 min-h-[80vh] max-w-3xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-primary/10 text-primary mb-5">
            <ShieldCheck className="h-12 w-12" aria-hidden="true" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            Is this link safe?
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
            Paste any link below and we'll check it for common warning signs — shortened addresses,
            lookalike names, phishing tricks, and more.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4" aria-hidden="true" />
            <span>
              100% private — the check runs right in your browser. Nothing is sent to us or anyone else.
            </span>
          </div>
        </div>

        {/* Input card */}
        <Card className="mb-6">
          <CardContent className="p-5 sm:p-6">
            <label htmlFor="link-input" className="block text-lg font-semibold mb-2">
              Paste the link here
            </label>
            <p className="text-sm text-muted-foreground mb-3">
              You can paste the full address, or type it by hand. It doesn't need to start with "https://".
            </p>
            <Textarea
              id="link-input"
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="https://example.com/suspicious-page"
              className="text-base sm:text-lg min-h-[90px] font-mono"
              autoComplete="off"
              spellCheck={false}
              aria-describedby="link-input-hint"
            />
            <p id="link-input-hint" className="sr-only">
              The link you paste will be analyzed locally in your browser. No data is sent to a server.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <Button
                size="lg"
                onClick={runCheck}
                disabled={!value.trim()}
                className="text-base gap-2"
              >
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                Check this link
              </Button>
              {(value || result) && (
                <Button size="lg" variant="outline" onClick={reset} className="gap-2">
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  Start over
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Parse error */}
        {result?.parseError && (
          <Card className="mb-6 border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-700 dark:text-amber-400 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold text-amber-900 dark:text-amber-200 mb-1">Couldn't read that as a link</p>
                <p className="text-sm text-amber-900/90 dark:text-amber-200/90">{result.parseError}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Result */}
        {result && meta && RiskIcon && !result.parseError && (
          <div id="safe-link-result">
            {/* Verdict card */}
            <Card className={`mb-6 border-2 ${meta.cardClass}`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`shrink-0 rounded-2xl p-4 ${meta.iconWrapClass}`}>
                    <RiskIcon className="h-10 w-10" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Badge className={`mb-2 text-sm ${meta.badgeClass}`}>{meta.label}</Badge>
                    <h2 className={`text-2xl sm:text-3xl font-bold leading-tight ${meta.textClass}`}>
                      {meta.headline}
                    </h2>
                  </div>
                </div>
                <p className={`text-base sm:text-lg ${meta.textClass}`}>{meta.summary}</p>

                {result.parsed && (
                  <div className="mt-5 rounded-xl bg-background/60 border border-border/50 p-4 text-sm font-mono break-all">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">The link we checked</div>
                    <div className="mb-2">{result.input}</div>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
                      <span>
                        <strong>Site name:</strong> {result.parsed.hostname}
                      </span>
                      <span className="flex items-center gap-1">
                        {result.parsed.protocol === 'https:' ? (
                          <><Lock className="h-3 w-3" /> Encrypted (HTTPS)</>
                        ) : (
                          <><LockOpen className="h-3 w-3" /> Not encrypted</>
                        )}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Findings */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" aria-hidden="true" />
                What we found
              </h3>
              <div className="grid gap-3">
                {result.findings.map((f, i) => {
                  const fm = FINDING_META[f.kind];
                  const FIcon = fm.icon;
                  return (
                    <Card key={i}>
                      <CardContent className="p-4 flex gap-3">
                        <div className={`shrink-0 rounded-full p-2 ${fm.ringClass}`}>
                          <FIcon className={`h-5 w-5 ${fm.iconClass}`} aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-base leading-snug mb-1">{f.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{f.detail}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            {actions && (
              <Card className="mb-6 border-primary/30 bg-primary/5">
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" aria-hidden="true" />
                    {actions.title}
                  </h3>
                  <ol className="space-y-3">
                    {actions.steps.map((s, idx) => (
                      <li key={idx} className="flex gap-3 text-base">
                        <span className="shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                          {idx + 1}
                        </span>
                        <span className="pt-0.5">{s}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Golden-rule reminder — always shown */}
        <Card className="mb-6 border-2 border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800">
          <CardContent className="p-5 flex gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-700 dark:text-amber-400 shrink-0" aria-hidden="true" />
            <div>
              <p className="font-semibold text-amber-900 dark:text-amber-200 mb-1">The golden rule</p>
              <p className="text-sm text-amber-900/90 dark:text-amber-200/90">
                Never enter a password, one-time code, or credit card number if you're not 100% sure
                the site is real. No automatic checker can make that promise for you — when in doubt,
                type the company's real address into your browser by hand.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Related resources */}
        <Card className="mb-6">
          <CardContent className="p-5">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Link2 className="h-5 w-5 text-primary" aria-hidden="true" />
              Next steps
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Worried you may have already clicked a bad link in the past? Check whether your email
              address or password has shown up in a known data leak.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" asChild>
                <a href="https://haveibeenpwned.com" target="_blank" rel="noreferrer" className="gap-2">
                  Check Have I Been Pwned <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/tools/password-leak-checker" className="gap-2">
                  TekSure password leak checker
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/tools/phishing-scanner" className="gap-2">
                  Is this email a phishing scam?
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* How the checker works — transparency note */}
        <div className="rounded-xl bg-muted/60 p-5 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Eye className="h-4 w-4" aria-hidden="true" /> How this works
          </p>
          <p className="mb-2">
            Everything happens inside your browser. We don't send the link to a server, we don't save
            it, and we don't track you. This tool looks at the pattern of the address itself — things
            like the site name, whether it's encrypted, and whether it uses common scam tricks.
          </p>
          <p>
            Because no data leaves your device, the checker can't tell you whether a specific site has
            been reported as malicious — for that, services like Google Safe Browsing run a fuller
            check when you actually visit the site in Chrome, Edge, or Firefox.
          </p>
        </div>

      </main>
      <Footer />
    </>
  );
}
