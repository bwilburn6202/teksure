import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorFacebookSafer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Facebook Safety for Seniors — Senior Guide" description="Use Facebook safely and avoid scams." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Facebook Safety</h1>
          <p className="text-lg text-muted-foreground">Stay in touch without falling for scams.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Privacy settings</h2><p>Settings, Privacy, Posts. Set Who can see future posts to Friends.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Beware copycats</h2><p>If a friend's account messages you a strange link, call them — that account is likely hacked.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Friend requests</h2><p>Don't accept strangers. Especially handsome strangers from far places — that's catfishing.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Skip Marketplace deals</h2><p>If the deal sounds too good, it is. Many Marketplace scams target seniors.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Limit personal info</h2><p>Don't post your full date of birth, address, or vacation dates publicly.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Two-step login</h2><p>Settings, Security and Login. Turn on Two-Factor Authentication.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If a Facebook message demands money or a gift card, it is 100% a scam. Block and report.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
