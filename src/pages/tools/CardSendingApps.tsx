import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

const APPS = [
  { name: 'Postable', cost: '$2-3/card', best: 'Mail real cards from phone. Birthday lists + auto-mail option.', good: 'Best overall.' },
  { name: 'Touchnote / Postsnap', cost: '$3-5/postcard', best: 'Phone photo → postcard mailed for you. Quick, beautiful.', good: 'Best for travel postcards.' },
  { name: 'Felt', cost: '$5-10/card', best: 'Premium handwritten-feel digital cards. Beautiful + customizable.', good: 'Best premium.' },
  { name: 'Hallmark Card Studio', cost: '$30/yr', best: 'Make cards on phone, print at home OR mailed.', good: 'Best traditional.' },
  { name: 'Apple Mail Postcard / Photos', cost: 'FREE design + stamp', best: 'Use built-in apps to design + print from home.', good: 'Best free.' },
];

export default function CardSendingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Card Sending Apps for Seniors | TekSure" description="Postable, Touchnote, Felt. Plain-English picks for sending real birthday + holiday cards from phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Card Sending Apps</h1>
          <p className="text-lg text-muted-foreground">Real mail from your phone.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Postable system</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Add all family birthdays + addresses ONE time.</li>
              <li>App reminds you 7-10 days before each birthday.</li>
              <li>Pick card design.</li>
              <li>Type message OR auto-fill.</li>
              <li>App prints + mails. Arrives on time.</li>
              <li>"Set and forget" birthday cards forever.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free option — Apple Notes "card calendar"</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open Notes. Make folder "Birthdays".</li>
              <li>Each person: name, address, birthday.</li>
              <li>Set calendar reminder 10 days before.</li>
              <li>Buy + write + mail card yourself.</li>
              <li>Bulk-buy cards at Costco / Target — save vs gas station impulse buys.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Yearly cost reality</h3>
            <p className="text-sm text-muted-foreground">Postable + 30 birthdays/year = $90. Vs forgetting most + sending Hallmark same-day in panic = $150+ + stress. Auto-card system pays for itself in stress relief alone.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
