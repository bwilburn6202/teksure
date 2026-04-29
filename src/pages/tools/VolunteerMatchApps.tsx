import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HandHeart } from 'lucide-react';

const APPS = [
  { name: 'VolunteerMatch.org', cost: 'FREE', best: 'Biggest volunteer database. Search by zip + interest + cause + remote/in-person.', good: 'Best overall.' },
  { name: 'AARP Create the Good', cost: 'FREE', best: 'Senior-focused. From "5-minute" tasks to ongoing roles.', good: 'Best for 50+.' },
  { name: 'AmeriCorps Seniors', cost: 'FREE (small stipend possible)', best: 'Federal program. Foster Grandparents, Senior Companion, RSVP. Some pay $4-5/hr stipend.', good: 'Best official + stipend.' },
  { name: 'JustServe.org', cost: 'FREE', best: 'Run by Church of LDS but open to everyone. Many local opportunities.', good: 'Best community.' },
  { name: 'Idealist.org', cost: 'FREE', best: 'Skilled volunteer + nonprofit jobs.', good: 'Best for skilled work.' },
  { name: 'Be My Eyes', cost: 'FREE', best: 'Volunteer 5 minutes from home — help blind/low-vision callers via video.', good: 'Best from-home volunteering.' },
];

export default function VolunteerMatchApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Volunteer Apps for Seniors | TekSure" description="Find meaningful volunteer work near you. Plain-English picks for VolunteerMatch, AmeriCorps Seniors, AARP Create the Good." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HandHeart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Volunteer Match Apps</h1>
          <p className="text-lg text-muted-foreground">Volunteering keeps you healthier, longer.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-perfect roles</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Foster Grandparent</strong> — read to kids at school. $4/hr stipend (not taxed).</li>
              <li><strong>Senior Companion</strong> — visit homebound elders. $4/hr.</li>
              <li><strong>RSVP</strong> — flexible, your skills, your schedule.</li>
              <li><strong>Tax-Aide</strong> — AARP volunteers prep free taxes for seniors. CPA experience helpful but not required (training provided).</li>
              <li><strong>SCORE</strong> — mentor small business owners with your career experience.</li>
              <li><strong>Library / museum docent</strong>.</li>
              <li><strong>Habitat for Humanity</strong> — building experience optional.</li>
              <li><strong>Hospital volunteers</strong> — gift shop, info desk, patient transport.</li>
              <li><strong>Park ranger volunteers</strong> — federal free pass benefit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">From-home volunteering</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Be My Eyes</strong> — answer video calls helping blind users (5 min each).</li>
              <li><strong>Crisis Text Line</strong> — train to text people in crisis.</li>
              <li><strong>Smithsonian Transcription</strong> — type old documents into searchable text.</li>
              <li><strong>Project Gutenberg</strong> — proofread classic books.</li>
              <li><strong>FamilySearch indexing</strong> — read old census, marriage records.</li>
              <li><strong>Tutoring online</strong> via Learn To Be (under-served kids).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Health benefits</h3>
            <p className="text-sm text-muted-foreground">Studies show volunteers live 2-4 years longer, with lower depression and dementia rates. 2 hours/week is the sweet spot. Best is something that gets you out of the house and into community. Your local Area Agency on Aging knows what&apos;s near you.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
