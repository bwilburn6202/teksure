import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function OutschoolForGrandkidSharing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Outschool for Grandparents | TekSure" description="Take classes with grandkids. Outschool senior + grandkid guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Outschool with Grandkids</h1>
          <p className="text-lg text-muted-foreground">Learn together remotely.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Live online kid classes.</li><li>Ages 3-18.</li><li>Multi-generation friendly.</li><li>$10-$20 per class.</li><li>Senior + grandkid bond.</li><li>Free for grandparent observer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Take together</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Long-distance grandkid.</li><li>Both join Zoom.</li><li>Cooking class together.</li><li>Drawing class together.</li><li>Bond despite distance.</li><li>Senior magic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Topics</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cooking + baking.</li><li>Art + drawing.</li><li>Magic tricks.</li><li>Languages.</li><li>Coding for kids.</li><li>Senior + grandkid both learn.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Solo for grandparent</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Some classes welcome adult observers.</li><li>Check class description.</li><li>Pay grandkid fee — both join.</li><li>Senior attend solo allowed sometimes.</li><li>Read terms.</li><li>Mostly kid-focused.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Birthday gift</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Senior buys grandkid class.</li><li>Better than physical gift.</li><li>Memory created.</li><li>Online gift cards.</li><li>Senior special touch.</li><li>Grandkid loves.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Time Together</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>FaceTime good but limited.</li><li>Outschool = shared activity.</li><li>Real bond moment.</li><li>Senior creative connection.</li><li>Better than Zoom call.</li><li>Worth the small fee.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$15 class = senior grandkid bond</h3><p className="text-sm text-muted-foreground">$15 Outschool cooking class together = senior + grandkid memorable shared activity across distance. Both bake same recipe simultaneously. Compare results. Better than awkward video calls. Best long-distance grandparent connector. Try one class.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
