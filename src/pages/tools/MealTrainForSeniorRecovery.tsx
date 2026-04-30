import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Soup } from 'lucide-react';

export default function MealTrainForSeniorRecovery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Meal Train for Senior Recovery | TekSure" description="Coordinate meals from family/friends. Senior recovery tool." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Soup className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Meal Train</h1>
          <p className="text-lg text-muted-foreground">Coordinate meal help.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free site.</li><li>Friends sign up to bring meals.</li><li>Calendar coordinates.</li><li>Senior recovery help.</li><li>Less &quot;what can I do?&quot;</li><li>Trusted.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When useful</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Surgery recovery.</li><li>New baby.</li><li>Bereavement.</li><li>Chemo treatment.</li><li>Senior crisis.</li><li>Community gathers.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>mealtrain.com.</li><li>Free.</li><li>List dietary needs.</li><li>Set dates needing meals.</li><li>Share link with friends.</li><li>They sign up.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Alternatives</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Take Them A Meal.</li><li>Lotsa Helping Hands.</li><li>Caring Calendar.</li><li>Senior options.</li><li>All free.</li><li>Pick easiest.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Other help</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Lawn mowing.</li><li>Dog walking.</li><li>Errands.</li><li>Lotsa Helping Hands tracks any.</li><li>Senior comprehensive.</li><li>Friends + family help.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior dignity</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Accepting help hard.</li><li>People want to help.</li><li>Saying yes is gift.</li><li>Senior receive grace.</li><li>Family member sets up.</li><li>Senior just receives.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Meal Train = senior community love</h3><p className="text-sm text-muted-foreground">Free Meal Train coordinates friends bringing food after senior surgery/loss. People want to help — give them a way. One organizer sets up, friends sign up, meals appear. Receive grace. Worth setting up. Best senior crisis community tool.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
