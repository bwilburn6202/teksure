import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function ChoirForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Choir for Seniors | TekSure" description="Senior choir benefits + groups. Plain-English guide for senior singers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Choir for Seniors</h1>
          <p className="text-lg text-muted-foreground">Sing. Connect. Better health.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Health benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Improves lung function (COPD especially).</li>
              <li>Lowers BP.</li>
              <li>Boosts mood (oxytocin release).</li>
              <li>Improves memory.</li>
              <li>Stronger immune system.</li>
              <li>Social connection.</li>
              <li>Helps with depression + anxiety.</li>
              <li>Studies link to longevity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find local choirs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Church choirs</strong> — most welcoming.</li>
              <li><strong>Community choruses</strong> — non-religious.</li>
              <li><strong>Senior centers</strong> — daytime groups.</li>
              <li><strong>Sweet Adelines</strong> (women).</li>
              <li><strong>Barbershop Harmony Society</strong> (men).</li>
              <li><strong>Encore Creativity for Older Adults</strong> — 50+ specific.</li>
              <li>Most welcome beginners.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Memory care choirs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Choirs for dementia patients exist.</li>
              <li>Familiar songs trigger memories.</li>
              <li>Meaningful connection late in disease.</li>
              <li>Caregivers welcome too.</li>
              <li>Music + memory program — mac.org.</li>
              <li>Profound experience.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t worry about voice</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most community choirs accept all voices.</li>
              <li>Older voices age — tone changes okay.</li>
              <li>Group sings — no solos required.</li>
              <li>Voice lessons can help if interested.</li>
              <li>Singing exercises voice.</li>
              <li>Better with practice.</li>
              <li>Just show up.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Karaoke alternative</h3>
            <p className="text-sm text-muted-foreground">No choir nearby? Karaoke nights at restaurants. Smule app — sing with others online. Family sing-alongs at gatherings. Don&apos;t lose joy of singing. Even shower singing has health benefits.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
