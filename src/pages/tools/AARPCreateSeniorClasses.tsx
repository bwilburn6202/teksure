import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function AARPCreateSeniorClasses() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AARP Create + Senior Classes | TekSure" description="AARP&apos;s free education and skills programs for seniors. Online + in-person classes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AARP Free Classes</h1>
          <p className="text-lg text-muted-foreground">Skills, hobbies, tech — all senior-focused.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AARP membership perks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$16/year membership unlocks lots.</li>
              <li>Free + member-discount classes.</li>
              <li>Webinars on dozens of topics.</li>
              <li>State-specific events.</li>
              <li>Don&apos;t need to be retired to join (50+).</li>
              <li>Spouse included free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AARP Smart Driver TEK</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free online driving safety course.</li>
              <li>Insurance discount in many states.</li>
              <li>Refreshes traffic laws + best practices.</li>
              <li>Senior-specific tips for aging drivers.</li>
              <li>Self-paced — about 4 hours.</li>
              <li>Worth it for the insurance savings alone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AARP TEK Academy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free tech classes for seniors.</li>
              <li>Smartphone, computer, tablet basics.</li>
              <li>Online safety + privacy.</li>
              <li>How to use specific apps.</li>
              <li>Video tutorials + workshops.</li>
              <li>Free at AARP.org/TEK.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AARP Foundation programs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tax-Aide — free tax prep (covered separately).</li>
              <li>SCSEP — paid job training for low-income 55+.</li>
              <li>Senior Community Service Employment.</li>
              <li>Connect2Affect — combat senior isolation.</li>
              <li>Drive to End Hunger — food security.</li>
              <li>Most programs free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Local AARP events</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AARP.org/local — events near you.</li>
              <li>Health screenings.</li>
              <li>Tech workshops.</li>
              <li>Speakers + lectures.</li>
              <li>Social meetups.</li>
              <li>Most free for members.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free without membership</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many AARP webinars free to all.</li>
              <li>News + advice articles free.</li>
              <li>Podcasts — Take on Today, Bulletin Today.</li>
              <li>YouTube channel with free videos.</li>
              <li>Free Q+A with experts.</li>
              <li>You can use much without paying.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">$16 = best deal in retirement</h3>
            <p className="text-sm text-muted-foreground">For $16/year, AARP membership pays for itself many times over in just the discounts on hotels, restaurants, car rentals, and prescriptions. Plus the free classes, free Tax-Aide, free TEK Academy, free webinars. If you&apos;re 50+ and not a member, this is the easiest financial decision you&apos;ll make this year. Sign up at AARP.org.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
