import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Keyboard } from 'lucide-react';

export default function SeniorIPadKeyboard() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPad Keyboard Tips — Senior Guide" description="Type faster and more accurately on iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Keyboard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPad Keyboard Tips</h1>
          <p className="text-lg text-muted-foreground">Type with confidence.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Split keyboard</h2><p>Press and hold the keyboard icon, tap Split. Two halves you can thumb-type with.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Dictate</h2><p>Tap the microphone next to space. Speak clearly. iPad types as you talk.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. External keyboard</h2><p>Pair a Bluetooth keyboard for long writing. Settings, Bluetooth, find your keyboard, tap to pair.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Capital letters</h2><p>Double-tap the shift key for caps lock. Tap once for one capital letter.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Special characters</h2><p>Press and hold a letter to see options like é, ñ, or ü. Slide your finger to pick.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Move the cursor</h2><p>Press and hold the space bar. The keyboard turns into a trackpad. Slide to position the cursor.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>To shake off a typo: shake the iPad and tap Undo. Quick way to backtrack mistakes.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
