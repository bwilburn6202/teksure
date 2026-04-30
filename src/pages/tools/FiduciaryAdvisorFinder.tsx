import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { UserCheck } from 'lucide-react';

export default function FiduciaryAdvisorFinder() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Find a Fiduciary Financial Advisor | TekSure" description={`Most "financial advisors" earn commissions for selling you products. Plain-English guide to fee-only fiduciary advisors who legally must put YOU first.`} />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <UserCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fiduciary Advisor Finder</h1>
          <p className="text-lg text-muted-foreground">Find an advisor whose ONLY paycheck is YOUR fee.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">"Fiduciary" means everything</h2>
            <p className="text-sm">Most financial advisors are paid commissions to sell products (annuities, loaded funds, life insurance). They\'re NOT required to recommend the BEST product — only a "suitable" one.</p>
            <p className="text-sm mt-2"><strong>Fee-only fiduciaries</strong> are paid ONLY by you. They legally must put your interest first. No hidden commissions.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to find one</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>NAPFA.org</strong> — National Association of Personal Financial Advisors. ALL members are fee-only fiduciaries. Search by zip code.</li>
              <li><strong>XYPlanningNetwork.com</strong> — fee-only advisors who serve next-gen clients. Many work virtually.</li>
              <li><strong>Garrett Planning Network</strong> — fee-only advisors offering hourly rates. Best for one-time consultations.</li>
              <li><strong>FINRA BrokerCheck</strong> (brokercheck.finra.org) — verify ANY advisor\'s history before hiring.</li>
              <li><strong>SEC IAPD</strong> — verify Registered Investment Advisors (RIAs).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pricing models</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hourly</strong> — $200-400/hour. Best for one-time questions.</li>
              <li><strong>Flat fee for plan</strong> — $1,500-5,000 for a comprehensive plan. Best for "I need a 30-year retirement plan."</li>
              <li><strong>Percentage of assets (AUM)</strong> — typically 0.5-1.0%/year. Best if you want them to manage investments.</li>
              <li><strong>Subscription</strong> — $100-500/month for ongoing planning + check-ins.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cheap or free alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Vanguard Personal Advisor Services</strong> — 0.30%/year. Real CFPs at very low cost. Best for $50k+ portfolios.</li>
              <li><strong>Schwab Intelligent Advisor</strong> — similar to Vanguard.</li>
              <li><strong>Fidelity Wealth Services</strong> — slightly higher fee, more service.</li>
              <li><strong>Bogleheads.org forum</strong> — free community advice from retirees who\'ve done it.</li>
              <li><strong>SHIP Medicare counseling</strong> — free, for Medicare decisions only.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Questions to ask any advisor</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>"Are you a fiduciary, fee-only, ALL the time?" Get this in writing.</li>
              <li>"How exactly are you paid?" Listen for ANY mention of commissions.</li>
              <li>"Do you sell annuities, life insurance, or proprietary funds?" Red flag if yes.</li>
              <li>"What\'s your CFP credential?" Look for CFP, CFA, or fee-only fiduciary.</li>
              <li>"What are your typical clients\' age and assets?" Match to you.</li>
              <li>"Can I see a sample plan you\'ve done?" They should have one.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Walk away from</h3>
            <p className="text-sm text-muted-foreground">Anyone who pushes you to sell your existing investments and "roll into" their products. Anyone who promises specific market returns. Anyone in your church or social circle who "just got their license". Anyone whose pitch focuses on "tax-free retirement income" via specific products.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
