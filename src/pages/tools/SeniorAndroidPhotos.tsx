import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

export default function SeniorAndroidPhotos() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Photos on Android — Senior Guide" description="Back up and find photos on Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Image className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Photos</h1>
          <p className="text-lg text-muted-foreground">Photos saved safely in the cloud.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open Photos</h2><p>Tap the colorful pinwheel icon. All your phone photos appear by date.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Turn on backup</h2><p>Tap your photo, then Photos settings, then Backup. Photos save to Google automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Search smart</h2><p>Type beach, or grandkids, or 2024. Photos uses AI to find matches without tagging.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Share albums</h2><p>Make an album. Tap Share. Send a link. Family members add their own photos.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Free up space</h2><p>Tap your photo, Free up space. Removes phone copies after they back up to Google.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Storage limit</h2><p>Free 15 GB shared with Gmail. Google One adds more storage starting at $1.99 a month.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Photos sync to any device — sign in to photos.google.com on a computer to see them all.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
