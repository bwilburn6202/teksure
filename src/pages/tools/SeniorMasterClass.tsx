import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function SeniorMasterClass() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="MasterClass for Seniors — Senior Guide" description="Learn from the world's best with MasterClass." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Star className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">MasterClass</h1>
          <p className="text-lg text-muted-foreground">Famous experts as teachers.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Subscription</h2><p>$15-23/month. Annual plan only. Try free trial first.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Famous teachers</h2><p>Gordon Ramsay teaches cooking. Annie Leibovitz teaches photography. Real big names.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Watch on TV</h2><p>App for Apple TV, Roku, Fire TV. Cast from phone too.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Workbook</h2><p>Each class has PDF workbooks. Helpful for cooking, writing, photography classes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Senior interests</h2><p>Cooking with Wolfgang Puck. Gardening with Ron Finley. Writing with Margaret Atwood.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Cancel reminder</h2><p>Set a phone calendar reminder before annual renewal. Easy to forget.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Watch with grandkids. Many classes lead to fun shared activities.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
