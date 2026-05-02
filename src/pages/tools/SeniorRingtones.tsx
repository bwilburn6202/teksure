import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2 } from 'lucide-react';

export default function SeniorRingtones() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Ringtones for Seniors — TekSure" description="Loud, clear ringtones for seniors — better hearing and recognition." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Volume2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior-Friendly Ringtones</h1>
          <p className="text-lg text-muted-foreground">Hear every call.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Set max volume</h2><p>iPhone: Settings → Sounds → Ringtone slider all the way up.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">LED flash for calls</h2><p>iPhone: Settings → Accessibility → Audio/Visual → LED Flash for Alerts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Vibrate strong</h2><p>Android: Settings → Sounds → Vibration intensity → Strong.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Custom for family</h2><p>Different ringtone per family member. Hear who&apos;s calling without looking.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best ringtones for seniors</h2><p>Old-school telephone bell. Classic chime. Avoid fancy musical tones.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hearing aids</h2><p>Pair phone to hearing aids. Calls stream through both ears.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Add LED flash AND loud ringtone. Catches attention even with hearing loss.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
