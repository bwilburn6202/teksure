import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function RetiredEducatorPrograms() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Retired Educator Volunteer Programs | TekSure" description="Use teaching skills in retirement. Plain-English picks for retired teacher volunteer programs + paid tutoring." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Retired Educator Programs</h1>
          <p className="text-lg text-muted-foreground">Your teaching skills are still needed.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Volunteer programs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Foster Grandparent (AmeriCorps)</strong> — read to kids 15-40 hrs/week. Stipend.</li>
              <li><strong>Reading Partners</strong> — tutor 4-6 kids weekly. Local schools.</li>
              <li><strong>Boys + Girls Clubs</strong> — after-school tutoring.</li>
              <li><strong>Local library</strong> — homework help.</li>
              <li><strong>Substitute teaching</strong> — flexible, paid $100-200/day.</li>
              <li><strong>Senior Corps</strong> — federal program, paid + benefits.</li>
              <li><strong>SCORE</strong> — mentor small business owners (use career skills beyond teaching).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Paid tutoring (online)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Outschool</strong> — teach kids classes. $20-40/hr.</li>
              <li><strong>Wyzant</strong> — set rates ($30-100/hr).</li>
              <li><strong>VIPKid</strong> — teach English to Chinese kids ($15-22/hr).</li>
              <li><strong>Tutor.com</strong> — 24/7 homework help platform.</li>
              <li><strong>Khan Academy</strong> — content contributor (paid).</li>
              <li>Use TEACHER&apos;S identity verification — easier than scratch.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Travel + teach programs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Peace Corps Response</strong> — short-term educator missions overseas. Paid stipend + housing.</li>
              <li><strong>Fulbright Specialist</strong> — 2-6 weeks educator missions abroad.</li>
              <li><strong>Habitat International educator missions</strong>.</li>
              <li><strong>Teach English overseas</strong> — TEFL certification + paid placement.</li>
              <li>Adventures + paychecks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Self-directed</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tutor neighborhood kids</strong> — word of mouth.</li>
              <li><strong>Adult literacy volunteer</strong> — teach reading to adults.</li>
              <li><strong>ESL teacher</strong> — for new immigrants in your community.</li>
              <li><strong>Memoir teacher</strong> — at senior center / library.</li>
              <li><strong>Genealogy class</strong> — share research skills.</li>
              <li><strong>Math + science help</strong> for grandkids in family.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Why it works</h3>
            <p className="text-sm text-muted-foreground">Retired teachers report HIGHEST life satisfaction in retirement when they keep teaching in some form. Skills don&apos;t fade. Kids + adults need you. Volunteer + paid both fulfilling.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
