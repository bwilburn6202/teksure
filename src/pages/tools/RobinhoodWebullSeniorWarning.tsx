import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function RobinhoodWebullSeniorWarning() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Robinhood + Webull Warning for Senior Investors | TekSure" description="Why Robinhood and Webull are risky for senior retirees. Better alternatives for retirement money." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Robinhood + Webull</h1>
          <p className="text-lg text-muted-foreground">Why these aren&apos;t for retirement money.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What they are</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free trading apps — popular with younger investors.</li>
              <li>Designed for active trading.</li>
              <li>Gamified interface — like a game.</li>
              <li>Robinhood: 22 million users.</li>
              <li>Webull: similar to Robinhood.</li>
              <li>Both legal + regulated brokerages.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why risky for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Encourages frequent trading (bad for returns).</li>
              <li>Promotes options + crypto (high risk).</li>
              <li>Limited retirement-focused tools.</li>
              <li>Customer service notoriously poor.</li>
              <li>App outages during market events.</li>
              <li>Not designed for buy-and-hold investors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Better senior alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Fidelity — same $0 commissions, better service.</li>
              <li>Schwab — phone advisors, branches available.</li>
              <li>Vanguard — lowest fund fees.</li>
              <li>All have $0 stock + ETF commissions.</li>
              <li>None gamify investing.</li>
              <li>All have proper retirement planning tools.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common senior mistakes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Day trading retirement money.</li>
              <li>Buying meme stocks (GameStop, AMC).</li>
              <li>Cryptocurrency speculation.</li>
              <li>Options trading without understanding.</li>
              <li>Following stock tips from social media.</li>
              <li>Lost retirement savings — irreplaceable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If grandkids use Robinhood</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Have honest conversation about risks.</li>
              <li>Don&apos;t lend them money for trading.</li>
              <li>Recommend index fund investing instead.</li>
              <li>Share Vanguard founder Jack Bogle&apos;s wisdom.</li>
              <li>Talk about long-term + compound interest.</li>
              <li>Many lose all their money — research shows.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you have money there already</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Consider transferring to Fidelity/Schwab/Vanguard.</li>
              <li>ACAT transfer — free + automatic.</li>
              <li>Takes 5–10 days to complete.</li>
              <li>Tax-free transfer between brokerages.</li>
              <li>Better tools, service, peace of mind.</li>
              <li>Worth the small effort.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Boring is good in retirement</h3>
            <p className="text-sm text-muted-foreground">Investing in retirement should be boring — that&apos;s the point. Robinhood and Webull are designed to make trading feel exciting like a game. That feeling is exactly what destroys retirement portfolios. Fidelity, Schwab, or Vanguard have the same $0 commissions but emphasize long-term thinking. Use those instead. Your future self will thank you.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
