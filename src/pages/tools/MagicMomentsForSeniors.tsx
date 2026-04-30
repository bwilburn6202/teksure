import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function MagicMomentsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Magic Moments App for Seniors | TekSure" description="Animoto, Magisto auto-create video memories for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Magic Video Apps</h1>
          <p className="text-lg text-muted-foreground">Auto-create senior videos.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Animoto</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$8/month or free trial.</li><li>Drag photos.</li><li>Auto-edits.</li><li>Music library.</li><li>Senior easy.</li><li>Polished output.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">CapCut</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free.</li><li>Auto-templates.</li><li>TikTok-popular.</li><li>Senior easy.</li><li>Phone app.</li><li>Powerful free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Canva videos</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + Pro.</li><li>Templates ready.</li><li>Drag photos.</li><li>Senior creative.</li><li>Birthday cards too.</li><li>Multi-purpose.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Built-in apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iMovie free Apple.</li><li>Google Photos free.</li><li>Senior already have.</li><li>No subscription.</li><li>Try first.</li><li>Often sufficient.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior projects</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Anniversary slideshow.</li><li>Memorial videos.</li><li>Gradkid birthday.</li><li>Travel compilation.</li><li>Senior gifts.</li><li>Treasure forever.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Music sets mood.</li><li>30-60 sec ideal.</li><li>Best 10-15 photos.</li><li>Senior less is more.</li><li>Family attention span.</li><li>Free music libraries.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free CapCut + iMovie = senior magic</h3><p className="text-sm text-muted-foreground">Free CapCut + iMovie + Google Photos = senior video magic. No subscription. Auto-templates. Drag photos, music, share. Anniversary, memorial, birthday gifts. Don&apos;t pay Animoto $8/mo when free works. Senior creative outlet abundant + free.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
