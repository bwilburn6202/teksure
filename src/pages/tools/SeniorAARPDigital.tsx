import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function SeniorAARPDigital() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AARP Digital Tools — Senior Guide" description="Use AARP's free digital benefits and tools." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Star className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AARP Digital</h1>
          <p className="text-lg text-muted-foreground">Free tools that come with membership.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. AARP app</h2><p>Free from App Store or Play Store. Sign in with your AARP membership number.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. AARP Now</h2><p>News tailored for 50+. Article reading, podcasts, and AARP The Magazine.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Fraud Watch</h2><p>Look up known scams. Report fraud. Free helpline 1-877-908-3360.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Job Board</h2><p>Find age-friendly employers and remote work for older adults.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Caregiver tools</h2><p>Resources for caring for aging parents or a spouse — checklists, support groups.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Member discounts</h2><p>Hotels, restaurants, prescriptions. Show your member number at checkout.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Membership is $16/year. Free benefits often pay for themselves with one trip or hotel stay.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
