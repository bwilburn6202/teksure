import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileSignature } from 'lucide-react';

export default function AdvanceDirectiveCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Advance Directive & Five Wishes — Free Templates | TekSure" description="Tell doctors your end-of-life wishes BEFORE a crisis. Plain-English guide to advance directives, living wills, and the Five Wishes form." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileSignature className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Advance Directive Coach</h1>
          <p className="text-lg text-muted-foreground">A 30-minute task that protects you and your family.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What an advance directive is</h2>
            <p className="text-sm">A legal document where you write down your medical wishes IF you can\'t speak for yourself someday. Without it, doctors have to guess and family argues.</p>
            <p className="text-sm mt-2">Two main parts:</p>
            <ul className="text-sm list-disc pl-5 mt-1">
              <li><strong>Living will</strong> — your wishes about end-of-life treatments.</li>
              <li><strong>Healthcare proxy / Healthcare Power of Attorney</strong> — names ONE person who decides if you can\'t.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best free options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Five Wishes (fivewishes.org)</strong> — most loved by patients and families. $5 for the booklet. State-recognized in most US states. Covers physical, emotional, spiritual.</li>
              <li><strong>Your state health department</strong> — every state has a free standard advance directive form. Search "[your state] advance directive form".</li>
              <li><strong>AARP\'s free template</strong> — aarp.org/caregiving/financial-legal/. State-specific.</li>
              <li><strong>Hospital social worker</strong> — most hospitals have someone who walks you through it FREE.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Decisions to think through</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>CPR</strong> — if your heart stops, do you want resuscitation?</li>
              <li><strong>Mechanical ventilation</strong> — breathing machine?</li>
              <li><strong>Tube feeding</strong> — if you can\'t swallow?</li>
              <li><strong>Dialysis</strong> — if kidneys fail?</li>
              <li><strong>Antibiotics</strong> — if dying with infection?</li>
              <li><strong>Pain management</strong> — comfort over alertness, or vice versa?</li>
              <li><strong>Where you want to die</strong> — home, hospice, hospital?</li>
              <li><strong>Organ donation</strong>?</li>
            </ul>
            <p className="text-sm mt-3">No one answer is "right". The point is YOUR answer, written down.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Choosing your healthcare proxy</h2>
            <p className="text-sm mb-2">Pick ONE person who can:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Be calm in a crisis.</li>
              <li>Honor your wishes (not impose theirs).</li>
              <li>Live close enough to come quickly.</li>
              <li>Have time to be at the hospital if needed.</li>
              <li>Communicate clearly with doctors.</li>
            </ul>
            <p className="text-sm mt-2">Often a spouse, then an adult child as backup. Tell that person they\'re named — and have a real conversation about your wishes.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After you sign it</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Original kept in a safe but accessible place (not a safety deposit box — too slow).</li>
              <li>Give copies to: your healthcare proxy, your spouse, your primary doctor, the hospital you usually use.</li>
              <li>Keep a card in your wallet stating "I have an advance directive — see [proxy name and phone]".</li>
              <li>Photo on your phone, in a "Medical" folder.</li>
              <li>If you have MyChart — upload there too. Most patient portals support it.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Have "the conversation"</h3>
            <p className="text-sm text-muted-foreground">The free <strong>Conversation Project (theconversationproject.org)</strong> has gentle starter conversations for families. National Healthcare Decisions Day (April 16) is a good prompt to do this together.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
