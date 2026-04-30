import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function AIPhotoEditingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Photo Editing for Seniors | TekSure" description="Magic eraser, restore old photos. AI photo apps for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Photo Editing</h1>
          <p className="text-lg text-muted-foreground">Magic photo fixes.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Clean Up</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iOS 18.1+.</li><li>Photos app — Edit → Clean Up.</li><li>Tap unwanted object.</li><li>Disappears.</li><li>Free.</li><li>Senior magic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Google Magic Eraser</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Google Photos app.</li><li>Edit → Tools → Magic Eraser.</li><li>Brush over unwanted.</li><li>Free for Pixel.</li><li>Google One $2/mo other.</li><li>Senior simple.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Old photo restore</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Remini app.</li><li>Restore + colorize.</li><li>$5/week or $30/year.</li><li>Old family photos magic.</li><li>Black + white to color.</li><li>Senior treasure.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Generative AI</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Photoshop Generative Fill.</li><li>Add elements to photos.</li><li>Photoshop $10/mo.</li><li>For advanced users.</li><li>Senior optional.</li><li>Free options work.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior practical uses</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Remove tourist from photo.</li><li>Remove blemish from face.</li><li>Restore grandparent photo.</li><li>Colorize old wedding photo.</li><li>Print + frame.</li><li>Senior gift.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Backup originals</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Always keep original.</li><li>Save edited as new.</li><li>Don&apos;t lose history.</li><li>Senior preserve memories.</li><li>Cloud backup important.</li><li>Free Google Photos.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free magic = senior photo treasure</h3><p className="text-sm text-muted-foreground">iOS Clean Up + Google Magic Eraser = free senior photo magic. Remove tourists, blemishes, distracting backgrounds. Old photos? Remini restores + colorizes. Many seniors gift restored grandparent photos to grandkids. Powerful + accessible.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
