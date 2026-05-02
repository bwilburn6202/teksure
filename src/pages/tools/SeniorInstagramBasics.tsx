import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function SeniorInstagramBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Instagram Basics — Senior Guide" description="See family photos on Instagram." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Instagram Basics</h1>
          <p className="text-lg text-muted-foreground">Where the grandkids share photos.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Sign up</h2><p>Free. Pick a username. Use a real profile photo so family knows it's you.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Follow family</h2><p>Search their username. Tap Follow. Their photos appear in your feed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Like and comment</h2><p>Double-tap a photo to like. Tap the speech bubble to leave a kind comment.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Stories</h2><p>Circles at the top show 24-hour photos. Tap one to watch — they vanish after a day.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Private account</h2><p>Settings, Privacy, turn on Private. Only approved followers see your photos.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Block strangers</h2><p>If someone messages out of nowhere, tap Block. Don't engage.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Instagram is owned by Meta (Facebook). Same login works on both apps.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
