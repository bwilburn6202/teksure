import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Repeat } from 'lucide-react';

export default function RecurringTaskSetupForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Recurring Task Setup for Seniors | TekSure" description="Set + forget reminders for senior daily life." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Repeat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Recurring Tasks</h1>
          <p className="text-lg text-muted-foreground">Senior set + forget.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Daily medications</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Reminders app daily.</li><li>Same time each day.</li><li>Senior never forget.</li><li>Multiple alarms.</li><li>Free.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Weekly</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Trash day.</li><li>Pill organizer fill.</li><li>Vacuum.</li><li>Senior routine.</li><li>Free recurring.</li><li>Habit-builder.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Monthly</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bills due dates.</li><li>HVAC filter.</li><li>Smoke detector test.</li><li>Senior home maintenance.</li><li>Free.</li><li>Set once, never miss.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Quarterly</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>HVAC service.</li><li>Estimated taxes.</li><li>Credit reports.</li><li>Senior check.</li><li>Free.</li><li>Often forgotten.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Annual</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Birthdays.</li><li>Anniversaries.</li><li>Insurance renewals.</li><li>Doctor appointments.</li><li>Senior never forget.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup once</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>30 min Saturday.</li><li>Set all recurring.</li><li>Senior life automated.</li><li>Free Reminders + Calendar.</li><li>Family help.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">30-min setup = senior life automated</h3><p className="text-sm text-muted-foreground">30 minutes setting up all recurring reminders + calendar events = senior life automated forever. Daily meds, weekly trash, monthly bills, quarterly taxes, annual birthdays. Free Apple Reminders + Calendar. Adult kid helps once. Most under-set-up senior productivity.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
