import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bike } from 'lucide-react';

export default function SeniorCyclingTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Cycling Tips | TekSure" description="E-bikes + safety + best bikes for senior cycling. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bike className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Cycling</h1>
          <p className="text-lg text-muted-foreground">Joint-friendly cardio. E-bikes opened doors.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">E-bikes change everything</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pedal-assist makes hills + headwind easy.</li>
              <li>Still good exercise (you pedal).</li>
              <li>Can ride 20-50 miles without exhaustion.</li>
              <li>Senior-friendly options.</li>
              <li>Many states allow on bike paths.</li>
              <li>Great for aging knees.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best senior bikes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Trek FX+ 2</strong> — $1,800 e-bike. Senior favorite.</li>
              <li><strong>Specialized Como SL</strong> — $3K, beautiful.</li>
              <li><strong>Aventon Soltera</strong> — $1,200 budget e-bike.</li>
              <li><strong>Step-through frame</strong> — easy mount/dismount.</li>
              <li><strong>Trike</strong> — 3-wheel, no balance worry. $300-1,500.</li>
              <li>Test ride 3-5 bikes before buying.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety essentials</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Helmet ALWAYS — concussions life-changing for seniors.</li>
              <li>Bright clothes / reflective vest.</li>
              <li>Front + rear lights (even daytime).</li>
              <li>Bike paths over roads when possible.</li>
              <li>No headphones — hear cars.</li>
              <li>Bike bell for warning pedestrians.</li>
              <li>Mirror on handlebars.</li>
              <li>Don&apos;t ride in rain — wet brakes dangerous.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior fit + comfort</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Upright handlebars (not racing).</li>
              <li>Comfortable wider seat.</li>
              <li>Padded gloves.</li>
              <li>Padded shorts for longer rides.</li>
              <li>Step-through frame (no leg-over).</li>
              <li>Lower seat height — feet flat at stops.</li>
              <li>Bike fit at shop = essential.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to ride</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Rail-trails</strong> — flat + safe. Search &quot;rails to trails&quot; near you.</li>
              <li><strong>Park bike paths</strong> — slow + scenic.</li>
              <li><strong>Senior cycling clubs</strong> — Meetup.com, AARP.</li>
              <li><strong>Bike tours</strong> — VBT, Backroads — many senior-specific.</li>
              <li>Avoid highways + busy streets.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Get back on the bike</h3>
            <p className="text-sm text-muted-foreground">Haven&apos;t ridden since youth? E-bike removes intimidation. Local shop does demos. Empty parking lot first practice. 70+ year olds ride centuries (100 miles). Many seniors most fit they&apos;ve been at any age. Cycling adds years to life.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
