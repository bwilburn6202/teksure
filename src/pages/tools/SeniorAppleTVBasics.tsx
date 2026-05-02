import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function SeniorAppleTVBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple TV Basics — Senior Guide" description="Use the Apple TV streaming box." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple TV Basics</h1>
          <p className="text-lg text-muted-foreground">A clean streaming setup.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Cost</h2><p>Apple TV 4K is $129-$149. Buy it once, no monthly fee.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Plug in</h2><p>HDMI cable to TV. Power cable to wall. Pair Siri Remote when prompted.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Sign in apps</h2><p>Netflix, Hulu, Prime — sign in once. Apple TV remembers you.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Voice search</h2><p>Hold mic on remote. Say Find John Wayne movies. Searches every app at once.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. AirPlay</h2><p>Mirror iPhone or iPad photos to TV. Great for showing family videos.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Apple TV+ subscription</h2><p>Optional $9.99/month. Has Ted Lasso and Severance. Skip if you watch other streamers.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Apple TV box is different from the Apple TV+ subscription. The box plays any app, not just Apple's.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
