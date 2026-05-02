import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Keyboard } from 'lucide-react';

export default function SeniorWindowsKeyboardShortcuts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Windows Keyboard Shortcuts — Senior Guide" description="Quick keyboard shortcuts that save time." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Keyboard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Keyboard Shortcuts</h1>
          <p className="text-lg text-muted-foreground">Save time with key combos.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Copy and paste</h2><p>Ctrl + C copies. Ctrl + V pastes. Faster than right-clicking.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Undo</h2><p>Ctrl + Z undoes the last action. Ctrl + Y redoes it. Rescues most mistakes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Save</h2><p>Ctrl + S saves the file you're working on. Build the habit — save often.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Print</h2><p>Ctrl + P opens the print window for any document or webpage.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Switch programs</h2><p>Alt + Tab switches between open windows. Hold Alt and tap Tab to cycle.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Lock the PC</h2><p>Windows key + L locks instantly. Use when you step away from the computer.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Print Screen key copies a picture of your screen — paste into email or Word.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
