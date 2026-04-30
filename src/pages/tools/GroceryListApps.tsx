import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, ChevronRight, ExternalLink, Check, X, Mic, Users } from 'lucide-react';

interface ListApp {
  name: string;
  cost: string;
  whoFits: string;
  pros: string[];
  cons: string[];
  link: string;
  linkLabel: string;
}

const APPS: ListApp[] = [
  {
    name: 'Apple Reminders',
    cost: 'Free',
    whoFits: 'iPhone households where everyone has Apple devices.',
    pros: ['Built-in — no download needed.', 'Syncs across iPhone, iPad, and Mac through iCloud.', 'Voice entry through Siri ("Hey Siri, add milk to the grocery list").', 'Share a list with a spouse in two taps.'],
    cons: ['Does not work for family members on Android.', 'Plain look — no photos of items.'],
    link: 'https://support.apple.com/guide/reminders/welcome/mac',
    linkLabel: 'Apple Reminders help',
  },
  {
    name: 'Google Keep',
    cost: 'Free',
    whoFits: 'Mixed-device households (one iPhone, one Android, one tablet).',
    pros: ['Works on iPhone, Android, and any computer browser.', 'Voice entry on Android ("Hey Google, add eggs to my shopping list").', 'Share a list with anyone who has a Google account.', 'Color-code lists for groceries, hardware store, pharmacy.'],
    cons: ['Layout is more notes-style than checklist-style.', 'No aisle sorting (produce, dairy, frozen) by default.'],
    link: 'https://support.google.com/keep',
    linkLabel: 'Google Keep help',
  },
  {
    name: 'AnyList',
    cost: 'Free for basics; AnyList Complete is 12 dollars per year for family sharing.',
    whoFits: 'Households that want a polished, grocery-focused list with auto-sorting by aisle.',
    pros: ['Auto-sorts items by store aisle (produce together, dairy together).', 'Saves favorite items so you tap "milk" instead of typing it.', 'Share lists between spouses, adult kids, and caregivers.', 'Voice entry through Siri shortcuts.', 'Recipes and meal plans roll into the list.'],
    cons: ['Sharing across devices needs the paid plan.', 'A couple of menus to learn at the start.'],
    link: 'https://www.anylist.com/',
    linkLabel: 'Visit AnyList',
  },
  {
    name: 'Out of Milk',
    cost: 'Free with ads; ad-free upgrade is a one-time 5 dollars.',
    whoFits: 'Anyone who wants a no-frills shared list without a learning curve.',
    pros: ['Big buttons and large text — friendly for older eyes.', 'Three lists in one app: shopping, pantry, and to-do.', 'Share a list with family by sending an invite link.', 'Tap items to check off in-store; they disappear from the active list.'],
    cons: ['Banner ads on the free version.', 'Pantry feature can feel like extra work if you only want a basic list.'],
    link: 'https://www.outofmilk.com/',
    linkLabel: 'Visit Out of Milk',
  },
  {
    name: 'Cozi',
    cost: 'Free; Cozi Gold is 30 dollars per year for extras.',
    whoFits: 'Whole-household coordination — calendar, grocery list, and to-dos in one app.',
    pros: ['Shared family calendar built right in.', 'One shopping list everyone in the household sees in real time.', 'Color-coded by family member.', 'Voice entry through Siri or Google Assistant.'],
    cons: ['More features than a pure grocery app — can feel busy.', 'The calendar is the strongest piece; the list is good, not best-in-class.'],
    link: 'https://www.cozi.com/',
    linkLabel: 'Visit Cozi',
  },
];

export default function GroceryListApps() {
  return (
    <>
      <SEOHead
        title="Best Shared Grocery List Apps for Seniors and Families"
        description="Five grocery and shopping list apps that share between spouses, take voice entry, and check off in-store. Apple Reminders, Google Keep, AnyList, Out of Milk, and Cozi compared in plain English."
        path="/tools/grocery-list-apps"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-emerald-50 via-background to-lime-50 dark:from-emerald-950/20 dark:to-lime-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <ShoppingCart className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Best Shared Grocery List Apps</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Five picks for families who want one list both spouses can see, edit by voice, and check off in the aisle.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Grocery List Apps' }]} />

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">What to look for</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2"><Users className="h-4 w-4 text-primary shrink-0 mt-0.5" /><span><strong>Sharing with a spouse:</strong> both phones see the same list, in real time. Add bread at home, your spouse sees it at the store.</span></li>
                <li className="flex gap-2"><Mic className="h-4 w-4 text-primary shrink-0 mt-0.5" /><span><strong>Voice entry:</strong> say "Hey Siri, add milk to the grocery list" while your hands are full at the fridge.</span></li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /><span><strong>Checking off in-store:</strong> tap an item once and it grays out or disappears, so you do not double-buy.</span></li>
              </ul>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {APPS.map(app => (
              <Card key={app.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-lg">{app.name}</p>
                    <Badge variant="outline" className="shrink-0">{app.cost}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Who it fits:</strong> {app.whoFits}</p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-3">
                    <div className="p-3 rounded bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900">
                      <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-1.5">Pros</p>
                      <ul className="space-y-1">
                        {app.pros.map((p, i) => (
                          <li key={i} className="flex gap-1.5 text-xs text-emerald-900 dark:text-emerald-100">
                            <Check className="h-3.5 w-3.5 shrink-0 mt-0.5" /><span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 rounded bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900">
                      <p className="text-xs font-semibold text-rose-700 dark:text-rose-300 mb-1.5">Cons</p>
                      <ul className="space-y-1">
                        {app.cons.map((c, i) => (
                          <li key={i} className="flex gap-1.5 text-xs text-rose-900 dark:text-rose-100">
                            <X className="h-3.5 w-3.5 shrink-0 mt-0.5" /><span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a href={app.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    {app.linkLabel} <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/dictation-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Dictation Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Talk to your phone instead of typing.</p>
              </Link>
              <Link to="/tools/shared-family-calendar" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Shared Family Calendar</p>
                <p className="text-xs text-muted-foreground mt-0.5">One calendar the whole household sees.</p>
              </Link>
              <Link to="/tools/senior-friendly-apps" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Senior-Friendly Apps</p>
                <p className="text-xs text-muted-foreground mt-0.5">20 apps worth installing.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: pick one app, set it up with your spouse, and use it for two weeks before switching. Switching apps mid-month leaves items stranded.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
