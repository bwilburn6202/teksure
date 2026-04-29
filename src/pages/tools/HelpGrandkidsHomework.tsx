import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function HelpGrandkidsHomework() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Help Grandkids with Homework — Google Classroom for Grandparents | TekSure" description="Watching grandkids? Plain-English guide to Google Classroom, Schoology, ChatGPT for homework, and the apps schools actually use." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Help Grandkids with Homework</h1>
          <p className="text-lg text-muted-foreground">School tech in 2026, in plain English.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps schools actually use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Google Classroom</strong> — most US K-12 schools. The kid logs into classroom.google.com and sees assignments.</li>
              <li><strong>Schoology / Canvas / Blackboard</strong> — what it\'s called varies by school district.</li>
              <li><strong>Microsoft Teams for Education</strong> — used by some schools.</li>
              <li><strong>PowerSchool</strong> — for grades and attendance. Parents log in for report cards.</li>
              <li><strong>SeeSaw</strong> — common in elementary. Photos and videos of student work.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Helping a grandkid</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Ask the kid (or their parent) "what app do you use for school?"</li>
              <li>Sit with them at their device. Let them open it — they know how.</li>
              <li>Find the assignment (usually says due date and instructions).</li>
              <li>Read the instructions WITH the kid. "What\'s the question really asking?"</li>
              <li>Help them think it through — don\'t do it for them. The goal is they learn.</li>
              <li>If you\'re lost on the math (it has changed!) — search YouTube for "[topic] explained" — Khan Academy is excellent.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free resources for any subject</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Khan Academy</strong> — free, K-12 + college. Math, science, English, history. Best free homework helper.</li>
              <li><strong>Crash Course (YouTube)</strong> — short, funny, accurate videos on every subject.</li>
              <li><strong>NoRedInk</strong> — grammar and writing practice.</li>
              <li><strong>Duolingo</strong> — language homework.</li>
              <li><strong>Photomath</strong> — kid takes a photo of a math problem; app shows step-by-step. Use as a TEACHING tool, not a cheat.</li>
              <li><strong>SparkNotes</strong> — book summaries (last-resort study guide).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AI and homework — a tricky topic</h2>
            <p className="text-sm mb-2">ChatGPT and other AI tools can write essays. Most schools forbid using them for assignments — and detect them. But AI is great for:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Explaining concepts ("What does photosynthesis mean? Explain like I\'m 10.").</li>
              <li>Generating practice problems.</li>
              <li>Brainstorming ideas (then the kid writes their own version).</li>
              <li>Checking their work AFTER they\'ve done it.</li>
            </ul>
            <p className="text-sm mt-2">Talk to the parent about what\'s allowed before using AI.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Library card unlocks more</h3>
            <p className="text-sm text-muted-foreground">Most US public libraries provide FREE access to <strong>Brainfuse / HelpNow</strong> — real human tutors available evenings, K-college. Saves hundreds in tutoring fees.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
