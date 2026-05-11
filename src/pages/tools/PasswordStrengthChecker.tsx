import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ShieldCheck,
  ShieldAlert,
  Shield,
  Eye,
  EyeOff,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Lock,
} from 'lucide-react';

interface Criterion {
  id: string;
  label: string;
  test: (pw: string) => boolean;
}

const CRITERIA: Criterion[] = [
  { id: 'length12', label: 'At least 12 characters long', test: (p) => p.length >= 12 },
  { id: 'uppercase', label: 'Contains an uppercase letter (A–Z)', test: (p) => /[A-Z]/.test(p) },
  { id: 'lowercase', label: 'Contains a lowercase letter (a–z)', test: (p) => /[a-z]/.test(p) },
  { id: 'number', label: 'Contains a number (0–9)', test: (p) => /[0-9]/.test(p) },
  { id: 'symbol', label: 'Contains a symbol (!, @, #, $, etc.)', test: (p) => /[^A-Za-z0-9]/.test(p) },
  { id: 'nocommon', label: 'Not a common word or simple pattern', test: (p) => !isCommon(p) },
];

const COMMON = [
  'password','password1','123456','12345678','123456789','1234567890',
  'qwerty','abc123','iloveyou','admin','welcome','monkey','dragon',
  'master','pass','letmein','sunshine','princess','football','baseball',
  'shadow','superman','batman','trustno1','1q2w3e','111111','000000',
  'aaaaaa','hello','google','summer','winter','spring','autumn',
];

function isCommon(pw: string): boolean {
  const lower = pw.toLowerCase();
  if (COMMON.includes(lower)) return true;
  if (/^(.)\1+$/.test(pw)) return true; // all same character
  if (/^(01234567|12345678|23456789|abcdefgh|qwertyui)/i.test(pw)) return true;
  return false;
}

type Strength = 'empty' | 'weak' | 'fair' | 'good' | 'strong';

function getStrength(pw: string, passed: number): Strength {
  if (!pw) return 'empty';
  if (pw.length < 6 || passed <= 1) return 'weak';
  if (passed <= 3) return 'fair';
  if (passed <= 4) return 'good';
  return 'strong';
}

const STRENGTH_CONFIG: Record<Strength, { label: string; color: string; bar: string; icon: React.ElementType; tip: string }> = {
  empty: { label: '', color: '', bar: 'bg-gray-200', icon: Shield, tip: '' },
  weak: {
    label: 'Weak',
    color: 'text-red-600 dark:text-red-400',
    bar: 'bg-red-500',
    icon: ShieldAlert,
    tip: 'This password could be guessed quickly. Add length and a mix of letters, numbers, and symbols.',
  },
  fair: {
    label: 'Fair',
    color: 'text-orange-600 dark:text-orange-400',
    bar: 'bg-orange-400',
    icon: Shield,
    tip: 'Getting better, but still not as strong as it could be. Try adding more characters or a symbol.',
  },
  good: {
    label: 'Good',
    color: 'text-yellow-600 dark:text-yellow-400',
    bar: 'bg-yellow-400',
    icon: Shield,
    tip: 'This is a decent password. Adding a symbol or making it a bit longer would make it even stronger.',
  },
  strong: {
    label: 'Strong',
    color: 'text-green-600 dark:text-green-400',
    bar: 'bg-green-500',
    icon: ShieldCheck,
    tip: 'Great password! It meets all the key criteria for a strong, secure password.',
  },
};

const BAR_WIDTH: Record<Strength, string> = {
  empty: 'w-0',
  weak: 'w-1/4',
  fair: 'w-2/4',
  good: 'w-3/4',
  strong: 'w-full',
};

const STRONG_EXAMPLES = [
  'Tr0ub4dor&3!',
  'L@keH0use#2026',
  'C0ffee$Time!99',
  'Purple!Rain4ever',
  'My$ecureP@ss88',
];

function randomExample(): string {
  return STRONG_EXAMPLES[Math.floor(Math.random() * STRONG_EXAMPLES.length)];
}

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [example, setExample] = useState('');

  const results = useMemo(
    () => CRITERIA.map((c) => ({ ...c, passed: password ? c.test(password) : false })),
    [password],
  );

  const passedCount = results.filter((r) => r.passed).length;
  const strength = getStrength(password, passedCount);
  const config = STRENGTH_CONFIG[strength];
  const Icon = config.icon;

  const handleExample = () => {
    const ex = randomExample();
    setExample(ex);
    setPassword(ex);
    setShow(true);
  };

  const handleClear = () => {
    setPassword('');
    setExample('');
    setShow(false);
  };

  return (
    <>
      <SEOHead
        title="Password Strength Checker | TekSure"
        description="Check how strong your password is and get tips to make it stronger. Your password never leaves your device."
      />
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
        <div className="max-w-xl mx-auto px-4 pt-6">
          <PageBreadcrumb
            items={[
              { label: 'Tools', href: '/tools' },
              { label: 'Password Strength Checker' },
            ]}
          />

          <div className="text-center mb-8 mt-4">
            <div className="text-5xl mb-3">🔐</div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Password Strength Checker
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Type a password below to see how strong it is and what could make it stronger.
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-sm rounded-full px-4 py-1.5 border border-green-200 dark:border-green-800">
              <Lock size={14} />
              Your password never leaves your device
            </div>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6 space-y-4">
              <div className="relative">
                <Input
                  type={show ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setExample(''); }}
                  placeholder="Type or paste a password here…"
                  className="pr-12 text-lg"
                  autoComplete="new-password"
                  spellCheck={false}
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  aria-label={show ? 'Hide password' : 'Show password'}
                >
                  {show ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {password && (
                <>
                  {/* Strength bar */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className={`flex items-center gap-1.5 font-semibold ${config.color}`}>
                        <Icon size={18} />
                        {config.label}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {passedCount}/{CRITERIA.length} criteria met
                      </Badge>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${config.bar} ${BAR_WIDTH[strength]}`}
                      />
                    </div>
                  </div>

                  {config.tip && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      {config.tip}
                    </p>
                  )}
                </>
              )}

              {/* Criteria list */}
              <ul className="space-y-2">
                {results.map((r) => (
                  <li key={r.id} className="flex items-center gap-2 text-sm">
                    {password ? (
                      r.passed ? (
                        <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      ) : (
                        <XCircle size={18} className="text-red-400 shrink-0" />
                      )
                    ) : (
                      <div className="w-4.5 h-4.5 rounded-full border-2 border-gray-300 dark:border-gray-600 shrink-0" />
                    )}
                    <span
                      className={
                        password
                          ? r.passed
                            ? 'text-gray-700 dark:text-gray-200'
                            : 'text-red-600 dark:text-red-400'
                          : 'text-gray-400 dark:text-gray-500'
                      }
                    >
                      {r.label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={handleExample}
                >
                  <RefreshCw size={15} className="mr-1.5" />
                  Show me a strong example
                </Button>
                {password && (
                  <Button variant="ghost" size="sm" onClick={handleClear}>
                    Clear
                  </Button>
                )}
              </div>

              {example && (
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 text-sm text-blue-800 dark:text-blue-200">
                  <p className="font-medium mb-1">Example strong password:</p>
                  <p className="font-mono text-base">{example}</p>
                  <p className="mt-1 text-xs opacity-80">
                    Do not use this exact example — create your own using a similar pattern.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5 space-y-4">
              <h2 className="font-bold text-lg text-gray-900 dark:text-white">
                Tips for creating strong passwords
              </h2>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex gap-2">
                  <span className="text-blue-500 font-bold shrink-0">1.</span>
                  <p>
                    <strong>Use a phrase, not a word.</strong> A random sentence like "My cat loves sunny Tuesdays!" is much stronger than a single word, even with substitutions.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-500 font-bold shrink-0">2.</span>
                  <p>
                    <strong>Never reuse passwords.</strong> If one account is breached, a unique password keeps all your other accounts safe.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-500 font-bold shrink-0">3.</span>
                  <p>
                    <strong>Use a password manager.</strong> Free options like <strong>Bitwarden</strong> (bitwarden.com) or Apple Keychain (built into iPhone) remember all your passwords so you only need to remember one main password.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-500 font-bold shrink-0">4.</span>
                  <p>
                    <strong>Turn on two-factor authentication (2FA).</strong> Even if someone gets your password, 2FA sends a code to your phone that they also need. Most banks, email, and social media accounts offer this for free.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-500 font-bold shrink-0">5.</span>
                  <p>
                    <strong>Change your most important passwords once a year.</strong> Especially your email and banking passwords. See our annual security checklist guide for a full yearly routine.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
