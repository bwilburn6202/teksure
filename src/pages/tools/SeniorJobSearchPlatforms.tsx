import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function SeniorJobSearchPlatforms() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Job Search Platforms | TekSure" description="Best job search sites for seniors. Part-time, remote, and senior-friendly employers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Job Search</h1>
          <p className="text-lg text-muted-foreground">Find work that fits your retirement.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why work in retirement?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Extra income for fixed budget.</li>
              <li>Stay mentally active.</li>
              <li>Social connection.</li>
              <li>Sense of purpose.</li>
              <li>Use skills you spent decades building.</li>
              <li>Many seniors say it&apos;s their best work yet.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-focused job sites</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>RetirementJobs.com — vetted senior-friendly employers.</li>
              <li>RetiredBrains.com — part-time + flexible jobs.</li>
              <li>AARP Job Board — searchable senior listings.</li>
              <li>Workforce50.com — over-50 specialized.</li>
              <li>YourEncore.com — STEM consulting for retired professionals.</li>
              <li>All free to use.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mainstream sites that work</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Indeed — largest job search.</li>
              <li>LinkedIn — professional network + jobs.</li>
              <li>Glassdoor — salary research + reviews.</li>
              <li>FlexJobs — flexible/remote, $14.95/month.</li>
              <li>ZipRecruiter — get matched with jobs.</li>
              <li>Use senior-keyword filter on these.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly employers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Home Depot, Lowe&apos;s — value experience.</li>
              <li>National parks — visitor centers, seasonal.</li>
              <li>H+R Block — seasonal tax preparation.</li>
              <li>UPS — package handling + driving.</li>
              <li>Government — federal, state, local often age-friendly.</li>
              <li>Substitute teaching — varies by district.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Remote work options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Customer service phone reps — many remote.</li>
              <li>Tutoring online — Wyzant, VIPKid.</li>
              <li>Bookkeeping for small businesses.</li>
              <li>Writing + editing — Upwork, Reedsy.</li>
              <li>Virtual assistant — Belay, Fancy Hands.</li>
              <li>Survey work — small extra income.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Resume tips for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Limit work history to last 15 years.</li>
              <li>Don&apos;t list graduation year.</li>
              <li>Show technology skills (email, video calls, basic apps).</li>
              <li>Emphasize transferable skills.</li>
              <li>Keep to 1–2 pages.</li>
              <li>AARP offers free resume reviews.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with AARP Job Board</h3>
            <p className="text-sm text-muted-foreground">If you&apos;re considering returning to work, start at AARP&apos;s Job Board (jobs.aarp.org). Listings are pre-vetted as senior-friendly — companies that have committed to age-inclusive hiring. RetirementJobs.com is the next best stop. Both are free. Browse without committing — see what&apos;s out there. Many retirees find part-time work that suits their lifestyle perfectly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
