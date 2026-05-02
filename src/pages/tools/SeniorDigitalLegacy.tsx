import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function SeniorDigitalLegacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Legacy for Seniors — TekSure" description="Apple Legacy Contact, Google Inactive Account — pass on digital life." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Legacy</h1>
          <p className="text-lg text-muted-foreground">Pass on photos, accounts, memories.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Legacy Contact</h2><p>Settings → Apple ID → Legacy Contact. Family accesses iCloud after death.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Inactive Account</h2><p>myaccount.google.com → Data → Inactive Account Manager. Auto-shares with family.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Facebook Memorialization</h2><p>Designate legacy contact. Page becomes memorial.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Password manager</h2><p>1Password Family. Trusted family accesses if needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Letter to family</h2><p>Where photos, accounts, papers are. Where to find passwords.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cancel subscriptions</h2><p>List all monthly subscriptions. Family cancels avoiding billing.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 1 hour setting up legacy contacts saves family weeks of frustration.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
