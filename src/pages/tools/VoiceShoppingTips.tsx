import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function VoiceShoppingTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Voice Shopping Tips — Alexa &amp; Google | TekSure" description="Order groceries, prescriptions, and household goods by voice. Plain-English tips to keep voice shopping safe and simple." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Voice Shopping Tips</h1>
          <p className="text-lg text-muted-foreground">"Alexa, order more paper towels."</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup — Amazon Alexa</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open Alexa app → Settings → Voice Purchasing.</li>
              <li>Add a 4-digit confirmation PIN. (Critical — keeps grandkids from ordering toys.)</li>
              <li>Verify shipping address.</li>
              <li>Pick a default payment method (credit card, NOT debit).</li>
              <li>Test: "Alexa, order paper towels." Should say price and ask for PIN.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup — Google Home</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open Google Home app → Settings → Payments.</li>
              <li>Add credit card.</li>
              <li>Add shipping address.</li>
              <li>Voice Match ON — only your voice can buy.</li>
              <li>Test: "Hey Google, order toothpaste."</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What works well by voice</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Repeat orders — "order more paper towels" reorders your usual brand.</li>
              <li>Quick groceries via Whole Foods (Alexa) or Walmart (Google).</li>
              <li>Adding things to a list — "add milk to my shopping list".</li>
              <li>Reordering prescriptions — many pharmacies have Alexa skills.</li>
              <li>Re-ordering Amazon Subscribe &amp; Save items.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What NOT to buy by voice</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Anything over $50 — go online, see photos and reviews first.</li>
              <li>First-time purchases of new products.</li>
              <li>Clothing or anything with size, color, etc.</li>
              <li>Tech (laptops, phones) — too easy to pick wrong model.</li>
              <li>Gifts — you can&apos;t verify what gets sent.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety must-haves</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Confirmation PIN ON</strong> — required for every voice purchase.</li>
              <li><strong>Voice Match ON</strong> — only your voice can buy.</li>
              <li><strong>Use credit card, not debit</strong> — easier to dispute.</li>
              <li><strong>Email alerts ON</strong> — get email of every order.</li>
              <li><strong>Spending limit</strong> — Alexa lets you cap voice purchases at $25/$50/etc.</li>
              <li>Check Amazon Orders weekly for surprise charges.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Shopping list trick</h3>
            <p className="text-sm text-muted-foreground">Better than ordering by voice — ADD to a shopping list by voice, then review later. Say "Alexa, add eggs to my shopping list" 5 times during the week. On Saturday, open the Alexa app — full grocery list ready. Order through your favorite delivery app or print and take to store.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
