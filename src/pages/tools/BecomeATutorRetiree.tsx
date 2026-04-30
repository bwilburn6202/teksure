import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function BecomeATutorRetiree() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tutoring as Retirement Income | TekSure" description="Tutor kids + adults online + in-person. Plain-English guide for senior tutors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tutoring in Retirement</h1>
          <p className="text-lg text-muted-foreground">$25-100/hr. Flexible. Meaningful.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online tutoring platforms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Wyzant</strong> — set own rates. Take 25%. Flexible.</li>
              <li><strong>Varsity Tutors</strong> — $20-70/hr. They find clients.</li>
              <li><strong>Tutor.com</strong> — homework help. $10-15/hr typically.</li>
              <li><strong>Outschool</strong> — teach group classes. $30-100/hr potential.</li>
              <li><strong>VIPKid</strong> — teach English to Chinese kids.</li>
              <li><strong>Preply</strong> — language tutoring globally.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">In-demand subjects</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Math</strong> — algebra, geometry, calculus.</li>
              <li><strong>SAT/ACT prep</strong> — high pay $50-100/hr.</li>
              <li><strong>Reading + writing</strong> — elementary tutoring.</li>
              <li><strong>Science</strong> — biology, chemistry, physics.</li>
              <li><strong>Foreign languages</strong> — Spanish especially.</li>
              <li><strong>Computer skills</strong> — for adults.</li>
              <li><strong>Music lessons</strong> — piano, guitar.</li>
              <li>Retired teachers + engineers + accountants in highest demand.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Local tutoring</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Schools — sub teach, paid mentor programs.</li>
              <li>YMCA after-school tutoring.</li>
              <li>Library volunteer (free, but meaningful).</li>
              <li>Local tutoring businesses (Sylvan, Mathnasium).</li>
              <li>Word-of-mouth — neighbors with kids.</li>
              <li>Nextdoor + Facebook neighborhood groups.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Adult literacy + ESL</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Volunteer or paid.</li>
              <li>ProLiteracy — find local affiliate.</li>
              <li>Refugee resettlement orgs need ESL tutors.</li>
              <li>Community colleges hire adjuncts.</li>
              <li>Online ESL platforms (preply, italki).</li>
              <li>Most rewarding work many seniors say.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Background check often required ($25-75).</li>
              <li>Liability insurance for in-home (HiscoxPro $30/mo).</li>
              <li>Quiet space with good lighting.</li>
              <li>Webcam + good microphone for online.</li>
              <li>Stable internet.</li>
              <li>Materials — usually parents provide for K-12.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior advantages</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Patience.</li>
              <li>Real-world experience.</li>
              <li>Career credibility (CPAs teach business, etc.).</li>
              <li>Available daytime — when most parents work.</li>
              <li>Reliable — fewer cancelations than college tutors.</li>
              <li>Calming presence vs anxious peers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Volunteer alternative</h3>
            <p className="text-sm text-muted-foreground">If money not needed — volunteer tutoring. <strong>Foster Grandparents Program</strong> — small stipend, work with kids. <strong>SCORE</strong> — mentor business owners. <strong>School volunteer</strong> programs. <strong>Library</strong> reading buddies. All meaningful, no income, often more flexible.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
