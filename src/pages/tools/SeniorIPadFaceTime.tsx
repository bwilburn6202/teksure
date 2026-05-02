import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorIPadFaceTime() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="FaceTime on iPad — Senior Guide" description="Make free FaceTime video calls from your iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">FaceTime on iPad</h1>
          <p className="text-lg text-muted-foreground">Free video calls to family.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open FaceTime</h2><p>Tap the green camera icon. Sign in with your Apple ID if asked.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Start a call</h2><p>Tap New FaceTime. Type a name, phone number, or email. Tap the video button.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Answer a call</h2><p>When the iPad rings, tap Accept. Tap Decline if you cannot talk now.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Group calls</h2><p>Add several people in one call. Up to 32 people at once for family gatherings.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Audio only</h2><p>If your internet is slow, tap the audio button instead. Voice still comes through clearly.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Share a link</h2><p>Tap Create Link to send a FaceTime invite by email or text. Works for Android too.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>FaceTime uses Wi-Fi or cellular data. Calls are free — no per-minute charges.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
