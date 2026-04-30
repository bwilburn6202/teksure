import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Footprints } from 'lucide-react';

export default function StepCountAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Step Count Apps for Seniors | TekSure" description="Free pedometers for senior daily walking goals." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Footprints className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Step Count Apps</h1>
          <p className="text-lg text-muted-foreground">Free pedometers.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Health</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free iPhone built-in.</li><li>Auto-counts steps.</li><li>No app needed.</li><li>Senior automatic.</li><li>Tracks always.</li><li>Trends visible.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Google Fit</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free Android.</li><li>Auto step count.</li><li>Heart Points goal.</li><li>Senior similar.</li><li>Free.</li><li>Built-in often.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pacer</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free 3rd party.</li><li>Cross-platform.</li><li>Family share.</li><li>Senior compete.</li><li>Friend connections.</li><li>Free + good.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior step goals</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>5,000 — minimum.</li><li>7,000 — health benefits.</li><li>10,000 — popular target.</li><li>Senior choose realistic.</li><li>Build slowly.</li><li>Consistency &gt; max.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Studies show</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>4,400 steps/day = longer life.</li><li>7,500 — most benefits.</li><li>Beyond plateau.</li><li>Senior 7,500 = great.</li><li>Don&apos;t obsess 10k.</li><li>Movement matters.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior motivation</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Daily streak.</li><li>Family group challenge.</li><li>Senior compete grandkids.</li><li>Walk during phone calls.</li><li>Park further at store.</li><li>Adds up.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Apple Health = senior auto-tracker</h3><p className="text-sm text-muted-foreground">iPhone Apple Health auto-tracks senior steps free. No app needed. Goal 7,500/day = most health benefits. Pacer free family share + compete grandkids. Walk during phone calls + further parking. Daily streaks motivate. Free + automatic.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
