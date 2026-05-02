import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scale } from 'lucide-react';

export default function SeniorWeightAndDietApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Weight + Diet Apps | TekSure" description="Smart scales + diet apps for senior health management." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scale className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Weight + Diet Apps</h1>
          <p className="text-lg text-muted-foreground">Senior management.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Withings Body+</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$100.</li><li>Smart scale auto-syncs.</li><li>Senior weight + body comp.</li><li>Apple Health.</li><li>Multi-user.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Noom</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$60/month.</li><li>Behavioral approach.</li><li>Senior psychology + food.</li><li>Coach access.</li><li>Studies-backed.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">WW (Weight Watchers)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$25-$50/mo.</li><li>Senior community.</li><li>Points system.</li><li>Group meetings.</li><li>Decades trusted.</li><li>Worth subscription.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free MyFitnessPal</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Track weight + food.</li><li>Senior data-driven.</li><li>Free version solid.</li><li>Doctor share.</li><li>Worth trying first.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior considerations</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Don&apos;t restrict too much.</li><li>Muscle loss risk.</li><li>Senior protein priority.</li><li>Doctor consult heavy diet.</li><li>Slow + steady.</li><li>Worth medical guidance.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Daily weigh-in</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Same time.</li><li>Same scale.</li><li>Track trends.</li><li>Senior pattern visible.</li><li>Don&apos;t obsess daily.</li><li>Weekly average matters.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$100 Withings + free MyFitnessPal = senior</h3><p className="text-sm text-muted-foreground">$100 Withings Body+ smart scale + free MyFitnessPal = senior data-driven weight management. Apple Health auto-sync. Doctor share trends. Or Noom $60/mo behavioral. WW $25-$50 community. Senior protein priority — don&apos;t over-restrict. Doctor consult.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
