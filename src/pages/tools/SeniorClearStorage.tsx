import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HardDrive } from 'lucide-react';

export default function SeniorClearStorage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Clear Phone Storage — Senior Guide" description="Free up storage when phone gets full." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HardDrive className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Clear Phone Storage</h1>
          <p className="text-lg text-muted-foreground">Speed up a slow phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Check storage</h2><p>Settings, General, iPhone Storage. See what's eating space.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Delete unused apps</h2><p>Apps you haven't opened in months. Settings shows them. Tap delete.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Old photos</h2><p>Empty Recently Deleted in Photos. Recovers gigs of space.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Old text messages</h2><p>Settings, Messages, Keep Messages, 30 Days. Old chats clear automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Optimize photos</h2><p>Settings, Photos, Optimize iPhone Storage. Full photos stay in iCloud.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Browser data</h2><p>Settings, Safari, Clear History and Website Data. Frees space.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Below 1 GB free? Phone slows down. Below 100 MB? Phone misbehaves.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
