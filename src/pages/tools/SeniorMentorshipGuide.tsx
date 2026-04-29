import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function SeniorMentorshipGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Mentorship Guide | TekSure" description="Share your career experience. Plain-English guide to mentor opportunities for retirees." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Mentorship</h1>
          <p className="text-lg text-muted-foreground">Your decades of experience = priceless to others.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why mentor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sense of purpose — proven longevity boost.</li>
              <li>Mental sharpness — teaching = learning.</li>
              <li>Cross-generational friendships.</li>
              <li>Pass on what mattered in your career.</li>
              <li>Combat loneliness.</li>
              <li>Often virtual — no commute.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Career mentoring</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>SCORE</strong> — mentor small business owners. score.org. FREE.</li>
              <li><strong>MicroMentor</strong> — virtual entrepreneurship mentoring.</li>
              <li><strong>Encore.org</strong> — senior career-second-act roles.</li>
              <li><strong>LinkedIn Career Advice</strong> — mentor younger professionals.</li>
              <li><strong>Industry alumni networks</strong> — your old company often has retiree groups.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Youth mentoring</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Big Brothers Big Sisters</strong> — kids who need adult role model.</li>
              <li><strong>Foster Grandparents Program</strong> — Senior Corps. Stipend offered.</li>
              <li><strong>Eldera</strong> — virtual mentoring with kids worldwide.</li>
              <li><strong>School volunteer</strong> — local elementary reading buddies.</li>
              <li><strong>4-H Cooperative Extension</strong> — life skills + agricultural mentoring.</li>
              <li><strong>Boy/Girl Scouts</strong> — troop leader.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tech-based mentoring</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Senior Corps RSVP — flexible volunteer matches.</li>
              <li>Tech-savvy seniors teaching less-tech seniors at libraries.</li>
              <li>Skype-A-Scientist — share STEM career with classrooms.</li>
              <li>Wisdom Keepers — record life stories for archive.</li>
              <li>Storyworth — annual subscription captures your stories.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior Corps</h3>
            <p className="text-sm text-muted-foreground">Federal program, AmeriCorpsSeniors.gov. Three tracks: <strong>Foster Grandparents</strong> (work with kids), <strong>Senior Companions</strong> (help other seniors), <strong>RSVP</strong> (flexible volunteer matching). All FREE training. Some pay small stipends. Your purpose, redefined.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
