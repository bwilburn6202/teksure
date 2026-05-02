import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorEmergencyContacts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Emergency Contacts Setup for Seniors — TekSure" description="Set up emergency contacts on iPhone, Android — accessible from lock screen." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emergency Contacts</h1>
          <p className="text-lg text-muted-foreground">Help arrives faster.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone setup</h2><p>Health app → Medical ID → Edit → Add Emergency Contacts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android setup</h2><p>Settings → Safety &amp; Emergency → Emergency Contacts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lock screen visible</h2><p>Toggle ON. EMTs see contacts without unlocking phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best contacts</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Adult child or spouse</li><li>Backup family member</li><li>Doctor or healthcare proxy</li><li>Lawyer</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Update yearly</h2><p>Phone numbers change. Old numbers fail in emergencies.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tell contacts</h2><p>Make sure they know they&apos;re your emergency contact. Answer unknown numbers.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Test SOS shortcut once. iPhone hold side+volume buttons.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
