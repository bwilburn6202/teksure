import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Truck } from 'lucide-react';

const SVCS = [
  { name: 'NASMM (find local)', cost: 'Hourly $40-100', best: 'National directory of senior move managers. nasmm.org.', good: 'Best directory.' },
  { name: 'Caring Transitions', cost: 'Project pricing', best: 'National franchise. Senior moves + estate sales.', good: 'Best national chain.' },
  { name: 'Smooth Transitions', cost: '$60-120/hr', best: 'Senior-focused. Multi-state.', good: 'Best mid-size.' },
  { name: 'Local move manager', cost: '$50-100/hr', best: 'Independent senior move specialists.', good: 'Best personal.' },
  { name: 'Bekins / Allied / Atlas', cost: 'Move-only', best: 'Major moving companies. AARP discount.', good: 'Best truck only.' },
];

export default function SeniorRelocationServices() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Relocation Services | TekSure" description="Senior move managers handle EVERYTHING. Plain-English guide to right-sizing services." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Truck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Relocation Services</h1>
          <p className="text-lg text-muted-foreground">They handle EVERYTHING. You just show up.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What senior move managers do</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plan space layout in new home.</li>
              <li>Help decide what to keep / sell / donate.</li>
              <li>Pack + label everything.</li>
              <li>Coordinate movers.</li>
              <li>Unpack + set up new home.</li>
              <li>Hang pictures + arrange furniture.</li>
              <li>Organize estate sale of leftover items.</li>
              <li>Donate / dispose of remaining items.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost expectations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>2-bedroom downsize: $3,000-8,000.</li>
              <li>4-bedroom downsize: $8,000-20,000+.</li>
              <li>Some senior living facilities offer free/discounted relocation.</li>
              <li>Get 2-3 quotes always.</li>
              <li>Some long-term care insurance may cover.</li>
              <li>Worth it if family is far / health limits / overwhelmed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vetting checklist</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NASMM-certified — gold standard.</li>
              <li>Insured + bonded.</li>
              <li>References from 3+ recent clients.</li>
              <li>Written contract with itemized pricing.</li>
              <li>Background-checked employees.</li>
              <li>Free in-home consultation.</li>
              <li>Reviews on Google + BBB.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">DIY downsizing path</h3>
            <p className="text-sm text-muted-foreground">If healthy + nearby family helps — DIY saves $$. Use /tools/downsize-checklist + /tools/garage-sale-seniors. Hire just movers ($1,500-3,000). Order 1-2 PODS containers. Take 4-6 weekends. Start 6+ months before move.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
