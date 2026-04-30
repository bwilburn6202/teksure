import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { LayoutGrid } from 'lucide-react';

export default function HomeScreenLayoutForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Screen Layout for Seniors | TekSure" description="Senior-friendly iPhone home screen. Big icons, less clutter." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <LayoutGrid className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Home Screen</h1>
          <p className="text-lg text-muted-foreground">Big icons, less clutter.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Make icons bigger</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Display.</li><li>Display Zoom — Larger.</li><li>iPhone restarts.</li><li>Senior big icons.</li><li>Easier to tap.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Top apps only</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Phone, Messages, Mail.</li><li>Camera, Photos.</li><li>FaceTime, Maps.</li><li>Senior 6-9 apps total.</li><li>Hide rest in App Library.</li><li>Less overwhelming.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Hide unused</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Long-press icon.</li><li>Remove from Home Screen.</li><li>Goes to App Library.</li><li>Senior less clutter.</li><li>Still installed.</li><li>Find via search.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Folders</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Drag icon onto another.</li><li>Creates folder.</li><li>Group similar.</li><li>Senior &quot;Health&quot; folder.</li><li>&quot;Family&quot; folder.</li><li>Tidier.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family contacts widget</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Contacts widget on home.</li><li>Tap photo to call.</li><li>Senior speed dial.</li><li>One tap = family.</li><li>Free + huge.</li><li>Set up once.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Adult kid setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Family member configures.</li><li>Senior simpler use.</li><li>Big icons + few apps.</li><li>Family widget.</li><li>30 min setup.</li><li>Years easier.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Senior home = 6 big icons + family widget</h3><p className="text-sm text-muted-foreground">Senior iPhone home: Display Zoom Large + only 6-9 essential icons + family contacts widget. Hide rest in App Library. Adult kid sets up in 30 min. Most senior phone-friendly setup. Reduces &quot;where&apos;s the app&quot; frustration.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
