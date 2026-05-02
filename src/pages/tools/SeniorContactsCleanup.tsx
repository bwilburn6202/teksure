import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorContactsCleanup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Contacts Cleanup — Senior Guide" description="Clean up duplicate phone contacts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Contacts Cleanup</h1>
          <p className="text-lg text-muted-foreground">Tidy up your contact list.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. iPhone duplicates</h2><p>Open Contacts, tap Lists. Tap Duplicates Found. Tap Merge.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Android duplicates</h2><p>Contacts app, Settings, Manage merged duplicates. Tap each to confirm.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Add photos</h2><p>Adding photos makes contacts easier to recognize at a glance.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Add nickname</h2><p>Mom, Jim's Mechanic, Dr. Brown. Easier to find later.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Mark favorites</h2><p>Most-called family at top. Faster dialing.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Backup contacts</h2><p>iCloud (iPhone) and Google (Android) auto-backup. Verify in settings.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If your phone breaks, contacts are easy to lose. Backup is essential.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
