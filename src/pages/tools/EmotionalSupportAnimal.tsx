import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartPulse } from 'lucide-react';

export default function EmotionalSupportAnimal() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Emotional Support Animal Guide | TekSure" description="ESA vs service animal explained. Plain-English guide to senior emotional support animals." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartPulse className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emotional Support Animals</h1>
          <p className="text-lg text-muted-foreground">Real benefits. Limited rights. Avoid scams.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">ESA vs Service vs Therapy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Service Animal</strong> — trained for specific disability. Goes EVERYWHERE legally. Mostly dogs.</li>
              <li><strong>ESA (Emotional Support Animal)</strong> — for emotional disability. Limited rights.</li>
              <li><strong>Therapy Animal</strong> — visits hospitals/nursing homes. NOT for personal use.</li>
              <li>Big differences — don&apos;t conflate.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">ESA legal rights (2026)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Housing</strong> — Fair Housing Act allows ESAs in &quot;no pet&quot; rentals. Landlord can&apos;t charge pet fees.</li>
              <li><strong>Air travel</strong> — Airlines NO LONGER required to allow ESAs since 2021. Most charge pet fees now.</li>
              <li><strong>Restaurants/stores</strong> — NOT allowed (only service animals).</li>
              <li><strong>Public transit</strong> — varies by city.</li>
              <li>Service animals have far more rights.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get a real ESA letter</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>From licensed mental health professional (therapist, psychiatrist).</li>
              <li>Treating you for at least 30 days for emotional condition.</li>
              <li>Specific requirements per state.</li>
              <li>Letter must be on letterhead with license #.</li>
              <li>Renewed annually usually.</li>
              <li>NOT something to fake.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SCAMS to avoid</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Online services selling &quot;ESA registrations&quot; — these are FAKE. No registry exists.</li>
              <li>$60 vests + IDs proving nothing. Worthless legally.</li>
              <li>&quot;ESA letters&quot; from non-doctors — illegal.</li>
              <li>Claiming pet is ESA without legitimate condition = ADA fraud.</li>
              <li>Most landlords now check letter authenticity.</li>
              <li>Real letter requires real therapist relationship.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Service dogs for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>For mobility, hearing, visual, medical alert.</li>
              <li>Trained 1-2 years. Cost $25K-50K. Many programs FREE.</li>
              <li><strong>Canine Companions</strong> — free service dogs. Wait list 1-3 years.</li>
              <li><strong>Paws With A Cause</strong> — multiple disabilities.</li>
              <li><strong>Guide Dogs for the Blind</strong> — free for visually impaired.</li>
              <li><strong>NEADS</strong> — service dogs for various disabilities.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free therapy alternatives</h3>
            <p className="text-sm text-muted-foreground"><strong>Pet therapy visits</strong> — Pet Partners, Therapy Dogs International. Free pet visits to nursing homes/senior centers. <strong>Robotic pets</strong> — Joy For All Companion. Hasbro $130. Realistic for those with dementia. <strong>Volunteer at shelter</strong> — pet time without owning.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
