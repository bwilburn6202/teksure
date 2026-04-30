import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bone } from 'lucide-react';

export default function ArthritisManagement() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Arthritis Management for Seniors | TekSure" description="Reduce arthritis pain. Plain-English guide for seniors — exercises, meds, gadgets, surgery." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Arthritis Management</h1>
          <p className="text-lg text-muted-foreground">Stay active. Pain-free movement is possible.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Exercise — counterintuitive but #1</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Movement REDUCES arthritis pain.</li>
              <li>Inactivity worsens stiffness.</li>
              <li>Walking 30 min/day = proven help.</li>
              <li>Water aerobics — joint-friendly.</li>
              <li>Tai Chi — proven 25%+ pain reduction.</li>
              <li>Strength training preserves muscle around joints.</li>
              <li>YMCA Silver Sneakers (free with most Medicare Advantage).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medications</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Acetaminophen</strong> (Tylenol) — first try. Liver-safe under 3g/day.</li>
              <li><strong>NSAIDs</strong> (Advil, Aleve) — work better but stomach + kidney risk.</li>
              <li><strong>Topical NSAIDs</strong> (Voltaren gel) — fewer side effects.</li>
              <li><strong>Capsaicin cream</strong> — natural pain relief.</li>
              <li><strong>Cortisone injections</strong> — every 3-4 months.</li>
              <li><strong>Hyaluronic acid</strong> — knee injections.</li>
              <li><strong>DMARDs</strong> — for rheumatoid arthritis.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly gadgets</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Jar opener</strong> — see /tools/grip-strength-tools.</li>
              <li><strong>OXO ergonomic kitchen tools</strong> — easier grip.</li>
              <li><strong>Long-handled brush + sponges</strong> — less bending.</li>
              <li><strong>Sock aid</strong> — put on socks without bending.</li>
              <li><strong>Reacher tool</strong> — pickup without stooping.</li>
              <li><strong>Velcro shoes</strong> — no laces.</li>
              <li><strong>Built-up handle utensils</strong> — easier to grip.</li>
              <li><strong>Heating pad / paraffin wax</strong> — hand pain relief.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Diet</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Anti-inflammatory eating (see /tools/anti-inflammatory-eating).</li>
              <li>Lose 5-10 lbs = 4x less pressure on knees.</li>
              <li>Turmeric — some studies show benefit.</li>
              <li>Omega-3 (fish oil 1-2g/day).</li>
              <li>Glucosamine + chondroitin — mixed evidence.</li>
              <li>Limit processed foods + sugar.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When surgery makes sense</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Knee/hip replacement — 95%+ success.</li>
              <li>Most successful surgeries in modern medicine.</li>
              <li>Try conservative options first.</li>
              <li>Ortho consult when daily pain limits you.</li>
              <li>Walking, sleeping, dressing affected.</li>
              <li>Recovery 6-12 weeks. Enables 15-20+ more active years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help</h3>
            <p className="text-sm text-muted-foreground"><strong>Arthritis.org</strong> (Arthritis Foundation) — free magazine, exercise videos, support groups. <strong>CDC Walk With Ease</strong> — free 6-week program. Most YMCAs offer free Tai Chi for arthritis. Talk to physical therapist — Medicare covers with referral.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
