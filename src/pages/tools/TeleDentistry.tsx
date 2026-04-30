import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smile } from 'lucide-react';

export default function TeleDentistry() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Teledentistry — When It Helps | TekSure" description="Online dental consultations, second opinions, simple prescriptions. Plain-English picks for tele-dentistry services." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smile className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Teledentistry</h1>
          <p className="text-lg text-muted-foreground">Quick dental advice without an office visit.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When teledentistry helps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Toothache started — is it an emergency?</li>
              <li>Second opinion on a $3,000 treatment plan.</li>
              <li>Antibiotic / pain prescription for sudden infection.</li>
              <li>Cracked filling — need to be seen in person?</li>
              <li>Rural area — no nearby dentist.</li>
              <li>After-hours pain — help triage before ER.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Services to try</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>The TeleDentists</strong> — $45/visit, available 24/7. Real licensed dentists.</li>
              <li><strong>Toothpic</strong> — $40-90 second-opinion service. Send photos, dentist reviews.</li>
              <li><strong>Denteractive</strong> — $50-100 per visit.</li>
              <li><strong>Your own dentist&apos;s office</strong> — many now offer free or low-cost virtual consults. Always ask.</li>
              <li><strong>Medicare Advantage</strong> — some plans include teledental. Check your plan.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free / cheap dental care</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Dental schools</strong> — students treat at 30-50% off. Search "[your state] dental school clinic".</li>
              <li><strong>Federally Qualified Health Centers (FQHC)</strong> — sliding-scale fees, hrsa.gov.</li>
              <li><strong>Mission of Mercy events</strong> — free dental clinics annually in many cities.</li>
              <li><strong>Donated Dental Services</strong> — free comprehensive dentistry for vulnerable seniors. dentallifeline.org.</li>
              <li><strong>Original Medicare</strong> — does NOT cover dental. Medicare Advantage often does.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When you MUST go in person</h3>
            <p className="text-sm text-muted-foreground">Severe pain that doesn&apos;t respond to ibuprofen, swelling spreading to face/jaw, knocked-out tooth, broken tooth showing nerve, dental abscess (lump on gum). Don&apos;t teledentistry these — go to ER or emergency dentist same day.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
