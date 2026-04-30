import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function FamilyConflictApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Family Conflict Resolution Tools | TekSure" description="Mediation, family therapy, conflict apps. Plain-English picks for resolving family disputes — sibling inheritance, blended family, caregiver." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Family Conflict Tools</h1>
          <p className="text-lg text-muted-foreground">When disputes need help.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best ROI: family mediation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Neutral, trained 3rd party.</li>
              <li>Less than 1/10th the cost of litigation.</li>
              <li>Family preserved — court usually destroys.</li>
              <li>Used for: estate disputes, caregiver duties, family business, sibling rivalry.</li>
              <li>Find: <strong>Mediate.com</strong> directory + state bar referrals.</li>
              <li>Cost: $150-300/hr. Most disputes resolve in 2-6 hours.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Family therapy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most insurance covers (Medicare too).</li>
              <li>Find at <strong>psychologytoday.com</strong> — filter "family".</li>
              <li>2-6 sessions can shift entrenched patterns.</li>
              <li>Online options if family scattered (BetterHelp couples + family).</li>
              <li>Different from mediation — focuses on emotion not just resolution.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tools that help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>OurFamilyWizard / TalkingParents</strong> — co-parenting + family communication apps with timestamped logs.</li>
              <li><strong>Trustworthy</strong> — shared family info hub. Reduces "who has what" fights.</li>
              <li><strong>Caregiver coordination apps</strong> (Caring Bridge, Lotsa Helping Hands) — distribute responsibilities fairly.</li>
              <li><strong>Family group chats</strong> — keep everyone informed.</li>
              <li><strong>Estate documents</strong> in writing — eliminates "Mom said" arguments.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common senior family conflicts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"Who&apos;s caregiving Mom?"</strong> — split tasks formally + fair compensation.</li>
              <li><strong>"You&apos;re favoring [sibling]"</strong> — financial transparency + family meeting.</li>
              <li><strong>"Dad shouldn&apos;t still be driving"</strong> — doctor + DMV evaluation.</li>
              <li><strong>"Mom&apos;s spending too much on a friend"</strong> — possible elder abuse — APS.</li>
              <li><strong>Inheritance fights pre-death</strong> — clear written estate plans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free resource</h3>
            <p className="text-sm text-muted-foreground"><strong>National Care Planning Council</strong> — free family caregiver mediation referrals. <strong>AARP Family Caregiving</strong> — free conflict resolution resources. <strong>Local Area Agency on Aging</strong> — many offer free family meeting facilitation. Use them before paying.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
