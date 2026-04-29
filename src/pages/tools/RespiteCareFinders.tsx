import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { LifeBuoy } from 'lucide-react';

export default function RespiteCareFinders() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Respite Care Finder | TekSure" description="Caregivers need breaks. Plain-English guide to finding free or low-cost respite care for a few hours, a weekend, or a week." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <LifeBuoy className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Respite Care Finders</h1>
          <p className="text-lg text-muted-foreground">Take a break before you break.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why respite matters</h2>
            <p className="text-sm">Caregiver burnout leads to depression, illness, and worse outcomes for the person being cared for. Respite — even a few hours a week — improves both lives. Most caregivers don&apos;t take respite because they don&apos;t know where to find it.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free or low-cost respite</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Area Agency on Aging</strong> (AAA) — every county has one. Some pay for in-home help.</li>
              <li><strong>Veterans</strong> — VA Respite Program, 30 days/year free for vets&apos; family caregivers.</li>
              <li><strong>Medicaid waivers</strong> — most states cover respite. Check your state Medicaid office.</li>
              <li><strong>Hospice</strong> — Medicare covers 5 days inpatient respite per stretch.</li>
              <li><strong>National Family Caregiver Support Program</strong> — federal, $300-1,500/year.</li>
              <li><strong>Local faith communities</strong> — many host volunteer "caregiver helpers".</li>
              <li><strong>Adult day programs</strong> — $40-100/day. Some scholarships available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Finder tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Eldercare Locator</strong> — 1-800-677-1116 OR eldercare.acl.gov. Free hotline.</li>
              <li><strong>ARCH National Respite Network</strong> — archrespite.org. State-by-state directory.</li>
              <li><strong>Care.com</strong> — paid: $10-30/hour for in-home help. Background checks available.</li>
              <li><strong>Visiting Angels, Home Instead</strong> — $25-40/hr in-home companion care.</li>
              <li><strong>211 hotline</strong> — call 211, ask for caregiver respite resources.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Types of respite</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>In-home companion</strong> — paid helper sits with patient, $20-30/hr.</li>
              <li><strong>Adult day program</strong> — patient goes to facility for 4-8 hours. Activities, meals.</li>
              <li><strong>Overnight respite</strong> — patient stays at care facility 1-7 days.</li>
              <li><strong>Camp respite</strong> — week-long summer respite camps for caregivers.</li>
              <li><strong>Family/friend swap</strong> — schedule trusted family for 4-hour blocks.</li>
              <li><strong>Volunteer respite</strong> — Faith in Action, hospice volunteers, AmeriCorps Senior Companion (free).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First-time respite checklist</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Write down medication schedule + allergies.</li>
              <li>Emergency contacts list.</li>
              <li>Doctor names + phone numbers.</li>
              <li>Daily routine outline.</li>
              <li>Tour the facility (or interview helper) BEFORE you leave.</li>
              <li>Start small — 2-4 hours first time.</li>
              <li>Don&apos;t feel guilty. This is part of caring.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Self-care isn&apos;t selfish</h3>
            <p className="text-sm text-muted-foreground">"I&apos;m fine, I don&apos;t need a break" — said by every burned-out caregiver. Respite once a week is preventive medicine for YOUR health. Use it. Your loved one needs you healthy more than constantly present.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
