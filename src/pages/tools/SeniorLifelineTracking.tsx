import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function SeniorLifelineTracking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Family Location Tracking for Seniors — TekSure" description="Share location safely with family — Apple, Google, Life360." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPin className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Family Location Sharing</h1>
          <p className="text-lg text-muted-foreground">Family knows you&apos;re safe.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Find My</h2><p>Free. Share location with family. They see when you arrive home.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Maps</h2><p>Free on iPhone and Android. Tap your profile → Location sharing.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Life360</h2><p>Free version available. Premium adds crash detection and 24/7 help.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Auto-arrive alerts</h2><p>Family gets notified you arrived home safely. Peace of mind both ways.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Privacy</h2><p>You can pause sharing anytime. Family sees &ldquo;Paused.&rdquo; Resume when ready.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">For caregivers</h2><p>If a senior has memory issues, location sharing helps locate them quickly if they wander.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Share with 1-2 trusted family. Not your whole address book.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
