import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorVoiceMail() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Voicemail Tips for Seniors — Senior Guide" description="Set up and use voicemail like a pro." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Voicemail Tips</h1>
          <p className="text-lg text-muted-foreground">Get the most from your voicemail.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Visual voicemail</h2><p>iPhone and most Androids show messages as a list. Tap any to play.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Read transcripts</h2><p>iPhone transcribes voicemail to text. Read instead of listen.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Greeting</h2><p>Record once. Mention name and a callback time. Saves callers leaving long messages.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Save important ones</h2><p>Tap to save messages. Some carriers keep saved messages for years.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Delete junk</h2><p>Robocaller voicemail wastes space. Delete weekly.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Backup important</h2><p>Take a screenshot of transcript. Or record audio with another phone if it matters.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Voicemails from grandkids are precious. Save them. They grow up fast.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
