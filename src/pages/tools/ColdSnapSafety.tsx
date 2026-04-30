import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Snowflake } from 'lucide-react';

export default function ColdSnapSafety() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cold Weather Safety for Seniors | TekSure" description="Hypothermia + frozen pipes. Plain-English winter senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Snowflake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cold Snap Safety</h1>
          <p className="text-lg text-muted-foreground">Senior bodies struggle with cold too.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hypothermia in seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Can happen INDOORS too (under 65°F).</li>
              <li>Signs: shivering, cold, confusion, drowsiness.</li>
              <li>Move to warm space + warm gradually.</li>
              <li>Severe = call 911.</li>
              <li>Don&apos;t set thermostat below 65°F.</li>
              <li>Higher if frail.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stay warm at home</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Set 68°F minimum (warmer if feeling cold).</li>
              <li>Wear layers indoors.</li>
              <li>Use space heater (UL listed only) carefully.</li>
              <li>Heated blanket overnight.</li>
              <li>Hot drinks frequently.</li>
              <li>Move around to generate heat.</li>
              <li>Eat warm food.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Frozen pipes prevention</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Drip faucets when below 20°F.</li>
              <li>Open cabinets under sinks.</li>
              <li>Insulate exposed pipes.</li>
              <li>Don&apos;t set heat below 60°F.</li>
              <li>If frozen — turn off water main, call plumber.</li>
              <li>Don&apos;t use blowtorch — fire risk.</li>
              <li>Hair dryer if must thaw.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Outside safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Layer clothing.</li>
              <li>Hat (lose 10% body heat through head).</li>
              <li>Cover ears, nose, fingers.</li>
              <li>Waterproof boots.</li>
              <li>Ice cleats over shoes.</li>
              <li>Don&apos;t shovel — heart attack risk.</li>
              <li>Plowing service worth $30/storm.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Power outages</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Have flashlights + batteries ready.</li>
              <li>Charge phone + power banks.</li>
              <li>Move to one room — close doors.</li>
              <li>Use blankets, not appliances for heat.</li>
              <li>NEVER use stove for heat (CO).</li>
              <li>NEVER bring grill / generator inside.</li>
              <li>Cooling center / warming center 211.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior energy help</h3>
            <p className="text-sm text-muted-foreground">LIHEAP pays heat bills. Don&apos;t turn off heat to save money — die from cold. Apply early winter. Salvation Army assistance. State programs. Don&apos;t suffer — help available.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
