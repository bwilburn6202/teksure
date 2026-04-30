import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hand } from 'lucide-react';

export default function NailCareForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Nail Care for Seniors | TekSure" description="Mature nail care. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hand className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Nail Care</h1>
          <p className="text-lg text-muted-foreground">Hands + feet. Health + beauty.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mature nail changes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Slower growth.</li>
              <li>Brittleness common.</li>
              <li>Yellowing.</li>
              <li>Ridges develop.</li>
              <li>Fungus risk increases.</li>
              <li>Less elasticity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily care</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cuticle oil daily.</li>
              <li>Hand cream after washing.</li>
              <li>Wear gloves for dishes.</li>
              <li>Don&apos;t bite or pick.</li>
              <li>Cut nails straight, not curved.</li>
              <li>File rough edges weekly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Foot care critical</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Trim straight to prevent ingrown.</li>
              <li>File, don&apos;t cut, calluses.</li>
              <li>Diabetic = podiatrist only.</li>
              <li>Check for fungus monthly.</li>
              <li>Cotton socks change daily.</li>
              <li>Foot soak weekly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fungus prevention</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Dry feet thoroughly.</li>
              <li>Antifungal powder in shoes.</li>
              <li>Don&apos;t share clippers.</li>
              <li>Disinfect tools weekly.</li>
              <li>Yellow / thick = treat early.</li>
              <li>OTC: Lamisil, terbinafine.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Easy-grip clippers</strong> ($15).</li>
              <li><strong>Magnifying mirror</strong>.</li>
              <li><strong>Long-handle file</strong> for feet.</li>
              <li><strong>Cuticle pusher</strong> (silicone gentle).</li>
              <li><strong>Antifungal cream</strong>.</li>
              <li><strong>Pumice stone</strong> for callus.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Salon visits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Manicure $20-30.</li>
              <li>Pedicure $35-50.</li>
              <li>Bring own tools (hygiene).</li>
              <li>Verify autoclave sterilization.</li>
              <li>Senior discount common.</li>
              <li>Mobile pedicurist comes home — $80.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When to see podiatrist</h3>
            <p className="text-sm text-muted-foreground">Diabetic — yearly podiatrist. Bunions painful — surgery option. Ingrown nail recurrent. Yellow / thick fungus. Hammer toes painful. Diabetic shoes Medicare-covered. Podiatrist at-home visits available some areas. Foot health = mobility = independence. Senior priority.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
