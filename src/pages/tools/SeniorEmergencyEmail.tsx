import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function SeniorEmergencyEmail() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Emergency Email Setup for Seniors — TekSure" description="Email family in emergency — pre-written messages for fast sending." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emergency Email Setup</h1>
          <p className="text-lg text-muted-foreground">Pre-written messages save time.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family emergency list</h2><p>Save in Apple Notes. Pre-fill emails ready to send.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Group emergency email</h2><p>Address book group. Send to all family with one tap.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pre-written messages</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>I&apos;m at the hospital</li><li>Power outage. I&apos;m fine</li><li>Need help. Please call.</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Carrier check-in</h2><p>If kids haven&apos;t heard from you in 24 hours, they should be alerted.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Check-In</h2><p>Settings → iMessage → Check In. Auto-shares status with trusted family.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mass communication</h2><p>OneSignal or similar. Send to many at once if disaster.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Apple Check-In = automatic status to family without effort.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
