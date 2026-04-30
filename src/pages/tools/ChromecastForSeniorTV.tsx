import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cast } from 'lucide-react';

export default function ChromecastForSeniorTV() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chromecast for Senior TVs | TekSure" description="Cheap streaming for seniors. Google Chromecast / Google TV setup." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cast className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chromecast / Google TV</h1>
          <p className="text-lg text-muted-foreground">Cheap senior streaming.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$50 dongle.</li><li>Plugs into HDMI.</li><li>Streaming apps + voice.</li><li>Cheaper than Apple TV.</li><li>Now &quot;Google TV.&quot;</li><li>Senior-friendly setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Plug HDMI into TV.</li><li>USB power.</li><li>Google Home app on phone.</li><li>Connect to wifi.</li><li>Sign in Google.</li><li>20 minutes total.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$50 cheap.</li><li>Phone &quot;casts&quot; to TV.</li><li>Voice remote.</li><li>YouTube + Netflix.</li><li>Big screen photos.</li><li>Easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Casting</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>YouTube on phone.</li><li>Tap cast icon.</li><li>Plays on TV.</li><li>Phone is remote.</li><li>Senior pop-up videos.</li><li>Magic for grandkids visit.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Roku, Fire TV</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Roku — most apps.</li><li>Fire TV — Amazon ties.</li><li>Chromecast — Google + casting.</li><li>All ~$50.</li><li>Pick your phone&apos;s ecosystem.</li><li>Android = Chromecast.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tip</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>If old non-smart TV.</li><li>Adds streaming.</li><li>$50 vs $500 new TV.</li><li>Voice remote handy.</li><li>Subtitles work.</li><li>Family can help.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$50 = streaming on any TV</h3><p className="text-sm text-muted-foreground">Have a 10-year-old TV? $50 Chromecast adds Netflix, YouTube, Disney+. Voice remote — &quot;Hey Google, play Yellowstone.&quot; Cast phone photos to big screen. Don&apos;t buy new $500 smart TV. Old TV + Chromecast = same result. Senior frugal win.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
