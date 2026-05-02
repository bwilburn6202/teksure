import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorBackPainApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Back Pain Apps for Seniors — TekSure" description="Manage senior back pain — Curable, Hinge Health, McKenzie exercises." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Back Pain Apps</h1>
          <p className="text-lg text-muted-foreground">Most common senior pain.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hinge Health</h2><p>FREE through many Medicare plans. AI-guided back PT.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Curable</h2><p>$80/year. Mind-body approach. Reduces chronic back pain.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">McKenzie Method</h2><p>FREE YouTube videos. Press-up exercises. Often resolves disc issues.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Standing desk</h2><p>$40 adapter. Stand 1-2 hours daily. Less back pain than sitting all day.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lumbar support</h2><p>$30 chair pillow. Easy lower back relief.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lift smart</h2><p>Bend knees, not back. 10 lb lift wrong = injury for seniors.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Back pain often weak core. 5-min daily plank fixes most issues.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
