import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tablet } from 'lucide-react';

export default function EchoShowForSeniorMomCenter() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Echo Show as Senior Family Center | TekSure" description="Echo Show family hub for seniors. Photo frame + calls + assistant." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tablet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Echo Show Family Hub</h1>
          <p className="text-lg text-muted-foreground">Photo + calls + assistant.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Photo Frame mode</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Amazon Photos auto-shows.</li><li>Family adds to album.</li><li>Senior sees grandkids.</li><li>Always-on screen.</li><li>Best feature.</li><li>Free with Prime.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Video calls</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Alexa, call John.&quot;</li><li>Hands-free.</li><li>Auto-frames you.</li><li>Senior easy.</li><li>Family any device.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Recipes + timers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Voice search recipes.</li><li>Step-by-step display.</li><li>Multiple timers.</li><li>Hands-free cooking.</li><li>Senior kitchen helper.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">News + weather</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Visual news clips.</li><li>Weather forecast.</li><li>Calendar shows.</li><li>Daily briefing.</li><li>Senior morning info.</li><li>Customize.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sizes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Echo Show 5 — $90.</li><li>Echo Show 8 — $150.</li><li>Echo Show 10 — $250.</li><li>Echo Show 15 — $280 wall.</li><li>Senior pick.</li><li>15 best for kitchen.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best in kitchen</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Counter or wall mount.</li><li>Family hub center.</li><li>Calendar + recipes.</li><li>Photo frame.</li><li>Quick info access.</li><li>Senior heart of home.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$150 Echo Show 8 = senior kitchen magic</h3><p className="text-sm text-muted-foreground">Echo Show 8 ($150) on senior kitchen counter = photo frame + recipes + timers + video calls + news. Family adds photos to shared album. Senior sees grandkids all day. &quot;Alexa, call Mary.&quot; Best $150 senior kitchen tech.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
