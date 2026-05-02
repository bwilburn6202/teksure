import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function SeniorSinging() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Singing for Seniors — TekSure" description="Choirs, singing apps — Smule, Yousician, dementia-fighting music." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Singing for Seniors</h1>
          <p className="text-lg text-muted-foreground">Joy + lung health + brain.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Local choir</h2><p>Free at most churches and community centers. Group benefits.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sing for life</h2><p>FREE. Senior singing programs nationally. Designed for 60+.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smule app</h2><p>$5/month. Sing along to any song. Karaoke at home.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real benefits</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Stronger lungs</li><li>Better mood</li><li>Slower cognitive decline</li><li>Social connection</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Music for dementia</h2><p>Familiar songs reach dementia patients. Powerful therapy.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">No skill needed</h2><p>Singing in shower counts. Singing along to radio counts.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 15 min daily singing = real cognitive protection.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
