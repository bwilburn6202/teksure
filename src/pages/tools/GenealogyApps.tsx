import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TreeDeciduous } from 'lucide-react';

const APPS = [
  { name: 'FamilySearch (LDS Church)', cost: 'FREE forever', best: 'Largest free genealogy site in the world. 6+ billion records. Owned by the Church of Jesus Christ of Latter-day Saints, but free to all.', good: 'Best place to start. No subscription needed.' },
  { name: 'Ancestry', cost: '$25-50/month, free 14-day trial', best: 'Biggest commercial site. Best DNA matching with cousins. Most US census, immigration, military records.', good: 'Library subscription often free at your local library — ask the reference desk.' },
  { name: 'MyHeritage', cost: '$11-20/month', best: 'Biggest in Europe and Latin America. Strong photo enhancement and animation features ("Deep Nostalgia").', good: 'Often cheaper than Ancestry.' },
  { name: 'Findmypast', cost: '$15-30/month', best: 'Best for British and Irish records. Newspaper archives.', good: 'Worth it for UK heritage research.' },
  { name: 'Fold3', cost: '$8-13/month', best: 'Military records. Civil War to Vietnam.', good: 'Sub-product of Ancestry.' },
  { name: 'Newspapers.com', cost: '$10-20/month', best: 'Searchable archive of 23,000+ US newspapers from the 1700s on. Find obituaries, weddings, family events.', good: 'Often free with a Library card.' },
];

export default function GenealogyApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Genealogy Apps — Trace Your Family Tree | TekSure" description="FamilySearch is free. Ancestry has the most. MyHeritage is good for European roots. Plain-English guide to building your family tree online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TreeDeciduous className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Genealogy Apps</h1>
          <p className="text-lg text-muted-foreground">Discover your family\'s past. Often free through your library.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to start</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Sign up at <strong>familysearch.org</strong> (free).</li>
              <li>Add yourself, your parents, your grandparents — what you know.</li>
              <li>The site automatically searches its records. "Hints" appear suggesting matches.</li>
              <li>Tap each hint — verify it\'s your ancestor by checking dates and places.</li>
              <li>Add details and stories as you find them.</li>
              <li>Most people get back 4-5 generations within a weekend.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DNA testing — what to know</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AncestryDNA</strong> ($60-100) — best for finding US relatives.</li>
              <li><strong>23andMe</strong> ($100-200) — strong on health/medical info plus relatives.</li>
              <li><strong>MyHeritage DNA</strong> ($60-100) — best for European matches.</li>
              <li>Once tested, you can upload the raw DNA file to OTHER services for free — multiplies your matches.</li>
            </ul>
            <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Privacy note:</strong> DNA companies sometimes share aggregate data with researchers and law enforcement. Read the privacy policy. Many seniors are fine with this; some are not.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Library access (often FREE)</h2>
            <p className="text-sm mb-2">Most US public libraries offer free access to:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Ancestry Library Edition</strong> — usable free at the library or sometimes from home.</li>
              <li><strong>HeritageQuest</strong> — same idea.</li>
              <li><strong>Newspapers.com Library Edition</strong>.</li>
              <li><strong>FamilySearch Library Center</strong> — at your local library or LDS family history center.</li>
            </ul>
            <p className="text-sm mt-2">Call your library and ask "Do you offer Ancestry Library Edition?" Most do.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best gift for grandkids</h3>
            <p className="text-sm text-muted-foreground">A printed family tree, going back 4-5 generations, with photos and stories — printed as a hardcover book on Mixbook or Shutterfly. Most kids never know their great-great-grandparents\' names. You can change that in a weekend.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
