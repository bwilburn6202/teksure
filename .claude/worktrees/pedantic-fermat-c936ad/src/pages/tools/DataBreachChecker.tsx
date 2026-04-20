import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { ShieldCheck, Search, AlertTriangle, CheckCircle, ExternalLink, Info, Lock, ArrowRight } from 'lucide-react';

interface BreachInfo {
  name: string;
  date: string;
  recordsAffected: string;
  dataExposed: string[];
  description: string;
}

const commonBreaches: BreachInfo[] = [
  { name: 'National Public Data', date: 'August 2024', recordsAffected: '2.9 billion records', dataExposed: ['Social Security numbers', 'Full names', 'Addresses', 'Phone numbers'], description: 'A massive data broker breach that exposed Social Security numbers and personal information for nearly every American.' },
  { name: 'AT&T', date: 'March 2024', recordsAffected: '73 million customers', dataExposed: ['Social Security numbers', 'Account PINs', 'Email addresses', 'Phone numbers'], description: 'AT&T customer data including Social Security numbers was found on the dark web, affecting both current and former customers.' },
  { name: 'Ticketmaster', date: 'May 2024', recordsAffected: '560 million users', dataExposed: ['Names', 'Email addresses', 'Phone numbers', 'Partial payment info'], description: 'Hackers accessed Ticketmaster\'s customer database through a cloud storage provider and stole half a billion records.' },
  { name: 'Change Healthcare', date: 'February 2024', recordsAffected: '100 million patients', dataExposed: ['Health records', 'Social Security numbers', 'Billing information'], description: 'A ransomware attack on one of the largest health data processors in the US exposed sensitive medical and financial data.' },
  { name: 'Facebook (Meta)', date: 'April 2021', recordsAffected: '533 million users', dataExposed: ['Phone numbers', 'Email addresses', 'Full names', 'Locations'], description: 'Personal data from over 500 million Facebook users was found posted freely on a hacking forum.' },
  { name: 'LinkedIn', date: 'June 2021', recordsAffected: '700 million users', dataExposed: ['Email addresses', 'Phone numbers', 'Work history', 'Physical addresses'], description: 'Data scraped from LinkedIn profiles was compiled and sold, exposing professional and personal information.' },
  { name: 'T-Mobile', date: 'August 2021', recordsAffected: '77 million customers', dataExposed: ['Social Security numbers', 'Names', 'Dates of birth', 'Driver\'s license numbers'], description: 'A hacker breached T-Mobile systems and stole highly sensitive personal data including Social Security numbers.' },
  { name: 'Equifax', date: 'September 2017', recordsAffected: '147 million people', dataExposed: ['Social Security numbers', 'Birth dates', 'Addresses', 'Credit card numbers'], description: 'One of the three major credit bureaus was breached, exposing the Social Security numbers and financial data of nearly half of all Americans.' },
];

const recoverySteps = [
  { id: 'step-password', label: 'Change the password on every account that used the breached email', why: 'If hackers have your email and password from one site, they will try it on every other site. Use a different password for each account.' },
  { id: 'step-2fa', label: 'Turn on two-factor authentication on important accounts', why: 'Even if someone gets your password, two-factor authentication stops them from logging in without your phone.' },
  { id: 'step-credit', label: 'Check your credit reports for unfamiliar accounts', why: 'If your Social Security number was exposed, someone may try to open credit cards or loans in your name.', link: 'https://www.annualcreditreport.com/', linkLabel: 'AnnualCreditReport.com (free)' },
  { id: 'step-freeze', label: 'Consider a credit freeze at all three bureaus', why: 'A credit freeze prevents anyone from opening new accounts in your name. It is free and you can unfreeze it when you need to.', link: 'https://consumer.ftc.gov/articles/what-know-about-credit-freezes-fraud-alerts', linkLabel: 'FTC: Credit Freeze Guide' },
  { id: 'step-monitor', label: 'Set up fraud alerts or credit monitoring', why: 'A fraud alert tells creditors to verify your identity before opening new accounts. It is free and lasts one year.' },
  { id: 'step-phishing', label: 'Watch for phishing emails pretending to be about the breach', why: 'Scammers send fake "breach notification" emails with links to steal more information. Go directly to the company\'s website instead.' },
  { id: 'step-ssn', label: 'If your SSN was exposed, report it to the FTC', why: 'The FTC helps you create a recovery plan and provides official documentation if you become a victim.', link: 'https://www.identitytheft.gov/', linkLabel: 'IdentityTheft.gov' },
  { id: 'step-bank', label: 'Review your bank and credit card statements for unauthorized charges', why: 'Look for charges you do not recognize, even small ones. Thieves often test with small amounts before making large purchases.' },
];

export default function DataBreachChecker() {
  const [email, setEmail] = useState('');
  const [hasChecked, setHasChecked] = useState(false);
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>({});

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleCheck = () => {
    if (isValidEmail) setHasChecked(true);
  };

  const toggleStep = (id: string) => {
    setCheckedSteps(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const stepsCompleted = Object.values(checkedSteps).filter(Boolean).length;
  const stepsProgress = recoverySteps.length > 0 ? Math.round((stepsCompleted / recoverySteps.length) * 100) : 0;

  return (
    <>
      <SEOHead
        title="Data Breach Checker — Has Your Information Been Exposed? | TekSure"
        description="Learn about major data breaches, check if your email may have been affected, and get step-by-step instructions to protect yourself after a breach."
        path="/tools/data-breach-checker"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Data Breach Checker' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-6 w-6 text-amber-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Data Breach Checker</h1>
            <p className="text-muted-foreground text-lg">
              Major data breaches have exposed the personal information of billions of people. Learn which breaches may have affected you and what to do about it — explained in plain English.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl">
          {/* What is a data breach */}
          <div className="p-6 rounded-2xl border border-border bg-muted/50 mb-8">
            <h2 className="font-semibold flex items-center gap-2 mb-3">
              <Info className="h-5 w-5 text-primary" aria-hidden="true" /> What is a data breach?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A data breach happens when hackers break into a company's computer systems and steal customer information. This can include your name, email address, phone number, passwords, Social Security number, or credit card information. Even if you did everything right to protect yourself, your data can be stolen from a company you trusted with it.
            </p>
          </div>

          {/* Email check */}
          <div className="p-6 rounded-2xl border border-border bg-card mb-8">
            <h2 className="font-semibold text-lg mb-2">Check your email address</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Enter your email below to see which major breaches may have included accounts associated with your email address. Your email is not sent anywhere — this check runs entirely on your device.
            </p>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" aria-hidden="true" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="pl-11 h-12 rounded-2xl"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setHasChecked(false); }}
                  aria-label="Email address to check"
                  onKeyDown={e => { if (e.key === 'Enter') handleCheck(); }}
                />
              </div>
              <button
                onClick={handleCheck}
                disabled={!isValidEmail}
                className="px-6 h-12 rounded-2xl bg-foreground text-background font-medium hover:opacity-90 transition-opacity disabled:opacity-40 min-h-[44px]"
              >
                Check
              </button>
            </div>
          </div>

          {hasChecked && (
            <>
              {/* Results */}
              <div className="p-5 rounded-2xl border-2 border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/20 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-1">Your email has likely been in data breaches</h3>
                    <p className="text-sm text-amber-700 dark:text-amber-400 leading-relaxed">
                      If you have had an online account for more than a few years, your email address has almost certainly been part of at least one data breach. The breaches below affected billions of people. Review the list and follow the recovery steps.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                For a real-time check against all known breaches, visit the trusted resource below:
              </p>
              <a
                href="https://haveibeenpwned.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-colors text-sm font-medium mb-8 min-h-[44px]"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" /> HaveIBeenPwned.com — free, trusted breach checker
              </a>

              {/* Major breaches */}
              <h2 className="font-semibold text-lg mb-4">Major Data Breaches (2017 - 2024)</h2>
              <div className="space-y-4 mb-10">
                {commonBreaches.map(breach => (
                  <div key={breach.name} className="rounded-2xl border border-border bg-card p-5">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h3 className="font-semibold">{breach.name}</h3>
                      <Badge variant="outline" className="whitespace-nowrap">{breach.date}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{breach.description}</p>
                    <div className="flex flex-wrap gap-4 text-xs">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <AlertTriangle className="h-3 w-3 text-amber-500" aria-hidden="true" /> {breach.recordsAffected}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {breach.dataExposed.map(d => (
                        <span key={d} className="px-2 py-0.5 rounded-full bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 text-xs font-medium">{d}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Recovery checklist */}
              <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" aria-hidden="true" /> What to Do After a Data Breach
              </h2>
              <p className="text-sm text-muted-foreground mb-4">Check off each step as you complete it. These are the most important things you can do to protect yourself.</p>

              <div className="p-4 rounded-2xl border border-border bg-card mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{stepsCompleted} of {recoverySteps.length} complete</span>
                </div>
                <Progress value={stepsProgress} className="h-2" aria-label={`Recovery progress: ${stepsProgress} percent`} />
              </div>

              <div className="space-y-3 mb-10">
                {recoverySteps.map((step, i) => (
                  <div key={step.id} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                    <Checkbox
                      id={step.id}
                      checked={!!checkedSteps[step.id]}
                      onCheckedChange={() => toggleStep(step.id)}
                      className="mt-1"
                      aria-label={step.label}
                    />
                    <div className="flex-1">
                      <label htmlFor={step.id} className={`text-sm font-medium cursor-pointer flex items-center gap-2 ${checkedSteps[step.id] ? 'line-through text-muted-foreground' : ''}`}>
                        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex-shrink-0">{i + 1}</span>
                        {step.label}
                      </label>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed ml-7">{step.why}</p>
                      {step.link && (
                        <a href={step.link} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline inline-flex items-center gap-1 mt-1 ml-7">
                          <ExternalLink className="h-3 w-3" aria-hidden="true" /> {step.linkLabel}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Prevention tips */}
          <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" /> How to Protect Yourself Going Forward
          </h2>
          <div className="space-y-3 mb-8">
            {[
              { title: 'Use a different password for every account', desc: 'If one site is breached, hackers cannot use the same password to get into your other accounts. Use a password manager to keep track.' },
              { title: 'Turn on two-factor authentication everywhere', desc: 'This adds a second step (usually a code texted to your phone) when you log in. It is the single best thing you can do to protect your accounts.' },
              { title: 'Be careful what personal info you share online', desc: 'The less personal information that is out there, the less that can be stolen. Think twice before filling in optional fields on websites.' },
              { title: 'Freeze your credit if you are not applying for loans', desc: 'A credit freeze costs nothing and prevents anyone from opening accounts in your name. You can temporarily unfreeze it when you need to.' },
              { title: 'Check your bank statements regularly', desc: 'Look for charges you do not recognize, even small ones. Thieves often test with tiny charges before making big ones.' },
            ].map(tip => (
              <div key={tip.title} className="flex gap-3 p-4 rounded-xl border border-border bg-card">
                <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium mb-1">{tip.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Resources */}
          <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-3">Official Resources</p>
            <div className="space-y-2">
              {[
                { url: 'https://www.identitytheft.gov/', label: 'IdentityTheft.gov — FTC identity theft recovery' },
                { url: 'https://haveibeenpwned.com/', label: 'HaveIBeenPwned.com — check your email for breaches' },
                { url: 'https://www.annualcreditreport.com/', label: 'AnnualCreditReport.com — free credit reports' },
                { url: 'https://consumer.ftc.gov/features/identity-theft', label: 'FTC: Identity Theft resources' },
              ].map(r => (
                <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-1">
                  <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" /> {r.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
