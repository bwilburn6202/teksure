import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ship } from 'lucide-react';

export default function CruiseAppsDeepDive() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cruise App Deep Dive for Seniors | TekSure" description="Cruise line apps explained. Senior at-sea app guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ship className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cruise Apps</h1>
          <p className="text-lg text-muted-foreground">At-sea app navigation.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior need</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>View daily schedule.</li><li>Make reservations.</li><li>Order room service.</li><li>Track folio charges.</li><li>Boarding pass.</li><li>Senior must.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pre-cruise</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Download before sailing.</li><li>Check-in via app.</li><li>Upload photo.</li><li>Skip line at port.</li><li>Senior smooth.</li><li>Save 30 min.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Onboard</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Daily program.</li><li>Show times.</li><li>Restaurant reservations.</li><li>Excursions.</li><li>Senior all-in-one.</li><li>Replaces paper.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Wifi packages</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cheaper pre-board.</li><li>$10-$25/day.</li><li>Senior calls home.</li><li>FaceTime grandkids.</li><li>Worth pre-buying.</li><li>Or app works without.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Brand apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Royal Caribbean App.</li><li>Carnival Hub.</li><li>Princess MedallionClass.</li><li>Norwegian Cruise Line app.</li><li>Each brand own.</li><li>Senior download specific.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family share</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Family group find each other.</li><li>Multiple cabins linked.</li><li>Reservation together.</li><li>Senior + grandkids.</li><li>Free in app.</li><li>Save lots.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Brand cruise app = senior cruise must</h3><p className="text-sm text-muted-foreground">Modern cruises need brand app. Princess MedallionClass + Royal Caribbean App + Carnival Hub. Daily schedule, reservations, find family. Many work offline. Pre-board check-in. Senior smoother experience. Download before leaving home.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
