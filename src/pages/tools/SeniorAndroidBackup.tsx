import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function SeniorAndroidBackup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Android Backup — Senior Guide" description="Back up your Android phone safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Android Backup</h1>
          <p className="text-lg text-muted-foreground">Never lose photos or contacts.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Turn on backup</h2><p>Settings, Google, Backup. Tap Back up now. Phone backs up to your Google account.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. What gets saved</h2><p>Apps, contacts, calendar, texts, settings, photos, call history. Most of what matters.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Free 15 GB</h2><p>Google gives 15 GB free. Shared with Gmail and Drive. Most need to upgrade for photos.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Charge overnight</h2><p>Backup runs when phone is charging on Wi-Fi. Plug in before bed for nightly backup.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Check it works</h2><p>Settings, Google, Backup. Should show today's date as last backup.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Restoring</h2><p>New phone? Sign in with Google. Phone offers to restore. Tap yes.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Backups are encrypted. Even Google can't read them without your password.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
