import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function SeniorEmergencyKitDigital() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Emergency Kit — Senior Guide" description="Save important documents to your phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Emergency Kit</h1>
          <p className="text-lg text-muted-foreground">Important docs on your phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Insurance cards</h2><p>Health, auto, home. Take photos. Save to a private album in Photos.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. ID copies</h2><p>Driver's license, passport, Medicare card. Photos help if lost.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Medications list</h2><p>Type all medications, doses, schedules in Notes. Update at each doctor visit.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Doctor contacts</h2><p>Save all doctor numbers in Contacts. Fast access in emergency.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Will and DPOA</h2><p>Scan to PDF. Save to iCloud or Google Drive. Family knows where to find.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Password notes</h2><p>Use a password manager. Don't store passwords in plain text photos.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Phone face/fingerprint lock keeps these documents secure. Lost phone — info is encrypted.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
