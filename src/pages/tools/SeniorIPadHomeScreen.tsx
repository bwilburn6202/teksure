import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { LayoutGrid } from 'lucide-react';

export default function SeniorIPadHomeScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPad Home Screen — Senior Guide" description="Organize the iPad home screen." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <LayoutGrid className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Screen</h1>
          <p className="text-lg text-muted-foreground">Tidy and easy to find apps.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Move an app</h2><p>Press and hold an app. Tap Edit Home Screen. Drag to a new spot.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Make a folder</h2><p>Drag one app on top of another. iPad makes a folder. Rename it Health, Games, etc.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Dock</h2><p>The bottom row holds your favorites. Drag your most-used apps there for quick access.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Widgets</h2><p>Hold an empty spot. Tap the plus. Add Weather, Calendar, or Photos as a live tile.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. App Library</h2><p>Swipe left past the last home page. Every app, sorted into smart categories.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Hide pages</h2><p>Hold an empty spot. Tap the dots at the bottom. Uncheck a page to hide clutter.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Swipe down on the home screen to open Search. Type any app name to find it instantly.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
