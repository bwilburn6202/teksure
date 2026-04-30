import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function CalendlyForSeniorScheduling() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Calendly for Senior Scheduling | TekSure" description="Stop email tag for meetings. Senior Calendly guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calendar className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Calendly</h1>
          <p className="text-lg text-muted-foreground">Senior easy scheduling.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Send link to people.</li><li>They pick time.</li><li>Auto-calendar.</li><li>Senior no email tag.</li><li>Free version solid.</li><li>$10/mo paid.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When senior need</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Volunteer coordinator.</li><li>Family member visits.</li><li>Tutor sessions.</li><li>Senior hosting events.</li><li>Stop back-and-forth.</li><li>Worth using.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Calendly.com.</li><li>Free signup.</li><li>Connect Google/Apple Calendar.</li><li>Set availability.</li><li>Share link.</li><li>Senior 10 min.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free includes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>One event type.</li><li>Unlimited bookings.</li><li>Calendar integration.</li><li>Senior plenty.</li><li>Free always.</li><li>Worth using.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Privacy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Don&apos;t over-share.</li><li>Just available times.</li><li>Senior boundary.</li><li>Free + safe.</li><li>Cancel meetings allowed.</li><li>Senior comfort.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Alternatives</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Doodle Poll for groups.</li><li>When2Meet free.</li><li>Outlook scheduling.</li><li>Senior options.</li><li>Calendly easiest 1-on-1.</li><li>Free options exist.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Calendly = senior no email tag</h3><p className="text-sm text-muted-foreground">Free Calendly link sends to volunteer coordinator, family scheduling visits, tutoring sessions. No more &quot;does Tuesday work?&quot; email tag. They pick time, auto-calendar. Senior 10-min setup. Free. Most under-used senior scheduling tool.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
