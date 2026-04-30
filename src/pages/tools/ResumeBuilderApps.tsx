import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

const APPS = [
  { name: 'Resume.io', cost: '$3-5/mo or one-time fee', best: 'Most polished templates. ATS-friendly (works with employer screening).', good: 'Best paid template-based.' },
  { name: 'Canva (free)', cost: 'FREE', best: 'Beautiful, free templates. Drag-and-drop design.', good: 'Best free design option.' },
  { name: 'Google Docs templates', cost: 'FREE', best: 'Google offers basic resume templates. Easy. Plain.', good: 'Best for simplicity.' },
  { name: 'Microsoft Word templates', cost: 'FREE in Office or Word.com', best: 'Templates inside Word. Polished.', good: 'Best if you have Office.' },
  { name: 'AARP Resume Advisor', cost: 'FREE for AARP members', best: 'Free professional review of your resume. AARP volunteers + paid pros.', good: 'Best free professional review for 50+.' },
  { name: 'TopResume / ZipJob', cost: '$200-500', best: 'Pay a real human writer to craft your resume.', good: 'Best for major career change or gap.' },
  { name: 'ChatGPT / Claude', cost: 'Free', best: '"Help me write a resume for a part-time bookkeeper position. Here\'s my work history: [paste]". Surprisingly good first draft.', good: 'Best for free help.' },
];

export default function ResumeBuilderApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Resume Builder Apps — Get a Job at 50, 60, 70+ | TekSure" description="Building a resume after 20+ years out of the market? Plain-English picks for resume builders, AI helpers, and AARP\'s free professional review." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Resume Builder Apps</h1>
          <p className="text-lg text-muted-foreground">Building a resume in 2025 — easier than you think.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Resume tips for 50+ workers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Limit to 1-2 pages</strong> — older workers don\'t need to list every job from 1985.</li>
              <li><strong>Show last 15 years</strong>. Earlier work goes in a brief "Earlier Career" section.</li>
              <li><strong>Skip graduation dates</strong> — protects from age discrimination.</li>
              <li><strong>Lead with achievements</strong>, not job duties. "Reduced billing errors 30%" beats "Handled billing".</li>
              <li><strong>Show technology comfort</strong> — list the software you know (Excel, Outlook, Zoom, etc.). Counters age stereotypes.</li>
              <li><strong>Modern, clean format</strong> — no ornate fonts. Sans-serif (Arial, Calibri).</li>
              <li><strong>Email address</strong> — use Gmail, not AOL or Yahoo (unfortunately, AOL signals age).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cover letter quick template</h2>
            <p className="text-sm">Use ChatGPT or Claude:</p>
            <p className="text-sm italic bg-muted/50 p-3 rounded mt-2">"Write a 1-page cover letter for a [job title] position at [company name]. My background: [brief work history]. Make it warm but professional."</p>
            <p className="text-sm mt-2">Edit to make it sound like you. Submit.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Job search tools paired</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>LinkedIn</strong> — must-have. Make a profile even if you don\'t intend to "social network".</li>
              <li><strong>Indeed</strong> — biggest job board.</li>
              <li><strong>AARP Job Board</strong> — age-friendly employers.</li>
              <li><strong>FlexJobs</strong> — remote work, paid subscription.</li>
              <li><strong>RetiredBrains.com</strong> — senior-specific listings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">AARP Resume Advisor — best free help</h3>
            <p className="text-sm text-muted-foreground">If you\'re an AARP member ($16/year), use the free Resume Advisor. They review your resume and give specific feedback. Volunteers are often retired HR professionals — exactly the right perspective for senior job-seekers.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
