import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function SeniorGoogleDocs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Docs for Seniors — TekSure" description="Free Word-like word processor — Google Docs basics for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Docs</h1>
          <p className="text-lg text-muted-foreground">Free Word-like editor. Auto-saves.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free</h2><p>Free with any Gmail. Unlimited storage.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Auto-saves</h2><p>Every word saved instantly. No more &ldquo;lost the document.&rdquo;</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice typing</h2><p>Tools → Voice Typing. Speak instead of type.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Share with family</h2><p>Share button → email. They edit. You see changes live.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Convert to PDF</h2><p>File → Download → PDF. Email or print.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Templates</h2><p>Pre-made templates for letters, resumes, recipes. Click File → Template Gallery.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Make font bigger before typing — View → 150% zoom.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
