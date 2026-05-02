import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorReligiousTech() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Faith Apps for Seniors — TekSure" description="Bible, prayer, sermons — Bible app, Hallow, faith apps for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Faith Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Daily devotion. Connection.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bible by YouVersion</h2><p>FREE. Most popular Bible app. 2,000+ versions. Audio Bible.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hallow</h2><p>$70/year. Catholic prayer app. Rosary, daily Mass readings.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pray.com</h2><p>$50/year. Audio Bible stories. Christian meditations.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Quran.com</h2><p>FREE. Read or listen to the Quran. Multiple translations.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Daily Stoic</h2><p>FREE. Daily wisdom from ancient Stoic philosophers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Live streaming services</h2><p>Most churches stream Sunday services. Stay connected when you can&apos;t attend.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Audio Bible during walks combines exercise + faith. Many seniors love this.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
