import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BellOff } from 'lucide-react';

export default function NotificationManagementForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Notification Management for Seniors | TekSure" description="Stop notification overwhelm. Senior phone settings guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BellOff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Notification Management</h1>
          <p className="text-lg text-muted-foreground">Stop the buzzing.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why important</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>100+ daily for many.</li><li>Anxiety inducing.</li><li>Senior overwhelm.</li><li>Phone calls missed in noise.</li><li>Sleep disruption.</li><li>Time to manage.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Settings → Notifications</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>List of every app.</li><li>Disable per app.</li><li>Keep family + medical.</li><li>Disable games + retail.</li><li>Senior take 30 min.</li><li>Phone calmer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Focus modes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Focus.</li><li>Sleep mode auto-quiet.</li><li>Personal mode lets family.</li><li>Senior schedule.</li><li>Free.</li><li>Bedside silence.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Critical only</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Family contacts — Always Notify.</li><li>Medical apps important.</li><li>Banks for fraud.</li><li>Senior priorities.</li><li>Customize per app.</li><li>Power user.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bedtime focus</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Auto 10pm-7am.</li><li>Silences phone.</li><li>Senior sleep.</li><li>Calls family allowed.</li><li>Critical alerts only.</li><li>Free + game-changer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family help</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Adult kid configures.</li><li>30 min once.</li><li>Senior calmer phone.</li><li>Less anxious.</li><li>Sleep better.</li><li>Best gift to senior parent.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">30 min cleanup = senior phone calm</h3><p className="text-sm text-muted-foreground">30 minutes disabling every non-critical notification + Bedtime Focus mode = senior phone transformation. Anxiety goes down. Sleep better. Less ping ping ping. Family gets through. Most under-set-up senior phone feature. Adult kid configures.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
