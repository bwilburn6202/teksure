import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorICEContacts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="ICE Contacts for Seniors — TekSure" description="Add ICE (in case of emergency) contacts to your phone — quick access for first responders." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">ICE Contacts</h1>
          <p className="text-lg text-muted-foreground">In Case of Emergency — first responders look here first.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What ICE means</h2><p>EMTs and ER staff check phone for &ldquo;ICE&rdquo; contacts. Standard practice for 20 years.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Add to contacts</h2><p>Add 2-3 contacts. Name them: ICE 1 - Daughter Mary, ICE 2 - Son John.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Medical ID</h2><p>Better than just ICE — info shows on lock screen even if phone is locked.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best contacts</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Adult child or spouse</li><li>Backup family</li><li>Primary care doctor</li><li>Lawyer with healthcare proxy</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tell your contacts</h2><p>Make sure they know they&apos;re your ICE contact. They should answer unknown numbers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Update yearly</h2><p>Keep numbers current. Old numbers fail in emergencies.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Print your ICE contacts on a wallet card too. Phones can break.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
