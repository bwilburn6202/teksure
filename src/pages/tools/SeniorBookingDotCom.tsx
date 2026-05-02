import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hotel } from 'lucide-react';

export default function SeniorBookingDotCom() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Booking.com for Seniors — TekSure" description="Find hotel deals safely on Booking.com — senior tips and warnings." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hotel className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Booking.com for Seniors</h1>
          <p className="text-lg text-muted-foreground">Hotel deals worldwide.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free</h2><p>Free app and website. Compare prices in 2 minutes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free cancellation</h2><p>Filter for &ldquo;free cancellation&rdquo; — change plans without penalty.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Read reviews</h2><p>Filter by &ldquo;Solo travelers&rdquo; or &ldquo;Older couples&rdquo; for senior-relevant feedback.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Genius rewards</h2><p>Free. Sign up — automatic 10-15% discounts after a few stays.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior watch-outs</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Hidden resort fees</li><li>Stairs without elevator</li><li>Far-from-airport &ldquo;deals&rdquo;</li><li>Photos different from reality</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Alternatives</h2><p>Hotels.com, Expedia, AARP travel discounts. Compare 2-3 sites.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Book directly with hotel after seeing Booking.com price. Often matches and includes loyalty perks.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
