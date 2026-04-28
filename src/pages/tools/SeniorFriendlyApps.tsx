import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sparkles, ChevronRight, ExternalLink, Apple, Smartphone,
  type LucideIcon, BookOpen, Heart, Users, ShoppingCart, MessageCircle,
  ImageIcon, Map, Music, Brain,
} from 'lucide-react';

type Category = 'all' | 'communication' | 'health' | 'reading' | 'photos' | 'shopping' | 'getting-around' | 'fun-and-mind';

interface AppInfo {
  name: string;
  category: Exclude<Category, 'all'>;
  what: string;
  whoFor: string;
  cost: string;
  iphone: string;
  android: string;
  watchOut?: string;
}

const APPS: AppInfo[] = [
  {
    name: 'FaceTime',
    category: 'communication',
    what: 'Video calls to other Apple devices, free.',
    whoFor: 'Anyone with an iPhone whose family also has iPhones or Macs.',
    cost: 'Free',
    iphone: 'Pre-installed',
    android: 'Not available — use Google Meet instead',
  },
  {
    name: 'Google Meet',
    category: 'communication',
    what: 'Video calls that work on iPhone, Android, and computers.',
    whoFor: 'Anyone with a mixed-family setup (one Android grandkid, one iPhone aunt).',
    cost: 'Free',
    iphone: 'App Store → "Google Meet"',
    android: 'Pre-installed on most Androids',
  },
  {
    name: 'WhatsApp',
    category: 'communication',
    what: 'Free voice and video calls plus messaging — works internationally with no roaming charges.',
    whoFor: 'Anyone with family abroad. Free over Wi-Fi or cellular data.',
    cost: 'Free',
    iphone: 'App Store → "WhatsApp Messenger"',
    android: 'Play Store → "WhatsApp Messenger"',
  },
  {
    name: 'Marco Polo',
    category: 'communication',
    what: 'Send short video messages to family members; they reply when they can. Like a video answering machine.',
    whoFor: 'Family members in different time zones. Easier than scheduling calls.',
    cost: 'Free for basic features',
    iphone: 'App Store → "Marco Polo"',
    android: 'Play Store → "Marco Polo"',
  },
  {
    name: 'CVS / Walgreens / Rite Aid',
    category: 'health',
    what: 'Auto-refill prescriptions, message the pharmacist, see all your medications in one list.',
    whoFor: 'Anyone with regular prescriptions.',
    cost: 'Free',
    iphone: 'App Store → search the store name',
    android: 'Play Store → search the store name',
  },
  {
    name: 'Medisafe',
    category: 'health',
    what: 'Medication reminders that actually work — alerts even when phone is on silent.',
    whoFor: 'Anyone managing 2 or more daily medications.',
    cost: 'Free with ads, $5/mo to remove ads',
    iphone: 'App Store → "Medisafe"',
    android: 'Play Store → "Medisafe"',
  },
  {
    name: 'MyChart',
    category: 'health',
    what: 'Hospital and doctor patient portal — lab results, appointments, secure messaging with your doctor.',
    whoFor: 'Anyone whose hospital uses Epic (most large US health systems).',
    cost: 'Free',
    iphone: 'App Store → "MyChart"',
    android: 'Play Store → "MyChart"',
  },
  {
    name: 'Libby',
    category: 'reading',
    what: 'Free e-books and audiobooks from your local library. Sign in once with your library card.',
    whoFor: 'Readers — saves $10–$15 per book on Kindle/Audible.',
    cost: 'Free with a library card',
    iphone: 'App Store → "Libby, by OverDrive"',
    android: 'Play Store → "Libby, by OverDrive"',
  },
  {
    name: 'Kindle',
    category: 'reading',
    what: 'Read books bought from Amazon. The text size goes very large.',
    whoFor: 'Frequent book readers; works on phone, tablet, and Kindle device.',
    cost: 'Free app; books are paid',
    iphone: 'App Store → "Amazon Kindle"',
    android: 'Play Store → "Amazon Kindle"',
  },
  {
    name: 'Audible',
    category: 'reading',
    what: 'Listen to books read aloud. One free book per month with the membership.',
    whoFor: 'Long drives, knitting, easier-on-the-eyes reading.',
    cost: '$15/month',
    iphone: 'App Store → "Audible"',
    android: 'Play Store → "Audible"',
  },
  {
    name: 'Google Photos',
    category: 'photos',
    what: 'Backs up every photo to the cloud automatically. Search by face, place, or thing ("show me dog photos from 2019").',
    whoFor: 'Anyone with an Android phone or who wants their photos searchable.',
    cost: 'Free for 15 GB',
    iphone: 'App Store → "Google Photos"',
    android: 'Pre-installed',
  },
  {
    name: 'iCloud Photos',
    category: 'photos',
    what: 'Same idea on iPhone — built into the Photos app. Backs up automatically.',
    whoFor: 'Anyone with an iPhone, iPad, or Mac.',
    cost: 'Free for 5 GB; 50 GB is $1/mo',
    iphone: 'Settings → your name → iCloud → Photos → ON',
    android: 'Not available',
  },
  {
    name: 'Instacart',
    category: 'shopping',
    what: 'Groceries delivered same-day from your local store.',
    whoFor: 'When driving or carrying is hard.',
    cost: 'Free app; $4–$10 delivery fee per order',
    iphone: 'App Store → "Instacart"',
    android: 'Play Store → "Instacart"',
    watchOut: 'Watch the prices — Instacart prices are sometimes higher than in-store. Compare before you order.',
  },
  {
    name: 'Walmart',
    category: 'shopping',
    what: 'Groceries and household goods at in-store prices, with free pickup or delivery for Walmart+ members.',
    whoFor: 'Tighter budgets — usually cheaper than Instacart.',
    cost: 'Free app; Walmart+ is $13/mo',
    iphone: 'App Store → "Walmart"',
    android: 'Play Store → "Walmart"',
  },
  {
    name: 'Amazon',
    category: 'shopping',
    what: 'Almost anything delivered. Voice search ("Alexa, order more paper towels") if you have an Echo.',
    whoFor: 'Things you cannot drive out for, or weird-size batteries.',
    cost: 'Free app; Prime is $15/mo',
    iphone: 'App Store → "Amazon Shopping"',
    android: 'Play Store → "Amazon Shopping"',
  },
  {
    name: 'Google Maps',
    category: 'getting-around',
    what: 'Driving, walking, transit directions. Better real-time traffic than the built-in apps.',
    whoFor: 'Anyone who drives or takes the bus.',
    cost: 'Free',
    iphone: 'App Store → "Google Maps"',
    android: 'Pre-installed',
  },
  {
    name: 'Uber / Lyft',
    category: 'getting-around',
    what: 'Tap a button, a car comes to you. Pay through the app — no fumbling for cash.',
    whoFor: 'When driving is not an option.',
    cost: 'Pay per ride — usually $10–$25 in town',
    iphone: 'App Store → "Uber" or "Lyft"',
    android: 'Play Store → "Uber" or "Lyft"',
  },
  {
    name: 'Transit',
    category: 'getting-around',
    what: 'Real-time bus and train arrival times for most US cities.',
    whoFor: 'Anyone using public transit.',
    cost: 'Free',
    iphone: 'App Store → "Transit"',
    android: 'Play Store → "Transit"',
  },
  {
    name: 'Spotify',
    category: 'fun-and-mind',
    what: 'Stream millions of songs and podcasts. Free with ads, or $11/mo without.',
    whoFor: 'Music lovers. Plays from any phone or smart speaker, with a huge catalog.',
    cost: 'Free with ads or $11/mo',
    iphone: 'App Store → "Spotify"',
    android: 'Play Store → "Spotify"',
  },
  {
    name: 'Lumosity',
    category: 'fun-and-mind',
    what: 'Brain games designed by neuroscientists. Memory, attention, problem solving.',
    whoFor: 'Anyone who wants to keep their mind sharp.',
    cost: 'Free with limited games; $13/mo for full',
    iphone: 'App Store → "Lumosity"',
    android: 'Play Store → "Lumosity"',
  },
];

const CATEGORIES: { id: Category; label: string; icon: LucideIcon }[] = [
  { id: 'all',            label: 'Show all',         icon: Sparkles },
  { id: 'communication',  label: 'Talking to family', icon: MessageCircle },
  { id: 'health',         label: 'Health',           icon: Heart },
  { id: 'reading',        label: 'Reading',          icon: BookOpen },
  { id: 'photos',         label: 'Photos',           icon: ImageIcon },
  { id: 'shopping',       label: 'Shopping',         icon: ShoppingCart },
  { id: 'getting-around', label: 'Getting around',   icon: Map },
  { id: 'fun-and-mind',   label: 'Fun and the mind', icon: Brain },
];

export default function SeniorFriendlyApps() {
  const [cat, setCat] = useState<Category>('all');
  const filtered = cat === 'all' ? APPS : APPS.filter(a => a.category === cat);

  return (
    <>
      <SEOHead
        title="Senior-Friendly Apps Roundup"
        description="20 apps actually worth installing on a senior's phone — communication, health, reading, photos, shopping, getting around, and fun. Honest costs, plain-English what-it-does, and a watch-out when needed."
        path="/tools/senior-friendly-apps"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-orange-50 via-background to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-orange-500/10 rounded-full">
                <Sparkles className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Senior-Friendly Apps Roundup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              20 apps actually worth installing — with honest costs, what each one is for, and any catches.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Senior-Friendly Apps' }]} />

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
            {filtered.map(app => (
              <Card key={app.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <div>
                      <p className="font-semibold text-base">{app.name}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{app.what}</p>
                    </div>
                    <Badge variant="outline" className="shrink-0">{app.cost}</Badge>
                  </div>

                  <p className="text-xs text-muted-foreground mb-3"><strong>Best for:</strong> {app.whoFor}</p>

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
              <p className="text-sm font-semibold mb-2">How to install an app safely</p>
              <ol className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary shrink-0">1.</span><span>Only download from the official App Store (iPhone) or Play Store (Android). Never sideload from a website link.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">2.</span><span>Match the spelling exactly — scammers create lookalike apps with similar names.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">3.</span><span>Look for high download counts (millions) and recent updates. New apps with few downloads are riskier.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">4.</span><span>When the app asks for permissions (camera, contacts, location), grant only what makes sense for what the app does.</span></li>
              </ol>
              <a href="https://teksure.com/tools/app-permissions" className="hidden" />
              <Link to="/tools/app-permissions"
                className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline">
                App Permission Guide <ChevronRight className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/app-recommender" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">App Recommender</p>
                <p className="text-xs text-muted-foreground mt-0.5">Personalized picks by interest.</p>
              </Link>
              <Link to="/tools/app-cleanup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">App Cleanup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Delete the apps you do not use.</p>
              </Link>
              <Link to="/tools/free-resource-hub" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Free Resource Hub</p>
                <p className="text-xs text-muted-foreground mt-0.5">More free tools and services.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: install one app at a time, use it for a week, then add the next. Easier on the brain.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
