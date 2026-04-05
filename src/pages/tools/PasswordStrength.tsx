import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Check, X, ShieldCheck, Copy, RefreshCw, AlertTriangle, Info, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';

// ── Common weak passwords (from cyber-ai-toolkit) ───────────────────────────
const COMMON_PASSWORDS = new Set([
  "password", "123456", "123456789", "12345678", "12345", "1234567",
  "qwerty", "abc123", "monkey", "1234567890", "123123", "dragon",
  "iloveyou", "master", "sunshine", "ashley", "football", "shadow",
  "princess", "letmein", "michael", "login", "welcome", "admin",
  "passw0rd", "hello", "charlie", "donald", "trustno1", "batman",
  "access", "thunder", "starwars", "mustang", "dallas", "yankees",
  "000000", "111111", "password1", "password123", "qwerty123",
  "aa12345678", "lovely", "hottie", "freedom", "whatever",
  "654321", "7777777", "123321", "computer", "internet",
  "soccer", "baseball", "hockey", "ranger", "buster",
  "p@ssw0rd", "p@ssword", "passw0rd!", "admin123", "root",
  "toor", "changeme", "default", "guest", "test", "temp",
]);

// ── Keyboard patterns ────────────────────────────────────────────────────────
const KEYBOARD_PATTERNS = [
  "qwerty", "qwertz", "azerty", "asdf", "zxcv", "1234", "2345",
  "3456", "4567", "5678", "6789", "7890", "0987", "9876", "8765",
  "7654", "6543", "5432", "4321", "qazwsx", "1qaz2wsx", "zaq1",
];

// ── Leet speak map ───────────────────────────────────────────────────────────
const LEET_MAP: Record<string, string> = {
  "@": "a", "4": "a", "3": "e", "1": "i", "!": "i",
  "0": "o", "5": "s", "$": "s", "7": "t", "+": "t",
};

function deleet(password: string): string {
  let result = password.toLowerCase();
  for (const [leet, normal] of Object.entries(LEET_MAP)) {
    result = result.split(leet).join(normal);
  }
  return result;
}

// ── Entropy calculation (from cyber-ai-toolkit) ─────────────────────────────
function calculateEntropy(password: string): number {
  let charsetSize = 0;
  if (/[a-z]/.test(password)) charsetSize += 26;
  if (/[A-Z]/.test(password)) charsetSize += 26;
  if (/[0-9]/.test(password)) charsetSize += 10;
  if (/[^a-zA-Z0-9]/.test(password)) charsetSize += 33;
  if (charsetSize === 0) return 0;
  return password.length * Math.log2(charsetSize);
}

// ── Format seconds to human-readable time ───────────────────────────────────
function formatTime(seconds: number): string {
  if (seconds < 1) return "Instant";
  if (seconds < 60) return `${Math.round(seconds)} seconds`;
  if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
  if (seconds < 86400) return `${(seconds / 3600).toFixed(1)} hours`;
  if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
  if (seconds < 31536000 * 100) return `${(seconds / 31536000).toFixed(1)} years`;
  if (seconds < 31536000 * 1000000) return `${Math.round(seconds / 31536000).toLocaleString()} years`;
  const exponent = Math.floor(Math.log10(seconds / 31536000));
  return `10^${exponent} years`;
}

// ── Crack time estimation across multiple scenarios ─────────────────────────
function estimateCrackTimes(entropyBits: number) {
  const speeds: Record<string, number> = {
    "Online attack (10/sec)": 10,
    "Fast hash offline (10B/sec)": 10_000_000_000,
    "Slow hash offline (10K/sec)": 10_000,
    "Supercomputer (1T/sec)": 1_000_000_000_000,
  };
  const combinations = Math.pow(2, entropyBits);
  const results: Record<string, string> = {};
  for (const [name, guessesPerSec] of Object.entries(speeds)) {
    const seconds = combinations / guessesPerSec / 2;
    results[name] = formatTime(seconds);
  }
  return results;
}

// ── Pattern detection (from cyber-ai-toolkit) ───────────────────────────────
type Severity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'INFO';
interface Finding { severity: Severity; message: string; }

function checkPatterns(password: string): Finding[] {
  const findings: Finding[] = [];
  const lower = password.toLowerCase();
  const deleeted = deleet(password);

  if (COMMON_PASSWORDS.has(lower) || COMMON_PASSWORDS.has(deleeted)) {
    findings.push({ severity: 'CRITICAL', message: 'This password is in the common passwords list' });
  }
  for (const pattern of KEYBOARD_PATTERNS) {
    if (lower.includes(pattern)) {
      findings.push({ severity: 'HIGH', message: `Contains keyboard pattern: "${pattern}"` });
      break;
    }
  }
  if (/(.)\1{2,}/.test(password)) {
    const match = password.match(/(.)\1{2,}/);
    findings.push({ severity: 'MEDIUM', message: `Repeated character: "${match?.[0]}"` });
  }
  for (let i = 0; i < password.length - 2; i++) {
    if (password.charCodeAt(i) + 1 === password.charCodeAt(i + 1) &&
        password.charCodeAt(i + 1) + 1 === password.charCodeAt(i + 2)) {
      findings.push({ severity: 'MEDIUM', message: 'Sequential characters detected (like "abc" or "123")' });
      break;
    }
  }
  if (/^[a-zA-Z]+\d{1,4}$/.test(password)) {
    findings.push({ severity: 'MEDIUM', message: 'Word + number pattern (like "password123")' });
  }
  if (/^[a-zA-Z]+[^a-zA-Z0-9]{1,2}$/.test(password)) {
    findings.push({ severity: 'MEDIUM', message: 'Word + symbol pattern (like "password!")' });
  }
  if (/(19|20)\d{2}/.test(password)) {
    findings.push({ severity: 'LOW', message: 'Contains what looks like a year' });
  }
  if (/^[a-zA-Z]+$/.test(password) && (password === password.toLowerCase() || password === password.toUpperCase())) {
    findings.push({ severity: 'LOW', message: 'Single case letters only' });
  }
  return findings;
}

// ── Full password analysis (ported from cyber-ai-toolkit) ───────────────────
function analyzePassword(password: string) {
  const findings: Finding[] = [];
  let score = 100;
  const length = password.length;

  // Length check
  if (length < 6) {
    score -= 40;
    findings.push({ severity: 'CRITICAL', message: `Very short (${length} characters) — at least 12 recommended` });
  } else if (length < 8) {
    score -= 30;
    findings.push({ severity: 'HIGH', message: `Too short (${length} characters) — at least 12 recommended` });
  } else if (length < 12) {
    score -= 15;
    findings.push({ severity: 'MEDIUM', message: `Could be longer (${length} characters) — 16+ recommended` });
  } else if (length >= 16) {
    findings.push({ severity: 'INFO', message: `Good length (${length} characters)` });
  }

  // Character diversity
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);
  const diversity = [hasLower, hasUpper, hasDigit, hasSpecial].filter(Boolean).length;

  if (diversity < 2) {
    score -= 25;
    findings.push({ severity: 'HIGH', message: 'Only one character type — use a mix of uppercase, lowercase, numbers, and symbols' });
  } else if (diversity < 3) {
    score -= 10;
    findings.push({ severity: 'MEDIUM', message: 'Missing some character types — add more variety' });
  } else if (diversity === 4) {
    findings.push({ severity: 'INFO', message: 'Good character diversity (uppercase, lowercase, numbers, symbols)' });
  }

  // Entropy
  const entropyBits = calculateEntropy(password);
  if (entropyBits < 28) {
    score -= 30;
    findings.push({ severity: 'CRITICAL', message: `Very low entropy (${entropyBits.toFixed(0)} bits)` });
  } else if (entropyBits < 36) {
    score -= 20;
    findings.push({ severity: 'HIGH', message: `Low entropy (${entropyBits.toFixed(0)} bits)` });
  } else if (entropyBits < 60) {
    score -= 5;
    findings.push({ severity: 'MEDIUM', message: `Moderate entropy (${entropyBits.toFixed(0)} bits)` });
  } else {
    findings.push({ severity: 'INFO', message: `Strong entropy (${entropyBits.toFixed(0)} bits)` });
  }

  // Pattern checks
  const patternFindings = checkPatterns(password);
  for (const f of patternFindings) {
    findings.push(f);
    if (f.severity === 'CRITICAL') score -= 30;
    else if (f.severity === 'HIGH') score -= 15;
    else if (f.severity === 'MEDIUM') score -= 5;
  }

  score = Math.max(score, 0);

  // Crack times
  const crackTimes = estimateCrackTimes(entropyBits);

  // Rating
  let rating: string;
  let ratingColor: string;
  if (score >= 80) { rating = 'STRONG'; ratingColor = 'text-green-500'; }
  else if (score >= 60) { rating = 'MODERATE'; ratingColor = 'text-yellow-500'; }
  else if (score >= 40) { rating = 'WEAK'; ratingColor = 'text-orange-500'; }
  else { rating = 'VERY WEAK'; ratingColor = 'text-red-500'; }

  return { score, rating, ratingColor, length, entropyBits, diversity, crackTimes, findings, hasLower, hasUpper, hasDigit, hasSpecial };
}

// ── Secure password generator (from cyber-ai-toolkit) ───────────────────────
function generateStrongPassword(length = 16): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars[array[i] % chars.length];
  }
  // Ensure all character types are present
  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[^a-zA-Z0-9]/.test(password)) {
    return generateStrongPassword(length);
  }
  return password;
}

const severityStyles: Record<Severity, { bg: string; text: string; icon: typeof AlertTriangle }> = {
  CRITICAL: { bg: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900', text: 'text-red-700 dark:text-red-400', icon: AlertTriangle },
  HIGH: { bg: 'bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-900', text: 'text-orange-700 dark:text-orange-400', icon: AlertTriangle },
  MEDIUM: { bg: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-900', text: 'text-yellow-700 dark:text-yellow-400', icon: Info },
  LOW: { bg: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900', text: 'text-blue-700 dark:text-blue-400', icon: Info },
  INFO: { bg: 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900', text: 'text-green-700 dark:text-green-400', icon: Check },
};

const PasswordStrength = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const analysis = useMemo(() => {
    if (!password) return null;
    return analyzePassword(password);
  }, [password]);

  const barColor = !analysis ? 'bg-muted'
    : analysis.score >= 80 ? 'bg-green-500'
    : analysis.score >= 60 ? 'bg-yellow-500'
    : analysis.score >= 40 ? 'bg-orange-500'
    : 'bg-red-500';

  const handleGenerate = () => {
    const pwd = generateStrongPassword(20);
    setGeneratedPassword(pwd);
    setCopied(false);
  };

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const checkItems = [
    { label: 'At least 12 characters', met: (analysis?.length ?? 0) >= 12 },
    { label: 'Has an uppercase letter', met: analysis?.hasUpper ?? false },
    { label: 'Has a lowercase letter', met: analysis?.hasLower ?? false },
    { label: 'Has a number', met: analysis?.hasDigit ?? false },
    { label: 'Has a special character (!@#$...)', met: analysis?.hasSpecial ?? false },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Password Strength Checker | TekSure"
        description="Test how strong your password is with our advanced analyzer. Get entropy scoring, crack time estimates, pattern detection, and tips to create stronger passwords."
        path="/tools/password-strength"
      />
      <Navbar />

      <section className="border-b">
        <div className="container py-16 md:py-20">
          <div className="max-w-xl mx-auto text-center">
            <ShieldCheck className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Password Strength Checker</h1>
            <p className="text-lg opacity-80">Advanced analysis powered by the Cyber AI Toolkit — nothing is stored or sent anywhere.</p>
          </div>
        </div>
      </section>

      <section className="container py-12 max-w-2xl">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/tools">Tools</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Password Strength</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardContent className="pt-6 space-y-6">
            {/* Password input */}
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter a password to test..."
                className="pr-12 h-12 text-base"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="off"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 min-h-0"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>

            {/* Score and rating */}
            {analysis && (
              <>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Score: {analysis.score}/100</span>
                    <span className={`text-sm font-bold ${analysis.ratingColor}`}>{analysis.rating}</span>
                  </div>
                  <div className="h-3 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${barColor}`}
                      style={{ width: `${analysis.score}%` }}
                    />
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <p className="text-xs text-muted-foreground">Length</p>
                      <p className="text-lg font-bold">{analysis.length}</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <p className="text-xs text-muted-foreground">Entropy</p>
                      <p className="text-lg font-bold">{analysis.entropyBits.toFixed(0)} <span className="text-xs font-normal">bits</span></p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <p className="text-xs text-muted-foreground">Diversity</p>
                      <p className="text-lg font-bold">{analysis.diversity}<span className="text-xs font-normal">/4</span></p>
                    </div>
                  </div>
                </div>

                {/* Requirements checklist */}
                <div className="space-y-2">
                  <p className="text-sm font-medium">Requirements:</p>
                  {checkItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      {item.met ? (
                        <Check className="h-4 w-4 text-green-500 shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground shrink-0" />
                      )}
                      <span className={`text-sm ${item.met ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Findings */}
                {analysis.findings.filter(f => f.severity !== 'INFO').length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Findings:</p>
                    {analysis.findings.filter(f => f.severity !== 'INFO').map((finding, i) => {
                      const style = severityStyles[finding.severity];
                      const Icon = style.icon;
                      return (
                        <div key={i} className={`flex items-start gap-2 p-3 rounded-lg border ${style.bg}`}>
                          <Icon className={`h-4 w-4 shrink-0 mt-0.5 ${style.text}`} />
                          <span className={`text-sm ${style.text}`}>{finding.message}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Crack time estimates */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm font-medium">Estimated Crack Times:</p>
                  </div>
                  <div className="grid gap-2">
                    {Object.entries(analysis.crackTimes).map(([method, time]) => {
                      const isGood = time.includes('year');
                      const isBad = time === 'Instant' || time.includes('second') || time.includes('minute');
                      return (
                        <div key={method} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                          <span className="text-xs text-muted-foreground">{method}</span>
                          <span className={`text-sm font-mono font-medium ${isGood ? 'text-green-500' : isBad ? 'text-red-500' : 'text-yellow-500'}`}>
                            {time}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            <p className="text-xs text-muted-foreground text-center pt-2">
              Your password is checked locally in your browser. Nothing is stored or sent anywhere.
            </p>
          </CardContent>
        </Card>

        {/* Password Generator */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Need a Strong Password?</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-sm text-muted-foreground">
                Generate a random, strong password that would take billions of years to crack.
              </p>
              <Button onClick={handleGenerate} className="gap-2">
                <RefreshCw className="h-4 w-4" />
                Generate Strong Password
              </Button>
              {generatedPassword && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-muted font-mono text-sm break-all">
                  <span className="flex-1">{generatedPassword}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 h-8 w-8"
                    onClick={() => handleCopy(generatedPassword)}
                    aria-label="Copy password"
                  >
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Tips */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Quick Tips for Strong Passwords</h2>
          <div className="grid gap-3">
            {[
              'Use at least 16 characters — longer is stronger',
              'Mix uppercase letters, lowercase letters, numbers, and symbols',
              'Avoid using personal information like names, birthdays, or pet names',
              'Never reuse the same password on more than one account',
              'Use a password manager to store your passwords securely',
              'Enable two-factor authentication (2FA) wherever you can',
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Link to Cyber Toolkit */}
        <div className="mt-8 p-6 rounded-xl border bg-muted/30 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Want more security tools? Check out the full Cyber AI Toolkit.
          </p>
          <Button asChild variant="outline" className="gap-2">
            <Link to="/tools/cyber-toolkit">Open Cyber AI Toolkit</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PasswordStrength;
