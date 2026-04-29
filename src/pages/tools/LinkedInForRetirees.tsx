import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function LinkedInForRetirees() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="LinkedIn for Retirees | TekSure" description="Network for second careers. Plain-English LinkedIn guide for senior professionals." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">LinkedIn for Retirees</h1>
          <p className="text-lg text-muted-foreground">Network. Consult. Mentor. Stay connected.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why retiree LinkedIn</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Find consulting clients.</li>
              <li>Mentor younger professionals.</li>
              <li>Stay connected to industry.</li>
              <li>Job hunt for second career.</li>
              <li>Learn industry news.</li>
              <li>Reconnect old colleagues.</li>
              <li>FREE base account.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Profile essentials</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Professional headshot (no selfies).</li>
              <li>Headline: &quot;Retired CEO seeking consulting&quot; etc.</li>
              <li>About section: 2-3 paragraphs of value you offer.</li>
              <li>Full work history (not just current).</li>
              <li>Skills + endorsements.</li>
              <li>Recommendations from former colleagues.</li>
              <li>Updated yearly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior advantages</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Decades of experience.</li>
              <li>Wide network = doors open.</li>
              <li>Industry credibility.</li>
              <li>&quot;Open to work&quot; status — recruiters reach out.</li>
              <li>Premium ($30/mo) — InMail to anyone.</li>
              <li>Free messaging within your network.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free vs Premium</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Free</strong> — most people fine.</li>
              <li><strong>Career ($30/mo)</strong> — for active job hunting.</li>
              <li><strong>Business ($60/mo)</strong> — sales/recruiting.</li>
              <li>Free 30-day trial available.</li>
              <li>Most retirees fine with free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cryptocurrency &quot;opportunities&quot; = scams.</li>
              <li>Romance scammers reach out.</li>
              <li>Recruiters asking for SSN before job offer = scam.</li>
              <li>Job offers that pay too well = scam.</li>
              <li>Verify any &quot;recruiter&quot; before sharing info.</li>
              <li>Don&apos;t connect with strangers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Build your reputation</h3>
            <p className="text-sm text-muted-foreground">Post 2-4x/month: industry insights, articles you read, life advice. Comment thoughtfully. Engage. Build slowly. 6 months = following grows. 1 year = clients/opportunities come to you. Many retirees find consulting clients via LinkedIn.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
