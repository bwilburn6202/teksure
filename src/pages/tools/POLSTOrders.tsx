import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileSignature } from 'lucide-react';

export default function POLSTOrders() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="POLST + MOLST Orders for Seniors | TekSure" description="Medical orders for end-of-life care. Plain-English POLST guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileSignature className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">POLST Orders</h1>
          <p className="text-lg text-muted-foreground">Medical orders that follow you. Critical for serious illness.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What POLST is</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Physician Orders for Life-Sustaining Treatment.</li>
              <li>Or MOLST (Medical Orders) — same thing different state.</li>
              <li>NOT same as advance directive (which is wishes).</li>
              <li>POLST = ACTUAL doctor&apos;s orders.</li>
              <li>EMTs follow POLST.</li>
              <li>For people with serious illness.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to do POLST</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Diagnosed with serious illness.</li>
              <li>Frail elderly.</li>
              <li>Wouldn&apos;t be surprised if died in next year.</li>
              <li>Hospice patients.</li>
              <li>Don&apos;t do for healthy seniors (advance directive instead).</li>
              <li>Ask primary doctor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What POLST covers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>CPR</strong> — yes/no if heart stops.</li>
              <li><strong>Hospital transfer</strong> — yes/no.</li>
              <li><strong>Antibiotics</strong> — full treatment, comfort only.</li>
              <li><strong>Tube feeding</strong> — yes/no/trial.</li>
              <li><strong>Comfort measures</strong> only.</li>
              <li>Bright pink/orange form on fridge.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sign with doctor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Conversation with primary doctor.</li>
              <li>Discuss prognosis, options.</li>
              <li>Family member present often.</li>
              <li>Doctor signs.</li>
              <li>Patient or surrogate signs.</li>
              <li>Update annually or when situation changes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After signing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Original goes WITH PATIENT.</li>
              <li>On fridge for EMTs.</li>
              <li>Copy to family.</li>
              <li>Copy to doctor.</li>
              <li>Goes to hospital, nursing home.</li>
              <li>Some states have registry.</li>
              <li>Bright color so EMTs see.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Why important</h3>
            <p className="text-sm text-muted-foreground">Without POLST — EMTs do everything (CPR, ventilator). Often unwanted at end of life. POLST = your wishes followed even if can&apos;t speak. Free at primary care. Major peace of mind for serious illness. polst.org for state forms.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
