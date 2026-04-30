import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function WidowedRelationships() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dating After Loss — Widowed Relationships | TekSure" description="Reentering dating after losing a spouse. Plain-English compassionate guide for the practical, emotional, and family considerations." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dating After Loss</h1>
          <p className="text-lg text-muted-foreground">It&apos;s OK to be ready. It&apos;s OK to not be.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Are you ready?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No "right" timeline. Some 6 months. Some 6 years. Some never.</li>
              <li>Common signs: thinking of company beyond friends/family, ready to share new experiences.</li>
              <li>Common signs to wait: still crying daily, can&apos;t mention late spouse without breakdown.</li>
              <li>Therapy can help discern.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mention late spouse?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Once relationship gets serious, yes — natural to share.</li>
              <li>NOT in dating profile (focus on now).</li>
              <li>NOT on first date (overwhelming).</li>
              <li>Avoid constant comparisons in conversation.</li>
              <li>Pictures of late spouse — keep some up at home, but consider if guest visiting.</li>
              <li>Right partners understand grief is part of you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Adult kids</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adult kids&apos; reactions vary widely — supportive, jealous, worried about money, etc.</li>
              <li>Your life. Your choice.</li>
              <li>BUT — let them know early. Don&apos;t hide. Resentment grows in secrecy.</li>
              <li>"I&apos;m seeing someone. I&apos;d like you to meet when ready."</li>
              <li>Reassure that mom/dad is not being replaced.</li>
              <li>Mediator/family therapy helps if friction.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Practical concerns</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Social Security widow benefits</strong> — remarrying after 60 doesn&apos;t affect them. Before 60 does.</li>
              <li><strong>Pension survivor benefits</strong> — some plans end at remarriage. Check.</li>
              <li><strong>Estate planning</strong> — update will, beneficiaries, POA. Especially if cohabiting.</li>
              <li><strong>Prenup</strong> — common in 60+ second marriages. Protects both your legacies.</li>
              <li><strong>Cohabiting vs marrying</strong> — financial implications very different.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Support resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>WidowsHope.org</strong> — community for widows + widowers.</li>
              <li><strong>Modern Widows Club</strong> — modernwidowsclub.org.</li>
              <li><strong>Soaring Spirits</strong> — international widowed community.</li>
              <li><strong>Therapy</strong> — bereavement specialist or grief counselor.</li>
              <li><strong>Hospice grief programs</strong> — usually 13+ months free, even non-patients.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Two truths</h3>
            <p className="text-sm text-muted-foreground">Loving someone new doesn&apos;t mean you loved them less. The heart isn&apos;t a finite resource. Late spouse would want you happy.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
