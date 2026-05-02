import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

export default function SeniorPhotoSharing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sharing Photos for Seniors — TekSure" description="How seniors share photos with family — texts, shared albums, Facebook." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Image className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sharing Photos</h1>
          <p className="text-lg text-muted-foreground">Send photos to family — easy.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Text a photo</h2><p>Open photo. Tap share arrow. Pick Message. Add recipient. Send.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iCloud Shared Album</h2><p>iPhone only. Make an album for grandkids&apos; photos. Family adds and views forever.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Photos sharing</h2><p>Open photo → Share → Create link. Copy and paste anywhere.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Facebook</h2><p>Post photos to your timeline or in family group. All Facebook friends can see.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Email</h2><p>Best for 1-5 photos. Many at once may bounce.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Privacy</h2><p>Don&apos;t post photos with location turned on. Disable in iPhone Settings → Privacy → Location → Camera.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: A shared album is best for grandparents — photos appear automatically when family adds them.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
