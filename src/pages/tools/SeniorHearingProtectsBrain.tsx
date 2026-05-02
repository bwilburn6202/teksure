import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ear } from 'lucide-react';

export default function SeniorHearingProtectsBrain() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hearing Loss and Dementia for Seniors — TekSure" description="Hearing aids may protect brain — Lancet research, Apple AirPods." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ear className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hearing Protects Brain</h1>
          <p className="text-lg text-muted-foreground">Untreated hearing loss = #1 modifiable dementia risk.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lancet 2024 study</h2><p>Treating hearing loss reduces dementia risk 8%. Largest single factor.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why connection</h2><p>Brain works harder to hear. Less energy for memory and thinking.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">OTC hearing aids</h2><p>$1,000/pair. FDA approved. No prescription. Don&apos;t wait.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AirPods Pro 2</h2><p>$249. Hearing aid mode. Saves $700+ for mild loss.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free hearing test</h2><p>Costco. Most audiologists. Mimi app. No excuse to skip.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Social isolation</h2><p>Hearing loss → less talking → less social → more dementia. Break the cycle.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Hearing test annually after 60. Get hearing aids if needed. Brain depends on it.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
