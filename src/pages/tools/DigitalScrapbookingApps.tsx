import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

export default function DigitalScrapbookingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Scrapbooking Apps for Seniors | TekSure" description="Best apps for digital scrapbooking. Preserve memories without paper, glue, or scissors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Image className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Scrapbooking</h1>
          <p className="text-lg text-muted-foreground">All the joy of scrapbooks. None of the mess.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why go digital?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No more paper, glue, scissors, mess.</li>
              <li>Easier on hands and eyesight.</li>
              <li>Backup — never lost in fire or flood.</li>
              <li>Easy to share with family.</li>
              <li>Print or keep digital — your choice.</li>
              <li>Can update + edit anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best apps for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Project Life — popular scrapbooking app.</li>
              <li>Mosaic — auto-creates beautiful pages.</li>
              <li>Canva — flexible, free, lots of templates.</li>
              <li>FotoJet — drag-and-drop scrapbook designs.</li>
              <li>Shutterfly — built-in scrapbook templates.</li>
              <li>All have free options to start.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Project Life — designed for scrapbookers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Made by scrapbookers for scrapbookers.</li>
              <li>Pre-designed page layouts.</li>
              <li>Templates with photo + journal spots.</li>
              <li>$3.99/month or free with limits.</li>
              <li>Print pages or assemble physical book.</li>
              <li>Active community for ideas.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mosaic — easiest</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pick 20 photos — Mosaic designs the book.</li>
              <li>$25 + shipping — printed within days.</li>
              <li>Almost no work required.</li>
              <li>App walks through every step.</li>
              <li>Hardcover photo books delivered.</li>
              <li>Great gift books made fast.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Print options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Home printer — basic page printing.</li>
              <li>FedEx Office — better quality prints.</li>
              <li>Costco Photo Center — best price.</li>
              <li>Order printed scrapbook pages, assemble in album.</li>
              <li>Or order full hardcover book.</li>
              <li>Photo paper or matte cardstock.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Combining digital + physical</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Print pages, slide into 3-ring album.</li>
              <li>Add real items — ticket stubs, pressed flowers.</li>
              <li>Best of both — digital ease, physical keepsake.</li>
              <li>Easier on aging hands than full paper crafts.</li>
              <li>Share digital version with family.</li>
              <li>Keep physical in your home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with Mosaic for first book</h3>
            <p className="text-sm text-muted-foreground">If you&apos;ve never made a scrapbook digitally, Mosaic is the easiest entry point. The app walks you through picking 20 photos, then designs and prints a hardcover book. After your first one, you can graduate to more flexible tools like Canva or Project Life. Many seniors love the lower physical effort while keeping the creative joy of scrapbooking.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
