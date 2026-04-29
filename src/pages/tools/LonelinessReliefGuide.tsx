import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function LonelinessReliefGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Loneliness Relief for Seniors | TekSure" description="Practical steps to fight loneliness. Plain-English guide for seniors living alone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Loneliness Relief</h1>
          <p className="text-lg text-muted-foreground">As bad for health as smoking 15 cigarettes/day.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why it matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>30% of 65+ live alone.</li>
              <li>Loneliness raises dementia risk 50%.</li>
              <li>Increases heart disease, stroke, depression.</li>
              <li>Surgeon General declared loneliness an epidemic.</li>
              <li>It&apos;s a medical issue, not weakness.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily habits that help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Talk to ONE person every day (call, text, in person).</li>
              <li>Walk in public space — coffee shop, library.</li>
              <li>Greet checkout cashier with full sentence.</li>
              <li>Wave at neighbors.</li>
              <li>Schedule weekly call with family member.</li>
              <li>Let pet make you go outside.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Make new friends after 65</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Senior center — free / low-cost classes + lunch.</li>
              <li>YMCA Silver Sneakers (free with most Medicare Advantage).</li>
              <li>OLLI (Osher Lifelong Learning) — university classes.</li>
              <li>Library book clubs.</li>
              <li>Church/temple/mosque groups.</li>
              <li>Volunteer (see /tools/volunteer-apps).</li>
              <li>Hobby groups — Meetup.com.</li>
              <li>Community garden plot.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Phone friend services (free)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Friendly Voice (AARP)</strong> — weekly check-in calls. FREE.</li>
              <li><strong>Senior Center Without Walls</strong> — phone + Zoom groups.</li>
              <li><strong>Institute on Aging Friendship Line</strong> — 1-800-971-0016. FREE.</li>
              <li><strong>Papa Pals</strong> — companion service (paid via Medicare Advantage some plans).</li>
              <li><strong>Eldera</strong> — virtual mentor matching with kids.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Crisis line</h3>
            <p className="text-sm text-muted-foreground"><strong>988 Suicide &amp; Crisis Lifeline</strong> — call or text 988. Free, 24/7. <strong>Friendship Line for Seniors</strong> — 1-800-971-0016. They listen if you just need to talk. No crisis required.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
