import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function SeniorVideoMaking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Video Making for Seniors — TekSure" description="iMovie, Capcut, Splice — easy video apps for senior creators." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Video Making for Seniors</h1>
          <p className="text-lg text-muted-foreground">Easy editing apps.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iMovie</h2><p>FREE on iPhone/iPad/Mac. Easy senior interface. Themes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CapCut</h2><p>FREE. Easier than iMovie. Senior-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Splice (GoPro)</h2><p>FREE. Beautiful templates. Drag photos in.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Use cases</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Birthday slideshows</li><li>Travel memories</li><li>Family stories</li><li>Tribute videos</li><li>Anniversary videos</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Memories</h2><p>FREE. Apple Photos auto-makes memory videos. No editing needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Add music</h2><p>iMovie has free Apple music library. Royalty-free.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Apple Memories auto-makes videos. Send to family. Touched.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
