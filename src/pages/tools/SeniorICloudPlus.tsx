import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function SeniorICloudPlus() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iCloud+ for Seniors — TekSure" description="iCloud+ subscription tiers explained for seniors — storage, hide email, private relay." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iCloud+ for Seniors</h1>
          <p className="text-lg text-muted-foreground">Pick the right plan.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free 5 GB</h2><p>Comes with every Apple ID. Most seniors fill this in a year of photos.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">50 GB ($0.99/month)</h2><p>Most seniors. Backs up photos and phone reliably.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">200 GB ($2.99/month)</h2><p>Heavy photo users. Family sharing — up to 5 people use same plan.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">2 TB ($9.99/month)</h2><p>Massive photo libraries. Full Mac backups too.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hide My Email</h2><p>Free with iCloud+. Generate fake emails for sites. Spam goes there.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Private Relay</h2><p>Free with iCloud+. Hides your IP from websites. Privacy boost.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Family Sharing 200 GB plan = best value. $0.60/person.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
