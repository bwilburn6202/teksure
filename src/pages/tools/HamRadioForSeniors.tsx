import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Radio } from 'lucide-react';

export default function HamRadioForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ham Radio + Amateur Radio for Seniors | TekSure" description="Get licensed and on the air. Ham radio guide for senior hobbyists." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Radio className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ham Radio</h1>
          <p className="text-lg text-muted-foreground">Senior hobby + emergency prep.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why seniors love it</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Talk worldwide free.</li><li>Emergency communication.</li><li>Tinkering hobby.</li><li>Senior-heavy community.</li><li>Local clubs welcoming.</li><li>Lifetime hobby.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Get licensed</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Technician class — entry level.</li><li>35 multiple choice questions.</li><li>$15 exam fee.</li><li>$35 FCC license fee.</li><li>HamStudy.org free study.</li><li>10-year license.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Starter radio</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Baofeng UV-5R — $25.</li><li>Handheld VHF/UHF.</li><li>Local repeater chats.</li><li>Programming with software.</li><li>Senior-friendly starter.</li><li>Cheap to test interest.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Local club</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>ARRL.org find clubs.</li><li>Most cities have one.</li><li>Members help with study.</li><li>Volunteer exam day.</li><li>Field events fun.</li><li>Welcoming senior friendly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">After license</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Repeater conversations.</li><li>Field Day every June.</li><li>Emergency net practice.</li><li>HF rigs for worldwide.</li><li>Digital modes.</li><li>Always learning.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Emergency value</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Works when cell towers down.</li><li>Hurricane, fire, earthquake.</li><li>Seniors stay connected.</li><li>Family check-in.</li><li>Volunteer for ARES.</li><li>Real community service.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$60 launches lifetime hobby</h3><p className="text-sm text-muted-foreground">$25 Baofeng + $15 exam + $35 FCC fee = $75 to start ham radio. Many seniors find their tribe in local club. Tinkering, talking, helping in emergencies. Brain stays active learning Morse, electronics, antennas. Best senior hobby for combining tech + community.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
