import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

export default function AcademicSearchSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Academic Search for Senior Researchers | TekSure" description="Free academic search engines for senior research interests. JSTOR, Google Scholar, more." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Search className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Academic Research</h1>
          <p className="text-lg text-muted-foreground">Free research databases.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Google Scholar</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free Google search for academic papers.</li>
              <li>scholar.google.com.</li>
              <li>Many papers free PDF.</li>
              <li>Search any topic.</li>
              <li>Citation tracking.</li>
              <li>Best free academic tool.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">JSTOR</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free 100 articles/month.</li>
              <li>Sign up at JSTOR.org.</li>
              <li>Humanities + social sciences focus.</li>
              <li>Decades of journals.</li>
              <li>Often through library card.</li>
              <li>Quality scholarly content.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Library access</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Public library cards = free database access.</li>
              <li>Often EBSCO, ProQuest.</li>
              <li>Worth $hundreds in subscriptions.</li>
              <li>Ask reference librarian.</li>
              <li>Online access from home.</li>
              <li>Best library benefit unknown to most.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">PubMed</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free medical research database.</li>
              <li>Search any health topic.</li>
              <li>Clinical trials + meta-analyses.</li>
              <li>Helpful before doctor visits.</li>
              <li>NIH-maintained.</li>
              <li>Senior health-research go-to.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Wikipedia caveats</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free + comprehensive.</li>
              <li>Quality varies.</li>
              <li>Check footnotes for sources.</li>
              <li>Peer-reviewed cited articles best.</li>
              <li>Starting point not endpoint.</li>
              <li>Verify across multiple sources.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Newspapers archives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Newspapers.com — historical newspapers.</li>
              <li>Often via library subscription.</li>
              <li>Genealogy research.</li>
              <li>Historical events research.</li>
              <li>Read what people read 50+ years ago.</li>
              <li>Time machine experience.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Library card unlocks scholarship</h3>
            <p className="text-sm text-muted-foreground">If you have intellectual curiosity, your library card is gold. Free access to academic databases worth $hundreds. JSTOR, EBSCO, ProQuest, often Newspapers.com. Ask reference librarian for tour. Many seniors discover lifelong learning via these databases. Free, plentiful, accurate.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
