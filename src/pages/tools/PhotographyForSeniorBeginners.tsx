import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function PhotographyForSeniorBeginners() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Photography for Senior Beginners | TekSure" description="Take better photos with phone or camera. Senior beginner photography guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Photography</h1>
          <p className="text-lg text-muted-foreground">Better photos in retirement.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Phone first</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone 13+ great camera.</li><li>Learn before buying gear.</li><li>Portrait mode.</li><li>Night mode.</li><li>Always with you.</li><li>Free already.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Composition basics</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Rule of thirds.</li><li>Leading lines.</li><li>Frame within frame.</li><li>Get closer.</li><li>Light direction matters.</li><li>Practice daily.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free learning</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>YouTube — Tony Northrup.</li><li>Photography Life blog.</li><li>Adorama TV.</li><li>Local senior classes.</li><li>Library photo books.</li><li>No need to pay courses.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Editing apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Snapseed — free.</li><li>Lightroom Mobile — free version.</li><li>Adjust exposure + color.</li><li>Crop better.</li><li>Save as JPG.</li><li>Share with family.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">If you want camera</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Used Sony A6000 ($300).</li><li>Mirrorless lighter than DSLR.</li><li>Smaller for travel.</li><li>Senior wrists thank you.</li><li>Kit lens to start.</li><li>Don&apos;t buy too much.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior subjects</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Grandkids.</li><li>Garden flowers.</li><li>Birds at feeder.</li><li>Travel landscapes.</li><li>Family heirlooms.</li><li>Tell your story.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Phone camera = retirement gift</h3><p className="text-sm text-muted-foreground">Modern iPhone takes photos rivaling pro cameras of 10 years ago. Free Snapseed editor finishes them. Free YouTube teaches everything. Many senior photographers find their best work in retirement. Document family, garden, travel — leave a visual legacy.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
