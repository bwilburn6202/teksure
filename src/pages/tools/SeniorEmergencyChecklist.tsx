import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardCheck } from 'lucide-react';

export default function SeniorEmergencyChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Emergency Phone Checklist for Seniors — TekSure" description="Set up your phone for emergencies — fall detection, contacts, lock screen info." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ClipboardCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emergency Phone Checklist</h1>
          <p className="text-lg text-muted-foreground">10-minute setup. Lifesaving.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">1. Set up Medical ID</h2><p>Health app → Medical ID. Visible on lock screen.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">2. Add Emergency Contacts</h2><p>Same Medical ID screen. Add 2-3 family members.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">3. Test Emergency SOS</h2><p>Hold side + volume button. Knowing how to use it removes panic.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">4. Enable Fall Detection</h2><p>Apple Watch only. Settings → Emergency SOS → Fall Detection.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">5. Find My Phone ON</h2><p>Settings → Find My → Find My iPhone. Family can locate you.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">6. Battery widget</h2><p>Add to home screen. Watch charge before going out.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">7. Backup phone weekly</h2><p>iCloud or Google Drive auto-backup. Phone loss isn&apos;t catastrophic.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Print this list. Check off as you do each step.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
