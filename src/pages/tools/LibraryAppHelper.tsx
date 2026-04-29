import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Sparkles } from 'lucide-react';

export default function LibraryAppHelper() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Libby & Hoopla — Free E-books, Audiobooks, Movies From Your Library | TekSure" description="Your library card unlocks thousands of free e-books, audiobooks, and movies on your phone or tablet. Plain-English setup for Libby and Hoopla." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Libby & Hoopla</h1>
          <p className="text-lg text-muted-foreground">Your library card. Thousands of free books and movies. On your phone.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Sparkles className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h2 className="font-bold mb-1">Best-kept secret in tech</h2>
                <p className="text-sm">Most US libraries pay for two free apps — <strong>Libby</strong> and <strong>Hoopla</strong> — that let you borrow e-books, audiobooks, and movies just like physical books. Brand-new releases. Free. Limited only by your library card.</p>
                <p className="text-sm mt-2">If you don't have a library card, signing up is free at any local library — and many libraries let you sign up online with proof of address.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📚 Libby — for e-books and audiobooks</h2>
            <p className="text-sm mb-3">Made by OverDrive. The cleanest, most popular library app.</p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Install <strong>Libby</strong> from the App Store or Play Store. Free, no ads.</li>
              <li>Open it. Tap "Yes" when it asks if you have a library card.</li>
              <li>Tap "Search For A Library". Type your zip code or library name.</li>
              <li>Pick your library from the list.</li>
              <li>Type your library card number (no dashes).</li>
              <li>You're in. Browse the catalog like a bookstore.</li>
              <li>Tap "Borrow" on any book — instant download. Read in the app, or send to a Kindle.</li>
            </ol>
            <div className="mt-3 bg-muted/50 p-3 rounded text-sm">
              <p><strong>Borrow limits:</strong> Most libraries let you have 5-10 books out at a time, for 14 or 21 days. Books "return" themselves automatically — no late fees, ever.</p>
              <p className="mt-1"><strong>Tip:</strong> Popular new releases have a hold list. Tap "Place Hold" — it'll be ready when it's your turn (often 2-8 weeks).</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🎬 Hoopla — for movies, TV, comics, and instant books</h2>
            <p className="text-sm mb-3">Different model — no holds, ever. Borrow up to a monthly limit.</p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Install <strong>Hoopla Digital</strong> from the App Store or Play Store.</li>
              <li>Tap "Sign up". Type your email and pick a password.</li>
              <li>Pick your library.</li>
              <li>Enter your library card number.</li>
              <li>Done. Browse movies, audiobooks, music, and comics.</li>
              <li>Tap "Borrow" — instant access. No waiting list ever.</li>
            </ol>
            <div className="mt-3 bg-muted/50 p-3 rounded text-sm">
              <p><strong>Monthly limit:</strong> Most libraries give you 5-10 borrows per month. Resets on the 1st.</p>
              <p className="mt-1"><strong>Best uses:</strong> Movies you can't find elsewhere, indie films, comic books for grandkids, audio versions of self-help books.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reading on a Kindle</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>In Libby, after you borrow a book — tap "Read with…" → "Kindle".</li>
              <li>It opens Amazon. Sign in with your Kindle account.</li>
              <li>Click "Get Library Book". The book lands on your Kindle automatically.</li>
              <li>It removes itself when the loan ends.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other free library apps to know</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Kanopy</strong> — free movies (often arthouse, documentaries). Limit usually 4-10 a month.</li>
              <li><strong>cloudLibrary</strong> — alternative e-book app some libraries use instead of Libby.</li>
              <li><strong>Flipster</strong> — free magazines.</li>
              <li><strong>RBdigital</strong> — newspapers and magazines.</li>
              <li><strong>Brainfuse</strong> — free tutoring (helps grandkids with homework).</li>
            </ul>
            <p className="text-sm mt-2">Check your library's website to see which they offer.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">No library card?</h3>
            <p className="text-sm text-muted-foreground">Walk into any local library with a photo ID and a piece of mail showing your address. Free. Takes 5 minutes. Many libraries also let you sign up online — search "[your city] library card application".</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
