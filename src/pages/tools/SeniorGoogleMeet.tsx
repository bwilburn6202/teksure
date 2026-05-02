import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function SeniorGoogleMeet() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Meet for Seniors — TekSure" description="Free video calls with Google Meet — works on phone, computer, anyone with link." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Meet</h1>
          <p className="text-lg text-muted-foreground">Free video calls. Works for everyone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free</h2><p>Free with any Gmail. No app needed — works in browser.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Start a meeting</h2><p>Visit meet.google.com. Click &ldquo;New Meeting.&rdquo; Share the link.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Captions</h2><p>Click CC. Live captions in 30+ languages. Free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">60-minute limit</h2><p>Free version cuts off at 60 minutes for groups. Just rejoin.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Calendar integration</h2><p>Schedule meetings in Google Calendar. Auto-sends invite.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Easier than Zoom</h2><p>No login required. Click link, type name, join.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Bookmark meet.google.com on home screen. One-tap video calls.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
