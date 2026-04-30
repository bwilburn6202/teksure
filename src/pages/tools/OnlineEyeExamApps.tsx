import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

export default function OnlineEyeExamApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Eye Exam Apps for Seniors | TekSure" description="Renew prescriptions online. EyeQue, 1-800 Contacts, Visibly explained for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Search className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Eye Exams</h1>
          <p className="text-lg text-muted-foreground">Renew prescription from home — sometimes.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When online exams work</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Renewing existing prescription only.</li>
              <li>Ages typically 18–55 (some up to 65).</li>
              <li>No major eye health changes.</li>
              <li>Under 40+ should still see doctor in person.</li>
              <li>Not a substitute for full eye exam.</li>
              <li>Useful for prescription renewal between full exams.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">1-800 Contacts ExpressExam</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Online prescription renewal: $20.</li>
              <li>Contact lens prescription only.</li>
              <li>Takes about 15 minutes.</li>
              <li>Doctor reviews + signs in 24 hours.</li>
              <li>Available 18–55 years old.</li>
              <li>Order contacts immediately after.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Visibly online</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$35–$55 vision test.</li>
              <li>Glasses + contacts prescriptions.</li>
              <li>Available in most states.</li>
              <li>Doctor reviews, signs prescription.</li>
              <li>Won&apos;t check overall eye health.</li>
              <li>Up to age 55.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors should still see eye doctor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Glaucoma + macular degeneration risk increases with age.</li>
              <li>Cataracts develop gradually.</li>
              <li>Diabetic retinopathy needs monitoring.</li>
              <li>Annual full exam recommended after 60.</li>
              <li>Online exams skip these critical checks.</li>
              <li>Medicare covers diabetic eye exams.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Affordable in-person options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Costco Optical — exam $90, no membership for exam.</li>
              <li>Walmart Vision Center — exam $75–$120.</li>
              <li>Target Optical — exam similar pricing.</li>
              <li>Optometry schools — discounted exams.</li>
              <li>Free clinics for low-income seniors.</li>
              <li>VA covers veterans&apos; eye care.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Saving on eye care</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Get 1 full eye exam yearly + use online for backup if needed.</li>
              <li>Buy glasses online — save $200+ per pair.</li>
              <li>Buy contacts online — save 30–50%.</li>
              <li>Use FSA/HSA dollars for vision.</li>
              <li>Some Medicare Advantage plans include vision.</li>
              <li>VSP individual plans $13/month.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t skip the in-person exam</h3>
            <p className="text-sm text-muted-foreground">For seniors over 60, skip online eye exams as your primary checkup. The risk of missing glaucoma or macular degeneration is too high. Get a full annual eye exam at Costco, Walmart, or your eye doctor. Use online services only for prescription renewal between exams. Save money by buying frames + lenses online (Warby Parker, Zenni) AFTER getting an in-person exam.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
