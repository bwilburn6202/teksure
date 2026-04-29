import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function GriefForFamilyAfterDeath() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grief for Family After Death | TekSure" description="Senior support after losing loved one. Plain-English bereavement guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grief After Death</h1>
          <p className="text-lg text-muted-foreground">First weeks. First year. Beyond.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First days</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Notify close family.</li>
              <li>Funeral home arrangements.</li>
              <li>Don&apos;t make big decisions.</li>
              <li>Accept help with food, errands.</li>
              <li>Death certificate — get 5-10 copies.</li>
              <li>Notify Social Security (often funeral home).</li>
              <li>Tell employer if applicable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First weeks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Funeral / memorial.</li>
              <li>Notify financial accounts.</li>
              <li>Insurance claims.</li>
              <li>Will / probate begins.</li>
              <li>Don&apos;t answer scam calls — predators target widowed.</li>
              <li>Lean on loved ones.</li>
              <li>Don&apos;t worry about &quot;getting back to normal.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First months</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Probate process.</li>
              <li>Update deeds, accounts to surviving spouse.</li>
              <li>Don&apos;t move yet (most regret quick moves).</li>
              <li>Don&apos;t give away belongings yet.</li>
              <li>Hospice bereavement support.</li>
              <li>Therapist if needed.</li>
              <li>Self-care basics — eat, sleep.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First year</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Anniversaries hard — birthdays, holidays.</li>
              <li>Plan ahead for triggers.</li>
              <li>Make small decisions.</li>
              <li>Avoid major moves.</li>
              <li>Identity reformation.</li>
              <li>Reconnect with friends.</li>
              <li>New routines.</li>
              <li>Grief comes in waves.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get help if</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Can&apos;t function 3 months in.</li>
              <li>Severe isolation.</li>
              <li>Substance abuse.</li>
              <li>Suicidal thoughts (988 NOW).</li>
              <li>Physical decline.</li>
              <li>Therapy can help.</li>
              <li>Hospice provides 13 months FREE bereavement.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free senior bereavement</h3>
            <p className="text-sm text-muted-foreground"><strong>Hospice bereavement</strong> — free 13 months. <strong>GriefShare</strong> — Christian groups. <strong>Widowed Persons Service</strong> — local. <strong>Modern Loss</strong> — online community. Don&apos;t walk this path alone.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
