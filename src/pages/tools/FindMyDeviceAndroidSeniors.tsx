import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function FindMyDeviceAndroidSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Find My Device for Android Seniors | TekSure" description="Find lost Android phone. Free Google Find My Device guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Find My Device (Android)</h1>
          <p className="text-lg text-muted-foreground">Find lost phone fast.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup (do now)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Google.</li><li>Find My Device — On.</li><li>Location services on.</li><li>Set up before you lose it.</li><li>Free, built-in.</li><li>5-minute task.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When you lose it</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Go to android.com/find on any device.</li><li>Sign in Google.</li><li>See location on map.</li><li>Play sound.</li><li>Lock device.</li><li>Erase if needed.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Play sound</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Phone rings 5 minutes.</li><li>Even on silent.</li><li>Find under couch.</li><li>Find under bed.</li><li>Senior quick win.</li><li>Loud alarm.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Lock + erase</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Lock — sets new password.</li><li>Display message + phone.</li><li>Erase — full reset.</li><li>If truly stolen.</li><li>Senior privacy preserved.</li><li>Use last resort.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Network finds (new)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>2024+ feature.</li><li>Other Android phones help find.</li><li>Like Apple network.</li><li>Phone offline still findable.</li><li>Privacy preserving.</li><li>Senior network effect.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tip</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bookmark android.com/find.</li><li>Use spouse&apos;s phone.</li><li>Or computer.</li><li>Practice while not lost.</li><li>Know how before panic.</li><li>Free peace of mind.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Set up now — find later</h3><p className="text-sm text-muted-foreground">Find My Device free + built into every Android. Set up TODAY before lost. Bookmark android.com/find on computer. When phone goes missing — play sound, see map, or lock. Many seniors lose phone in own house — sound finds it fast. Senior life-saver.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
