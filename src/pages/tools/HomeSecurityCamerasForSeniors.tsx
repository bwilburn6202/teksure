import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function HomeSecurityCamerasForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Security Cameras for Seniors | TekSure" description="Wyze, Ring, Nest cameras for senior peace of mind." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Security Cameras</h1>
          <p className="text-lg text-muted-foreground">Senior peace.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Wyze Cam</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30 each.</li><li>$3/mo cloud or free local.</li><li>Senior cheap option.</li><li>Phone app.</li><li>Multi-camera.</li><li>Best budget.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Ring</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$60-$200.</li><li>Indoor + outdoor.</li><li>$3-$10/mo subscription.</li><li>Senior trusted brand.</li><li>Amazon-owned.</li><li>Privacy concerns.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Eufy local</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$100-$200.</li><li>No subscription.</li><li>Senior privacy preferred.</li><li>Local storage.</li><li>HomeKit.</li><li>Worth premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>See visitors.</li><li>Package theft caught.</li><li>Pet monitoring.</li><li>Night vision.</li><li>Senior alone safer.</li><li>Family checks too.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Plug in.</li><li>App pairs.</li><li>Senior 10-min each.</li><li>Family help install.</li><li>Mount or shelf.</li><li>Position important.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Where to place</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Front door.</li><li>Back door.</li><li>Driveway.</li><li>Senior coverage.</li><li>Indoor away from privacy.</li><li>Disable when home.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$30 Wyze = senior cheap security</h3><p className="text-sm text-muted-foreground">$30 Wyze Cam = senior cheap home monitoring. Free local recording. Or $100 Eufy if want privacy. Front + back door coverage. Phone alerts package + visitors. Senior alone safer. Family checks too. Most senior security upgrade.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
