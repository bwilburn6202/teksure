import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ListChecks } from 'lucide-react';

export default function SeniorAccountSimplification() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Simplify Online Accounts for Seniors — TekSure" description="Close unused online accounts — banks, retailers, social media." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ListChecks className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Simplify Online Accounts</h1>
          <p className="text-lg text-muted-foreground">Less to manage. Less to worry about.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">List your accounts</h2><p>Use a password manager. It shows every account in one place.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">JustDeleteMe</h2><p>FREE. justdeleteme.xyz. Direct links to close any major service&apos;s account.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Common closures</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Old retailers (Macy&apos;s, Target you don&apos;t use)</li><li>MySpace, old social</li><li>Yahoo if you&apos;re only on Gmail</li><li>Old stock accounts</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch out</h2><p>Don&apos;t close email accounts. Banks send recovery info there.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Plan inheritance</h2><p>Tell family which accounts to close after you. Or use Apple Legacy Contact.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cancel paid services</h2><p>Settings → Subscriptions on phone. Or call to cancel cable, gym, etc.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Going from 50 accounts to 15 simplifies your life dramatically.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
