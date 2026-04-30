import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ScanLine } from 'lucide-react';

export default function DocumentScannerCoach() {
  const [tab, setTab] = useState<'iphone' | 'android'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Document Scanner Coach — Scan Forms With Your Phone | TekSure" description="No printer needed. Use your phone to scan and email tax forms, contracts, and receipts. Built-in tools and the best free apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ScanLine className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Document Scanner Coach</h1>
          <p className="text-lg text-muted-foreground">Your phone is a scanner. No printer/scanner needed.</p>
        </div>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('iphone')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'iphone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📱 iPhone</button>
          <button onClick={() => setTab('android')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'android' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🤖 Android</button>
        </div>

        {tab === 'iphone' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">iPhone — Scan in Notes (built in)</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Open the <strong>Notes</strong> app.</li>
                <li>Tap "+ New Note".</li>
                <li>Tap the camera icon → "Scan Documents".</li>
                <li>Hold the phone over the document. Yellow box auto-detects edges.</li>
                <li>Phone takes the picture itself when ready (or tap the white button).</li>
                <li>Drag corners to crop if needed. Tap "Keep Scan".</li>
                <li>Tap "+" to add more pages, or "Save".</li>
                <li>Tap the share icon → "Mail" or "Messages" — sends as a clean PDF.</li>
              </ol>
              <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Or use Files app:</strong> Files → tap the three dots top right → "Scan Documents".</p>
            </CardContent>
          </Card>
        )}

        {tab === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Android — Google Drive (built in, free)</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Open the <strong>Google Drive</strong> app.</li>
                <li>Tap the colorful <strong>+</strong> button.</li>
                <li>Tap "Scan".</li>
                <li>Hold phone over the document.</li>
                <li>Tap the white shutter button.</li>
                <li>Drag corners to adjust if needed. Tap the checkmark.</li>
                <li>Tap "+" for more pages, or "Save" — saves as PDF in Drive.</li>
                <li>Tap the file → Share → Email.</li>
              </ol>
              <p className="text-sm mt-3"><strong>Samsung Galaxy alternative:</strong> Open camera → point at document → little yellow scan icon appears at the bottom → tap it.</p>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best free apps (better than built-in for some)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Adobe Scan</strong> — best free scanner. Auto-OCR (reads text in the image, lets you copy/paste). Very clean PDFs.</li>
              <li><strong>Microsoft Lens</strong> — great if you use Outlook/OneDrive. Free.</li>
              <li><strong>CamScanner</strong> — popular but free version has watermarks. Avoid the privacy concerns from older versions.</li>
              <li><strong>Genius Scan</strong> — clean simple alternative.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for best results</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Lay the document flat on a darker surface — apps detect the edge better.</li>
              <li>Daylight is best. Don\'t use the flash unless really dim.</li>
              <li>Hold phone DIRECTLY above, not at an angle.</li>
              <li>For multi-page documents, the "+ Add Page" option keeps everything in one PDF.</li>
              <li>Use "Black & White" mode for tax forms — sharper text.</li>
              <li>Use "Color" for ID cards, photos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">What to scan</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Tax forms to email to your accountant.</li>
              <li>Insurance cards for your wallet (digital backup).</li>
              <li>Receipts for warranties and returns.</li>
              <li>Old letters and family documents (preservation).</li>
              <li>Doctor\'s notes you need to send.</li>
              <li>Forms to fill out and sign electronically.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
