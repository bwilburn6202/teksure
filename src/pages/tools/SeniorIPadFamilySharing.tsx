import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorIPadFamilySharing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Family Sharing on iPad — Senior Guide" description="Share apps, photos and storage with family." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Family Sharing</h1>
          <p className="text-lg text-muted-foreground">Share with up to 6 family members.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Set it up</h2><p>Settings, your name, Family Sharing. Tap Set Up. Invite family by email or Messages.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Share apps</h2><p>Pay once, the whole family uses it. Apps must support sharing — most do.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Share iCloud storage</h2><p>One 200 GB plan covers everyone. Cheaper than 6 separate plans.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Find My family</h2><p>See where loved ones are on a map. Helps if a grandchild is late or a parent is lost.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Approve purchases</h2><p>Ask to Buy makes a kid request approval before any app or song downloads.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Shared photo album</h2><p>Make a Family album. Everyone adds photos. Everyone sees them. Like a digital photo album.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Each member keeps their own Apple ID, photos, and email. Sharing is opt-in, not full access.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
