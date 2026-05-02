import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function SeniorAndroidFindMyDevice() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Find My Device on Android — Senior Guide" description="Locate a lost Android phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPin className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Find My Device</h1>
          <p className="text-lg text-muted-foreground">Find a lost Android phone fast.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Turn it on</h2><p>Settings, Security, Find My Device. Make sure it is on. Saves heartburn later.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Find a misplaced phone</h2><p>From any computer go to android.com/find. Sign in with your Google account.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Play Sound</h2><p>If the phone is in the house, tap Play Sound. Phone rings loud even on silent.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Lock it</h2><p>Lost in public — tap Secure device. Lock and add a phone number to call.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Erase if needed</h2><p>Last resort. Wipe the phone clean to keep your information safe.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Bluetooth tags</h2><p>Newer Pixels work with Chipolo or Pebblebee tags. Stick on keys, wallet, remote.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Android shares the network to help find phones even if they are off — like Apple's Find My.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
