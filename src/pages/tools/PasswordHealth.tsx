import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  ShieldCheck, Eye, EyeOff, Loader2, AlertTriangle,
  CheckCircle2, RotateCcw, Sparkles, Copy, Check,
} from 'lucide-react';

const PASSPHRASE_WORDS = [
  'apple','river','candle','garden','window','meadow','silver','copper','marble','velvet',
  'forest','sunset','breeze','pebble','harbor','quiet','bright','fortune','timber','willow',
  'parlor','feather','grateful','sapling','autumn','clover','bridge','polite','glimmer','linen',
  'compass','cottage','barley','muffin','peppermint','coastline','ladybug','sandcastle','bluebird','mountain',
];

function generatePassphrase(): string {
  const arr = new Uint32Array(4);
  crypto.getRandomValues(arr);
  const words = Array.from(arr).map(n => PASSPHRASE_WORDS[n % PASSPHRASE_WORDS.length]);
  const num = (crypto.getRandomValues(new Uint32Array(1))[0] % 90) + 10;
  return `${words.join('-')}-${num}`;
}

async function sha1(str: string): Promise<string> {
  const buf = new TextEncoder().encode(str);
  const hashBuf = await crypto.subtle.digest('SHA-1', buf);
  return Array.from(new Uint8Array(hashBuf))
    .map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
}

interface CheckResult {
  pwned: boolean;
  count: number;
  errored?: boolean;
}

async function checkBreach(password: string): Promise<CheckResult> {
  try {
    const hash = await sha1(password);
    const prefix = hash.slice(0, 5);
    const suffix = hash.slice(5);
    const res = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`, {
      headers: { 'Add-Padding': 'true' },
    });
    if (!res.ok) return { pwned: false, count: 0, errored: true };
    const text = await res.text();
    const line = text.split('\n').find(l => l.split(':')[0].trim().toUpperCase() === suffix);
    if (!line) return { pwned: false, count: 0 };
    const count = parseInt(line.split(':')[1].trim(), 10) || 0;
    return { pwned: count > 0, count };
  } catch {
    return { pwned: false, count: 0, errored: true };
  }
}

export default function PasswordHealth() {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [generated, setGenerated] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  const runCheck = async () => {
    if (!password) return;
    setChecking(true);
    setResult(null);
    const r = await checkBreach(password);
    setResult(r);
    setChecking(false);
  };

  const reset = () => {
    setPassword('');
    setResult(null);
  };

  const generate = () => {
    setGenerated(Array.from({ length: 4 }, () => generatePassphrase()));
  };

  const copy = async (txt: string) => {
    await navigator.clipboard.writeText(txt);
    setCopied(txt);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <SEOHead
        title="Password Health Check"
        description="See if your password has been leaked in a known data breach, and generate a strong passphrase you can actually remember. Privacy-first — your password never leaves your device."
        path="/tools/password-health"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Password Health Check</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              See whether your password has shown up in a known data breach, and grab a strong passphrase you can actually remember.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Password Health Check' },
            ]}
          />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-6">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Check a password</p>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Input
                    type={show ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Type a password to check"
                    className="pr-10 text-base"
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    onClick={() => setShow(s => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                    aria-label={show ? 'Hide password' : 'Show password'}
                  >
                    {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <Button onClick={runCheck} disabled={!password || checking} className="gap-2">
                  {checking ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShieldCheck className="h-4 w-4" />}
                  Check
                </Button>
                {password && (
                  <Button variant="outline" onClick={reset} aria-label="Clear">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                )}
              </div>

              <div className="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <p className="text-xs text-blue-700 dark:text-blue-300">
                  <strong>Privacy:</strong> we never see your password. We send only the first 5 characters of a one-way scrambled version (a SHA-1 hash) to the breach database, then check the rest right here in your browser. This is called &quot;k-anonymity&quot; — it is the same method 1Password and Firefox use.
                </p>
              </div>
            </CardContent>
          </Card>

          {result && (
            <Card className={`mb-6 border ${
              result.errored ? 'border-amber-300 bg-amber-50 dark:bg-amber-900/20' :
              result.pwned ? 'border-red-300 bg-red-50 dark:bg-red-950/20' :
              'border-green-300 bg-green-50 dark:bg-green-950/20'
            }`}>
              <CardContent className="p-5">
                {result.errored ? (
                  <div className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">We could not reach the breach database.</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Check your internet connection and try again.
                      </p>
                    </div>
                  </div>
                ) : result.pwned ? (
                  <div className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <Badge className="bg-red-100 text-red-700 border-red-300 mb-2">Found in {result.count.toLocaleString()} breaches</Badge>
                      <p className="font-semibold text-sm mb-1">Change this password right away.</p>
                      <p className="text-xs text-muted-foreground">
                        This exact password has been found in known data leaks. Anywhere you used it, the account is at risk. Pick a new passphrase below and update every site where you used the old one.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <Badge className="bg-green-100 text-green-700 border-green-300 mb-2">Not found in any known breach</Badge>
                      <p className="font-semibold text-sm mb-1">Good news — this one has not leaked.</p>
                      <p className="text-xs text-muted-foreground">
                        That said, length still matters. Aim for at least 16 characters and never reuse the same password on more than one site.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Make a strong passphrase</p>
                <Button onClick={generate} size="sm" className="gap-2">
                  <Sparkles className="h-4 w-4" /> Generate
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Four random everyday words plus two digits. Easy to remember. Hard for a computer to guess. Tap to copy.
              </p>
              {generated.length === 0 ? (
                <div className="text-center py-6 text-sm text-muted-foreground border border-dashed border-border rounded-lg">
                  Tap &quot;Generate&quot; to make four passphrase suggestions.
                </div>
              ) : (
                <div className="space-y-2">
                  {generated.map((p) => (
                    <button
                      key={p}
                      onClick={() => copy(p)}
                      className="w-full flex items-center justify-between gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                    >
                      <code className="font-mono text-sm">{p}</code>
                      {copied === p ? (
                        <span className="text-xs text-green-600 inline-flex items-center gap-1"><Check className="h-3 w-3" /> Copied</span>
                      ) : (
                        <Copy className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/password-strength" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Password Strength</p>
                <p className="text-xs text-muted-foreground mt-0.5">Quickly score how strong any password is.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Paste a message — see if it is a scam.</p>
              </Link>
              <Link to="/scam-defense" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Defense Center</p>
                <p className="text-xs text-muted-foreground mt-0.5">All scam protection tools in one place.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
