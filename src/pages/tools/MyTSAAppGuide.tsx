import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function MyTSAAppGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="MyTSA App Guide for Senior Travelers | TekSure" description="Free MyTSA app — wait times, what to pack, senior travel tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">MyTSA App</h1>
          <p className="text-lg text-muted-foreground">Free TSA travel helper.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Real-time security wait times.</li><li>What you can bring.</li><li>Plan arrival time.</li><li>TSA PreCheck status.</li><li>Free + official.</li><li>iOS + Android.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Wait time check</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Search your airport.</li><li>See line predictions.</li><li>Plan how early to arrive.</li><li>Avoid stress.</li><li>Updated frequently.</li><li>Crowdsourced data.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Can I bring this?</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Search any item.</li><li>Says checked vs carry-on.</li><li>Liquids rule (3.4 oz).</li><li>Medications allowed.</li><li>Knitting needles ok.</li><li>End the guesswork.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Medications</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Always allowed in carry-on.</li><li>Liquids over 3.4 oz ok if medical.</li><li>Declare to TSA officer.</li><li>Keep in original bottles.</li><li>Pill organizer fine.</li><li>CPAP machine ok.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Arrive 2 hours domestic.</li><li>3 hours international.</li><li>Wheelchair request at airline.</li><li>Slip-on shoes for security.</li><li>No belt with metal buckle.</li><li>Empty pockets ahead.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">TSA Cares</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>1-855-787-2227.</li><li>Call 72 hours before flight.</li><li>Help for medical conditions.</li><li>Mobility assistance.</li><li>Cognitive disabilities.</li><li>Free service.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free + reduces travel anxiety</h3><p className="text-sm text-muted-foreground">Download MyTSA app + save TSA Cares phone number. These two tools reduce senior travel stress dramatically. Know wait times, what to pack, and have help available. Travel becomes manageable instead of overwhelming. Download before next trip.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
