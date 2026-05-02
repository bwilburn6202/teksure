import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function AirBnBHostingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Airbnb Hosting for Seniors | TekSure" description="Senior side income hosting Airbnb spare room." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Airbnb Hosting</h1>
          <p className="text-lg text-muted-foreground">Senior side income.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Income potential</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$500-$3,000/month.</li><li>Spare room.</li><li>Senior empty nest.</li><li>Travel stipend.</li><li>Worth trying.</li><li>Tax implications.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Photos critical.</li><li>Pro photographer free Airbnb.</li><li>Senior list 30-min.</li><li>Background check guests.</li><li>Set rules.</li><li>Worth time.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior considerations</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Strangers in home.</li><li>Cleaning + laundry.</li><li>Senior energy?</li><li>Co-host help — split fees.</li><li>Worth thinking.</li><li>Try first.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Insurance check</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Airbnb $1M host protection.</li><li>Personal homeowners may exclude.</li><li>Senior verify coverage.</li><li>Notify insurer.</li><li>Worth call.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Snowbird hosting</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Rent during travels.</li><li>Senior offset trip cost.</li><li>Long-term renters easier.</li><li>$1,500-$5,000/month.</li><li>Co-host while gone.</li><li>Worth maximize.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tax</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Income reportable.</li><li>Deductions allowed.</li><li>Senior consult CPA.</li><li>1099 from Airbnb.</li><li>Worth professional advice.</li><li>Don&apos;t skip.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Airbnb spare room = senior $500-$3k/mo</h3><p className="text-sm text-muted-foreground">Senior empty nest spare room = $500-$3k/month Airbnb income. Free pro photos boost listing. Co-host help cleans + manages if want. $1M host protection insurance. Snowbird hosting whole house during travel maximizes. CPA tax help.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
