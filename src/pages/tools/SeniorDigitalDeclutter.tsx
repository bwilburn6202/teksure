import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2 } from 'lucide-react';

export default function SeniorDigitalDeclutter() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Decluttering for Seniors — TekSure" description="Clear old emails, photos, accounts — clean up phone and computer." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Trash2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Decluttering</h1>
          <p className="text-lg text-muted-foreground">Clean phone, computer, accounts.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Email zero</h2><p>Unsubscribe from junk. Use Unroll.me (free). Mass-unsubscribe in 10 minutes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Old accounts</h2><p>Have I Been Pwned (free). Find old accounts on data breaches. Close ones you don&apos;t use.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Duplicate photos</h2><p>Gemini Photos ($20). Removes duplicate and blurry photos. Reclaim 5+ GB.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Unused apps</h2><p>iPhone: Settings → General → iPhone Storage → Offload Unused Apps.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Old subscriptions</h2><p>Settings → Apple ID → Subscriptions. Often $30/month in forgotten ones.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Browser bookmarks</h2><p>Delete bookmarks you haven&apos;t used in 6 months. Faster phone.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 30 minutes a month. Stop digital chaos before it builds up.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
