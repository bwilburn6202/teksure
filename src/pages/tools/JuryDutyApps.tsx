import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scale } from 'lucide-react';

export default function JuryDutyApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Jury Duty Apps + Tips for Seniors | TekSure" description="Got jury duty? Plain-English guide to senior exemptions, online check-in, and what to expect." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scale className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Jury Duty for Seniors</h1>
          <p className="text-lg text-muted-foreground">Rights, exemptions, what to expect.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior exemptions (varies)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Some states</strong> auto-exempt over 65 OR 70.</li>
              <li><strong>Some states</strong> require request — often easy.</li>
              <li><strong>Medical exemption</strong> — doctor&apos;s note.</li>
              <li><strong>Hardship</strong> — caregiver, distance, etc.</li>
              <li>Check your state — search "[your state] jury exemption seniors".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most courts now have online check-in (eJuror).</li>
              <li>Some let you reschedule online.</li>
              <li>Court websites have "Am I needed?" status update night before.</li>
              <li>Don&apos;t need to drive in for nothing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to bring</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Jury summons.</li>
              <li>Photo ID.</li>
              <li>Book or tablet (lots of waiting).</li>
              <li>Snack + water bottle.</li>
              <li>Sweater (courthouses cold).</li>
              <li>Medications + reading glasses.</li>
              <li>Comfortable shoes.</li>
              <li>Cash for parking + lunch.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Beware jury duty scam</h2>
            <p className="text-sm">Common scam: caller claims you missed jury duty + arrest warrant unless you pay fine NOW via gift card / wire. ALWAYS scam. Real courts NEVER call demanding money. Hang up. See /tools/irs-scam-playbook.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you serve</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Daily pay: $5-50 + mileage (varies wildly by state).</li>
              <li>Federal jury: $50/day.</li>
              <li>Most cases settle / dismiss before jury panel called.</li>
              <li>If selected — typically 1-5 days.</li>
              <li>Long trials rare — judge will ask if hardship.</li>
              <li>Some find jury duty meaningful — civic + interesting.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Volunteer-only juries (rare)</h3>
            <p className="text-sm text-muted-foreground">A few federal districts experiment with volunteer juries. If you want to serve as a senior — call court clerk, ask about volunteer programs. Some appreciate retired professionals.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
