import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Printer, ChevronRight, RotateCcw } from 'lucide-react';

type Phone = 'iphone' | 'android';
type Brand = 'hp' | 'epson' | 'canon' | 'brother' | 'other';

const STEPS: Record<Phone, Record<Brand, { app?: string; steps: string[] }>> = {
  iphone: {
    hp: { app: 'HP Smart', steps: ['Make sure printer and iPhone are on the same Wi-Fi.', 'Open the photo or document on your iPhone.', 'Tap the Share button (square with arrow up).', 'Scroll down and tap "Print".', 'Tap "Select Printer" and pick your HP printer.', 'Tap "Print" in the top right.', 'For more options (color, copies), install "HP Smart" from the App Store.'] },
    epson: { app: 'Epson iPrint', steps: ['Connect printer and iPhone to the same Wi-Fi.', 'Open the photo or PDF on your iPhone.', 'Tap Share → Print → pick your Epson printer.', 'For scanning or photo paper settings, install "Epson iPrint" from the App Store.'] },
    canon: { app: 'Canon PRINT', steps: ['Both devices on the same Wi-Fi.', 'Open the file → Share → Print → pick your Canon printer.', 'Install "Canon PRINT Inkjet/SELPHY" for ink levels and scanning.'] },
    brother: { app: 'Brother iPrint&Scan', steps: ['Same Wi-Fi for both.', 'Open file → Share → Print → pick the Brother.', 'Install "Brother iPrint&Scan" for scanning to your phone.'] },
    other: { steps: ['Make sure your printer supports AirPrint (most newer ones do).', 'Connect both phone and printer to the same Wi-Fi network.', 'Open the document → tap Share → Print.', 'If your printer is not in the list, check the printer\'s manual or look up "[your printer model] AirPrint".'] },
  },
  android: {
    hp: { app: 'HP Smart', steps: ['Install "HP Smart" from the Play Store.', 'Open it and follow the steps to add your printer.', 'Open any photo or document → tap the three-dot menu or Share → Print.', 'Pick your HP printer → tap the round print button.'] },
    epson: { app: 'Epson Smart Panel', steps: ['Install "Epson Smart Panel" from the Play Store.', 'Add your printer using the in-app setup.', 'Open file → Share → Print → pick the Epson.'] },
    canon: { app: 'Canon PRINT', steps: ['Install "Canon PRINT Inkjet/SELPHY" from the Play Store.', 'Open and tap "Register Printer".', 'Open any file → Share → Print → Canon.'] },
    brother: { app: 'Brother Mobile Connect', steps: ['Install "Brother Mobile Connect" from the Play Store.', 'Add your printer in the app.', 'Print from any app via Share → Print.'] },
    other: { steps: ['Open Settings on your phone → search "Print" → Printing.', 'Tap "Default Print Service" — make sure it\'s on.', 'Add your printer brand\'s service if listed (or install "Mopria Print Service" for almost all printers).', 'Open any file → Share → Print → pick your printer.'] },
  },
};

const BRANDS: { id: Brand; name: string; emoji: string }[] = [
  { id: 'hp', name: 'HP', emoji: '🖨️' },
  { id: 'epson', name: 'Epson', emoji: '🖨️' },
  { id: 'canon', name: 'Canon', emoji: '🖨️' },
  { id: 'brother', name: 'Brother', emoji: '🖨️' },
  { id: 'other', name: 'Other / Not sure', emoji: '❓' },
];

export default function PrintFromPhoneHelper() {
  const [phone, setPhone] = useState<Phone | null>(null);
  const [brand, setBrand] = useState<Brand | null>(null);

  const result = phone && brand ? STEPS[phone][brand] : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Print from Your Phone — Step-by-Step Helper | TekSure" description="Plain-English steps to print photos and documents from an iPhone or Android phone to HP, Epson, Canon, Brother, or any home printer." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Printer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Print from Your Phone</h1>
          <p className="text-lg text-muted-foreground">Tell us your phone and printer. We'll show the steps.</p>
        </div>

        {!phone && (
          <Card>
            <CardContent className="pt-6 space-y-3">
              <h2 className="font-bold text-lg mb-2">What kind of phone do you have?</h2>
              <Button onClick={() => setPhone('iphone')} variant="outline" size="lg" className="w-full justify-between">📱 iPhone <ChevronRight className="w-4 h-4" /></Button>
              <Button onClick={() => setPhone('android')} variant="outline" size="lg" className="w-full justify-between">🤖 Android (Samsung, Google Pixel, Motorola, etc.) <ChevronRight className="w-4 h-4" /></Button>
            </CardContent>
          </Card>
        )}

        {phone && !brand && (
          <Card>
            <CardContent className="pt-6 space-y-3">
              <h2 className="font-bold text-lg mb-2">What brand is your printer?</h2>
              {BRANDS.map(b => (
                <Button key={b.id} onClick={() => setBrand(b.id)} variant="outline" size="lg" className="w-full justify-between">{b.emoji} {b.name} <ChevronRight className="w-4 h-4" /></Button>
              ))}
              <Button onClick={() => setPhone(null)} variant="ghost" size="sm" className="w-full"><RotateCcw className="w-3 h-3 mr-2" />Start over</Button>
            </CardContent>
          </Card>
        )}

        {result && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h2 className="font-bold text-xl mb-1">{phone === 'iphone' ? 'iPhone' : 'Android'} → {BRANDS.find(b => b.id === brand)?.name}</h2>
                {result.app && <p className="text-sm text-muted-foreground mb-4">Recommended app: <strong>{result.app}</strong></p>}
                <ol className="space-y-3 list-decimal pl-5">
                  {result.steps.map((s, i) => <li key={i}>{s}</li>)}
                </ol>
              </CardContent>
            </Card>
            <Card className="bg-muted/40 mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">If it's not working</h3>
                <ul className="text-sm list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Both devices must be on the SAME Wi-Fi network (not Guest, not Hotspot).</li>
                  <li>Restart the printer — unplug it for 30 seconds, plug it back in.</li>
                  <li>Restart your phone too.</li>
                  <li>If your printer has a screen, check that Wi-Fi shows "Connected".</li>
                </ul>
              </CardContent>
            </Card>
            <Button onClick={() => { setPhone(null); setBrand(null); }} variant="outline" className="w-full"><RotateCcw className="w-4 h-4 mr-2" />Start over</Button>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
