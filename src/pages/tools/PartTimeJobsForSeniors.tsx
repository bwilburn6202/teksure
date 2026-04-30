import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function PartTimeJobsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Part-Time Jobs for Seniors | TekSure" description="$15-30/hr part-time work for retirees. Plain-English picks for senior-friendly jobs that don&apos;t hurt your back or schedule." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Part-Time Jobs for Seniors</h1>
          <p className="text-lg text-muted-foreground">Stay active. Earn extra. On YOUR schedule.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best senior-friendly jobs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Library page / clerk</strong> — quiet, gentle, $15-22/hr.</li>
              <li><strong>School crossing guard</strong> — 2 hours/day, $15-25/hr.</li>
              <li><strong>School bus driver</strong> — $20-30/hr, training provided. Often medical benefits.</li>
              <li><strong>Tutor</strong> — $20-50/hr. Use your career experience.</li>
              <li><strong>Substitute teacher</strong> — $15-30/hr. Flexible.</li>
              <li><strong>Tax preparer</strong> — H&amp;R Block, Liberty Tax. Seasonal.</li>
              <li><strong>Hotel desk clerk</strong> — quiet shifts, $15-25/hr.</li>
              <li><strong>Park ranger / visitor center</strong> — outdoors + history.</li>
              <li><strong>National Park Camp Host</strong> — free RV site + small stipend.</li>
              <li><strong>Census worker</strong> — every 10 years. Decent pay.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Work-from-home options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bookkeeping</strong> — for small businesses, $20-50/hr.</li>
              <li><strong>Customer service</strong> — many companies hire remote (Apple, Amazon, Discover).</li>
              <li><strong>Tutoring online</strong> — VIPKid, Outschool, $15-30/hr.</li>
              <li><strong>Transcription</strong> — Rev.com, $0.30-1.10/audio min.</li>
              <li><strong>Online survey + research</strong> — UserTesting, $10/15-min test.</li>
              <li><strong>Virtual assistant</strong> — schedule, email, research for entrepreneurs.</li>
              <li><strong>Etsy seller</strong> — your hobby + craft.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior job sites</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>RetirementJobs.com</strong> — age-friendly employers.</li>
              <li><strong>Workforce50.com</strong> — same idea.</li>
              <li><strong>AARP Job Board</strong> — senior-friendly jobs.</li>
              <li><strong>Indeed</strong> + filter "part-time" + "from home".</li>
              <li><strong>FlexJobs</strong> ($15/mo) — vetted remote + flexible work.</li>
              <li><strong>SeniorService America</strong> — paid + training for low-income 55+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tax + Social Security impact</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Earnings before full retirement age (67) reduce SS benefits if over $22,320 (2025).</li>
              <li>After full retirement age — earn unlimited, no SS reduction.</li>
              <li>Working seniors still pay Social Security + Medicare tax.</li>
              <li>Earn Earned Income Tax Credit if income low enough.</li>
              <li>Some companies offer 401(k) match — if you have one, max it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best for staying social</h3>
            <p className="text-sm text-muted-foreground">For many retirees, part-time work is more about social connection than money. Library, school, hotel desk = built-in community. Picks that get you OUT and around people often beat pure work-from-home for happiness + longevity.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
