import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smile } from 'lucide-react';

export default function FrndlyTVForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Frndly TV for Seniors | TekSure" description="Senior-friendly streaming for $9. Hallmark, GAC, INSP, Ride TV." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smile className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Frndly TV</h1>
          <p className="text-lg text-muted-foreground">$9 senior streaming.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$9/month streaming.</li><li>Family-friendly channels.</li><li>Hallmark, GAC, INSP.</li><li>Ride TV, MeTV, FETV.</li><li>40+ channels.</li><li>Senior-targeted.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Channels</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hallmark Movies.</li><li>Curiosity.</li><li>Game Show Network.</li><li>QVC.</li><li>Weather Channel.</li><li>Senior favorites.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">DVR</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cloud DVR — Plus plan.</li><li>$11/month plan.</li><li>Record favorites.</li><li>Watch later.</li><li>Senior convenience.</li><li>Skip commercials.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">No news/sports</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No CNN/Fox/ESPN.</li><li>By design.</li><li>Senior peaceful.</li><li>Pair with antenna for local news.</li><li>Or YouTube TV.</li><li>Senior choice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cheap.</li><li>No politics.</li><li>Family movies.</li><li>Mystery + romance.</li><li>Game shows.</li><li>Senior comfort.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>frndlytv.com.</li><li>App on Roku, Apple TV, Fire.</li><li>$9 first month often $1.</li><li>Cancel anytime.</li><li>Senior simple.</li><li>Try free trial.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$9 senior streaming sweet spot</h3><p className="text-sm text-muted-foreground">Frndly TV at $9 hits senior sweet spot — Hallmark, game shows, weather, no politics. Pair with antenna for local news. Total senior streaming under $20/month. Many cancel cable, replace with this combo. Senior peaceful viewing.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
