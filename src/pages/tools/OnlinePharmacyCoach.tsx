import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

const PHARMACIES = [
  { name: 'Mark Cuban Cost Plus Drug Co', cost: 'Cost + 15% (often 80-90% cheaper than retail)', best: 'GENERIC drugs at near-cost prices. Some prescriptions cost $5 instead of $200.', good: 'No insurance involved — just cash. costplusdrugs.com.' },
  { name: 'Amazon Pharmacy', cost: 'Insurance + cash discounts', best: 'Free 2-day shipping for Prime members. Sometimes cheaper than CVS.', good: 'Compare prices easily.' },
  { name: 'Capsule', cost: 'Same as your insurance copay', best: 'Same-day delivery in many cities. Texts you when meds are ready.', good: 'Best for big-city convenience.' },
  { name: 'PillPack (now Amazon Pharmacy)', cost: 'Insurance copay', best: 'Pre-sorted by morning/noon/evening — every dose in its own packet.', good: 'Best for people on 5+ daily meds.' },
  { name: 'CVS / Walgreens / Rite Aid', cost: 'Insurance copay', best: 'Convenience. Most chains have apps for refills.', good: 'Use their app to refill, set up auto-refill, manage household.' },
  { name: 'Costco Pharmacy', cost: 'Often cheapest cash prices', best: 'You don\'t need a Costco membership for the pharmacy.', good: 'Great alternative for uninsured prescriptions.' },
];

export default function OnlinePharmacyCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Pharmacy Coach — Cost Plus, Amazon, Capsule | TekSure" description="Cut prescription costs in half. Mark Cuban\'s Cost Plus, Amazon Pharmacy, Capsule delivery — plain-English picks for online pharmacies." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Pharmacy Coach</h1>
          <p className="text-lg text-muted-foreground">Cheaper prescriptions, free delivery. Real options.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PHARMACIES.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm mb-1">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to switch pharmacies</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Sign up at the new pharmacy (account, address, insurance info).</li>
              <li>Tell the new pharmacy you want them to "transfer" your prescriptions.</li>
              <li>They contact your old pharmacy and pull the records. You don\'t do anything.</li>
              <li>Once active, all refills go to the new pharmacy.</li>
              <li>You can keep using both — cheap meds at Cost Plus, complex meds at CVS.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Real savings examples (Mark Cuban Cost Plus vs retail)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Atorvastatin 20mg (cholesterol): $4 vs $35 retail.</li>
              <li>Metformin 500mg (diabetes): $4 vs $25 retail.</li>
              <li>Amlodipine 10mg (blood pressure): $5 vs $20 retail.</li>
              <li>Sildenafil 100mg: $24 for 30 vs $400+ retail.</li>
              <li>Imatinib (cancer): $40/month vs $9,000+ retail.</li>
            </ul>
            <p className="text-sm mt-2 text-muted-foreground">Compare YOUR meds at <strong>costplusdrugs.com</strong>. Search by name. If they have it — usually the cheapest US source.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For 5+ daily medications</h2>
            <p className="text-sm">Consider <strong>PillPack (Amazon Pharmacy)</strong>. Every dose comes in a pre-sorted plastic packet labeled with date and time. Tear off, take, done. No more pill organizer mistakes.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch for prescription savings cards</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>GoodRx</strong> — show the coupon at the pharmacy. Often beats your insurance.</li>
              <li><strong>SingleCare</strong> — competing app, sometimes cheaper than GoodRx.</li>
              <li><strong>Manufacturer copay cards</strong> — for branded drugs, search "[drug name] copay card".</li>
              <li><strong>Patient assistance programs</strong> — for expensive drugs, check at <strong>needymeds.org</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Avoid online pharmacy scams</h3>
            <p className="text-sm text-muted-foreground">Only use US-based, NABP-verified pharmacies. Look for "VIPPS Verified" or ".pharmacy" domain. Red flags: no prescription required, prices way below real Cost Plus, sketchy spelling, drugs from unknown countries. Sticking with the names above keeps you safe.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
