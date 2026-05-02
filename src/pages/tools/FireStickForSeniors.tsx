import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv2 } from 'lucide-react';

export default function FireStickForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amazon Fire TV Stick for Seniors | TekSure" description="Cheap Amazon streaming stick for senior TVs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fire TV Stick</h1>
          <p className="text-lg text-muted-foreground">Amazon streaming.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Fire TV Stick</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30-$50.</li><li>Plug HDMI.</li><li>Alexa voice remote.</li><li>Senior simple.</li><li>Amazon Prime focus.</li><li>Often on sale $20.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Roku</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Roku — neutral.</li><li>Fire — Amazon-pushed.</li><li>Senior preference.</li><li>Both similar features.</li><li>Roku less ads.</li><li>Compare.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Alexa built-in</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Alexa, play Reacher.&quot;</li><li>Voice search apps.</li><li>Senior easy.</li><li>Smart home control.</li><li>Free.</li><li>Convenient.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cheap entry streaming.</li><li>Old TVs become smart.</li><li>Voice search.</li><li>Most apps.</li><li>Free FreeVee.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Plug HDMI.</li><li>USB power.</li><li>Wifi.</li><li>Sign in Amazon.</li><li>Senior 20 min.</li><li>Add app channels.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch outs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Amazon ads on home.</li><li>Pushes Prime.</li><li>Senior tolerate.</li><li>Or pay $5/mo no ads.</li><li>Free with subscription.</li><li>Worth it for some.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$30 Fire Stick = senior cheap streaming</h3><p className="text-sm text-muted-foreground">$30 Fire TV Stick = senior cheapest streaming. Old TV becomes smart. Alexa voice remote. Often $20 sale. Best if Prime member already. Roku alternative if don&apos;t like ads. Both work great. Family helps install once.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
