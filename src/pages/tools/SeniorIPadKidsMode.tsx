import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorIPadKidsMode() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPad for Grandkids — TekSure" description="Set up iPad safely for visiting grandchildren — Guided Access, Screen Time." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPad for Grandkids</h1>
          <p className="text-lg text-muted-foreground">Safe for visiting kids.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Guided Access</h2><p>Settings → Accessibility → Guided Access. Locks them in one app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Triple-click to lock</h2><p>Triple-click side button. Pick app. Set passcode. Kid stays in chosen app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best apps for grandkids</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>PBS Kids (free)</li><li>Khan Academy Kids (free)</li><li>Lego Builder (free)</li><li>YouTube Kids</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Screen Time limits</h2><p>Set 1-hour limit per session. Auto-pauses. Saves arguments.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Block in-app purchases</h2><p>Settings → Screen Time → Content Restrictions → In-App Purchases off.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Old iPad as kid iPad</h2><p>Hand down old iPad to grandkids. Update to latest iOS first.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Make iPad &ldquo;visit only.&rdquo; Stays at grandparents. Kids look forward to visits.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
