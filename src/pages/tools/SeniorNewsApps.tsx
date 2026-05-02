import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Newspaper } from 'lucide-react';

export default function SeniorNewsApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="News Apps for Seniors — Senior Guide" description="Stay informed with reliable news apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Newspaper className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">News Apps</h1>
          <p className="text-lg text-muted-foreground">Reliable news without overload.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Apple News</h2><p>Built into iPhone. Free with ads. $13/month for News+.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Google News</h2><p>Free. Personalized headlines. Skip topics you don't care about.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. NYT app</h2><p>$4-9/week. In-depth reporting. Crossword and games included.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. NPR</h2><p>Free. National Public Radio. Best for balanced reporting.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Local newspaper</h2><p>Search for your local paper's app. Often $10/month for full access.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Skip social media news</h2><p>Facebook and TikTok news has many fakes. Trust apps from real news outlets.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Set news limits. 30 minutes daily is plenty. More creates anxiety.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
