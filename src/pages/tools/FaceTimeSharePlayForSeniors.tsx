import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function FaceTimeSharePlayForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="FaceTime SharePlay for Seniors | TekSure" description="Watch movies + listen music with family while FaceTiming." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">SharePlay</h1>
          <p className="text-lg text-muted-foreground">Senior watch with family.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>FaceTime + watch together.</li><li>Apple TV+, Disney+.</li><li>Senior + grandkids.</li><li>Long-distance togetherness.</li><li>Free with FaceTime.</li><li>iOS 15+.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">How to use</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Start FaceTime call.</li><li>Open streaming app.</li><li>Tap SharePlay.</li><li>Synced playback.</li><li>Senior magic.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Watch grandkids&apos; shows together.</li><li>Reaction shared.</li><li>Long-distance bonding.</li><li>Senior connection.</li><li>Free.</li><li>Magic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Music together</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Listen with family.</li><li>Senior memory songs.</li><li>Both control queue.</li><li>Free with Music.</li><li>Worth trying.</li><li>Connection.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apps supported</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple TV+.</li><li>Disney+.</li><li>HBO Max.</li><li>Paramount+.</li><li>Senior most platforms.</li><li>Growing list.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Each subscription</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Both need subscription.</li><li>Senior + family separate.</li><li>Apple One bundles.</li><li>Free trials.</li><li>Worth coordinating.</li><li>Set up first time.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">SharePlay = senior long-distance togetherness</h3><p className="text-sm text-muted-foreground">FaceTime SharePlay = senior watches movies/shows with grandkids long-distance. Both subscribe to same service. Real-time reactions shared. Apple Music together. Free with FaceTime + iOS 15+. Most senior connection magic. Try Disney+ together.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
