import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Compass } from 'lucide-react';

export default function EncoreCareers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Encore Careers — Second Act After 60 | TekSure" description="Make a career switch in your 60s/70s. Plain-English guide to encore careers, retraining, and meaningful 2nd-act work." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Compass className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Encore Careers</h1>
          <p className="text-lg text-muted-foreground">Your most meaningful work might be next.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is an "encore career"</h2>
            <p className="text-sm">Term coined by Marc Freedman. Career change in your 50s/60s/70s — often less pay but more purpose. Public service, teaching, nonprofit, advocacy. Studies show better health + longer life vs full retirement.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Popular encore paths</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Teaching</strong> — substitute → full-time teacher. Many states fast-track 2nd-career.</li>
              <li><strong>Healthcare</strong> — Certified Nursing Assistant, Phlebotomist, Medical Assistant. 6-12 month training.</li>
              <li><strong>Nonprofit</strong> — your career skills + new mission.</li>
              <li><strong>Counseling / Coaching</strong> — life coach, career coach. Certifications $1,000-5,000.</li>
              <li><strong>Government</strong> — federal jobs with strong benefits + later pension.</li>
              <li><strong>Consulting</strong> — your expertise, your hours.</li>
              <li><strong>Real estate</strong> — license $500-2,000, flexible.</li>
              <li><strong>Hospital chaplain</strong> — clinical pastoral education.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free / cheap retraining</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Senior Community Service Employment Program (SCSEP)</strong> — federal. Free training + paid position 55+.</li>
              <li><strong>Coursera / edX</strong> — university certificates $40-200.</li>
              <li><strong>Community college</strong> — many free for seniors. CNA programs commonly $500-2,000.</li>
              <li><strong>Encore.org Generations Programs</strong> — networking + training.</li>
              <li><strong>VA training programs</strong> for veterans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Encore.org</strong> — research + community.</li>
              <li><strong>Coming of Age</strong> — local programs.</li>
              <li><strong>AARP Encore</strong> — articles + job board.</li>
              <li><strong>"What Color is Your Parachute?"</strong> — classic career-change book.</li>
              <li><strong>"The Big Shift"</strong> — Marc Freedman&apos;s book.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">It works</h3>
            <p className="text-sm text-muted-foreground">9+ million Americans are in encore careers right now. Average length: 8-11 years. Reported life satisfaction higher than pre-retirement. Most don&apos;t need full income — supplements pension/SS.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
