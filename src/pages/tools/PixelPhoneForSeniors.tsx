import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function PixelPhoneForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Pixel Phone for Seniors | TekSure" description="Senior-friendly Pixel guide. Google's pure Android with senior-helpful features." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pixel for Seniors</h1>
          <p className="text-lg text-muted-foreground">Google&apos;s clean Android.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why Pixel</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Best Android software.</li><li>No bloatware.</li><li>7 years of updates.</li><li>Best AI features.</li><li>$500-$1,000.</li><li>Senior simplicity.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior features</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Call Screen — auto-blocks scams.</li><li>Live Caption — phone calls.</li><li>Magic Eraser — photo edit.</li><li>Recorder — meeting transcripts.</li><li>Now Playing — song ID.</li><li>Pixel exclusive.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Call Screen</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Unknown calls auto-screened.</li><li>Google asks who calling.</li><li>You see transcript.</li><li>Decide to answer.</li><li>Robocall killer.</li><li>Senior major win.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Live Caption</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Captions phone calls.</li><li>Captions any video.</li><li>Real-time text.</li><li>Hard-of-hearing helper.</li><li>Free + built in.</li><li>Senior favorite.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pixel A series</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pixel 8a $499.</li><li>Same software as $1,000 phones.</li><li>7 years updates.</li><li>Best senior value.</li><li>Holds value.</li><li>Senior smart pick.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Switch from iPhone</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Google has switch app.</li><li>Photos transfer.</li><li>Contacts transfer.</li><li>Apps reinstall.</li><li>1-2 hour switch.</li><li>Help from Google support.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Pixel = Android iPhone equivalent</h3><p className="text-sm text-muted-foreground">If you prefer Android over iPhone, Pixel is best for seniors. Call Screen kills robocalls. Live Caption helps hearing. 7-year updates. $499 Pixel 8a is best senior value. Cleaner than Samsung. Google support direct. Worth considering.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
