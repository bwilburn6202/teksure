import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';

export default function SeniorIPadAppStoreBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="App Store Basics — Senior Guide" description="Find and download apps safely on iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Download className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">App Store Basics</h1>
          <p className="text-lg text-muted-foreground">Find apps you can trust.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open the App Store</h2><p>Tap the blue A icon. Search at the bottom — type the app name you want.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Read ratings</h2><p>Look for 4-star ratings or higher with thousands of reviews. Skip 1-or-2-star apps.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Free vs paid</h2><p>Get means free. A price tag means paid. In-app purchases are inside many free apps.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Tap Get</h2><p>Tap Get, then double-click the top button to confirm with Face ID or password.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Update apps</h2><p>Settings, App Store, turn on App Updates. Apps stay current automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Delete apps</h2><p>Press and hold an app icon. Tap Delete App. Frees up space and tidies your home screen.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>The App Store is safer than browsing for downloads online — Apple checks every app for safety.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
