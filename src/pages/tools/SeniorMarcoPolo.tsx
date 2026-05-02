import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function SeniorMarcoPolo() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Marco Polo for Seniors — TekSure" description="Video walkie-talkie for senior families — leave video messages anytime." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Marco Polo for Seniors</h1>
          <p className="text-lg text-muted-foreground">Video messages, no scheduling needed.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free version</h2><p>FREE basic. Family-friendly. No ads.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Premium</h2><p>$70/year. Unlimited video length, special effects.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why seniors love it</h2><p>Record video when you have time. Family watches when they have time. No scheduling.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family group</h2><p>One group with all family. Ongoing video conversation.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Send to multiple</h2><p>Record once. Sends to whole family group. Saves time.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Speed playback</h2><p>Watch family videos at 1.5x or 2x speed. Catch up faster.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Daily &ldquo;good morning&rdquo; videos to grandkids. They start their day with grandparent love.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
