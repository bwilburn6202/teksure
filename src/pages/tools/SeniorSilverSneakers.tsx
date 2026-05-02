import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorSilverSneakers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="SilverSneakers for Seniors — TekSure" description="Free SilverSneakers gym membership through Medicare Advantage — how to use." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">SilverSneakers</h1>
          <p className="text-lg text-muted-foreground">FREE gym for seniors.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free with Medicare Advantage</h2><p>15,000+ gyms nationwide. LA Fitness, YMCA, Gold&apos;s, Anytime Fitness.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sign up</h2><p>Visit silversneakers.com. Enter your insurance. Get your member ID.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior classes</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Classic (low-impact)</li><li>Yoga for seniors</li><li>Boom Mind &amp; Move</li><li>Splash water aerobics</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SilverSneakers GO app</h2><p>Free. At-home videos. Track activities.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">If you don&apos;t qualify</h2><p>Renew Active (UnitedHealthcare). Active &amp; Fit Direct. Same idea, similar networks.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Worth it</h2><p>Even using once a week saves $30+/month vs paying gym fees.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Many YMCAs accept SilverSneakers. Often the friendliest senior environment.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
