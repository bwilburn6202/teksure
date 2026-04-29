import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const SVCS = [
  { name: 'Coursera', cost: 'FREE audit / $40-80/mo', best: '7,000+ courses from Yale, Stanford, etc. Audit free. Pay for certificates.', good: 'Best overall.' },
  { name: 'edX', cost: 'FREE audit / $50-300 verified', best: 'MIT + Harvard courses. Free to audit.', good: 'Best academic.' },
  { name: 'Khan Academy', cost: 'FREE', best: 'World-class. Math, science, economics, art history.', good: 'Best truly free.' },
  { name: 'OpenCourseWare (MIT)', cost: 'FREE', best: 'Real MIT lecture notes + videos free.', good: 'Best for science.' },
  { name: 'Senior Audit programs', cost: 'FREE for seniors', best: 'Most US public universities let 60+ audit FREE in-person classes.', good: 'Best for in-person.' },
  { name: 'Road Scholar (Elderhostel)', cost: '$2,000-5,000/trip', best: 'Travel + learning programs designed for 50+. Tours + classes.', good: 'Best for travel learning.' },
  { name: 'Lifelong Learning Institutes (OLLI)', cost: '$50-300/yr', best: 'Many universities have OLLI for seniors — peer-led, in-person classes.', good: 'Best community.' },
];

export default function FreeUniversityCourses() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Free University Courses for Seniors | TekSure" description="Audit Yale, Harvard, Stanford classes free. Plain-English picks for online + in-person free university courses for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Free University Courses</h1>
          <p className="text-lg text-muted-foreground">Audit world-class classes free.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free in-person at YOUR state university</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most public universities let seniors AUDIT classes free.</li>
              <li>"Audit" = sit in, do reading, no grades, no credit.</li>
              <li>Texas — 65+ FREE 6 credit hours per semester.</li>
              <li>Florida — 60+ FREE up to 12 credit hours per semester.</li>
              <li>California, NY, Ohio, Michigan, more — same idea, varies.</li>
              <li>Search "[your state] senior audit program".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">OLLI programs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Osher Lifelong Learning Institute. 124 university campuses.</li>
              <li>$50-300/year. Take many classes per term.</li>
              <li>Peer-taught. Topics: history, lit, art, science, current events.</li>
              <li>Includes social events, lectures, trips.</li>
              <li>Best community for retirees who want intellectual life + friends.</li>
              <li>Find: <strong>osherfoundation.org</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best courses to start</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Coursera — "Yale Science of Well-Being"</strong>. Free. Most popular online course ever.</li>
              <li><strong>edX — "Justice"</strong> (Michael Sandel, Harvard). Free, classic.</li>
              <li><strong>Khan Academy — World History</strong>. Free, well-paced.</li>
              <li><strong>Coursera — Greek &amp; Roman Mythology</strong>. Free, popular.</li>
              <li><strong>YouTube — CrashCourse</strong>. Free 10-min videos on any subject.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cognitive benefit</h3>
            <p className="text-sm text-muted-foreground">Engaging in challenging learning is the strongest evidence-based protection against dementia. 1-2 hours/week of real learning across 5+ years measurably reduces risk. Pick a subject you love. Start.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
