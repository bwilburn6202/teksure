import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function CrisisLineGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="988 Crisis Line + Senior Hotlines | TekSure" description="Free crisis hotlines for seniors. Plain-English mental health emergency guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Crisis Lines</h1>
          <p className="text-lg text-muted-foreground">Free. 24/7. Confidential.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">988 Suicide + Crisis Lifeline</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Call OR text <strong>988</strong>.</li>
              <li>FREE.</li>
              <li>24/7.</li>
              <li>Trained crisis counselors.</li>
              <li>Spanish: press 2.</li>
              <li>Veterans: press 1.</li>
              <li>LGBTQ+: press 3 or 988lifeline.org.</li>
              <li>Sometimes just need someone to listen.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific lines</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Friendship Line for Seniors</strong> — 1-800-971-0016. Lonely? Just need to talk?</li>
              <li><strong>Eldercare Locator</strong> — 1-800-677-1116.</li>
              <li><strong>AARP Fraud Watch</strong> — 1-877-908-3360.</li>
              <li><strong>Long-term Care Ombudsman</strong> — 1-800-677-1116. Nursing home issues.</li>
              <li><strong>Adult Protective Services</strong> — local. Elder abuse.</li>
              <li>All FREE.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to call</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Suicidal thoughts.</li>
              <li>Anxiety attack.</li>
              <li>Just need someone to listen.</li>
              <li>Thinking dark thoughts.</li>
              <li>Lonely 2am can&apos;t sleep.</li>
              <li>Overwhelmed by grief.</li>
              <li>Substance use crisis.</li>
              <li>You don&apos;t need to be in extreme crisis.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to expect</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Counselor listens.</li>
              <li>No judgment.</li>
              <li>Not required to give name.</li>
              <li>Help you find resources.</li>
              <li>De-escalate if needed.</li>
              <li>Won&apos;t send police unless emergency.</li>
              <li>30 min average call.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For the person you&apos;re worried about</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Ask directly: &quot;Are you having thoughts of suicide?&quot;</li>
              <li>Doesn&apos;t plant idea — opens conversation.</li>
              <li>Listen without judgment.</li>
              <li>Don&apos;t leave alone if at risk.</li>
              <li>Remove access to means (guns, meds).</li>
              <li>Call 988 for guidance.</li>
              <li>Get them to ER if imminent danger.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save these numbers</h3>
            <p className="text-sm text-muted-foreground">Save 988 + Friendship Line in phone now. Hopefully won&apos;t need. But ready if do. Tell trusted family member you have these. Senior suicide rate highest of any age. Help available. Use it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
