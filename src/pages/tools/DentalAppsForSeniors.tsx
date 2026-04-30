import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smile } from 'lucide-react';

export default function DentalAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dental Apps for Seniors | TekSure" description="Find dentists, save on dental. Senior dental care apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smile className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dental Apps</h1>
          <p className="text-lg text-muted-foreground">Senior dental care.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Medicare gap</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Original Medicare no dental.</li><li>Medicare Advantage may include.</li><li>Senior big surprise.</li><li>Plan ahead.</li><li>Compare plans.</li><li>Dental separate often.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Dental discount plans</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Careington $7/mo.</li><li>Aetna Dental Discount.</li><li>Senior 10-50% off.</li><li>Cheaper than insurance.</li><li>Worth it.</li><li>Many providers.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Find dentist</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Yelp + Google reviews.</li><li>ADA Find-a-Dentist.</li><li>Senior reviews matter.</li><li>Insurance directory.</li><li>Office tour first.</li><li>Comfort matters.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Dental schools</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>50% off cleanings.</li><li>Students supervised.</li><li>Senior frugal option.</li><li>Higher quality often.</li><li>Slower visits.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Implants</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$3,000-$5,000 each.</li><li>Senior big expense.</li><li>Mexico dental tourism saves 60%.</li><li>Algodones, Mexico popular.</li><li>Research carefully.</li><li>Quality varies.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Floss + brush twice.</li><li>Annual cleaning.</li><li>X-rays only when needed.</li><li>Senior gum disease prevent.</li><li>Worth it.</li><li>Connect health.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$84/year dental discount = senior savings</h3><p className="text-sm text-muted-foreground">Senior Medicare doesn&apos;t cover dental. Careington $7/mo discount plan = 10-50% savings on dentist visits. Or Medicare Advantage with dental included. Dental schools 50% cleanings. Mexico dental tourism for big work saves 60%. Plan ahead.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
