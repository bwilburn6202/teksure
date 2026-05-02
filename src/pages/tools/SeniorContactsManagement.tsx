import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorContactsManagement() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Contacts Management for Seniors — TekSure" description="Organize phone contacts — backup, deduplicate, sync." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Contacts Management</h1>
          <p className="text-lg text-muted-foreground">Keep family numbers organized.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Backup contacts</h2><p>iCloud Contacts. Google Contacts. Auto-sync across all devices.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Find duplicates</h2><p>iPhone: Contacts → Duplicates Found banner. Tap to merge.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Star favorites</h2><p>Mark family. Show first when calling.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Add photos</h2><p>Personal photos appear when calling. Easier recognition.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Add details</h2><p>Address, birthday, notes. App reminds birthdays. Address helps with directions.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Print emergency list</h2><p>Family + doctor + lawyer. Tape inside kitchen cabinet.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Yearly contact cleanup. Delete unknown numbers. Mark family as favorites.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
