import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function SeniorAutoBillPay() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Auto Bill Pay — Senior Guide" description="Set up auto bill pay safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calendar className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Auto Bill Pay</h1>
          <p className="text-lg text-muted-foreground">Bills paid on time, every time.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Bank bill pay</h2><p>Free with most checking accounts. Schedule monthly bills from one place.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Direct from biller</h2><p>Set up at each company's site. Some give discounts for auto-pay.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Credit card auto-pay</h2><p>Pay the full amount monthly. Avoids interest charges. Set to full balance.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Track in calendar</h2><p>Add bills to phone calendar. Confirm they ran each month.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Watch the bank</h2><p>Set bank alerts for low balance. Avoid overdrafts from auto-pay.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Cancel old auto-pays</h2><p>Cancel cable, subscriptions, gym when you stop. Companies don't do it for you.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Review auto-pays once a year. Easy to forget about subscriptions you no longer need.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
