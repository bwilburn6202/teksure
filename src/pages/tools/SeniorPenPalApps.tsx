import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

const APPS = [
  { name: 'Papergang (Letterly)', cost: 'FREE app', best: 'Pen pal matching by interest + age. Real handwritten letters via app.', good: 'Best matching.' },
  { name: 'Slowly', cost: 'FREE', best: 'Digital "letters" with delay (mimics mail). Match strangers by interest worldwide.', good: 'Best digital pen pal.' },
  { name: 'PostPals', cost: 'FREE', best: 'Send cheer letters to seriously ill children. Volunteer + meaningful.', good: 'Best for giving.' },
  { name: 'Soldiers&apos; Angels', cost: 'FREE', best: 'Adopt a deployed soldier — write letters, send care packages.', good: 'Best military.' },
  { name: 'Love for the Elderly', cost: 'FREE', best: 'Write letters to nursing home residents you don&apos;t know.', good: 'Best senior-to-senior.' },
];

export default function SeniorPenPalApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Pen Pal Apps + Programs | TekSure" description="Find a pen pal — analog letters or digital. Plain-English picks for connecting through letter writing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pen Pal Apps + Programs</h1>
          <p className="text-lg text-muted-foreground">Real letters. Real connection.</p>
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
            <h2 className="font-bold text-xl mb-3">Other connection programs for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Friendship Line (Institute on Aging)</strong> — 1-800-971-0016. Free 24/7 phone calls for seniors. Lonely? Just call.</li>
              <li><strong>Senior Companion (AmeriCorps)</strong> — get matched with a volunteer who visits weekly.</li>
              <li><strong>AARP Foundation Connect2Affect</strong> — phone calls + care packages.</li>
              <li><strong>SAGE LGBTQ Senior Hotline</strong> — 1-877-360-LGBT.</li>
              <li><strong>Eldera</strong> — virtual mentorship — seniors connect with kids worldwide.</li>
              <li><strong>Big &amp; Mini</strong> — intergenerational video chat.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why letter writing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Slows you down — opposite of texting.</li>
              <li>Better for memory + cognition than typing.</li>
              <li>Receiving real mail is a joy almost vanished.</li>
              <li>Pen pal kids grow up grateful for the connection.</li>
              <li>Cheaper than therapy. Different, but real.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Local visits beat all</h3>
            <p className="text-sm text-muted-foreground">If isolated — call your area Agency on Aging. Most counties have FREE "Friendly Visitor" programs. Volunteers visit weekly to chat. Or arrange your own with a local church / college student. Connection in person is irreplaceable.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
