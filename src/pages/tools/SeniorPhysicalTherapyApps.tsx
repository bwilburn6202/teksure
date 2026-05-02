import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorPhysicalTherapyApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Physical Therapy Apps for Seniors — TekSure" description="Home physical therapy — Hinge Health, Sword Health, Recovery Apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Physical Therapy Apps</h1>
          <p className="text-lg text-muted-foreground">Therapy at home.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hinge Health</h2><p>FREE through many employer/Medicare. Knee, hip, back PT at home.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sword Health</h2><p>FREE through some plans. AI-guided physical therapy.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Recovery Apps</h2><p>$10-$20/month. Knee replacement and joint surgery recovery.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare Part B</h2><p>Outpatient PT covered. Often $30-$50 copay per visit.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">In-home PT</h2><p>Medicare may cover if homebound. Real therapist comes to you.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">YouTube</h2><p>FREE. Bob and Brad PT channel. Famous PT videos. Trustworthy.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Apps work for prevention. Real PT for injuries or post-surgery.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
