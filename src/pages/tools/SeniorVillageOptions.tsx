import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorVillageOptions() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Villages — Stay Home Together | TekSure" description="Village to Village Network. Plain-English explainer of senior villages — neighborhoods that help each other age in place." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Villages</h1>
          <p className="text-lg text-muted-foreground">Age in place — together with neighbors.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What a Village is</h2>
            <p className="text-sm">Self-organized member-led neighborhood network. Started in Boston 2002. 350+ villages across US. Members 60+ pay annual dues ($300-800/yr). Get help from neighbors + vetted vendors. Stay in own home longer.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you get</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Volunteer help</strong> — rides, light yard, computer help, friendly visits.</li>
              <li><strong>Vetted vendors</strong> — handyman, plumber, electrician at fair prices.</li>
              <li><strong>Social events</strong> — book clubs, walking groups, classes.</li>
              <li><strong>Concierge service</strong> — call village office, get help.</li>
              <li><strong>Health programs</strong> — exercise classes, falls prevention.</li>
              <li><strong>Built-in community</strong> — fights isolation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find one near you</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>vtvnetwork.org</strong> — Village to Village Network official directory.</li>
              <li>Search by zip + state.</li>
              <li>If no village near you — start one (network helps with setup).</li>
              <li>Most are 501(c)(3) non-profits.</li>
              <li>Income-based scholarships often available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why villages work</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cheaper than assisted living ($5K+/mo) by FAR.</li>
              <li>Stay in beloved home + community.</li>
              <li>Members give AND receive help.</li>
              <li>Age-in-place studies show 30% less risk of nursing home placement.</li>
              <li>Reduces social isolation = key health factor.</li>
              <li>Caregivers get respite + community.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">First step</h3>
            <p className="text-sm text-muted-foreground">Visit a village event before joining. Most welcome guests at one or two open events. Meet members. See vibe. Then decide. $300/yr is small — but commitment to community is meaningful.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
