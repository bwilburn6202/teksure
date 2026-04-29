import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Search, Info, RotateCcw, ShieldCheck, BookOpen } from 'lucide-react';
import { useSafetyLookup } from '@/hooks/useSafetyLookup';
import { SafetyResultCard } from '@/components/SafetyResultCard';

const EXAMPLES = [
  { label: 'Fake USPS redelivery', value: 'http://usps-redelivery-confirm.xyz/track?code=12345' },
  { label: 'Legitimate Apple', value: 'https://apple.com/support' },
  { label: 'IP-only address (red flag)', value: 'http://192.168.45.17/account-verify' },
];

export default function UrlSafetyCheckerV2() {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { check, result, loading, reset } = useSafetyLookup();

  const handleSubmit = async () => {
    if (!input.trim()) return;
    await check({ kind: 'url', value: input.trim() });
  };

  const handleReset = () => {
    reset();
    setInput('');
    inputRef.current?.focus();
  };

  return (
    <>
      <SEOHead
        title="URL Safety Check — TekSure"
        description="Paste a link and we'll run it past Google Safe Browsing, PhishTank, and common scam patterns to tell you whether it's safe, risky, or a known trap."
        path="/tools/url-safety-check"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">URL Safety Check</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Got a text or email with a link you don't trust? Paste it here before you click.
            </p>
          </div>
        </section>

        <div className="container max-w-2xl mx-auto px-4 py-8">
          {/* How it works */}
          <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-6">
            <Info className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-xs text-blue-700 dark:text-blue-300">
              <strong>How it works:</strong> We check the address against Google Safe Browsing, PhishTank, and common scam patterns. We don't visit the link. No automated tool is perfect — use your own judgment too.
            </p>
          </div>

          {/* Input */}
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
                    onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                    placeholder="e.g. https://example.com/verify"
                    className="text-sm"
                    autoComplete="off"
                    inputMode="url"
                  />
                  <Button
                    onClick={handleSubmit}
                    disabled={!input.trim() || loading}
                    className="gap-2 shrink-0"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Checking…
                      </span>
                    ) : (
                      <>
                        <Search className="h-4 w-4" /> Check
                      </>
                    )}
                  </Button>
                </div>

                <div className="mt-4">
                  <p className="text-xs text-muted-foreground mb-2">Try an example:</p>
                  <div className="flex flex-wrap gap-2">
                    {EXAMPLES.map(ex => (
                      <button
                        key={ex.value}
                        type="button"
                        onClick={() => setInput(ex.value)}
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
          {result && (
            <div className="space-y-4">
              <SafetyResultCard query={input} result={result} />

              {/* What now? */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    What to do next
                  </p>
                  {result.verdict === 'safe' && (
                    <p className="text-sm text-muted-foreground">
                      No obvious red flags found. Still, check the address bar after you click — scammers sometimes register look-alike sites.
                    </p>
                  )}
                  {result.verdict === 'caution' && (
                    <p className="text-sm text-muted-foreground">
                      Be careful. If you received this link out of the blue, don't click it. If it claims to be from a company you use, go to their website directly by typing the address.
                    </p>
                  )}
                  {result.verdict === 'danger' && (
                    <p className="text-sm text-muted-foreground">
                      Do not click this link. Delete the message that contained it. If you think you've already been scammed, contact your bank and report it at{' '}
                      <strong>1-877-382-4357</strong> or{' '}
                      <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer" className="underline">
                        reportfraud.ftc.gov
                      </a>
                      .
                    </p>
                  )}
                  {result.verdict === 'unknown' && (
                    <p className="text-sm text-muted-foreground">
                      We couldn't reach every source. If anything feels off — urgency, grammar mistakes, asking for money or passwords — treat the link as unsafe.
                    </p>
                  )}
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" onClick={handleReset} className="gap-2 flex-1">
                  <RotateCcw className="h-4 w-4" /> Check another link
                </Button>
                <Button variant="ghost" asChild className="gap-2 flex-1">
                  <Link to="/guides/recognizing-avoiding-scams">
                    <BookOpen className="h-4 w-4" /> Learn to spot scams
                  </Link>
                </Button>
              </div>
            </div>
          )}

          {/* Tips */}
          {!result && (
            <Card className="border-dashed border-primary/30 bg-primary/5">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-4 w-4 text-primary" aria-hidden="true" />
                  <p className="text-sm font-medium">Red flags to watch for</p>
                </div>
                <ul className="space-y-2">
                  {[
                    'The address starts with http:// instead of https://',
                    'The domain has strange extra words (like "apple-secure-login.com")',
                    "You're being pressured to act quickly or threatened with penalties",
                    "You didn't expect the message — even if it looks like a company you use",
                    'Shortened links like bit.ly hide the real destination',
                  ].map((tip, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span aria-hidden="true">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
