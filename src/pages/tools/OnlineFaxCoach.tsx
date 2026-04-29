import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Send } from 'lucide-react';

const SERVICES = [
  { name: 'iFax', cost: 'Pay-per-use $5-10 per fax', best: 'Send a few faxes a year? Pay only when needed. iPhone and Android.', good: 'Best for occasional use.' },
  { name: 'eFax', cost: '$17-25/mo', best: 'Most popular. Send/receive unlimited. Get a real fax number.', good: 'Best for regular fax use.' },
  { name: 'MyFax', cost: '$10-20/mo', best: 'Cheaper alternative to eFax.', good: 'Solid mid-range.' },
  { name: 'Fax.Plus', cost: 'Free 10 pages/mo + paid', best: 'Generous free tier for first-timers.', good: 'Best free tier.' },
  { name: 'CocoFax / Fax Burner', cost: '$1-5 per fax', best: 'Pay-per-fax, no subscription.', good: 'Cheapest one-off.' },
  { name: 'FedEx Office / UPS Store', cost: '$1-2/page in person', best: 'Walk in with paper, fax it for $1-2/page. No subscription.', good: 'Best if no online setup.' },
];

export default function OnlineFaxCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Fax Coach — Send a Fax Without a Fax Machine | TekSure" description="Doctor still wants you to fax something? Plain-English guide to online fax services — pay-per-use, subscriptions, and free options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Send className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Fax Coach</h1>
          <p className="text-lg text-muted-foreground">Yes, doctors still want faxes. Here\'s how — without a machine.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why doctors still fax</h2>
            <p className="text-sm">HIPAA privacy rules. Faxes are considered "secure" while emails aren\'t (without specific encryption). Healthcare and legal offices are stuck with fax for years to come. You can fax FROM your phone or computer without owning a fax machine.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {SERVICES.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm mb-1">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How online fax works</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Sign up for a service. Get an online fax number.</li>
              <li>To SEND: take a photo or PDF of the document. Email it (with the recipient\'s fax number in the to: field) OR upload through their app.</li>
              <li>Service converts to fax format and dials the recipient\'s machine.</li>
              <li>To RECEIVE: anyone faxing your number gets it sent to your email as PDF.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you\'ll likely fax</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Medical records release forms.</li>
              <li>Insurance claims.</li>
              <li>Doctor\'s office paperwork.</li>
              <li>Legal forms.</li>
              <li>Real estate documents (sometimes).</li>
              <li>Government forms.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip — sometimes a portal works instead</h3>
            <p className="text-sm text-muted-foreground">Before paying for a fax service, ask the doctor\'s office: "Can I upload through your patient portal instead?" Most offices accept secure messages through MyChart or similar — no fax needed.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
