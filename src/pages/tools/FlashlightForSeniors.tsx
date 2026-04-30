import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Flashlight } from 'lucide-react';

export default function FlashlightForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPhone Flashlight for Seniors | TekSure" description="Phone flashlight + magnifier for senior daily life." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Flashlight className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPhone Flashlight</h1>
          <p className="text-lg text-muted-foreground">Built-in light + magnifier.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Turn on</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Swipe down from top right.</li><li>Tap flashlight icon.</li><li>Or ask Siri.</li><li>Senior easy.</li><li>Long-press for brightness.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Adjust brightness</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Long-press icon.</li><li>Slider appears.</li><li>5 levels.</li><li>Senior eye comfort.</li><li>Battery saver lower.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Magnifier app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Built-in iOS.</li><li>Triple-press side button.</li><li>Or Magnifier app.</li><li>Zooms phone camera.</li><li>Senior pill labels.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Magnifier with light</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Magnifier auto-flashlight.</li><li>Reading dim restaurants.</li><li>Senior dignity.</li><li>Better than glasses sometimes.</li><li>Always with you.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Lock screen widget</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Add Magnifier to lock screen.</li><li>iOS 16+.</li><li>One tap access.</li><li>Senior even faster.</li><li>Don&apos;t unlock first.</li><li>Customize per need.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Brightest light at night.</li><li>Magnifier for menus.</li><li>Light + magnifier together.</li><li>Senior pill bottles.</li><li>Glasses backup always.</li><li>Free + life-changing.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Flashlight + Magnifier = senior superpower</h3><p className="text-sm text-muted-foreground">iPhone flashlight + magnifier = senior superpower. Read pill bottles, restaurant menus, find keys in dark. Add magnifier widget to lock screen. Free + always with you. Most senior phone is reading aid in disguise.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
