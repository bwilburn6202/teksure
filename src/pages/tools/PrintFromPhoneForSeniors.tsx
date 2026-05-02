import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Printer } from 'lucide-react';

export default function PrintFromPhoneForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Print from Phone for Seniors | TekSure" description="AirPrint + alternatives for senior phone printing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Printer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Print from Phone</h1>
          <p className="text-lg text-muted-foreground">Senior wireless printing.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">AirPrint iPhone</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tap share → Print.</li><li>Pick printer on wifi.</li><li>Senior simple.</li><li>Built-in iOS.</li><li>Free.</li><li>Most printers support.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">HP Smart app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>HP printers.</li><li>App scans + prints.</li><li>Senior ink monitor.</li><li>Mobile fax option.</li><li>Free.</li><li>Worth installing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">FedEx upload</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No printer? Upload.</li><li>Pickup at FedEx.</li><li>Senior $1-$5.</li><li>UPS Store similar.</li><li>Library cheaper.</li><li>Worth knowing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Print to PDF</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Print menu — Save PDF.</li><li>Senior digital file.</li><li>Email or save.</li><li>Free.</li><li>Skip paper.</li><li>Worth often.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Photo printing</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Walgreens 1-hour pickup.</li><li>Senior 25¢/4x6.</li><li>Costco cheap.</li><li>Better quality than home.</li><li>Worth ordering.</li><li>App orders.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best printer</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>HP DeskJet 4155e $80.</li><li>Senior cheap reliable.</li><li>AirPrint built-in.</li><li>Auto-shipped ink.</li><li>Compact.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$80 HP + AirPrint = senior easy</h3><p className="text-sm text-muted-foreground">$80 HP DeskJet + AirPrint built-in iPhone = senior wireless printing simple. Tap share → Print. Or FedEx/UPS upload + pickup if no printer. Walgreens photos 25¢. Print to PDF for digital. Most senior printing under $100 setup.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
