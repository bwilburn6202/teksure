import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartHandshake } from 'lucide-react';

export default function HospicePalliativeCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hospice & Palliative Care Coach | TekSure" description="Hospice and palliative care, in plain English. When to start, what they cover, and the difference. Most people wait too long." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartHandshake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hospice & Palliative Care Coach</h1>
          <p className="text-lg text-muted-foreground">Quality of life when treatment options run out — or alongside them.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">The difference</h2>
            <ul className="text-sm list-disc pl-5">
              <li><strong>Palliative care</strong> — comfort + symptom relief at any stage. Compatible with active treatment for cancer, heart failure, etc.</li>
              <li><strong>Hospice</strong> — focus on comfort when life expectancy is 6 months or less. Treatment that aims to cure stops; comfort care continues.</li>
            </ul>
            <p className="text-sm mt-2">Both are MOSTLY covered by Medicare with little out-of-pocket cost.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When palliative care helps (any time)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Cancer treatment with side effects (pain, nausea, fatigue).</li>
              <li>Advanced heart failure, COPD, kidney disease.</li>
              <li>Parkinson\'s, ALS, Alzheimer\'s.</li>
              <li>Complex chronic illness with multiple symptoms.</li>
              <li>Family burden of caregiving.</li>
            </ul>
            <p className="text-sm mt-2">Studies show palliative care can EXTEND life — people feel better, eat better, fight better.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When hospice helps</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Two doctors estimate ≤6 months if disease takes its natural course.</li>
              <li>You\'ve decided not to pursue more curative treatment.</li>
              <li>Goal: comfort, dignity, time at home with family.</li>
              <li>Most hospice care is at home (90%). Some is in dedicated hospice facilities.</li>
              <li>Average enrollment: only 3 weeks. Earlier is usually better.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What hospice covers</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Nurse visits (regular and on-call 24/7).</li>
              <li>Doctor visits.</li>
              <li>Aide for personal care.</li>
              <li>Social worker.</li>
              <li>Chaplain (any faith or none).</li>
              <li>Medications related to the illness.</li>
              <li>Hospital bed, oxygen, wheelchair, supplies.</li>
              <li>Volunteer services (companionship, errands).</li>
              <li>Bereavement support for family up to 13 months after death.</li>
            </ul>
            <p className="text-sm mt-2">Almost no out-of-pocket for Medicare patients. The largest unfilled need is family caregiver support — an aide may visit only a few hours a day.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to get started</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Ask your doctor: "Would I qualify for palliative care or hospice?" — directly.</li>
              <li>Ask for a referral.</li>
              <li>Compare local hospice agencies at <strong>medicare.gov/care-compare</strong>.</li>
              <li>Look for non-profit (often higher quality) and 4-5 star ratings.</li>
              <li>Most agencies offer a free in-home assessment.</li>
              <li>You can change agencies if it\'s not the right fit.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Resources</h3>
            <p className="text-sm text-muted-foreground"><strong>National Hospice and Palliative Care Organization (nhpco.org)</strong> — biggest national resource. <strong>Get Palliative Care (getpalliativecare.org)</strong> — find local providers. <strong>Care Compare on medicare.gov</strong> — quality ratings for every Medicare-certified hospice in the US.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
