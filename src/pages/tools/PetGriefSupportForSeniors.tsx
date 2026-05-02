import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function PetGriefSupportForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Grief Support for Seniors | TekSure" description="Resources for senior pet loss + grief." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Grief</h1>
          <p className="text-lg text-muted-foreground">Senior pet loss.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Real grief</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pets = family.</li><li>Loss is real.</li><li>Senior heart-breaking.</li><li>Don&apos;t minimize.</li><li>Allow yourself.</li><li>Time helps.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pet loss hotlines</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>ASPCA 1-877-474-3310.</li><li>Free.</li><li>Trained volunteers.</li><li>Senior comfort.</li><li>Talk to someone.</li><li>Open hours posted.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">In-home euthanasia</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Lap of Love nationwide.</li><li>$300-$600.</li><li>Peaceful at home.</li><li>Senior dignified.</li><li>Better than vet office.</li><li>Worth premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Memorial</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Photo books.</li><li>Cremation paw print.</li><li>Garden memorial.</li><li>Senior comfort tradition.</li><li>Family helps.</li><li>Healing process.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When new pet?</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No timeline.</li><li>Senior heart ready.</li><li>Months or years.</li><li>Don&apos;t replace — new chapter.</li><li>Different breed sometimes easier.</li><li>Personal choice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Online support</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pet loss Facebook groups.</li><li>Reddit r/petloss.</li><li>Senior community.</li><li>Free.</li><li>Share stories.</li><li>Healing.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free ASPCA hotline = senior pet grief support</h3><p className="text-sm text-muted-foreground">Senior pet loss real grief. Free ASPCA 1-877-474-3310 hotline. Lap of Love in-home euthanasia $300-$600 peaceful at home. Memorial photo books, paw print, garden. Online groups support. No timeline new pet — senior heart ready when ready. Take care.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
