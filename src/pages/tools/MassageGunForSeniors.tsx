import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function MassageGunForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Massage Guns for Seniors | TekSure" description="Percussion massagers for senior aches + recovery." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Massage Guns</h1>
          <p className="text-lg text-muted-foreground">Senior muscle relief.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Theragun Mini</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$200.</li><li>Quiet.</li><li>Lighter for seniors.</li><li>Premium brand.</li><li>3 speeds.</li><li>Travel friendly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bob and Brad C2</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$80.</li><li>PT recommended.</li><li>5 attachments.</li><li>Senior best value.</li><li>Multiple speeds.</li><li>Trusted PTs.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Stiff muscles.</li><li>Lower back.</li><li>Foot pain.</li><li>Sciatica relief.</li><li>Senior daily use.</li><li>10-15 min.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Caution</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Not over bones.</li><li>Not on injuries.</li><li>Not on neck/spine.</li><li>Senior careful.</li><li>Talk to doctor.</li><li>Read manual.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">YouTube tutorials</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bob and Brad — best PT.</li><li>Free senior tutorials.</li><li>Where to use.</li><li>Senior learn safely.</li><li>How long.</li><li>What to avoid.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family use</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Spouse use too.</li><li>Grandkid sports.</li><li>Senior family asset.</li><li>Hand to hand.</li><li>One per house.</li><li>Worth shared.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$80 Bob and Brad = senior PT-recommended</h3><p className="text-sm text-muted-foreground">$80 Bob and Brad C2 massage gun = senior PT-recommended. Lower back, feet, sciatica relief. Watch their free YouTube tutorials safe use. Daily 10-15 min. Family asset. Most senior pain-relief tech under $100.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
