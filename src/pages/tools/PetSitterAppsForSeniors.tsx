import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PawPrint } from 'lucide-react';

export default function PetSitterAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Sitter Apps for Seniors | TekSure" description="Rover, Wag, TrustedHousesitters senior travel pet care." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PawPrint className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Sitter Apps</h1>
          <p className="text-lg text-muted-foreground">Senior travel safe.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Rover</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$25-$75/night.</li><li>Background-checked sitters.</li><li>Read reviews.</li><li>Senior trusted.</li><li>Photo updates.</li><li>Most popular.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">TrustedHousesitters</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$130/year.</li><li>Free pet care exchange.</li><li>House + pet sitting.</li><li>Senior huge savings travel.</li><li>Vetted sitters.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Local sitter</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Nextdoor referrals.</li><li>$30-$50/visit.</li><li>Cheaper than apps.</li><li>Senior trust neighbors.</li><li>Cash friendly.</li><li>Personal.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Boarding kennel</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30-$60/night.</li><li>Vet-attached safer.</li><li>Senior dog stress.</li><li>Pre-visit tour.</li><li>Required vaccines.</li><li>Backup option.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Camera + auto-feeder</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$50 Wyze + $130 PetSafe.</li><li>Senior 3-day trip.</li><li>Self-serve solution.</li><li>Cheap.</li><li>Pet stays home.</li><li>Worth combo.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Always background check.</li><li>Read 50+ reviews.</li><li>Meet beforehand.</li><li>Senior caution.</li><li>Backup plan.</li><li>Trust gut.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Nextdoor + Wyze = senior pet travel</h3><p className="text-sm text-muted-foreground">Senior pet travel options: Nextdoor neighbor referrals cheapest + most trusted. Or Rover $25-$75/night vetted. TrustedHousesitters $130/yr free pet care exchange. Or $50 Wyze cam + $130 auto-feeder for short trips. Best senior pet care setup.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
