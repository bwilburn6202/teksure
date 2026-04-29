import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function BlendedFamilyTech() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Blended Family Tech for Seniors | TekSure" description="Step-grandkids, step-children, multi-marriage tech tips. Plain-English compassionate guide for senior blended families." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Blended Family Tech</h1>
          <p className="text-lg text-muted-foreground">Step-grandkids count too.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common blended family situations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Late-in-life marriage with new partner&apos;s family.</li>
              <li>Adult kids&apos; second marriages — new step-grandkids.</li>
              <li>Mixed inheritance + estate complications.</li>
              <li>Stepchildren who know you only as adult.</li>
              <li>Multiple sets of grandparents.</li>
              <li>Different cultural / religious traditions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tech that helps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Family Calendar</strong> — covers all branches, no surprises.</li>
              <li><strong>Group photo album</strong> — Apple Photos, Google Photos shared library.</li>
              <li><strong>Family Wallet / Trustworthy</strong> — track who manages what across complex family.</li>
              <li><strong>Storyworth + Remento</strong> — capture YOUR story for step-grandkids who didn&apos;t grow up with you.</li>
              <li><strong>Family group text</strong> — include step-relatives intentionally.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Estate planning for blended</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Update will</strong> — explicitly name step-children if intended.</li>
              <li><strong>QTIP trust</strong> — protects spouse + bio kids both.</li>
              <li><strong>Beneficiary forms</strong> — confirm spouse is OR isn&apos;t beneficiary based on intent.</li>
              <li><strong>Prenup</strong> — increasingly common for senior 2nd marriages.</li>
              <li><strong>Talk openly</strong> — surprise inheritances split blended families.</li>
              <li><strong>Hire elder-law attorney</strong> — DIY wills fail blended families more.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step-grandkid relationships</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t force "Grandma/Grandpa" — let kids choose what to call you.</li>
              <li>Give equal attention as bio grandkids.</li>
              <li>Equal gifts at holidays/birthdays.</li>
              <li>Build your own traditions.</li>
              <li>Time + consistent caring beats any single grand gesture.</li>
              <li>Step-grandkids often appreciate you MORE because chosen, not given.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help</h3>
            <p className="text-sm text-muted-foreground"><strong>National Stepfamily Resource Center</strong> — stepfamilies.info. Free articles + counseling referrals. <strong>Family therapy</strong> covered by most insurance — even occasional sessions help. Most blended families need 5-7 years to fully integrate. Be patient.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
