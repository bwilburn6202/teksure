import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function SeniorIdentityTheftHelp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Identity Theft Help — Senior Guide" description="If your identity is stolen, here's what to do." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Identity Theft Help</h1>
          <p className="text-lg text-muted-foreground">If thieves got your info, do this.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Visit IdentityTheft.gov</h2><p>Official FTC site. Free recovery plan. Step-by-step.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Freeze credit</h2><p>Call Equifax, Experian, TransUnion. Free freezes block new accounts in your name.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. File police report</h2><p>Local police. Some banks need this to dispute fraud charges.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Change passwords</h2><p>All financial accounts first. Email, then social media. Use unique strong ones.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Pull credit report</h2><p>annualcreditreport.com — free weekly. Look for accounts you didn't open.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Skip paid services</h2><p>LifeLock and similar mostly do what you can do free yourself. Save the money.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Recovery takes time. Be patient with yourself. Most fraud is reversed in 30-90 days.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
