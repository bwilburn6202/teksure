import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function PetLossGrief() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Loss & Grief Resources | TekSure" description="Losing a pet is real grief. Plain-English guide to support hotlines, online communities, memorial options, and when it&apos;s time for another pet." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Loss & Grief</h1>
          <p className="text-lg text-muted-foreground">Losing a pet is real grief. You\'re not alone.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pet loss helplines (free)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>ASPCA Pet Loss Hotline</strong> — 1-877-474-3310, daytime hours.</li>
              <li><strong>Cornell University Pet Loss Support Hotline</strong> — 607-218-7457.</li>
              <li><strong>Lap of Love</strong> — 855-327-4212. Hospice + grief support.</li>
              <li><strong>Tufts Pet Loss Support Hotline</strong> — 508-839-7966.</li>
              <li><strong>Pet Loss Counseling Center (search local)</strong> — many areas have specific pet grief counselors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online support</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Association for Pet Loss and Bereavement (aplb.org)</strong>.</li>
              <li><strong>Reddit r/Petloss</strong> — kind community, 24/7.</li>
              <li><strong>Pet Compassion Careline</strong> — 855-245-8214.</li>
              <li><strong>Best Friends Animal Society</strong> — bestfriends.org has memorial pages.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Memorialize your pet</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Photo book</strong> on Shutterfly / Mixbook.</li>
              <li><strong>Custom portrait</strong> — Etsy artists, $50-300.</li>
              <li><strong>Paw print keepsake</strong> — many vets do this when pet passes.</li>
              <li><strong>Donate to a shelter in pet\'s memory</strong>.</li>
              <li><strong>Plant a tree or memorial garden</strong>.</li>
              <li><strong>Cremation jewelry / urn</strong> — variety of options.</li>
              <li><strong>Engraved bench at park</strong> through Friends of Parks programs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When (and if) to get another pet</h2>
            <p className="text-sm">No "right" timeline. Some are ready in weeks. Others wait years. Both are fine.</p>
            <p className="text-sm mt-2">Considerations:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Will you remember and tell stories of the previous pet (good)?</li>
              <li>Or will you compare unfavorably (sign to wait)?</li>
              <li>Senior considerations: pet outliving you, mobility for walks, vet costs.</li>
              <li><strong>Adopt-a-Senior-for-a-Senior programs</strong> — many shelters waive fees for seniors adopting older pets. Win-win.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For kids</h3>
            <p className="text-sm text-muted-foreground">If grandkids are processing pet loss — books like "The Tenth Good Thing About Barney" (preschool), "Goodbye Mog" (older), "Where the Red Fern Grows" (teens) help. Be honest about death; kids often handle it better when not protected from it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
