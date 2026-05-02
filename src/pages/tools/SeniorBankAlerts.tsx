import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';

export default function SeniorBankAlerts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bank Alerts — Senior Guide" description="Set up bank alerts to catch fraud early." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bank Alerts</h1>
          <p className="text-lg text-muted-foreground">Catch fraud the day it happens.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open the app</h2><p>Sign in to your bank app. Look for Alerts or Notifications in settings.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Charge over $50</h2><p>Turn on text alerts for any charge above $50. Adjust the amount to fit your habits.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Foreign country</h2><p>Alert for any charge outside your country. Catches stolen card fraud fast.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Low balance</h2><p>Alert when balance drops below a chosen amount. Avoid overdraft fees.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Login from new device</h2><p>Alert if anyone signs into your account from a new computer or phone.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Unknown charge</h2><p>If you see one that isn't yours, call the bank number on your card right away.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Most fraud is reversed if reported within 60 days. Alerts make it easy to catch quickly.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
