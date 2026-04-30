import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function FitbitInspireForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Fitbit Inspire for Seniors | TekSure" description="Senior-friendly Fitbit Inspire 3 + alternatives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fitbit Inspire</h1>
          <p className="text-lg text-muted-foreground">Senior-friendly tracker.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Inspire 3</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$100.</li><li>10-day battery.</li><li>Heart rate.</li><li>Sleep tracking.</li><li>Senior simple band.</li><li>Free Fitbit app.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Charge 6</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$160.</li><li>GPS built-in.</li><li>ECG + Google Maps.</li><li>Senior more features.</li><li>7-day battery.</li><li>Worth upgrade.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Apple Watch</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Fitbit cheaper.</li><li>Longer battery.</li><li>Apple — apps + screen.</li><li>Senior simpler need Fitbit.</li><li>Both excellent.</li><li>Try both.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Step goals.</li><li>Activity reminders.</li><li>Heart rate trends.</li><li>Sleep insights.</li><li>Senior motivation.</li><li>Long battery.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Premium $10/mo</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Mindfulness sessions.</li><li>Workouts.</li><li>Senior health insights.</li><li>Sleep score detail.</li><li>Trial 6 months.</li><li>Optional.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family share</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Adult kid views senior data.</li><li>Caregiver insight.</li><li>With permission.</li><li>Senior + family.</li><li>Free.</li><li>Encourages activity.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$100 Fitbit Inspire = senior simpler tracker</h3><p className="text-sm text-muted-foreground">$100 Fitbit Inspire 3 = senior simpler than Apple Watch. 10-day battery. Steps, heart rate, sleep. Free Fitbit app. Family-share with adult kids. Skip $10 Premium unless want detail. Best senior simpler tracker.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
