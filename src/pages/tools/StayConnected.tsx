import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Heart, ChevronRight, ExternalLink, type LucideIcon,
  Phone, Users, BookOpen, Coffee, Globe, Music,
} from 'lucide-react';

interface Idea {
  name: string;
  icon: LucideIcon;
  cost: string;
  what: string;
  howToStart: string;
  link?: string;
  category: string;
}

const IDEAS: Idea[] = [
  {
    name: 'Friendly call program (free)',
    icon: Phone,
    cost: 'Free',
    category: 'One-on-one',
    what: 'A trained volunteer calls you weekly to chat. AARP Friendly Voice. The Institute on Aging Friendship Line. Both have served seniors for years.',
    howToStart: 'AARP: 1-888-281-0145. The Friendship Line: 1-800-971-0016. Either signs you up over the phone in 10 minutes.',
    link: 'https://www.ioaging.org/services/friendship-line',
  },
  {
    name: 'Daily check-in calls',
    icon: Phone,
    cost: 'Free',
    category: 'Safety + connection',
    what: 'Many counties run "are you OK" daily check-in calls for seniors. If you do not pick up, they alert a family member or paramedics.',
    howToStart: 'Call your county\'s Area Agency on Aging (find at eldercare.acl.gov) and ask about "daily check-in calls" or "telephone reassurance".',
    link: 'https://eldercare.acl.gov',
  },
  {
    name: 'Local senior center activities',
    icon: Coffee,
    cost: 'Free or low-cost',
    category: 'In-person',
    what: 'Most US senior centers run free morning coffee, exercise classes, lunches, card games, computer classes, day trips. Hugely under-used by people who would benefit.',
    howToStart: 'Search "[your town] senior center" or "[your county] senior center". Drop in any morning — no appointment usually needed.',
  },
  {
    name: 'Senior Planet (free online classes)',
    icon: Globe,
    cost: 'Free',
    category: 'Online community',
    what: 'AARP-backed online classes by Zoom — fitness, art, technology, current events. Live classes with chat. Real conversation, not pre-recorded videos.',
    howToStart: 'seniorplanet.org → "Sign up". Schedule of free classes is on the home page.',
    link: 'https://seniorplanet.org',
  },
  {
    name: 'GetSetUp (live online classes)',
    icon: Globe,
    cost: 'Free for many states',
    category: 'Online community',
    what: 'Live Zoom classes for older adults — taught by older adults. Cooking, photography, language, current events.',
    howToStart: 'getsetup.io → sign up with your zip code. Free in many states (NY, FL, CA, MA — list keeps growing).',
    link: 'https://www.getsetup.io',
  },
  {
    name: 'Marco Polo (video voicemail)',
    icon: Phone,
    cost: 'Free',
    category: 'Family',
    what: 'Send and receive short video messages with family. Easier than scheduling calls — they reply when they can. Like a video answering machine.',
    howToStart: 'App Store / Play Store → "Marco Polo". Sign up. Add family members from your contacts.',
    link: 'https://www.marcopolo.me',
  },
  {
    name: 'Book club via Zoom or library',
    icon: BookOpen,
    cost: 'Free',
    category: 'Hobby',
    what: 'Most public libraries host monthly book clubs by Zoom. Read the same book, discuss for an hour. New social connections without leaving the house.',
    howToStart: 'Visit your library website → "Programs and Events". Or join one through Reading Circles (readingcircles.com).',
  },
  {
    name: 'Volunteer Match (find local volunteer work)',
    icon: Users,
    cost: 'Free',
    category: 'Purpose + connection',
    what: 'Search by zip code, time you have, and interest. Filter for "good for seniors" — phone-based, library-based, school-based volunteering.',
    howToStart: 'volunteermatch.org → enter zip code. Most matches let you do an hour or two a week.',
    link: 'https://www.volunteermatch.org',
  },
  {
    name: 'Discord servers for hobbies',
    icon: Music,
    cost: 'Free',
    category: 'Online community',
    what: 'Knitting, classic cars, gardening, ham radio, family genealogy — every hobby has an active Discord with daily conversation. Real community, voice chat optional.',
    howToStart: 'Install "Discord" → search disboard.org for hobby servers and click "Join".',
    link: 'https://disboard.org',
  },
  {
    name: 'Eldercare.acl.gov locator',
    icon: Heart,
    cost: 'Free',
    category: 'One-stop',
    what: 'Federal directory of every aging service in your area — meals, transport, mental health support, friendly visitor programs. Run by US Department of Health and Human Services.',
    howToStart: 'eldercare.acl.gov → enter zip code → see every program in your county.',
    link: 'https://eldercare.acl.gov',
  },
];

const CATEGORIES = ['All', ...Array.from(new Set(IDEAS.map(i => i.category)))];

export default function StayConnected() {
  const [cat, setCat] = useState('All');

  const filtered = cat === 'All' ? IDEAS : IDEAS.filter(i => i.category === cat);

  return (
    <>
      <SEOHead
        title="Stay Connected"
        description="Free programs and tools to stay connected as a senior — friendly calls, daily check-ins, online classes, hobby groups, video voicemail. All real, all free or near-free."
        path="/tools/stay-connected"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-rose-50 via-background to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-rose-500/10 rounded-full">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Stay Connected</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Loneliness shortens lives. These ten free programs — calls, classes, visits, hobby groups — are the way back.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Stay Connected' }]} />

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
            {filtered.map(i => {
              const Icon = i.icon;
              return (
                <Card key={i.name} className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">{i.name}</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <Badge variant="outline">{i.cost}</Badge>
                          <Badge variant="outline">{i.category}</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{i.what}</p>
                    <p className="text-xs text-muted-foreground mb-2"><strong>How to start:</strong> {i.howToStart}</p>

                    {i.link && (
                      <a href={i.link} target="_blank" rel="noreferrer"
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
              <p className="text-sm font-semibold mb-2">If you are feeling overwhelmed</p>
              <p className="text-xs text-muted-foreground mb-3">
                Loneliness can shade into depression, especially after a loss or move. Talking to a doctor or counselor is a good move — Medicare and most insurance covers it. The 988 Suicide & Crisis Lifeline (call or text 988) is also there 24/7 for any emotional crisis.
              </p>
              <a href="https://988lifeline.org" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                988 Lifeline <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/grandparent-device-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Grandparent Device Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Set up a tablet that bridges family.</p>
              </Link>
              <Link to="/tools/family-tech-roundtable" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Family Tech Roundtable</p>
                <p className="text-xs text-muted-foreground mt-0.5">Plan tech help with the family.</p>
              </Link>
              <Link to="/tools/library-power-pack" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Library Power Pack</p>
                <p className="text-xs text-muted-foreground mt-0.5">Library tech and book clubs.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
