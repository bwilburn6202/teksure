import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorFamilySharing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Family Sharing for Seniors — TekSure" description="Apple Family Sharing and Google Family Link — share apps, photos, location safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Family Sharing</h1>
          <p className="text-lg text-muted-foreground">Share with up to 5 family members.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Family Sharing</h2><p>Free. Settings → Apple ID → Family Sharing → Set Up.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What you can share</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>iCloud storage</li><li>Apple Music, TV+, Arcade</li><li>App purchases</li><li>Photos albums</li><li>Location</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Family Link</h2><p>Free. Same idea for Android. Share Google One storage and YouTube Premium.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior savings</h2><p>One $13 Apple One Family plan replaces 5 individual subscriptions.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Privacy</h2><p>You can stop sharing location anytime. Only what you choose is shared.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Easy setup</h2><p>Family member sends invite. You accept on your phone.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Have grandkids set this up. They love teaching grandparents new tech.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
