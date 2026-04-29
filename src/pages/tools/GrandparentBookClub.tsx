import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function GrandparentBookClub() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grandparent + Grandkid Book Club | TekSure" description="Read the same book together across distance. Plain-English guide to running a 2-person book club with grandkids." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grandparent Book Club</h1>
          <p className="text-lg text-muted-foreground">Best monthly tradition you can start.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (5 min)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Pick a book together. Library + Libby app for free.</li>
              <li>Set monthly call — 3rd Sunday at 4 PM, etc.</li>
              <li>30 min — discuss favorite parts, predictions, what they remind you of.</li>
              <li>Pick next book together.</li>
              <li>Repeat.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Book picks by age</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>5-7</strong> — picture books: Frog and Toad, Mercy Watson series, Elephant &amp; Piggie.</li>
              <li><strong>8-10</strong> — Charlotte&apos;s Web, Mr. Popper&apos;s Penguins, Wayside School.</li>
              <li><strong>11-13</strong> — Percy Jackson, Wonder, A Wrinkle in Time, Wings of Fire.</li>
              <li><strong>14-17</strong> — Hunger Games, To Kill a Mockingbird, The Outsiders, Harry Potter.</li>
              <li><strong>Adult kids</strong> — pick from Reese&apos;s Book Club, NYT bestsellers, classics you both haven&apos;t read.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Discussion ideas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Favorite character + why.</li>
              <li>What surprised you?</li>
              <li>Did you predict the ending?</li>
              <li>What would you have done differently?</li>
              <li>What does this remind you of in real life?</li>
              <li>Did the book change your mind about anything?</li>
              <li>Best line / quote.</li>
              <li>Want to read more by this author?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tools to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Libby</strong> — free library audiobooks + ebooks.</li>
              <li><strong>Hoopla</strong> — second free library option.</li>
              <li><strong>Audiobook</strong> — listen during commute / chores.</li>
              <li><strong>Group chat</strong> — share favorite passages between meetings.</li>
              <li><strong>Goodreads</strong> — track books read together.</li>
              <li><strong>Caribu</strong> for younger kids — read aloud together over video.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">A grandkid memory</h3>
            <p className="text-sm text-muted-foreground">Adult grandkids overwhelmingly cite "reading with grandma" as a top childhood memory. Even one book club becomes a story they tell their own kids. Best gift — your time + attention + the book.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
