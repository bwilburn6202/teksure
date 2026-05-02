import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MailX } from 'lucide-react';

export default function EmailDeclutterForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Email Declutter for Seniors | TekSure" description="Inbox zero for seniors. Decluttering strategies." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MailX className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Email Declutter</h1>
          <p className="text-lg text-muted-foreground">Senior inbox zero.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Unsubscribe daily</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>5 per day.</li><li>30 days = inbox transformed.</li><li>Senior steady wins.</li><li>Bottom of email.</li><li>Free.</li><li>Patience pays.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Folders + filters</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Auto-sort to folders.</li><li>Family + bills + newsletters.</li><li>Senior find what matters.</li><li>Skip inbox newsletters.</li><li>Free Gmail/Outlook.</li><li>Game changer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Two minute rule</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Reply if &lt;2 min.</li><li>Otherwise schedule.</li><li>Senior doesn&apos;t pile.</li><li>Habit.</li><li>Free.</li><li>Process inbox.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Archive instead delete</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Searchable later.</li><li>Senior keeps history.</li><li>Out of inbox.</li><li>Free.</li><li>Best of both.</li><li>Don&apos;t fear.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Schedule check</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>3x daily — morning, lunch, evening.</li><li>Senior less anxiety.</li><li>Don&apos;t live in email.</li><li>Notification off.</li><li>Pull don&apos;t push.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Multiple addresses</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Personal email — important.</li><li>Junk email — newsletters.</li><li>Senior cleaner system.</li><li>Free Gmail.</li><li>Stop newsletter floods.</li><li>Worth setup.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">5 unsubscribes daily = senior inbox transformed</h3><p className="text-sm text-muted-foreground">Senior 5 unsubscribes daily for 30 days = inbox transformed. Plus folders + filters auto-sort. 2-minute rule reply quick. Archive don&apos;t delete. 3x daily check schedule. Multiple addresses for newsletters. Free Gmail/Outlook tools. Worth habit.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
