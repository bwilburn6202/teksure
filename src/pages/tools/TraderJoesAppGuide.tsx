import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';

export default function TraderJoesAppGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Trader Joe&apos;s App Guide | TekSure" description="The official Trader Joe&apos;s app + best community apps. Plain-English guide for senior shoppers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Apple className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Trader Joe&apos;s App Guide</h1>
          <p className="text-lg text-muted-foreground">Master the cult favorite store.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Official Trader Joe&apos;s app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free.</li>
              <li>Searchable product list — find before you go.</li>
              <li>Recipes using TJ&apos;s products.</li>
              <li>What&apos;s new this week.</li>
              <li>Store locator + hours.</li>
              <li>NO online ordering or delivery (TJ&apos;s doesn&apos;t do it).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why TJ&apos;s for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smaller stores = less walking.</li>
              <li>Friendly staff who answer questions.</li>
              <li>Many ready-made meals — perfect for 1-2 person households.</li>
              <li>Pre-cut produce — saves chopping.</li>
              <li>Single-portion proteins.</li>
              <li>Affordable wine + flowers.</li>
              <li>No-questions return policy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-favorite TJ&apos;s products</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mandarin Orange Chicken</strong> — frozen. Restaurant-quality.</li>
              <li><strong>Vegetable Bird&apos;s Nest tempura</strong>.</li>
              <li><strong>Single-serve frozen meals</strong> — many senior-portion.</li>
              <li><strong>"Just Chicken" broth + sliced</strong>.</li>
              <li><strong>Salads</strong> — pre-made, well-portioned.</li>
              <li><strong>$5 wine</strong> — better than most $15 grocery wines.</li>
              <li><strong>Flowers</strong> — fresh, cheap.</li>
              <li><strong>Frozen rice + cauliflower rice</strong> — pre-cooked.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free perks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free coffee samples — daily.</li>
              <li>Free product samples — daily.</li>
              <li>Free + flowers near checkout.</li>
              <li>Free crew help loading car.</li>
              <li>Free balloons for kids.</li>
              <li>Friendly conversations — built-in social time.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Avoid app-only fads</h3>
            <p className="text-sm text-muted-foreground">3rd-party "TJ&apos;s tracker" apps come and go. Stick with official + r/TraderJoes on Reddit. Reddit community shows new products + reviews fastest. Free + senior-friendly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
