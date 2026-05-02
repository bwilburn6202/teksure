import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

export default function SeniorVAApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="VA Health App — Senior Guide" description="Manage VA benefits and care from your phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Award className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">VA Health App</h1>
          <p className="text-lg text-muted-foreground">Veterans benefits in your pocket.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Get the app</h2><p>Search VA Health and Benefits in App Store or Play Store. Free and official.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Sign in</h2><p>Use your VA.gov, ID.me, or Login.gov account. Set up at va.gov first if needed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Refill prescriptions</h2><p>One tap to refill VA prescriptions. Track shipping.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Schedule appointments</h2><p>Book primary care, mental health, or specialists. See video visits too.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Message your team</h2><p>Send a secure message to your VA doctor or care team.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. View benefits</h2><p>See disability rating, claim status, and education benefits all in one place.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If you need help with the app, call MyVA411 at 1-800-698-2411 — free, available 24/7.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
