import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, ExternalLink, Lock } from 'lucide-react';

export default function DataBreachChecker() {
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);
  const handleCheck = (e: React.FormEvent) => { e.preventDefault(); if (email.includes('@')) setChecked(true); };
  return (
    <>
      <SEOHead title="Data Breach Checker" description="Find out if your email has appeared in a data breach and learn how to protect your accounts." path="/tools/data-breach-checker" />
      <Navbar />
      <main className="min-h-screen bg-background"><div className="container max-w-2xl py-12 px-4">
        <div className="text-center mb-10"><Shield className="h-12 w-12 text-primary mx-auto mb-4" /><h1 className="text-3xl font-bold mb-2">Data Breach Checker</h1><p className="text-muted-foreground">Find out if your email has been exposed in a known data breach</p></div>
        <Card><CardContent className="p-6">
          {!checked ? (
            <div>
              <p className="text-sm text-muted-foreground mb-4">We recommend using the free, trusted service <strong>Have I Been Pwned</strong> (created by cybersecurity expert Troy Hunt) to check if your email appears in any known data breaches.</p>
              <form onSubmit={handleCheck} className="space-y-4">
                <Input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
                <Button type="submit" className="w-full gap-2"><Shield className="h-4 w-4" /> Check My Email</Button>
              </form>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2"><ExternalLink className="h-4 w-4" /> Check on Have I Been Pwned</h3>
                <p className="text-sm text-muted-foreground mb-3">Click below to check <strong>{email}</strong> on the official Have I Been Pwned website. This is a free, trusted service used by millions.</p>
                <a href={`https://haveibeenpwned.com/account/${encodeURIComponent(email)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">Check on haveibeenpwned.com <ExternalLink className="h-4 w-4" /></a>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2"><Lock className="h-5 w-5" /> What to do if your email was breached</h3>
                <ul className="space-y-2 text-sm">{[
                  'Change the password for the breached account immediately',
                  'If you reused that password anywhere else, change those too',
                  'Enable two-factor authentication on your email and banking accounts',
                  'Consider using a password manager (Bitwarden is free)',
                  'Watch for unusual activity on your accounts for the next few months',
                  'Check your credit report at annualcreditreport.com (free)',
                ].map((tip, i) => <li key={i} className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />{tip}</li>)}</ul>
              </div>
              <Button variant="outline" onClick={() => { setChecked(false); setEmail(''); }} className="w-full">Check Another Email</Button>
            </div>
          )}
        </CardContent></Card>
      </div></main>
      <Footer />
    </>
  );
}
