import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor } from 'lucide-react';

export default function SeniorWindowsBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Windows 11 Basics — Senior Guide" description="Get started with Windows 11 on your computer." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Monitor className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Windows 11 Basics</h1>
          <p className="text-lg text-muted-foreground">First steps on a new PC.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Start menu</h2><p>Click the Windows icon in the middle of the taskbar. Apps and search live here.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Search</h2><p>Type in the search bar at the bottom. Finds apps, files, and answers fast.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Pin favorites</h2><p>Right-click an app, choose Pin to taskbar. One click access to your top tools.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Settings</h2><p>Open Start, click the gear icon. Adjust display, sound, and Wi-Fi here.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Restart vs Shut Down</h2><p>Restart fixes most odd behavior. Shut Down only when you won't use it for a while.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. File Explorer</h2><p>The folder icon on the taskbar opens your Documents, Pictures, and Downloads.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>The Windows key on the keyboard is the fastest way to reach the Start menu.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
