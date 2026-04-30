import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Siren } from 'lucide-react';

export default function SOSiPhoneSetupForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPhone SOS Setup for Seniors | TekSure" description="One-button emergency call. Senior iPhone SOS setup guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Siren className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPhone SOS</h1>
          <p className="text-lg text-muted-foreground">One-button 911.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">How to use</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Press + hold side + volume.</li><li>SOS slider appears.</li><li>Slide to call 911.</li><li>Or 5 quick presses side button.</li><li>Senior emergency.</li><li>Always works.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup contacts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Emergency SOS.</li><li>Set Up Emergency Contacts.</li><li>Adds family.</li><li>They get alert too.</li><li>Senior safety.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Auto Call</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>5 quick clicks.</li><li>Auto dials 911.</li><li>3 sec countdown.</li><li>Cancelable.</li><li>Senior fast access.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Medical ID</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Health app — Medical ID.</li><li>Allergies, conditions.</li><li>Medications list.</li><li>Emergency contacts.</li><li>Senior visible from lock screen.</li><li>EMTs see.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Watch SOS</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hold side button.</li><li>SOS slider.</li><li>Or wrist crash detect.</li><li>Senior backup.</li><li>Falls auto-detect.</li><li>Free with watch.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior practice</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Practice triggering.</li><li>5 clicks side.</li><li>Cancel before 911 call.</li><li>Senior memorize.</li><li>Family help test.</li><li>Free + life-saving.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">5 quick clicks = senior 911</h3><p className="text-sm text-muted-foreground">Senior 5 quick clicks side button = 911 + family alert + location. Set up Medical ID with conditions, meds, contacts. Practice once. Free. Most senior phone life-saving feature. Adult kid sets up Medical ID + emergency contacts.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
