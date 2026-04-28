import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Scan, ChevronRight } from 'lucide-react';

type Phone = 'iphone' | 'android';

interface Tool {
  name: string;
  cost: string;
  setup: string[];
  features: string[];
}

const SCANNERS: Record<Phone, Tool[]> = {
  iphone: [
    {
      name: 'Notes app (built-in)',
      cost: 'Free, already on iPhone',
      setup: [
        'Open Notes → tap "+ New note" or open an existing note.',
        'Tap the camera icon (paperclip menu) → "Scan Documents".',
        'Hold the phone over the document. iPhone auto-detects edges and snaps when ready.',
        'Tap "Save" once all pages are scanned.',
      ],
      features: [
        'Auto edge detection — no need to crop manually.',
        'Tap a scan to share as PDF.',
        'Searchable text inside scans (iOS 16+).',
        'Color, grayscale, or black-and-white per scan.',
      ],
    },
    {
      name: 'Files app (built-in)',
      cost: 'Free, already on iPhone',
      setup: [
        'Open Files → tap "..." (top-right) → Scan Documents.',
        'Same scanner UI as Notes.',
        'Saves directly to iCloud Drive or Files location.',
      ],
      features: [
        'Saves to a folder, not a note.',
        'Same scan quality as Notes.',
        'Easier if you organize papers in folders rather than notes.',
      ],
    },
    {
      name: 'Adobe Scan (free, optional)',
      cost: 'Free with optional Premium',
      setup: [
        'App Store → "Adobe Scan".',
        'Sign in with email or Google.',
        'Tap the camera → scan document.',
      ],
      features: [
        'OCR — turns the scan into editable text. Very accurate.',
        'Combines with Adobe Acrobat for fillable PDFs.',
        'Best for users who already use Adobe products.',
      ],
    },
  ],
  android: [
    {
      name: 'Google Drive (built-in)',
      cost: 'Free, already on Android',
      setup: [
        'Open Google Drive → tap the "+" button.',
        'Tap "Scan".',
        'Hold the camera over the document.',
        'Tap to crop, retake, or accept.',
        'Save as PDF to your Drive.',
      ],
      features: [
        'Saves directly to Google Drive — one-tap share with family.',
        'Multi-page scans become one PDF.',
        'OCR on PDF means you can search inside it.',
      ],
    },
    {
      name: 'Microsoft Lens (free)',
      cost: 'Free',
      setup: [
        'Play Store → "Microsoft Lens".',
        'Open and tap "Document".',
        'Hold over the page — auto-detects edges.',
        'Save as PDF, Word, or PowerPoint.',
      ],
      features: [
        'Best edge detection of any free app.',
        'Saves as Word — for actual editable text.',
        'Whiteboard mode for photographing notes from a meeting.',
      ],
    },
    {
      name: 'Adobe Scan (free)',
      cost: 'Free',
      setup: [
        'Play Store → "Adobe Scan".',
        'Sign in.',
        'Tap to scan.',
      ],
      features: [
        'OCR is excellent.',
        'Pairs with the rest of Adobe Acrobat if you use it.',
      ],
    },
  ],
};

const USE_CASES = [
  { title: 'Tax receipts', detail: 'Photograph as you go through the year. Search for "receipt" in your notes app or Drive in March, find them all.' },
  { title: 'Insurance / medical paperwork', detail: 'Scan all paper records. Save in a single folder. Email or text easily to a doctor or family.' },
  { title: 'Legal documents (will, deeds, birth certificate)', detail: 'Scan original, store on a USB drive AND in cloud (Drive/iCloud). The originals can stay in a safe; the digital copies are with you.' },
  { title: 'Loan / mortgage applications', detail: 'When the bank asks for a "scan of your driver\'s license", you can do it from the kitchen table — no need for a real scanner.' },
  { title: 'Old family photos', detail: 'Scan old paper photos to digital. Share to family. Will outlast the originals.' },
  { title: 'Replacing a paper recipe collection', detail: 'Scan grandma\'s recipe cards. Add to a "recipes" folder. Search by name or ingredient.' },
];

export default function DocumentScannerSetup() {
  const [phone, setPhone] = useState<Phone>('iphone');

  return (
    <>
      <SEOHead
        title="Document Scanner Setup"
        description="Use your phone as a document scanner. Free apps built into iPhone and Android. Scan tax receipts, medical papers, legal docs, family photos — share as PDF in seconds."
        path="/tools/document-scanner-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-slate-50 via-background to-zinc-50 dark:from-slate-950/20 dark:to-zinc-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-slate-500/10 rounded-full">
                <Scan className="h-8 w-8 text-slate-700 dark:text-slate-300" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Document Scanner Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Your phone is a scanner. Replace your old printer-scanner with a free app built right in.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Document Scanner Setup' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick your phone</p>
              <div className="flex gap-2">
                {(['iphone', 'android'] as Phone[]).map(p => (
                  <Button key={p} variant={phone === p ? 'default' : 'outline'} onClick={() => setPhone(p)}>
                    {p === 'iphone' ? 'iPhone' : 'Android'}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {SCANNERS[phone].map(t => (
              <Card key={t.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{t.name}</p>
                    <Badge variant="outline">{t.cost}</Badge>
                  </div>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Setup</p>
                  <ol className="space-y-1.5 mb-3">
                    {t.setup.map((s, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-primary font-semibold shrink-0">{i + 1}.</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Features</p>
                  <ul className="space-y-1">
                    {t.features.map((f, i) => (
                      <li key={i} className="text-xs flex gap-2"><span className="text-primary">•</span><span>{f}</span></li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Six things to scan today</p>
          <div className="space-y-3 mb-6">
            {USE_CASES.map(u => (
              <Card key={u.title} className="border-border">
                <CardContent className="p-4">
                  <p className="font-medium text-sm">{u.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{u.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Pro tips for sharper scans</p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">•</span><span>Bright but indirect light. A window with sheer curtain works best.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Solid contrasting surface — dark wood under white paper, or vice versa. Helps edge detection.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Hold the phone parallel — keep the document flat, the camera flat above it.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>For long documents, scan in batches. Most apps let you keep adding pages.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Always save as PDF, not photo — PDFs print correctly and are smaller.</span></li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/photo-library-tips" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Photo Library Tips</p>
                <p className="text-xs text-muted-foreground mt-0.5">Find scans later by searching.</p>
              </Link>
              <Link to="/tools/backup-wizard" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Backup Wizard</p>
                <p className="text-xs text-muted-foreground mt-0.5">Make sure scans are backed up.</p>
              </Link>
              <Link to="/tools/free-tax-filing" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Free Tax Filing</p>
                <p className="text-xs text-muted-foreground mt-0.5">Upload scanned receipts to tax software.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: scan immediately after receiving anything important. The "I will scan it later" pile becomes a permanent pile.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
