import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2 } from 'lucide-react';

export default function DigitalDeclutterForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Declutter for Seniors | TekSure" description="Clean phone, computer, accounts. Senior digital simplification." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Trash2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Declutter</h1>
          <p className="text-lg text-muted-foreground">Senior simplify life.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Delete unused apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → General → Storage.</li><li>Long-press → delete.</li><li>Senior less clutter.</li><li>Storage saved.</li><li>Free.</li><li>Faster phone.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Photos cleanup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Delete duplicates.</li><li>Photos app suggests.</li><li>Senior gigabytes saved.</li><li>Screenshots delete.</li><li>Free Apple Photos.</li><li>iCloud backup first.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cancel subscriptions</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Subscriptions.</li><li>Senior review.</li><li>Cancel unused.</li><li>$50+/mo leak common.</li><li>Free apps audit.</li><li>Worth quarterly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Old accounts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Just-Delete-Me.com.</li><li>Senior privacy + security.</li><li>Old social media.</li><li>Defunct shops.</li><li>Free service.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Unsubscribe newsletters</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>5/day for month.</li><li>Inbox transformed.</li><li>Senior less overwhelm.</li><li>Free.</li><li>Patience.</li><li>Worth daily.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Annual review</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>New year tradition.</li><li>30-min digital declutter.</li><li>Senior fresh start.</li><li>Family helps.</li><li>Free.</li><li>Worth annual.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Annual digital declutter = senior fresh start</h3><p className="text-sm text-muted-foreground">Senior annual 30-min digital declutter: delete unused apps, photo duplicates, cancel subscriptions, old accounts via Just-Delete-Me, unsubscribe newsletters. Free + transformative. Less overwhelm + faster devices + saved $$. Worth annual habit.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
