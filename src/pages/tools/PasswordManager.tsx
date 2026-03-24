import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import {
  Key, ChevronRight, ChevronDown, ChevronUp, Star,
  CheckCircle2, AlertTriangle, Shield, Smartphone, Laptop,
  Lock, Eye, EyeOff, Copy, RefreshCw,
} from 'lucide-react';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';

interface ManagerOption {
  name: string;
  free: boolean;
  price: string;
  platforms: string[];
  rating: number;
  pros: string[];
  bestFor: string;
  color: string;
}

const managers: ManagerOption[] = [
  {
    name: 'Bitwarden',
    free: true,
    price: 'Free / $10/yr premium',
    platforms: ['Windows', 'Mac', 'iPhone', 'Android', 'Browser'],
    rating: 5,
    pros: ['Open source — anyone can audit the code', 'Fully free tier with no device limit', 'Works on every device and browser'],
    bestFor: 'Best overall — especially if you want free and trustworthy',
    color: 'text-blue-600',
  },
  {
    name: '1Password',
    free: false,
    price: '$3/month',
    platforms: ['Windows', 'Mac', 'iPhone', 'Android', 'Browser'],
    rating: 5,
    pros: ['Beautifully simple interface', 'Excellent family sharing features', 'Travel mode hides sensitive vaults'],
    bestFor: 'Best for families and people who want the most polished experience',
    color: 'text-blue-500',
  },
  {
    name: 'Apple Passwords',
    free: true,
    price: 'Free (built into Apple devices)',
    platforms: ['iPhone', 'iPad', 'Mac', 'Safari on Windows'],
    rating: 4,
    pros: ['No setup needed — already on your iPhone/Mac', 'Syncs automatically via iCloud', 'Now has its own app in iOS 18+'],
    bestFor: 'Best if you only use Apple devices',
    color: 'text-gray-600',
  },
  {
    name: 'Google Password Manager',
    free: true,
    price: 'Free (built into Chrome/Android)',
    platforms: ['Chrome', 'Android', 'Windows', 'Mac'],
    rating: 4,
    pros: ['No setup if you already use Chrome', 'Automatically fills passwords everywhere', 'Free passkey support'],
    bestFor: 'Best if you primarily use Chrome and Android',
    color: 'text-green-600',
  },
];

interface FAQ { q: string; a: string }
const faqs: FAQ[] = [
  {
    q: 'Is it safe to store all my passwords in one place?',
    a: 'Yes — much safer than reusing the same password everywhere (which is what most people do). Password managers use military-grade encryption. Even if the company is hacked, they can\'t see your passwords. The risk of NOT using one is far higher.',
  },
  {
    q: 'What if I forget the master password?',
    a: 'Most password managers let you set up recovery options — like a recovery email, emergency contacts, or a printed recovery kit. Set these up when you first create your account and store them somewhere safe, like a physical notebook.',
  },
  {
    q: 'Do I still need to remember any passwords?',
    a: 'Just one — your master password. Make it a phrase you\'ll never forget, like "BlueSky!CoffeeAt7am". Everything else gets handled automatically.',
  },
  {
    q: 'What about the passwords I already have?',
    a: 'Most password managers will import passwords saved in your browser (Chrome, Safari, Firefox) with one click. You can also add passwords manually as you log in to your usual accounts.',
  },
  {
    q: 'What if the company goes out of business?',
    a: 'Open-source options like Bitwarden let you export all your passwords at any time in a standard format. It\'s good practice to export a backup every few months regardless of which manager you use.',
  },
];

const setupSteps = [
  { title: 'Choose a manager', detail: 'Pick one from our recommendations below. Bitwarden is the safest free choice; 1Password is the best paid option.' },
  { title: 'Create your account', detail: 'Sign up at the manager\'s website. Choose a strong master password — a phrase of 4+ words works well, like "Sunny-Bridge-Lake-2024".' },
  { title: 'Install the browser extension', detail: 'Install the browser extension for Chrome, Safari, Firefox, or Edge. This is what auto-fills your passwords when you log in.' },
  { title: 'Install the phone app', detail: 'Download the app for your iPhone or Android phone. Enable it in your phone\'s autofill settings so it fills in apps too.' },
  { title: 'Import existing passwords', detail: 'Most managers have an "Import" feature. Go to Settings → Import and choose your browser (Chrome, Safari, etc.) to bring in all saved passwords at once.' },
  { title: 'Start saving new passwords', detail: 'From now on, when you create or update a password, let the manager save it and generate a strong unique password for you.' },
];

// Simple password strength checker
function getStrength(pwd: string): { score: number; label: string; color: string } {
  if (!pwd) return { score: 0, label: '', color: '' };
  let score = 0;
  if (pwd.length >= 8) score++;
  if (pwd.length >= 12) score++;
  if (pwd.length >= 16) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[a-z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  if (score <= 2) return { score: Math.round((score / 7) * 100), label: 'Weak', color: 'bg-red-500' };
  if (score <= 4) return { score: Math.round((score / 7) * 100), label: 'Fair', color: 'bg-[hsl(var(--teksure-warning))]' };
  if (score <= 5) return { score: Math.round((score / 7) * 100), label: 'Good', color: 'bg-blue-500' };
  return { score: Math.round((score / 7) * 100), label: 'Strong', color: 'bg-[hsl(var(--teksure-success))]' };
}

function generatePassword(length = 16): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%^&*';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export default function PasswordManager() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedManager, setExpandedManager] = useState<string | null>(null);
  const [testPassword, setTestPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [generatedPwd, setGeneratedPwd] = useState('');
  const [copied, setCopied] = useState(false);

  const strength = getStrength(testPassword);

  const handleGenerate = () => {
    setGeneratedPwd(generatePassword());
    setCopied(false);
  };

  const handleCopy = () => {
    if (!generatedPwd) return;
    navigator.clipboard.writeText(generatedPwd).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <SEOHead
        title="Password Manager Guide – TekSure Tools"
        description="Learn what a password manager is, why you need one, and how to set one up in minutes. Compare top free and paid options."
        path="/tools/password-manager"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="bg-primary text-primary-foreground py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-3xl">
            <Breadcrumb className="mb-5">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground">Home</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/tools" className="text-primary-foreground/70 hover:text-primary-foreground">Tools</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary-foreground">Password Manager Guide</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-2">
                <Key className="h-7 w-7" />
                <h1 className="text-3xl md:text-4xl font-bold">Password Manager Guide</h1>
              </div>
              <p className="text-lg text-primary-foreground/80">
                Stop reusing passwords. One app remembers them all — and makes you far safer online.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="bg-muted/40 min-h-screen py-10">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">

            {/* Why you need one */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
              <Card className="border-[hsl(var(--teksure-warning)/0.4)] bg-[hsl(var(--teksure-warning)/0.06)]">
                <CardContent className="p-5 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-[hsl(var(--teksure-warning))] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">The most common way accounts get hacked</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      When one website gets breached, hackers try your email and password on every other site. If you reuse passwords, they get in. A password manager gives every account a unique, unguessable password — so one breach can't spread.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Password tester */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card>
                <CardHeader><CardTitle className="text-base">Test a password's strength</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={testPassword}
                      onChange={e => setTestPassword(e.target.value)}
                      placeholder="Type a password to test it..."
                      className="w-full px-3 py-2 pr-10 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setShowPassword(p => !p)}
                      type="button"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {testPassword && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Strength</span>
                        <span className="font-medium">{strength.label}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className={`h-2 rounded-full transition-all ${strength.color}`} style={{ width: `${strength.score}%` }} />
                      </div>
                      {strength.score < 70 && (
                        <p className="text-xs text-muted-foreground">Tip: use 12+ characters, mix uppercase, numbers, and symbols like ! or #</p>
                      )}
                    </motion.div>
                  )}
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Lock className="h-3 w-3" /> This check runs entirely in your browser — nothing is sent anywhere.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Password generator */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
              <Card>
                <CardHeader><CardTitle className="text-base">Generate a strong password</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-2">
                    <div className="flex-1 px-3 py-2 rounded-lg border border-border bg-muted font-mono text-sm tracking-wide break-all min-h-[38px]">
                      {generatedPwd || <span className="text-muted-foreground text-xs">Click "Generate" to create a strong password</span>}
                    </div>
                    <Button variant="outline" size="icon" onClick={handleCopy} disabled={!generatedPwd} className="shrink-0" title="Copy">
                      {copied ? <CheckCircle2 className="h-4 w-4 text-[hsl(var(--teksure-success))]" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <Button onClick={handleGenerate} className="w-full">
                    <RefreshCw className="h-4 w-4 mr-2" /> Generate Strong Password
                  </Button>
                  <p className="text-xs text-muted-foreground">16 characters, mixed case, numbers and symbols. Generated locally — never stored.</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* How to set it up */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <Card>
                <CardHeader><CardTitle>How to set up a password manager</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {setupSteps.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground font-bold text-xs shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{step.title}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Manager comparison */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-xl font-bold mb-3">Which password manager should I use?</h2>
              <div className="space-y-3">
                {managers.map((mgr, i) => {
                  const isExpanded = expandedManager === mgr.name;
                  return (
                    <Card key={mgr.name} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setExpandedManager(isExpanded ? null : mgr.name)}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <Key className={`h-5 w-5 shrink-0 ${mgr.color}`} />
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-semibold">{mgr.name}</span>
                                {mgr.free && <Badge variant="outline" className="text-xs bg-[hsl(var(--teksure-success)/0.1)] text-[hsl(var(--teksure-success))] border-[hsl(var(--teksure-success)/0.3)]">Free</Badge>}
                                <span className="text-xs text-muted-foreground">{mgr.price}</span>
                              </div>
                              <p className="text-xs text-muted-foreground mt-0.5">{mgr.bestFor}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <div className="flex gap-0.5">
                              {Array.from({ length: 5 }).map((_, si) => (
                                <Star key={si} className={`h-3 w-3 ${si < mgr.rating ? 'fill-[hsl(var(--teksure-warning))] text-[hsl(var(--teksure-warning))]' : 'text-muted-foreground'}`} />
                              ))}
                            </div>
                            {isExpanded ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                          </div>
                        </div>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-3 pt-3 border-t border-border">
                              <ul className="space-y-1.5 mb-3">
                                {mgr.pros.map((p, pi) => (
                                  <li key={pi} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-[hsl(var(--teksure-success))] shrink-0 mt-0.5" />
                                    {p}
                                  </li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-1">
                                {mgr.platforms.map(pl => <Badge key={pl} variant="secondary" className="text-xs">{pl}</Badge>)}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
              <h2 className="text-xl font-bold mb-3">Common Questions</h2>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <Card key={i} className="cursor-pointer" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium text-sm">{faq.q}</span>
                        {expandedFaq === i ? <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" /> : <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />}
                      </div>
                      {expandedFaq === i && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {faq.a}
                        </motion.p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-3 pb-4">
              <Button variant="outline" asChild className="flex-1"><Link to="/tools/two-factor-setup">Set Up 2FA Next →</Link></Button>
              <Button asChild className="flex-1"><Link to="/tools/cyber-scorecard">Full Security Scorecard</Link></Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
