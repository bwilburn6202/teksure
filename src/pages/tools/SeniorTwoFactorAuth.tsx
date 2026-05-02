import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SeniorTwoFactorAuth() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Two-Factor Auth — Senior Guide" description="Lock down your accounts with two-factor authentication." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Two-Factor Auth</h1>
          <p className="text-lg text-muted-foreground">A second lock on every account.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. What it is</h2><p>After typing a password, the site asks for a 6-digit code. Stops most break-ins.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Where to turn it on</h2><p>Settings, Security, Two-Step Verification. Most major sites have this.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Text codes</h2><p>Easiest. Site texts a code to your phone when you sign in. Type it in.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Authenticator apps</h2><p>Google Authenticator or Authy. Codes change every 30 seconds. Safer than text.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Backup codes</h2><p>Print backup codes when you set this up. Keep at home in case you lose your phone.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Most important accounts</h2><p>Email, bank, Apple ID, Google. Protect these first — they unlock everything else.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Never share a 2FA code by phone or text. Real banks never ask for it. Scammers do.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
