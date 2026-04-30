import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bug } from 'lucide-react';

export default function PestIDAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pest ID Apps for Senior Gardens | TekSure" description="Identify plant pests + diseases. Senior garden ID apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bug className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pest ID Apps</h1>
          <p className="text-lg text-muted-foreground">Senior garden helper.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">PictureThis</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30/year.</li><li>Plant disease ID.</li><li>Treatment suggestions.</li><li>Senior premium.</li><li>Trusted.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">PlantNet free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free plant ID.</li><li>Citizen science.</li><li>Less features.</li><li>Senior frugal.</li><li>Try first.</li><li>Free always.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pest control</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>BBC pest ID app free.</li><li>Aphids, beetles, etc.</li><li>Treatment options.</li><li>Senior organic preferred.</li><li>Compatible with kids/pets.</li><li>Read suggestions.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Master Gardener</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>State extension office.</li><li>Free advice.</li><li>Email photos.</li><li>Senior expert help.</li><li>Trusted source.</li><li>Often free volunteers.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Organic options</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Soap spray.</li><li>Neem oil.</li><li>Beneficial insects.</li><li>Senior pet/kid safe.</li><li>Effective.</li><li>Cheap.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tip</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Check daily.</li><li>Catch early.</li><li>Senior daily walk thru garden.</li><li>Spot before spread.</li><li>Easier prevention.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free PlantNet + extension office = senior gardener</h3><p className="text-sm text-muted-foreground">Free PlantNet identifies plants + diseases + Master Gardener extension office free expert help via email = senior gardener support. PictureThis $30/yr if want premium. Daily garden walk catches problems early. Best senior garden combo.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
