import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FolderOpen } from 'lucide-react';

export default function EstateOrganizingAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Estate Organizing Apps for Seniors | TekSure" description="Organize estate documents digitally. Senior estate organization apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FolderOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Estate Organizing</h1>
          <p className="text-lg text-muted-foreground">Documents for after.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Trustworthy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$10/month.</li><li>Family-friendly UI.</li><li>Lists all accounts.</li><li>Passwords for executor.</li><li>Senior peace of mind.</li><li>Recommended.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Everplans</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$80/year.</li><li>Comprehensive estate.</li><li>Wishes + accounts.</li><li>Send to executor.</li><li>Senior thorough.</li><li>Free trial.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free option</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Spreadsheet.</li><li>List accounts.</li><li>Where docs are.</li><li>Print + safe.</li><li>Free.</li><li>Senior simple.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What to include</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bank accounts.</li><li>Investment accounts.</li><li>Insurance.</li><li>Property deeds.</li><li>Login passwords.</li><li>Senior comprehensive.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Update yearly</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Birthdays good time.</li><li>Tax time too.</li><li>New accounts added.</li><li>Old removed.</li><li>Senior current data.</li><li>Family will thank.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tell executor</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Where to find.</li><li>Master password.</li><li>Trustworthy person.</li><li>Don&apos;t hide.</li><li>Senior burden lifted.</li><li>Family gift.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Estate doc gift to family</h3><p className="text-sm text-muted-foreground">When senior passes, family scrambles for accounts, passwords, deeds. Estate organizing app ($80/year Everplans) or simple spreadsheet = gift to family. Saves months of grief detective work. Senior most loving final gift. Don&apos;t skip.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
