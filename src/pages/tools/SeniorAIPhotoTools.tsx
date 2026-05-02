import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

export default function SeniorAIPhotoTools() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Photo Tools for Seniors — Senior Guide" description="Use AI to fix and improve photos." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Image className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Photo Tools</h1>
          <p className="text-lg text-muted-foreground">Fix, improve, and revive old photos.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Magic Eraser</h2><p>Google Photos. Tap edit, Magic Eraser. Remove strangers from a photo.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Clean Up (Apple)</h2><p>Same idea on iPhone. Photos, edit, Clean Up. Tap what to remove.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Restore old photos</h2><p>Apps like Remini fix scratched and faded photos from the 1950s and 60s.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Colorize black and white</h2><p>Free apps add realistic color to old family photos. Looks like a different era.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Enhance blurry photos</h2><p>AI sharpens slightly out-of-focus photos. Works well on faces.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Privacy</h2><p>Skip apps that ask to upload to a server. Stick to Apple, Google, or apps with offline AI.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Family will love restored photos as gifts. Most cost nothing or under $5 to enhance.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
