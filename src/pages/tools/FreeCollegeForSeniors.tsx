import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function FreeCollegeForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Free College for Seniors | TekSure" description="60+ states offer free college for seniors. Plain-English guide to senior tuition waivers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Free College for Seniors</h1>
          <p className="text-lg text-muted-foreground">60+ in many states = FREE college tuition.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">States with senior tuition waivers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>FREE for 60+</strong> — Florida, Kentucky, Texas (audit), more.</li>
              <li><strong>FREE for 65+</strong> — California, Georgia, Maryland, Tennessee, Virginia, more.</li>
              <li><strong>Reduced tuition</strong> — most other states.</li>
              <li>Available at public universities + community colleges.</li>
              <li>Audit (no credit) usually free.</li>
              <li>Credit courses sometimes free, sometimes reduced.</li>
              <li>Check your state&apos;s rules.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to enroll</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Contact registrar at local public university.</li>
              <li>Ask about senior tuition waiver / Senior Citizen Free.</li>
              <li>Bring driver&apos;s license proof of age + state residency.</li>
              <li>Apply as &quot;non-degree-seeking.&quot;</li>
              <li>Pick from open seats (after paying students).</li>
              <li>Some require full credit application.</li>
              <li>Often skip prerequisites for audit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to take</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>History courses — fascinating with life experience.</li>
              <li>Literature you missed in HS.</li>
              <li>Art history.</li>
              <li>Foreign languages.</li>
              <li>Computer science basics.</li>
              <li>Philosophy, religion, ethics.</li>
              <li>Music appreciation.</li>
              <li>Take what interests you — no transcript pressure.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">OLLI — Lifelong Learning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>125+ Osher Lifelong Learning Institutes.</li>
              <li>$50-300/year UNLIMITED classes.</li>
              <li>Designed for seniors — no homework.</li>
              <li>5-week sessions.</li>
              <li>Taught by retired professors + experts.</li>
              <li>Social + intellectual community.</li>
              <li>Find at osher.net.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online free college</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Coursera</strong> — audit ANY course free.</li>
              <li><strong>edX</strong> — Harvard/MIT/Yale free.</li>
              <li><strong>Khan Academy</strong> — completely free.</li>
              <li><strong>YouTube</strong> — Crash Course, university lectures.</li>
              <li><strong>Hillsdale College</strong> — free conservative-leaning courses.</li>
              <li><strong>The Great Courses (library)</strong> — free with library card.</li>
              <li>Self-paced. Fit any schedule.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Real college campus</h3>
            <p className="text-sm text-muted-foreground">Going to actual campus = social + intellectual + reduces ageism. Sit in lectures with 20-year-olds. Many seniors say best part of retirement. Most professors welcome senior students. Don&apos;t need degree — just learning. Free is unbeatable. Find your state&apos;s tuition waiver TODAY.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
