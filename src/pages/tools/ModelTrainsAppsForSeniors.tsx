import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Train } from 'lucide-react';

export default function ModelTrainsAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Model Trains + Apps for Senior Hobbyists | TekSure" description="Build your dream layout. Apps and resources for senior model railroaders." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Train className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Model Trains</h1>
          <p className="text-lg text-muted-foreground">Apps for senior railroaders.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">DCC++ EX</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free DCC controller app.</li><li>Phone runs trains.</li><li>Replace expensive throttle.</li><li>Open source.</li><li>Senior tinkerer favorite.</li><li>Save $200+.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Layout planning</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>SCARM — free planner.</li><li>AnyRail $59.</li><li>Plan before buying track.</li><li>Avoid expensive mistakes.</li><li>3D visualization.</li><li>Save trip to hardware store.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Communities</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>NMRA.org — National.</li><li>Local club division.</li><li>Senior-heavy hobby.</li><li>Open house events.</li><li>Layout tours.</li><li>Welcoming.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Scale picks</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>HO — most popular.</li><li>N — small spaces.</li><li>O — large + nostalgic.</li><li>G — garden trains.</li><li>Match your space.</li><li>Eyesight matters too.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior-friendly tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Layout at standing height.</li><li>Good lighting.</li><li>Magnifier visor for detail.</li><li>Larger scale = easier.</li><li>Take breaks for eyes/back.</li><li>Modular = easier to move.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">YouTube channels</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Boomer Diorama.</li><li>Trainmasters TV.</li><li>Luke Towan — scenery.</li><li>Free instruction.</li><li>Senior pace + clear.</li><li>Watch before buying.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Model trains = senior dream hobby</h3><p className="text-sm text-muted-foreground">Combines woodworking, electronics, painting, history, problem-solving — everything seniors love. Free apps replace expensive controllers. Local NMRA clubs welcoming. Hobby fills retirement years productively. Many seniors realize childhood dreams in basement layouts.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
