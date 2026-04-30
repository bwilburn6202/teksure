import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { UserCheck } from 'lucide-react';

const APPS = [
  { name: 'Zocdoc', cost: 'FREE', best: 'Book real appointments online. Filter by insurance, location, sub-specialty. Real reviews.', good: 'Best for booking same-week appointments.' },
  { name: 'Healthgrades', cost: 'FREE', best: 'Reviews and ratings. Strong on hospital-affiliated specialists.', good: 'Read both 5-star and 1-star carefully.' },
  { name: 'Vitals.com', cost: 'FREE', best: 'Patient reviews. Sometimes shows different doctors than Healthgrades.', good: 'Get a second perspective.' },
  { name: 'Your insurance\'s "Find a doctor"', cost: 'FREE for members', best: 'In-network filtering. Avoid out-of-network surprise bills.', good: 'Always start here.' },
  { name: 'Medicare\'s Care Compare', cost: 'FREE', best: 'medicare.gov/care-compare. Shows quality ratings for hospitals, doctors, nursing homes, dialysis centers.', good: 'Underused federal resource.' },
  { name: 'Castle Connolly Top Doctors', cost: 'FREE search', best: 'Peer-nominated top doctors in major specialties. Curated, conservative.', good: 'For finding the best, not the closest.' },
];

export default function FindADoctorApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Find a Doctor Apps — Zocdoc, Healthgrades | TekSure" description="Pick the right doctor. Plain-English guide to comparing reviews, finding in-network providers, and booking online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <UserCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Find a Doctor Apps</h1>
          <p className="text-lg text-muted-foreground">Find doctors that take your insurance and have good reviews.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to pick a new doctor</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Start with your insurance\'s "Find a doctor" tool — only see in-network. Saves hundreds in surprise bills.</li>
              <li>Cross-reference with reviews on Healthgrades AND Vitals.com.</li>
              <li>Read 1-star and 3-star reviews — they\'re honest. 5-star reviews are sometimes friends/family.</li>
              <li>Look for: clear communication, listens, doesn\'t rush, runs on time. Specific complaints about MEDICAL skills are red flags.</li>
              <li>Check Medicare Care Compare if it\'s a specialist or hospital.</li>
              <li>Call the office. Ask: "Do you accept new patients with [your insurance]?". A friendly receptionist is a good sign for the practice.</li>
              <li>Book a "meet and greet" visit if available — 15 min to see if you click.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Specialties most seniors need</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Primary care / internist</strong> — your annual physical, refills.</li>
              <li><strong>Geriatrician</strong> — primary care doctor specifically trained for adults 65+. Worth seeking if available.</li>
              <li><strong>Cardiologist</strong> — heart issues.</li>
              <li><strong>Endocrinologist</strong> — diabetes, thyroid.</li>
              <li><strong>Optometrist (eye exam) and Ophthalmologist (eye surgery, conditions)</strong>.</li>
              <li><strong>Audiologist</strong> — for hearing loss, hearing aids.</li>
              <li><strong>Dermatologist</strong> — annual skin check (skin cancer risk rises with age).</li>
              <li><strong>Gerontologist / geriatric psychologist</strong> — memory and cognition concerns.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best primary care option</h3>
            <p className="text-sm text-muted-foreground">If available — find a <strong>geriatrician</strong>, a primary care doctor specially trained for adults 65+. They understand polypharmacy, fall risk, dementia, and the differences in how older bodies respond to medication. Limited supply nationally, but worth searching.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
