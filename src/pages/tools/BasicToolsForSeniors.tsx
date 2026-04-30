import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

export default function BasicToolsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Basic Tools for Seniors | TekSure" description="Essential tool kit for senior homes. Plain-English picks for senior DIY." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Basic Tools</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t need much. Get good ones.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Essential 10 tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hammer (16oz claw).</li>
              <li>Phillips + flathead screwdriver.</li>
              <li>Adjustable wrench.</li>
              <li>Pliers (regular + needle-nose).</li>
              <li>Tape measure (25 ft).</li>
              <li>Level (small).</li>
              <li>Box cutter.</li>
              <li>Cordless drill.</li>
              <li>Stud finder.</li>
              <li>Flashlight + headlamp.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly drill</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Black+Decker 12V</strong> — light. $50.</li>
              <li><strong>Bosch 12V</strong> — better quality. $100.</li>
              <li><strong>Avoid 18V/20V</strong> — too heavy.</li>
              <li>Smaller chuck = lighter.</li>
              <li>Trigger easy to squeeze.</li>
              <li>Mainly for hanging pictures + light tasks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart upgrades</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Magnetic tip screwdriver</strong> — easier with shaky hands.</li>
              <li><strong>Talking tape measure</strong> — speaks dimensions.</li>
              <li><strong>Telescoping pickup tool</strong> — drop screws? Easy retrieval.</li>
              <li><strong>Snake light</strong> — bend into tight spaces.</li>
              <li><strong>Levels with bubbles</strong> larger easier read.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to buy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Costco</strong> — DeWalt sets reasonable.</li>
              <li><strong>Home Depot, Lowes</strong> — wide selection.</li>
              <li><strong>Harbor Freight</strong> — cheap (good for occasional use).</li>
              <li><strong>Estate sales</strong> — great quality used.</li>
              <li>Senior tip: borrow from neighbors first to test.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to call handyman</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Anything above 6 feet.</li>
              <li>Electrical work.</li>
              <li>Plumbing major.</li>
              <li>Roof.</li>
              <li>Heavy lifting.</li>
              <li>Don&apos;t risk falls.</li>
              <li>$50-100/hr — worth it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior workshops</h3>
            <p className="text-sm text-muted-foreground">Many community colleges + Home Depots offer free DIY classes for beginners. Senior centers too. Don&apos;t learn alone — get hands-on instruction. Confidence comes with practice.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
