import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

export default function PinterestForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pinterest for Seniors | TekSure" description="Visual idea board. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Image className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pinterest</h1>
          <p className="text-lg text-muted-foreground">Save ideas. Plan projects.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Pinterest?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Visual bookmarks online.</li>
              <li>&quot;Pin&quot; pictures + ideas.</li>
              <li>Organize into &quot;boards&quot;.</li>
              <li>FREE.</li>
              <li>Less drama than Facebook.</li>
              <li>Senior-favorite for hobbies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Recipe collection.</li>
              <li>Garden ideas.</li>
              <li>Knitting / crochet patterns.</li>
              <li>Home decor inspiration.</li>
              <li>Travel destinations.</li>
              <li>Quotes + memes.</li>
              <li>Family tree research.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sign up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to pinterest.com.</li>
              <li>Or download app.</li>
              <li>Sign up with email.</li>
              <li>Free forever.</li>
              <li>Pick interests when prompted.</li>
              <li>Customizes your feed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Make boards</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Recipes&quot; board.</li>
              <li>&quot;Garden&quot; board.</li>
              <li>&quot;Christmas Crafts&quot;.</li>
              <li>&quot;Travel Bucket List&quot;.</li>
              <li>Pin from any website.</li>
              <li>Share with family.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Search smart</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;easy chicken recipes&quot;.</li>
              <li>&quot;senior-friendly garden&quot;.</li>
              <li>&quot;arthritis exercises&quot;.</li>
              <li>&quot;short hairstyles 60+&quot;.</li>
              <li>Endless inspiration.</li>
              <li>Pin to save for later.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior cautions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pinterest can lead to scammy sites.</li>
              <li>Read recipes BEFORE clicking.</li>
              <li>Some &quot;sponsored&quot; pins are ads.</li>
              <li>Save what works — discard rest.</li>
              <li>Time-sucking — set timer.</li>
              <li>Don&apos;t share private info.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Family Pinterest</h3>
            <p className="text-sm text-muted-foreground">Share &quot;Family Recipes&quot; board with siblings. Shared &quot;Garden Plans&quot; with spouse. &quot;Anniversary Trip&quot; collaborative board. Family Christmas planning. Photos + ideas in one place. Better than Facebook for organizing. Free + senior-friendly. Many seniors find Pinterest most enjoyable social media.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
