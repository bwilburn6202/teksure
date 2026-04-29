import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function FuneralPrearrangement() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Funeral Pre-Arrangement Guide | TekSure" description="Pre-plan your funeral. Plain-English explainer of pre-paid funerals, costs, scams to avoid, and how to leave your wishes clear." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Funeral Pre-Arrangement</h1>
          <p className="text-lg text-muted-foreground">Take a hard task off your family&apos;s plate.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why pre-plan</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Family makes decisions while grieving — leads to overspending by $3,000-8,000.</li>
              <li>Lock in today&apos;s prices for tomorrow&apos;s funeral.</li>
              <li>Your wishes followed (cremation vs burial, music, who speaks).</li>
              <li>Less family argument over what you "would have wanted".</li>
              <li>Estate executor doesn&apos;t scramble for $10K cash when you&apos;re gone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Average costs (2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Traditional burial</strong> — $9,000-15,000. Casket + plot + service.</li>
              <li><strong>Cremation with service</strong> — $5,000-7,000.</li>
              <li><strong>Direct cremation</strong> (no service) — $700-2,500. Fastest growing choice.</li>
              <li><strong>Green burial</strong> — $2,000-5,000. No embalming, biodegradable casket.</li>
              <li><strong>Donation to medical school</strong> — FREE. They handle cremation, return ashes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Three ways to pre-plan</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Pre-pay at a funeral home</strong> — locks price. Make sure it&apos;s state-trust funded (your money safe if home goes out of business).</li>
              <li><strong>Funeral insurance / "final expense" policy</strong> — small life insurance ($5-25K) earmarked for funeral. Beneficiary spends it.</li>
              <li><strong>"Pay on Death" bank account</strong> — set aside $10-15K, beneficiary uses for funeral. Most flexible. Recommended.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pre-payment scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Funeral home goes out of business — your money may be lost.</li>
              <li>"Cash advance" funeral insurance often costs more than benefit.</li>
              <li>Salesman pressuring "today only" pricing.</li>
              <li>Door-to-door funeral plan reps.</li>
              <li><strong>Solution:</strong> Don&apos;t pre-pay funeral home. Set up POD bank account instead.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Document your wishes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Burial vs cremation.</li>
              <li>Funeral home preferred (or "any reputable").</li>
              <li>Service preferences — religious, secular, music, readings.</li>
              <li>Obituary draft (or "let family write it").</li>
              <li>Pallbearers (if any).</li>
              <li>Burial plot (if owned) — show family the deed.</li>
              <li>Veterans benefits — VA covers some military burial costs (free flag, headstone, vet cemetery).</li>
            </ul>
            <p className="text-sm mt-3">Write all this on ONE page. Title it "When I die — wishes". Keep with will.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Funeral Consumers Alliance</strong> — funerals.org. Free education + local price surveys.</li>
              <li><strong>VA Burial Benefits</strong> — free for veterans. Apply ahead at va.gov.</li>
              <li><strong>Memorial planning sites</strong> — Everplans, Cake. Templates for wishes.</li>
              <li><strong>Costco caskets</strong> — yes, really. $1,000-2,000 vs $3-7K at funeral home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t make it morbid</h3>
            <p className="text-sm text-muted-foreground">Pre-arranging is a gift to your family. Spend an hour on it. Tell loved ones you did. They&apos;ll thank you for years — much more than any other "estate planning" task.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
