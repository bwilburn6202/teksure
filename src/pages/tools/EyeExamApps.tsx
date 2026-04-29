import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function EyeExamApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Eye Exam Apps | TekSure" description="Renew glasses prescription online. Plain-English picks for online eye-exam services and when you still need an in-person eye doctor." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Eye Exam Apps</h1>
          <p className="text-lg text-muted-foreground">Renew Rx without office visit.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online eye exam services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Warby Parker Virtual Vision Test</strong> — $15. Renew prescription if you&apos;re 18-65 and recent exam.</li>
              <li><strong>1-800 Contacts ExpressExam</strong> — $20. Contact lens Rx renewal.</li>
              <li><strong>EyeQue</strong> — $30 device + free test. Measure your refractive error at home. Not Rx-valid.</li>
              <li><strong>Visibly</strong> — $35 online vision test. Available in 36 states.</li>
              <li><strong>Lensabl Online Vision Test</strong> — $20.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why you STILL need eye doctor</h2>
            <p className="text-sm">Online "exams" only test refraction (glasses strength). They DON&apos;T check for:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Cataracts.</li>
              <li>Glaucoma.</li>
              <li>Macular degeneration.</li>
              <li>Diabetic retinopathy.</li>
              <li>Eye cancer (rare but real).</li>
              <li>Detached retina.</li>
            </ul>
            <p className="text-sm mt-2">For seniors — full in-person eye exam every 1-2 years is essential. Online apps are good for off-year prescription updates.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free / cheap eye exams for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>EyeCare America (AAO)</strong> — FREE eye exam for 65+ seniors who haven&apos;t had one in 3+ years. eyecareamerica.org.</li>
              <li><strong>VSP / EyeMed</strong> — vision insurance covers $0-25 exams.</li>
              <li><strong>Costco / Sam&apos;s Club Optical</strong> — $60-80 exam (much cheaper than retail).</li>
              <li><strong>Walmart Vision Center</strong> — $50-70 exam.</li>
              <li><strong>Lions Club</strong> — free eye exams + glasses for low-income seniors.</li>
              <li><strong>Original Medicare</strong> — covers only glaucoma + cataract follow-ups, NOT routine exams.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Buy glasses online cheaper</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Zenni</strong> — frames + lenses from $7. $25-50 typical pair.</li>
              <li><strong>EyeBuyDirect</strong> — $8 frames, $30 typical pair.</li>
              <li><strong>Warby Parker</strong> — $95+. Try-on at home program.</li>
              <li><strong>Costco Optical</strong> — best in-person price.</li>
              <li>Walmart, Target — strong mid-range.</li>
              <li>Need PD (pupillary distance) from eye doctor — measure yourself with apps too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior eye health basics</h3>
            <p className="text-sm text-muted-foreground">Most seniors need NEW prescription every 2-3 years. Cataracts develop in most people 70+. Sudden vision change, sudden floaters, curtain in vision = ER. Annual visit catches problems while still treatable.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
