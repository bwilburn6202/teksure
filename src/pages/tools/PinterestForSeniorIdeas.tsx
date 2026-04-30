import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bookmark } from 'lucide-react';

export default function PinterestForSeniorIdeas() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pinterest for Senior Idea Boards | TekSure" description="Pinterest for seniors — recipe ideas, garden plans, craft inspiration." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bookmark className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pinterest</h1>
          <p className="text-lg text-muted-foreground">Idea collection + visual inspiration.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What Pinterest does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Save ideas as &quot;pins&quot; to boards.</li>
              <li>Visual search engine.</li>
              <li>Free.</li>
              <li>Beautiful images.</li>
              <li>500 million users.</li>
              <li>Senior-popular for inspiration.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best uses for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Recipe collections.</li>
              <li>Garden planning ideas.</li>
              <li>Craft inspiration.</li>
              <li>Travel destinations.</li>
              <li>Home decor.</li>
              <li>Holiday decoration ideas.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Build boards</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Create boards by topic.</li>
              <li>&quot;Christmas Cookies&quot; board.</li>
              <li>&quot;Garden Plans 2026.&quot;</li>
              <li>&quot;Bucket List Trips.&quot;</li>
              <li>Save pins for later.</li>
              <li>Share boards with friends.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Search visually</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Take photo of object.</li>
              <li>Pinterest Lens finds similar.</li>
              <li>&quot;Where can I find shoes like these?&quot;</li>
              <li>&quot;What is this flower?&quot;</li>
              <li>Inspires DIY projects.</li>
              <li>Magic for visual learners.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-popular boards</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Quilt patterns.</li>
              <li>Knitting projects.</li>
              <li>Holiday cards.</li>
              <li>Garden veggies.</li>
              <li>Family photo display ideas.</li>
              <li>RV upgrades.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid distraction</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pinterest can be addictive.</li>
              <li>Set daily time limit.</li>
              <li>Pin with intent — for actual projects.</li>
              <li>Don&apos;t hoard pins you&apos;ll never use.</li>
              <li>Action vs aspirational pinning.</li>
              <li>Use what you save.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Inspiration on tap</h3>
            <p className="text-sm text-muted-foreground">Pinterest is wonderful for visual inspiration. Plan your garden, find new recipes, design holiday cards, organize travel dreams. Free, beautiful, useful. Just don&apos;t spend hours pinning things you&apos;ll never make. Set 30-minute daily limit. Use what you save.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
