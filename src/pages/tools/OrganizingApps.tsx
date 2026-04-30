import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ListOrdered } from 'lucide-react';

const APPS = [
  { name: 'Apple Notes (built-in)', cost: 'FREE', best: 'Folders for everything. Senior-friendly UI. Already on iPhone.', good: 'Best simple.' },
  { name: 'Notion', cost: 'FREE', best: 'Most powerful. Steeper learning curve.', good: 'Best advanced.' },
  { name: 'Todoist', cost: 'FREE / $48/yr Pro', best: 'Simple to-do list. Across phone + computer.', good: 'Best for tasks.' },
  { name: 'Trello', cost: 'FREE', best: 'Visual board. Cards. Senior-friendly visual.', good: 'Best visual.' },
  { name: 'Sortly (organize possessions)', cost: 'FREE / $50/yr', best: 'Categorize + photo your stuff. Best for downsizing.', good: 'Best for stuff.' },
  { name: 'Pen + paper', cost: 'FREE', best: 'Many seniors prefer. Notebook + pens work forever.', good: 'Best traditional.' },
];

export default function OrganizingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Organizing Apps for Seniors | TekSure" description="Apple Notes, Sortly, Trello. Plain-English picks for senior-friendly apps to organize life, stuff, tasks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ListOrdered className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Organizing Apps</h1>
          <p className="text-lg text-muted-foreground">Tame the chaos.</p>
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
            <h2 className="font-bold text-xl mb-3">Apple Notes folders to set up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Medications + dosages.</li>
              <li>Doctors + phone numbers.</li>
              <li>Family birthdays + anniversaries.</li>
              <li>Emergency contacts.</li>
              <li>Wifi passwords.</li>
              <li>Recipes (or Paprika app).</li>
              <li>Travel ideas.</li>
              <li>Books to read.</li>
              <li>Movies to watch.</li>
              <li>"To buy" lists.</li>
              <li>Family stories.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hire a pro organizer</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>National Association of Productivity + Organizing Professionals (NAPO).</li>
              <li>$50-150/hr typical.</li>
              <li>Sessions 3-8 hrs.</li>
              <li>Senior specialty: closets, downsizing, hoarding recovery, paper management.</li>
              <li>Best ROI for severe disorganization.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t over-organize</h3>
            <p className="text-sm text-muted-foreground">Easy to spend more time managing organizing apps than the things they organize. Notes app + calendar covers 90% of senior needs. Don&apos;t buy fancy. Use what you have.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
