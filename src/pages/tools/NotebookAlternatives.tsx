import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Notebook, ChevronRight, Apple, Smartphone, AlertTriangle,
  Sparkles, Briefcase, BookOpen,
} from 'lucide-react';

type Lane = 'simple-and-free' | 'power-user' | 'journaling';

interface NoteApp {
  name: string;
  lane: Lane;
  what: string;
  bestFor: string;
  cost: string;
  iphone: string;
  android: string;
  install: string[];
  watchOut?: string;
}

const APPS: NoteApp[] = [
  {
    name: 'Apple Notes',
    lane: 'simple-and-free',
    what: 'The yellow notepad icon that comes pre-installed on every iPhone. Type a note, snap a photo into it, or scribble with a finger.',
    bestFor: 'iPhone owners who want a grocery list, a place for phone numbers, or a quick reminder. Syncs to iPad and Mac on its own.',
    cost: 'Free, built-in',
    iphone: 'Pre-installed (yellow notepad icon)',
    android: 'Not available — try Google Keep instead',
    install: [
      'Find the yellow Notes icon on the home screen — it is already there.',
      'Tap the square-with-pencil icon at the bottom right to start a new note.',
      'Type a title on the first line, then your list or thoughts below.',
      'To keep notes safe, open Settings, tap your name, then iCloud, and turn on Notes so it backs up.',
    ],
  },
  {
    name: 'Google Keep',
    lane: 'simple-and-free',
    what: 'A wall of colorful sticky notes. Each note can be a list with checkboxes, a typed paragraph, a photo, or a voice memo.',
    bestFor: 'Anyone with a Google account, especially Android owners. Grocery lists you can check off feel satisfying.',
    cost: 'Free with a Google account',
    iphone: 'App Store search "Google Keep"',
    android: 'Often pre-installed; otherwise Play Store search "Google Keep"',
    install: [
      'Open the App Store (iPhone) or Play Store (Android) and search Google Keep.',
      'Tap Get or Install. Sign in with the same Google account you use for Gmail.',
      'Tap the plus button at the bottom to add a note. Tap the checkbox icon to turn it into a list.',
      'Pin your most-used notes by tapping the pin icon — they stay at the top.',
    ],
  },
  {
    name: 'Notion',
    lane: 'power-user',
    what: 'A flexible workspace where pages can hold lists, tables, calendars, and databases. More powerful, with more buttons to learn.',
    bestFor: 'Family planners, hobby projects, recipe collections — anything with structure. There is a learning curve.',
    cost: 'Free for personal use (with limits); paid plans start around 10 dollars per month',
    iphone: 'App Store search "Notion"',
    android: 'Play Store search "Notion"',
    install: [
      'Download Notion from your phone store, or visit notion.so on a computer.',
      'Create a free account with an email address. Confirm the email link.',
      'Pick a starter template (Personal Home is a fine first choice).',
      'Tap the plus button to add a new page or list. Save your work happens on its own.',
    ],
    watchOut: 'Notion has more features than most folks need. Start with one page and grow from there.',
  },
  {
    name: 'Evernote',
    lane: 'power-user',
    what: 'A long-running note app with strong search — it can find words inside photos of receipts and handwritten notes.',
    bestFor: 'People with stacks of paperwork to scan and search later. Tax records, warranties, medical bills.',
    cost: 'Paid since 2024 — around 15 dollars per month for the Personal plan; the free tier is now very limited',
    iphone: 'App Store search "Evernote"',
    android: 'Play Store search "Evernote"',
    install: [
      'Download Evernote from your phone store.',
      'Create an account with email, then pick a plan. Free works for testing; Personal is the most common paid tier.',
      'Tap the green plus button to add a note, scan a document, or record audio.',
      'Use the search bar at the top to find any word — including text inside photos.',
    ],
    watchOut: 'Evernote moved away from a generous free tier in 2024. If you only need a few notes, Apple Notes or Google Keep do the same job at no cost.',
  },
  {
    name: 'Bear',
    lane: 'power-user',
    what: 'A clean, focused writing app for iPhone, iPad, and Mac only. Beautiful typography, no clutter.',
    bestFor: 'Apple-only households who want a tidier alternative to Apple Notes for longer writing.',
    cost: 'Free to try; Bear Pro is around 3 dollars per month or 30 dollars per year',
    iphone: 'App Store search "Bear"',
    android: 'Not available — Apple devices only',
    install: [
      'Open the App Store on your iPhone or iPad and search Bear.',
      'Tap Get and sign in with your Apple ID.',
      'Tap the compose button and start a new note. Tap Untitled to give it a name.',
      'To sync between your iPhone and Mac or iPad, subscribe to Bear Pro from the settings inside the app.',
    ],
    watchOut: 'Bear does not work on Android or Windows. If anyone in the family uses non-Apple devices, pick something else.',
  },
  {
    name: 'Day One Journal',
    lane: 'journaling',
    what: 'A digital diary with daily prompts, photos, weather, and the date stamped on every entry. More personal than a note app.',
    bestFor: 'Folks who want to keep a memory journal, gratitude list, or travel log — not a grocery list.',
    cost: 'Free with one journal; Premium is around 35 dollars per year for unlimited journals and photos',
    iphone: 'App Store search "Day One Journal"',
    android: 'Play Store search "Day One Journal"',
    install: [
      'Download Day One from your phone store.',
      'Create an account or sign in with Apple or Google.',
      'Tap the plus button to start an entry. Add photos, your location, or how you felt that day.',
      'Turn on a daily reminder under Settings so the app nudges you to write.',
    ],
  },
];

const LANES: { id: Lane; label: string; icon: typeof Sparkles; blurb: string }[] = [
  {
    id: 'simple-and-free',
    label: 'Simple and free',
    icon: Sparkles,
    blurb: 'Apple Notes and Google Keep. No accounts to manage beyond what you already have. Best starting point.',
  },
  {
    id: 'power-user',
    label: 'Power user',
    icon: Briefcase,
    blurb: 'Notion, Evernote, Bear. More features, a learning curve, and most ask for a monthly fee.',
  },
  {
    id: 'journaling',
    label: 'Journaling',
    icon: BookOpen,
    blurb: 'Day One. Built for memories, gratitude lists, and travel logs — not grocery lists.',
  },
];

export default function NotebookAlternatives() {
  return (
    <>
      <SEOHead
        title="Notebook Alternatives: Replace Paper Notebooks with Digital"
        description="Six honest digital notebook picks for seniors — Apple Notes, Google Keep, Notion, Evernote, Bear, and Day One. Real costs, plain-English what-it-does, and install steps."
        path="/tools/notebook-alternatives"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-orange-50 via-background to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-orange-500/10 rounded-full">
                <Notebook className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Notebook Alternatives</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Replace the paper notebook with something that does not get lost behind the couch — grocery lists, phone numbers, things to remember.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Notebook Alternatives' }]} />

          <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 mb-6">
            <CardContent className="p-5">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-amber-900 dark:text-amber-100 mb-1">Pen and paper still has its place</p>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    Researchers keep finding the same thing: writing by hand helps the brain remember and understand better than typing. Slower, more deliberate, more memorable. Digital notes are convenient — searchable, never lost, with you everywhere — but a paper notebook on the kitchen counter is not old-fashioned. It is good for you. Many folks end up using both.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3 mb-6">
            {LANES.map(lane => {
              const Icon = lane.icon;
              return (
                <div key={lane.id} className="p-4 rounded-lg border border-border bg-muted/30">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="h-4 w-4 text-orange-600" />
                    <p className="font-semibold text-sm">{lane.label}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{lane.blurb}</p>
                </div>
              );
            })}
          </div>

          <div className="space-y-3 mb-6">
            {APPS.map(app => (
              <Card key={app.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <div>
                      <p className="font-semibold text-base">{app.name}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{app.what}</p>
                    </div>
                    <Badge variant="outline" className="shrink-0">{app.cost}</Badge>
                  </div>

                  <p className="text-xs text-muted-foreground mb-3"><strong>Best for:</strong> {app.bestFor}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div className="p-2 rounded bg-muted/40 border border-border text-xs flex gap-2">
                      <Apple className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-0.5" />
                      <div><strong>iPhone:</strong> {app.iphone}</div>
                    </div>
                    <div className="p-2 rounded bg-muted/40 border border-border text-xs flex gap-2">
                      <Smartphone className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-0.5" />
                      <div><strong>Android:</strong> {app.android}</div>
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">How to set it up</p>
                  <ol className="space-y-1.5 text-sm text-muted-foreground mb-3">
                    {app.install.map((step, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-primary shrink-0">{idx + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>

                  {app.watchOut && (
                    <div className="p-2 rounded bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-xs">
                      <strong className="text-amber-700 dark:text-amber-300">Watch out:</strong>{' '}
                      <span className="text-amber-700 dark:text-amber-300">{app.watchOut}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Which one should you pick first?</p>
              <ol className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary shrink-0">1.</span><span>If you have an iPhone and want zero fuss: open Apple Notes. It is already there, and it costs nothing.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">2.</span><span>If you have an Android phone or use Gmail every day: try Google Keep. The colorful sticky notes are friendly to look at.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">3.</span><span>If you have stacks of paperwork to keep track of: Evernote earns its monthly fee with strong search. Otherwise skip it.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">4.</span><span>For memory journaling and a daily writing habit: Day One is the friendliest of the bunch.</span></li>
              </ol>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/document-scanner-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Document Scanner Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Turn paper into searchable digital files.</p>
              </Link>
              <Link to="/tools/photo-library-tips" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Photo Library Tips</p>
                <p className="text-xs text-muted-foreground mt-0.5">Keep photos organized and findable.</p>
              </Link>
              <Link to="/tools/dictation-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Dictation Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Talk to your phone instead of typing.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: pick one app, use it for two weeks, then decide if you want to try another. Switching too often loses notes.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
