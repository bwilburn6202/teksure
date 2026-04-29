import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function CourseraSeniorAudit() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Coursera + edX Free Audit for Seniors | TekSure" description="Audit Yale + Harvard + MIT classes free. Plain-English guide for senior online learners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Coursera + edX Free Audit</h1>
          <p className="text-lg text-muted-foreground">Yale, Harvard, MIT — for free.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How free audit works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Watch all videos free.</li>
              <li>Read all materials free.</li>
              <li>Take quizzes (no grading).</li>
              <li>NO certificate (must pay $50-100 for that).</li>
              <li>NO graded assignments / peer review.</li>
              <li>Most learners only want knowledge — paid features unnecessary.</li>
              <li>Look for &quot;Audit&quot; option on course page.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best Coursera courses for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Learning How to Learn</strong> — UCSD. 1M+ enrolled. Life-changing.</li>
              <li><strong>Science of Well-Being</strong> — Yale. Most popular Yale course ever.</li>
              <li><strong>Modern American Poetry</strong> — UPenn.</li>
              <li><strong>Successful Negotiation</strong> — Michigan.</li>
              <li><strong>Practical Time Management</strong> — Korea Advanced.</li>
              <li><strong>Buddhism + Modern Psychology</strong> — Princeton.</li>
              <li>Search by topic — most universities listed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best edX free courses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Justice (Harvard)</strong> — Michael Sandel&apos;s famous course.</li>
              <li><strong>The Civil War + Reconstruction</strong> — Columbia.</li>
              <li><strong>Hamlet&apos;s Ghost</strong> — Harvard.</li>
              <li><strong>Greek + Roman Mythology</strong> — UPenn.</li>
              <li><strong>Introduction to Computer Science (CS50)</strong> — Harvard.</li>
              <li><strong>Buddhism through its Scriptures</strong> — Harvard.</li>
              <li>Audit free, certificate paid.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior learning tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1.5x or 1.25x video speed (older lectures slow).</li>
              <li>Take handwritten notes — better retention.</li>
              <li>One course at a time.</li>
              <li>4-6 weeks typical commitment.</li>
              <li>30-60 min/day.</li>
              <li>Discussion forums = meet other learners.</li>
              <li>Tablet or laptop better than phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other free platforms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>MIT OpenCourseWare</strong> — ocw.mit.edu. Full courses, no signup.</li>
              <li><strong>Yale Open Courses</strong> — oyc.yale.edu.</li>
              <li><strong>Stanford Online</strong> — many free.</li>
              <li><strong>Khan Academy</strong> — math + science focused.</li>
              <li><strong>The Great Courses</strong> — free with library card.</li>
              <li><strong>YouTube university channels</strong> — many lectures.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Worth paying for certificate?</h3>
            <p className="text-sm text-muted-foreground">If retirement learning — NO, save money. If career change or job application — sometimes yes ($50-100). For seniors learning for joy — audit free. Coursera Plus ($59/mo or $399/yr) — unlimited certificates if doing many. But audit free is enough for most learners.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
