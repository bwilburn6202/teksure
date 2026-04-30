import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function SignalAppForPrivateMessaging() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Signal App for Private Messaging | TekSure" description="Encrypted messaging for senior privacy. Signal app guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Signal App</h1>
          <p className="text-lg text-muted-foreground">Private + encrypted.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why Signal</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>End-to-end encrypted.</li><li>No ads, no tracking.</li><li>Free, non-profit.</li><li>Texts + calls + video.</li><li>Open source.</li><li>Most secure messenger.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free download.</li><li>Phone number signup.</li><li>Verify with code.</li><li>Add family + friends.</li><li>Replaces SMS optionally.</li><li>5 minutes total.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Doctor health discussions.</li><li>Financial info safely.</li><li>Family password sharing.</li><li>No data harvesting.</li><li>Disappearing messages option.</li><li>Trust ensured.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs WhatsApp</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>WhatsApp owned by Meta.</li><li>Signal nonprofit.</li><li>Both encrypted.</li><li>Signal collects less metadata.</li><li>WhatsApp more popular.</li><li>Use both if needed.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Disappearing</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Set timer per chat.</li><li>1 hour to 4 weeks.</li><li>Auto-delete both sides.</li><li>For sensitive talks.</li><li>Senior privacy.</li><li>Optional feature.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tell family to download.</li><li>Use as default messenger.</li><li>Backup PIN important.</li><li>Don&apos;t lose backup.</li><li>Group chats secure.</li><li>Free + safe.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free privacy upgrade</h3><p className="text-sm text-muted-foreground">Signal is free 30-second senior privacy upgrade. Use for doctor info, financial talks, password sharing. Replace SMS for daily texts. Family can use too. No tracking, no ads, no data harvest. Best free private senior messenger.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
