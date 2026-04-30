import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Captions } from 'lucide-react';

export default function CaptionsForSeniorVideoCalls() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Live Captions for Senior Video Calls | TekSure" description="Read what people say in real-time. Captions on FaceTime, Zoom, calls." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Captions className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Live Captions</h1>
          <p className="text-lg text-muted-foreground">Read while you listen.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPhone Live Captions</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Accessibility.</li><li>Live Captions → On.</li><li>Captions any audio.</li><li>FaceTime, calls, videos.</li><li>Free + built-in.</li><li>iPhone 11+.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Zoom captions</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Click CC button.</li><li>Auto captions free.</li><li>Read along.</li><li>Family group calls.</li><li>Doctor visits.</li><li>Don&apos;t miss anything.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">YouTube CC</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Click CC button.</li><li>Auto captions on.</li><li>Free.</li><li>All YouTube videos.</li><li>Adjust size.</li><li>Senior feature.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Google Live Transcribe</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free Android app.</li><li>Real conversation captions.</li><li>Restaurant + meetings.</li><li>Read what people say.</li><li>iPhone version coming.</li><li>Hearing-impaired magic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">TV captions</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Most TVs have CC.</li><li>Settings → CC → On.</li><li>Adjust size + color.</li><li>Black background helps.</li><li>Senior preference.</li><li>Stop missing dialogue.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Phone calls</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone Live Captions = phone calls too.</li><li>InnoCaption free service.</li><li>FCC funded.</li><li>Real-time call captions.</li><li>For hard-of-hearing seniors.</li><li>Apply free.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Captions everywhere = no missed words</h3><p className="text-sm text-muted-foreground">If hearing is fading, turn on captions everywhere. Free iPhone Live Captions, Zoom CC, YouTube CC, TV CC. Plus free InnoCaption for phone calls. Many seniors find captions extend independence by years. Don&apos;t miss conversations — read along.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
