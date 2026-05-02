import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

export default function SeniorYouTubeChannels() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="YouTube Channels for Seniors — Senior Guide" description="The best YouTube channels for older adults." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Play className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior YouTube Channels</h1>
          <p className="text-lg text-muted-foreground">Quality channels worth subscribing to.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Apple Support</h2><p>Free official tutorials for iPhone, iPad, Mac. Best for Apple beginners.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. AARP YouTube</h2><p>Senior-focused tech tips, scams, retirement planning. All free.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. America's Test Kitchen</h2><p>Cooking with seniors in mind. Clear instructions. Tested recipes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. CBS Sunday Morning</h2><p>Calm, smart show. Full episodes weekly.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. PBS NewsHour</h2><p>Reliable, no-yelling news. Long-form coverage.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. CGP Grey, Vsauce, Veritasium</h2><p>Educational. Plain English explanations of how things work.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Subscribe = new videos in your feed. Less searching, more watching.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
