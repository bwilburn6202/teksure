import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bug } from 'lucide-react';

export default function SeniorBugIDApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bug ID Apps for Seniors — TekSure" description="Identify bugs, spiders, snakes — Picture Insect, Seek, NatureID." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bug className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bug ID Apps</h1>
          <p className="text-lg text-muted-foreground">Know what&apos;s in your garden.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Picture Insect</h2><p>FREE trial. Identify any bug from a photo.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Seek by iNaturalist</h2><p>FREE. Identifies bugs, plants, mushrooms, animals.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">NatureID</h2><p>FREE. Plus identifies snakes (helpful) and spiders.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pest control DIY</h2><p>Once you know the bug, search &ldquo;[bug name] organic control&rdquo; for safe removal.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Beneficial bugs</h2><p>Lady bugs eat aphids. Ground beetles eat slugs. Don&apos;t kill them.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tick season</h2><p>Apps identify ticks. Save photo for doctor if bitten.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Most garden bugs are harmless. Apps stop unnecessary panic.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
