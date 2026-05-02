import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorAmazonHouseholdShare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amazon Household for Seniors — TekSure" description="Share Prime, Audible, Kindle books with family — free Amazon Household." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Amazon Household</h1>
          <p className="text-lg text-muted-foreground">Free Prime sharing.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What you can share</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Prime shipping</li><li>Prime Video</li><li>Prime Reading</li><li>Audible audiobooks</li><li>Kindle books</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup</h2><p>Amazon → Account → Amazon Household → Add Adult. Send invite via email.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">2 adults max</h2><p>Plus up to 4 teens. Adults share Prime. Teens approved-only purchases.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Privacy</h2><p>Don&apos;t share payment if you don&apos;t want family seeing your purchases.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Save $139/year</h2><p>Two Prime memberships normally. Family Sharing = one membership shared.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Books and audiobooks</h2><p>Buy once, both can read/listen forever.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Set this up with your spouse first. Saves $139/year immediately.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
