import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HandHeart, ExternalLink } from 'lucide-react';

export default function CharityVettingTool() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Charity Vetting Tool — Is This Charity Real and Legit? | TekSure" description="Before donating, check if a charity is real and uses your money well. Free lookup tools and red flags to watch for." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HandHeart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Charity Vetting Tool</h1>
          <p className="text-lg text-muted-foreground">Make sure your donation goes where you think it goes.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Two things to check</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Is the charity real and IRS-registered? (Or is it a fake using a similar name?)</li>
              <li>How much of your dollar actually reaches people in need? (Some charities spend 80% on overhead.)</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free lookup tools</h2>
            <div className="space-y-3">
              <div>
                <p className="font-bold">Charity Navigator (charitynavigator.org)</p>
                <p className="text-sm text-muted-foreground mb-2">The biggest free rating site. Stars (1-4) based on financial efficiency, accountability, and impact.</p>
                <Button asChild variant="outline" size="sm"><a href="https://www.charitynavigator.org" target="_blank" rel="noopener noreferrer">Look up a charity <ExternalLink className="w-3 h-3 ml-1" /></a></Button>
              </div>
              <div>
                <p className="font-bold">CharityWatch (charitywatch.org)</p>
                <p className="text-sm text-muted-foreground mb-2">Tougher grades (A through F). Focuses on what % goes to programs vs. fundraising.</p>
                <Button asChild variant="outline" size="sm"><a href="https://www.charitywatch.org" target="_blank" rel="noopener noreferrer">Look up a charity <ExternalLink className="w-3 h-3 ml-1" /></a></Button>
              </div>
              <div>
                <p className="font-bold">GuideStar / Candid (candid.org)</p>
                <p className="text-sm text-muted-foreground mb-2">Free profile of every IRS-registered nonprofit. Shows tax filings.</p>
                <Button asChild variant="outline" size="sm"><a href="https://candid.org" target="_blank" rel="noopener noreferrer">Look up a charity <ExternalLink className="w-3 h-3 ml-1" /></a></Button>
              </div>
              <div>
                <p className="font-bold">IRS Tax Exempt Organization Search</p>
                <p className="text-sm text-muted-foreground mb-2">Confirms a charity is real and donations are tax-deductible.</p>
                <Button asChild variant="outline" size="sm"><a href="https://apps.irs.gov/app/eos/" target="_blank" rel="noopener noreferrer">IRS lookup <ExternalLink className="w-3 h-3 ml-1" /></a></Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🚩 Red flags</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Name sounds almost like a famous one.</strong> "American Red Cross Foundation Inc." (the real one is just "American Red Cross"). Scammers copy famous names.</li>
              <li><strong>High-pressure phone calls.</strong> "Send your donation TONIGHT to help fire victims." Real charities give you time.</li>
              <li><strong>Vague mission.</strong> "To help children" — but who, where, how?</li>
              <li><strong>Asks for cash, gift cards, or wire transfers.</strong> Real charities accept checks and credit cards.</li>
              <li><strong>No website, or a brand-new website.</strong> Look for the year founded and an annual report.</li>
              <li><strong>Won't send a receipt.</strong> Real charities email a tax-deductible receipt automatically.</li>
              <li><strong>Disasters in the news.</strong> Hurricanes and wildfires bring out scams. Stick to known names — Red Cross, Salvation Army, Direct Relief, World Central Kitchen.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to give safely</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Type the charity's full website yourself — don't click a link in an email.</li>
              <li>Donate through their site, not a third-party "donation aggregator".</li>
              <li>Use a credit card — chargeback protection if it's a scam.</li>
              <li>Save the receipt for your taxes.</li>
              <li>Sign up for ONE-TIME donations only. Many sites quietly enroll you in monthly giving.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">A note on overhead</h3>
            <p className="text-sm text-muted-foreground">Don't penalize a charity for "high overhead" alone. A small charity may spend more on administration just because of fixed costs. The questions to ask: Is the work effective? Are programs reaching real people? Charity Navigator's "Impact" score gets at this better than overhead alone.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
