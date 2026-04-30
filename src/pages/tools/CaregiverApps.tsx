import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartHandshake } from 'lucide-react';

const APPS = [
  { name: 'CaringBridge', cost: 'FREE', best: 'Private update site for the patient + family. Keeps everyone informed without 30 phone calls.', good: 'Best free.' },
  { name: 'Lotsa Helping Hands', cost: 'FREE', best: 'Coordinate volunteers. Sign-up for meals, rides, visits.', good: 'Best volunteer organizing.' },
  { name: 'CareZone', cost: 'FREE', best: 'Track medications + appointments + symptoms. Family shares notes.', good: 'Best caregiving notes.' },
  { name: 'Carely', cost: 'FREE', best: 'Care team chat. Medical questions, photos, journal.', good: 'Best for sibling teams.' },
  { name: 'eCare21', cost: '$30-100/mo', best: 'Remote monitoring — vitals, activity, medication. For long-distance caregivers.', good: 'Best long-distance.' },
];

export default function CaregiverApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Caregiver Apps — Coordinate Family Care | TekSure" description="Caring for an aging parent or sick family member? Plain-English picks for apps that organize medications, appointments, volunteers, and updates." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartHandshake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Caregiver Apps</h1>
          <p className="text-lg text-muted-foreground">Tools for the hardest job there is.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Family Caregiver Alliance</strong> — caregiver.org. Free education + state-by-state resources.</li>
              <li><strong>AARP Caregiving</strong> — aarp.org/caregiving. Free advice, financial tools, support groups.</li>
              <li><strong>Eldercare Locator</strong> — 1-800-677-1116. Free hotline finds local services.</li>
              <li><strong>Alzheimer&apos;s Association</strong> — alz.org or 1-800-272-3900. 24/7 helpline.</li>
              <li><strong>Area Agency on Aging</strong> — every county has one. Free meals, transport, in-home care.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tax breaks for caregivers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Medical expense deduction</strong> — care costs deductible if &gt; 7.5% of income.</li>
              <li><strong>Dependent Care FSA</strong> — through employer, $5,000/year tax-free.</li>
              <li><strong>Credit for Other Dependents</strong> — $500/year if you provide more than half of parent&apos;s support.</li>
              <li><strong>Family Medical Leave Act (FMLA)</strong> — up to 12 weeks unpaid time off (eligible workers).</li>
              <li>Some states pay caregivers — check Medicaid waiver programs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Top tips for new caregivers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Ask the doctor for "advance directive" + "POA for healthcare" forms early.</li>
              <li>Get medical records online via MyChart, FollowMyHealth.</li>
              <li>Keep a medication list with you ALWAYS (in phone notes).</li>
              <li>Make ONE list of all doctors + specialists with phone numbers.</li>
              <li>Family meetings — even painful ones — beat ambush decisions later.</li>
              <li>You can&apos;t pour from an empty cup. Take breaks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">You&apos;re not alone</h3>
            <p className="text-sm text-muted-foreground">53 million Americans are unpaid caregivers right now. Average of 4 years per caregiving stretch. Burnout is real. Find your local caregiver support group through AAA (Area Agency on Aging) or AARP. Talking to others who understand changes everything.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
