import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Library } from 'lucide-react';

export default function KindleUnlimitedScribdReview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Kindle Unlimited vs Scribd vs Audible for Seniors | TekSure" description="Reading + audiobook subscriptions compared for senior readers. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Library className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Reading Subscriptions</h1>
          <p className="text-lg text-muted-foreground">All-you-can-read services compared.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Kindle Unlimited</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$11.99/month — unlimited from KU library.</li>
              <li>2 million+ books available.</li>
              <li>Read on Kindle device or app.</li>
              <li>Many bestsellers NOT included.</li>
              <li>Strong indie + romance + mystery selection.</li>
              <li>30-day free trial.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Scribd (Everand)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$11.99/month — books, audiobooks, magazines.</li>
              <li>Now called &quot;Everand&quot;.</li>
              <li>Larger bestseller selection than KU.</li>
              <li>NYT magazine, Time, more.</li>
              <li>Read on phone, tablet, computer.</li>
              <li>30-day free trial.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Audible (audiobooks)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$14.95/month — 1 audiobook credit + Audible Plus library.</li>
              <li>Premium Plus: $7.95/month for Plus library only.</li>
              <li>Great for car listening.</li>
              <li>Most extensive audiobook selection.</li>
              <li>Owned by Amazon.</li>
              <li>30-day free trial = 2 free books.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">FREE: Library + Libby</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Get library card — usually free.</li>
              <li>Download Libby app.</li>
              <li>Borrow ebooks + audiobooks free.</li>
              <li>Same titles available digitally.</li>
              <li>Hundreds of free titles available constantly.</li>
              <li>Some popular titles have wait lists.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hoopla — also free</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free with library card.</li>
              <li>No wait lists.</li>
              <li>Books, audiobooks, music, movies.</li>
              <li>Different selection than Libby.</li>
              <li>Limit: 4–10 borrows per month (varies by library).</li>
              <li>Both apps work together — best of both.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Which to choose?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heavy reader: Library + Libby (free) often enough.</li>
              <li>Audiobooks lover: Audible.</li>
              <li>Magazines + books: Scribd/Everand.</li>
              <li>Indie + niche fiction: Kindle Unlimited.</li>
              <li>Try free trials of all — pick your favorite.</li>
              <li>Most seniors fine with free library apps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try Libby first — it&apos;s free</h3>
            <p className="text-sm text-muted-foreground">Before paying $12/month for any service, get a library card and download Libby. Most seniors find the free library app provides plenty of reading material with zero cost. If you read 20+ books per month and find Libby&apos;s wait lists frustrating, then Kindle Unlimited makes sense. Audible is the only one truly worth paying for if you love audiobooks specifically.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
