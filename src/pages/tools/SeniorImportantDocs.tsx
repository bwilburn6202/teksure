import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FolderOpen } from 'lucide-react';

export default function SeniorImportantDocs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Document Organization for Seniors — TekSure" description="Organize will, deeds, insurance — what to keep, where, share with family." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FolderOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Important Documents</h1>
          <p className="text-lg text-muted-foreground">Organized = peace of mind.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Fireproof safe</h2><p>$50. Sentry SureSafe. Holds 100 documents. Critical purchases.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Keep in safe</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Will + healthcare directive</li><li>Birth + marriage certificates</li><li>Property deeds</li><li>Insurance policies</li><li>Passports</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tell family</h2><p>One trusted family member knows where safe is + combination.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Photo backups</h2><p>Take pics of all documents. Store in iCloud or Google Drive.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bank safe deposit</h2><p>$50/year. Originals safer. Family needs co-signer to access.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Five Wishes</h2><p>$5 form. Healthcare wishes documented.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 1 hour organizing documents now = months of family stress saved.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
