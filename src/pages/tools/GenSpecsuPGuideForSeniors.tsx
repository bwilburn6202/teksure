import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

export default function GenSpecsuPGuideForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Geek Squad for Seniors | TekSure" description="Best Buy Geek Squad senior tech help guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Geek Squad</h1>
          <p className="text-lg text-muted-foreground">Senior tech support.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Total Tech</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$200/year membership.</li><li>24/7 tech support.</li><li>In-store + remote help.</li><li>Senior friendly.</li><li>Most devices.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">In-home setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$100-$200 visit.</li><li>TV mount, computer, etc.</li><li>Senior comfort.</li><li>Trained techs.</li><li>Worth aging in place.</li><li>Save back strain.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Store free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Today at Apple.</li><li>Free in-store classes.</li><li>Senior welcome.</li><li>iPhone basics.</li><li>Photo workshops.</li><li>Free always.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Library tech help</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free senior classes.</li><li>One-on-one appointments.</li><li>Senior community.</li><li>Free + comfortable.</li><li>Local tech instructors.</li><li>Worth checking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior centers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free or low-cost classes.</li><li>Patient teachers.</li><li>Peer learners.</li><li>Senior-paced.</li><li>Worth visiting.</li><li>Local search.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Avoid scams</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Microsoft doesn&apos;t cold call.</li><li>Apple doesn&apos;t pop-up alert.</li><li>Senior never let stranger remote.</li><li>Verify direct.</li><li>Hang up.</li><li>Block + report.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Apple Store + library = senior tech help</h3><p className="text-sm text-muted-foreground">Free Today at Apple Store classes + free library senior tech sessions = best senior tech help. Apple AccessibilityHelpline free 1-877-204-3930. Skip $200 Geek Squad if budget. But Geek Squad worth in-home setup. Avoid cold-call scams.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
