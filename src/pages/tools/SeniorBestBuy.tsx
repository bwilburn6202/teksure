import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

export default function SeniorBestBuy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Geek Squad for Seniors — TekSure" description="Best Buy Geek Squad services for seniors — install, repair, tune-up." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Geek Squad for Seniors</h1>
          <p className="text-lg text-muted-foreground">Tech help when you need it.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">In-store consultation</h2><p>FREE. Walk in. Ask any tech question.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Common services</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>TV mounting ($99)</li><li>Smart device install ($100)</li><li>Computer setup ($100)</li><li>Virus removal ($150)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Total Tech</h2><p>$200/year membership. Free Geek Squad service. Worth it if you call often.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior friendly</h2><p>Geek Squad agents trained to be patient. Don&apos;t feel rushed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">In-home service</h2><p>$100-$200 for Geek Squad to come install. Set up smart home, mount TV, etc.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Phone help</h2><p>1-800-GEEK-SQUAD. 24/7 phone support.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Total Tech Membership saves seniors $300+/year if they need tech help quarterly.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
