import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function MicrosoftO365vsGoogle() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Microsoft 365 vs Google Workspace | TekSure" description="Pick the right office suite. Plain-English comparison for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Microsoft 365 vs Google</h1>
          <p className="text-lg text-muted-foreground">Both work. Different strengths.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Microsoft 365 Personal ($70/yr)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Full Word, Excel, PowerPoint, Outlook.</li>
              <li>1TB OneDrive cloud storage.</li>
              <li>Works offline (download apps).</li>
              <li>Best for: heavy document work.</li>
              <li>Family Plan $100/yr — share with 5 others.</li>
              <li>Senior favorite — familiar from work.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Google Workspace (FREE personal)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Gmail + Google Docs + Sheets + Slides + Drive.</li>
              <li>15GB free, $2/mo for 100GB, $3/mo for 200GB.</li>
              <li>Works in any browser.</li>
              <li>Auto-saves everything.</li>
              <li>Easier sharing/collaboration.</li>
              <li>Best for: simple needs, no install.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pick MS 365 if</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Used Word/Excel for 30+ years.</li>
              <li>Heavy spreadsheet work.</li>
              <li>PowerPoint presentations.</li>
              <li>Want desktop apps (offline).</li>
              <li>Track Changes for editing.</li>
              <li>Have lots of existing .docx/.xlsx files.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pick Google if</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Want everything free.</li>
              <li>Use Gmail already.</li>
              <li>Simple documents only.</li>
              <li>Collaborate with family on shared docs.</li>
              <li>Don&apos;t want software install.</li>
              <li>Use Chromebook (paired natively).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>LibreOffice</strong> — free, Microsoft Office compatible.</li>
              <li><strong>Microsoft Office Online</strong> — free web version.</li>
              <li><strong>iWork (Pages, Numbers, Keynote)</strong> — free on Apple devices.</li>
              <li><strong>Apache OpenOffice</strong> — older free alternative.</li>
              <li>Save $70/yr vs paid versions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Both share files easily</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Word .docx opens in Google Docs (and vice versa).</li>
              <li>Excel .xlsx opens in Google Sheets.</li>
              <li>Don&apos;t worry about &quot;wrong format.&quot;</li>
              <li>Email PDFs for max compatibility.</li>
              <li>Both export to PDF easily.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior pick</h3>
            <p className="text-sm text-muted-foreground">For most seniors: Google free if simple needs. M365 Personal $70/yr if Word/Excel native. M365 Family $100 = best deal — share 5 ways. Whichever you used at work feels easier. AARP sometimes offers M365 discount.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
