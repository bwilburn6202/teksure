import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function FaceTimeMasteryForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="FaceTime Mastery for Seniors | TekSure" description="iPhone FaceTime power features. Senior FaceTime guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">FaceTime Mastery</h1>
          <p className="text-lg text-muted-foreground">iPhone video power.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Group FaceTime</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Up to 32 people.</li><li>Family Christmas.</li><li>Tap + add contacts.</li><li>All on one screen.</li><li>Senior family magic.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">FaceTime Audio</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Voice-only call.</li><li>Free over wifi.</li><li>Better quality than phone call.</li><li>Long-distance free.</li><li>Senior international.</li><li>iPhone to iPhone only.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">FaceTime Android (NEW)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone user creates link.</li><li>Send to Android friend.</li><li>They join via browser.</li><li>No iPhone required.</li><li>Senior cross-platform.</li><li>iOS 15+.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SharePlay</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Watch movies together.</li><li>Listen to music together.</li><li>While FaceTiming.</li><li>Senior long-distance togetherness.</li><li>Apple TV+ together.</li><li>Free feature.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Captions</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Accessibility.</li><li>Live Captions on.</li><li>Reads what said.</li><li>Senior hearing helper.</li><li>Free + built-in.</li><li>iPhone 11+.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPad bigger screen better.</li><li>Center Stage follows you.</li><li>Spatial audio.</li><li>Portrait mode blur.</li><li>Effects + filters.</li><li>Fun + accessible.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">FaceTime now cross-platform</h3><p className="text-sm text-muted-foreground">FaceTime iPhone + iPad gold standard for video calls. iOS 15+ creates links Android can join. Group up to 32 people. Free, encrypted. Senior family Christmas, weekly check-ins, doctor visits. Most senior-loved Apple feature.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
