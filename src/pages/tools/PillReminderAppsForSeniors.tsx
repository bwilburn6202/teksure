import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';

export default function PillReminderAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pill Reminder Apps for Seniors | TekSure" description="Never miss a dose. Best medication reminder apps for older adults." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pill Reminders</h1>
          <p className="text-lg text-muted-foreground">Never miss a dose.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Medisafe</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Most popular pill app.</li><li>Add medications + times.</li><li>Phone alerts when due.</li><li>Mark as taken.</li><li>Family can be alerted if missed.</li><li>Free version solid.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Round Health</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple-only, simple.</li><li>Visual circle of doses.</li><li>Senior-friendly design.</li><li>No social pressure.</li><li>Free.</li><li>Quick to set up.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Health</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Built into iPhone.</li><li>Add medications section.</li><li>Reminder notifications.</li><li>No download needed.</li><li>Privacy — Apple keeps secure.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pill organizer + app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$10 plastic weekly organizer.</li><li>Plus phone reminder.</li><li>Visual + audible cue.</li><li>Best of both worlds.</li><li>Sunday filling routine.</li><li>Easy to spot missed days.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Smart pill bottles</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>HERO dispenser ($30/mo).</li><li>Loads month of pills.</li><li>Auto-dispenses on schedule.</li><li>Family monitoring.</li><li>Higher tech, higher cost.</li><li>Worth it for many.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Add every prescription.</li><li>Set realistic times.</li><li>Loud alert sound.</li><li>Match meal patterns.</li><li>Adjust as needed.</li><li>Family help with setup.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Medisafe = senior superpower</h3><p className="text-sm text-muted-foreground">Free Medisafe app + $10 weekly pill organizer = bulletproof medication routine. Visual organizer + phone alerts catch every dose. Family member can monitor remotely. Most senior-life-changing health combo. Adherence improves dramatically — and so does health.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
