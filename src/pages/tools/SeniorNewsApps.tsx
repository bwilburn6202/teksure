import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Newspaper } from 'lucide-react';

export default function SeniorNewsApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="News Apps for Seniors — TekSure" description="Trustworthy news apps for seniors — Apple News, AP, Reuters, NPR." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Newspaper className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">News Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Trustworthy. Easy to read.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AP News</h2><p>FREE. Associated Press. No spin. Most factual.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reuters</h2><p>FREE. International news. Same factual focus.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">NPR</h2><p>FREE. Audio + text. Listen during walks.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple News</h2><p>FREE basic. $13/month for Apple News+ — 300 magazines + WSJ, LA Times.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Local news</h2><p>Search &ldquo;[Your City] news&rdquo; in App Store. Local TV stations have apps.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Avoid</h2><p>Apps that make you angry. News that gets emotional reactions sells more ads.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Read 2-3 different sources. Compare what they cover differently.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
