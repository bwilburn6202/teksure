import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CheckSquare } from 'lucide-react';

const APPS = [
  { name: 'Apple Reminders', cost: 'FREE', best: 'Built-in iPhone. Voice "Hey Siri remind me at 5 PM..." Easy.', good: 'Best for iPhone.' },
  { name: 'Google Tasks', cost: 'FREE', best: 'Built-in Gmail / Google Calendar. Works on Android + iPhone.', good: 'Best for Google.' },
  { name: 'Todoist', cost: 'FREE / $48/yr', best: 'Cross-platform. Powerful filtering. Senior-friendly.', good: 'Best premium.' },
  { name: 'Microsoft To Do', cost: 'FREE', best: 'Tied to Outlook. Cross-platform.', good: 'Best with Outlook.' },
  { name: 'Pen + paper', cost: 'FREE', best: 'Many seniors prefer. Big text. Forever.', good: 'Best traditional.' },
];

export default function ToDoListSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="To-Do List Apps for Seniors | TekSure" description="Apple Reminders, Google Tasks, Todoist. Plain-English picks for senior-friendly task management." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CheckSquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">To-Do List Apps</h1>
          <p className="text-lg text-muted-foreground">Forget less. Stress less.</p>
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
            <h2 className="font-bold text-xl mb-3">Apple Reminders voice tricks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Hey Siri, remind me at 9 AM tomorrow to take pills."</li>
              <li>"Hey Siri, remind me at the grocery store to buy bread." (location-based)</li>
              <li>"Hey Siri, remind me when I leave the house to lock the back door."</li>
              <li>Hands-free entry. No typing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Keep ONE list, not 10 systems.</li>
              <li>Phone reminder for time-sensitive things.</li>
              <li>Paper for daily routines (visible kitchen list).</li>
              <li>Cross off completed = satisfaction.</li>
              <li>Don&apos;t over-system — pick simple, stick with it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Memory hack</h3>
            <p className="text-sm text-muted-foreground">Forget less by writing it down IMMEDIATELY. "Hey Siri, remind me to..." takes 5 sec. By time you "go do it later" — it&apos;s gone. Externalize memory to phone. Frees mental space for important things.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
