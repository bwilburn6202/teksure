import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const APPS = [
  { name: 'AARP Create the Good', cost: 'FREE', best: 'Pre-screened opportunities for 50+. Local volunteer search by zip code. Calls and emails about events.', good: 'createthegood.aarp.org' },
  { name: 'VolunteerMatch', cost: 'FREE', best: 'Biggest volunteer database. 100,000+ opportunities. Filter by virtual, drop-in, weekly.', good: 'volunteermatch.org' },
  { name: 'Idealist', cost: 'FREE', best: 'Best for nonprofit jobs and bigger commitments — board positions, ongoing advocacy.', good: 'idealist.org' },
  { name: 'Be My Eyes', cost: 'FREE', best: 'Volunteer remotely from your couch. Blind users video-call you when they need a sighted helper to read a label or expiration date. 5-minute calls.', good: 'Iconic app, makes a real difference.' },
  { name: 'Catchafire', cost: 'FREE', best: 'Skills-based — share your professional skills (accounting, design, HR) with nonprofits.', good: 'Best for retired professionals.' },
  { name: 'GiveGab / Bloomerang Volunteer', cost: 'FREE', best: 'Local nonprofits use these to recruit. Search "[your city] volunteer".', good: 'Hyper-local options.' },
  { name: 'Senior Corps (AmeriCorps Seniors)', cost: 'FREE, sometimes paid stipend', best: 'Foster Grandparent and Senior Companion programs. Make a real commitment, get $200-500/mo stipend in some programs.', good: 'americorps.gov/serve/americorps-seniors' },
];

export default function VolunteerApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Volunteer Apps for Seniors — Find Meaningful Ways to Help | TekSure" description="Retired and looking for purpose? AARP, VolunteerMatch, Be My Eyes, AmeriCorps Seniors. Plain-English guide to finding the right volunteer match." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Volunteer Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Find meaningful work — from your couch or at your local library.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why this matters</h2>
            <p className="text-sm">Studies consistently show retirees who volunteer 100+ hours/year live longer, sleep better, and report higher life satisfaction. The benefits to your brain may even rival (or beat) the dementia-prevention case for brain games.</p>
          </CardContent>
        </Card>

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
            <h2 className="font-bold text-xl mb-3">Volunteer from home (no driving needed)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Be My Eyes</strong> — video-call helper for blind users. ~5 minutes per call.</li>
              <li><strong>Smithsonian Digital Volunteers</strong> — transcribe historical documents from home.</li>
              <li><strong>Crisis Text Line</strong> — train (~30 hours), then text-message support people in crisis from your home.</li>
              <li><strong>UN Volunteers Online</strong> — translation, research, web design for nonprofits worldwide.</li>
              <li><strong>School tutoring online</strong> — Learn To Be, Reading Partners. Help a kid read.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Local options</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Local library</strong> — shelving, reading hours, computer help for other seniors.</li>
              <li><strong>Hospital gift shop or volunteer desk.</strong></li>
              <li><strong>Meals on Wheels</strong> — drive routes 1 morning a week.</li>
              <li><strong>Habitat for Humanity ReStore</strong> — sort donated items.</li>
              <li><strong>Local food bank</strong> — packing or sorting.</li>
              <li><strong>State park visitor center</strong> — most are run by volunteers.</li>
              <li><strong>Tax-Aide volunteer</strong> — help other seniors file taxes Feb-April. (See Free Tax Filing Coach.)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If you\'re not sure where to start</h3>
            <p className="text-sm text-muted-foreground">Walk into your local library or church. Either will know exactly which local groups need volunteers. Sometimes the best path isn\'t through an app at all — it\'s saying yes to the first invitation.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
