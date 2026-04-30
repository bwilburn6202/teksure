import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const PLATFORMS = [
  { name: 'Khan Academy', cost: 'FREE forever', best: 'World-class free education. Math, history, science, art, economics. Aimed at K-12 but adults love it for refreshing skills.', good: 'Best free pick.' },
  { name: 'Coursera', cost: 'FREE to audit; $40-50/mo for certificates', best: 'Real college courses (Yale, Stanford, Duke). You can "audit" most for free — read material and watch videos without grades.', good: 'Best for serious learners.' },
  { name: 'edX', cost: 'FREE to audit; $50-300 for certificates', best: 'Same idea — Harvard, MIT, Berkeley courses available free if you don\'t need the certificate.', good: 'Strong on tech, business, humanities.' },
  { name: 'The Great Courses Plus / Wondrium', cost: '$15/mo or $200/yr', best: 'Lectures from top professors on history, philosophy, music, cooking. Beautifully produced.', good: 'Free trial; great library.' },
  { name: 'MasterClass', cost: '$10-20/mo', best: 'Celebrities teach (Gordon Ramsay cooking, Bob Iger leadership). Polished but pricey.', good: 'Best for entertainment-style learning.' },
  { name: 'Skillshare', cost: '$15/mo', best: 'Hands-on creative classes — painting, photography, writing, crafting. Project-based.', good: 'Free trial.' },
  { name: 'YouTube', cost: 'FREE', best: 'The world\'s biggest learning library. Search any topic — Crash Course, MIT OpenCourseWare, TED-Ed.', good: 'Always free.' },
  { name: 'OLLI (Osher Lifelong Learning Institute)', cost: '$50-300/year, in person at universities', best: 'In-person classes for 50+. 100+ chapters at universities nationwide. Real classmates, real conversations.', good: 'Best if you prefer human teachers and classmates.' },
];

export default function OnlineLearningPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Learning Picker — Coursera, Khan, Great Courses | TekSure" description="Always wanted to study Roman history, learn watercolor, or refresh algebra? The best free and paid online learning platforms for retired adults." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Learning Picker</h1>
          <p className="text-lg text-muted-foreground">Always wanted to learn X? Pick the right platform.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">The truth</h2>
            <p className="text-sm">More high-quality free education exists today than at any point in human history. You can take Harvard or MIT courses, free, in your living room. The hard part is picking ONE thing and sticking with it for 30 days.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {PLATFORMS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm mb-1">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free auditing on Coursera and edX</h2>
            <p className="text-sm mb-2">Most paid courses on Coursera and edX have a free "audit" option that\'s well-hidden:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Find a course you want.</li>
              <li>Click "Enroll" or "Start course".</li>
              <li>Look for a small link that says "Audit only" or "Full course, no certificate".</li>
              <li>Click that — you get all the videos, readings, and quizzes free.</li>
              <li>The only thing you DON\'T get is the printed certificate.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free audiences for big names</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>MIT OpenCourseWare (ocw.mit.edu)</strong> — full MIT course materials, free.</li>
              <li><strong>Yale Open Courses (oyc.yale.edu)</strong> — Yale\'s most popular lecture series.</li>
              <li><strong>Stanford Online</strong> — many free.</li>
              <li><strong>Smithsonian Open Access</strong> — millions of digitized works free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior-specific: OLLI</h3>
            <p className="text-sm text-muted-foreground">If you want to learn AND meet people, the Osher Lifelong Learning Institute (OLLI) has chapters at 125+ universities for adults 50+. Affordable, in-person, no grades. Search "OLLI [your city]". Many people\'s favorite retirement discovery.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
