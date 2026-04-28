import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  HeartHandshake, ExternalLink, type LucideIcon,
  Users, MessageCircle, Calendar, Stethoscope, MapPin, ClipboardList,
} from 'lucide-react';

interface Service {
  name: string;
  icon: LucideIcon;
  cost: string;
  what: string;
  howToStart: string;
  link?: string;
  category: string;
}

const SERVICES: Service[] = [
  {
    name: 'Lotsa Helping Hands',
    icon: Calendar,
    cost: 'Free',
    category: 'Coordinate care',
    what: 'A shared calendar for family and friends helping a parent. Sign up for meals, rides to the doctor, lawn care, sitting-with-Mom shifts. Removes the awkward "who is doing what" group texts.',
    howToStart: 'lotsahelpinghands.com → "Start a Community" → invite siblings, neighbors, the church group. Anyone with the link can claim a task.',
    link: 'https://lotsahelpinghands.com',
  },
  {
    name: 'CaringBridge',
    icon: MessageCircle,
    cost: 'Free (donation supported)',
    category: 'Share updates',
    what: 'A private health-update site for one parent. Post one update — diagnosis, surgery results, hospital discharge — and the whole extended family sees it. Cuts repeat phone calls in half.',
    howToStart: 'caringbridge.org → "Start a CaringBridge Site" → fill in the parent\'s first name and the situation. Share the link with family by text or email.',
    link: 'https://www.caringbridge.org',
  },
  {
    name: 'Carely',
    icon: Users,
    cost: 'Paid (about 10 dollars per month per family)',
    category: 'Family caregiving',
    what: 'A private family group chat built for caregiving — medication notes, doctor visit summaries, photos, mood check-ins. Keeps caregiving conversations out of the regular family thread.',
    howToStart: 'App Store / Play Store → "Carely" → start a free trial → invite siblings and the parent. One person handles billing.',
    link: 'https://www.carely.com',
  },
  {
    name: 'CircleOf',
    icon: HeartHandshake,
    cost: 'Free',
    category: 'Family caregiving',
    what: 'A free caregiving app that combines a shared task list, group chat, and a library of how-to articles for adult children new to caregiving. Built by AARP-backed partners.',
    howToStart: 'App Store / Play Store → "CircleOf" → create a circle for your parent → invite family by phone number.',
    link: 'https://www.circleof.com',
  },
  {
    name: 'Heartwise (blood pressure tracking)',
    icon: Stethoscope,
    cost: 'Free (paid upgrade for unlimited history)',
    category: 'Health tracking',
    what: 'A simple blood pressure and pulse log your parent fills in, then exports to a PDF for the doctor. You can be added as a viewer so you see readings from across the country.',
    howToStart: 'App Store → "Heartwise" → enter morning and evening readings → tap "Share" to email the report to you or the doctor.',
    link: 'https://apps.apple.com/us/app/heartwise-blood-pressure/id388911215',
  },
  {
    name: 'Eldercare Locator',
    icon: MapPin,
    cost: 'Free',
    category: 'Find services',
    what: 'The federal directory of every aging service in your parent\'s county — meals on wheels, transport, adult day programs, in-home aides, legal help. Run by the US Administration for Community Living.',
    howToStart: 'eldercare.acl.gov → enter the parent\'s zip code → see local programs. Or call 1-800-677-1116, weekdays 9am-8pm Eastern.',
    link: 'https://eldercare.acl.gov',
  },
];

const CATEGORIES = ['All', ...Array.from(new Set(SERVICES.map(s => s.category)))];

export default function HomeCareAppsForFamily() {
  const [cat, setCat] = useState('All');

  const filtered = cat === 'All' ? SERVICES : SERVICES.filter(s => s.category === cat);

  return (
    <>
      <SEOHead
        title="Home Care Apps for Family"
        description="Six caregiver apps and services for adult children helping aging parents — Lotsa Helping Hands, CaringBridge, Carely, CircleOf, Heartwise, Eldercare Locator. Free and paid options."
        path="/tools/home-care-apps-for-family"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-rose-50 via-background to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-rose-500/10 rounded-full">
                <HeartHandshake className="h-8 w-8 text-rose-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Home Care Apps for Family</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Six trusted apps and services that help adult children coordinate care for an aging parent — without burning out the family group text.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Home Care Apps for Family' }]} />

          <div className="flex flex-wrap gap-2 mb-6">
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  cat === c ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-border hover:border-primary/50 hover:bg-primary/5'
                }`}>
                {c}
              </button>
            ))}
          </div>

          <div className="space-y-3 mb-6">
            {filtered.map(s => {
              const Icon = s.icon;
              return (
                <Card key={s.name} className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">{s.name}</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <Badge variant="outline">{s.cost}</Badge>
                          <Badge variant="outline">{s.category}</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{s.what}</p>
                    <p className="text-xs text-muted-foreground mb-2"><strong>How to start:</strong> {s.howToStart}</p>

                    {s.link && (
                      <a href={s.link} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                        Visit website <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-border bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A note on which to pick first</p>
              <p className="text-xs text-muted-foreground mb-3">
                If a parent had a fall or new diagnosis this week, start with CaringBridge to update everyone at once, then add Lotsa Helping Hands so neighbors and church friends can sign up to bring meals. CircleOf is the next step once siblings want a daily caregiving chat. Eldercare Locator is the call to make if you need professional help — meals, rides, an aide.
              </p>
              <a href="https://eldercare.acl.gov" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                Eldercare Locator <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/family-tech-roundtable" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Family Tech Roundtable</p>
                <p className="text-xs text-muted-foreground mt-0.5">Plan tech help with the family.</p>
              </Link>
              <Link to="/tools/tech-buddy-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Tech Buddy Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pair a parent with a regular helper.</p>
              </Link>
              <Link to="/tools/account-after-loss" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Account After Loss</p>
                <p className="text-xs text-muted-foreground mt-0.5">Handle accounts after a death.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
