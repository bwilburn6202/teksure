import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function ChronicConditionAppsSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chronic Condition Apps for Seniors | TekSure" description="Diabetes, heart, COPD apps for senior chronic conditions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chronic Condition Apps</h1>
          <p className="text-lg text-muted-foreground">Senior daily management.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Diabetes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>MySugr free.</li><li>Track glucose, carbs.</li><li>Senior daily logging.</li><li>Share with doctor.</li><li>Medicare-covered devices.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Heart</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple Health auto-tracks.</li><li>Cardiogram analyzes.</li><li>KardiaMobile EKG $80.</li><li>Senior heart awareness.</li><li>Share with cardiologist.</li><li>Catch issues.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">COPD</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>COPD Pocket Consultant Guide free.</li><li>BreatheWell tracking.</li><li>Senior breathing exercises.</li><li>Inhaler reminders.</li><li>Worsening alerts.</li><li>Doctor share.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Arthritis</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>ArthritisPower free.</li><li>Track flare-ups.</li><li>Senior pain management.</li><li>Medication reminders.</li><li>Research participate.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mental health</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Daylio mood journal free.</li><li>Senior depression tracking.</li><li>Doctor share patterns.</li><li>Sanvello CBT $9/mo.</li><li>Therapy supplements.</li><li>Free options.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Health hub</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Centralizes all data.</li><li>iPhone built-in.</li><li>Senior single dashboard.</li><li>Share via PDF doctor.</li><li>Free.</li><li>Worth setup.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Apple Health hub = senior chronic care</h3><p className="text-sm text-muted-foreground">Apple Health centralizes all senior chronic condition data — diabetes, heart, BP. Plus condition-specific apps free: MySugr, ArthritisPower, Daylio. Share PDF with doctor. Most senior chronic management free + powerful. Use daily for catching trends.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
