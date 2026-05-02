import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorAudioBookClubs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Audio Book Clubs — Senior Guide" description="Join an online book club for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Book Clubs</h1>
          <p className="text-lg text-muted-foreground">Read together — anywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Goodreads</h2><p>Free book club. Track what you read. Discuss with others.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Library book clubs</h2><p>Most libraries host monthly online clubs. Free and welcoming.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Reese's Book Club</h2><p>Active online community. Reese Witherspoon picks. Subscribe via her app.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Oprah's Book Club</h2><p>Free at oprahdaily.com. Long-form discussions.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Senior centers</h2><p>Many senior centers run hybrid book clubs. Some online, some in person.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Family book club</h2><p>Pick a book with kids/grandkids. Great way to stay connected across distances.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Audiobooks count. Listen while gardening or driving. Same discussion afterward.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
