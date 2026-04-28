import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ChefHat, ChevronRight, ExternalLink, Heart, Sparkles, ScanLine,
  type LucideIcon, FileText, BookOpen, Globe, Leaf, Apple,
} from 'lucide-react';

type Category = 'all' | 'scan-and-share' | 'cookbook-builder' | 'web-recipe';

interface AppInfo {
  name: string;
  category: Exclude<Category, 'all'>;
  what: string;
  whoFor: string;
  cost: string;
  pros: string;
  cons: string;
  link: string;
  icon: LucideIcon;
}

const APPS: AppInfo[] = [
  {
    name: 'Apple Notes (Scan + Share)',
    category: 'scan-and-share',
    what: 'Built into every iPhone. Tap the camera icon in a note, point at the recipe card, and it saves a clean scan. Share the note with family with one tap.',
    whoFor: 'iPhone families wanting a free, no-extra-app way to capture Grandma\'s handwritten cards.',
    cost: 'Free (built in)',
    pros: 'Already on the phone. Auto-crops the page. Shared notes update for everyone the moment one person edits.',
    cons: 'Only works well across Apple devices. Search inside handwritten scans is limited.',
    link: 'https://support.apple.com/guide/iphone/scan-documents-iph2d5d97f30/ios',
    icon: Apple,
  },
  {
    name: 'Google Docs (Family Cookbook)',
    category: 'cookbook-builder',
    what: 'A shared Google Doc that becomes your living family cookbook. Anyone in the family can add a recipe, a photo, or a memory note about who first made it.',
    whoFor: 'Mixed-device families (iPhone + Android). Anyone wanting a printable book at the end.',
    cost: 'Free with a Google account',
    pros: 'Works on every phone and computer. Real-time edits. Print to PDF or use a service like Lulu to print a real bound cookbook.',
    cons: 'Plain layout unless you spend time formatting. No automatic recipe tools (timers, scaling).',
    link: 'https://docs.google.com',
    icon: FileText,
  },
  {
    name: 'Paprika Recipe Manager',
    category: 'cookbook-builder',
    what: 'A paid recipe app that holds the whole family cookbook in one place. Type in recipes, scan in cards (with the built-in camera tool), and pull recipes from any website.',
    whoFor: 'Serious home cooks who want one organized library, meal plans, and grocery lists.',
    cost: 'About 5 dollars one-time per device (iPhone, Android, or computer)',
    pros: 'No ads, no subscription. Syncs across the family for a small yearly fee. Scales recipes up or down.',
    cons: 'You pay per platform. Sharing across the family needs the optional cloud sync.',
    link: 'https://www.paprikaapp.com/',
    icon: BookOpen,
  },
  {
    name: 'Allrecipes (Family Cookbook feature)',
    category: 'cookbook-builder',
    what: 'The Allrecipes website lets you save your own family recipes alongside ones you find online, all in a personal cookbook on your account.',
    whoFor: 'Families already using Allrecipes for ideas who want a free home for handed-down recipes too.',
    cost: 'Free with an Allrecipes account',
    pros: 'Free. Works in any web browser. Mix Aunt Carol\'s meatloaf with new recipes you discover.',
    cons: 'Ads on the site can be loud. Not designed for scanning paper cards — you type recipes in.',
    link: 'https://www.allrecipes.com/',
    icon: ChefHat,
  },
  {
    name: 'Pestle',
    category: 'web-recipe',
    what: 'Free iPhone and iPad app that strips the long story and ad clutter off recipe websites and saves the clean recipe to your phone.',
    whoFor: 'Anyone tired of scrolling past life stories to reach the ingredient list.',
    cost: 'Free; optional Pestle Plus is about 3 dollars a month',
    pros: 'Clean, large-text recipe view. Read-aloud mode for hands-free cooking. Imports from any recipe site.',
    cons: 'iPhone and iPad only — no Android version. Some features need the paid tier.',
    link: 'https://pestle.app/',
    icon: Globe,
  },
  {
    name: 'HappyCow',
    category: 'web-recipe',
    what: 'Finder app for vegetarian and vegan-friendly restaurants and grocery stores nearby. Useful when a family recipe needs a meatless swap or an ingredient you cannot find locally.',
    whoFor: 'Vegetarian, vegan, or plant-curious family members. Travelers looking for meatless meals.',
    cost: 'Free to browse; full app is about 4 dollars one-time',
    pros: 'Huge worldwide database. User reviews and photos. Filters for vegan, vegetarian, gluten-free.',
    cons: 'Restaurant focus, not recipes. Smaller towns have fewer listings.',
    link: 'https://www.happycow.net/',
    icon: Leaf,
  },
];

const CATEGORIES: { id: Category; label: string; icon: LucideIcon }[] = [
  { id: 'all',              label: 'Show all',          icon: Sparkles },
  { id: 'scan-and-share',   label: 'Scan paper cards',  icon: ScanLine },
  { id: 'cookbook-builder', label: 'Family cookbook',   icon: BookOpen },
  { id: 'web-recipe',       label: 'Web recipe helpers', icon: Globe },
];

export default function FamilyRecipeApp() {
  const [cat, setCat] = useState<Category>('all');
  const filtered = cat === 'all' ? APPS : APPS.filter(a => a.category === cat);

  return (
    <>
      <SEOHead
        title="Digitize Family Recipes — Apps to Save Grandma's Cookbook"
        description="Phone-scan handwritten recipe cards and build a shared family cookbook. Honest cost, pros, cons, and links for Apple Notes, Google Docs, Paprika, Allrecipes, Pestle, and HappyCow."
        path="/tools/family-recipe-app"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-rose-50 via-background to-amber-50 dark:from-rose-950/20 dark:to-amber-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-rose-500/10 rounded-full">
                <ChefHat className="h-8 w-8 text-rose-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Digitize Your Family Recipes</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Those handwritten index cards in Grandma's tin are family heirlooms. Paper fades, ink smears, and a single
              kitchen spill can erase a generation of cooking. Scan them this weekend — your future grandchildren will thank you.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Family Recipe Apps' }]} />

          <Card className="border-rose-200 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <Heart className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm mb-1">Why scan them now</p>
                <p className="text-sm text-muted-foreground">
                  A recipe card is a handwritten letter from a parent or grandparent. Once it is in your phone, it survives
                  spills, moves, and the years. Spend one afternoon scanning the tin — then share the file with every cousin.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2 mb-6">
            {CATEGORIES.map(c => {
              const Icon = c.icon;
              const active = cat === c.id;
              return (
                <button key={c.id} onClick={() => setCat(c.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                    active ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-border hover:border-primary/50 hover:bg-primary/5'
                  }`}>
                  <Icon className="h-3.5 w-3.5" />
                  {c.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-3 mb-6">
            {filtered.map(app => {
              const Icon = app.icon;
              return (
                <Card key={app.name} className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                      <div className="flex gap-2 items-start">
                        <Icon className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-base">{app.name}</p>
                          <p className="text-sm text-muted-foreground mt-0.5">{app.what}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="shrink-0">{app.cost}</Badge>
                    </div>

                    <p className="text-xs text-muted-foreground mb-3"><strong>Best for:</strong> {app.whoFor}</p>

                    <div className="grid sm:grid-cols-2 gap-2 mb-3">
                      <div className="p-2 rounded bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 text-xs">
                        <strong className="text-emerald-700 dark:text-emerald-300">Pros:</strong>{' '}
                        <span className="text-emerald-700 dark:text-emerald-300">{app.pros}</span>
                      </div>
                      <div className="p-2 rounded bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-xs">
                        <strong className="text-amber-700 dark:text-amber-300">Cons:</strong>{' '}
                        <span className="text-amber-700 dark:text-amber-300">{app.cons}</span>
                      </div>
                    </div>

                    <a href={app.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                      Visit {app.name} <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A weekend plan to save the recipe tin</p>
              <ol className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary shrink-0">1.</span><span>Sit down at a kitchen table with good light. Spread the cards out.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">2.</span><span>Open Apple Notes (iPhone) or Google Drive (Android). Scan each card one at a time.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">3.</span><span>Name the file after the recipe and the cook — "Grandma Rose Apple Pie".</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">4.</span><span>Drop scans into a shared folder, then type the favorites into Google Docs or Paprika so they are searchable later.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">5.</span><span>Send the folder link to every aunt, uncle, and cousin. Ask each one to add one of their own.</span></li>
              </ol>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/document-scanner-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Document Scanner Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Get sharper scans of paper records.</p>
              </Link>
              <Link to="/tools/photo-library-tips" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Photo Library Tips</p>
                <p className="text-xs text-muted-foreground mt-0.5">Organize photos and scans.</p>
              </Link>
              <Link to="/grandparent-device-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Grandparent Device Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Make the phone friendlier first.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: write the cook's name and the year next to each scanned recipe. The story is half of why the recipe matters.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
