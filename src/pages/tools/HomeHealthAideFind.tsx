import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function HomeHealthAideFind() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Find a Home Health Aide | TekSure" description="Hire help at home. Plain-English picks for senior home health aides — agency vs private, costs, vetting." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Find Home Health Aide</h1>
          <p className="text-lg text-muted-foreground">Help at home. Many ways.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Levels of care</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Companion / homemaker</strong> — laundry, light cleaning, errands. $20-30/hr.</li>
              <li><strong>Personal care aide</strong> — bathing, dressing, mobility help. $25-35/hr.</li>
              <li><strong>Home health aide (HHA)</strong> — same + simple medical tasks (vitals, meds). $25-40/hr.</li>
              <li><strong>Certified nursing assistant (CNA)</strong> — more medical tasks. $30-45/hr.</li>
              <li><strong>Registered nurse (RN)</strong> — wound care, IV, complex meds. $80-120/hr.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Agency vs private hire</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Agency (Visiting Angels, Home Instead, BrightStar)</strong> — $30-45/hr. Background-checked. Backup if no-shows. Insured.</li>
              <li><strong>Private (Care.com, word of mouth)</strong> — $20-30/hr. You background-check + manage. Cheaper but more work.</li>
              <li><strong>Recommendation</strong> — agency for shorter-term post-surgery. Private for ongoing trusted relationship.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance coverage</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Medicare</strong> — covers home health aide ONLY if homebound + need skilled nursing/PT too. Up to 60 days per spell.</li>
              <li><strong>Medicare Advantage</strong> — sometimes covers companion care.</li>
              <li><strong>Medicaid</strong> — covers more. State-by-state varies.</li>
              <li><strong>VA</strong> — covers for vets.</li>
              <li><strong>Long-term care insurance</strong> — main reason people buy it.</li>
              <li>Most private-pay = out of pocket.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vet your aide</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>References — call 3.</li>
              <li>Background check (agency does, you must for private).</li>
              <li>Trial period — 1-2 weeks.</li>
              <li>Family member present first few visits.</li>
              <li>Lock up valuables / important papers.</li>
              <li>Document everything in writing — schedule, duties, pay.</li>
              <li>Camera (with consent) for peace of mind.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free / cheap respite + companion</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Faith in Action / Stephen Ministry</strong> — volunteer companions through churches.</li>
              <li><strong>Senior Companion (AmeriCorps)</strong> — federal volunteer program.</li>
              <li><strong>Friendly Visitor</strong> programs through AAA.</li>
              <li><strong>VA</strong> respite programs.</li>
              <li><strong>Adult day care</strong> — $40-100/day vs $200+ private home care.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Pay aide fairly</h3>
            <p className="text-sm text-muted-foreground">Best home health aides last years if treated well. $25/hr + flexibility + holiday bonus + dignity = retention. Agencies often pay aides $15/hr + charge $35/hr — privately you save AND aide earns more.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
