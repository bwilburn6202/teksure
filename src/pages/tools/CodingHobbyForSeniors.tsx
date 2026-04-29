import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function CodingHobbyForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Coding Hobby for Seniors | TekSure" description="Learn coding in retirement. Plain-English guide to free coding resources for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Code className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Coding for Seniors</h1>
          <p className="text-lg text-muted-foreground">Brain exercise. Useful skills. Career restart.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why learn coding</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Excellent brain exercise.</li>
              <li>Make websites, apps, games.</li>
              <li>Automate boring tasks.</li>
              <li>Earn freelance income.</li>
              <li>Connect with grandkids learning to code.</li>
              <li>Senior coders increasingly hired remote.</li>
              <li>Slow career — no rush.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best language for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Python</strong> — easiest. Most useful. Start here.</li>
              <li><strong>JavaScript</strong> — for websites.</li>
              <li><strong>HTML/CSS</strong> — make webpages, easy.</li>
              <li><strong>SQL</strong> — query databases.</li>
              <li>Skip C, C++, Java — harder, less senior-friendly.</li>
              <li>Pick ONE first — get good before adding.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free learning resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Codecademy</strong> — free courses, hands-on.</li>
              <li><strong>freeCodeCamp.org</strong> — full curriculum free.</li>
              <li><strong>Khan Academy</strong> — basics free.</li>
              <li><strong>Coursera</strong> — Harvard, MIT free audit.</li>
              <li><strong>Python Tutor</strong> (pythontutor.com) — visualize code.</li>
              <li><strong>Replit</strong> — code in browser, no install.</li>
              <li><strong>YouTube</strong> — endless tutorials.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Start projects</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Personal website (HTML/CSS).</li>
              <li>Simple calculator (Python).</li>
              <li>Family newsletter generator.</li>
              <li>Track personal expenses script.</li>
              <li>Photo organizer.</li>
              <li>Memoir text-to-website.</li>
              <li>Have AI write code, then learn from it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior advantages</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Patience.</li>
              <li>Time to deeply learn (no rush).</li>
              <li>Decades of problem-solving experience.</li>
              <li>Real-world domain knowledge (medical, legal, finance).</li>
              <li>Old-school programmers in demand for legacy systems (COBOL pays $$$).</li>
              <li>Bootcamps welcome older students.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AI helps learning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>ChatGPT/Claude explain code line-by-line.</li>
              <li>Ask: &quot;What does this do?&quot;</li>
              <li>&quot;Write me a [project] in Python.&quot;</li>
              <li>Ask follow-up questions endlessly.</li>
              <li>Better tutor than any class.</li>
              <li>FREE.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior coding bootcamps</h3>
            <p className="text-sm text-muted-foreground">Real bootcamps welcome seniors. Some examples: <strong>Lambda School</strong>, <strong>Bloom Tech</strong>, <strong>App Academy</strong>. Many remote. 6-12 months full-time. Expensive ($10K-20K) but income share possible. Cheaper: <strong>Free Code Camp</strong> + <strong>The Odin Project</strong> = self-taught path. Many seniors career-changed to coding.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
