import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TreeDeciduous } from 'lucide-react';

export default function GenealogyDeepDive() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Genealogy Deep Dive — Newspapers, Military, Census | TekSure" description="Beyond Ancestry. Plain-English guide to advanced genealogy resources — newspapers, military records, immigration, civil war, and free archives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TreeDeciduous className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Genealogy Deep Dive</h1>
          <p className="text-lg text-muted-foreground">Beyond Ancestry — military records, newspapers, ship manifests.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📰 Newspaper archives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Newspapers.com</strong> — 800M+ pages. $20-40/month. Find obituaries, weddings, family events.</li>
              <li><strong>Chronicling America (Library of Congress)</strong> — FREE. US newspapers 1777-1963. chroniclingamerica.loc.gov.</li>
              <li><strong>Newspaper Archive</strong> — 14,000+ papers. $20/month.</li>
              <li><strong>Your library\'s subscription to Newspapers.com</strong> — often FREE with library card.</li>
              <li><strong>State archives</strong> — search "[state name] historical newspapers".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🪖 Military records</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Fold3</strong> — military records 1700s-1990s. $90/year. Civil War extensive. WWI/WWII pension files.</li>
              <li><strong>National Archives (NARA)</strong> — request records FREE if 62+ years old at archives.gov.</li>
              <li><strong>Find A Grave</strong> — free cemetery records. Many veterans have headstone photos.</li>
              <li><strong>The American Civil War Museum</strong> records.</li>
              <li><strong>VA Records</strong> — for living veterans only.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📜 Census + immigration</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>FamilySearch (FREE)</strong> — all US censuses 1790-1950. Ship manifests, naturalization.</li>
              <li><strong>1950 Census</strong> — newly released, fully searchable. Find your parents/grandparents.</li>
              <li><strong>Ellis Island Foundation</strong> (libertyellisfoundation.org) — FREE. 25M passenger arrivals 1820-1957.</li>
              <li><strong>Castle Garden</strong> (castlegarden.org) — FREE. Pre-Ellis Island arrivals.</li>
              <li><strong>State naturalization records</strong> — many state archives have them digitized.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🧬 DNA + family connections</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AncestryDNA</strong> — biggest database, best US matches.</li>
              <li><strong>23andMe</strong> — strong on health + ethnicity.</li>
              <li><strong>MyHeritage DNA</strong> — best for European matches.</li>
              <li><strong>FamilyTreeDNA</strong> — strongest for Y-DNA (paternal line) and old-world Jewish matching.</li>
              <li>Upload your DNA file FREE to GEDmatch and DNA.land — find more matches.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📚 More free resources</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>HeritageQuest</strong> — Census + city directories. FREE through libraries.</li>
              <li><strong>USGenWeb</strong> — free state/county historical records.</li>
              <li><strong>Find A Grave</strong> — cemetery photos and records.</li>
              <li><strong>Cyndis List (cyndislist.com)</strong> — directory of every genealogy resource.</li>
              <li><strong>RootsWeb</strong> — old-school free message boards. Great for getting unstuck.</li>
              <li><strong>Local genealogical society</strong> — often have unique local records.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best research strategy</h3>
            <p className="text-sm text-muted-foreground">Start with FamilySearch (free) and FamilyTreeDNA (test). Add Newspapers.com via library subscription. For specific brick walls, post on the FamilySearch community or r/Genealogy on Reddit. Real volunteer experts answer.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
