import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function GoodreadsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Goodreads for Senior Readers | TekSure" description="Track books + find reads. Senior Goodreads guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Star className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Goodreads</h1>
          <p className="text-lg text-muted-foreground">Track + discover books.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it offers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free Amazon-owned.</li><li>Track books read.</li><li>Reviews + ratings.</li><li>Find similar books.</li><li>Senior reader social.</li><li>Recommendations.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Reading challenge</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Set yearly goal.</li><li>Track progress.</li><li>Senior motivation.</li><li>Compete friends.</li><li>Free.</li><li>Annual tradition.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Want to read</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Save list.</li><li>Library check Libby.</li><li>Buy if not.</li><li>Senior never forget recommendation.</li><li>Memory aid.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">StoryGraph alternative</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + paid.</li><li>Better mood matching.</li><li>Less Amazon-y.</li><li>Senior privacy.</li><li>Newer alternative.</li><li>Try both.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Book clubs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Find online book clubs.</li><li>Goodreads groups.</li><li>Discussion.</li><li>Senior community.</li><li>Free.</li><li>Make reading social.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Track over years.</li><li>Reflect on patterns.</li><li>Senior reading legacy.</li><li>Recommendations to grandkids.</li><li>Free always.</li><li>Build library list.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Goodreads = senior reading log</h3><p className="text-sm text-muted-foreground">Free Goodreads tracks senior books read over years. &quot;Want to read&quot; list never lose recommendations. Annual challenge motivates. Find similar books. Or StoryGraph privacy-focused alternative. Most senior reading enrichment app.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
