import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export default function UtilityBillReduction() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Utility Bill Reduction Coach — Cut Electric, Gas, Water | TekSure" description="Apps, programs, and simple tricks that cut electric, gas, water, and internet bills. Plain-English steps with real numbers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lightbulb className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Utility Bill Reduction</h1>
          <p className="text-lg text-muted-foreground">Real ways to cut $50-200/month from your bills.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">⚡ Electric — biggest impact</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Time-of-Use plan</strong> — many utilities now charge less for off-peak power. Run dishwasher, laundry, and EV charger overnight. Saves 20-40%.</li>
              <li><strong>Smart thermostat (Nest, Ecobee)</strong> — $130 once, saves $100-180/year average. Pays for itself in a year.</li>
              <li><strong>LED bulbs</strong> — replace any remaining incandescent or CFL. Pays back in 6 months.</li>
              <li><strong>Unplug "vampire" loads</strong> — TV, microwave, computer power strips. They draw power even off. Use a smart power strip.</li>
              <li><strong>Heat pump tax credit</strong> — federal tax credit covers 30% (up to $2,000) of a heat pump install through 2032.</li>
              <li><strong>Senior discount programs</strong> — many utilities have them. Call and ask.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🔥 Gas / heating</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Drop the thermostat 2°</strong> at night — about 10% off heating bill.</li>
              <li><strong>Seal drafts</strong> — $20 in weather stripping pays back in one season.</li>
              <li><strong>Wash clothes in cold</strong> — the heat for hot wash is most of the cost.</li>
              <li><strong>Insulate the water heater</strong> with a $20 jacket from the hardware store.</li>
              <li><strong>Lower water heater to 120°F</strong> — most are too hot. Saves 5-10%.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">💧 Water</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Find leaks</strong> — toilets are sneaky. Drop food coloring in the tank. If it shows up in the bowl in 15 min without flushing, you have a leak. New flapper = $5.</li>
              <li><strong>Low-flow shower head</strong> — $25, saves up to 40% of shower water.</li>
              <li><strong>Smart sprinkler controller</strong> (Rachio, Rainbird) — $150, saves 20-30% on watering.</li>
              <li><strong>Senior water rate program</strong> — many cities offer reduced rates for seniors and low-income.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📡 Internet & cable</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Buy your own router/modem</strong> — saves $14-15/month rental fee. Pays for itself in 6-12 months.</li>
              <li><strong>Call once a year</strong>: "I\'m getting a flyer from [competitor] for $X. Can you match?" — usually they will.</li>
              <li><strong>Drop cable for streaming</strong> — Pluto / Tubi / Roku Channel are free. (See Free Streaming Services.)</li>
              <li><strong>Antenna for local TV</strong> — $30 one-time. (See Antenna TV Setup.)</li>
              <li><strong>Internet Essentials / Lifeline</strong> — federal program for low-income households, $10-30/month.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📲 Apps that track and find savings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Your utility\'s own app</strong> — usually has usage charts and bill alerts. Free.</li>
              <li><strong>Sense Energy Monitor</strong> ($300, one-time) — clamps onto your home electric panel, shows what\'s using power. Worth it for the curious.</li>
              <li><strong>Rocket Money</strong> — finds and renegotiates bills. Free version often suggests cheaper rates.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior assistance programs</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>LIHEAP (Low Income Home Energy Assistance Program)</strong> — federal help with heating/cooling. Apply at your state\'s LIHEAP office.</li>
              <li><strong>Weatherization Assistance Program (WAP)</strong> — free home weatherization for low-income households.</li>
              <li><strong>State and utility hardship programs</strong> — call your utility and ask "Do you offer any assistance for seniors?"</li>
              <li><strong>SNAP recipients</strong> — often qualify for additional discounts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick win this month</h3>
            <p className="text-sm text-muted-foreground">Call your internet/cable company. Ask for a "loyal customer discount" or "promotional rate". Half the time, you save $10-30/month with one 10-minute call. Same with your home insurance.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
