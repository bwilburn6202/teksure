import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorAdultDayCareTech() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Find Adult Day Care Online — TekSure" description="Find local adult day care, respite care, senior centers using online tools." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Find Adult Day Care</h1>
          <p className="text-lg text-muted-foreground">Online tools for finding local senior care.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Eldercare Locator</h2><p>FREE. eldercare.acl.gov. Find every Area Agency on Aging.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">A Place for Mom</h2><p>FREE. Helps locate adult day care, assisted living, memory care.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SeniorAdvisor.com</h2><p>FREE. Reviews of senior care facilities. Filter by location and price.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost</h2><p>Adult day care: $80/day average. Often Medicaid waiver covers it.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Veterans Aid &amp; Attendance</h2><p>Up to $2,300/month for veterans. va.gov.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">211 helpline</h2><p>Dial 211 from any phone. Free local resource help.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Tour at least 3 places. Visit at lunch — see how staff treats residents.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
