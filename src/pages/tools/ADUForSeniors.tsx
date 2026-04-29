import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function ADUForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="ADU + Granny Flat for Seniors | TekSure" description="Build an in-law unit. Plain-English ADU guide for senior families." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">ADU + Granny Flat</h1>
          <p className="text-lg text-muted-foreground">Live near family — own space.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is ADU</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Accessory Dwelling Unit (mother-in-law unit, granny flat).</li>
              <li>Smaller home on same property as main.</li>
              <li>Detached or attached.</li>
              <li>Senior near family but independent.</li>
              <li>Many cities loosened rules 2020+.</li>
              <li>Solves senior + young family housing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost + types</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Garage conversion</strong> — $50K-150K.</li>
              <li><strong>Basement conversion</strong> — $30K-100K.</li>
              <li><strong>Detached new build</strong> — $200K-400K.</li>
              <li><strong>Attached addition</strong> — $100K-300K.</li>
              <li><strong>Prefab/modular</strong> — $150K-300K, faster.</li>
              <li>Adds value to property.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly design</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Single-level (no stairs).</li>
              <li>Wide doorways (32+ inches).</li>
              <li>Walk-in shower with grab bars.</li>
              <li>Lever door handles.</li>
              <li>Good lighting throughout.</li>
              <li>Private entrance.</li>
              <li>Small kitchen.</li>
              <li>Universal design principles.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Family arrangement</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Discuss boundaries clearly.</li>
              <li>Schedule shared meals.</li>
              <li>Privacy expectations.</li>
              <li>Help with grandkids vs babysitter expectations.</li>
              <li>Financial arrangement (rent? help mortgage?).</li>
              <li>Talk about future (declining health).</li>
              <li>Consider family lawyer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Build process</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Check local zoning (some still restrict).</li>
              <li>Architect / designer.</li>
              <li>Permits — can take months.</li>
              <li>Contractor (3 quotes).</li>
              <li>Construction 6-12 months.</li>
              <li>Inspections.</li>
              <li>Move in!</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Worth it?</h3>
            <p className="text-sm text-muted-foreground">If: family near, want to age in place near loved ones, can afford ($150K+). Adds property value 30-50%. Less expensive than care facility long-term. Some seniors retire to ADU + rent main house. Family proximity = wellbeing boost.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
