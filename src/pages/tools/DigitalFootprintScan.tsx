import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Search, Info, RotateCcw, Eye, KeyRound, BookOpen } from 'lucide-react';
import { useSafetyLookup } from '@/hooks/useSafetyLookup';
import { SafetyResultCard } from '@/components/SafetyResultCard';

export default function DigitalFootprintScan() {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { check, result, loading, reset } = useSafetyLookup();

  const handleSubmit = async () => {
    if (!input.trim()) return;
    await check({ kind: 'email', value: input.trim() });
  };

  const handleReset = () => {
    reset();
    setInput('');
    inputRef.current?.focus();
  };

  return (
    <>
      <SEOHead
        title="Digital Footprint Scan — TekSure"
        description="See if your email address has been leaked in a known data breach. We check against Have I Been Pwned and give you clear, plain-English next steps."
        path="/tools/digital-footprint"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Eye className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Digital Footprint Scan</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Has your email shown up in a data breach? Enter it and we'll tell you in plain English.
            </p>
          </div>
        </section>

        <div className="container max-w-2xl mx-auto px-4 py-8">
          {/* Privacy note */}
          <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-6">
            <Info className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-xs text-blue-700 dark:text-blue-300">
              <strong>Your privacy:</strong> Your email is sent to the Have I Been Pwned service through our secure server to look up known breaches. We do not store, share, or email you. Results are cached for 24 hours to save on repeat checks.
            </p>
          </div>

          {/* Input */}
          {!result && (
            <Card className="border-border shadow-sm mb-6">
              <CardContent className="p-6">
                <label className="block text-sm font-medium mb-2" htmlFor="email-input">
                  Enter your email address
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" aria-hidden="true" />
                    <Input
                      ref={inputRef}
                      id="email-input"
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                      placeholder="you@example.com"
                      className="text-sm pl-9"
                      autoComplete="off"
                      inputMode="email"
                      type="email"
                    />
                  </div>
                  <Button
                    onClick={handleSubmit}
                    disabled={!input.trim() || loading}
                    className="gap-2 shrink-0"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Scanning…
                      </span>
                    ) : (
                      <>
                        <Search className="h-4 w-4" /> Scan
                      </>
                    )}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Tip: you can check any email you own — yourself, a family member (with permission), or an old account you stopped using.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Result */}
          {result && (
            <div className="space-y-4">
              <SafetyResultCard query={input} result={result} />

              {/* Next steps */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                    What to do next
                  </p>
                  {result.verdict === 'safe' && (
                    <p className="text-sm text-muted-foreground">
                      No known breaches have exposed this address. Keep using a strong, unique password for every site — and turn on two-step verification where you can.
                    </p>
                  )}
                  {(result.verdict === 'caution' || result.verdict === 'danger') && (
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Your email has appeared in one or more data breaches. Here's the plain-English checklist:
                      </p>
                      <ol className="space-y-2 text-sm text-muted-foreground list-decimal pl-5">
                        <li>
                          <strong>Change your password</strong> on every account that uses this email — starting with your bank, main email, and anything with payment cards saved.
                        </li>
                        <li>
                          <strong>Use a different password for each site.</strong> A password manager can do this for you.
                        </li>
                        <li>
                          <strong>Turn on two-step verification</strong> (sometimes called 2FA) on your email and bank so a stolen password alone isn't enough.
                        </li>
                        <li>
                          <strong>Watch for scam emails and texts</strong> referencing the breached site — scammers buy these lists.
                        </li>
                      </ol>
                    </div>
                  )}
                  {result.verdict === 'unknown' && (
                    <p className="text-sm text-muted-foreground">
                      We couldn't reach the breach database right now. Try again in a few minutes, or strengthen your account anyway — strong unique passwords and two-step verification are always a win.
                    </p>
                  )}
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" onClick={handleReset} className="gap-2 flex-1">
                  <RotateCcw className="h-4 w-4" /> Scan another email
                </Button>
                <Button variant="ghost" asChild className="gap-2 flex-1">
                  <Link to="/guides/creating-strong-passwords">
                    <KeyRound className="h-4 w-4" /> Build a strong password
                  </Link>
                </Button>
              </div>
            </div>
          )}

          {/* Why this matters */}
          {!result && (
            <Card className="border-dashed border-primary/30 bg-primary/5">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
                  <p className="text-sm font-medium">Why check your email?</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Big websites sometimes get hacked, and when they do, usernames and passwords can end up for sale online. Scammers use those lists to try to break into other accounts that share the same password. Knowing which of your accounts have been exposed tells you exactly where to update your password first.
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
