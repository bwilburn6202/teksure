import { useState, useCallback } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { KeyRound, Copy, RefreshCw, ShieldCheck, Lightbulb, ChevronDown, ChevronUp, Check } from 'lucide-react';

const CHARSETS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
};

function getStrength(pw: string): { label: string; color: string; pct: number } {
  let score = 0;
  if (pw.length >= 12) score++;
  if (pw.length >= 16) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[a-z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  if (score <= 2) return { label: 'Weak', color: 'bg-red-500', pct: 25 };
  if (score <= 3) return { label: 'Fair', color: 'bg-orange-500', pct: 50 };
  if (score <= 4) return { label: 'Strong', color: 'bg-emerald-500', pct: 75 };
  return { label: 'Very Strong', color: 'bg-emerald-600', pct: 100 };
}

const managerTips = [
  'A password manager stores all your passwords in one secure vault so you only need to remember one master password.',
  'Popular free options include Bitwarden. Paid options include 1Password and Dashlane.',
  'Most password managers can automatically fill in your login on websites and apps.',
  'If you write passwords down, keep the paper in a locked drawer — never near your computer.',
  'Never reuse the same password on more than one website.',
  'Change passwords immediately if you hear about a data breach at a company you use.',
];

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [showTips, setShowTips] = useState(false);

  const generate = useCallback((len = length) => {
    let pool = '';
    if (uppercase) pool += CHARSETS.uppercase;
    if (lowercase) pool += CHARSETS.lowercase;
    if (numbers) pool += CHARSETS.numbers;
    if (symbols) pool += CHARSETS.symbols;
    if (!pool) pool = CHARSETS.lowercase;
    const arr = new Uint32Array(len);
    crypto.getRandomValues(arr);
    return Array.from(arr, v => pool[v % pool.length]).join('');
  }, [length, uppercase, lowercase, numbers, symbols]);

  const handleGenerate = () => {
    setPassword(generate());
    setCopied(null);
  };

  const handleBatch = () => {
    setSuggestions(Array.from({ length: 5 }, () => generate()));
  };

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const strength = password ? getStrength(password) : null;

  return (
    <>
      <SEOHead
        title="Password Generator — Create Strong Passwords | TekSure"
        description="Generate strong, random passwords with customizable length and character options. Check password strength and get tips for staying safe online."
        path="/tools/password-generator"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Password Generator' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-violet-50 dark:bg-violet-950/30 flex items-center justify-center flex-shrink-0">
                <KeyRound className="h-6 w-6 text-violet-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Password Generator</h1>
            <p className="text-muted-foreground text-lg">
              Create strong, random passwords that are hard for hackers to guess. Customize the length and characters to fit any website's requirements.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl space-y-8">
          {/* Options */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Password Options</CardTitle></CardHeader>
            <CardContent className="space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Length</span>
                  <span className="font-semibold">{length} characters</span>
                </div>
                <input type="range" min={8} max={32} value={length} onChange={e => setLength(Number(e.target.value))} className="w-full accent-violet-600" aria-label="Password length" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>8</span><span>32</span></div>
              </div>
              <div className="space-y-3">
                {([['Uppercase letters (A-Z)', uppercase, setUppercase],
                   ['Lowercase letters (a-z)', lowercase, setLowercase],
                   ['Numbers (0-9)', numbers, setNumbers],
                   ['Symbols (!@#$%)', symbols, setSymbols]] as const).map(([label, val, setter]) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-sm">{label}</span>
                    <Switch checked={val as boolean} onCheckedChange={v => (setter as (v: boolean) => void)(v)} />
                  </div>
                ))}
              </div>
              <Button onClick={handleGenerate} className="w-full">
                <RefreshCw className="h-4 w-4 mr-2" aria-hidden="true" /> Generate Password
              </Button>
            </CardContent>
          </Card>

          {/* Result */}
          {password && (
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-2">
                  <code className="flex-1 bg-muted rounded-lg px-4 py-3 text-sm font-mono break-all select-all">{password}</code>
                  <Button variant="outline" size="icon" onClick={() => copyToClipboard(password)} aria-label="Copy password">
                    {copied === password ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Strength</span>
                    <span className="font-medium">{strength?.label}</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${strength?.color} transition-all`} style={{ width: `${strength?.pct}%` }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Why this matters */}
          <Card className="border-violet-200 dark:border-violet-800/50">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <ShieldCheck className="h-5 w-5 text-violet-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-sm mb-1">Why This Matters</p>
                  <p className="text-sm text-muted-foreground">
                    A short or predictable password can be cracked in seconds. A 16-character random password with mixed characters would take millions of years to crack with current technology. Using a unique password for every account prevents a breach at one site from compromising all your accounts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Batch suggestions */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Need Multiple Passwords?</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" onClick={handleBatch} className="w-full">
                <RefreshCw className="h-4 w-4 mr-2" aria-hidden="true" /> Generate 5 Passwords at Once
              </Button>
              {suggestions.length > 0 && (
                <div className="space-y-2">
                  {suggestions.map((s, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <code className="flex-1 bg-muted rounded-lg px-3 py-2 text-xs font-mono break-all">{s}</code>
                      <button onClick={() => copyToClipboard(s)} className="text-muted-foreground hover:text-primary transition-colors" aria-label={`Copy password ${i + 1}`}>
                        {copied === s ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Tips */}
          <div className="rounded-2xl border p-6">
            <button onClick={() => setShowTips(!showTips)} className="flex items-center gap-3 w-full text-left">
              <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0" aria-hidden="true" />
              <span className="font-semibold text-sm flex-1">Tips for Using a Password Manager</span>
              {showTips ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {showTips && (
              <ul className="mt-4 space-y-2">
                {managerTips.map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950/30 text-amber-700 text-xs flex items-center justify-center font-medium">{i + 1}</span>
                    {tip}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
