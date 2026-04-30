import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkle } from 'lucide-react';

export default function RavelryForKnitters() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ravelry for Senior Knitters | TekSure" description="The Facebook for knitters + crocheters. Ravelry community for senior fiber arts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ravelry</h1>
          <p className="text-lg text-muted-foreground">Knitting + crocheting community.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Ravelry?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free social network for knitters + crocheters.</li>
              <li>9 million users.</li>
              <li>Browse 1.5 million patterns.</li>
              <li>Track your projects + yarn stash.</li>
              <li>Connect with other crafters.</li>
              <li>Buy patterns from designers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find patterns</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search by yarn weight, type, skill level.</li>
              <li>Many free patterns.</li>
              <li>Paid patterns $3–$10.</li>
              <li>Filter for projects you have yarn for.</li>
              <li>Read project notes from other knitters.</li>
              <li>See finished examples.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Track your projects</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photo journal of finished pieces.</li>
              <li>Timeline of crafting.</li>
              <li>Notes for each project.</li>
              <li>Yarn used + needle size.</li>
              <li>Modifications made.</li>
              <li>Build personal portfolio.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Yarn stash management</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Track yarn you own.</li>
              <li>By type, color, weight.</li>
              <li>Find patterns matching your stash.</li>
              <li>Avoid duplicate purchases.</li>
              <li>Many seniors love this organization.</li>
              <li>Photos of yarn included.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Forums + groups</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1,000+ knitting groups.</li>
              <li>By location, technique, project type.</li>
              <li>Senior knitters groups available.</li>
              <li>Knit-along events.</li>
              <li>Charity knitting groups.</li>
              <li>Make new friends.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior accessibility</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adjustable text size.</li>
              <li>Print patterns large for easier reading.</li>
              <li>Large clear photos.</li>
              <li>Filter for accessible patterns.</li>
              <li>YouTube tutorials abundant.</li>
              <li>Knit-Companion app pairs with Ravelry.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free + irreplaceable</h3>
            <p className="text-sm text-muted-foreground">If you knit or crochet, Ravelry is irreplaceable. Free signup, 1.5 million patterns (many free), community of millions, project tracking. The best resource for any fiber arts crafter. Many senior knitters say Ravelry transformed their craft from solitary hobby to vibrant community. Sign up at Ravelry.com.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
