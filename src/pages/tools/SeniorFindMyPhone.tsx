import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function SeniorFindMyPhone() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Find My Phone for Seniors — TekSure" description="Locate a lost iPhone or Android — free Find My, Family Sharing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Find My Phone</h1>
          <p className="text-lg text-muted-foreground">When the phone goes missing.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone Find My</h2><p>Free. icloud.com/find. Map shows phone. Play sound. Lock with passcode.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android Find My Device</h2><p>Free. android.com/find. Same options as iPhone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Turn it on now</h2><p>iPhone: Settings → your name → Find My. Android: Settings → Google → Find My Device.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family sharing</h2><p>Add family. See each other&apos;s phone location. Helps if grandkids lose their phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AirTag for keys</h2><p>$29 each. Attach to keychain. Find with iPhone Find My app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tile / Chipolo</h2><p>$25-$35. Same idea, works with Android too.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Mark phone as lost — anyone who finds it sees a custom message and your callback number.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
