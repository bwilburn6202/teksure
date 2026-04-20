import { useMemo, useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Key,
  Info,
  Sparkles,
} from 'lucide-react';

interface StrengthResult {
  score: number; // 0-100
  label: string;
  color: string; // bar color class
  textColor: string;
  checks: { label: string; passed: boolean }[];
  tips: string[];
}

const COMMON_PASSWORDS = [
  'password', 'password1', 'password123', '123456', '12345678', '1234567', '123456789',
  'qwerty', 'abc123', 'letmein', 'monkey', 'iloveyou', 'admin', 'welcome', 'login',
  'princess', 'solo', 'master', 'hello', 'freedom', 'whatever', 'qazwsx', 'trustno1',
  'dragon', 'baseball', 'football', 'shadow', 'superman', 'batman', '000000', '111111',
  '123123', 'sunshine',
];

const SEQUENTIAL_PATTERNS = [
  'abcdef', 'qwerty', 'asdfgh', 'zxcvbn', '123456', '098765', 'qwertyuiop', 'asdfghjkl',
  '1qaz2wsx', 'qazwsx',
];

function analyzePassword(pw: string): StrengthResult {
  if (!pw) {
    return {
      score: 0,
      label: 'Enter a password to check',
      color: 'bg-muted',
      textColor: 'text-muted-foreground',
      checks: [],
      tips: [],
    };
  }

  const lower = pw.toLowerCase();
  const hasLower = /[a-z]/.test(pw);
  const hasUpper = /[A-Z]/.test(pw);
  const hasNumber = /[0-9]/.test(pw);
  const hasSymbol = /[^A-Za-z0-9]/.test(pw);
  const length = pw.length;

  const isCommon = COMMON_PASSWORDS.some(c => lower === c || lower.includes(c));
  const hasSequential = SEQUENTIAL_PATTERNS.some(p => lower.includes(p));
  const onlyLetters = /^[A-Za-z]+$/.test(pw);
  const onlyNumbers = /^[0-9]+$/.test(pw);
  const hasRepeated = /(.)\1{2,}/.test(pw); // 3+ same char in a row

  let score = 0;

  // Length scoring
  if (length >= 20) score += 40;
  else if (length >= 16) score += 30;
  else if (length >= 12) score += 20;
  else if (length >= 8) score += 10;
  else score += 2;

  // Character variety
  if (hasLower) score += 8;
  if (hasUpper) score += 10;
  if (hasNumber) score += 10;
  if (hasSymbol) score += 15;

  // Unique characters bonus
  const uniqueChars = new Set(pw).size;
  if (uniqueChars >= 10) score += 10;
  else if (uniqueChars >= 6) score += 5;

  // Penalties
  if (isCommon) score -= 60;
  if (hasSequential) score -= 25;
  if (onlyLetters) score -= 20;
  if (onlyNumbers) score -= 30;
  if (hasRepeated) score -= 10;
  if (length < 8) score -= 20;

  score = Math.max(0, Math.min(100, score));

  const checks = [
    { label: 'At least 12 characters long', passed: length >= 12 },
    { label: 'Has uppercase letters', passed: hasUpper },
    { label: 'Has lowercase letters', passed: hasLower },
    { label: 'Has numbers', passed: hasNumber },
    { label: 'Has symbols (!@#$ etc.)', passed: hasSymbol },
    { label: 'Not a common password', passed: !isCommon },
    { label: 'No keyboard patterns (qwerty, 1234)', passed: !hasSequential },
    { label: 'No long repeated characters', passed: !hasRepeated },
  ];

  const tips: string[] = [];
  if (length < 12) tips.push('Make it longer — aim for at least 12, ideally 16+ characters');
  if (!hasSymbol) tips.push('Add a symbol like !, @, #, $, or %');
  if (!hasUpper) tips.push('Mix in some uppercase letters');
  if (!hasNumber) tips.push('Add a number or two');
  if (isCommon) tips.push('This is on every leaked password list — replace it entirely');
  if (hasSequential) tips.push('Avoid keyboard rows or sequences (like "qwerty" or "1234")');
  if (onlyLetters) tips.push('Letters alone are weak — add numbers and symbols');
  if (onlyNumbers) tips.push('Numbers alone are very weak — add letters and symbols');
  if (hasRepeated) tips.push('Avoid repeating the same character multiple times in a row');

  let label = 'Very weak';
  let color = 'bg-red-500';
  let textColor = 'text-red-600 dark:text-red-400';
  if (score >= 85) {
    label = 'Excellent';
    color = 'bg-emerald-500';
    textColor = 'text-emerald-600 dark:text-emerald-400';
  } else if (score >= 65) {
    label = 'Strong';
    color = 'bg-green-500';
    textColor = 'text-green-600 dark:text-green-400';
  } else if (score >= 45) {
    label = 'Good';
    color = 'bg-yellow-500';
    textColor = 'text-yellow-600 dark:text-yellow-400';
  } else if (score >= 25) {
    label = 'Weak';
    color = 'bg-orange-500';
    textColor = 'text-orange-600 dark:text-orange-400';
  }

  return { score, label, color, textColor, checks, tips };
}

export default function PasswordLeakChecker() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const result = useMemo(() => analyzePassword(password), [password]);

  return (
    <>
      <SEOHead
        title="Is Your Password Leaked? — Check Password Safety | TekSure"
        description="Check whether your accounts have been exposed in known data breaches, and test how strong your passwords are. Everything happens in your browser — nothing is sent anywhere."
        path="/tools/password-leak-checker"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-6 w-6 text-indigo-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Is Your Password Leaked?
            </h1>
            <p className="text-muted-foreground text-lg">
              Two things to check: (1) whether one of your accounts has shown up in a known data breach, and (2) whether the password you're using is actually strong. Both are free, private, and take a minute.
            </p>
          </div>
        </section>

        {/* Section 1: HIBP CTA */}
        <section className="container py-10 max-w-3xl">
          <Card className="p-6 md:p-8 rounded-2xl border-indigo-200 dark:border-indigo-900 bg-gradient-to-br from-indigo-50/60 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/10">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-indigo-600 hover:bg-indigo-600">Step 1</Badge>
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Most reliable check
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-3">Check your email for known breaches</h2>
            <p className="text-muted-foreground mb-4">
              The most reliable way to check if your accounts are compromised is <strong>Have I Been Pwned</strong>, a free service run by security researcher Troy Hunt. It cross-references your email address against billions of records from real data breaches at companies like LinkedIn, Adobe, MyFitnessPal, and hundreds of others.
            </p>

            <Button
              asChild
              size="lg"
              className="rounded-xl bg-indigo-600 hover:bg-indigo-700 h-12 text-base"
            >
              <a href="https://haveibeenpwned.com/" target="_blank" rel="noopener noreferrer">
                Check your email at haveibeenpwned.com <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>

            <div className="mt-6 rounded-xl bg-background/80 border p-4 text-sm">
              <p className="font-semibold mb-2">What you'll see:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>"Good news — no pwnage found!"</strong> means your email hasn't appeared in any known breaches.
                  </span>
                </li>
                <li className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>"Oh no — pwned!"</strong> means your email was in one or more breaches. The site lists each breach, when it happened, and what data leaked (emails, passwords, phone numbers, etc.).
                  </span>
                </li>
                <li className="flex gap-2">
                  <Info className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>
                    If you're in a breach: change that account's password immediately. If you reused the password anywhere else, change those too.
                  </span>
                </li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Section 2: Password strength */}
        <section className="container pb-10 max-w-3xl">
          <Card className="p-6 md:p-8 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-indigo-600 hover:bg-indigo-600">Step 2</Badge>
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Password strength checker
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Test a password's strength</h2>
            <p className="text-muted-foreground mb-5 text-sm">
              Type a password you're considering (or one you already use) and we'll rate how strong it is. Nothing you type here is sent anywhere — all checks happen in your browser.
            </p>

            <div className="rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 p-3 mb-5 flex items-start gap-2">
              <Lock className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-800 dark:text-emerald-200">
                <strong>Private by design.</strong> This page runs entirely in your browser. Your password never leaves your device, never touches our servers, and is discarded the moment you close the tab.
              </p>
            </div>

            {/* Input */}
            <div className="relative mb-4">
              <Input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Type a password to test…"
                className="pr-12 h-12 rounded-2xl text-base"
                autoComplete="new-password"
                aria-label="Password to test"
              />
              <button
                type="button"
                onClick={() => setShowPassword(s => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-muted text-muted-foreground"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {/* Strength bar */}
            {password && (
              <>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Strength</span>
                  <span className={`text-sm font-semibold ${result.textColor}`}>{result.label}</span>
                </div>
                <div className="h-3 w-full rounded-full bg-muted overflow-hidden mb-6">
                  <div
                    className={`h-full ${result.color} transition-all duration-300`}
                    style={{ width: `${result.score}%` }}
                    role="progressbar"
                    aria-valuenow={result.score}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>

                {/* Checks */}
                <div className="grid sm:grid-cols-2 gap-2 mb-6">
                  {result.checks.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      {c.passed ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-4 w-4 text-rose-500 flex-shrink-0" />
                      )}
                      <span className={c.passed ? 'text-foreground' : 'text-muted-foreground'}>
                        {c.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tips */}
                {result.tips.length > 0 && (
                  <div className="rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-amber-600" />
                      <span className="text-sm font-semibold">How to improve it</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-amber-900 dark:text-amber-100">
                      {result.tips.map((tip, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="font-bold">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </Card>
        </section>

        {/* The TekSure Password Rule */}
        <section className="container pb-10 max-w-3xl">
          <Card className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-0">
            <div className="flex items-center gap-2 mb-3">
              <Key className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-wide opacity-90">
                The TekSure Password Rule
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              A strong password is LONG, UNIQUE, and STORED.
            </h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span><strong className="text-white">LONG</strong> — 16 characters or more. Length beats complexity every time.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span><strong className="text-white">UNIQUE</strong> — different for every account. One breach shouldn't break ten accounts.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span><strong className="text-white">STORED</strong> — in a password manager, not in your head or on a sticky note.</span>
              </li>
            </ul>
          </Card>
        </section>

        {/* 3 steps to fix */}
        <section className="container pb-24 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">The 3 steps to fix weak passwords</h2>
          <div className="space-y-4">
            <Card className="p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">Get a password manager</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    A password manager generates long, unique passwords for every site and remembers them for you. You only need to remember one strong master password.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button asChild variant="outline" size="sm" className="rounded-xl">
                      <a href="https://bitwarden.com/" target="_blank" rel="noopener noreferrer">
                        Bitwarden (free) <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="rounded-xl">
                      <a href="https://1password.com/" target="_blank" rel="noopener noreferrer">
                        1Password <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="rounded-xl">
                      <a href="https://keepassxc.org/" target="_blank" rel="noopener noreferrer">
                        KeePassXC (free, offline) <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">Update your most important accounts first</h3>
                  <p className="text-sm text-muted-foreground">
                    Start with the accounts that can do the most damage if compromised: your <strong>email</strong> (because that's how other accounts get reset), your <strong>bank</strong>, and your main <strong>social media</strong>. Work your way down to less-critical accounts over the next week.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">Turn on two-factor authentication</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Even if a password leaks, 2FA (also called "two-step verification") stops attackers from getting in. It's the single highest-impact thing you can do for your online security.
                  </p>
                  <Button asChild variant="outline" size="sm" className="rounded-xl">
                    <a href="/guides/set-up-two-factor-authentication">
                      Read our 2FA guide <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
