import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { School } from 'lucide-react';

export default function OLLILifelongLearning() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="OLLI Lifelong Learning for Seniors | TekSure" description="Osher Lifelong Learning Institutes — affordable college courses for seniors at universities nationwide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <School className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">OLLI</h1>
          <p className="text-lg text-muted-foreground">Lifelong learning at universities near you.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is OLLI?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Osher Lifelong Learning Institutes.</li>
              <li>Funded by Bernard Osher Foundation.</li>
              <li>120+ programs at universities across US.</li>
              <li>Designed specifically for adults 50+.</li>
              <li>No tests, no grades, no homework required.</li>
              <li>Just learning for joy + community.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Annual membership: $50–$200.</li>
              <li>Then unlimited or low-cost classes.</li>
              <li>Some programs free with membership.</li>
              <li>Compare to single university course at $2,000+.</li>
              <li>Best value for in-person learning anywhere.</li>
              <li>Scholarships often available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Class topics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>History — local, world, military, social.</li>
              <li>Literature + book discussions.</li>
              <li>Music appreciation + jazz history.</li>
              <li>Current events + politics.</li>
              <li>Art history + studio classes.</li>
              <li>Languages, philosophy, science, more.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Format</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most classes 4–8 weekly sessions.</li>
              <li>1–2 hours each meeting.</li>
              <li>In-person, online, or hybrid.</li>
              <li>Some include field trips.</li>
              <li>Mostly retired professionals teaching.</li>
              <li>Discussion-based, not lecture-only.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find OLLI near you</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to OsherFoundation.org.</li>
              <li>Search by your state.</li>
              <li>120+ programs across US.</li>
              <li>Most major universities have one.</li>
              <li>Or call: ask local university about lifelong learning.</li>
              <li>Often has &quot;Encore&quot; or &quot;Senior&quot; programs by other names.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Social benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Meet other curious retirees.</li>
              <li>Form lifelong friendships.</li>
              <li>Reduces loneliness — proven research.</li>
              <li>Many couples take classes together.</li>
              <li>Often coffee + lunch gatherings.</li>
              <li>Best of both — learning + community.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best-kept secret in retirement</h3>
            <p className="text-sm text-muted-foreground">OLLI is one of the best-kept secrets for active retirees. For about $100/year you can take dozens of college-level courses with peers your age. The instructors are often retired professors who teach for the love of it. Visit OsherFoundation.org and find your nearest program. Many people say OLLI made retirement vastly more fulfilling than they expected.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
