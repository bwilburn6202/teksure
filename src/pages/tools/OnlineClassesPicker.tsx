import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  GraduationCap, ExternalLink, type LucideIcon,
  Globe, Library, Users, Eye, Award, BookOpen, School, Video,
} from 'lucide-react';

interface Service {
  name: string;
  icon: LucideIcon;
  cost: string;
  whoFits: string;
  howToStart: string;
  link?: string;
  category: string;
}

const SERVICES: Service[] = [
  {
    name: 'Coursera (audit free)', icon: GraduationCap, cost: 'Free to audit, paid for certificate', category: 'University courses',
    whoFits: 'Anyone curious about university-level subjects — Yale, Stanford, Duke, Google career courses. Audit lets you watch every lecture and read every page at no cost.',
    howToStart: 'coursera.org → search a topic → click "Enroll" → choose "Audit the course" link below the paid option. Some courses hide it — look closely.',
    link: 'https://www.coursera.org',
  },
  {
    name: 'edX (audit free)', icon: Award, cost: 'Free to audit, paid for certificate', category: 'University courses',
    whoFits: 'Learners who want Harvard, MIT, Berkeley content. Same audit model as Coursera — full lectures and readings free, only the certificate costs money.',
    howToStart: 'edx.org → pick a course → click "Enroll" → choose the free audit track. Most courses run for 4-12 weeks.',
    link: 'https://www.edx.org',
  },
  {
    name: 'Khan Academy', icon: BookOpen, cost: 'Free, no catch', category: 'General learning',
    whoFits: 'Anyone brushing up on math, history, economics, art, or computer basics. Short video lessons with quick practice quizzes. No account needed to watch.',
    howToStart: 'khanacademy.org → pick a subject → start watching. Make a free account to save progress.',
    link: 'https://www.khanacademy.org',
  },
  {
    name: 'Senior Planet (AARP-backed)', icon: Users, cost: 'Free', category: 'Senior-focused',
    whoFits: 'Adults 60+ who want live Zoom classes with other seniors. Fitness, art, technology, current events — taught by trained instructors. Real chat, not pre-recorded.',
    howToStart: 'seniorplanet.org → "Sign up" → schedule appears on the home page. Pick a class and click the Zoom link.',
    link: 'https://seniorplanet.org',
  },
  {
    name: 'GetSetUp', icon: Video, cost: 'Free in many states', category: 'Senior-focused',
    whoFits: 'Older adults — taught by older adults. Cooking, photography, language, technology, current events. Interactive Zoom format with break-out groups.',
    howToStart: 'getsetup.io → sign up with your zip code. Free in NY, FL, CA, MA, and a growing list — pricing shows after sign-up.',
    link: 'https://www.getsetup.io',
  },
  {
    name: 'Osher Lifelong Learning Institutes', icon: School, cost: 'Sliding scale, often 50-150 dollars per term', category: 'In-person',
    whoFits: 'Seniors who want in-person classes on a college campus. 125+ Osher Institutes across the US — history, literature, science, current events. Peer-led discussions.',
    howToStart: 'Search "Osher Lifelong Learning [your state]" or visit the Bernard Osher Foundation site to find the nearest institute.',
    link: 'https://www.osherfoundation.org',
  },
  {
    name: 'Local community college', icon: Library, cost: 'Free for seniors 60+ in many states', category: 'In-person or hybrid',
    whoFits: 'Adults 60+ in states like NY, NJ, FL, TX, IL, NC, VA, GA — many waive tuition for seniors auditing classes. Real college courses, real instructors.',
    howToStart: 'Call the registrar at your nearest community college and ask about "senior tuition waiver" or "60+ audit policy". Rules vary by state and school.',
  },
  {
    name: 'Hadley Institute', icon: Eye, cost: 'Free', category: 'Vision-impaired',
    whoFits: 'Adults with blindness or low vision. Free workshops on daily living, technology, braille, and adjustment to vision loss. By phone, video, or large print.',
    howToStart: 'hadley.edu → "Workshops" → pick a topic. Or call 1-800-323-4238 to enroll over the phone.',
    link: 'https://hadley.edu',
  },
  {
    name: 'MasterClass', icon: Globe, cost: 'Paid (about 120 dollars per year)', category: 'Paid premium',
    whoFits: 'People who want polished, cinematic classes from celebrities and experts — Gordon Ramsay on cooking, Annie Leibovitz on photography. Inspiring more than instructional.',
    howToStart: 'masterclass.com → annual subscription. Watch on TV, phone, or laptop. Cancel anytime through the account page.',
    link: 'https://www.masterclass.com',
  },
];

const CATEGORIES = ['All', ...Array.from(new Set(SERVICES.map(s => s.category)))];

export default function OnlineClassesPicker() {
  const [cat, setCat] = useState('All');

  const filtered = cat === 'All' ? SERVICES : SERVICES.filter(s => s.category === cat);

  return (
    <>
      <SEOHead
        title="Online Classes Picker"
        description="Free and low-cost online classes for seniors — Coursera, edX, Khan Academy, Senior Planet, GetSetUp, Osher, community college, Hadley, MasterClass. Honest cost and fit notes."
        path="/tools/online-classes-picker"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-indigo-50 via-background to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-indigo-500/10 rounded-full">
                <GraduationCap className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Online Classes Picker</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Eight ways to keep learning at any age — most free, all real. From Harvard lectures to live Zoom art classes for seniors.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Online Classes Picker' }]} />

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
                    <p className="text-sm text-muted-foreground mb-2"><strong>Who it fits:</strong> {s.whoFits}</p>
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

          <Card className="border-border bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Honest note on state college tuition</p>
              <p className="text-xs text-muted-foreground">
                Most US states waive or reduce tuition for residents 60 or 65+ at public colleges and universities. The rules vary widely — some cover for-credit classes, some only audit, some apply only when seats are open. Call your state public college registrar and ask about the "senior citizen tuition waiver". This is one of the most under-used benefits in the country.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/library-power-pack" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Library Power Pack</p>
                <p className="text-xs text-muted-foreground mt-0.5">Free library learning and ebooks.</p>
              </Link>
              <Link to="/tools/stay-connected" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Stay Connected</p>
                <p className="text-xs text-muted-foreground mt-0.5">Calls, classes, and hobby groups.</p>
              </Link>
              <Link to="/tools/free-resources" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Free Resources</p>
                <p className="text-xs text-muted-foreground mt-0.5">Programs that cost nothing.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
