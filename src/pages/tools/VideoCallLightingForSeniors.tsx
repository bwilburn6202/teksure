import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export default function VideoCallLightingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Video Call Lighting for Seniors | TekSure" description="Look great on Zoom + FaceTime. Senior lighting setup guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lightbulb className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Video Lighting</h1>
          <p className="text-lg text-muted-foreground">Look great on calls.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free fix</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Face the window.</li><li>Daylight perfect.</li><li>Don&apos;t back-light.</li><li>Even, soft light.</li><li>Free.</li><li>Senior senior easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Ring light</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30 USB ring light.</li><li>Clip to laptop/phone.</li><li>Even illumination.</li><li>Adjustable brightness.</li><li>Senior glow.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Desk lamp</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>White bulb daylight.</li><li>Behind/beside computer.</li><li>$25 IKEA.</li><li>Senior re-purpose.</li><li>Free if have.</li><li>Adequate.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Avoid mistakes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Window behind = silhouette.</li><li>Overhead alone = shadows.</li><li>Fluorescent = unflattering.</li><li>Dark room = grainy.</li><li>Senior look unwell.</li><li>Easy fix.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Camera angle</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Eye level — best.</li><li>Books raise laptop.</li><li>Stand for tablet.</li><li>Don&apos;t look down at camera.</li><li>Senior dignity.</li><li>Easy adjustment.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior priority</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Family see your face.</li><li>Lighting matters most.</li><li>Camera quality second.</li><li>Background third.</li><li>Senior healthy look.</li><li>Lighting = effort visible.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Window light = free senior makeover</h3><p className="text-sm text-muted-foreground">Face the window for free senior video makeover. Or $30 ring light. Most senior video calls have terrible back-lighting. Family worried about how you look. Simple fix: face light source. Worth 30-second adjustment for every call.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
