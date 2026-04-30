import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TreePine } from 'lucide-react';

export default function FamilySearchFreeApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="FamilySearch Free Genealogy for Seniors | TekSure" description="Build your family tree completely free with FamilySearch. The largest free genealogy resource." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TreePine className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">FamilySearch</h1>
          <p className="text-lg text-muted-foreground">100% free genealogy. The biggest secret.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why this is amazing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Completely free — no subscription, ever.</li>
              <li>Run by The Church of Jesus Christ of Latter-day Saints.</li>
              <li>Don&apos;t have to be Mormon to use it.</li>
              <li>Largest genealogy database in the world.</li>
              <li>Billions of records — birth, marriage, death, census.</li>
              <li>Used by Ancestry.com itself for some records.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to start</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to FamilySearch.org or download app.</li>
              <li>Create free account — email + password.</li>
              <li>Start with yourself, add parents.</li>
              <li>Add what you know — birth dates, places.</li>
              <li>App suggests records to attach.</li>
              <li>Tree grows surprisingly fast.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Records available</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>US Census records 1790–1950.</li>
              <li>Birth, marriage, death certificates.</li>
              <li>Military records.</li>
              <li>Immigration records.</li>
              <li>Church records from around the world.</li>
              <li>Yearbooks, city directories, more.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">FamilySearch + Ancestry</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FamilySearch users get free Ancestry.com discounted.</li>
              <li>Free FamilySearch Center access at LDS churches.</li>
              <li>Free access to paid sites at FamilySearch Centers.</li>
              <li>Includes Newspapers.com, Findmypast, others.</li>
              <li>Basically free $50+/month resources.</li>
              <li>Find center: FamilySearch.org/centers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Memories feature</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Upload old family photos.</li>
              <li>Scan documents and store free.</li>
              <li>Record audio stories from elderly relatives.</li>
              <li>Tag people in photos.</li>
              <li>Family members can contribute.</li>
              <li>Becomes shared family digital archive.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For tech-novice seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many local libraries offer free FamilySearch help.</li>
              <li>FamilySearch Centers — free in-person help.</li>
              <li>Volunteer experts answer questions.</li>
              <li>YouTube tutorials — search &quot;FamilySearch beginners.&quot;</li>
              <li>Active forums for help.</li>
              <li>Genealogical societies often host classes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Skip Ancestry — start here</h3>
            <p className="text-sm text-muted-foreground">If you&apos;re considering Ancestry.com&apos;s $30+/month subscription, try FamilySearch first. The basic family tree functionality is identical, the records are similar, and it costs nothing. Many genealogists use both — FamilySearch for the free database, Ancestry for DNA matching. Save your money for an AncestryDNA test ($99) instead of monthly fees.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
