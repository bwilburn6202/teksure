import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function SeniorOldEmailCleanup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Email Inbox Cleanup for Seniors — TekSure" description="Reach inbox zero — Gmail, Outlook tips for cutting through 10,000+ emails." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Email Inbox Cleanup</h1>
          <p className="text-lg text-muted-foreground">Tame the email mountain.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Unroll.me</h2><p>FREE. Mass-unsubscribe from newsletters. 30 minutes saves years of clutter.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Search and delete</h2><p>Search &ldquo;unsubscribe&rdquo; → select all → delete. Hundreds gone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Filters and labels</h2><p>Auto-sort newsletters into one folder. Inbox stays clean.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Save important</h2><p>Star, flag, or archive emails to keep. Not in inbox.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Old emails</h2><p>Delete emails older than 5 years (unless tax/legal). Freedom feels great.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">2 emails</h2><p>One for important (banks, family). One for retail/newsletters. Clear separation.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Archive in batches of 1,000. Don&apos;t delete one-by-one.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
