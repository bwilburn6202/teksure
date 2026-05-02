import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function iPhoneCameraTipsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPhone Camera Tips for Seniors | TekSure" description="Take better photos with iPhone. Senior camera mastery." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPhone Camera Tips</h1>
          <p className="text-lg text-muted-foreground">Senior better photos.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tap to focus</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tap subject on screen.</li><li>Yellow box appears.</li><li>Slide sun icon for brightness.</li><li>Senior sharper photos.</li><li>Free.</li><li>Game-changer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Volume button</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Press volume to take photo.</li><li>Steadier than screen.</li><li>Senior arthritis friendly.</li><li>Both up + down.</li><li>Free trick.</li><li>Less shake.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Portrait mode</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Blurred background.</li><li>Pro look.</li><li>Senior wow factor.</li><li>iPhone XS+.</li><li>Free.</li><li>Family pics great.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Burst mode</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hold shutter.</li><li>Multiple shots.</li><li>Senior catch grandkid moment.</li><li>Pick best later.</li><li>Free.</li><li>Action shots.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Live photo</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>3-second video around photo.</li><li>Senior magical moments.</li><li>Long-press to play.</li><li>Convert to GIF.</li><li>Free.</li><li>Default on.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Edit photos</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Photos app — Edit.</li><li>Crop, adjust light.</li><li>Senior basic improvements.</li><li>Free.</li><li>Auto-enhance button.</li><li>Easy.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Tap focus + volume button = senior pro</h3><p className="text-sm text-muted-foreground">Tap subject to focus + slide brightness + use volume button to take = senior pro photos. Portrait mode for family. Burst mode for grandkid action. Live Photo magic. All free. Most under-used senior iPhone camera features.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
