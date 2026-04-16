import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Mail, Phone, User, Globe, ExternalLink, AlertTriangle, CheckCircle, Lock, CreditCard, Clock } from 'lucide-react';

interface CheckService { name: string; url: string; description: string; checks: string[]; pricing: string; trust: 'high' | 'medium'; }

const EMAIL_SERVICES: CheckService[] = [
  { name: 'Have I Been Pwned', url: 'https://haveibeenpwned.com/', description: 'The gold standard — created by security expert Troy Hunt. Checks against 13+ billion breached accounts.', checks: ['email', 'phone'], pricing: 'Free', trust: 'high' },
  { name: 'Firefox Monitor', url: 'https://monitor.firefox.com/', description: 'Mozilla\'s breach checker — powered by HIBP data. Set up alerts for future breaches.', checks: ['email'], pricing: 'Free', trust: 'high' },
  { name: 'CyberNews Checker', url: 'https://cybernews.com/personal-data-leak-check/', description: 'Checks your email against their own database of known breaches.', checks: ['email'], pricing: 'Free', trust: 'medium' },
  { name: 'Avast Hack Check', url: 'https://www.avast.com/hackcheck', description: 'Avast\'s free breach checker — also sends alerts when new breaches include your email.', checks: ['email'], pricing: 'Free', trust: 'medium' },
  { name: 'HPI Identity Leak Checker', url: 'https://sec.hpi.de/ilc/', description: 'Germany\'s Hasso-Plattner-Institut checker — sends a detailed report to your email.', checks: ['email'], pricing: 'Free', trust: 'high' },
  { name: 'Google Password Checkup', url: 'https://passwords.google.com/', description: 'Check your saved passwords in Google Chrome for breaches — also shows reused and weak passwords.', checks: ['passwords'], pricing: 'Free', trust: 'high' },
];

const DOMAIN_SERVICES: CheckService[] = [
  { name: 'SpyCloud', url: 'https://spycloud.com/check-your-exposure/', description: 'Check if your company domain has had employee credentials exposed.', checks: ['domain'], pricing: 'Free check', trust: 'high' },
  { name: 'Hudson Rock', url: 'https://cavalier.hudsonrock.com/', description: 'Check if your domain has been compromised by infostealer malware.', checks: ['domain'], pricing: 'Free', trust: 'high' },
  { name: 'Intelligence X', url: 'https://intelx.io/', description: 'Advanced search across breach data, darknet, and public records.', checks: ['email', 'domain', 'IP'], pricing: 'Freemium', trust: 'high' },
  { name: 'LeakCheck', url: 'https://leakcheck.io/', description: 'Search breaches by email, username, phone, or domain.', checks: ['email', 'username', 'phone', 'domain'], pricing: 'Freemium', trust: 'medium' },
];

const BREACHES = [
  { name: 'National Public Data', date: 'Aug 2024', records: '2.9 billion', data: 'SSN, names, addresses, phone numbers', severity: 'critical' as const },
  { name: 'AT&T', date: 'Mar 2024', records: '73 million', data: 'SSN, account details, passcodes', severity: 'critical' as const },
  { name: 'Ticketmaster', date: 'May 2024', records: '560 million', data: 'Names, emails, payment info', severity: 'high' as const },
  { name: 'Change Healthcare', date: 'Feb 2024', records: '100 million', data: 'Medical records, SSN, insurance info', severity: 'critical' as const },
  { name: 'MOVEit', date: 'Jun 2023', records: '77 million', data: 'Names, SSN, financial data', severity: 'high' as const },
  { name: 'T-Mobile', date: 'Jan 2023', records: '37 million', data: 'Names, emails, phone numbers, dates of birth', severity: 'high' as const },
  { name: 'Twitter/X', date: 'Jan 2023', records: '200 million', data: 'Email addresses, usernames', severity: 'medium' as const },
  { name: 'LastPass', date: 'Dec 2022', records: '25 million', data: 'Encrypted vaults, email, billing info', severity: 'critical' as const },
  { name: 'Facebook', date: 'Apr 2021', records: '533 million', data: 'Phone numbers, names, locations, emails', severity: 'high' as const },
  { name: 'LinkedIn', date: 'Jun 2021', records: '700 million', data: 'Names, emails, phone numbers, professional data', severity: 'high' as const },
];

const RECOVERY_STEPS = [
  { icon: Lock, title: 'Change the password on the breached account', detail: 'Do this immediately. Use a unique password at least 12 characters long.' },
  { icon: Lock, title: 'Change passwords on any account that used the same password', detail: 'If you reused the breached password anywhere else, change those too — right now.' },
  { icon: Shield, title: 'Enable two-factor authentication', detail: 'Turn on 2FA on your email, banking, and social media accounts. Use an authenticator app over SMS if possible.' },
  { icon: CreditCard, title: 'Freeze your credit at all three bureaus', detail: 'Equifax (equifax.com), Experian (experian.com), TransUnion (transunion.com). A credit freeze is free and prevents new accounts from being opened in your name.' },
  { icon: Mail, title: 'Watch for phishing emails', detail: 'After a breach, scammers often send fake "security alert" emails. Do not click links — go directly to the website.' },
  { icon: CheckCircle, title: 'Check your credit report', detail: 'Get your free report at annualcreditreport.com. Look for accounts or inquiries you do not recognize.' },
];

export default function DataLeakDashboard() {
  const [activeTab, setActiveTab] = useState('check');
  return (
    <>
      <SEOHead title="Data Leak Dashboard" description="Check if your personal data has been exposed in a breach. Find breach-checking tools, recent breaches, and recovery steps." path="/tools/data-leak-dashboard" />
      <Navbar />
      <main className="min-h-screen bg-background"><div className="container max-w-4xl py-12 px-4">
        <div className="text-center mb-10"><Shield className="h-12 w-12 text-primary mx-auto mb-4" /><h1 className="text-3xl font-bold mb-2">Data Leak Dashboard</h1><p className="text-muted-foreground max-w-lg mx-auto">Check if your data has been exposed, see recent breaches, and learn what to do if you are affected.</p></div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full justify-start mb-6">
            <TabsTrigger value="check" className="gap-1.5"><Mail className="h-3.5 w-3.5" /> Check Your Data</TabsTrigger>
            <TabsTrigger value="breaches" className="gap-1.5"><AlertTriangle className="h-3.5 w-3.5" /> Recent Breaches</TabsTrigger>
            <TabsTrigger value="recovery" className="gap-1.5"><Shield className="h-3.5 w-3.5" /> Recovery Steps</TabsTrigger>
          </TabsList>

          <TabsContent value="check">
            <div className="space-y-6">
              <div><h2 className="text-lg font-semibold mb-3 flex items-center gap-2"><Mail className="h-5 w-5" /> Check Your Email</h2>
                <div className="grid sm:grid-cols-2 gap-3">{EMAIL_SERVICES.map(svc => (
                  <Card key={svc.name}><CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2"><h3 className="font-semibold text-sm">{svc.name}</h3><Badge variant={svc.trust === 'high' ? 'default' : 'secondary'} className="text-xs">{svc.trust === 'high' ? 'Trusted' : 'Useful'}</Badge></div>
                    <p className="text-xs text-muted-foreground mb-3">{svc.description}</p>
                    <div className="flex items-center justify-between"><Badge variant="outline" className="text-xs">{svc.pricing}</Badge><a href={svc.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary font-medium flex items-center gap-1 hover:underline">Check Now <ExternalLink className="h-3 w-3" /></a></div>
                  </CardContent></Card>
                ))}</div>
              </div>
              <div><h2 className="text-lg font-semibold mb-3 flex items-center gap-2"><Globe className="h-5 w-5" /> Check Your Domain</h2>
                <div className="grid sm:grid-cols-2 gap-3">{DOMAIN_SERVICES.map(svc => (
                  <Card key={svc.name}><CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2"><h3 className="font-semibold text-sm">{svc.name}</h3><Badge variant="outline" className="text-xs">{svc.pricing}</Badge></div>
                    <p className="text-xs text-muted-foreground mb-3">{svc.description}</p>
                    <div className="flex items-center gap-2 flex-wrap">{svc.checks.map(c => <Badge key={c} variant="secondary" className="text-xs">{c}</Badge>)}<a href={svc.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary font-medium flex items-center gap-1 hover:underline ml-auto">Visit <ExternalLink className="h-3 w-3" /></a></div>
                  </CardContent></Card>
                ))}</div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="breaches">
            <div className="space-y-3">{BREACHES.map(b => (
              <Card key={b.name} className={b.severity === 'critical' ? 'border-red-500/30' : b.severity === 'high' ? 'border-amber-500/30' : ''}>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="flex-1"><div className="flex items-center gap-2 mb-1"><h3 className="font-semibold text-sm">{b.name}</h3><Badge variant={b.severity === 'critical' ? 'destructive' : b.severity === 'high' ? 'default' : 'secondary'} className="text-xs">{b.severity}</Badge></div>
                    <p className="text-xs text-muted-foreground">{b.data}</p></div>
                  <div className="text-right shrink-0"><p className="font-bold text-sm">{b.records}</p><p className="text-xs text-muted-foreground flex items-center gap-1 justify-end"><Clock className="h-3 w-3" /> {b.date}</p></div>
                </CardContent>
              </Card>
            ))}</div>
          </TabsContent>

          <TabsContent value="recovery">
            <Card><CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">What to do if your data was breached</h2>
              <div className="space-y-4">{RECOVERY_STEPS.map((step, i) => (
                <div key={i} className="flex gap-4 p-3 rounded-lg hover:bg-muted/50">
                  <div className="bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center shrink-0"><step.icon className="h-5 w-5 text-primary" /></div>
                  <div><h3 className="font-medium text-sm">Step {i + 1}: {step.title}</h3><p className="text-xs text-muted-foreground mt-1">{step.detail}</p></div>
                </div>
              ))}</div>
              <div className="mt-6 pt-4 border-t"><Link to="/tools/cyber-scorecard" className="text-sm text-primary font-medium hover:underline">Take the Security Scorecard to check your overall security posture →</Link></div>
            </CardContent></Card>
          </TabsContent>
        </Tabs>
      </div></main>
      <Footer />
    </>
  );
}
