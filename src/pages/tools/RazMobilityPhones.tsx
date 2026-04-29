import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

const PHONES = [
  { name: 'RAZ Memory Cell Phone', cost: '$210 + $40/mo', best: 'Smart phone simplified to ONE screen of contacts. For dementia.', good: 'Best for memory loss.' },
  { name: 'Jitterbug Smart4', cost: '$150 + $20/mo', best: 'Big buttons + Lively&apos;s urgent response. Senior favorite.', good: 'Best mainstream simple.' },
  { name: 'Jitterbug Flip2', cost: '$100 + $20/mo', best: 'Flip phone style. Big buttons, no apps.', good: 'Best basic phone.' },
  { name: 'Lively Mobile Plus', cost: '$50 + $25/mo', best: 'Simple medical alert with calling.', good: 'Best alert + phone combo.' },
  { name: 'iPhone with Assistive Access', cost: '$250-1,000 phone', best: 'iPhone simplified mode. Get any iPhone, simplify in settings.', good: 'Best iPhone option.' },
];

export default function RazMobilityPhones() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Phones Compared | TekSure" description="RAZ Memory, Jitterbug, Lively explained. Plain-English senior phone picker." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Simple Phones for Seniors</h1>
          <p className="text-lg text-muted-foreground">Right phone for right level of need.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PHONES.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">RAZ Memory Phone unique</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Designed for dementia patients.</li>
              <li>ONE screen — only photos + names of contacts.</li>
              <li>NO menus, no apps, no settings.</li>
              <li>Family controls remotely via app.</li>
              <li>Built-in GPS tracking.</li>
              <li>Call blocking — only allowed numbers can call.</li>
              <li>Game-changer for dementia families.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Jitterbug + Lively</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Now owned by Best Buy.</li>
              <li>Big buttons, large text.</li>
              <li>Urgent Response button (5Star) — call response team 24/7.</li>
              <li>Tech support phone-friendly.</li>
              <li>Health + safety packages add features.</li>
              <li>Cellular service through GreatCall.</li>
              <li>Senior favorite for 20+ years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Most seniors don&apos;t need special phone</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone has Assistive Access — simplifies to 5 apps.</li>
              <li>Android — Big Easy Mode on Samsung phones.</li>
              <li>Adjust text size large in settings.</li>
              <li>Adjust ringtone louder.</li>
              <li>Simple home screen with 6 large icons.</li>
              <li>Costs nothing extra.</li>
              <li>Phone can grow with senior&apos;s comfort.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to choose specialized</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cognitive decline / dementia.</li>
              <li>Refuses to use smartphone after multiple tries.</li>
              <li>Repeatedly falls for scam calls.</li>
              <li>Needs urgent response button.</li>
              <li>Family needs remote management.</li>
              <li>Otherwise — regular phone with senior settings is enough.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save on cellular</h3>
            <p className="text-sm text-muted-foreground"><strong>Consumer Cellular</strong> — best senior-priced ($20-30/mo). <strong>T-Mobile 55+ plan</strong> — $40/mo unlimited 2 lines. <strong>Mint Mobile</strong> — $15/mo if buy yearly. <strong>US Mobile</strong> — $10-25/mo. Most seniors overpay $30-50/mo unnecessarily.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
