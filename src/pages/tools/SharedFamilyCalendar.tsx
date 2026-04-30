import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, ChevronRight, type LucideIcon, Apple, Smartphone, Globe } from 'lucide-react';

type Setup = 'all-apple' | 'all-google' | 'mixed' | 'paper-too';

interface Step {
  title: string;
  detail: string;
}

interface Plan {
  name: string;
  icon: LucideIcon;
  whoFor: string;
  steps: Step[];
  bonus: string;
}

const PLANS: Record<Setup, Plan> = {
  'all-apple': {
    name: 'iCloud Family Calendar',
    icon: Apple,
    whoFor: 'Everyone in the family has an iPhone, iPad, or Mac.',
    steps: [
      { title: 'Set up Family Sharing', detail: 'Settings → tap your name → Family → "Set Up Family". Invite up to 5 family members by email or text. They tap the link, accept, and join.' },
      { title: 'Open Calendar app on iPhone', detail: 'Tap "Calendars" at the bottom → "+" Add Calendar → "Add iCloud Calendar".' },
      { title: 'Name it "Family"', detail: 'Pick a color everyone can see (red is bold, green is calm). Tap Done.' },
      { title: 'Share it with the family group', detail: 'Tap the "i" next to the new "Family" calendar → "Add Person" → invite each member by their Apple ID email.' },
      { title: 'Set who can edit vs view', detail: 'Edit lets them add events. View-only is good for grandkids (they see soccer practice, cannot delete).' },
    ],
    bonus: 'Once set up, anyone in the family adds an event by picking the "Family" calendar at the bottom of the New Event screen. Everyone sees it within a minute.',
  },
  'all-google': {
    name: 'Google Calendar shared calendar',
    icon: Globe,
    whoFor: 'Everyone uses Gmail / Google.',
    steps: [
      { title: 'Open Google Calendar (web is easiest)', detail: 'On a computer: calendar.google.com. On the side, hover "My calendars" → click the "+" → "Create new calendar".' },
      { title: 'Name it "Smith Family"', detail: 'Description optional. Click Create.' },
      { title: 'Share with family members', detail: 'Click the new calendar → Settings → Share with specific people → Add people. Add each family member\'s Gmail.' },
      { title: 'Pick permissions', detail: '"Make changes to events" lets them add. "See all event details" is view-only.' },
      { title: 'Family installs Google Calendar app', detail: 'Each family member installs Google Calendar on their phone. Sign in. The shared calendar appears automatically.' },
    ],
    bonus: 'On the phone: tap menu (three lines) → toggle the family calendar on. Tap "+" to add → at the bottom, pick the family calendar instead of the personal one.',
  },
  'mixed': {
    name: 'Cozi (free family app)',
    icon: Smartphone,
    whoFor: 'Mix of iPhone and Android in the family.',
    steps: [
      { title: 'Install Cozi', detail: 'Both App Store and Play Store. Free. The household creates ONE Cozi account and everyone signs in with it.' },
      { title: 'Add family members', detail: 'In Cozi: Family Members → add each person, color-code them.' },
      { title: 'Color-code the calendar', detail: 'Mom is purple, Dad is blue, kids are green and yellow. When you add an event, tap the family member it is for; the dot on the calendar matches.' },
      { title: 'Share recurring chores too', detail: 'Cozi has a shared shopping list, to-do list, and meal planner — all visible to the household.' },
      { title: 'Get the family used to checking it', detail: 'For the first month, look at Cozi every morning over coffee. Habit forms in 21 days.' },
    ],
    bonus: 'Cozi paid version ($30/year) removes ads and adds features. Free version is plenty for most families.',
  },
  'paper-too': {
    name: 'Both digital + a paper backup',
    icon: CalendarDays,
    whoFor: 'A grandparent in the household who prefers paper.',
    steps: [
      { title: 'Pick the digital tool first', detail: 'Use one of the options above (iCloud, Google, or Cozi) for the main calendar.' },
      { title: 'Buy a big wall calendar', detail: 'Sam\'s Club, Costco, Office Depot — a 12x18" wall calendar with big squares. About $10. Hang it in the kitchen.' },
      { title: 'Pick one person to sync each Sunday', detail: 'Five minutes Sunday evening: open the digital calendar → write the week\'s appointments on the wall calendar. Done.' },
      { title: 'Color-code on paper too', detail: 'Each person gets a color marker. Grandma sees who is doing what at a glance, no phone needed.' },
      { title: 'Snap a photo of the wall calendar weekly', detail: 'Phone photo of the wall calendar → text it to family who is not in the house. Bridges old and new.' },
    ],
    bonus: 'This is the highest-success setup for households where one person never wants to use a phone calendar. Forces a 5-minute weekly habit but everyone wins.',
  },
};

const SETUP_OPTIONS: { id: Setup; label: string; sub: string }[] = [
  { id: 'all-apple',  label: 'Everyone has an iPhone',  sub: 'Use Apple\'s built-in tools' },
  { id: 'all-google', label: 'Everyone uses Gmail',     sub: 'Use Google Calendar shared' },
  { id: 'mixed',      label: 'Mixed Apple and Android', sub: 'Use a free family app — Cozi' },
  { id: 'paper-too',  label: 'Some people want paper',  sub: 'Digital + wall calendar combo' },
];

export default function SharedFamilyCalendar() {
  const [setup, setSetup] = useState<Setup>('all-apple');
  const plan = PLANS[setup];
  const Icon = plan.icon;

  return (
    <>
      <SEOHead
        title="Shared Family Calendar Setup"
        description="One calendar everyone in the family can see — appointments, soccer practice, doctor visits. Apple, Google, mixed, or paper-friendly options. Free."
        path="/tools/shared-family-calendar"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-violet-50 via-background to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-violet-500/10 rounded-full">
                <CalendarDays className="h-8 w-8 text-violet-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Shared Family Calendar Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              One calendar everyone sees. Doctor appointments, school events, holidays — no more "I told you that already".
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Shared Family Calendar' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">What does your family use?</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {SETUP_OPTIONS.map(o => (
                  <button key={o.id} onClick={() => setSetup(o.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      setup === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{o.sub}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary bg-primary/5 mb-6">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <Badge className="mb-2">Recommended for you</Badge>
                  <p className="text-2xl font-bold">{plan.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{plan.whoFor}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Setup steps</p>
              <ol className="space-y-3 mb-5">
                {plan.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="text-muted-foreground mt-0.5">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-1">Pro move</p>
                <p className="text-xs text-blue-700 dark:text-blue-300">{plan.bonus}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">What to put on the family calendar</p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">•</span><span>Doctor and dentist appointments (so a spouse can drive if needed).</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Birthdays of family members and close friends.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>School events, sports practices, parent-teacher conferences.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Travel plans — flights, hotels, who-is-where.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Anniversaries, wedding/funeral dates that the whole family should remember.</span></li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/family-tech-roundtable" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Family Tech Roundtable</p>
                <p className="text-xs text-muted-foreground mt-0.5">Plan tech with the whole family.</p>
              </Link>
              <Link to="/tools/medication-reminder-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Medication Reminders</p>
                <p className="text-xs text-muted-foreground mt-0.5">Health reminders that ring through.</p>
              </Link>
              <Link to="/tools/tech-buddy-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Tech Buddy Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pair one helper with one senior.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: get the family in the habit of looking at the calendar Sunday night. Saves three "did you remember" texts a week.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
