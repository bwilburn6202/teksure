import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tablet } from 'lucide-react';

export default function SeniorVideoCallTablets() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Video Call Tablets for Seniors — TekSure" description="Best tablets for senior video calls — GrandPad, Echo Show, iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tablet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Video Call Tablets</h1>
          <p className="text-lg text-muted-foreground">Big buttons. Easy calls.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">GrandPad</h2><p>$80 + $79/month. Designed for seniors. Pre-loaded with family contacts and photos.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Echo Show 8</h2><p>$140. Voice-controlled. &ldquo;Alexa, call Mary.&rdquo; Auto-shows family photos when idle.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPad (10th gen)</h2><p>$350. Most flexible. Easier than iPhone for shaky hands.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Facebook Portal — discontinued</h2><p>If you find one used, it still works. Big screen, easy video calls.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup tips</h2><p>Have a grandchild set up favorites/contacts. Then it&apos;s one-tap to call.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Stand it up</h2><p>$15 stand makes hands-free calls easy. Keep it on kitchen counter.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Echo Show is best gift. &ldquo;Alexa, video call Mom&rdquo; is hands-free magic.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
