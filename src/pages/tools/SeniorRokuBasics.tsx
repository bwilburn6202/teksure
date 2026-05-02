import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function SeniorRokuBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Roku Basics — Senior Guide" description="Use a Roku streaming player or TV." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Roku Basics</h1>
          <p className="text-lg text-muted-foreground">Cheap, simple streaming.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Cheap and easy</h2><p>Roku Express $30. Roku Streaming Stick 4K $50. Plug into HDMI port.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Set up</h2><p>Free Roku account. Connect to Wi-Fi. Pick the streaming apps you want.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Free channels</h2><p>The Roku Channel has hundreds of free movies and TV shows. No subscription.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Voice search</h2><p>Press the mic button on the remote. Say a movie or actor name.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Headphone jack</h2><p>Some Roku remotes have a headphone jack. Plug in for private listening at night.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Roku Mobile App</h2><p>Free app turns your phone into a remote. Helpful if you lose the real one.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Many TVs come with Roku built in. No separate box needed if your TV says Roku TV.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
