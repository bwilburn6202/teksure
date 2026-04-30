import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function AmazonKDPForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amazon KDP Self-Publishing for Seniors | TekSure" description="Self-publish your memoir, novel, or family book through Amazon. Free guide for senior writers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Amazon KDP</h1>
          <p className="text-lg text-muted-foreground">Self-publish for free. Write your book.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is KDP?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Kindle Direct Publishing — Amazon&apos;s self-publishing.</li>
              <li>Free to publish.</li>
              <li>Earn royalties on sales (35–70%).</li>
              <li>Print on demand — no inventory.</li>
              <li>eBook + paperback formats.</li>
              <li>Available in 14 marketplaces.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors should consider</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Print copies for family — cheaper than vanity press.</li>
              <li>Memoir for grandchildren.</li>
              <li>Novel you always wanted to write.</li>
              <li>Family cookbook.</li>
              <li>Photo book of your life.</li>
              <li>Hobby + small income source.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Process basics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Write book in Word or Google Docs.</li>
              <li>Format using KDP template.</li>
              <li>Design cover (Canva works) or hire designer.</li>
              <li>Upload to KDP — review preview.</li>
              <li>Set price.</li>
              <li>Publish — live in 24–72 hours.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Publishing — FREE.</li>
              <li>Optional cover designer — $50–$300.</li>
              <li>Optional editor — $200–$2,000.</li>
              <li>Author copies for family — print cost only.</li>
              <li>Often $5–$8 to print 200-page paperback.</li>
              <li>Cheaper than vanity press by far.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For family-only books</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Order author copies at print cost.</li>
              <li>Don&apos;t market or promote.</li>
              <li>Make 5–20 copies for family.</li>
              <li>Available on Amazon if family orders directly.</li>
              <li>Can set as &quot;not searchable&quot; in some cases.</li>
              <li>Nice family heirloom.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Help available</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>YouTube — &quot;KDP for beginners&quot; — many free guides.</li>
              <li>Reddit r/selfpublish — community help.</li>
              <li>Hire ghostwriter via Upwork if needed.</li>
              <li>KDP help docs comprehensive.</li>
              <li>Local library writing groups.</li>
              <li>Memoir-writing classes online.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Family heirloom for $50</h3>
            <p className="text-sm text-muted-foreground">Total cost to make a family memoir book on Amazon KDP: $0 to publish + maybe $50 in author copies for family. The book is professionally printed, available forever (your kids could order more copies in 30 years), and you have full creative control. Beats $2,000 vanity press by far. Worth the time investment for the family legacy.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
