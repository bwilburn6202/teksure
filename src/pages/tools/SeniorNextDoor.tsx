import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function SeniorNextDoor() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Nextdoor for Seniors — Senior Guide" description="Connect with your neighborhood on Nextdoor." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Nextdoor</h1>
          <p className="text-lg text-muted-foreground">Hyper-local social network.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Sign up free</h2><p>Verify your address with a postcard or phone number. Only neighbors join.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Find local services</h2><p>Need a plumber? Recommended sitters? Ask neighbors who can vouch for them.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Lost pets</h2><p>Most communities help reunite pets within hours. Post a clear photo.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Crime alerts</h2><p>Police share local incidents. Stay aware without watching scary news.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Free items</h2><p>Browse the For Sale & Free section. Lots of free furniture and tools.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Skip drama</h2><p>If a thread gets nasty, mute it. Not every conversation deserves your time.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Be cautious meeting strangers. Always meet in public places like a coffee shop or police lobby.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
