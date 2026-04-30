import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const SVCS = [
  { name: "GriefShare", cost: "FREE", best: "Faith-based grief support groups in 12,000+ locations. Some virtual.", good: "Best Christian." },
  { name: "Compassionate Friends", cost: "FREE", best: "For parents who lost a child. Local + online groups.", good: "Best parental loss." },
  { name: "WidowsHope.org", cost: "FREE", best: "Community for widows + widowers.", good: "Best for spouses." },
  { name: "Modern Loss", cost: "FREE", best: "Secular community, articles, online conversations.", good: "Best secular." },
  { name: "VITAS Bereavement Services", cost: "FREE (after hospice)", best: "Free for 13 months after hospice loss. Phone + group support.", good: "Best post-hospice." },
  { name: "BetterHelp / Talkspace", cost: "$280-400/mo", best: "Online therapy. Often covered by Medicare Advantage.", good: "Best for individual therapy." },
];

export default function OnlineGriefSupport() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Grief Support | TekSure" description="Free grief support groups, faith-based and secular. Plain-English picks for online communities and therapy after losing a loved one." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Grief Support</h1>
          <p className="text-lg text-muted-foreground">You don&apos;t have to do this alone.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Local resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Local hospice</strong> — most offer free bereavement groups for 13+ months even if your loved one wasn&apos;t their patient.</li>
              <li><strong>Funeral home grief programs</strong> — many host monthly free groups.</li>
              <li><strong>Senior centers</strong> — peer support groups.</li>
              <li><strong>Stephen Ministry (church-based)</strong> — trained one-on-one care.</li>
              <li><strong>Hospital chaplains</strong> — even after the death, often available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to seek therapy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Grief lasting more than 12-18 months without lifting.</li>
              <li>Can&apos;t function — eating, sleeping, household.</li>
              <li>Thoughts of self-harm.</li>
              <li>Heavy drinking / substance use to cope.</li>
              <li>Memory + concentration problems beyond first months.</li>
              <li>Therapy is helpful at any stage. Not a sign of weakness.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Books that help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>It&apos;s OK That You&apos;re Not OK</strong> — Megan Devine.</li>
              <li><strong>A Grief Observed</strong> — C.S. Lewis (Christian).</li>
              <li><strong>The Year of Magical Thinking</strong> — Joan Didion.</li>
              <li><strong>Option B</strong> — Sheryl Sandberg + Adam Grant.</li>
              <li><strong>On Grief and Grieving</strong> — Kübler-Ross + Kessler.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Crisis right now?</h3>
            <p className="text-sm text-muted-foreground"><strong>988 Suicide &amp; Crisis Lifeline</strong> — call or text 988. 24/7 free. <strong>Crisis Text Line</strong> — text HOME to 741741. <strong>SAMHSA</strong> — 1-800-662-4357. Real humans, all hours.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
