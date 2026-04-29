import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function USAJobsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="USAJobs for Senior Job Seekers | TekSure" description="Federal jobs for retirees + seniors. Plain-English USAJobs.gov guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">USAJobs for Seniors</h1>
          <p className="text-lg text-muted-foreground">Federal jobs welcome older workers.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior-friendly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NO age discrimination (illegal).</li>
              <li>Many roles done remote.</li>
              <li>Pension benefits add to retirement.</li>
              <li>Health insurance for retirees.</li>
              <li>Many seasonal options.</li>
              <li>Vet preference for hiring.</li>
              <li>Older workers in demand for stability.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-favorite federal jobs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Census taker</strong> — every 10 years (next 2030).</li>
              <li><strong>National Park ranger / interpreter</strong> — seasonal.</li>
              <li><strong>VA hospital roles</strong>.</li>
              <li><strong>Postal Service</strong>.</li>
              <li><strong>IRS seasonal help</strong> — tax season.</li>
              <li><strong>Social Security Administration</strong>.</li>
              <li><strong>Federal student loan servicing</strong>.</li>
              <li><strong>Department of Veterans Affairs</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sign up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>USAJobs.gov — free.</li>
              <li>Login.gov account.</li>
              <li>Create resume on site (different format).</li>
              <li>Search by location, type, schedule.</li>
              <li>&quot;Open to public&quot; — most.</li>
              <li>Save favorites + get alerts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Federal hiring tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Read job description CAREFULLY — match keywords.</li>
              <li>Federal resumes longer + more detail than corporate.</li>
              <li>Veteran preference — list military service.</li>
              <li>Schedule A — disabled hiring track.</li>
              <li>Background check process slow (3-12 months).</li>
              <li>Apply to MANY — federal hiring competitive.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other senior job sites</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>RetiredBrains</strong> — senior-specific.</li>
              <li><strong>FlexJobs</strong> ($14/mo) — vetted remote.</li>
              <li><strong>Workforce50</strong> — 50+ focused.</li>
              <li><strong>AARP Job Board</strong> — older workers.</li>
              <li><strong>Idealist.org</strong> — nonprofit jobs.</li>
              <li><strong>State employment offices</strong> — local.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">SCSEP program</h3>
            <p className="text-sm text-muted-foreground"><strong>Senior Community Service Employment Program (SCSEP)</strong> — federal program for low-income 55+. Paid training jobs. Often $7-15/hr part-time. Supports while job hunting. Apply at local Employer Solutions Center or 1-855-241-7227.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
