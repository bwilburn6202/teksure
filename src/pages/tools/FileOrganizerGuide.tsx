import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { FolderTree, Folder, CheckCircle, Copy, Download, ExternalLink, Users, Briefcase, Home, Heart } from 'lucide-react';

interface Persona {
  id: string;
  name: string;
  icon: typeof Users;
  description: string;
  folders: FolderDef[];
  tips: string[];
}

interface FolderDef {
  name: string;
  subfolders?: string[];
  description: string;
}

const PERSONAS: Persona[] = [
  {
    id: 'retiree',
    name: 'Retiree / Simple Home',
    icon: Home,
    description: 'Simple structure for personal documents, photos, and household records.',
    folders: [
      { name: 'Documents', subfolders: ['Medical', 'Taxes', 'Insurance', 'Legal', 'Travel'], description: 'Important papers, receipts, and official documents.' },
      { name: 'Photos', subfolders: ['2024', '2025', '2026', 'Favorites'], description: 'Photos organized by year — easier than by event.' },
      { name: 'Family', subfolders: ['Grandkids', 'Recipes', 'Memories'], description: 'Shared family content worth keeping.' },
      { name: 'Finances', subfolders: ['Bills', 'Statements', 'Receipts'], description: 'Month-by-month financial records.' },
      { name: 'Archive', description: 'Old stuff you don\'t need often but don\'t want to delete.' },
    ],
    tips: [
      'Use year-based folders for photos — much easier than remembering event names.',
      'Tax folders: one per year. Keep 7 years, delete older.',
      'Scan paper documents as you get them. A folder called "to scan" is the first step.',
      'Back up to the cloud (iCloud, Google One, Dropbox) — external drives fail.',
    ],
  },
  {
    id: 'family',
    name: 'Family with Kids',
    icon: Users,
    description: 'For parents juggling kids\' documents, school forms, and family records.',
    folders: [
      { name: 'Kids', subfolders: ['School', 'Medical', 'Activities', 'Art'], description: 'One subfolder per child if you have multiple kids.' },
      { name: 'Household', subfolders: ['Home', 'Car', 'Utilities', 'Insurance'], description: 'House and vehicle paperwork, utility bills.' },
      { name: 'Finances', subfolders: ['Taxes', 'Bills', 'Investments', 'Benefits'], description: 'Year-based subfolders inside each.' },
      { name: 'Medical', subfolders: ['Records', 'Prescriptions', 'Insurance Claims'], description: 'Family medical history.' },
      { name: 'Photos', subfolders: ['Year-Month format: 2026-04'], description: 'Use YYYY-MM format for automatic sorting.' },
      { name: 'Archive', description: 'Old documents you might need for reference.' },
    ],
    tips: [
      'Use YYYY-MM format for photo folders (e.g. "2026-04 Easter") — automatically sorts chronologically.',
      'Each kid gets their own subfolder under "Kids" — makes school year cleanup easy.',
      'Share a family cloud folder (Google Drive, iCloud Family) for things both parents need.',
      'Scan school art and reports monthly — they pile up fast.',
    ],
  },
  {
    id: 'professional',
    name: 'Professional / Freelancer',
    icon: Briefcase,
    description: 'Client-based structure for work documents, invoices, and projects.',
    folders: [
      { name: 'Clients', subfolders: ['Active clients', 'Completed', 'Prospects'], description: 'One folder per client with their own subfolders.' },
      { name: 'Business', subfolders: ['Contracts', 'Invoices', 'Taxes', 'Expenses'], description: 'Financial and legal business documents.' },
      { name: 'Templates', subfolders: ['Proposals', 'Contracts', 'Email'], description: 'Reusable documents you modify for each client.' },
      { name: 'Projects', subfolders: ['Year-based: 2026, 2025'], description: 'Non-client projects (portfolio, side work).' },
      { name: 'References', subfolders: ['Research', 'Inspiration', 'Learning'], description: 'Materials you reference but don\'t own.' },
      { name: 'Personal', description: 'Keep personal stuff separate from business.' },
    ],
    tips: [
      'Client folders: FirstName-LastName or CompanyName. Avoid special characters.',
      'Inside each client: Contracts, Deliverables, Invoices, Communications.',
      'Archive completed clients after 2 years — don\'t delete, just move to "Completed".',
      'Keep 7 years of tax and invoice records for IRS audit purposes.',
    ],
  },
  {
    id: 'caregiver',
    name: 'Caregiver / Helping Aging Parent',
    icon: Heart,
    description: 'For managing documents for a parent or loved one you care for.',
    folders: [
      { name: 'Medical', subfolders: ['Doctors', 'Medications', 'Test Results', 'Insurance', 'Pharmacy'], description: 'Healthcare records, appointment summaries, Rx list.' },
      { name: 'Legal', subfolders: ['Will', 'POA', 'Healthcare Directive', 'Estate'], description: 'Power of attorney, advance directives, legal docs.' },
      { name: 'Finances', subfolders: ['Accounts', 'Bills', 'Taxes', 'Benefits'], description: 'Bank accounts, monthly bills, SSA, Medicare, pension.' },
      { name: 'Housing', subfolders: ['Home', 'Utilities', 'Care Facility'], description: 'Home maintenance, lease, or care facility contracts.' },
      { name: 'Contacts', description: 'Doctors, neighbors, family, lawyer, financial advisor contact list.' },
      { name: 'Care Log', description: 'Daily/weekly notes on health, mood, concerns.' },
    ],
    tips: [
      'Keep a "Go Bag" folder with scanned copies of ID, insurance card, medication list — for ER visits.',
      'Share with siblings via a cloud folder so everyone can see updates.',
      'A "Contacts" sheet at the top level is invaluable — doctors, pharmacy, insurance, etc.',
      'Scan prescriptions and lab results as you get them, don\'t wait.',
    ],
  },
];

function FolderTreeVisual({ folders }: { folders: FolderDef[] }) {
  return (
    <div className="font-mono text-sm space-y-2">
      {folders.map((f) => (
        <div key={f.name}>
          <div className="flex items-start gap-2">
            <Folder className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold">{f.name}</div>
              <div className="text-xs text-muted-foreground italic mb-1">{f.description}</div>
              {f.subfolders && (
                <div className="ml-4 space-y-1 text-xs text-muted-foreground">
                  {f.subfolders.map((s) => (
                    <div key={s} className="flex items-center gap-1.5">
                      <Folder className="w-3 h-3" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FileOrganizerGuide() {
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null);
  const [copied, setCopied] = useState(false);

  const copyStructure = () => {
    if (!selectedPersona) return;
    const text = selectedPersona.folders.map(f => {
      let out = `📁 ${f.name}\n   ${f.description}`;
      if (f.subfolders) out += '\n   ├─ ' + f.subfolders.join('\n   ├─ ');
      return out;
    }).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEOHead
        title="File Organizer Guide — Stop Losing Things on Your Computer"
        description="Pick your situation — retiree, parent, professional, or caregiver — and get a personalized folder structure for your computer or cloud storage."
        path="/tools/file-organizer-guide"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="flex items-center gap-2 mb-4">
              <FolderTree className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">Productivity</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">File Organizer Guide</h1>
            <p className="text-muted-foreground max-w-2xl">
              Never lose a document again. Pick the situation that fits your life and get a proven folder structure you can use on your computer, iCloud, Google Drive, or Dropbox.
            </p>
          </div>
        </section>

        <section className="container py-10 md:py-14">
          {!selectedPersona ? (
            <div>
              <h2 className="text-xl font-semibold mb-6">Which fits you best?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PERSONAS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <Card key={p.id} onClick={() => setSelectedPersona(p)}
                      className="cursor-pointer hover:border-primary transition-colors">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{p.name}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Card className="mt-8 bg-muted/30">
                <CardContent className="p-5">
                  <h3 className="font-semibold mb-3">Golden rules of file organization</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /><span><strong>Don\'t go too deep.</strong> 3 levels max. If you have to dig 5 folders deep, you\'ll never find it.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /><span><strong>Use dates in filenames for anything time-based.</strong> Format: "2026-04-15 Doctor Visit.pdf". Sorts automatically.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /><span><strong>One inbox folder.</strong> Everything goes into "Downloads" or "Inbox" first, then gets sorted once a week.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /><span><strong>Back up to the cloud.</strong> Hard drives fail, laptops get stolen. iCloud, Google One, OneDrive, Dropbox are all good.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /><span><strong>Purge yearly.</strong> Every January, go through last year and delete anything you don\'t need.</span></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div>
              <Button variant="ghost" size="sm" onClick={() => setSelectedPersona(null)} className="mb-6">
                ← Pick a different structure
              </Button>

              <h2 className="text-2xl font-bold mb-2">{selectedPersona.name}</h2>
              <p className="text-muted-foreground mb-6">{selectedPersona.description}</p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg">Recommended folder structure</h3>
                      <Button size="sm" variant="outline" onClick={copyStructure}>
                        <Copy className="w-3 h-3 mr-1" />
                        {copied ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>
                    <div className="p-4 rounded-md bg-muted/30 border border-border">
                      <FolderTreeVisual folders={selectedPersona.folders} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-5">
                    <h3 className="font-semibold mb-3">Tips for this setup</h3>
                    <ul className="space-y-2 text-sm">
                      {selectedPersona.tips.map((tip, i) => (
                        <li key={i} className="flex gap-2 text-muted-foreground">
                          <span className="text-primary mt-0.5">•</span>
                          <span className="leading-relaxed">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <Card><CardContent className="p-5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2"><Folder className="w-4 h-4" />On iCloud Drive</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">Finder → iCloud Drive → create each top-level folder → drag existing files in.</p>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://support.apple.com/en-us/HT204025" target="_blank" rel="noopener noreferrer">iCloud Drive Help <ExternalLink className="w-3 h-3 ml-1" /></a>
                  </Button>
                </CardContent></Card>
                <Card><CardContent className="p-5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2"><Folder className="w-4 h-4" />On Google Drive</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">drive.google.com → New → Folder → create each folder → drag files in.</p>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://support.google.com/drive/" target="_blank" rel="noopener noreferrer">Google Drive Help <ExternalLink className="w-3 h-3 ml-1" /></a>
                  </Button>
                </CardContent></Card>
                <Card><CardContent className="p-5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2"><Folder className="w-4 h-4" />On Dropbox</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">dropbox.com → Create → Folder → set up your top-level folders → move existing files.</p>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://help.dropbox.com/" target="_blank" rel="noopener noreferrer">Dropbox Help <ExternalLink className="w-3 h-3 ml-1" /></a>
                  </Button>
                </CardContent></Card>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
