import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HardDrive } from 'lucide-react';

export default function SeniorAndroidStorage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Android Storage — Senior Guide" description="Free up space on your Android phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HardDrive className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Android Storage</h1>
          <p className="text-lg text-muted-foreground">Free up space when phone slows.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Check storage</h2><p>Settings, Storage. See what is taking the most space.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Clean junk files</h2><p>Open the Files app, then Clean. Tap Confirm and free to remove app caches and trash.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Free up Photos</h2><p>Open Google Photos. Tap your photo, Free up space. Removes phone copies after backup.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Uninstall unused apps</h2><p>Settings, Apps. Sort by least used. Tap Uninstall on apps you no longer need.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Clear browser data</h2><p>Open Chrome, Settings, Privacy, Clear browsing data. Frees space and speeds it up.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Old downloads</h2><p>Open Files, Downloads folder. Delete files you no longer need.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Below 10% free? Phone slows down. Aim to keep at least 20% storage open.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
