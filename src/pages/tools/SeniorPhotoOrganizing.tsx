import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

export default function SeniorPhotoOrganizing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Photo Organizing for Seniors — TekSure" description="Organize 10,000+ photos — Albums, search, AI organize, share." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Image className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Photo Organizing</h1>
          <p className="text-lg text-muted-foreground">Make 10,000 photos useful.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Auto-organized</h2><p>Apple/Google Photos auto-create albums by date, place, people. FREE.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Search photos</h2><p>Type &ldquo;dog&rdquo; or &ldquo;Christmas&rdquo;. AI finds them. Magic.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Make albums</h2><p>Group by event/year. Easy to share specific sets.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Faces</h2><p>Tag once. Find every photo of grandkids automatically.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Memories</h2><p>App auto-creates anniversary memories. &ldquo;Remember 5 years ago&rdquo; videos.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Yearly cleanup</h2><p>Delete blurry/duplicate photos once a year. 30-min task. Saves storage.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Make album of 10 favorite photos a year. Easy to print as gift later.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
