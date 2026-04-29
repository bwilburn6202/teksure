import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

const APPS = [
  { name: 'Meetup', cost: 'FREE', best: 'Largest. Search by zip + interest. Free + paid groups.', good: 'Best overall.' },
  { name: 'Stitch', cost: '$15/mo', best: '50+ specifically. Friendship + travel + dating.', good: 'Best 50+.' },
  { name: 'Eventbrite', cost: 'FREE', best: 'Local events + classes. Filter by interest.', good: 'Best for events.' },
  { name: 'Facebook Groups', cost: 'FREE', best: 'Search "[your city] seniors" or "[hobby]". Local + active.', good: 'Best for local.' },
  { name: 'Nextdoor groups', cost: 'FREE', best: 'Hyper-local. See your neighborhood&apos;s walking group, book club.', good: 'Best for neighborhood.' },
  { name: 'AARP Member Connection', cost: '$16/yr AARP', best: 'AARP members can find local events + groups.', good: 'Best AARP perk.' },
];

export default function SeniorMeetupApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Meetup Apps for Connection | TekSure" description="Meetup, Stitch, Eventbrite. Plain-English picks for finding senior groups + activities locally." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Meetup Apps</h1>
          <p className="text-lg text-muted-foreground">Find your people.</p>
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
            <h2 className="font-bold text-xl mb-3">Local senior groups</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Senior centers — every county has one. Free or low-cost.</li>
              <li>YMCA / YWCA — senior fitness classes.</li>
              <li>Library — book clubs, classes, lectures.</li>
              <li>Faith community — small groups, classes, social.</li>
              <li>OLLI (Lifelong Learning) — at most universities.</li>
              <li>Garden clubs, hiking clubs, crafting circles.</li>
              <li>Volunteer groups (see /tools/americorp-vista).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Showing up matters</h3>
            <p className="text-sm text-muted-foreground">Loneliness has bigger health impact than smoking. Even 1-2 standing weekly social events transforms life satisfaction. Pick one. Show up consistently. Connections grow over months.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
