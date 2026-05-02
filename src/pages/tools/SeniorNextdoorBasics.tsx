import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function SeniorNextdoorBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Nextdoor for Seniors — TekSure" description="Connect with neighbors, find local help, lost pets — Nextdoor for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Nextdoor for Seniors</h1>
          <p className="text-lg text-muted-foreground">Your neighborhood. Online.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free</h2><p>Sign up at nextdoor.com. Verify your address with a postcard or credit card.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Find local help</h2><p>Need a handyman? Lost a pet? Looking for a babysitter? Post and neighbors respond.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Crime alerts</h2><p>Neighbors share suspicious activity. Useful but can be alarmist.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Selling stuff</h2><p>Free section + classifieds. Sell directly to neighbors. No shipping.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch the drama</h2><p>Heated debates. Mute users who upset you. Feel free to leave.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior groups</h2><p>Many neighborhoods have senior subgroups. Join for tailored conversations.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Read first, post later. Get a feel for the community.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
