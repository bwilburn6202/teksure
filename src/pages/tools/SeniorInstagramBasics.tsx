import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function SeniorInstagramBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Instagram for Seniors — TekSure" description="See grandkids' photos and follow favorite topics — Instagram for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Instagram for Seniors</h1>
          <p className="text-lg text-muted-foreground">See grandkids&apos; photos. Follow what you love.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free</h2><p>Free app. Owned by Facebook (Meta). Sign up with email or phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Private account</h2><p>Settings → Privacy → Private Account. Only approved followers see your posts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Follow grandkids</h2><p>Search their username. Tap Follow. They approve.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior-friendly accounts</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>@nationalpark</li><li>@aarp</li><li>@nytcooking</li><li>@thehumanesociety</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch Stories</h2><p>Tap your friend&apos;s circle photo at top. Daily 24-hour photos disappear.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Block strangers</h2><p>Long-press a comment → Block. Bullies and scammers gone.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Mute the &ldquo;Reels&rdquo; tab if endless videos waste your time.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
