import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PenTool } from 'lucide-react';

export default function SeniorJournalingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Journaling Apps for Seniors — TekSure" description="Day One, Apple Journal, gratitude journals — mental health benefit." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PenTool className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Journaling Apps</h1>
          <p className="text-lg text-muted-foreground">Real mental health benefit.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Journal</h2><p>FREE on iPhone. Voice or text. Auto-suggests memories.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Day One</h2><p>$3/month. Best premium journal. Photos, weather, location auto-saved.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Five Minute Journal</h2><p>$5. Daily prompts. Gratitude focus.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Studies show</h2><p>Journaling reduces anxiety, depression. Real measurable benefit.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice journaling</h2><p>Easier than typing. iPhone Voice Memos. 5 min daily.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Gratitude focus</h2><p>3 things grateful for daily. Real mood improvement in 2 weeks.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 5 minutes journaling daily = real mental health treatment.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
