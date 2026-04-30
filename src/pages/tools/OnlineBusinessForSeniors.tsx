import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';

export default function OnlineBusinessForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Start an Online Business as a Senior | TekSure" description="Etsy shop, consulting, online courses. Plain-English starter guide for senior-friendly online businesses." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Globe className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Business for Seniors</h1>
          <p className="text-lg text-muted-foreground">Low cost. Flexible. Legitimate.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best low-effort starts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Consulting in your career field</strong> — easiest. Existing network + expertise. $50-200/hr.</li>
              <li><strong>Etsy shop</strong> — your craft. Low overhead.</li>
              <li><strong>Online tutoring</strong> — career skills, retired teachers. $20-50/hr.</li>
              <li><strong>Substack newsletter</strong> — write about your expertise. Free or paid subscribers.</li>
              <li><strong>YouTube channel</strong> — your hobby + ads. Slow but compounding.</li>
              <li><strong>Bookkeeping</strong> — for small businesses. $20-50/hr from home.</li>
              <li><strong>Virtual assistant</strong> — schedule, email, research.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free starter tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Google Workspace</strong> — $7/mo. Email, docs, calendar.</li>
              <li><strong>Stripe / PayPal / Square</strong> — collect money. ~3% fee.</li>
              <li><strong>Square Free Website Builder</strong> — basic site free.</li>
              <li><strong>Wix / Squarespace</strong> — $15-30/mo for nicer site.</li>
              <li><strong>Canva</strong> — make logos + flyers free.</li>
              <li><strong>Zoom / Google Meet</strong> — video meetings free.</li>
              <li><strong>QuickBooks Self-Employed</strong> — $20/mo for taxes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>SCORE</strong> — free mentoring from retired executives. score.org.</li>
              <li><strong>SBA — Small Business Administration</strong> — free guides + training. sba.gov.</li>
              <li><strong>Local Small Business Development Center</strong> — free 1-on-1 advisors.</li>
              <li><strong>Senior Corp Volunteer Mentor Program</strong>.</li>
              <li><strong>Chamber of Commerce</strong> — networking + classes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Legal basics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Sole proprietor</strong> — simplest. Use your name, file Schedule C with taxes.</li>
              <li><strong>LLC</strong> — $50-300 to file in state. Personal asset protection. Recommended for serious business.</li>
              <li><strong>EIN</strong> — free at IRS.gov. Like SSN for business.</li>
              <li><strong>Business bank account</strong> — separate from personal.</li>
              <li><strong>Liability insurance</strong> — $300-1,000/yr depending on risk.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Realistic expectations</h3>
            <p className="text-sm text-muted-foreground">Most senior side businesses earn $200-2,000/month. Few become full-time replacements. That&apos;s OK. Goal isn&apos;t empire — it&apos;s mental engagement, supplemental income, and meaningful work. Expect 6-12 months before consistent income.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
