import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function WalgreensAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Walgreens App for Seniors | TekSure" description="Refill prescriptions, photo prints, deals. Walgreens senior app guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Walgreens App</h1>
          <p className="text-lg text-muted-foreground">Pharmacy + photo + deals.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Refill prescriptions</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tap Rx number.</li><li>Or scan bottle.</li><li>Pickup or delivery.</li><li>Free.</li><li>Senior easy.</li><li>Same as in-store.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pill reminders</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Schedule meds.</li><li>Refill alerts.</li><li>Doctor visit prep.</li><li>Senior medication safety.</li><li>Free with app.</li><li>Better than memory.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">myWalgreens points</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>1% rewards.</li><li>Walgreens brand 5%.</li><li>Earn cash credits.</li><li>Senior accumulate.</li><li>Free signup.</li><li>Apply at checkout.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Photo prints</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Order prints in app.</li><li>1-hour pickup.</li><li>Same-day photo books.</li><li>Senior gifts.</li><li>Cheaper than Shutterfly often.</li><li>Quality good.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior 60+ Tuesday</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Discontinued nationally.</li><li>Some stores still offer.</li><li>Ask local Walgreens.</li><li>Senior worth asking.</li><li>Or AARP discount.</li><li>Stack with myWalgreens.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Vaccine scheduling</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Flu, shingles, pneumonia, COVID.</li><li>Schedule in app.</li><li>Insurance auto-billed.</li><li>Senior convenience.</li><li>Free with most insurance.</li><li>Avoid doctor visit.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Walgreens app = senior pharmacy hub</h3><p className="text-sm text-muted-foreground">Free Walgreens app = refill Rx, pill reminders, photo prints, vaccines, rewards. All senior pharmacy needs in one. Refill from couch — pickup ready in hours. Compare CVS app similar. Senior most-used pharmacy mobile feature.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
