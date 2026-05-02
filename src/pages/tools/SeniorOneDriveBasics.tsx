import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function SeniorOneDriveBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="OneDrive for Seniors — TekSure" description="Microsoft OneDrive basics for seniors — Windows backup, Office 365 included." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">OneDrive for Seniors</h1>
          <p className="text-lg text-muted-foreground">Best for Windows users.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free 5 GB</h2><p>Built into Windows 10/11. Sign up with Microsoft account.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">100 GB ($2/month)</h2><p>Plenty for photo backup.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Microsoft 365 ($7/month)</h2><p>1 TB OneDrive + Word, Excel, PowerPoint, Outlook. Best value.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family ($10/month)</h2><p>Up to 6 people. Each gets 1 TB. Best for big families.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Auto-backup PC</h2><p>OneDrive syncs Documents, Desktop, Pictures. Automatic Windows backup.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Photo wall</h2><p>Phone photos auto-upload. View as &ldquo;On This Day&rdquo; memories.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 365 Family $10 = 6 TB total + Word/Excel for everyone. Best deal.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
