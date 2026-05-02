import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function SeniorPhotoEditing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Photo Editing for Seniors — TekSure" description="Lightroom, Photoshop Express, free photo editing apps for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Photo Editing</h1>
          <p className="text-lg text-muted-foreground">Make photos beautiful.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Photos</h2><p>FREE built-in. Easy edits. Auto-enhance.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Snapseed</h2><p>FREE. Google&apos;s editor. Professional-quality. Magic eraser.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">VSCO</h2><p>FREE. Beautiful filters. Senior favorite.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lightroom Mobile</h2><p>$10/month. Pro-level editing. Worth it for hobbyists.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Restore old photos</h2><p>Apple Photos can colorize. Or use Remini app for AI restoration.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Print magnets</h2><p>Shutterfly. Apple Photos. Make magnets/calendars from edits.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Apple Photos auto-enhance is enough for most senior photos.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
