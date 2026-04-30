import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Package } from 'lucide-react';

export default function FurnitureAssemblyHelp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Furniture Assembly Help | TekSure" description="IKEA, Wayfair, Amazon furniture assembly. Plain-English picks for hire-someone services and tips for DIY." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Package className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Furniture Assembly Help</h1>
          <p className="text-lg text-muted-foreground">IKEA shouldn&apos;t cause divorce.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pay someone to assemble</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>TaskRabbit</strong> — $50-100 typical. IKEA-certified taskers in cities. Fast.</li>
              <li><strong>Handy.com</strong> — $40-80. Pre-vetted assemblers.</li>
              <li><strong>IKEA in-store</strong> — IKEA partners with TaskRabbit at checkout.</li>
              <li><strong>Wayfair</strong> — assembly add-on at checkout via Handy.</li>
              <li><strong>Amazon assembly</strong> — checkout add-on for many items.</li>
              <li><strong>Local handyman</strong> — call Nextdoor recommendations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY tips</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Read ALL instructions BEFORE opening parts bag.</li>
              <li>Lay out all parts. Match to inventory list.</li>
              <li>Don&apos;t fully tighten until ALL parts are in place.</li>
              <li>Power drill speeds it up 3x. Use clutch on low torque to avoid stripping.</li>
              <li>Allen wrench cramping hand? Buy a $10 hex bit set for power drill.</li>
              <li>Read step number 4 ahead of time — usually the trick step.</li>
              <li>Have a partner for big items (sofas, beds, tall shelves).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When things go wrong</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Missing part — every brand has free replacement service. IKEA app, Wayfair chat.</li>
              <li>Stripped screw hole — wood toothpicks + glue, then re-screw.</li>
              <li>Part on backwards — STOP, look at picture twice. Most "wrong" parts are upside down.</li>
              <li>Stuck dowel — tap with rubber mallet (or wrap hammer with cloth).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">YouTube saves the day</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search "[exact item name] assembly" on YouTube.</li>
              <li>Most popular IKEA/Wayfair items have walk-through videos.</li>
              <li>Pause + rewind — way easier than paper instructions.</li>
              <li>iPad propped up beats squinting at tiny print.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Pre-assembled options</h3>
            <p className="text-sm text-muted-foreground">Burrow, Joybird, Floyd, Sabai sell premium furniture that assembles in 5-10 min with zero tools. More expensive than IKEA but ZERO assembly nightmare. Worth it for big pieces (sofas, beds) at any age — especially 60+.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
