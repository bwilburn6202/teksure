import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function RetirementHobbyMonetize() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Monetize Your Hobby in Retirement | TekSure" description="Etsy, woodworking, photography. Plain-English picks for turning hobbies into modest retirement income." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Monetize Hobbies</h1>
          <p className="text-lg text-muted-foreground">Make $200-2,000/month doing what you love.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Etsy + handmade</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Knitting, quilts, woodworking, jewelry, painted signs.</li>
              <li>Etsy fees ~10% of sales.</li>
              <li>Best: niche + quality + good photos.</li>
              <li>Average successful seller: $200-1,500/month.</li>
              <li>Top sellers: $5,000+/month.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Photography</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Stock photos</strong> — Shutterstock, Getty. $0.30-3 per download.</li>
              <li><strong>Prints on Etsy / Society6</strong> — sell your photos as posters.</li>
              <li><strong>Local portrait sessions</strong> — families, seniors, pets. $100-300/session.</li>
              <li><strong>Real estate photography</strong> — $100-300/listing for agents.</li>
              <li><strong>School/sports/event photography</strong> — local market.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Writing + content</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Substack</strong> — your newsletter, free or paid. Some seniors make $1,000+/month writing about their expertise.</li>
              <li><strong>Blogging</strong> — niche topic, ad revenue + affiliate links.</li>
              <li><strong>Self-publish on Amazon Kindle</strong> — your memoir, expert book, family stories.</li>
              <li><strong>Ghostwriting</strong> — write for others. $0.10-1/word.</li>
              <li><strong>Local newspaper columns</strong> — many still pay for opinion + life pieces.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Teaching + coaching</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Outschool</strong> — teach kids online. $15-30/class. Your hobby = curriculum.</li>
              <li><strong>Skillshare / Udemy</strong> — pre-record courses. Earn passive royalties.</li>
              <li><strong>Local community center</strong> — teach in-person classes.</li>
              <li><strong>YouTube</strong> — monetize after 1,000 subscribers.</li>
              <li><strong>SCORE volunteer mentor</strong> — turns into paid consulting later for some.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Selling physical things</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Farmers market</strong> — baked goods, jam, eggs, plants. Hyper-local.</li>
              <li><strong>Garage sales / estate sales</strong> — paid to organize for others.</li>
              <li><strong>Antiques + flipping</strong> — eBay, Mercari. Use your knowledge.</li>
              <li><strong>Fresh produce</strong> — small CSA garden share.</li>
              <li><strong>Honey / beekeeping</strong> — small but loyal market.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Tax + Social Security</h3>
            <p className="text-sm text-muted-foreground">Income from hobby = self-employment. File Schedule C. Pay self-employment tax (15.3%). Earnings before age 67 may reduce Social Security if over $22,320/yr. Check with CPA. Many hobbies stay under that.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
