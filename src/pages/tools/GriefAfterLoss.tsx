import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function GriefAfterLoss() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grief Support for Senior Loss | TekSure" description="Loss + grief support. Plain-English guide for senior bereavement." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grief After Loss</h1>
          <p className="text-lg text-muted-foreground">Many losses with age. Help available.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Grief is unique to you</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No timeline.</li>
              <li>Stages aren&apos;t linear.</li>
              <li>Anniversary reactions normal.</li>
              <li>Grief comes in waves.</li>
              <li>Each loss different.</li>
              <li>Multiple losses compound.</li>
              <li>Friend, spouse, sibling, pet — all valid.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free senior grief support</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hospice</strong> bereavement programs — free 13 months after loss.</li>
              <li><strong>GriefShare</strong> — Christian-based. 13-week free groups.</li>
              <li><strong>Hope Edelman&apos;s motherless daughters</strong> — for those losing mom.</li>
              <li><strong>Widowed Persons Service</strong> — local groups.</li>
              <li><strong>Modern Loss</strong> — online community.</li>
              <li><strong>The Compassionate Friends</strong> — child loss.</li>
              <li>Pet loss — Lap of Love hotline.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Self-care during grief</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Eat regularly (even small).</li>
              <li>Hydrate.</li>
              <li>Walk daily.</li>
              <li>Don&apos;t make big decisions first year.</li>
              <li>Limit alcohol.</li>
              <li>Sleep when tired.</li>
              <li>Cry when needed.</li>
              <li>Talk about loved one — say their name.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to seek help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Inability to function 2-3 months in.</li>
              <li>Suicidal thoughts.</li>
              <li>Substance use.</li>
              <li>Severe isolation.</li>
              <li>Inability to eat/sleep.</li>
              <li>Therapist specializing in grief.</li>
              <li>Medicare covers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Books that help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>It&apos;s OK That You&apos;re Not OK</strong> — Megan Devine.</li>
              <li><strong>Bearing the Unbearable</strong> — Joanne Cacciatore.</li>
              <li><strong>The Year of Magical Thinking</strong> — Joan Didion.</li>
              <li><strong>Grief One Day at a Time</strong> — Alan Wolfelt.</li>
              <li>Free at library or Libby.</li>
              <li>You&apos;re not alone in feelings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Crisis line</h3>
            <p className="text-sm text-muted-foreground">If suicidal — <strong>988 Suicide &amp; Crisis Lifeline</strong> (call/text 988). FREE 24/7. <strong>Friendship Line for Seniors</strong> 1-800-971-0016. Sometimes need someone to listen. Help available. Worth reaching out.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
