import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bug } from 'lucide-react';

export default function SeniorPestControl() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Garden Pest Control for Seniors — TekSure" description="Identify and remove garden pests — natural and safe options for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bug className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Garden Pest Control</h1>
          <p className="text-lg text-muted-foreground">Safe natural options.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Picture Insect</h2><p>FREE trial. Identify any bug from photo.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Neem oil</h2><p>$10. Natural pesticide. Safe for senior use. Aphids, mites.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Diatomaceous earth</h2><p>$15. Powder. Kills slugs and crawling pests safely.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bt for caterpillars</h2><p>$10. Safe for everything except caterpillars. Bacterial.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Soap spray</h2><p>FREE. Mix dish soap + water. Sprays aphids dead.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Beneficial bugs</h2><p>Ladybugs eat aphids. Don&apos;t kill them.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Many garden &ldquo;pests&rdquo; are harmless. Identify before treating.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
