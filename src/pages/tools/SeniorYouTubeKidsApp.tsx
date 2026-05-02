import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

export default function SeniorYouTubeKidsApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="YouTube Kids for Grandkids — Senior Guide" description="Safe video app for visiting grandkids." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Play className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">YouTube Kids</h1>
          <p className="text-lg text-muted-foreground">Safe videos for grandchildren visits.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free</h2><p>YouTube Kids in App Store. Filtered for children. No comments.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Pick age range</h2><p>Preschool, Younger, Older. Filters videos appropriately.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Approved channels</h2><p>Only allow specific channels. PBS Kids, Sesame Street, Bluey.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Timer</h2><p>Settings, Timer. Set 30 minutes. App pauses when done.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Block content</h2><p>If something inappropriate slips through, tap menu, Block.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Cast to TV</h2><p>Tap cast icon. Bigger screen. Better for older eyes too.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Talk with parents about screen rules. Match what kids do at home.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
