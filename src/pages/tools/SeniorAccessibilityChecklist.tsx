import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CheckSquare } from 'lucide-react';

export default function SeniorAccessibilityChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Accessibility Checklist | TekSure" description="Complete senior phone + computer accessibility setup." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CheckSquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Accessibility Checklist</h1>
          <p className="text-lg text-muted-foreground">Senior all-in-one.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Vision</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Increase text size.</li><li>Bold text on.</li><li>Display Zoom larger.</li><li>Magnifier on lock screen.</li><li>Speak Selection.</li><li>Senior eye comfort.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Hearing</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Live Captions on.</li><li>Mono audio if one ear.</li><li>Pair hearing aids.</li><li>Notification haptics.</li><li>Senior hearing aid integration.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mobility</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>AssistiveTouch on.</li><li>Voice Control.</li><li>Reachability.</li><li>Side Button speed slower.</li><li>Senior easier hands.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Memory aids</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Reminders pre-set.</li><li>Calendar alerts.</li><li>Voice command setup.</li><li>Family contacts widget.</li><li>Senior easy access.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Safety</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Medical ID.</li><li>Emergency contacts.</li><li>SOS setup.</li><li>Find My on.</li><li>Senior critical setup.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family help</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Adult kid configures.</li><li>30-60 min one-time.</li><li>Senior accessibility setup.</li><li>Family Apple ID Recovery Contact.</li><li>Critical setup.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Adult kid 60-min setup = senior lifetime access</h3><p className="text-sm text-muted-foreground">Adult kid 60-min one-time accessibility setup = senior lifetime ease. Big text, bold, magnifier, live captions, hearing aids, AssistiveTouch, voice control, reminders, Medical ID, SOS, Find My, family contacts widget. Most loving tech help. Free.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
