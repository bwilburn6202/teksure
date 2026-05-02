import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function SeniorKhanAcademy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Khan Academy for Seniors — Senior Guide" description="Free education on any topic with Khan Academy." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Khan Academy</h1>
          <p className="text-lg text-muted-foreground">Free classes on any subject.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Always free</h2><p>Non-profit funded. App or khanacademy.org. Sign up optional.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Math</h2><p>From basic arithmetic to calculus. Helpful if you're tutoring grandkids.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. History</h2><p>World history, US history, art history. Hours of free video lessons.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Personal finance</h2><p>Stocks, retirement, mortgages explained simply. Great refresher.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Computer basics</h2><p>How computers work. Internet history. Plain-English lessons.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Khanmigo AI</h2><p>$4/month. AI tutor that answers questions. Excellent for learning new topics.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Each video is 5-15 minutes. Easy to fit one or two into your day.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
