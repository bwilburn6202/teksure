import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function SeniorFaceTimeBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="FaceTime for Seniors — TekSure" description="How seniors use FaceTime to video call grandkids — works on iPhone, iPad, Mac." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">FaceTime for Seniors</h1>
          <p className="text-lg text-muted-foreground">Free video calls — built into every iPhone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Always free</h2><p>No subscription. Uses Wi-Fi or cell data. No app to install.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Start a call</h2><p>Open FaceTime → tap +. Type a name from contacts. Tap video icon.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">From the Phone app</h2><p>Tap a contact. Scroll down. Tap FaceTime. Easier if you already use Phone app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Call Android too</h2><p>Newer iPhones can call Android via FaceTime link. Tap &ldquo;Create Link&rdquo; and text it.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Group calls</h2><p>Up to 32 people. Great for family holidays.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Captions</h2><p>Settings → Accessibility → Live Captions. Read what&apos;s being said in real time.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Set up your iPad with FaceTime — bigger screen makes faces easier to see.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
