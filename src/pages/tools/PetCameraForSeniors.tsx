import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function PetCameraForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Cameras for Senior Pet Owners | TekSure" description="Watch + treat pets remotely. Senior pet camera guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Cameras</h1>
          <p className="text-lg text-muted-foreground">Watch pets remotely.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Furbo</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$200.</li><li>Treat-tossing.</li><li>Bark alerts.</li><li>Dog-focused.</li><li>Senior peace away.</li><li>HD video.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">PetCube</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$80-$200.</li><li>Two-way audio.</li><li>Talk to pet.</li><li>Senior reassurance.</li><li>Free vet chat.</li><li>Pet-tested.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Wyze Cam</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30 cheap option.</li><li>Watch any pet.</li><li>Senior frugal.</li><li>2-way audio.</li><li>Phone app.</li><li>Alerts on motion.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Check pet from doctor.</li><li>Hear barking.</li><li>Talk to anxious pet.</li><li>Senior travel peace.</li><li>Family pet help.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Plug in.</li><li>Wifi setup.</li><li>App on phone.</li><li>10 min done.</li><li>Senior easy.</li><li>Family help if needed.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior priority</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>If pet anxious alone.</li><li>Seniors gone often.</li><li>Watch + reassure.</li><li>Less guilt.</li><li>Pet less stressed.</li><li>Senior + pet win.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$30 Wyze + iPhone = senior pet peace</h3><p className="text-sm text-muted-foreground">$30 Wyze Cam + iPhone app = senior watches dog from doctor. Hear barks, talk to pet. No need for $200 Furbo unless treats important. Many seniors travel less anxious knowing pet&apos;s ok. Best $30 pet peace.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
