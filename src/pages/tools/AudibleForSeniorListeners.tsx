import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

export default function AudibleForSeniorListeners() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Audible for Senior Listeners | TekSure" description="Audiobooks for seniors. Audible app + alternatives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Audible</h1>
          <p className="text-lg text-muted-foreground">Senior audiobooks.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it offers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$15/month.</li><li>1 credit/month.</li><li>Plus Audible Plus library.</li><li>Senior huge library.</li><li>30-day free trial.</li><li>Amazon-owned.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free Libby</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Library card needed.</li><li>Free audiobooks.</li><li>Hold queue.</li><li>Senior frugal first.</li><li>Apple + Android.</li><li>Use library.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Eyes rest while reading.</li><li>Walk + listen.</li><li>Drive + listen.</li><li>Sleep stories.</li><li>Senior accessibility.</li><li>Multitasking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Speed + sleep</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Speed up 1.25x.</li><li>Slow 0.75x.</li><li>Sleep timer.</li><li>Senior bedtime.</li><li>Auto-pause.</li><li>Customize.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior favorites</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Memoirs.</li><li>History.</li><li>Mysteries.</li><li>Classics re-read.</li><li>Senior wide variety.</li><li>Famous narrators.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Spotify includes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Spotify Premium = 15 hr audiobook/mo.</li><li>$10/mo same as Audible.</li><li>Plus music.</li><li>Senior bundle.</li><li>Worth comparing.</li><li>Try both trials.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Libby first = senior frugal</h3><p className="text-sm text-muted-foreground">Free Libby with library card = unlimited senior audiobooks. Hold queue but free forever. Or $15/mo Audible for huge selection. Or Spotify Premium $10 has 15hr audiobook + music. Senior audiobook lover compare. Eyes rest while reading.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
