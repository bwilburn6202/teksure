import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bird } from 'lucide-react';

export default function BirdFeederSmartCamForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Bird Feeder Cameras for Seniors | TekSure" description="Bird Buddy + smart feeder cams. Senior backyard joy." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bird className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Bird Feeders</h1>
          <p className="text-lg text-muted-foreground">Senior backyard joy.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bird Buddy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$200.</li><li>Phone alerts on bird visits.</li><li>AI identifies species.</li><li>Senior most popular.</li><li>Solar option.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Netvue Birdfy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$200-$300.</li><li>Similar tech.</li><li>Free AI 1 year.</li><li>Senior alternative.</li><li>HD video.</li><li>Solar add-on.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Watch birds from indoors.</li><li>Senior weather any.</li><li>Track species visited.</li><li>Share videos with family.</li><li>Daily joy.</li><li>Educational.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hang in yard.</li><li>Wifi connect.</li><li>Charge battery (or solar).</li><li>Fill seed.</li><li>Senior 30-min.</li><li>App pairs.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cheap alternative</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$15 regular feeder.</li><li>Wyze Cam $30 nearby.</li><li>Senior cheaper.</li><li>DIY smart.</li><li>Less seamless.</li><li>Works.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior community</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bird Buddy app community.</li><li>Share rare visits.</li><li>Senior connection.</li><li>Learn species.</li><li>Free in app.</li><li>Joy.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$200 Bird Buddy = senior daily joy</h3><p className="text-sm text-muted-foreground">$200 Bird Buddy smart feeder cam = senior daily backyard joy. AI identifies species visiting. Watch from indoors any weather. Phone alerts on visits. Share videos with family. Most under-considered senior wellness tech. Joy + education + nature.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
