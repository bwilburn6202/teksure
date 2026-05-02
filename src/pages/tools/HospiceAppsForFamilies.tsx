import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartHandshake } from 'lucide-react';

export default function HospiceAppsForFamilies() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hospice Apps for Senior Families | TekSure" description="End-of-life apps + resources for senior families." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartHandshake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hospice Apps</h1>
          <p className="text-lg text-muted-foreground">Senior end-of-life.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Find hospice</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>NHPCO.org find.</li><li>Free.</li><li>Medicare covers fully.</li><li>Senior at-home care.</li><li>Family + patient comfort.</li><li>Trusted.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">CaringBridge</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free updates page.</li><li>Family + friends follow.</li><li>Senior journey shared.</li><li>One update reaches all.</li><li>Caregiver energy saved.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Five Wishes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$5 living will.</li><li>Senior advance directive.</li><li>Family knows wishes.</li><li>Plain language.</li><li>Legal in 42 states.</li><li>Worth completing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">VitalTalk</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free communication tool.</li><li>Hard conversations.</li><li>Senior + family.</li><li>Doctor talk guides.</li><li>Free resource.</li><li>Worth reading.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Memorial planning</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cake (joincake.com).</li><li>Free planning tools.</li><li>Senior advance planning.</li><li>Reduce family burden.</li><li>Personalize service.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Grief support</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>GriefShare local groups.</li><li>Free + faith-based.</li><li>Refuge in Grief — free site.</li><li>Senior bereavement.</li><li>Online communities.</li><li>Don&apos;t grieve alone.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">CaringBridge + Five Wishes = senior end-of-life prep</h3><p className="text-sm text-muted-foreground">Free CaringBridge for senior journey updates + $5 Five Wishes living will + free Cake memorial planning = compassionate end-of-life prep. Hospice via NHPCO Medicare-covered. GriefShare bereavement free. Don&apos;t face alone — resources abundant.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
