import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Film } from 'lucide-react';

export default function iMovieForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iMovie for Seniors | TekSure" description="Free Apple video editor. Senior iMovie guide for family memories." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Film className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iMovie</h1>
          <p className="text-lg text-muted-foreground">Free Apple video editor.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free with Apple device.</li><li>Edit phone videos.</li><li>Trim + combine clips.</li><li>Add music + titles.</li><li>Senior simple.</li><li>iPhone, iPad, Mac.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior projects</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Grandkid birthday compilation.</li><li>Vacation video.</li><li>Family reunion.</li><li>Memorial slideshow.</li><li>Senior preserve memories.</li><li>Share with family.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Magic Movie</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Auto-creates from clips.</li><li>Music + transitions.</li><li>10 min to professional.</li><li>Senior magic.</li><li>Pick clips, done.</li><li>iPad/iPhone.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Templates</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Storyboards built-in.</li><li>Drag clips into.</li><li>Auto-formatted.</li><li>Senior easy.</li><li>News, cookbook, travel.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Share</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Save to Photos.</li><li>Share via Messages.</li><li>Email family.</li><li>YouTube upload.</li><li>Senior multi-channel.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Android alternative</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Google Photos auto-creates.</li><li>CapCut free editor.</li><li>Senior alternatives.</li><li>Free.</li><li>Cross-platform.</li><li>Try multiple.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free iMovie Magic Movie = senior easy</h3><p className="text-sm text-muted-foreground">Free iMovie Magic Movie auto-creates senior videos in 10 min. Pick clips, music, done. Grandkid birthday compilation = treasured family gift. Skill-free senior video creation. Or Google Photos auto-creates similar on Android. Free magic.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
