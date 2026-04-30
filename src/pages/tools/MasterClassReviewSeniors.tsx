import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function MasterClassReviewSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="MasterClass for Seniors Review | TekSure" description="Is MasterClass worth it for seniors? Celebrity-taught video classes reviewed." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">MasterClass</h1>
          <p className="text-lg text-muted-foreground">Learn from world-famous experts.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is MasterClass?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Online video classes by famous experts.</li>
              <li>Gordon Ramsay (cooking), Steve Martin (comedy), etc.</li>
              <li>Annual subscription — $120–$240/year.</li>
              <li>Watch as many classes as you want.</li>
              <li>200+ classes across many topics.</li>
              <li>Beautiful production quality.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best classes for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Gordon Ramsay — cooking techniques.</li>
              <li>Bob Ross — happy little trees painting.</li>
              <li>James Patterson — writing.</li>
              <li>Annie Leibovitz — photography.</li>
              <li>Wolfgang Puck — entertaining.</li>
              <li>Most classes 4–8 hours of video.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Worth it? Pros + cons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pro: top-tier teachers, beautiful production.</li>
              <li>Pro: learn at your pace, rewatch anytime.</li>
              <li>Pro: workbook included with each class.</li>
              <li>Con: $120/year is significant.</li>
              <li>Con: not interactive — no feedback on your work.</li>
              <li>Con: YouTube has free alternatives for most topics.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cheaper alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>YouTube — most topics free.</li>
              <li>Skillshare — $14/month, hands-on classes.</li>
              <li>Coursera — university courses, often free to audit.</li>
              <li>Khan Academy — completely free, all subjects.</li>
              <li>Library DVDs — Great Courses, Teaching Company.</li>
              <li>Free online courses cover similar ground.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free trial first</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Often 7-day free trial offered.</li>
              <li>Try one class before committing yearly.</li>
              <li>Set calendar reminder to cancel if not loving it.</li>
              <li>Gift subscriptions also available.</li>
              <li>Adult children sometimes gift to retired parents.</li>
              <li>2 people share Premium plan — split cost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other learning platforms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>The Great Courses Plus — $20/month, professor lectures.</li>
              <li>Wondrium — same content, similar price.</li>
              <li>Audible audiobooks for educational content.</li>
              <li>OLLI — Osher Lifelong Learning at universities.</li>
              <li>Free OLLI memberships for retirees.</li>
              <li>OLLI tuition often $50–$150 per semester.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try Khan Academy free first</h3>
            <p className="text-sm text-muted-foreground">Before paying $120 for MasterClass, try Khan Academy (free) and Coursera (free auditing). For most seniors interested in learning, the free options provide thousands of hours of quality instruction. MasterClass is worth it if you specifically want celebrity instructors and don&apos;t mind the price. Look up your local OLLI program for in-person learning + social benefits.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
