import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { EyeOff } from 'lucide-react';

export default function DataBrokerOptOut() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Data Broker Opt-Out Guide | TekSure" description="Remove your info from data broker sites. Plain-English step-by-step for Spokeo, BeenVerified, WhitePages." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <EyeOff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Data Broker Opt-Out</h1>
          <p className="text-lg text-muted-foreground">Remove your address + phone from public sites.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why bother</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Data brokers sell your address, phone, relatives, court records.</li>
              <li>Scammers use these to target seniors specifically.</li>
              <li>Stalkers + estranged relatives use them to find you.</li>
              <li>Removal mostly free. 1-2 hours total.</li>
              <li>Re-opt-out yearly — they re-add you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Top data brokers to opt out</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Spokeo</strong> — spokeo.com/optout.</li>
              <li><strong>BeenVerified</strong> — beenverified.com/app/optout.</li>
              <li><strong>WhitePages</strong> — whitepages.com/suppression-requests.</li>
              <li><strong>Intelius</strong> — intelius.com/opt-out.</li>
              <li><strong>MyLife</strong> — mylife.com/opt-out.</li>
              <li><strong>FastPeopleSearch</strong> — fastpeoplesearch.com/removal.</li>
              <li><strong>RadarisAmerica</strong> — radaris.com/control/privacy.</li>
              <li><strong>InstantCheckmate</strong> — instantcheckmate.com/optout.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hire help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>DeleteMe</strong> — $129/yr. Removes from 35+ data brokers + monitors quarterly.</li>
              <li><strong>Privacy Bee</strong> — $197/yr. Premium service.</li>
              <li><strong>Optery</strong> — $99/yr. Cheapest legit option.</li>
              <li><strong>DuckDuckGo Privacy Pro</strong> — $10/mo + bundle.</li>
              <li>Worth $100/yr for many seniors who hate the manual process.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY process (per site)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Search "[your name] opt out [site name]".</li>
              <li>Find your listing — verify it&apos;s YOU.</li>
              <li>Click "Remove this listing" or similar.</li>
              <li>Provide email for confirmation.</li>
              <li>Click confirmation link in email.</li>
              <li>Removal in 24h-2 weeks.</li>
              <li>Repeat for each broker.</li>
              <li>Re-check 6 months later — many re-add you.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">California / Vermont have laws</h3>
            <p className="text-sm text-muted-foreground">CCPA (California) + Vermont law require data brokers to delete on request. CA residents have stronger rights. New laws coming. Federal law catching up. Your privacy rights ARE growing.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
