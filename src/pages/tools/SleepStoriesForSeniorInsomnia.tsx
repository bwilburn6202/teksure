import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Moon } from 'lucide-react';

export default function SleepStoriesForSeniorInsomnia() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sleep Stories for Senior Insomnia | TekSure" description="Calming bedtime stories help seniors sleep. App + free options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Moon className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sleep Stories</h1>
          <p className="text-lg text-muted-foreground">Soothing voice for sleep.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why they work</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Distract anxious mind.</li><li>Quiet voice settles.</li><li>No screen needed.</li><li>Earphones ideal.</li><li>Built for sleep.</li><li>Senior insomnia helper.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Calm app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$70/year.</li><li>Matthew McConaughey, Stephen Fry.</li><li>Best sleep stories library.</li><li>Senior favorite.</li><li>14-day trial.</li><li>Worth subscription.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free YouTube</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Get Sleepy podcast.</li><li>Boring history audiobooks.</li><li>Nature sounds 8 hours.</li><li>White noise channels.</li><li>Free + abundant.</li><li>Try before paying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior bedtime</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Headphones avoid spouse waking.</li><li>Sleep timer — auto-off.</li><li>Same routine nightly.</li><li>Phone in airplane mode.</li><li>Don&apos;t scroll.</li><li>Senior good sleep hygiene.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Audible bedtime</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Audiobooks work too.</li><li>Boring history book.</li><li>Sleep timer 30-60 min.</li><li>Auto-off.</li><li>Wakes up where stopped.</li><li>Senior favorite.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When to see doctor</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Insomnia 3+ weeks.</li><li>Stories not enough.</li><li>Daytime exhaustion.</li><li>Sleep study possible.</li><li>Don&apos;t suffer.</li><li>Treatable.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Get Sleepy podcast = senior win</h3><p className="text-sm text-muted-foreground">Free Get Sleepy podcast in any podcast app = great senior sleep stories without Calm subscription. 30-min episodes auto-fade. Sleep timer in podcast app. Many seniors swap counting sheep for slow stories about castles. Try tonight.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
