import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

export default function AudibleVsLibbyForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Audible vs Libby for Senior Audiobooks | TekSure" description="Compare audiobook services for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Audible vs Libby</h1>
          <p className="text-lg text-muted-foreground">Senior audiobook compare.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Audible</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$15/month.</li><li>1 credit + Plus library.</li><li>Latest releases.</li><li>Buy own audiobooks.</li><li>Senior priority.</li><li>30-day trial.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Libby</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free library card.</li><li>Hold queues.</li><li>Wait for popular.</li><li>Senior frugal.</li><li>Many libraries.</li><li>Free always.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior pick guide</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Patient + frugal — Libby.</li><li>Want latest now — Audible.</li><li>Or both.</li><li>Senior choice.</li><li>Try Libby first.</li><li>Add Audible if needed.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Spotify Premium</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$10/mo includes 15hr/mo audiobook.</li><li>Plus all music.</li><li>Senior bundle.</li><li>Better than Audible value.</li><li>Compare with trial.</li><li>One subscription.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Hoopla free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Library service.</li><li>No holds — instant.</li><li>Audiobooks + ebooks + movies.</li><li>Senior bonus.</li><li>Free if library has.</li><li>Limited monthly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Add 3 library cards.</li><li>Stack Libby + Hoopla.</li><li>Skip Audible most.</li><li>Senior listen daily.</li><li>$0/year possible.</li><li>Audible only for new releases.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Libby + Hoopla = $0 audiobooks</h3><p className="text-sm text-muted-foreground">Senior with library card = free audiobooks via Libby + Hoopla forever. Skip Audible $180/yr. Only buy Audible for brand new releases can&apos;t wait. Spotify Premium $120/yr bundles 15hr audiobooks + music. Pick wisely.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
