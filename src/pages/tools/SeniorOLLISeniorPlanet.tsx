import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorOLLISeniorPlanet() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="OLLI & Senior Planet — TekSure" description="Online classes designed FOR seniors — OLLI lifelong learning, Senior Planet tech." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">OLLI &amp; Senior Planet</h1>
          <p className="text-lg text-muted-foreground">Classes designed FOR seniors.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">OLLI lifelong learning</h2><p>Osher Lifelong Learning Institutes at 125+ universities. Designed for ages 50+.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">OLLI cost</h2><p>$25-$300/year, varies by location. Unlimited classes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior Planet</h2><p>Free. Online tech and life skills classes for seniors. seniorplanet.org.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cyber-Seniors</h2><p>Free 1-on-1 tech tutoring with high schoolers. cyberseniors.org.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Topics</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Smartphone basics</li><li>Memoir writing</li><li>Yoga and Tai Chi</li><li>Financial planning</li><li>Birding</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Local libraries</h2><p>Most public libraries offer free senior classes too. Call yours and ask.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: OLLI classes are taught by retired professors — they love teaching adult learners.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
