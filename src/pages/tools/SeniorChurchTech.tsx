import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorChurchTech() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Church Tech for Seniors — TekSure" description="Watch church online — live streaming, Zoom prayer groups, online giving." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Church Tech for Seniors</h1>
          <p className="text-lg text-muted-foreground">Stay connected to faith.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Live streaming</h2><p>Most churches stream Sundays. Watch on phone, tablet, TV.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Online giving</h2><p>Tithe.ly, PushPay. Monthly automatic. No cash needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Zoom prayer groups</h2><p>Many churches host. Connect when can&apos;t attend.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">YouTube sermons</h2><p>FREE. Many famous pastors archived. Robert Schuller, Joel Osteen, etc.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Daily devotionals</h2><p>YouVersion Bible app. FREE. Reading plans.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When can&apos;t go</h2><p>Still part of community via tech. Don&apos;t feel isolated.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Cast church livestream to TV. Big screen. Family worship from home.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
