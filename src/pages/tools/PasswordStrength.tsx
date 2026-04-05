import { useState, useMemo } from 'react';
import { Eye, EyeOff, Check, X, ShieldCheck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

const PasswordStrength = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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

      <div className="container pt-4">
        <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Password Strength' }]} />
      </div>

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
      </section>

      <Footer />
    </div>
  );
};

export default PasswordStrength;
