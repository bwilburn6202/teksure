import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ImageIcon } from 'lucide-react';

export default function PhotoOrganizationCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Photo Organization Coach — Tame 30 Years of Photos | TekSure" description="Phone has 20,000 photos? Let AI find faces, delete blurry duplicates, and group by person. Plain-English steps for iPhone and Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ImageIcon className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Photo Organization Coach</h1>
          <p className="text-lg text-muted-foreground">Make sense of your photo library — without spending a weekend.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📱 iPhone Photos magic</h2>
            <p className="font-semibold text-sm mt-2">Find duplicates (saves storage):</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
              <li>Photos app → Albums → scroll to "Utilities" section → "Duplicates".</li>
              <li>Tap "Merge" — keeps highest quality, deletes the rest.</li>
            </ol>
            <p className="font-semibold text-sm">Group by person:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
              <li>Albums → "People & Pets".</li>
              <li>iPhone has already grouped faces. Tap each → "Add Name".</li>
              <li>Now you can search "photos of Mom" — they all appear.</li>
            </ol>
            <p className="font-semibold text-sm">Search by anything:</p>
            <p className="text-sm">Type "beach" or "dog" or "Christmas 2019" in the search bar. iPhone reads photo content automatically.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🤖 Android — Google Photos magic</h2>
            <p className="font-semibold text-sm mt-2">Auto-organize:</p>
            <p className="text-sm mb-2">Google Photos automatically:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
              <li>Groups faces under "People". Tap → name them.</li>
              <li>Creates albums by trip / place.</li>
              <li>Suggests "Memories" of past photos.</li>
              <li>Search any word — "lake", "Sarah", "wedding".</li>
            </ul>
            <p className="font-semibold text-sm">Free up space:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Photos → Library → Utilities → "Free up space".</li>
              <li>Removes phone copies of photos already backed up to cloud.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Make shared albums for family</h2>
            <p className="text-sm mb-2">Best gift for grandparents who live far away:</p>
            <p className="font-semibold text-sm">iCloud (Apple users):</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
              <li>Photos → Albums → tap "+" → "New Shared Album".</li>
              <li>Name it ("Family Pics").</li>
              <li>Invite family by phone number or email.</li>
              <li>Everyone can add photos. Up to 5,000 per album.</li>
            </ol>
            <p className="font-semibold text-sm">Google Photos (cross-platform):</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Open Google Photos → Sharing → "Create new shared album".</li>
              <li>Add people. Works for iPhone AND Android users.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cleanup tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don\'t try to clean ALL photos. Pick one folder or one year per session.</li>
              <li>Use the "duplicates" feature first — easy wins, frees lots of space.</li>
              <li>Be ruthless on screenshots. If the website is gone, you don\'t need the screenshot.</li>
              <li>Burst photos (10 of the same dog jumping) — keep one or two.</li>
              <li>For OLD scanned photos — make a "Family Archive" album. Don\'t leave them mixed with everyday phone shots.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best time investment</h3>
            <p className="text-sm text-muted-foreground">Spend 30 minutes naming faces in iPhone Photos or Google Photos People. From then on, every photo is searchable by name. "Show me photos of Dad and Sarah from 2020" — done in 2 seconds, forever.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
