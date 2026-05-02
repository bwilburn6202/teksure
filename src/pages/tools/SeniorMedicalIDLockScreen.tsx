import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function SeniorMedicalIDLockScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medical ID for Lock Screen — Seniors — TekSure" description="Set up Medical ID on iPhone or Android — accessible from lock screen in emergencies." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medical ID Lock Screen</h1>
          <p className="text-lg text-muted-foreground">EMTs can read this without unlocking your phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone setup</h2><p>Health app → Medical ID → Edit. Add allergies, conditions, blood type, contacts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Show on lock screen</h2><p>Toggle &ldquo;Show When Locked&rdquo; ON. Saves lives.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android setup</h2><p>Settings → Safety &amp; Emergency → Emergency Information.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What to add</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Medical conditions (diabetes, AFib)</li><li>Allergies (peanuts, penicillin)</li><li>Medications</li><li>Blood type</li><li>Emergency contacts</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Auto-share in emergency</h2><p>If you call SOS, phone auto-texts your medical info to emergency contacts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Update annually</h2><p>Medications change. Update yearly with your annual physical.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Wear a Medical ID bracelet too. EMTs check both.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
