import { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Check, X, ShieldCheck, RefreshCw, Copy, CheckCircle2, KeyRound } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const PasswordStrength = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specials = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    const allChars = uppercase + lowercase + numbers + specials;

    const array = new Uint32Array(16);
    crypto.getRandomValues(array);

    // Guarantee at least one character from each category
    const guaranteed = [
      uppercase[array[0] % uppercase.length],
      lowercase[array[1] % lowercase.length],
      numbers[array[2] % numbers.length],
      specials[array[3] % specials.length],
    ];

    const remaining = Array.from({ length: 12 }, (_, i) =>
      allChars[array[i + 4] % allChars.length]
    );

    // Shuffle the combined array using Fisher-Yates with secure random
    const combined = [...guaranteed, ...remaining];
    const shuffleArray = new Uint32Array(combined.length);
    crypto.getRandomValues(shuffleArray);
    for (let i = combined.length - 1; i > 0; i--) {
      const j = shuffleArray[i] % (i + 1);
      [combined[i], combined[j]] = [combined[j], combined[i]];
    }

    setGeneratedPassword(combined.join(''));
    setCopied(false);
  }, []);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(generatedPassword);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = generatedPassword;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [generatedPassword]);

  const checks = useMemo(() => ({
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  }), [password]);

  const score = Object.values(checks).filter(Boolean).length;

  const strength = useMemo(() => {
    if (password.length === 0) return { label: '', color: '', percent: 0 };
    if (score <= 1) return { label: 'Weak', color: 'text-destructive', percent: 25 };
    if (score === 2) return { label: 'Fair', color: 'text-[hsl(var(--teksure-warning))]', percent: 50 };
    if (score === 3) return { label: 'Good', color: 'text-[hsl(var(--teksure-info))]', percent: 75 };
    return { label: 'Strong', color: 'text-[hsl(var(--teksure-success))]', percent: 100 };
  }, [password, score]);

  const barColor = score <= 1 ? 'bg-destructive' : score === 2 ? 'bg-[hsl(var(--teksure-warning))]' : score === 3 ? 'bg-[hsl(var(--teksure-info))]' : 'bg-[hsl(var(--teksure-success))]';

  const checkItems = [
    { key: 'length', label: 'At least 8 characters', met: checks.length },
    { key: 'uppercase', label: 'Has an uppercase letter', met: checks.uppercase },
    { key: 'number', label: 'Has a number', met: checks.number },
    { key: 'special', label: 'Has a special character (!@#$...)', met: checks.special },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Password Strength Checker | TekSure"
        description="Test how strong your password is with our free tool. Get instant feedback and tips to create stronger passwords."
        path="/tools/password-strength"
      />
      <Navbar />

      <section className="border-b">
        <div className="container py-16 md:py-20">
          <div className="max-w-xl mx-auto text-center">
            <ShieldCheck className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Password Strength Checker</h1>
            <p className="text-lg opacity-80">Test your password — nothing is stored or sent anywhere.</p>
          </div>
        </div>
      </section>

      <section className="container py-12 max-w-lg">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/quick-fixes">Tools</Link></BreadcrumbLink></BreadcrumbItem>
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

            {/* Strength bar */}
            {password.length > 0 && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Strength:</span>
                  <span className={`text-sm font-semibold ${strength.color}`}>{strength.label}</span>
                </div>
                <div className="h-3 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full rounded-full ${barColor}`}
                  />
                </div>
              </div>
            )}

            {/* Checklist */}
            <div className="space-y-3">
              <p className="text-sm font-medium">Requirements:</p>
              {checkItems.map(item => (
                <div key={item.key} className="flex items-center gap-3">
                  {item.met ? (
                    <Check className="h-4 w-4 text-[hsl(var(--teksure-success))]" />
                  ) : (
                    <X className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className={`text-sm ${item.met ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground text-center pt-2">
              🔒 Your password is checked locally in your browser. Nothing is stored or sent anywhere.
            </p>
          </CardContent>
        </Card>

        {/* Generate Strong Password Section */}
        <Card className="mt-8">
          <CardContent className="pt-6 space-y-6">
            <div className="text-center space-y-2">
              <KeyRound className="h-10 w-10 mx-auto text-primary" />
              <h2 className="text-2xl font-bold tracking-tight">Generate a Strong Password</h2>
              <p className="text-base text-muted-foreground">
                Need a strong password? Press the button below and we will create one for you.
              </p>
            </div>

            {!generatedPassword && (
              <div className="flex justify-center">
                <Button
                  onClick={generatePassword}
                  size="lg"
                  className="text-lg px-8 py-6 h-auto"
                >
                  <KeyRound className="h-5 w-5 mr-2" />
                  Generate Strong Password
                </Button>
              </div>
            )}

            {generatedPassword && (
              <div className="space-y-5">
                <div className="bg-muted rounded-lg p-5 text-center">
                  <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide">Your Generated Password</p>
                  <p
                    className="text-xl md:text-2xl font-mono font-bold tracking-wider break-all select-all"
                    aria-label="Generated password"
                  >
                    {generatedPassword}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={copyToClipboard}
                    size="lg"
                    variant={copied ? 'outline' : 'default'}
                    className="text-base px-6 py-5 h-auto"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="h-5 w-5 mr-2 text-[hsl(var(--teksure-success))]" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-5 w-5 mr-2" />
                        Copy to Clipboard
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={generatePassword}
                    size="lg"
                    variant="outline"
                    className="text-base px-6 py-5 h-auto"
                  >
                    <RefreshCw className="h-5 w-5 mr-2" />
                    Generate Another
                  </Button>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-center">
                  <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">
                    📝 Quick Tip
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    Write this password down and keep it somewhere safe, or save it in a password manager.
                  </p>
                </div>
              </div>
            )}

            <p className="text-xs text-muted-foreground text-center pt-2">
              🔒 This password is created right here in your browser. It is never stored or sent anywhere.
            </p>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default PasswordStrength;
