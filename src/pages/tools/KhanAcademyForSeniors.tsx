import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export default function KhanAcademyForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Khan Academy for Seniors | TekSure" description="Completely free education for seniors. Khan Academy explained for lifelong learners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lightbulb className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Khan Academy</h1>
          <p className="text-lg text-muted-foreground">Free education for everyone, forever.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Khan Academy?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>100% free, nonprofit education site.</li>
              <li>Started by Salman Khan in 2008.</li>
              <li>Funded by Bill Gates Foundation + others.</li>
              <li>No subscription, no ads, no hidden costs.</li>
              <li>Used by 100+ million students worldwide.</li>
              <li>Available on KhanAcademy.org or app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Subjects covered</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Math — basic to college calculus.</li>
              <li>Science — physics, chemistry, biology.</li>
              <li>History — world + American.</li>
              <li>Economics + finance.</li>
              <li>Computer programming.</li>
              <li>Test prep — SAT, MCAT, etc.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Refresh subjects you forgot.</li>
              <li>Help grandkids with homework.</li>
              <li>Learn finance + investing concepts.</li>
              <li>Understand world history better.</li>
              <li>Learn modern science discoveries.</li>
              <li>No tests required — just learn for joy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Khanmigo (AI tutor)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$4/month for unlimited AI tutoring.</li>
              <li>Ask questions anytime.</li>
              <li>Personalized help when stuck.</li>
              <li>Patient AI tutor — never gets frustrated.</li>
              <li>Reasonably priced supplement.</li>
              <li>Free version still extensive.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to get started</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to KhanAcademy.org.</li>
              <li>Sign up free with email.</li>
              <li>Browse subjects — pick what interests you.</li>
              <li>Watch short video lessons (5–15 min each).</li>
              <li>Practice problems after each video.</li>
              <li>Track your progress over time.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other free education</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Coursera — audit university courses free.</li>
              <li>edX — Harvard, MIT free courses.</li>
              <li>YouTube — Crash Course, TED-Ed.</li>
              <li>OpenStax — free college textbooks.</li>
              <li>Library e-resources — often include LinkedIn Learning free.</li>
              <li>Senior centers — in-person classes free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Help your grandkids too</h3>
            <p className="text-sm text-muted-foreground">Many seniors discover Khan Academy when grandkids ask for help with homework. The site has a parent dashboard so you can track grandkids&apos; progress too. Spending an hour helping them with math (using Khan to refresh your skills first) creates wonderful intergenerational bonding. The grandkids love that grandma still wants to learn alongside them.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
