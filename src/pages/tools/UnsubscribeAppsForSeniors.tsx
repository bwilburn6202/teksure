import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MailX } from 'lucide-react';

export default function UnsubscribeAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Unsubscribe Apps for Senior Inbox | TekSure" description="Mass unsubscribe newsletter floods. Senior inbox cleanup." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MailX className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Unsubscribe Apps</h1>
          <p className="text-lg text-muted-foreground">Mass clean inbox.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Unroll.me</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free service.</li><li>Lists subscriptions.</li><li>Mass unsubscribe.</li><li>Senior bulk action.</li><li>Or roll up daily digest.</li><li>Email cleanup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Privacy concern</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Reads your email.</li><li>Don&apos;t use if sensitive.</li><li>Senior caution.</li><li>Manual unsubscribe safer.</li><li>Read terms.</li><li>Trade-off.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Manual</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Each email — find unsubscribe.</li><li>Click link.</li><li>Confirm.</li><li>Senior takes time.</li><li>Privacy preserved.</li><li>Steady progress.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Spam folder</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Never click anything spam.</li><li>Don&apos;t unsubscribe — verifies email.</li><li>Just delete.</li><li>Senior caution.</li><li>Block sender.</li><li>Mark as spam.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SaneBox</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$7/month.</li><li>AI sorts important.</li><li>Senior helper.</li><li>Less spam.</li><li>Privacy friendly.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>15 min daily clean.</li><li>Unsubscribe one each.</li><li>Block annoying senders.</li><li>Senior steady win.</li><li>Don&apos;t batch unsubscribe.</li><li>Each one matters.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">15-min daily inbox = senior calm</h3><p className="text-sm text-muted-foreground">Senior inboxes drown in newsletters. Manual unsubscribe 5/day for month = clean inbox. Avoid Unroll.me privacy concerns. Or $7/mo SaneBox AI sorts. Most senior peace upgrade. Spend 15 min daily for a month.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
