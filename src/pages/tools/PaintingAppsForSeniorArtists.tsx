import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Palette } from 'lucide-react';

export default function PaintingAppsForSeniorArtists() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Painting Apps for Senior Artists | TekSure" description="Digital painting on iPad. Senior artist app guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Palette className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Painting Apps</h1>
          <p className="text-lg text-muted-foreground">Digital art.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Procreate</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$13 one-time iPad.</li><li>Best painting app.</li><li>Apple Pencil.</li><li>Senior endless brushes.</li><li>No subscription.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Adobe Fresco free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free version.</li><li>Watercolor + oil simulation.</li><li>Senior realistic.</li><li>iPhone + iPad.</li><li>Limited brushes free.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free senior options</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Concepts free tier.</li><li>Sketchbook by Autodesk free.</li><li>Senior frugal.</li><li>iPhone + iPad.</li><li>Try multiple.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Pencil essential</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$80-$130.</li><li>Pressure sensitivity.</li><li>Senior natural drawing.</li><li>Tilt for shading.</li><li>Worth investment.</li><li>Or Logitech Crayon $50.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">YouTube tutorials</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free abundant.</li><li>Procreate tutorials.</li><li>Senior step-by-step.</li><li>Beginner-friendly.</li><li>Free always.</li><li>Don&apos;t pay courses.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Print + share</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Print on canvas.</li><li>Shutterfly $30.</li><li>Senior gift family.</li><li>Frame proudly.</li><li>Best digital benefit.</li><li>Treasure forever.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$13 Procreate + Apple Pencil = senior artist</h3><p className="text-sm text-muted-foreground">$13 one-time Procreate + Apple Pencil = senior digital artist. Endless brushes. Watercolor, oil, pencil simulated. Free YouTube tutorials. Print on canvas $30 share family. Most senior creative iPad app. No subscription.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
