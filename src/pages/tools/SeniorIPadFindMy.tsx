import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function SeniorIPadFindMy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Find My on iPad — Senior Guide" description="Find a lost iPad, iPhone, or AirTag." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPin className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Find My on iPad</h1>
          <p className="text-lg text-muted-foreground">Locate lost devices and items.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Turn it on</h2><p>Settings, your name, Find My. Make sure Find My iPad is on. Saves lots of stress later.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Find a misplaced iPad</h2><p>From any computer go to iCloud.com. Sign in. Tap Find iPhone. See it on a map.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Play Sound</h2><p>If the iPad is in the house, tap Play Sound. It chimes loudly even on silent.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Mark as Lost</h2><p>If lost in public, lock the device and show your phone number on the screen.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. AirTags</h2><p>Stick one on your keys, wallet, or remote. Find it from the iPad in seconds.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Find friends</h2><p>If family shares location, see them on a map. Useful if a spouse forgets to call.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Find My works even when the iPad is off — using the secure Apple network of nearby devices.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
