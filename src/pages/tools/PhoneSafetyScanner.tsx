import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Search, Info, RotateCcw, PhoneOff, BookOpen, Ban } from 'lucide-react';
import { useSafetyLookup } from '@/hooks/useSafetyLookup';
import { SafetyResultCard } from '@/components/SafetyResultCard';

const EXAMPLES = [
  { label: 'Typical robocall pattern', value: '+1-800-555-0199' },
  { label: 'Unknown 900-number', value: '1-900-123-4567' },
];

export default function PhoneSafetyScanner() {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { check, result, loading, reset } = useSafetyLookup();

  const handleSubmit = async () => {
    if (!input.trim()) return;
    await check({ kind: 'phone', value: input.trim() });
  };

  const handleReset = () => {
    reset();
    setInput('');
    inputRef.current?.focus();
  };

  return (
    <>
      <SEOHead
        title="Phone Number Safety Check — TekSure"
        description="Got a call or text from a number you don't recognize? Check it against known scam databases before you answer or call back."
        path="/tools/phone-safety"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <PhoneOff className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Phone Number Safety Check</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Don't recognize the number? Check it here before you call back.
            </p>
          </div>
        </section>

        <div className="container max-w-2xl mx-auto px-4 py-8">
          {/* How it works */}
          <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-6">
            <Info className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-xs text-blue-700 dark:text-blue-300">
              <strong>How it works:</strong> We check US phone numbers against known scam patterns (toll-number prefixes, common spoofing ranges, and our own scam-number database). When you're unsure, the safest move is: don't answer, don't call back, and don't press any buttons on a recording.
            </p>
          </div>

          {/* Input */}
          {!result && (
            <Card className="border-border shadow-sm mb-6">
              <CardContent className="p-6">
                <label className="block text-sm font-medium mb-2" htmlFor="phone-input">
                  Enter the phone number
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" aria-hidden="true" />
                    <Input
                      ref={inputRef}
                      id="phone-input"
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                      placeholder="(555) 123-4567"
                      className="text-sm pl-9"
                      autoComplete="off"
                      inputMode="tel"
                      type="tel"
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

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    What to do next
                  </p>
                  {result.verdict === 'safe' && (
                    <p className="text-sm text-muted-foreground">
                      No known scam reports for this number. If you still weren't expecting a call, let it go to voicemail — legitimate callers will leave a message.
                    </p>
                  )}
                  {result.verdict === 'caution' && (
                    <p className="text-sm text-muted-foreground">
                      This number has some warning signs. Don't call back. If it's someone you actually know, they'll leave a voicemail or text you.
                    </p>
                  )}
                  {result.verdict === 'danger' && (
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Block this number. If you already picked up:
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">
                        <li>Never share passwords, Social Security numbers, or bank details.</li>
                        <li>Don't press buttons on a recording — that marks your line as active.</li>
                        <li>
                          Report it to the FTC at{' '}
                          <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer" className="underline">
                            reportfraud.ftc.gov
                          </a>
                          .
                        </li>
                      </ul>
                    </div>
                  )}
                  {result.verdict === 'unknown' && (
                    <p className="text-sm text-muted-foreground">
                      Not enough data on this one. When in doubt: don't answer, let it go to voicemail, and never give personal info to someone who called you.
                    </p>
                  )}
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" onClick={handleReset} className="gap-2 flex-1">
                  <RotateCcw className="h-4 w-4" /> Check another number
                </Button>
                <Button variant="ghost" asChild className="gap-2 flex-1">
                  <Link to="/tools/scam-phone-database">
                    <Ban className="h-4 w-4" /> Browse scam database
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
                  <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
                  <p className="text-sm font-medium">Common phone-scam patterns</p>
                </div>
                <ul className="space-y-2">
                  {[
                    'Caller claims to be from the IRS, Medicare, or Social Security — those agencies contact you by mail, not phone.',
                    'Urgent "your account is suspended" or "warrant out for your arrest" pressure tactics.',
                    'Robocall offers of free cruises, extended car warranties, or medical devices.',
                    "Someone asking you to pay with gift cards or wire transfers — legitimate companies never do this.",
                    'A number that matches your own area code but you don\'t recognize — scammers "spoof" local numbers on purpose.',
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
