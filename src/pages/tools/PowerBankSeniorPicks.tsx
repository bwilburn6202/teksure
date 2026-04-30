import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BatteryCharging } from 'lucide-react';

export default function PowerBankSeniorPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Best Power Banks for Seniors | TekSure" description="Portable phone chargers for seniors. Top picks for travel, emergencies, daily use." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BatteryCharging className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Power Banks</h1>
          <p className="text-lg text-muted-foreground">Never run out of phone battery again.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why every senior needs one</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phone dies = no calls, no maps, no emergency help.</li>
              <li>Charge phone anywhere — no outlet needed.</li>
              <li>Critical during power outages.</li>
              <li>Travel essential — flights, road trips.</li>
              <li>Doctor waiting rooms — keep entertained.</li>
              <li>$20–$60 — small price for peace of mind.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best small (pocket-size)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Anker PowerCore Slim 10000 — $25.</li>
              <li>Charges most phones 2 full times.</li>
              <li>Fits in purse or pocket.</li>
              <li>USB-C input + USB-A output.</li>
              <li>Reliable + popular brand.</li>
              <li>Good everyday backup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best medium (travel)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Anker PowerCore 20000 — $50.</li>
              <li>Charges phone 4–5 times.</li>
              <li>Charges 2 devices at once.</li>
              <li>Good for weeklong trips.</li>
              <li>Acceptable on airplane carry-on.</li>
              <li>Most popular travel power bank.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best large (emergency)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Jackery Explorer 240 — $200.</li>
              <li>Powers CPAP machine all night.</li>
              <li>Charges phones 20+ times.</li>
              <li>Runs lamps, fans, even small fridges briefly.</li>
              <li>Recharge from wall, car, or solar panel.</li>
              <li>Power outage essential.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Wireless charging banks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Anker MagGo (iPhone) — $50.</li>
              <li>Snaps magnetically to MagSafe iPhones.</li>
              <li>No cables to fumble with.</li>
              <li>Easier with arthritis.</li>
              <li>Works with iPhone 12 + newer.</li>
              <li>Slower than cable but very convenient.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Solar panel chargers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Anker Solix solar panel — $80.</li>
              <li>Recharge power banks from sun.</li>
              <li>Excellent for camping or extended outages.</li>
              <li>Folds for storage.</li>
              <li>Plug into bigger Jackery for emergency power.</li>
              <li>Slow charging but always available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Get the Anker 10000 + keep charged</h3>
            <p className="text-sm text-muted-foreground">For most seniors, the $25 Anker PowerCore Slim 10000 is the right starting point. Keep it charged in a kitchen drawer or purse. When you travel or face a power outage, you have backup. If you have CPAP or other medical devices, also invest in a Jackery for emergency backup. Combined cost: $250 = invaluable peace of mind.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
