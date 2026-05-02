import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hand } from 'lucide-react';

export default function SwitchControlSeniorAccess() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Switch Control for Senior Accessibility | TekSure" description="iPhone Switch Control for senior limited mobility." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hand className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Switch Control</h1>
          <p className="text-lg text-muted-foreground">Senior limited mobility.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone control via switch.</li><li>For limited finger mobility.</li><li>Senior arthritis severe.</li><li>Stroke recovery.</li><li>Bluetooth switch.</li><li>Free built-in.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Accessibility.</li><li>Switch Control.</li><li>Pair Bluetooth switch.</li><li>Senior big single button.</li><li>Free.</li><li>Auto-scan.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice Control</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Accessibility.</li><li>Hands-free voice.</li><li>Open apps voice.</li><li>Senior alternative.</li><li>Free.</li><li>iPhone hands-free totally.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">AssistiveTouch</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Floating button.</li><li>Easy gestures.</li><li>Senior big targets.</li><li>Customize.</li><li>Free.</li><li>Best mild mobility.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Eye tracking</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPad iOS 18 + Pro.</li><li>Senior advanced disability.</li><li>Look to control.</li><li>Free.</li><li>Game-changer.</li><li>Built-in.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Accessibility</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>1-877-204-3930.</li><li>Free senior help.</li><li>Setup these features.</li><li>Patient support.</li><li>Don&apos;t suffer alone.</li><li>Worth calling.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Apple accessibility = senior independence</h3><p className="text-sm text-muted-foreground">Apple iPhone has Switch Control, Voice Control, AssistiveTouch, Eye Tracking — all free + built-in. Senior limited mobility maintains independence. Call 1-877-204-3930 Apple Accessibility free senior helpline. Most under-known senior tech accessibility features.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
