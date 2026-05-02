import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

export default function SeniorIPadPhotos() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Photos on iPad — Senior Guide" description="Browse, organize and share photos on your iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Image className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Photos on iPad</h1>
          <p className="text-lg text-muted-foreground">Find and share family memories.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open Photos</h2><p>Tap the colorful flower icon. Photos shows everything in date order.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Search by year or place</h2><p>Tap Search. Type a year, a city, or even Christmas to find old photos fast.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Make an album</h2><p>Tap Albums, then the plus sign. Name it Grandkids. Add favorite photos to keep them together.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Share by text or email</h2><p>Open a photo. Tap the share box (square with arrow). Pick Messages or Mail.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Delete unwanted photos</h2><p>Tap the trash icon. Deleted photos go to Recently Deleted for 30 days in case you change your mind.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Crop and brighten</h2><p>Tap Edit. Use the dial to brighten. Tap the crop icon to trim out edges.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Photos sync to iCloud, so the same library appears on iPhone and Mac too.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
