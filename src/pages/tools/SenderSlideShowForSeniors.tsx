import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

export default function SenderSlideShowForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Slideshow Apps for Seniors | TekSure" description="Photo slideshow apps for senior memories + presentations." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PlayCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Slideshow Apps</h1>
          <p className="text-lg text-muted-foreground">Photo slideshows.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">PowerPoint</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Microsoft 365 $7/mo.</li><li>Familiar tool.</li><li>Senior knows it.</li><li>Slideshow + presenter notes.</li><li>Print handouts.</li><li>Family gathering.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Google Slides free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free always.</li><li>Auto-saves cloud.</li><li>Share with family.</li><li>Senior collaborative.</li><li>Templates.</li><li>Browser-based.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Keynote</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free with Apple device.</li><li>Beautiful templates.</li><li>Senior premium feel.</li><li>iCloud sync.</li><li>Export to video.</li><li>Best Apple choice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Photos slideshow</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone Photos app.</li><li>Tap album → ... → slideshow.</li><li>Music + transitions.</li><li>Senior simple.</li><li>Built-in.</li><li>Free + instant.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Memorial slideshow</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Funeral homes use.</li><li>Senior creates own.</li><li>Personalized.</li><li>Save service cost.</li><li>Family meaningful.</li><li>Free options.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">TV display</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>AirPlay to Apple TV.</li><li>Chromecast Android.</li><li>Family viewing.</li><li>Senior big screen.</li><li>Free.</li><li>Holiday gathering hit.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">iPhone Photos slideshow = instant senior</h3><p className="text-sm text-muted-foreground">iPhone Photos app — pick album → ... → slideshow. Music + transitions auto. Cast to TV via AirPlay. Senior holiday gathering hit. Free + instant. No app to learn. Most under-used senior feature already on phone.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
