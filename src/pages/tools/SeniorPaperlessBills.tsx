import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function SeniorPaperlessBills() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Paperless Billing for Seniors — Senior Guide" description="Switch to digital bills safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Paperless Billing</h1>
          <p className="text-lg text-muted-foreground">No more piles of paper.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Sign up</h2><p>In each company's app/website, tap Paperless. Confirm by clicking link in email.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Save copies</h2><p>Download PDF bills monthly. Keep last 3 years for taxes and disputes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Auto-pay</h2><p>Set up auto-pay so bills don't lapse. Saves late fees and credit damage.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Email folder</h2><p>Make a folder named Bills in email. Move all bill emails there.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Reduce clutter</h2><p>Cancel unwanted subscriptions when reviewing email. Easy to spot.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Phishing</h2><p>Real bills don't ask for password by email. If you get one, ignore.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Print bills you need on demand. Saves trees and storage space year-round.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
