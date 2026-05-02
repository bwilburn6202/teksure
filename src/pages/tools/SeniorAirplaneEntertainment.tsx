import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function SeniorAirplaneEntertainment() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Airplane Entertainment — Senior Guide" description="Make long flights more enjoyable." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Airplane Entertainment</h1>
          <p className="text-lg text-muted-foreground">Make long flights enjoyable.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Download offline</h2><p>Netflix, Hulu, Audible — download shows at home before flight. Watch without Wi-Fi.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Kindle library</h2><p>Borrow library books before flight. Read offline.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Noise canceling headphones</h2><p>Bose or Sony. $300+ but pays off in comfort. Sleep through engine noise.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Offline games</h2><p>Solitaire, Sudoku, Wordle archive. Pre-download crossword apps.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Battery pack</h2><p>$30 portable battery doubles your phone life. Long flights need it.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Airline Wi-Fi</h2><p>Most charge $8-25. Worth it for messages but skip if just watching.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Always download more than you think — flights get bumped, layovers happen.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
