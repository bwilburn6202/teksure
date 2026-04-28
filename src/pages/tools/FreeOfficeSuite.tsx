import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, ChevronRight, ExternalLink } from 'lucide-react';

interface Suite {
  name: string;
  cost: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  link: string;
}

const SUITES: Suite[] = [
  {
    name: 'Google Docs / Sheets / Slides',
    cost: 'Free with a Google account (15GB free storage)',
    pros: [
      'Auto-saves every keystroke — never lose work.',
      'Share a document, multiple people edit together live.',
      'Works on any computer or phone with a browser.',
      'Opens Word, Excel, PowerPoint files; saves back as the same.',
    ],
    cons: [
      'Less polished than Microsoft Office for advanced formatting.',
      'Free 15GB shared with Gmail and Google Photos — fills up.',
    ],
    bestFor: 'Most people. Real-time collaboration. Anyone with Gmail.',
    link: 'https://docs.google.com',
  },
  {
    name: 'Apple Pages / Numbers / Keynote',
    cost: 'Free on every Mac, iPhone, iPad',
    pros: [
      'Already installed — no download needed.',
      'Beautiful templates.',
      'iCloud collaboration (same as Google Docs but for Apple users).',
      'Best on Apple devices — works less well in browsers on Android/Windows.',
    ],
    cons: [
      'Mac-first — Windows users can use it through icloud.com but it is awkward.',
      'Smaller user base — sharing a Pages file with non-Apple friends often confuses them.',
    ],
    bestFor: 'Apple-house users. Beautiful design templates.',
    link: 'https://www.apple.com/iwork/',
  },
  {
    name: 'LibreOffice (download)',
    cost: 'Free, open-source',
    pros: [
      'Most like the old Microsoft Office (Word, Excel, PowerPoint clones).',
      'Works on Windows, Mac, Linux.',
      'Powerful for serious documents and spreadsheets.',
      'No account needed.',
    ],
    cons: [
      'Old-fashioned interface.',
      'No built-in collaboration like Google Docs.',
    ],
    bestFor: 'People migrating off old Microsoft Office, or doing serious offline work.',
    link: 'https://www.libreoffice.org',
  },
  {
    name: 'Microsoft 365 (subscription)',
    cost: '$10/mo personal, $13/mo family (6 users)',
    pros: [
      'The real Word, Excel, PowerPoint, Outlook.',
      'Family plan covers 6 people — way cheaper than individual.',
      '1TB OneDrive storage per user.',
    ],
    cons: [
      'Costs money.',
      'Subscription auto-renews.',
    ],
    bestFor: 'Anyone who needs full Microsoft Office (work, school, accountants).',
    link: 'https://www.microsoft.com/microsoft-365',
  },
  {
    name: 'Microsoft 365 Free (web)',
    cost: 'Free with a Microsoft account',
    pros: [
      'Real Word/Excel/PowerPoint in a browser — no download needed.',
      '5GB OneDrive free.',
      'Works on any computer including a Chromebook.',
    ],
    cons: [
      'Browser-only — slightly less powerful than the desktop apps.',
      'No mobile editing without going to the paid plan.',
    ],
    bestFor: 'People who want real Microsoft formatting without paying.',
    link: 'https://www.office.com',
  },
];

export default function FreeOfficeSuite() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Free Office Suite Picker"
        description="Skip the $100/year Microsoft Office subscription. Google Docs, Apple Pages, LibreOffice, and free Microsoft 365 web — compared in plain English."
        path="/tools/free-office-suite"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Free Office Suite Picker</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              You do not need to pay $100/year for Microsoft Office. Five free or near-free options compared.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Free Office Suite Picker' }]} />

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">For most people, the answer is Google Docs</p>
              <p className="text-xs text-muted-foreground">
                Free, works on every device, auto-saves, opens Word and Excel files. Unless you have a specific reason to use something else (Apple-only home, employer requires Microsoft), Google Docs handles 90% of what most home users do.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {(showAll ? SUITES : SUITES.slice(0, 3)).map(s => (
              <Card key={s.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{s.name}</p>
                    <Badge variant="outline">{s.cost}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {s.bestFor}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {s.pros.map((p, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{p}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {s.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                      </ul>
                    </div>
                  </div>

                  <a href={s.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    Visit / sign up <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (
              <Button variant="outline" onClick={() => setShowAll(true)}>Show all 5 options</Button>
            )}
          </div>

          <Card className="border-border">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A note about old .doc and .xls files</p>
              <p className="text-xs text-muted-foreground">
                Files made in Microsoft Office 2003 or earlier (.doc, .xls, .ppt) open fine in everything above. Modern .docx, .xlsx, .pptx open everywhere too. Saving back to .docx works in all options. So your old files are NOT trapped — you can switch any time.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/free-software" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Free Software</p>
                <p className="text-xs text-muted-foreground mt-0.5">More free alternatives.</p>
              </Link>
              <Link to="/tools/document-scanner-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Document Scanner</p>
                <p className="text-xs text-muted-foreground mt-0.5">Scan paper into your document app.</p>
              </Link>
              <Link to="/tools/library-power-pack" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Library Power Pack</p>
                <p className="text-xs text-muted-foreground mt-0.5">Free LinkedIn Learning courses on Office.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: write your important documents in Google Docs and download a copy as Word format whenever you need to send to someone using Microsoft Office.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
