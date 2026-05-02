import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Key } from 'lucide-react';

export default function SeniorPasswordCleanup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Password Cleanup for Seniors — TekSure" description="Audit and update your passwords — Apple iCloud Keychain, password managers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Key className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Password Cleanup</h1>
          <p className="text-lg text-muted-foreground">Find weak ones. Replace breached ones.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iCloud Keychain audit</h2><p>Settings → Passwords → Security Recommendations. Lists weak/leaked passwords.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Password Checkup</h2><p>passwords.google.com → Password Checkup. Same audit for Chrome.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Have I Been Pwned</h2><p>haveibeenpwned.com (free). See if your email was in breaches.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Update breached passwords</h2><p>Especially banks, email, social media. Use a password manager.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Different password each site</h2><p>If one is breached, others stay safe. Manager remembers them all.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Two-factor everything</h2><p>Especially banks and email. Even breached passwords are useless.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 1 hour password audit yearly. Prevents 99% of identity theft.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
