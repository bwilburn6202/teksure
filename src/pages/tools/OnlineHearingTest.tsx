import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ear } from 'lucide-react';

export default function OnlineHearingTest() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Hearing Test — Free At-Home Hearing Check | TekSure" description="Free online hearing tests that give you a real picture of how well you hear. Compare to a real audiologist test, and know when to get hearing aids." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ear className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Hearing Test</h1>
          <p className="text-lg text-muted-foreground">Free, 5 minutes, decent picture of your hearing.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">When to test</h2>
            <ul className="text-sm list-disc pl-5">
              <li>People mumble more than they used to (it\'s probably you).</li>
              <li>You ask "what?" often.</li>
              <li>Restaurants are too loud to converse.</li>
              <li>TV volume keeps creeping up.</li>
              <li>You\'re missing parts of phone conversations.</li>
            </ul>
            <p className="text-sm mt-2"><strong>Why it matters:</strong> Untreated hearing loss is linked to faster cognitive decline. Treating it early matters more than people realize.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free at-home tests</h2>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold">Mimi Hearing Test (free app)</p>
                <p>iPhone & Android. 5-minute test, reasonable approximation of an audiogram. Gives you results to share with a doctor.</p>
              </div>
              <div>
                <p className="font-bold">SoundCheck by Mimi (mimi.health)</p>
                <p>Web-based version. Use headphones in a quiet room.</p>
              </div>
              <div>
                <p className="font-bold">Apple AirPods Pro 2 hearing test</p>
                <p>If you have AirPods Pro 2 with iOS 18+ — the iPhone Health app has a built-in hearing test that produces a real audiogram.</p>
              </div>
              <div>
                <p className="font-bold">National Hearing Test (1-866-223-7575)</p>
                <p>Phone-based test, sponsored by AARP. Free for AARP members; $8 for non-members. Validated by research.</p>
              </div>
              <div>
                <p className="font-bold">Costco Hearing Center</p>
                <p>Free in-person hearing test. No appointment needed. Honest, no high-pressure sales.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Read your results</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Normal hearing:</strong> Hears tones at 0-25 dB.</li>
              <li><strong>Mild loss:</strong> 26-40 dB. Can hear most speech, miss whispers and quiet voices.</li>
              <li><strong>Moderate loss:</strong> 41-55 dB. Hearing aids strongly recommended.</li>
              <li><strong>Severe:</strong> 56+ dB. Likely need stronger hearing aids or a cochlear implant.</li>
            </ul>
            <p className="text-sm mt-2">Get a formal test from an audiologist if any test comes back "moderate" or worse, or if you have ringing/tinnitus.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hearing aid options at every price point</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>$0:</strong> AirPods Pro 2 in hearing aid mode (iOS 18+) — for mild loss.</li>
              <li><strong>$200-$500:</strong> OTC hearing aids — Jabra Enhance, Lexie, Sony, Audien. Available at Best Buy, CVS, Costco. No prescription.</li>
              <li><strong>$1,500-$5,000/pair:</strong> Prescription hearing aids — fitted by an audiologist. Best for moderate to severe loss.</li>
              <li><strong>VA:</strong> Veterans qualify for free hearing aids. Apply at va.gov.</li>
              <li><strong>Medicaid / state programs:</strong> Some states cover hearing aids. Check yours.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Costco is the best deal</h3>
            <p className="text-sm text-muted-foreground">Costco Hearing Aid Center sells prescription hearing aids at $1,500-$2,000/pair — half what most audiologists charge. Free testing, free fitting, free follow-ups for life. Membership pays for itself with one purchase.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
