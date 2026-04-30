import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';

export default function AppleCalendarTipsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Calendar Tips for Seniors | TekSure" description="Master iPhone Calendar app. Senior scheduling guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CalendarDays className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Calendar Tips</h1>
          <p className="text-lg text-muted-foreground">Master iPhone Calendar.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice add</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Hey Siri, add doctor appointment Tuesday 2pm.&quot;</li><li>Senior hands-free.</li><li>Auto-creates event.</li><li>Free.</li><li>Most senior easy.</li><li>Reminders too.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family calendar</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple Family Sharing.</li><li>Shared family calendar.</li><li>Senior sees family events.</li><li>Free.</li><li>Birthdays + appointments.</li><li>5-min setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Birthdays auto</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Add to Contacts.</li><li>Birthdays calendar shows.</li><li>Senior never forgets.</li><li>Send card on time.</li><li>Free.</li><li>Auto-recurring.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Reminders + alerts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Set 1 hour before.</li><li>And day before.</li><li>Senior memory help.</li><li>Travel time too.</li><li>Free customize.</li><li>Multiple alerts.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Color-code</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Doctor appointments red.</li><li>Family blue.</li><li>Social green.</li><li>Senior visual.</li><li>Multiple calendars.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Print monthly</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Mac — print month.</li><li>iCloud.com calendar.</li><li>Senior physical backup.</li><li>Wall paper version.</li><li>Free.</li><li>Worth printing.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Voice + family share = senior calendar</h3><p className="text-sm text-muted-foreground">&quot;Hey Siri add doctor Tuesday 2pm&quot; voice add + family shared calendar = senior never miss appointments. Auto-birthdays from Contacts. Multiple reminders day-before + hour-before. Color-code categories. Free + senior-friendly. Most under-used iPhone calendar.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
