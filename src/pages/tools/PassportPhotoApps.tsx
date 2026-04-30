import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

const APPS = [
  { name: 'Passport Photo Online', cost: '$15-20', best: 'Take photo at home with phone. AI checks compliance. Mailed prints OR digital file.', good: 'Best overall.' },
  { name: 'PhotoAiD', cost: '$15-20', best: 'Same idea — AI auto-corrects background and crop. Prints + digital.', good: 'Best AI correction.' },
  { name: 'iVisa Photos', cost: '$8 digital / $15 prints', best: 'Cheapest with prints. Works for visa applications too.', good: 'Best budget.' },
  { name: 'Costco Photo Center', cost: '$5 for 4 prints', best: 'Cheap and reliable. Take photo at home, upload, pick up at store next day.', good: 'Best in-person.' },
  { name: 'CVS / Walgreens', cost: '$15 for 2 prints', best: 'Take photo IN STORE, get prints in 5 min. No app needed.', good: 'Best fastest.' },
  { name: 'AAA (members)', cost: '$15 (FREE for some members)', best: 'Free for AAA Plus/Premier. Includes printed photos.', good: 'Best AAA perk.' },
];

export default function PassportPhotoApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Passport Photo Apps — At Home for $5 | TekSure" description="Skip the $15 CVS photo. Plain-English picks for free and cheap apps that take compliant US passport photos at home." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Passport Photo Apps</h1>
          <p className="text-lg text-muted-foreground">Skip the $15 trip. Take it at home.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">US passport photo rules</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>2" × 2" square print (sized at print).</li>
              <li>Plain WHITE or off-white background. No clutter.</li>
              <li>Color photo, taken in last 6 months.</li>
              <li>Looking directly at camera. Both eyes open.</li>
              <li>Neutral expression OR natural smile.</li>
              <li>NO glasses (banned since 2016).</li>
              <li>NO hats unless religious. NO uniforms (military OK).</li>
              <li>Head + top of shoulders visible. Head 1-1 3/8 inch tall.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY at home — 2 minutes</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Stand against a plain white wall. Good even lighting (avoid shadows).</li>
              <li>Phone on tripod or have someone hold it 4 feet away.</li>
              <li>Take 2-3 photos.</li>
              <li>Upload to one of the apps above.</li>
              <li>App checks rules + crops to 2"×2".</li>
              <li>Pay $5-15 for compliant prints.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common rejection reasons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Background not white enough (gray walls).</li>
              <li>Shadow on face or behind head.</li>
              <li>Eyes not visible (hair, blinking).</li>
              <li>Wearing glasses.</li>
              <li>Smiling with teeth showing.</li>
              <li>Photo too small.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Need passport fast?</h3>
            <p className="text-sm text-muted-foreground">Standard processing is 6-8 weeks. Expedited (extra $60) is 2-3 weeks. Travel within 14 days? Make appointment at a Passport Agency (call 1-877-487-2778). Same-day passports possible in emergencies. Don&apos;t book international travel without checking your passport expiration date — many countries require 6 months remaining.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
