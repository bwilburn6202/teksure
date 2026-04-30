import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

export default function PoolSafetyForSeniorGrandkids() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pool Safety for Senior Grandparents | TekSure" description="Pool alarms + tech for grandkid visits to senior homes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pool Safety</h1>
          <p className="text-lg text-muted-foreground">Senior grandkid visits.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pool alarms</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sub-surface — $200.</li><li>Detects splash.</li><li>Senior loud alert.</li><li>Drowning prevention.</li><li>Trustworthy.</li><li>Worth every penny.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pool fence</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$5-$10/foot.</li><li>4-ft minimum.</li><li>Self-closing gate.</li><li>Senior code required many places.</li><li>Insurance discount.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Door alarm</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30 senior backyard door.</li><li>Beeps when opened.</li><li>Senior knows kid sneak out.</li><li>Battery operated.</li><li>Easy install.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Floats + life jackets</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Coast Guard approved.</li><li>Senior keep stocked.</li><li>Various sizes.</li><li>Make kids wear.</li><li>$30-$50 each.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch always</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Designate water watcher.</li><li>No phone.</li><li>Senior or family.</li><li>Drowning silent.</li><li>30 sec changes life.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Swim lessons</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Best protection.</li><li>YMCA cheap.</li><li>Senior gift grandkid.</li><li>Skill matters more than alarm.</li><li>$100-$300.</li><li>Worth lifelong.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Pool alarm + fence + watch = senior grandkid safe</h3><p className="text-sm text-muted-foreground">Senior pool grandkid visit — $200 sub-surface pool alarm + 4-ft fence + dedicated water watcher (no phone). Plus Coast Guard life jacket. Door alarm $30 backyard. Multiple layers prevent silent drownings. Critical investment if pool + grandkids visit.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
