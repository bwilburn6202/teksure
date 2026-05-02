import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { StickyNote } from 'lucide-react';

export default function SeniorIPadNotes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Notes on iPad — Senior Guide" description="Use the Notes app on iPad to jot down anything." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <StickyNote className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Notes on iPad</h1>
          <p className="text-lg text-muted-foreground">Quick lists, reminders, and ideas.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open Notes</h2><p>Tap the yellow Notes icon. Tap the pencil-and-paper icon to start a new note.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Type or dictate</h2><p>Type with the keyboard, or tap the microphone key to speak instead of typing.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Make a checklist</h2><p>Tap the circle-with-checkmark icon. Each line gets a circle you can tap when done.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Add a photo</h2><p>Tap the camera icon. Take a new photo or pick one from your library.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Search your notes</h2><p>Pull down to show the search bar. Type any word to find old notes fast.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Folders</h2><p>Tap Folders to organize. Make one for Recipes, one for Doctor Notes, one for Lists.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Notes sync with iCloud automatically — your notes appear on iPhone and Mac too.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
