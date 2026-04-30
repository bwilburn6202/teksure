import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wallet } from 'lucide-react';

export default function HsaFsaCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="HSA & FSA Coach — Use the Money Before You Lose It | TekSure" description="Got an HSA or FSA? Plain-English guide to what they cover (more than you think), how to use them, and key rules." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wallet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">HSA & FSA Coach</h1>
          <p className="text-lg text-muted-foreground">Use it. Don\'t lose it.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quick difference</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>HSA (Health Savings Account)</strong> — only available with high-deductible health plans. Money rolls over forever. Triple tax advantage. AFTER 65, you can use it for non-medical expenses too (like an IRA).</li>
              <li><strong>FSA (Flexible Spending Account)</strong> — through your employer. Use it or LOSE IT each year (with small carryover or grace period).</li>
              <li><strong>Limited-Purpose FSA</strong> — for dental and vision only. Pairs with HSA.</li>
              <li><strong>Dependent Care FSA</strong> — for child / elder care. Different from regular FSA.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What they pay for (more than you think)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Doctor copays, hospital stays, surgeries.</li>
              <li>Prescription drugs.</li>
              <li>Over-the-counter meds (since 2020) — Tylenol, Advil, Sudafed, allergy meds.</li>
              <li>Menstrual products (since 2020).</li>
              <li>Glasses, contacts, eye exams.</li>
              <li>Dental — checkups, fillings, crowns.</li>
              <li>Hearing aids ($2,000-7,000 each — biggest single use).</li>
              <li>Mental health therapy.</li>
              <li>Acupuncture, chiropractor.</li>
              <li>Sunscreen (SPF 30+).</li>
              <li>First aid kits, thermometers, BP monitors.</li>
              <li>CPAP machines and supplies.</li>
              <li>Crutches, walkers, mobility aids.</li>
              <li>Mileage to medical appointments (21¢/mile in 2025).</li>
              <li>Long-term care insurance premiums.</li>
              <li>Medicare Part B/D premiums (HSA only, after 65).</li>
              <li>Even some gym memberships if doctor-prescribed for a condition.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">HSA at retirement = secret IRA</h2>
            <p className="text-sm">After 65, HSA money can be used for ANYTHING (not just medical). You pay regular income tax — same as withdrawing from a traditional IRA. Difference: medical expenses are still TAX-FREE. So an HSA is a "best of both worlds" account — best to MAX OUT in your working years.</p>
            <p className="text-sm mt-2">2025 HSA contribution limits: $4,300 single, $8,550 family, plus $1,000 catch-up if 55+.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Use FSA before December</h2>
            <p className="text-sm">FSA money typically expires Dec 31 (some employers allow $640 carryover or a 2.5-month grace period). End-of-year ideas:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Stock up on contact lenses, prescription glasses.</li>
              <li>Get the dental work you\'ve been putting off.</li>
              <li>Buy a year\'s worth of OTC meds and first aid.</li>
              <li>Get hearing aids or check up.</li>
              <li>Get the BP monitor or CPAP your doctor mentioned.</li>
              <li>Buy massage gun or back support.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to shop</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>FSA Store / HSA Store</strong> (fsastore.com) — only sells eligible items. No guessing.</li>
              <li><strong>Amazon</strong> — has an "FSA/HSA Eligible" filter.</li>
              <li><strong>Pharmacy</strong> — most automatically charge HSA/FSA card for eligible items.</li>
              <li><strong>Doctor\'s office</strong> — pay copays directly with the card.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save receipts (HSA)</h3>
            <p className="text-sm text-muted-foreground">For HSAs, you don\'t have to USE the money the year you spend it. Save medical receipts forever. Years later, you can REIMBURSE yourself tax-free for them — letting your HSA grow as an investment.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
