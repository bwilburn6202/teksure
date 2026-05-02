import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HardDrive } from 'lucide-react';

export default function SeniorIPadStorage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPad Storage — Senior Guide" description="Free up space on your iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HardDrive className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPad Storage</h1>
          <p className="text-lg text-muted-foreground">Free up space when iPad slows down.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Check storage</h2><p>Settings, General, iPad Storage. See what is taking up space at a glance.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Offload unused apps</h2><p>iPad suggests apps you haven't opened in months. Tap Offload — frees space, keeps your data.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Empty Recently Deleted</h2><p>In Photos, tap Albums, then Recently Deleted. Tap Select, Delete All. Recovers gigabytes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Optimize photo storage</h2><p>Settings, Photos, turn on Optimize iPad Storage. Full-quality photos stay safe in iCloud.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Clear Safari cache</h2><p>Settings, Safari, Clear History and Website Data. Frees space and speeds up browsing.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Old text messages</h2><p>Settings, Messages, Keep Messages. Set to 1 Year. Old chats clear automatically.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Below 1 GB free? Time to clean up. Below 100 MB? iPad will start to misbehave.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
