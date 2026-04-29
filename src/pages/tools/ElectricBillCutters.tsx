import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function ElectricBillCutters() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cut Your Electric Bill — Plain-English Tips | TekSure" description="Real ways to lower a $150+ electric bill. Smart plugs, time-of-use rates, LED swaps, and the appliances that quietly cost the most." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cut Your Electric Bill</h1>
          <p className="text-lg text-muted-foreground">Save $30-100/month — no big upfront cost.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The big watt hogs (in most homes)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Heating &amp; cooling</strong> — 40-50% of bill. Set 2 degrees higher in summer, 2 lower in winter.</li>
              <li><strong>Water heater</strong> — 14%. Drop tank temp from 140 to 120°F. Saves $40/year.</li>
              <li><strong>Old fridge</strong> — pre-2001 fridges cost $150+/year more than new ones.</li>
              <li><strong>Dryer</strong> — air-dry one load/week, save $70/year.</li>
              <li><strong>Always-on devices</strong> (cable box, gaming consoles, old desktops) — $100-200/year combined.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free / cheap fixes (this week)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Swap remaining bulbs to LED — $2-4/bulb. Pays back in 6 months.</li>
              <li>Wash clothes in cold water. Saves $60/year, no quality loss.</li>
              <li>Unplug the second fridge in the garage. Or replace with chest freezer (1/3 the energy).</li>
              <li>Lower water heater to 120°F (dial on the front of tank).</li>
              <li>Clean dryer vent — clogged vents drive runtime up 30%.</li>
              <li>Add smart plugs ($10-15) on cable box, TV, gaming consoles. Auto-off overnight.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Time-of-use rates</h2>
            <p className="text-sm">Many utilities now offer time-of-use plans. Power costs less at night and on weekends. If you can run dishwasher/laundry off-peak, you save 15-30%.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Call your utility OR check their website for "time-of-use" or "TOU" plan.</li>
              <li>Best for retired people who can pick when to run appliances.</li>
              <li>Some plans have "supercheap" overnight rates — 2-7 AM.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free home energy audit</h2>
            <p className="text-sm">Most utility companies offer FREE home energy audits. They send a tech who finds drafts, checks insulation, recommends fixes. Often comes with free LED bulbs, smart thermostat rebates, and weatherstripping.</p>
            <p className="text-sm mt-2">Search "[your utility name] free energy audit" or call customer service.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Income-based help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>LIHEAP</strong> — federal Low Income Home Energy Assistance. Pays $300-1,000+/year.</li>
              <li><strong>Weatherization Assistance Program</strong> — free insulation and air sealing.</li>
              <li><strong>Senior discounts</strong> — many utilities offer 10-30% off for seniors. Ask.</li>
              <li>Apply at <strong>energyhelp.us</strong> or call 211.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">The $5 audit</h3>
            <p className="text-sm text-muted-foreground">Buy a Kill A Watt meter ($25 on Amazon — or borrow from your local library). Plug appliances into it. See exactly what each one costs per month. Most people are shocked at the cable box and old fridge.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
