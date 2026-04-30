import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorVolunteerOpportunities() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Volunteer Opportunities | TekSure" description="Find meaningful volunteer work as a senior. AmeriCorps Seniors, RSVP, Foster Grandparents, more." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Volunteer Opportunities</h1>
          <p className="text-lg text-muted-foreground">Make a difference. Find purpose.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why volunteer?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sense of purpose in retirement.</li>
              <li>Stay socially connected.</li>
              <li>Use lifetime of skills.</li>
              <li>Help your community.</li>
              <li>Reduces depression risk.</li>
              <li>Many programs even pay small stipend.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AmeriCorps Seniors (RSVP)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Federal program — Retired + Senior Volunteer Program.</li>
              <li>For seniors 55+.</li>
              <li>Match with local nonprofit needs.</li>
              <li>Volunteer 20–40 hours/week or less.</li>
              <li>Some receive stipend (income-eligible).</li>
              <li>Find at AmericorpsSeniors.gov.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Foster Grandparents</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mentor at-risk children.</li>
              <li>15–40 hours/week in schools or daycare.</li>
              <li>Income-qualified — small tax-free stipend.</li>
              <li>Health insurance possible if eligible.</li>
              <li>Background check required.</li>
              <li>Profoundly meaningful work.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior Companion Program</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Help homebound elderly adults.</li>
              <li>Companionship + transportation + errands.</li>
              <li>15–40 hours/week.</li>
              <li>Stipend for income-qualified volunteers.</li>
              <li>Mileage reimbursement.</li>
              <li>Other low-income seniors served.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">VolunteerMatch + Idealist</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search by zip code + interest.</li>
              <li>Filter for seniors-only opportunities.</li>
              <li>One-time or ongoing commitments.</li>
              <li>Both completely free to use.</li>
              <li>Includes virtual volunteering options.</li>
              <li>Most comprehensive databases.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Specific opportunities</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>SCORE — mentor small business owners.</li>
              <li>Hospital volunteering — info desk, escorts.</li>
              <li>Library volunteer — reading programs.</li>
              <li>Meals on Wheels driver.</li>
              <li>National parks volunteer host.</li>
              <li>Habitat for Humanity build sites.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Foster Grandparents = life-changing</h3>
            <p className="text-sm text-muted-foreground">Of all volunteer programs, Foster Grandparents may be the most rewarding for seniors who love children. You spend hours each week being a stable, loving presence for at-risk kids. Many seniors describe it as the most meaningful work of their lives. The small stipend covers transportation. Visit AmericorpsSeniors.gov to find a local Foster Grandparents program near you.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
