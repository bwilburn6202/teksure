import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Edit } from 'lucide-react';

export default function SeniorObituaryPlanning() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Obituary Planning | TekSure" description="Pre-write obituary. Senior estate gift to family." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Edit className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Obituary Planning</h1>
          <p className="text-lg text-muted-foreground">Senior write own.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior write own</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Family burdened to write fast.</li><li>Senior tells own story.</li><li>Personal touch.</li><li>Reduces stress on loved ones.</li><li>Worth time.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What include</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Birth + dates.</li><li>Family list.</li><li>Career highlights.</li><li>Senior accomplishments.</li><li>Hobbies + passions.</li><li>Favorite quote.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Where to save</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Notes app.</li><li>Print + estate file.</li><li>Tell executor location.</li><li>Senior accessible.</li><li>Update yearly.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Photos pick</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>3 favorite photos.</li><li>Younger + older.</li><li>Senior chooses.</li><li>Family thank you.</li><li>iCloud labeled folder.</li><li>Worth.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Funeral wishes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Burial vs cremation.</li><li>Service type.</li><li>Music chosen.</li><li>Donations vs flowers.</li><li>Senior decision-saver.</li><li>Worth document.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Memorial sites</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Legacy.com.</li><li>Forever Missed.</li><li>Senior plan online presence.</li><li>Family contributes.</li><li>Photos + memories.</li><li>Free options.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Pre-write obituary = senior gift to family</h3><p className="text-sm text-muted-foreground">Senior pre-write own obituary + pick 3 photos + funeral wishes documented = priceless gift to grieving family. Free Notes app or printed in estate file. Tell executor location. Reduces decisions during mourning. Most loving senior estate prep.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
