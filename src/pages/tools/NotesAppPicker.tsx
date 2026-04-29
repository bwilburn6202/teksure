import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { StickyNote } from 'lucide-react';

const APPS = [
  { name: 'Apple Notes', cost: 'FREE on iPhone/iPad/Mac', best: 'Best for Apple users. Voice memos, scanning, drawing all built in. Lock individual notes with Face ID.', good: 'Sync via iCloud. Improved enormously last few years.' },
  { name: 'Google Keep', cost: 'FREE', best: 'Sticky-note style. Color tags. Voice notes auto-transcribed. Works on every device.', good: 'Best free cross-platform option.' },
  { name: 'Microsoft OneNote', cost: 'FREE', best: 'Notebook style. Free-form layout. Best for handwritten notes with stylus.', good: 'Strong if you use Office.' },
  { name: 'Notion', cost: 'Free for personal; $10/mo Plus', best: 'Power-user notes. Databases, templates, project planning. Steep learning curve.', good: 'Worth it for serious organizers.' },
  { name: 'Evernote', cost: 'Free up to 50 notes; $15/mo', best: 'The original. Strong web clipper. Has lost some shine since being acquired.', good: 'Skip unless you\'re already invested.' },
  { name: 'Obsidian', cost: 'FREE for personal use', best: 'Plain-text notes stored on your computer. Privacy-friendly. Steep curve.', good: 'For tech-curious power users.' },
  { name: 'Bear (iOS/Mac only)', cost: '$3/mo Pro', best: 'Beautiful, simple. Markdown formatting. Tags instead of folders.', good: 'For elegant minimalists.' },
];

export default function NotesAppPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Notes App Picker — Apple Notes, Google Keep, OneNote | TekSure" description="Where to capture grocery lists, addresses, recipes, and ideas. Plain-English picks for free notes apps that sync across phone and computer." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <StickyNote className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Notes App Picker</h1>
          <p className="text-lg text-muted-foreground">Sticky notes that follow you everywhere.</p>
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
            <h2 className="font-bold text-xl mb-3">What to put in notes</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Recipes and grocery lists.</li>
              <li>Wi-Fi password (and your kids\' Wi-Fi when you visit).</li>
              <li>Wine you\'ve liked / restaurants worth re-visiting.</li>
              <li>Birthday and anniversary gift ideas through the year.</li>
              <li>Doctor visit notes.</li>
              <li>Books and movies people recommended.</li>
              <li>Insurance card photos (lock the note with Face ID for security).</li>
              <li>Family member sizes and preferences.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to start</h3>
            <p className="text-sm text-muted-foreground"><strong>iPhone user?</strong> Apple Notes is excellent and already there. <strong>Android or mixed?</strong> Google Keep. <strong>Want hand-written notes with a stylus on iPad?</strong> Apple Notes (free) or GoodNotes (one-time $10). Don\'t over-think this — pick one, use it daily, switch later if you outgrow it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
