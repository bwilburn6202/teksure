import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function PropertyTaxExemptionSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Property Tax Exemptions for Seniors | TekSure" description="Senior property tax exemptions and freeze programs. How to apply and save money." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Property Tax Relief</h1>
          <p className="text-lg text-muted-foreground">Senior exemptions and freezes — don&apos;t miss these.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What programs exist</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Homestead exemption — reduces taxable home value.</li>
              <li>Senior exemption — additional reduction for 65+.</li>
              <li>Tax freeze — locks property tax at current amount.</li>
              <li>Circuit breaker — caps tax as % of income.</li>
              <li>Deferral program — delay payment until home sells.</li>
              <li>Programs vary by state + county.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Who typically qualifies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Age 65+ (some states 62+).</li>
              <li>Own and live in the home as primary residence.</li>
              <li>Income below a certain limit — varies by state.</li>
              <li>Some programs don&apos;t have income limits.</li>
              <li>Disabled homeowners often qualify too.</li>
              <li>Veterans may have separate programs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to apply</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Contact your county assessor&apos;s office.</li>
              <li>Search: &quot;[your county] senior property tax exemption.&quot;</li>
              <li>Most counties have online application.</li>
              <li>Or call county courthouse — ask for assessor.</li>
              <li>Deadline varies — often March 1 or April 1.</li>
              <li>Apply once, renews automatically in most counties.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Documents typically needed</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Proof of age — birth certificate or driver&apos;s license.</li>
              <li>Proof of residency — utility bill, voter registration.</li>
              <li>Property deed — to prove ownership.</li>
              <li>Income documentation — tax return or SSA letter.</li>
              <li>Some counties only need one or two of these.</li>
              <li>Call ahead to confirm requirements.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How much can you save?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Varies widely — $200 to $2,000+ per year.</li>
              <li>Tax freeze can save thousands over 20+ years.</li>
              <li>Illinois example: senior freeze saves average $1,000/year.</li>
              <li>Florida: homestead exemption saves $500–$1,500.</li>
              <li>Some states exempt all property tax for low-income seniors.</li>
              <li>Worth a 20-minute call to find out.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other homeowner benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Energy efficiency rebates — weatherization programs.</li>
              <li>LIHEAP — heating and cooling bill assistance.</li>
              <li>HUD home repair grants for seniors.</li>
              <li>USDA 504 grants for rural homeowners.</li>
              <li>Local nonprofit weatherization programs.</li>
              <li>Call 211 — find all local benefits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Most seniors never apply</h3>
            <p className="text-sm text-muted-foreground">Studies show the majority of eligible seniors never apply for property tax exemptions. The programs exist, the money is there, but the application never gets filed. One 20-minute call to your county assessor&apos;s office can result in hundreds of dollars in annual savings — every year, as long as you live there. Look up your county assessor online and call this week.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
