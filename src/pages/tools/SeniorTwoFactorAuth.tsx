import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SeniorTwoFactorAuth() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Two-Factor Authentication for Seniors — TekSure" description="Add a second password layer to email and bank accounts — clear senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Two-Factor Authentication</h1>
          <p className="text-lg text-muted-foreground">A second lock on your accounts.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What it is</h2><p>After your password, you also enter a 6-digit code from your phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why important</h2><p>Stops 99% of password theft. Even if scammers steal your password, they can&apos;t get in.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Text message code</h2><p>Easiest. The site texts a code each login. Works without an extra app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Authenticator app</h2><p>More secure. Try Google Authenticator or Authy. Free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Where to turn it on</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Email (Gmail, Outlook)</li><li>Bank accounts</li><li>Social Security online</li><li>Amazon, eBay</li><li>Facebook</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Save backup codes</h2><p>Each account gives 10 backup codes. Print and store safely.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Bank fraud drops 98% with 2FA on. Worth the 30-second setup.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
