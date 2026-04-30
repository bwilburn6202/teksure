import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Filter } from 'lucide-react';

export default function EmailFiltersForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Email Filters for Seniors | TekSure" description="Auto-organize email. Senior Gmail + Outlook filters guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Filter className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Email Filters</h1>
          <p className="text-lg text-muted-foreground">Auto-organize inbox.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What they do</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Auto-sort incoming.</li><li>Family in folder.</li><li>Bills in folder.</li><li>Skip inbox if junk.</li><li>Senior tidy.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Gmail filters</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Filters.</li><li>Create new.</li><li>Sender or subject.</li><li>Apply label.</li><li>Skip inbox optional.</li><li>Senior auto-organize.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Outlook rules</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Right-click email.</li><li>Rules → Create.</li><li>Choose conditions.</li><li>Move to folder.</li><li>Senior power user.</li><li>Free in Outlook.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior priority</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Family folder — important.</li><li>Bills folder.</li><li>Newsletters folder.</li><li>Auto-archive promotional.</li><li>Senior find what matters.</li><li>Less overwhelm.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Unsubscribe</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bottom of email.</li><li>Unsubscribe link.</li><li>Stop newsletter floods.</li><li>Senior inbox cleaner.</li><li>One-click usually.</li><li>Don&apos;t skip.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family help</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Adult kid sets up.</li><li>Senior simpler use.</li><li>Free filters.</li><li>One-time setup.</li><li>Years of benefit.</li><li>Senior loving help.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Filters = senior inbox sanity</h3><p className="text-sm text-muted-foreground">Senior inboxes get 100+ emails/day. Filters auto-sort family, bills, newsletters separately. Find important fast. 30-min adult kid setup + lifetime calm. Most under-used senior email feature. Free in Gmail + Outlook.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
