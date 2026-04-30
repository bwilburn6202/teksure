import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sun } from 'lucide-react';

export default function SunsetLampsForSeniorSleep() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sunset Lamps + Wake Lights for Seniors | TekSure" description="Natural light alarm clocks for senior sleep cycles." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sun className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Wake + Sunset Lights</h1>
          <p className="text-lg text-muted-foreground">Natural senior sleep.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Hatch Restore</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$130-$200.</li><li>Sunrise wake.</li><li>Sunset bedtime.</li><li>Sound machine.</li><li>App control.</li><li>Senior favorite.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Philips Wake-Up</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$80-$200.</li><li>Sunrise simulation.</li><li>Bird sounds.</li><li>Reduces grogginess.</li><li>Senior gentle wake.</li><li>Trusted brand.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Loftie</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$190.</li><li>Modern senior alarm.</li><li>Two-phase wake.</li><li>Meditation library.</li><li>Sleep stories.</li><li>Premium senior choice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Wake without alarm jolt.</li><li>Cortisol gentler.</li><li>Better mood.</li><li>Sleep cycle improved.</li><li>Senior energy.</li><li>Worth premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cheap option</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$40 sunrise alarm clock.</li><li>Amazon basic.</li><li>Same concept.</li><li>Senior frugal.</li><li>Decent quality.</li><li>Try first.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Set 30 min before wake.</li><li>Phone away from bed.</li><li>Sound machine helps too.</li><li>Senior bedside upgrade.</li><li>No screens.</li><li>Better sleep.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$130 Hatch = senior sleep upgrade</h3><p className="text-sm text-muted-foreground">$130 Hatch Restore = senior sleep transformation. Sunrise wake gentler than alarm. Sunset bedtime cues sleep. Sound machine + meditation. Phone replaced bedside. Many senior couples buy two. Best investment for senior sleep quality.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
