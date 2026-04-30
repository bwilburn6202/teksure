import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scroll } from 'lucide-react';

const SERVICES = [
  { name: 'Trust & Will', cost: '$200-500 once', best: 'Most popular online will service. Will, trust, power of attorney. State-customized. Easy interface.', good: 'Solid mid-priced option for simple estates.' },
  { name: 'Nolo / Quicken WillMaker', cost: '$80-100 once', best: 'Software-based. Comprehensive — includes living trust, healthcare directive, financial POA.', good: 'Best value if you do it yourself.' },
  { name: 'LegalZoom', cost: '$100-450', best: 'Big name. Wills, trusts, attorney consults available. Pricier than Nolo.', good: 'Worth it if you want lawyer review.' },
  { name: 'Rocket Lawyer', cost: 'Free trial; $40/mo', best: 'Subscription model. Many legal documents (rental, business, etc.) plus wills.', good: 'Best if you need ongoing legal templates.' },
  { name: 'FreeWill (free.com)', cost: 'FREE basic will', best: 'Genuinely free will service. Funded by partner charities. Solid for simple estates.', good: 'Best free option.' },
  { name: 'Local estate attorney', cost: '$1,500-5,000', best: 'For complex estates: trusts, real estate in multiple states, blended families. Worth it for the peace of mind.', good: 'Some local elder-law attorneys offer free initial consults.' },
];

export default function WillEstateOnline() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Will & Estate Planning — Trust & Will, Nolo, LegalZoom | TekSure" description="Make a will online — fast, legal, affordable. Plain-English picks for online will services and when to hire a real attorney." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scroll className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Will & Estate Planning Online</h1>
          <p className="text-lg text-muted-foreground">Make it official. Don\'t leave a mess for your family.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What every adult needs</h2>
            <ul className="text-sm list-disc pl-5">
              <li><strong>Will</strong> — what happens to your stuff. Names guardians for minor children.</li>
              <li><strong>Healthcare power of attorney</strong> — who decides medical care if you can\'t.</li>
              <li><strong>Living will / advance directive</strong> — end-of-life wishes (CPR, feeding tube, etc.).</li>
              <li><strong>Financial power of attorney</strong> — who can pay bills if you can\'t.</li>
              <li><strong>Beneficiaries</strong> on retirement, life insurance, bank accounts. Update yearly.</li>
              <li><strong>HIPAA release</strong> — so doctors can share info with the family member you choose.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {SERVICES.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm mb-1">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to use a REAL attorney</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Estate over $1 million</strong> (or close to your state\'s estate tax limit).</li>
              <li><strong>Real estate in multiple states</strong>.</li>
              <li><strong>Complex family</strong> (blended, second marriages, special-needs children).</li>
              <li><strong>Business ownership</strong>.</li>
              <li><strong>Concerns about contesting</strong> by family members.</li>
              <li><strong>Need a trust</strong> (revocable living trust, irrevocable trust).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After you make it</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>SIGN it in front of witnesses (rules vary by state).</li>
              <li>NOTARIZE if your state requires it.</li>
              <li>Tell your family WHERE the original is.</li>
              <li>Give a copy to your attorney, executor, healthcare proxy.</li>
              <li>Photo a copy in your password-protected files.</li>
              <li>Update beneficiaries on retirement / life insurance directly with each company.</li>
              <li>Review every 3-5 years, after life changes (marriage, death, big asset change).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">"I don\'t need one" — yes you do</h3>
            <p className="text-sm text-muted-foreground">Without a will, the state decides who gets your stuff. The court process (probate) costs your family thousands and takes 6-18 months. Even simple estates benefit from a will. $200 saves your family thousands and months of stress.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
