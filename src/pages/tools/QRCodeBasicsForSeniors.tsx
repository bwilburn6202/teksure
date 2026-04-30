import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { QrCode } from 'lucide-react';

export default function QRCodeBasicsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="QR Code Basics for Seniors | TekSure" description="Scan QR codes confidently. Senior QR code guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <QrCode className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">QR Code Basics</h1>
          <p className="text-lg text-muted-foreground">Scan with confidence.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Square barcode.</li><li>Phone camera scans.</li><li>Opens link or app.</li><li>Senior everywhere now.</li><li>Restaurants, parking.</li><li>Free + built-in.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">How to scan</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Open phone Camera.</li><li>Point at QR code.</li><li>Yellow box appears.</li><li>Tap link.</li><li>Senior 5 seconds.</li><li>iPhone + Android.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Common uses</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Restaurant menu.</li><li>Parking payment.</li><li>Wifi password.</li><li>Event tickets.</li><li>Boarding pass.</li><li>Senior modern life.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch out scams</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Fake QR on parking meters.</li><li>Steals payment info.</li><li>Senior verify URL.</li><li>Look for suspicious site.</li><li>Pay attention before paying.</li><li>Don&apos;t random scan.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Make your own</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>QR Code Generator free.</li><li>Email signature.</li><li>Wifi share with guests.</li><li>Senior fun project.</li><li>Free tools online.</li><li>Many uses.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Practice</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Look for QRs at home.</li><li>Cereal boxes.</li><li>Magazines.</li><li>Senior practice safe ones.</li><li>Build confidence.</li><li>Easy.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Camera + QR = senior modern essential</h3><p className="text-sm text-muted-foreground">QR codes everywhere now. Senior must learn — point camera, tap link. 5-second skill. Watch for fake QRs at parking meters. Restaurants use heavily for menus. Practice on cereal box first. Most basic modern senior tech skill.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
