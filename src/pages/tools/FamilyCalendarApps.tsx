import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const APPS = [
  { name: 'Apple Calendar Family Sharing', cost: 'FREE', best: 'If everyone&apos;s on iPhone — works perfectly. Shared family calendar built-in.', good: 'Best for Apple families.' },
  { name: 'Google Calendar Family', cost: 'FREE', best: 'Cross-platform. Share with iPhone + Android family.', good: 'Best mixed devices.' },
  { name: 'Cozi Family Organizer', cost: 'FREE / $30/yr Gold', best: 'Designed for families. Calendar + lists + journal. Senior-friendly.', good: 'Best dedicated family.' },
  { name: 'Skylight Calendar', cost: '$200 + $80/yr', best: 'Wall-mounted touchscreen calendar in kitchen. Family sees at a glance.', good: 'Best wall calendar.' },
  { name: 'Hub Max from Google', cost: '$229', best: 'Smart display + family calendar visible always.', good: 'Best smart display.' },
];

export default function FamilyCalendarApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Family Calendar Apps | TekSure" description="Apple, Google, Cozi, Skylight. Plain-English picks for shared family calendars across generations." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calendar className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Family Calendar Apps</h1>
          <p className="text-lg text-muted-foreground">Everyone sees what&apos;s happening.</p>
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
            <h2 className="font-bold text-xl mb-3">Setup family calendar (Apple)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → tap your name → Family Sharing.</li>
              <li>Add family members.</li>
              <li>Open Calendar app → Calendars → "Add Calendar" → Family.</li>
              <li>Family members add events. Everyone sees.</li>
              <li>Free.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup family calendar (Google)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open Google Calendar → Other Calendars → "+" → Create New.</li>
              <li>Name it "Family".</li>
              <li>Settings → Share with: add family member emails.</li>
              <li>Each adds events. All see same calendar.</li>
              <li>Works on iPhone, Android, computer.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Doctor appointments.</li>
              <li>Family birthdays + anniversaries.</li>
              <li>Grandkid school events you want to attend.</li>
              <li>Travel dates — family knows you&apos;re away.</li>
              <li>Caregiver schedules.</li>
              <li>Standing weekly calls / dinners.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Skylight on the kitchen wall</h3>
            <p className="text-sm text-muted-foreground">Best gift for non-tech grandparent — Skylight Calendar wall-mounted. Family adds events from their phones. It shows up on grandparent&apos;s wall display. They never have to open an app. Just glance. $200 once + $80/yr.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
