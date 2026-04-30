import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CloudSnow } from 'lucide-react';

export default function IceMeltSidewalkSafety() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ice Melt + Winter Sidewalk Safety | TekSure" description="Best ice melt + winter walking safety for seniors. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CloudSnow className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ice + Sidewalk Safety</h1>
          <p className="text-lg text-muted-foreground">Slip = broken hip. Prevent it.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best ice melts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Calcium chloride</strong> — works to -25°F. Fast. Pet-friendly options.</li>
              <li><strong>Calcium magnesium acetate (CMA)</strong> — safest for plants + concrete.</li>
              <li><strong>Sand</strong> — adds traction (doesn&apos;t melt).</li>
              <li><strong>Avoid rock salt</strong> — only works to 15°F + damages concrete + harms pets.</li>
              <li><strong>Safe Paw</strong> — pet-safe, plant-safe, $20.</li>
              <li>Apply BEFORE snow — prevents ice bonding.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior winter shoes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Yaktrax / Stabilicers</strong> — slip-on cleats. $25-40.</li>
              <li><strong>ICEtrekkers</strong> — better grip on ice.</li>
              <li><strong>Sorel Caribou</strong> — warm + grippy boots.</li>
              <li><strong>Merrell Thermo Chill</strong> — waterproof + non-slip.</li>
              <li>Take off cleats indoors — slippery on tile.</li>
              <li>Test shoes for grip before winter outings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Walking safely on ice</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Penguin walk — short steps, weight forward.</li>
              <li>Hands OUT of pockets for balance.</li>
              <li>Walking stick / cane with rubber tip + ice tip.</li>
              <li>Walk slow. No shortcuts.</li>
              <li>Stay on cleared paths.</li>
              <li>Wait for someone to walk with.</li>
              <li>Get groceries delivered on icy days.</li>
              <li>Don&apos;t trust &quot;just dusting&quot; — black ice deadly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hire snow help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local landscapers offer winter contracts.</li>
              <li><strong>Plowz &amp; Mowz</strong> app — Uber for snow plowing.</li>
              <li>Neighbor teens — $20-40/storm.</li>
              <li>Some Area Agencies on Aging offer FREE snow removal.</li>
              <li>HOA/condo — may include.</li>
              <li>Don&apos;t shovel — heart attacks spike during winter shoveling among seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you must shovel</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Push, don&apos;t lift, when possible.</li>
              <li>Lift with legs. Take small loads.</li>
              <li>Stretch first.</li>
              <li>Shovel often during storm — easier than thick later.</li>
              <li>Stop if chest pain, dizzy, short of breath.</li>
              <li>Drink water — yes, in cold.</li>
              <li>Tell someone you&apos;re shoveling.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Driveway de-icing tools</h3>
            <p className="text-sm text-muted-foreground"><strong>Hot Tubz Snow Joe heated mat</strong> — under welcome mat, melts before stepping. <strong>HeatTrak portable mats</strong> — for steps + walkways. <strong>Snowblower</strong> with electric start — see /tools/snowblower-pick. Driveway heating system $5-10K but install once + lasts decades.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
