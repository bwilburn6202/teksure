import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ear } from 'lucide-react';

export default function AssistiveListeningSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Assistive Listening Devices for Seniors | TekSure" description="PSAPs, pocket talkers, FM systems for senior hearing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ear className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Assistive Listening</h1>
          <p className="text-lg text-muted-foreground">Senior hearing helpers.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pocket talker</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$150-$200.</li><li>Senior 1-on-1 conversations.</li><li>Doctor visits.</li><li>Restaurant.</li><li>Williams Sound popular.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">PSAPs OTC</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$50-$300.</li><li>Personal sound amp.</li><li>Cheaper than hearing aid.</li><li>Senior mild loss.</li><li>Not FDA hearing aid.</li><li>Try first.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">FM system</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Speaker mic + receiver.</li><li>Senior class/church.</li><li>Senior far speaker direct ear.</li><li>$300-$1,000.</li><li>Audiologist setup.</li><li>Worth specific situations.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Loop systems</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Many public spaces have.</li><li>Hearing aid telecoil receives.</li><li>Senior at theaters, churches.</li><li>Look for loop sign.</li><li>Free use.</li><li>Activate telecoil.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPhone Live Listen</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone as mic.</li><li>AirPods receive.</li><li>Senior free option.</li><li>Restaurant + meeting.</li><li>Built-in.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When real aids</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Moderate-severe loss.</li><li>Multiple environments.</li><li>Senior daily wear.</li><li>$1,500-$5,000.</li><li>Costco $1,400 cheap.</li><li>Or AirPods Pro 2 FDA.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$200 pocket talker = senior conversation help</h3><p className="text-sm text-muted-foreground">$200 Williams Sound pocket talker = senior 1-on-1 conversations at doctor + restaurant. Plus iPhone Live Listen free. PSAPs $50-$300 mild loss. AirPods Pro 2 $249 FDA hearing aid mild-moderate. Multiple options before $5,000 traditional aids.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
