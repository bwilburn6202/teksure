import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function VisionInsuranceCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Vision Insurance for Seniors | TekSure" description="Plain-English guide to vision coverage — what Medicare covers, when to pay for VSP/Eyemed, and how to get cheap glasses." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Vision Insurance Coach</h1>
          <p className="text-lg text-muted-foreground">Glasses + eye exams. The real options.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What Medicare covers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Original Medicare:</strong> covers cataract surgery + ONE pair of glasses afterward. Otherwise, no coverage.</li>
              <li><strong>Diabetic eye exam</strong> — fully covered annually if you have diabetes.</li>
              <li><strong>Glaucoma screening</strong> — covered annually if high risk.</li>
              <li><strong>Macular degeneration treatment</strong> — covered.</li>
              <li><strong>Routine eye exams + glasses for vision correction</strong> — NOT covered by Original Medicare.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vision plans</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Medicare Advantage</strong> — most plans include eye exam + $100-200 frame allowance + lens coverage.</li>
              <li><strong>VSP Vision</strong> — biggest standalone vision insurer. About $15-30/month.</li>
              <li><strong>Davis Vision / EyeMed</strong> — competitors.</li>
              <li><strong>AARP Eye Care</strong> — discounts for members at 7,500+ providers.</li>
              <li><strong>Costco Optical</strong> — even non-members get great prices on cash-pay.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cheap glasses online</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Zenni Optical</strong> — $7-30 frames. $50-100 even with progressive lenses.</li>
              <li><strong>EyeBuyDirect</strong> — similar prices, more design.</li>
              <li><strong>Warby Parker</strong> — $95 single-vision, $150 progressive. Premium feel, "home try-on" of 5 frames free.</li>
              <li><strong>GlassesUSA</strong> — wide range.</li>
            </ul>
            <p className="text-sm mt-2">All require a current prescription (under 1-2 years old). Get prescription from any optometrist — they MUST give it to you (federal law).</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get a copy of your prescription</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>After your eye exam, ask: "May I have a copy of my prescription?". They MUST hand it over.</li>
              <li>Includes both glasses + contact lens prescription if applicable.</li>
              <li>Take a photo of it. Save in your phone Notes for online ordering.</li>
              <li>Valid for 1-2 years depending on state.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">PD measurement (online glasses)</h2>
            <p className="text-sm">PD = Pupillary Distance. Online glasses sites need it. The optometrist may not include it on the prescription. Options:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Ask the optometrist — they MAY include for free, or charge.</li>
              <li>Use an online tool — Warby Parker has a free app to measure.</li>
              <li>Measure with a friend and a ruler (look up "how to measure PD").</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don\'t skip annual eye exam after 60</h3>
            <p className="text-sm text-muted-foreground">Glaucoma, macular degeneration, cataracts often have NO symptoms until late. Annual eye exam covered by Medicare for diabetes, high-risk glaucoma. Otherwise out-of-pocket $50-150. Worth it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
