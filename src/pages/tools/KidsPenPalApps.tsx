import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

const APPS = [
  { name: 'Pen pal letters by mail', cost: 'Stamps', best: 'Old-school. Real letters from grandma = treasures kids keep.', good: 'Best traditional.' },
  { name: 'Postsnap / Touchnote', cost: '$3-5/postcard', best: 'Make postcard from photo on phone. They mail it to grandkid.', good: 'Best photo postcard.' },
  { name: 'StoryCorps', cost: 'FREE', best: 'Interview grandkid in app. Audio archived in Library of Congress.', good: 'Best for stories.' },
  { name: 'Caribu', cost: 'FREE / $5/mo Premium', best: 'Read books together over video. Built for grandparent-grandkid.', good: 'Best for reading.' },
  { name: 'Drawing/coloring through Paper Pals', cost: 'FREE', best: 'Send + receive coloring pages by mail. Build collection.', good: 'Best for ages 4-8.' },
];

export default function KidsPenPalApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pen Pal Apps for Grandparents + Grandkids | TekSure" description="Letters, video reading, postcards. Plain-English picks for staying connected with grandkids across distance." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grandparent Pen Pal Tools</h1>
          <p className="text-lg text-muted-foreground">Slow + intentional connection.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Real letter ideas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Birthday letters with photo from THAT year.</li>
              <li>Stories about parent at same age.</li>
              <li>Drawing prompts ("send me a picture of...").</li>
              <li>Stickers + small treasures (pressed flower, $1 bill, baseball card).</li>
              <li>Self-addressed stamped envelope to encourage reply.</li>
              <li>Different colored envelope every time.</li>
              <li>Use cursive — kids haven&apos;t seen it!</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Caribu (read together)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Free for grandparents + grandkids.</li>
              <li>1,000+ kids&apos; books in app.</li>
              <li>Both see the same page on screen.</li>
              <li>Read aloud, point at pictures, turn pages together.</li>
              <li>Recording mode — read book, send to grandkid to play whenever.</li>
              <li>Best app there is for "reading bedtime story" from 1,000 miles.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Mail beats text</h3>
            <p className="text-sm text-muted-foreground">A handwritten letter from grandma is found in adult kids&apos; boxes 30+ years later. Texts vanish. Real mail in this digital age = treasure. Send 1-2 a month per grandkid. Imperfect handwriting, real ink, real you. Worth far more than perfect typed words.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
