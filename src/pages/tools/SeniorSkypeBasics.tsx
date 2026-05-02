import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorSkypeBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Skype for Seniors — TekSure" description="Skype basics for seniors — international calls, video, chat." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Skype for Seniors</h1>
          <p className="text-lg text-muted-foreground">Older but still works.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free Skype-to-Skype</h2><p>Free video and audio if both use Skype. Works worldwide.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Call regular phones</h2><p>$3-$15/month for unlimited calls to any country. Cheap international calling.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Live captions</h2><p>Real-time translation for international family.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Microsoft replacing</h2><p>Skype getting phased out. Microsoft pushing Teams instead.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Better alternatives now</h2><p>WhatsApp, FaceTime, or Google Meet. Most family already on these.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">If you have credit</h2><p>Use it up. Credits don&apos;t transfer to Teams.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: For international family, switch to WhatsApp now. Free and growing.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
