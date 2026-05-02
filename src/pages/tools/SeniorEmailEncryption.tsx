import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function SeniorEmailEncryption() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Email Encryption — Senior Guide" description="Send sensitive email more privately." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Email Encryption</h1>
          <p className="text-lg text-muted-foreground">More private email when you need it.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. ProtonMail</h2><p>Free at proton.me. Encrypted by default. Made in Switzerland.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Confidential Mode (Gmail)</h2><p>Gmail compose, click padlock. Set expiration. Recipient gets a temporary link.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Send via secure portals</h2><p>Banks and doctors use secure messaging in their apps. Use those for paperwork.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Skip sensitive in regular email</h2><p>Don't send Social Security, account numbers in plain email.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Recipient must understand</h2><p>Encryption only works if both ends use it. Best for emails between encryption users.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Use a phone call</h2><p>Truly sensitive? Just call. Old technology, still safest for personal data.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Most seniors don't need encrypted email. Strong passwords and 2FA matter more.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
