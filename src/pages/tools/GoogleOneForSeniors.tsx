import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function GoogleOneForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google One for Seniors | TekSure" description="Google cloud storage + perks. Google One senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google One</h1>
          <p className="text-lg text-muted-foreground">Google cloud storage.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free 15GB</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free Google account.</li><li>Drive + Gmail + Photos.</li><li>Most seniors fill it.</li><li>Time to upgrade.</li><li>Inbox stops accepting email.</li><li>Backup risk.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Paid tiers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>100GB — $2/month.</li><li>200GB — $3/month.</li><li>2TB — $10/month.</li><li>10TB — $50.</li><li>Family share.</li><li>Senior pick.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior recommendation</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>200GB — $3/month.</li><li>Plenty.</li><li>Family share with adults.</li><li>Photos + email + Drive.</li><li>Best value.</li><li>Senior peace.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Magic Eraser</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free with Google One.</li><li>Remove unwanted from photos.</li><li>iPhone + Android.</li><li>Senior tourist remover.</li><li>Worth subscription.</li><li>AI feature.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">VPN included</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>2TB+ plans include VPN.</li><li>Private wifi.</li><li>Senior coffee shop safe.</li><li>$3/mo plans no VPN.</li><li>2TB has it.</li><li>Bonus value.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>One.google.com.</li><li>Or Google One app.</li><li>Choose plan.</li><li>Auto-applies.</li><li>Family share invite.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$3/mo = Google account never full</h3><p className="text-sm text-muted-foreground">Google One 200GB ($3/month) = senior Gmail never bounces, Photos backs up, Drive has space. Plus Magic Eraser AI. Family share with adult kids. Best $36/year senior digital insurance. Most under-considered senior cloud upgrade.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
